import { a as adminDB } from "../../../chunks/admin.js";
import { e as error } from "../../../chunks/index.js";
const load = async ({ params }) => {
  const uid = params.username;
  if (!uid) {
    throw error(404, "That username does not exist");
  }
  const userDoc = await adminDB.collection("users").doc(uid).get();
  const { ducks } = userDoc.data();
  return {
    ducks
  };
};
export {
  load
};
