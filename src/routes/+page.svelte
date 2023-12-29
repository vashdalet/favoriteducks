<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from './$types';
    import Collection from "$lib/components/Collection.svelte";

    export let data: PageData;
    $: href = `http://${$page.url.host}/${data.uid}`;

    async function copyLink()  {
        await navigator.clipboard.writeText(href);
        console.log("link copied");
    };
</script>
<main class="content-center">
    <h1 class="text-7xl text-purple-400 text-center mx-auto mt-8">Welcome to Dasha's webpage!</h1>
    <div class= "text-xl my-8 text-center font-light">
        <p class="my-3">Here you can save images of ducks and then share them with your friends</p>
        <p class="my-2">Link to share your collection: <a class="font-bold text-green-400" {href}>{href}</a></p>
        <button class="btn btn-accent mx-auto my-4" on:click={copyLink}>Copy link</button>
    </div>
    
    

    <div class="flex items-center justify-center">
        <img class="w-3/5 " src={data.imgURL} alt="Duck image"/>
    </div>

    <form method="POST">
        <input bind:value={data.imgURL} name="imgURL" hidden/>
        <button class="btn btn-outline btn-primary block mx-auto my-4">Add to your collection</button>
    </form>

    <p class="text-xl mt-20 text-center font-bold">Here's your collection:</p>
    <Collection ducks={data.ducks}/>

</main>