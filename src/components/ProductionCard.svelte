<script>
  import { formatRange } from '../helpers/formatters';

  export let production;
</script>

<style>
  .amp-production-card {
    @apply border-0 border-b border-solid border-gray-200 mb-4 pb-4;
  }
  .amp-production-card:last-child {
    @apply border-b-0 mb-0 pb-0;
  }
</style>

<article class="amp-production-card">
  <a
    class="block p-0 no-underline text-black"
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
      <div class="w-full md:(w-7/12) p-4">
        <h2 class="my-0 font-semibold text-black leading-none md:(text-base leading-none)">
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
              {formatRange(production.startPrice, production.endPrice, '$')}
            </dd>
          </dl>
        {/if}
      </div>
    </div>
  </a>
</article>
