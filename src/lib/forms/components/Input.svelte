<script lang="ts">
  import Eye from '$lib/icons/Eye.svelte';
  import EyeSlash from '$lib/icons/EyeSlash.svelte';
  import type { LogicField } from '$lib/shared/models';
  import type { HTMLInputTypeAttribute } from 'svelte/elements';

  let clazz = '';
  export { clazz as class };

  export let name: string;
  export let type: HTMLInputTypeAttribute = 'text';
  export let logicField: LogicField<any>;
  export let icon: any = undefined;
  export let rightIcon: any = undefined;
  export let error = false;
  export let disabled = false;

  let internalType = type;
  let isVisible = false;
  let computedClass = '';

  $: {
    let border = error
      ? 'focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500 border-red-500 dark:border-red-500'
      : 'focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 border-gray-300 dark:border-gray-500';
    computedClass = `border ${border} block w-full disabled:cursor-not-allowed disabled:opacity-50 p-2.5 bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-white dark:placeholder-gray-400 text-sm rounded-xl`;
  }

  const toggleVisibility = () => {
    isVisible = !isVisible;
    type = isVisible ? 'text' : 'password';
  };
</script>

<div
  class="relative inline-flex h-14 w-full flex-col items-start justify-center gap-0 shadow-sm {computedClass}"
  style="cursor: text;"
>
  <div class="box-border inline-flex h-full w-full items-center gap-1.5">
    <svelte:component this={icon} />
    <input
      {disabled}
      {name}
      bind:value={$logicField.value}
      on:blur
      on:change
      on:click
      on:contextmenu
      on:focus
      on:keydown
      on:keypress
      on:keyup
      on:mouseover
      on:mouseenter
      on:mouseleave
      on:paste
      on:input
      {...{ type }}
      class="border-none focus:border-none focus:ring-0 h-full w-full !bg-transparent font-normal outline-none {clazz}"
      aria-label={name}
    />
    <slot name="rightIcon" />
    {#if internalType === 'password'}
      <button
        class="focus:outline-none"
        type="button"
        on:click={toggleVisibility}
      >
        {#if isVisible}
          <EyeSlash />
        {:else}
          <Eye />
        {/if}
      </button>
    {:else}
      <svelte:component this={rightIcon} />
    {/if}
  </div>
</div>
