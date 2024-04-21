<script lang="ts">
    import { Toast, Button } from 'flowbite-svelte';
    import { slide } from 'svelte/transition';
    import { CheckCircleSolid } from 'flowbite-svelte-icons';
  
    let open = true;
    let counter = 6;
    export let mensaje = ""
  </script>
  
  <div class="flex gap-10">

    <Toast dismissable={false} position="bottom-right" transition={slide} bind:open>
      <CheckCircleSolid slot="icon" class="w-4 h-4" />
      {mensaje} agregado con exito
    </Toast>
  </div>