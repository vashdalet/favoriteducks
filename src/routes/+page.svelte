<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from './$types';
    import Collection from "$lib/components/Collection.svelte";
    import { enhance } from "$app/forms";
    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
    import { auth, user } from "$lib/firebase";
    import { invalidateAll } from "$app/navigation";

    export let data: PageData;
    $: href = `http://${$page.url.host}/${data.username}`;

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const credential = await signInWithPopup(auth, provider);
        
        const idToken = await credential.user.getIdToken();

        const res = await fetch("/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idToken }),
        });
        invalidateAll()
    }


    async function copyLink()  {
        await navigator.clipboard.writeText(href);
        console.log("link copied");
    };
</script>

{#if data.uid}
    <main class="content-center">
        <h1 class="text-7xl text-purple-400 text-center mx-auto mt-8">Welcome to Dasha's webpage!</h1>
        <div class= "text-xl my-8 text-center font-light">
            <p class="my-3">Here you can save images of ducks and then share them with your friends</p>
            <p class="my-2">Link to share your collection: <a class="font-bold text-green-400" {href}>{href}</a></p>
            <button class="btn btn-accent mx-auto my-4" on:click={copyLink}>Copy link</button>
            <a href="/settings"><button class="btn btn-info mx-auto my-4">Settings</button></a>
        </div>
        
        

        <div class="flex items-center justify-center">
            <img class="w-3/5 " src={data.imgURL} alt="Duck image"/>
        </div>

        <form method="POST" action="?/add" use:enhance>
            <input bind:value={data.imgURL} name="imgURL" hidden/>
            <button class="btn btn-outline btn-primary block mx-auto my-4">Add to your collection</button>
        </form>

        <p class="text-xl mt-20 text-center font-bold">Here's your collection:</p>
        <Collection ducks={data.ducks} allowDelete/>

    </main>
{:else}
    <main class="content-center">
        <button class="btn btn-outline btn-primary block mx-auto my-4" on:click={signInWithGoogle}>Log in</button>
    </main>
{/if}