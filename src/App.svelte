<script>
  // import { onMount } from "svelte";

  import Upcoming from './components/Upcoming.svelte';

  // onMount(async () => {
  //   const res = await fetch("/api/date");
  //   const newDate = await res.text();
  //   date = newDate;
  // });
</script>

<style>
/* .btn {
  @apply bg-gray-200 hover:bg-gray-300 text-gray-800 border-none py-2 px-4 cursor-pointer rounded-sm;
}
.btn-blue {
  @apply btn bg-blue-500 hover:bg-blue-600 text-white;
} */
</style>

<main class="w-full font-sans">
  <!-- <button class="btn">btn</button>
  <button class="btn-blue">btn-blue</button> -->
  <!-- <h2>The date according to Node.js is:</h2>
  <p>{date ? date : 'Loading date...'}</p> -->
  <Upcoming />
</main>
