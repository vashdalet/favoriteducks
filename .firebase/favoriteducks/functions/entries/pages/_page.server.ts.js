import { a as adminDB } from "../../chunks/admin.js";
const load = async ({ locals }) => {
  const uid = locals.userID;
  const response = await fetch("https://random-d.uk/api/v2/random");
  const json = await response.json();
  const imgURL = json.url;
  const userRef = adminDB.collection("users").doc(uid);
  let user = (await userRef.get()).data();
  return {
    uid,
    imgURL,
    ducks: user.ducks
  };
};
const actions = {
  default: async ({ locals, request, params }) => {
    const uid = locals.userID;
    const data = await request.formData();
    const url = data.get("imgURL");
    const userRef = adminDB.collection("users").doc(uid);
    let user = (await userRef.get()).data();
    user.ducks.push(url);
    await userRef.update(user);
    console.log(user.ducks);
  }
};
export {
  actions,
  load
};
