<script lang="ts">
    import { Section } from "flowbite-svelte-blocks";
    import { onMount } from 'svelte';
    import { Table, Label,TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch, Button, Dropdown, DropdownItem, Checkbox, ButtonGroup, Modal, Input } from 'flowbite-svelte';
    import { PlusSolid, ChevronDownSolid, FilterSolid, ChevronRightOutline, ChevronLeftOutline, TrashBinOutline, EditOutline, ExclamationCircleOutline } from 'flowbite-svelte-icons';

    
    import { deleteUnitsOfMeasures, getAllMeasures, insertUnitsOfMeasures, updateUnitsOfMeasures } from '../db/UnitsOfMesuresdb';
    let defaultModal = false;
    let divClass='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden';
    let innerDivClass='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4';
    let searchClass='w-full md:w-1/2 relative';
    let svgDivClass='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none';
    let classInput="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  pl-10";
    let shortname:string
    let largename:string
    let formModal = false;
    let searchTerm = '';
    let currentPosition = 0;
    const itemsPerPage = 10;
    const showPage = 5;
    let totalPages = 0;
    let pagesToShow:any = [];
    
    let startPage:any;
    let endPage:any;
    let items:any = [];
    let paginationData:any = [];

  let totalItems:any
  async function fetchData() {
    try {
      items = await getAllMeasures();
      paginationData=items
      totalItems=paginationData.length;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
    const updateDataAndPagination = () => {
      const currentPageItems = paginationData.slice(currentPosition, currentPosition + itemsPerPage);
      renderPagination(currentPageItems.length);
    }
  
    const loadNextPage = () => {
      if (currentPosition + itemsPerPage < paginationData.length) {
        currentPosition += itemsPerPage;
        updateDataAndPagination();
      }
    }
  
    const loadPreviousPage = () => {
      if (currentPosition - itemsPerPage >= 0) {
        currentPosition -= itemsPerPage;
        updateDataAndPagination();
      }
    }
  
    const renderPagination = (totalItems:any) => {
      totalPages = Math.ceil(paginationData.length / itemsPerPage);
      const currentPage = Math.ceil((currentPosition + 1) / itemsPerPage);
  
      startPage = currentPage - Math.floor(showPage / 2);
      startPage = Math.max(1, startPage);
      endPage = Math.min(startPage + showPage - 1, totalPages);
  
      pagesToShow = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }
  
    const goToPage = (pageNumber:any) => {
      currentPosition = (pageNumber - 1) * itemsPerPage;
      updateDataAndPagination();
    }
  
    $: startRange = currentPosition + 1;
    $: endRange = Math.min(currentPosition + itemsPerPage, totalItems);
  
    onMount(async () =>{
      // Call renderPagination when the component initially mounts
      renderPagination(paginationData.length);
      await fetchData();
    });
  
    $: currentPageItems = paginationData.slice(currentPosition, currentPosition + itemsPerPage);
    $: filteredItems = paginationData.filter((item:any) => item.large_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    const resetForm = () => {
    // Reinicia los campos del formulario
    shortname=""
    largename=""

  };

    const handleSubmit = async () => {
    try {

        if (edit) {
          await updateUnitsOfMeasures(medida.id,shortname,largename)
          formModal=false
        } else {
          await insertUnitsOfMeasures(shortname , largename);
        }
      // Limpia los campos y recarga los datos después de la inserción/actualización
      resetForm();
      await fetchData();
    } catch (error) {
      console.error("Error inserting/updating category:", error);
    }
  };
  let edit = false
  let popupModal:any
  const medida = {
    id:null,
    short_name:"",
    large_name:""
  }

  const insertar=()=>{
    edit=false
    formModal = true
  }
  const editar=(id:any,shortName:string,largeName:string)=>{
    edit=true
    formModal=true
    medida.id=id
    shortname=medida.short_name=shortName
    largename=medida.large_name=largeName
    
    
  }
  let selectedName:string
  function eliminar(id:any,shortName:string,largeName:string){
    popupModal=true
    medida.id=id
    medida.short_name=shortName
    medida.large_name=largeName
  }
  const handleDelete = async (id:any) => {
    try {
      // Elimina la categoría
      await deleteUnitsOfMeasures(id);
      console.log(medida.id)
      // Recarga los datos después de la eliminación
      await fetchData();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };
</script>

    <Section classSection='bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 flex-1 p-4'>
      <TableSearch placeholder="Buscar" hoverable={true} bind:inputValue={searchTerm} {divClass} {innerDivClass} {searchClass} {classInput} >
  
      <div slot="header" class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
        <Button on:click={() => insertar()}>
          <PlusSolid class="h-3.5 w-3.5 mr-2" />
          Nueva medida
        </Button>
        <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full" on:close={resetForm}>
          <form on:submit|preventDefault={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <Label for="Nombre corto" class="mb-2">Nombre corto</Label>
              <Input type="text" id="short-name"  required bind:value={shortname}/>
            </div>
            <div>
              <Label for="Nombre largo" class="mb-2">Nombre largo</Label>
              <Input type="text" id="large-name" bind:value={largename} required />
            </div>
          </div>
          <div class=" justify-center bottom-0 right-0 flex items-end">
            <Button type="submit" class="w-52 h-50 ">
              <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg>
              {#if edit}
                Editar medida
              {:else}
                Agregar medida
              {/if}
            </Button>
          </div>
        </form>
        </Modal>
        <Modal bind:open={popupModal} size="xs" autoclose>
          <div class="text-center">
            <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Estas seguro que deseas eliminar esta medida? </h3>
              <h4 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"><b>Nombre corto:</b> {medida.short_name}</h4>
              <h4 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"><b>Nombre largo:</b> {medida.large_name}</h4>
            <Button color="red" class="me-2" on:click={async () => await handleDelete(medida.id)} >Si, estoy seguro</Button>
            <Button color="alternative">No, cancelar</Button>
          </div>
        </Modal>
        <Button color='alternative'>Acciones<ChevronDownSolid class="w-3 h-3 ml-2 " /></Button>
          <Dropdown class="w-44 divide-y divide-gray-100">
            <DropdownItem>Editar</DropdownItem>
            <DropdownItem>Borrar todo</DropdownItem>
          </Dropdown>
        <Button color='alternative' class="hidden">Filter<FilterSolid class="w-3 h-3 ml-2 "/></Button>
          <Dropdown class="w-48 p-3 space-y-2 text-sm">
            <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
            <li>
              <Checkbox>Apple (56)</Checkbox>
            </li>
            <li>
              <Checkbox>Microsoft (16)</Checkbox>
            </li>
            <li>
              <Checkbox>Razor (49)</Checkbox>
            </li>
            <li>
              <Checkbox>Nikon (12)</Checkbox>
            </li>
            <li>
              <Checkbox>BenQ (74)</Checkbox>
            </li>
          </Dropdown>
      </div>
        <TableHead>
          <TableHeadCell padding="px-4 py-3" scope="col">Nombre corto</TableHeadCell>
          <TableHeadCell padding="px-4 py-3" scope="col">Nombre largo</TableHeadCell>
          <TableHeadCell class="justify-end flex" padding="px-4 py-3" scope="col">Acciones</TableHeadCell>
        </TableHead>
        <TableBody >
          {#if searchTerm !== ''}
            {#each filteredItems as item (item.id)}
              <TableBodyRow>
                <TableBodyCell tdClass="px-4 py-3">{item.short_name}</TableBodyCell>
                <TableBodyCell tdClass="px-4 py-3">{item.large_name}</TableBodyCell>
                <div class="justify-end flex" >
                  <Button  on:click={() => editar(item.id,item.short_name,item.large_name)} class="!p-2 m-2" color ="primary"><EditOutline class="w-5 h-5" /></Button>
                  
                  <Button on:click={() => eliminar(item.id,item.short_name,item.large_name)} class="!p-2 m-2" color ="red"><TrashBinOutline class="w-5 h-5" /></Button>
                </div>
              </TableBodyRow>
            {/each}
          {:else}
            {#each currentPageItems as item (item.id)}
              <TableBodyRow>
                <TableBodyCell tdClass="px-4 py-3">{item.short_name}</TableBodyCell>
                <TableBodyCell tdClass="px-4 py-3">{item.large_name}</TableBodyCell>
                <div class="justify-end flex" >
                  <Button  on:click={() => editar(item.id,item.short_name,item.large_name)} class="!p-2 m-2" color ="primary"><EditOutline class="w-5 h-5" /></Button>
                  
                  <Button on:click={() => eliminar(item.id,item.short_name,item.large_name)} class="!p-2 m-2" color ="red"><TrashBinOutline class="w-5 h-5" /></Button>
                </div>
              </TableBodyRow>
            {/each}
          {/if}
        </TableBody>
        <div slot="footer" class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Mostrando
          <span class="font-semibold text-gray-900 dark:text-white">{startRange}-{endRange}</span>
          de
          <span class="font-semibold text-gray-900 dark:text-white">{totalItems}</span>
        </span>
          <ButtonGroup class="">
            <Button on:click={loadPreviousPage} enable={currentPosition === 0}><ChevronLeftOutline size='xs' class='m-1.5'/></Button>
            {#each pagesToShow as pageNumber}
              <Button on:click={() => goToPage(pageNumber)}>{pageNumber}</Button>
            {/each}
            <Button on:click={loadNextPage} enable={ totalPages === endPage }><ChevronRightOutline size='xs' class='m-1.5'/></Button>
          </ButtonGroup>
        </div>
      </TableSearch>
  </Section>
