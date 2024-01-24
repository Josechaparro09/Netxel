<script lang="ts">
  import viewport from '../shared/hooks/useViewportAction';

  let loadComponent: any;
  export { loadComponent as this };

  let isShowingComponent = false;
  let componentPromise: any;
</script>

{#if !isShowingComponent}
  <div
    use:viewport
    on:enterViewport={() => {
      componentPromise = loadComponent();
      isShowingComponent = true;
    }}
  />
{:else}
  {#await componentPromise}
    <slot name="loading">Loading...</slot>
  {:then { default: Component }}
    <slot name="component" {Component} />
  {/await}
{/if}
