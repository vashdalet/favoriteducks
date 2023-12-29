import { a as adminDB } from "./admin.js";
const handle = async ({ event, resolve }) => {
  let sessionCookie = event.cookies.get("userID");
  if (!sessionCookie) {
    const user = await adminDB.collection("users").add({ ducks: [] });
    const expiresIn = 60 * 60 * 24 * 30 * 1e3;
    const options = { maxAge: expiresIn, httpOnly: true, secure: false, path: "/" };
    event.cookies.set("userID", user.id, options);
    sessionCookie = user.id;
  }
  event.locals.userID = sessionCookie;
  return resolve(event);
};
export {
  handle
};
