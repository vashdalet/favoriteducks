<script lang="ts">
    import type { PageData } from './$types';
    import Collection from "$lib/components/Collection.svelte";

    export let data: PageData;
</script>

<main class="content-center"> 
    <Collection ducks={data.ducks}/>
</main>