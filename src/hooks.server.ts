import type { Handle } from "@sveltejs/kit";
import { adminDB } from "$lib/server/admin";

export const handle = (async ({ event, resolve }) => {
    let sessionCookie = event.cookies.get("__session");

    if (sessionCookie == null) {
        console.log(sessionCookie)
        const user = await adminDB.collection("users").add({ducks: []});
        const expiresIn = 60 * 60 * 24 * 30 * 1000;
        const options = { maxAge: expiresIn, httpOnly: true, secure: false, path: '/' };
        event.cookies.set("__session", user.id, options);
        sessionCookie = user.id;
    }
    
    event.locals.userID = sessionCookie;
    return resolve(event);

}) satisfies Handle; 