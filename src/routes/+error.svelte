<script>
    import { Section, Page404 } from 'flowbite-svelte-blocks';
    import { Button } from 'flowbite-svelte';
  </script>
  
  <Section name="page404">
    <Page404>
      <svelte:fragment slot="h1">404</svelte:fragment>
      <svelte:fragment slot="paragraph">
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Algo salio mal</p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">La ruta especificada no se encuentra.</p>
        <Button href="/" size="lg" color="red">Ir al Inicio</Button>
      </svelte:fragment>
    </Page404>
  </Section>