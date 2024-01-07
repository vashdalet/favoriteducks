import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, derived } from "svelte/store";
import type { User } from "firebase/auth";
import { set } from "firebase/database";
import type { Readable } from "svelte/store";


const firebaseConfig = {
    apiKey: "AIzaSyD0LYlh4oT1uTQ1bEFpZ06Vkzy1nnn9ldA",
    authDomain: "favoriteducks.firebaseapp.com",
    projectId: "favoriteducks",
    storageBucket: "favoriteducks.appspot.com",
    messagingSenderId: "410163499904",
    appId: "1:410163499904:web:4f70ae3981437d6526a765"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();


function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });
 
    return () => {
      unsubscribe();
    };
  });

  return {
      subscribe,
  };
}

export const user = userStore();


export function docStore<T>(
  path: string,
) {
  let unsubscribe: () => void;

  const docRef = doc(db, path);

  const{ subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}


interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  links: any[];
}

export const userData: Readable<UserData | null> = derived(user, ($user, set) => {
  if($user) {
    return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null);
  }
});