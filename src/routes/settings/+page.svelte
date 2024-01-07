<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from './$types';
    import { db } from "$lib/firebase";
    import { doc, getDoc } from "firebase/firestore";

    const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;


    export let data: PageData;
    let username = data.username;
    let loading = false;
    let isAvailable = false;

    $: isValid = username.length > 2 && username.length < 16 && re.test(username);
    $: isTouched = username.length > 0;
    $: isTaken = isValid && !isAvailable && !loading;

    let debounceTimer: NodeJS.Timeout;

    async function checkAvailability() {
        isAvailable = false;
        clearTimeout(debounceTimer);

        loading = true;
        debounceTimer = setTimeout(async () => {
        
            console.log("checking availabilty of", username);

            const ref = doc(db, "usernames", username);
            const exists = await getDoc(ref).then ((doc) => doc.exists());

            isAvailable = !exists;
            loading = false;

        }, 500);
    }

</script>


<main class="flex flex-col justify-center items-center">
    <div class= "text-xl my-8 font-light">
        <p>Here you can change your username</p>
    </div>
    
    <form class="w-2/5" method="POST">
        <input 
            type="text"
            name="username"
            placeholder="Username"
            class="input input-primary w-4/6"
            bind:value={username}
            on:input={checkAvailability}
            class:input-error={(!isValid && isTouched)}
            class:input-warning={isTaken}
            class:input-success={isAvailable && isValid && !loading}
        />
        <div class="my-4 min-h-16 px-8 w-full">
                {#if loading && isValid }
                    <p class="text-secondary">Checking availabilty of @{username}</p>
                {/if}

                {#if !isValid && isTouched}
                    <p class="text-error text-sm">must be 3-16 characters long, alphanumeric only</p>
                {/if}

                {#if isValid && !isAvailable && !loading}
                    <p class="text-warning text-sm">@{username} is not available</p>
                {/if}
        </div>  
    </form>
    
</main>