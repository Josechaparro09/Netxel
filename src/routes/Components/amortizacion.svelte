<script>
    import { Button, Card, Dropdown, Radio } from 'flowbite-svelte';
    import { Modal, Label, Input } from 'flowbite-svelte';
    import { ChevronDownSolid } from 'flowbite-svelte-icons';
    import { calcularMonto, calcularRenta, calcularVPresente } from '../../functions/anualidad';
  import { calcularArmotizacion } from '../../functions/amortizacion';
  
    export let formModalAmortizacion = false;
  
    let costo = 0;
    let pagos = 0;
    let opcionInteresC2 = 1;
    let dropdownOpen2 = false;
    let periodos =0
    let vPresente=0
    let vFuturo = 0
    let armor= [0]
    let cont=0;

    function calcular(){
        armor = calcularArmotizacion(costo,pagos)
    }
  </script>
<Card padding="xl" class="m-10 cursor-pointer" on:click={() => (formModalAmortizacion = true)}>
    <img class="p-8 rounded-t-lg h-40 content-center" src="src\Images\IntSimple.svg" alt="amortizacion" />
    <div class="px-5 pb-5">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Amortizacion</h5> 
      <div class="flex justify-between items-center">
      </div>
    </div>
  </Card>
  <Modal bind:open={formModalAmortizacion} size="xs" autoclose={false} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Calcular amortizacion</h3>
      <Label class="space-y-2">
        <span>Valor final - Costo</span>
        <Input type="number" name="renta"  required bind:value={costo} />
      </Label>
      <Label class="space-y-2">
        <span>N° de pagos</span>
        <div class="flex items-center space-x-2 relative">
            <Input type="number" name="tsinteres"  required bind:value={pagos} />
            <button on:click={calcular}>Calcular</button>
          </div>
          
      </Label>
      
      <Label class="space-y-2 text-center">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th>Periodo</th>
              <th>Saldo Inicial</th>
              <th>Pago</th>
              <th>Saldo Final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>{costo}</td>
              <td>-</td>
              <td>{costo}</td>
            </tr>
            {#each armor as item, index}
              <tr>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>{costo / pagos}</td>
                <td>{item - (costo / pagos)}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </Label>
    </form>
  </Modal>
  