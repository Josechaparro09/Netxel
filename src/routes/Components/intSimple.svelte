<script>
    import { Button, Card, Dropdown, Radio } from 'flowbite-svelte';
    import { Modal, Label, Input } from 'flowbite-svelte';
    import { ChevronDownSolid } from 'flowbite-svelte-icons';
    import { calcularIntSimple, calcularTiempo, calcularCfinal, calcularIntereses, calcularTInteres, calcularCInicial } from '../../functions/intSimple';
  
    export let formModalIntSimple = false;
  
    let opcionInteres = 1;
    let cInicial = 0.0;
    let tiempo = 0.0;
    let cFinal = 0.0;
    let intereses = 0.0;
    let dropdownOpen = false;
    let tInteres = 0;
  </script>
  <Card padding="xl" class="m-10 cursor-pointer" on:click={() => (formModalIntSimple = true)}>
    <img class="p-8 rounded-t-lg w-200 h-300px" src="src\Images\IntSimple.svg" alt="Interes simple" />
    <div class="px-5 pb-5">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Interes Simple</h5>
      <div class="flex justify-between items-center">
      </div>
    </div>
  </Card>
<Modal bind:open={formModalIntSimple} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Calcular interes simple</h3>
      <Label class="space-y-2">
        <span>Capital inicial</span>
        <Input type="number" name="capitalinicial"  required bind:value={cInicial} />
      </Label>
      <Label class="space-y-2">
        <span>Capital final</span>
        <Input type="number" name="capitalfinal"  required bind:value={cFinal} />
      </Label>
      <Label class="space-y-2">
        <span>Tasa de interes %</span>
        <div class="flex items-center space-x-2 relative">
          <Input type="number" name="tsinteres"  required bind:value={tInteres} />
          %
        </div>
      </Label>
      <Label class="space-y-2">
        <span>Intereses</span>
        <Input type="number" name="intereses"  required bind:value={intereses} />
      </Label>
      <div class="flex items-center space-x-2 relative">
        <Label class="space-y-2">
          <span>Tiempo</span>
          <Input type="number" name="tsinteres"  required bind:value={tiempo} />
        </Label>
        <Button class="absolute right-0 top-1/2 -translate-y-1/2 mt-3" >
          {#if opcionInteres==1/365}
            Diario
          {:else}
             {#if opcionInteres==1/12}
               Mensual
             {:else}
                {#if opcionInteres==1/4}
                Trimestral
              {:else}
              {#if opcionInteres==1/3}
                Cuatrimestral
              {:else}
              {#if opcionInteres==1/2}
                Semestral
              {:else}
              {#if opcionInteres==1}
                Anual
              {/if}
              {/if}
              {/if}
              {/if}
             {/if}
          {/if}<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" />
        </Button>
        <Dropdown bind:open={dropdownOpen}  class="w-44 p-3 space-y-3 text-sm">
          <li>
            <Radio name="group1" bind:group={opcionInteres}  value={1/365} on:change={() => (dropdownOpen = false)}>Diario</Radio>
          </li>
          <li>
            <Radio name="group1" bind:group={opcionInteres}  value={1/12} on:change={() => (dropdownOpen = false)}>Mensual</Radio>
          </li>
          <li>
            <Radio name="group1" bind:group={opcionInteres} value={1/4} on:change={() => (dropdownOpen = false)}>Trimestral</Radio>
          </li>
          <li>
            <Radio name="group1" bind:group={opcionInteres} value={1/3} on:change={() => (dropdownOpen = false)}>Cuatrimestral</Radio>
          </li>
          <li>
            <Radio name="group1" bind:group={opcionInteres} value={1/2} on:change={() => (dropdownOpen = false)}>Semestral</Radio>
          </li>
          <li>
            <Radio name="group1" bind:group={opcionInteres} value={1} on:change={() => (dropdownOpen = false)}>Anual</Radio>
          </li>
          <li>
            <Radio name="group1" bind:group={opcionInteres} value={100} on:change={() => (dropdownOpen = false)}>Otro</Radio>
          </li>
        </Dropdown>
      </div>
      
      <Label class="space-y-2 text-center">
        <span>
        <h3>El interes simple es de: {calcularIntSimple(cInicial,tInteres,tiempo,opcionInteres)}</h3>
        <h3>El tiempo es de: {calcularTiempo(cInicial,cFinal,tInteres,intereses)} años</h3>
        <h3>El interes es de: {calcularIntereses(cInicial,tInteres,tiempo,cFinal,opcionInteres)}</h3>
        <h3>La tasa de interes es de: {calcularTInteres(cInicial,cFinal,intereses,tiempo,opcionInteres)}%</h3>
        <h3>El capital inicial es de {calcularCInicial(cFinal,cInicial,tInteres,tiempo,intereses,opcionInteres)}</h3>
        <h3>El capital final es de: {calcularCfinal(tiempo,tInteres,intereses,cInicial,cFinal,opcionInteres)}</h3>
        </span>
      </Label>
    </form>
  </Modal>