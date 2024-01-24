<script>
  import Dots from './Dots.svelte';

  export let center = false;
  export let dotted = false;
  export let color = 'rgba(120, 119, 198, 0.3)';
  let clazz = '';
  export { clazz as class };
</script>

<div
  class="border rounded-lg border-light-bd dark:border-dark-bd bg-light-card dark:bg-dark-card relative {clazz} {center
    ? 'grid place-content-center'
    : ''}"
>
  {#if dotted}
    <Dots spreading={15} />
  {/if}
  <slot />
  <div
    class="rounded-lg"
    style={`position: absolute; pointer-events: none; inset: 0px; width: 100%; height: 100%; background: linear-gradient(rgba(0, 0, 0, 0), 50%, ${color});`}
  />
</div>
