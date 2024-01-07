import { adminDB } from '$lib/server/admin';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
    const username = params.username;

    const usernameDoc = await adminDB.collection("usernames").doc(username).get();
    const { uid } = usernameDoc.data()!;
    console.log(uid);

    if(!uid) {
        throw error(404, "That username does not exist");
    }

    const userDoc = await adminDB.collection("users").doc(uid!).get();
    const { ducks } = userDoc.data()!;

    return {
        ducks,
    };
}) satisfies PageServerLoad;