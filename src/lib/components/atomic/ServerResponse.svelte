<script lang="ts">
  import { Alert } from 'flowbite-svelte';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';
  import { slide } from 'svelte/transition';

  export let message: string | undefined;
  export let error = false;

  let classColors = '';

  $: {
    classColors = error
      ? 'border-red-500 dark:bg-red-400 dark:bg-opacity-20 bg-red-200'
      : 'border-green-500 dark:bg-green-400 dark:bg-opacity-20 bg-green-200';
  }
</script>

{#if message}
  <div class="w-full flex justify-center" transition:slide={{ duration: 500 }}>
    <Alert
      color={error ? 'red' : 'green'}
      class="border w-[80%] {classColors} bg-opacity-50 justify-center"
    >
      <InfoCircleSolid slot="icon" class="w-4 h-4" />
      {message}
    </Alert>
  </div>
{/if}
