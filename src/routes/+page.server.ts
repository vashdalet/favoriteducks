import { adminDB } from '$lib/server/admin';
import type { PageServerLoad, Actions } from './$types';



export const load = (async ({ locals }) => {
    const uid = locals.userID;

    console.log(uid);

    const response = await fetch('https://random-d.uk/api/v2/random');
    const json = await response.json();
    const imgURL = json.url;

    let user = null;

    if (uid) {
        const userRef = adminDB.collection("users").doc(uid!);
        user = (await userRef.get()).data()!;
    }

    return {
        uid,
        imgURL,
        ducks: user?.ducks ?? [],
        username: user?.username
    };
}) satisfies PageServerLoad;

export const actions = {
    add: async ( { locals, request, params } ) => {
        const uid = locals.userID;

        const data = await request.formData();
        const url = data.get('imgURL');

        const userRef = adminDB.collection("users").doc(uid!);
        let user = (await userRef.get()).data()!;
        
        user.ducks.unshift(url);

        await userRef.update(user);
    },
    delete: async ( { locals, request } ) => {
        const uid = locals.userID;

        const data = await request.formData();
        const url = data.get('imgURL');

        const userRef = adminDB.collection("users").doc(uid!);
        let user = (await userRef.get()).data()!;

        const index = user.ducks.indexOf(url);
        
        if (index !== -1) {
            user.ducks.splice(index, 1);
            await userRef.update(user);
        }
    
    }
} satisfies Actions;




