<script>
  import { formatRange } from '../helpers/formatters';

  export let production;
</script>

<style>
  .amp-production-card > a {
    @apply border-0 border-t border-solid border-gray-200 pt-4 mt-4;
  }
  /* .amp-production-card > a {
    @apply border-0 border-b border-solid border-gray-200 pb-4 mb-4;
  }
  .amp-production-card:last-child > a {
    @apply border-b-0 pb-0 mb-0;
  } */
</style>

<article class="amp-production-card">
  <a
    class="block no-underline text-black"
    target="_top"
    href={production.link}
  >
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:(w-7/12)">
        <h2 class="mt-0 mb-0 font-semibold text-gray-800 text-xl leading-none md:(text-xl leading-none)">
          {production.title}
        </h2>
        <div class="flex flex-row">
          {#if production.startDate}
            <dl class="text-sm mt-1 mb-2 leading-4 w-2/3">
              <dt class="sr-only">Dates</dt>
              <dd class="ml-0 text-gray-500">
                {formatRange(production.startDate, production.endDate)}
              </dd>
            </dl>
          {/if}
          {#if production.startPrice}
            <dl class="text-sm mt-1 mb-2 leading-4 w-1/3 text-right">
              <dt class="sr-only">Tickets</dt>
              <dd class="ml-0 text-gray-500">
                {formatRange(production.startPrice, production.endPrice, '$')}
              </dd>
            </dl>
          {/if}
        </div>
      </div>
      <div class="w-full md:(w-5/12)">
        <img
          src={production.imageSrc}
          srcset={production.imageSrcSet}
          class="block w-full"
          alt={production.title}
        />
      </div>
    </div>
  </a>
</article>
