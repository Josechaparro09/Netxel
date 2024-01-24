<script lang="ts">
  export let error: string | undefined = undefined;
  export let label: string | undefined = undefined;

  import { slide } from 'svelte/transition';
</script>

{#if error}
  <p class="text-red-600 ml-2 text-sm" transition:slide={{ duration: 300 }}>
    {#if error === 'required'}
      {label} es requerido
    {:else if error === 'not_an_email'}
      El correo electrónico es inválido
    {:else if error === 'min'}
      {label} debe ser mayor
    {:else if error === 'max'}
      {label} debe ser menor
    {/if}
  </p>
{/if}
