import { adminDB } from '$lib/server/admin';
import type { PageServerLoad, Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
    const uid = locals.userID;
    let user = null;

    if (uid) {
        const userRef = adminDB.collection("users").doc(uid!);
        user = (await userRef.get()).data()!;
    }

    return {
        uid,
        username: user?.username ?? ""
    };
}) satisfies PageServerLoad;


export const actions = {
    default: async ( { locals, request } ) => {
        const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

        const uid = locals.userID;
        let isAvailable = false;

        const data = await request.formData();
        const username = data.get('username') as string;

        let isValid = username?.length > 2 && username?.length < 16 && re.test(username);
        let isTouched = username?.length > 0;

        const ref = adminDB.collection("usernames").doc(username);
        const exists = ( await ref.get()).exists;

        if (!isValid || !isTouched) {
            throw error(400, "The username must be 3-16 characters long, alphanumeric only")
        }
        if (isValid && exists) {
            throw error(400, "This username is not available")
        }
        if (isValid && !exists)
        {
            const userRef = adminDB.collection("users").doc(uid!);
            let user = (await userRef.get()).data()!;

            const oldRef = adminDB.collection("usernames").doc(user.username);
            oldRef.delete()
        
            user.username = username;
            await userRef.update(user);


            ref.set( {uid: uid} )


            throw redirect(301, '/')
        }

    }
} satisfies Actions;