import { adminAuth, adminDB } from '$lib/server/admin';
import { error, json } from '@sveltejs/kit'
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
    const { idToken } = await request.json();

    const expiresIn = 60 * 60 * 24 * 7 * 1000;

    const decodedIdToken = await adminAuth.verifyIdToken(idToken);

    if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
        const cookie = await adminAuth.createSessionCookie(idToken, {expiresIn});
        const options = { maxAge: expiresIn, httpOnly: true, secure: false, path: '/' };

        cookies.set('__session', cookie, options);

        const ref = adminDB.collection("users").doc(decodedIdToken.uid);
        if (!( await ref.get()).exists) {
            await ref.set({ducks: [], username: decodedIdToken.uid});
        }

        const refUsername = adminDB.collection("usernames").doc(decodedIdToken.uid);
        if(!(await refUsername.get()).exists) {
            await refUsername.set({uid: decodedIdToken.uid})
        }

        return json({ status: 'signedIn' });

    } else {
        throw error(401, 'Recent sign in required!')
    }
};

export const DELETE: RequestHandler = async ({ cookies }) => {
    cookies.delete('__session', {path: '/'});
    console.log("fuck dis coca")
    return json({ status: 'signedOut' });
};