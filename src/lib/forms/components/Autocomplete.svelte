<script lang="ts">
  import type { LogicField } from '$lib/shared';
  import { onMount } from 'svelte';
  // @ts-ignore
  import AutoComplete from 'svelte-select';

  const colors = ['White', 'Red', 'Yellow', 'Green', 'Blue', 'Black'];

  export let logicField: LogicField<any>;
  export let disabled = false;
  export let error = false;
  export let name = '';

  let border = '';

  $: {
    border = error
      ? 'focus:!border-red-500 focus:!ring-red-500 dark:focus:!border-red-500 dark:focus:!ring-red-500 !border-red-500 dark:!border-red-500'
      : 'focus:!border-primary-500 focus:!ring-primary-500 dark:focus:!border-primary-500 dark:focus:!ring-primary-500 !border-gray-300 dark:!border-gray-500';
  }

  onMount(() => {
    $logicField.value = { label: '', value: '' };
  });
</script>

<AutoComplete
  class="!disabled:cursor-not-allowed !disabled:opacity-50 p-2.5 !bg-gray-50 !text-gray-900 dark:!bg-slate-950 dark:!text-white dark:!placeholder-gray-400 !text-sm !rounded-xl !relative h-14 w-full !shadow-sm {border}"
  placeholder=""
  {name}
  {disabled}
  items={colors}
  bind:value={$logicField.value}
/>
