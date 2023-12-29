<script lang="ts">
    import "../app.css";
    import { page } from "$app/stores";
    import type { PageData } from './$types';
    import Collection from "$lib/components/Collection.svelte";

    export let data: PageData;
</script>
<main class="content-center">
    <h1 class="text-7xl text-green-500 text-center mx-auto mt-8">Welcome to this page!</h1>
    <div class= "text-xl my-8 text-center">
        <p>Here you can save images of ducks and then share them with your friends</p>
        <p>Your User ID is: {data.uid}</p>
    </div>
    

    <form method="POST">
        <input bind:value={data.imgURL} name="imgURL" hidden/>
        <button class="btn btn-outline btn-primary block mx-auto my-4">Add to your collection</button>
    </form>

    <div class="flex items-center justify-center">
        <img class="w-3/5 " src={data.imgURL} alt="Duck image"/>
    </div>

    <p class="text-xl my-8 text-center">Your collection:</p>
    <Collection ducks={data.ducks}/>

</main>