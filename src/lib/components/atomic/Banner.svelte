<script lang="ts">
  import { Banner } from 'flowbite-svelte-blocks';
  import { CloseButton } from 'flowbite-svelte';
  export let visible = !localStorage.getItem('banner-hidden');
  // export let visible = true;
</script>

{#if visible}
  <Banner>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      This application is integrated with the free tier of the <a
        class="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
        href="https://twelvedata.com/"
      >
        Twelve Data API
      </a>. As a result, there are certain restrictions on the number of
      requests that can be issued. The free tier comes with a predefined limit
      on the number of requests, which may affect the functionality and data
      retrieval capacity of this application to some extent.
    </p>
    <CloseButton
      on:click={() => {
        visible = false;
        localStorage.setItem('banner-hidden', 'true');
      }}
      class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
    />
  </Banner>
{/if}
