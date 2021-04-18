<script>
  import { formatRange } from "../helpers/formatters";

  export let production;
</script>

<style>
  .production-card {
    @apply shadow;
    @apply mb-4;
    @apply bg-white;
    @apply rounded;
    /* @apply border-0;
    @apply border-b;
    @apply border-solid;
    @apply border-gray-200; */
    overflow: hidden;
  }
</style>

<article class="production-card">
  <a
    class="block no-underline text-black"
    target="_top"
    href={production.link}
  >
    <div class="flex flex-col md:flex-row">
      <div class="mb-4 w-full md:(mb-0 w-5/12)">
        <img
          src={production.imageSrc}
          srcset={production.imageSrcSet}
          class="block w-full"
          alt={production.title}
        />
      </div>
      <div class="w-full md:(w-7/12 pl-4) p-4">
        <h2 class="my-0 font-semibold text-black text-sm leading-none md:(text-base leading-none)">
          {production.title}
        </h2>
        {#if production.startDate}
          <dl class="text-sm mt-1 mb-0 leading-4">
            <dt class="sr-only">Dates</dt>
            <dd class="ml-0">
              {formatRange(production.startDate, production.endDate)}
            </dd>
          </dl>
        {/if}
        {#if production.startPrice}
          <dl class="text-sm mt-1 mb-0 leading-4">
            <dt class="sr-only">Tickets</dt>
            <dd class="ml-0 text-gray-500">
              {formatRange(production.startPrice, production.endPrice, "$")}
            </dd>
          </dl>
        {/if}
      </div>
    </div>
  </a>
</article>
