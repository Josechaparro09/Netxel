<script lang="ts">
  import { Label } from 'flowbite-svelte';
  import FieldError from './FieldError.svelte';

  export let required = false;
  export let label = '';
  export let error: string | undefined = undefined;
</script>

<div class="flex flex-col mb-2">
  <Label class="mb-2" color={error ? 'red' : 'gray'}>
    {label}
    {#if required}
      <span class="text-red-600">*</span>
    {/if}
    <slot />
  </Label>
  <FieldError {error} {label} />
</div>
