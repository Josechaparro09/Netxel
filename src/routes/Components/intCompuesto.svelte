<script>
    import { Button, Card, Dropdown, Radio } from 'flowbite-svelte';
    import { Modal, Label, Input } from 'flowbite-svelte';
    import { ChevronDownSolid } from 'flowbite-svelte-icons';
    import { calcularIntCompuesto, calcularIntCompuestoSimple } from '../../functions/intCompuesto';
  
    export let formModalIntCompuesto = false;
  
    let opcionInteresC1 = 1;
    let opcionInteresC2 = 1;
    let cInicialC = 0;
    let tiempoC = 0;
    let tInteresC = 0;
    let dropdownOpen1 = false;
    let dropdownOpen2 = false;
  </script>
<Card padding="xl" class="m-10 cursor-pointer" on:click={() => (formModalIntCompuesto = true)}>
    <img class="p-8 rounded-t-lg h-40 content-center" src="src\Images\IntCompuesto.svg" alt="Interes compuesto" />
    <div class="px-5 pb-5">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Interes Compuesto</h5>
      <div class="flex justify-between items-center">
      </div>
    </div>
  </Card>
  <Modal bind:open={formModalIntCompuesto} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Calcular interes compuesto</h3>
      <Label class="space-y-2">
        <span>Capital inicial</span>
        <Input type="number" name="capitalinicial"  required bind:value={cInicialC} />
      </Label>
      <Label class="space-y-2">
        <span>Tiempo</span>
        <div class="flex items-center space-x-3 ">
          <Input type="number" name="capitalfinal"  required bind:value={tiempoC} />
          <Button class="" >
            {#if opcionInteresC1==1/30}
              Diario
            {:else}
               {#if opcionInteresC1==1}
                 Mensual
               {:else}
                  {#if opcionInteresC1==3}
                  Trimestral
                {:else}
                {#if opcionInteresC1==4}
                  Cuatrimestral
                {:else}
                {#if opcionInteresC1==6}
                  Semestral
                {:else}
                {#if opcionInteresC1==12}
                  Anual
                {/if}
                {/if}
                {/if}
                {/if}
               {/if}
            {/if}<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" />
          </Button>
          <Dropdown bind:open={dropdownOpen1}  class="w-44 p-3 space-y-3 text-sm">
            <li>
              <Radio name="group1" bind:group={opcionInteresC1}  value={1/30} on:change={() => (dropdownOpen1 = false)}>Diario</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC1}  value={1} on:change={() => (dropdownOpen1 = false)}>Mensual</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC1} value={3} on:change={() => (dropdownOpen1 = false)}>Trimestral</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC1} value={4} on:change={() => (dropdownOpen1 = false)}>Cuatrimestral</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC1} value={6} on:change={() => (dropdownOpen1 = false)}>Semestral</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC1} value={12} on:change={() => (dropdownOpen1 = false)}>Anual</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC1} value={100} on:change={() => (dropdownOpen1 = false)}>Otro</Radio>
            </li>
          </Dropdown>
        </div>
      </Label>
      <Label class="space-y-2">
        <span>Tasa de interes %</span>
        <div class="flex items-center space-x-2 relative">
          <Input type="number" name="tsinteres"  required bind:value={tInteresC} />
          <Button class="" >
            
            {#if opcionInteresC2==360}
              Diario
            {:else}
               {#if opcionInteresC2==12}
                 Mensual
               {:else}
                  {#if opcionInteresC2==4}
                  Trimestral
                {:else}
                {#if opcionInteresC2==3}
                  Cuatrimestral
                {:else}
                {#if opcionInteresC2==2}
                  Semestral
                {:else}
                {#if opcionInteresC2==1}
                  Anual
                {/if}
                {/if}
                {/if}
                {/if}
               {/if}
            {/if}<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" />
          </Button>
          <Dropdown bind:open={dropdownOpen2}  class="w-44 p-3 space-y-3 text-sm">
            <li>
              <Radio name="group1" bind:group={opcionInteresC2}  value={360} on:change={() => (dropdownOpen2 = false)}>Diario</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC2}  value={12} on:change={() => (dropdownOpen2 = false)}>Mensual</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC2} value={4} on:change={() => (dropdownOpen2 = false)}>Trimestral</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC2} value={3} on:change={() => (dropdownOpen2 = false)}>Cuatrimestral</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC2} value={2} on:change={() => (dropdownOpen2 = false)}>Semestral</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC2} value={1} on:change={() => (dropdownOpen2 = false)}>Anual</Radio>
            </li>
            <li>
              <Radio name="group1" bind:group={opcionInteresC2} value={100} on:change={() => (dropdownOpen2 = false)}>Otro</Radio>
            </li>
          </Dropdown>
        </div>
      </Label>
       
      
      <Label class="space-y-2 text-center">
        <span>
        <h3>El interes compuesto es de: {calcularIntCompuesto(cInicialC,tInteresC,tiempoC,opcionInteresC1,opcionInteresC2)}</h3>
        <h3>El interes simple es de: {calcularIntCompuestoSimple(cInicialC,tInteresC,tiempoC,opcionInteresC1,opcionInteresC2)}</h3>
        </span>
      </Label>
    </form>
  </Modal>