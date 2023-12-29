<script lang="ts">
    export let ducks = [] as string[];
</script>
<div class="grid space-y-12 flex-y grid-cols-3">
    {#each ducks as item}
    <div class="flex items-center justify-center">
        <img class="w-4/5" src={item} />
    </div>
    {/each}
</div>