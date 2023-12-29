import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "favoriteducks";
const FB_CLIENT_EMAIL = "firebase-adminsdk-6mjeh@favoriteducks.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDCb+OZe4tlRosx\nOejj40itVFXsQqjFqUUFyCOO7UwsUpa66Ur/C5T35Iy9FTmt4WHNozKUvr1K+N9C\n/1JHV4sfOmFoBIw44d3NJA186QB3y9hhKdslaP8RXuNTEAph2VI4xz6Yf9rYWdvp\nb24le753Jp6XTKY01C/aDkYerWoBjkRzBeGvW74r3A4U9ASvRxP4KK4Vrg9+woEd\nXO9svs1s67sWqWNsk39YRCG2+lXthbAhdaLGUZICPN1Dk07FOZHKJRWpmYex/gnx\nsjdWoBge113B+etb9XCBeL1BdLCBj1AFO5Jzjp10/cV+H8BKVceu8GTbuW1TOb0M\nJvDDBnXhAgMBAAECggEALZuKMwvAKErSRoMzZhT/jKyuFOOT6/1m89K8yH9P8UuU\nEJa9YTLJyBXjj0ylwWwPAWnI6QwOocHbuL7kAVj/CJ2skHYUoBkW6lINGeIbmn4F\nrNDhFxbYUa5Eu0yVattLhobx31qKLlpxk4FwQDmU9STpaUrw545oBQl5GCQMK/3W\njzvLde30I6NowHFgOkLQruouZv/5uUpRYuju5ej1T5kpCdh8IMRvTK2gvNyrx+fr\nCmjQOnhzadndGYiCI8qV35i5u8VBokUBSn/mJ9tkjg6X4lReb0VneR4YsjZkJ6US\nEFOaN19GiXO8RSqsRP7p73SLwf8qbPCiDCyyNeB5OwKBgQDvzd9a+GerqHdhS1Ur\nx987eDmQx3Koz4kD10kBgp58+48+QMxIUdhOtIODX+kTNnKTblPXtPFdJ4otdoX6\nocgpXxIjq47DTHYA/Bo2Ksbk7moRTBD5QVOTdeDZDGenzxb+V8EsXby7dr4Wb/p0\nYE4KpQpvV0W2MXXrUZWKnwloQwKBgQDPkaKuJ2FIRJoVVHjXj6J7dHh7EWRUq3GQ\n1l0KK08UsMS73go8ezwmjeec+YdFQOJaSSuw83jfJN3JKldMheJWlouZlL6dM/xu\nUYYswaz6pPRjxJVXujJgB62+UPXHtTBkChd2P1x2k6ftuPlqqU4Ka2cPC8BjOTHj\nYmCZVL7pCwKBgEaLCmyJbH3b1hqB/bEeX/XvnQeRFJLCUm0V1L0j/pmHqxDGIRIZ\nOYeVpKZt/XOQbc4fA30OFn6v1f8fwbQECYzaEcz6d8nN4VzSzKcomE/aLsud09Rv\nOjXD1HwlIQ0FZ580k3gIry96c9rH4CaB+hM5j8NHKhO5oxWxb0tTE4JfAoGASWjO\nSh1vUGnCvMx1OHd6FYNpoMzT2QYRUhIeMZyDiWPDEFZE9IL5EQGa6m9todaCtz+t\njhVtqC2Xqq+o1E19cPYpRRXQHDToj/ORKn8MuFBihm5eCvq1GjVdAzQK2KiCBr9y\n8MUT5HPwLij/PPPHv/OgLTgQwIbX1/1RAKlyI2UCgYATSdCnvs8Jqu/Tfom9KWUF\nCRLJMHSFJeuJjgBgd9IQTeG9TgT6JWglT+S78smN5k03VseJO+CAL93Z1omzTubP\nFzqgygM489s7JWDIcjANI1+nIP+jnLyS6ACad6F4OgfLtFziEhrR9/0X1m3NhRU6\nO9AApbY1k05wJdWeLXqVpg==\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
export {
  adminDB as a
};
