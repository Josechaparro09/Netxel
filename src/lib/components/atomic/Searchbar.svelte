<script lant="ts">
  import { Input } from 'flowbite-svelte';

  export let placeholder = '';
  export let searchString = '';
</script>

<div class="hidden relative md:block">
  <Input
    class="input w-96 py-3"
    type="search"
    bind:value={searchString}
    {placeholder}
  />
</div>
