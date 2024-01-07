<script lang="ts">
    import { enhance } from "$app/forms";

    export let ducks = [] as string[];
    export let allowDelete = false;
</script>
<div class="grid space-y-12 flex-y grid-cols-3">
    {#each ducks as item}
    <div class="flex items-center justify-center relative">
        <div class="relative w-4/5">
            <img class="w-full" src={item} />
            {#if allowDelete}
                <form method="POST" action="?/delete" class="absolute top-0 right-0 p-2" use:enhance>
                    <input bind:value={item} name="imgURL" hidden>
                    <button class="btn btn-xs btn-error">Delete</button>
                </form>
            {/if}
        </div>
    </div>
    {/each}
</div>