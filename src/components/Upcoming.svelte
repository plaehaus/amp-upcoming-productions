<script>
  import { getProductions } from '../api/productions';
  import Loader from './Loader.svelte';
  import { onMount } from 'svelte';
  import ProductionCard from './ProductionCard.svelte';

  let productions = [];
  let promise = undefined;

  async function loadProductions() {
    promise = getProductions();
    productions = await promise;
  }

  onMount(async () => {
    loadProductions();
  });
</script>

<style>
</style>

<div class="max-w-5xl m-auto">
  <div class="max-w-full m-auto text-center">
    <div>
      {#if promise}
        {#await promise}
          <Loader fullScreen={false} />
        {:catch error}
          <p>Something went wrong: {error.message}</p>
        {/await}
      {/if}
    </div>
  </div>
  {#each productions as production, i}
    <ProductionCard {production} />
  {/each}
</div>
