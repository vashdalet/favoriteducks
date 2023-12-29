import { adminDB } from '$lib/server/admin';
import type { PageServerLoad, Actions } from './$types';



export const load = (async ({ locals }) => {
    const uid = locals.userID;
    const response = await fetch('https://random-d.uk/api/v2/random');
    const json = await response.json();
    const imgURL = json.url;

    const userRef = adminDB.collection("users").doc(uid!);
    let user = (await userRef.get()).data()!;

    return {
        uid,
        imgURL,
        ducks: user.ducks
    };
}) satisfies PageServerLoad;

export const actions = {
    default: async ( { locals, request, params }) => {
        const uid = locals.userID;

        const data = await request.formData();
        const url = data.get('imgURL');

        const userRef = adminDB.collection("users").doc(uid!);
        let user = (await userRef.get()).data()!;
        
        user.ducks.push(url);

        await userRef.update(user);

        console.log(user.ducks)
    },
} satisfies Actions;


// export const load = (async ({ locals, params }) => {
    
//     const uid = locals.userID; 

//     if(!uid) {
//         throw redirect(301, "/login")
//     }

//     const userDoc = await adminDB.collection("users").doc(uid!).get();
//     const { username, bio } = userDoc.data()!;

//     if(params.username !== username) {
//         throw error(401, "That username does not belong to you");
//     }

//     return {
//         bio,
//     };

// }) satisfies PageServerLoad;