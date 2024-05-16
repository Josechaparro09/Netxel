<script>
    import { Button, Card, Dropdown, Radio } from 'flowbite-svelte';
    import { Modal, Label, Input } from 'flowbite-svelte';
    import { ChevronDownSolid } from 'flowbite-svelte-icons';
    import { calcularMonto, calcularRenta, calcularVPresente } from '../../functions/anualidad';
  
    export let formModalAnualidades = false;
  
    let renta = 0;
    let tInteresAnu = 0;
    let opcionInteresC2 = 1;
    let dropdownOpen2 = false;
    let periodos =0
    let vPresente=0
    let vFuturo = 0
  </script>
<Card padding="xl" class="m-10 cursor-pointer" on:click={() => (formModalAnualidades = true)}>
    <img class="p-8 rounded-t-lg h-40 content-center" src="src\Images\anualidades.svg" alt="Anualidades" />
    <div class="px-5 pb-5">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Anualidades</h5> 
      <div class="flex justify-between items-center">
      </div>
    </div>
  </Card>
  <Modal bind:open={formModalAnualidades} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Calcular anualidades</h3>
      <Label class="space-y-2">
        <span>Renta</span>
        <Input type="number" name="renta"  required bind:value={renta} />
      </Label>
      <Label class="space-y-2">
        <span>Periodos</span>
        <div class="flex items-center space-x-3 ">
          
          <Input type="number" name="periodos"  required bind:value={periodos} />
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
          </Dropdown>
        </div>
      </Label>
      <Label class="space-y-2">
        <span>Tasa de interes % anual</span>
        <div class="flex items-center space-x-2 relative">
          <Input type="number" name="tsinteres"  required bind:value={tInteresAnu} />

        </div>
        <Label class="space-y-2">
            <span>Valor presente</span>
            <Input type="number" name="renta"  required bind:value={vPresente} />
          </Label>
          <Label class="space-y-2">
            <span>Valor futuro</span>
            <Input type="number" name="renta"  required bind:value={vFuturo} />
          </Label>
      </Label>
       
      
      <Label class="space-y-2 text-center">
        <span>
        <h3>El valor futuro es de:$ {calcularMonto(renta,periodos,tInteresAnu,opcionInteresC2)}</h3>
        <h3>El valor presente es de: {calcularVPresente(renta,periodos,tInteresAnu,opcionInteresC2)}</h3>
        <h3>Pago por semestre vencido: {calcularRenta(vPresente,periodos,tInteresAnu,opcionInteresC2)}</h3>
        </span>
      </Label>
    </form>
  </Modal>