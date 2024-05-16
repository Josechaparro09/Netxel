<script lang="ts">
    import { Button, Card, Checkbox } from 'flowbite-svelte';
    import { Modal, Label, Input, Dropdown, Radio } from 'flowbite-svelte';
    import { ChevronDownSolid } from 'flowbite-svelte-icons';
  
    export let showGradientesModal = false;
    let valorPresente = 0;
    let tasaInteres = 0;
    let numAnios = 0;
    let valorFuturo = 0;
    let periodicidad:number = 1; // Valor por defecto: anual
    let dropdownOpen = false;
    let valorPrimerPago = 0;
    let periodos = 0;
    let gradiente = 0;
    function reset(){
        valorPresente = 0;
        tasaInteres = 0;
        numAnios = 0;
        valorFuturo = 0;
        periodicidad = 1; // Valor por defecto: anual
        valorPrimerPago = 0;
        periodos = 0;
        gradiente = 0;
    }
    function calcularValorFuturo() {
        reset
        const tasa = tasaInteres / 100;
      const n = getNumPeriodos(periodicidad);
      const a = (((1+tasa)**periodicidad-1)/tasa)
      const b= (valorPrimerPago/tasa)
      const c=(((1+tasa)**periodicidad-1)/tasa)
      const d = ((valorPrimerPago*a)+(b*c))-10
      const firstTerm = (valorPrimerPago * (((1 + tasa) ** n - 1)) / tasa);
    const secondTerm = (gradiente / tasa) * ((((1 + tasa) ** n - 1) / tasa));
    const numerator = (tasa * valorPresente) - (gradiente * ((1 - (1 + tasa ** (-n)) / tasa)) - (n * gradiente))
    const denominator = 1 - (1 + tasa) ** (-n);
    
    valorPrimerPago=numerator / denominator;
    valorPresente= firstTerm + (secondTerm-n); 
    valorFuturo = d
    console.log("a:", a , "b: ",b , "c: ",c,"d",d,valorFuturo,valorPresente);
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
    <Card padding="xl" class="m-10 cursor-pointer" on:click={() => (showGradientesModal = true)}>
      <img class="p-8 rounded-t-lg w-200 h-300px" src="src\Images\anualidades.svg" alt="Anualidades" />
      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Gradientes</h5>
      </div>
    </Card>
  </div>
  
  <Modal bind:open={showGradientesModal} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" on:submit|preventDefault={calcularValorFuturo}>
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Calcular Gradiente</h3>
      <Label class="space-y-2">
        <span>Valor Primer pago</span>
        <Input type="number" name="valorprimero" required bind:value={valorPrimerPago} />
      </Label>
      <Label class="space-y-2">
        <span>Valor Presente</span>
        <Input type="number" name="valorprimero" required bind:value={valorPresente} />
      </Label>
      <Label class="space-y-2">
        <span>Valor Futuro</span>
        <Input type="number" name="valorprimero" required bind:value={valorFuturo} />
      </Label>
      <Label class="space-y-2">
        <span>Periodos</span>
        <Input type="number" name="periodos" required bind:value={periodos} />
      </Label>
      <Label class="space-y-2">
        <span>Tasa de interes (%)</span>
        <Input type="number" name="gradiente" required bind:value={tasaInteres} />
      </Label>
      <Label class="space-y-2">
        <span>Gradiente</span>
        <Input type="number" name="gradiente" required bind:value={gradiente} />
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
            <h3>El Valor Presente es: {valorPresente.toFixed(2)}</h3>
          </span>
        </Label>
    </form>
  </Modal>