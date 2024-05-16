<script lang="ts">
    import { Button, Card } from 'flowbite-svelte';
    import { Modal, Label, Input, Dropdown, Radio } from 'flowbite-svelte';
    import { ChevronDownSolid } from 'flowbite-svelte-icons';
  
    export let showCapitalizacionModal = false;
    let valorPresente = 0;
    let tasaInteres = 0;
    let numAnios = 0;
    let valorFuturo = 0;
    let periodicidad:number = 1; // Valor por defecto: anual
    let dropdownOpen = false;
  
    function calcularValorFuturo() {
      const n = getNumPeriodos(periodicidad);
      valorFuturo = valorPresente * Math.pow(1 + tasaInteres / (100 * n), n * numAnios);
    }
  
    function getNumPeriodos(periodicidad:number) {
      switch (periodicidad) {
        case 1:
          return 1; // Anual
        case 2:
          return 2; // Semestral
        case 4:
          return 4; // Trimestral
        case 12:
          return 12; // Mensual
        default:
          return 1; // Anual por defecto
      }
    }
  </script>
  
  <div class="flex items-center justify-center">
    <Card padding="xl" class="m-10 cursor-pointer" on:click={() => (showCapitalizacionModal = true)}>
      <img class="p-8 rounded-t-lg w-200 h-300px" src="src\Images\IntCompuesto.svg" alt="Capitalización" />
      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Capitalización</h5>
      </div>
    </Card>
  </div>
  
  <Modal bind:open={showCapitalizacionModal} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" on:submit|preventDefault={calcularValorFuturo}>
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Calcular Capitalización</h3>
      <Label class="space-y-2">
        <span>Valor Presente</span>
        <Input type="number" name="valorPresente" required bind:value={valorPresente} />
      </Label>
      <Label class="space-y-2">
        <span>Tasa de Interés (%)</span>
        <Input type="number" name="tasaInteres" required bind:value={tasaInteres} />
      </Label>
      <Label class="space-y-2">
        <span>Número de Años</span>
        <Input type="number" name="numAnios" required bind:value={numAnios} />
      </Label>
      <Label class="space-y-2">
        <span>Periodicidad</span>
        <div class="flex items-center space-x-2 relative">
          <Button class="absolute right-0 top-1/2 -translate-y-1/2 mt-3 ">
            {#if periodicidad == 1}
              Anual
            {:else}
              {#if periodicidad == 2}
                Semestral
              {:else}
                {#if periodicidad == 4}
                  Trimestral
                {:else}
                  {#if periodicidad == 12}
                    Mensual
                  {/if}
                {/if}
              {/if}
            {/if}
            <ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" />
          </Button>
          <Dropdown bind:open={dropdownOpen} class="w-44 p-3 space-y-3 text-sm">
            <li>
              <Radio name="group1" bind:group={periodicidad} value={1} on:change={() => (dropdownOpen = false)}>Anual</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={periodicidad} value={2} on:change={() => (dropdownOpen = false)}>Semestral</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={periodicidad} value={4} on:change={() => (dropdownOpen = false)}>Trimestral</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={periodicidad} value={12} on:change={() => (dropdownOpen = false)}>Mensual</Radio>
            </li>
          </Dropdown>
        </div>
      </Label>
      <h1>   </h1>
      <h1>   </h1>
      <button type="submit" class=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:bg-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:bg-primary-800">
        Calcular
      </button>
      <Label class="space-y-2 text-center">
          <span>
            <h3>El Valor Futuro es: {valorFuturo.toFixed(2)}</h3>
          </span>
        </Label>
    </form>
  </Modal>