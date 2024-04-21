<script lang="ts">
	import { getAllCategories, getAllCategoriesNames } from './../db/Categoriesdb'
    import { Section } from "flowbite-svelte-blocks";
    import { onMount } from 'svelte';
    import { Table, Label,TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch, Button, Dropdown, DropdownItem, Checkbox, ButtonGroup, Modal, Input, Select, Textarea } from 'flowbite-svelte';
    import { PlusSolid, ChevronDownSolid, FilterSolid, ChevronRightOutline, ChevronLeftOutline, TrashBinOutline, EditOutline, ExclamationCircleOutline } from 'flowbite-svelte-icons';
    
    import { getAllMeasures, insertUnitsOfMeasures, updateUnitsOfMeasures,getAllMeasuresNames } from '../db/UnitsOfMesuresdb';
    import { deleteProducts, getAllProducts,insertProducts,updateProducts } from "../db/Productsdb";
  import UnitOfMesures from './UnitOfMesures.svelte';
    let defaultModal = false;
    let divClass='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden';
    let innerDivClass='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4';
    let searchClass='w-full md:w-1/2 relative';
    let svgDivClass='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none';
    let classInput="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  pl-10";
    let formModal = false;
    let searchTerm = '';
    let currentPosition = 0;
    const itemsPerPage = 10;
    const showPage = 5;
    let totalPages = 0;
    let pagesToShow:any = [];
    
    let startPage:any;
    let endPage:any;
    
    let paginationData:any = [];
  let totalItems:any
  let measureSelected:any
  let categorySelected:any
  let contador=0
  interface Productos{
    id:any
    active:any
    box_units:any
    category_id:any
    category_name:any
    create_at:any
    description_product:any
    presentation_quantity:any
    product_name:any
    production_price:any
    sale_price:any
    stock_quantity:any
    unit_of_measure_id:any
    unit_of_measure_name:any
  }
  let items:any = [];
  let productos:any=[]
  let measureSelectedIndex:any
  let categorySelectedIndex:any
  async function fetchData() {
    let result:any
    try {
        productos=items = await getAllProducts();
          paginationData=items
          totalItems=paginationData.length;
          contador=0
          console.log(items)
        
      
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
    let measures:any
    let categories:any
    let categoriesNames:any
    let measuresNames:any
    onMount(async () =>{
      renderPagination(paginationData.length);
      await fetchData();
      
      measures = await getAllMeasures()
      categories = await getAllCategories()
      measuresNames = await getAllMeasuresNames()
      categoriesNames = await getAllCategoriesNames()
      console.log("Categorias: ",categoriesNames,"Medidas: ",measuresNames, "Productos:" , productos)
    });
    
    $: currentPageItems = paginationData.slice(currentPosition, currentPosition + itemsPerPage);
    $: filteredItems = paginationData.filter((item:any) => item.product_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    const resetForm = () => {
      productName =""
      categoryId =""
      unitOfMeasureId =""
      salePrice =""
      productionPrice =""
      presentationQuantity=""
      productDescription=""
      unitOfMeasureName =null
      categoryName =null
      measureSelectedIndex=null
      categorySelectedIndex=null
  };
    const handleSubmit = async () => {
    try {
      if (edit) {
          console.log("Antes de update:",producto);
          
          await updateProducts(producto.id,productName,categoryId,unitOfMeasureId,salePrice,productionPrice,presentationQuantity,productDescription)
          formModal=false
          console.log("Edited: ",producto)
        } else {
          producto.category_id = categorySelected.id
          producto.unit_of_measure_id = measureSelected.id
          console.log("Edited: ",producto)
          console.log("name:"+productName,"Category id:"+categoryId,"Measure:"+unitOfMeasureId,"SP:"+salePrice,"PP:"+productionPrice,"Presentacion:"+presentationQuantity,"Descripcion:"+productDescription)
          await insertProducts(productName,categoryId,unitOfMeasureId,salePrice,productionPrice,presentationQuantity,productDescription);
        }
      // Limpia los campos y recarga los datos después de la inserción/actualización
      resetForm();
      await fetchData();
    } catch (error) {
      console.error("Error inserting/updating category:", error);
    }
  }
  let edit = false
  let popupModal:any
  const producto = {
    id:null,
    product_name:null,
    category_id:null,
    category_name:null,
    unit_of_measure_id:null,
    unit_of_measure_name:null,
    sale_price:null,
    production_price:null,
    presentation_quantity:null,
    description:null,
    unit_of_measures:null,
    product_category:null
  }
  let productName:any="",categoryId:any="",unitOfMeasureId:any="", unitOfMeasureName:any="",categoryName:any="",salePrice:any="",productionPrice:any="",presentationQuantity:any="",productDescription:any="";
  const insertar=()=>{
    edit=false
    formModal = true
  }
  const editar=(id:any,productname:any,categoryid:any,categoryname:any,unitofmeasureid:any,unitofmeasurename:any,saleprice:any,productionprice:any,presentationquantity:any,description:any)=>{
    edit=true
    formModal=true
    producto.id=id
    productName=producto.product_name=productname
    categoryId=producto.category_id=categoryid
    unitOfMeasureId=producto.unit_of_measure_id=unitofmeasureid
    unitOfMeasureName=producto.unit_of_measure_name=unitofmeasurename
    categoryName=producto.category_name=categoryname
    salePrice=producto.sale_price=saleprice
    productionPrice=producto.production_price=productionprice
    presentationQuantity=producto.presentation_quantity=presentationquantity
    productDescription=producto.description=description
    console.log("Editar : : ",producto);
    
  }
  
  let selectedName:string
  function eliminar(id:any,productName:any,categoryId:any,unitOfMeasureId:any,salePrice:any,productionPrice:any,presentationQuantity:any,description:any){
    popupModal=true
    producto.id=id
    producto.product_name=productName
    producto.category_id=categoryId
    producto.unit_of_measure_id=unitOfMeasureId
    producto.sale_price=salePrice
    producto.production_price=productionPrice
    producto.presentation_quantity=presentationQuantity
    producto.description=description
  }
  onMount
  
  const handleDelete = async (id:any) => {
    try {
      // Elimina la categoría
      await deleteProducts(id);
      
      // Recarga los datos después de la eliminación
      await fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
  function handleSelectCategories(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex;
    categorySelected = categories[selectedIndex-1]
    categorySelectedIndex = selectedIndex
    categoryId=categorySelected.id
   
  }
  function handleSelectMeasures(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex;
    measureSelected = measures[selectedIndex-1]  
    unitOfMeasureId=measureSelected.id
    measureSelectedIndex = selectedIndex
  }
  
  function getMeasureIndexById(id:any){
    let getMeasure:any
    let index:any
    for (const measure of measures){
       getMeasure = measure.id===id? measure:null
       index++
    }
    return index
  }
  let measureindex
  function getCategoryById(id:any){
    let nombre:any
    for (const category of categories){
      
      return nombre = category.id===id? category.category_name:null
    }
  }
  let open = true;
  let counter = 6;
  function timeout():any {
    if (--counter > 0) return setTimeout(timeout, 1000);
    open = false;
  }

  
  </script>

    <div class="flex-1 p-4">
      <Section classSection='bg-gray-50 dark:bg-gray-900 p-3 sm:p-5'>
        <TableSearch placeholder="Buscar" hoverable={true} bind:inputValue={searchTerm} {divClass} {innerDivClass} {searchClass} {classInput} >

        <div slot="header" class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <Button on:click={() => insertar()}>
            <PlusSolid class="h-3.5 w-3.5 mr-2" />
            Nuevo producto
          </Button>
          <Modal title="Nuevo producto" bind:open={formModal} size="xs" autoclose={false} class="w-full" on:close={resetForm}>
            <form on:submit|preventDefault={handleSubmit}>
              <div class="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <Label for="name" class="mb-2">Nombre</Label>
                  <Input type="text" id="name" required bind:value={productName}/>
                </div>
                <div>
                    <Label for="presentation" class="mb-2 appearance-none"> Presentacion</Label>
                    <Input type="number" id="presentation" required  bind:value={presentationQuantity}/>
                </div>
                <div>
                    <Label
                      >Medida
                      <Select class="mt-2" on:change={handleSelectMeasures}  value= {unitOfMeasureName} required>
                        {#each measuresNames as measure}
                          <option value={measure.large_name}>{measure.large_name}</option>
                        {/each}

                      </Select>
                    </Label>
                </div>
                <div>
                    <Label
                      >Categoria
                      <Select class="mt-2" on:change={handleSelectCategories} value= {categoryName} required>

        

                        {#each categoriesNames as category}
                           <option value={category.category_name}>{category.category_name}</option>
                        {/each}

                      </Select>
                    </Label>
                  </div>
                <div>

                  <Label for="price" class="mb-2">Costo fabricación</Label>
                  <Input type="number" id="price"required bind:value={productionPrice}/>
                </div>

                <div>
                    <Label for="sell-price" class="mb-2">Precio de venta</Label>
                    <Input type="number" id="sell-price"required bind:value={salePrice}/>
                </div>
                <div class="sm:col-span-2">
                  <Label for="description" class="mb-2">Descripción</Label>
                  <Textarea id="description" bind:value={productDescription} placeholder="Describe el producto" rows="2" name="description"  />
                </div>
                <Button type="submit" class="w-52">
                  <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg>
                  {#if edit}
                    Editar producto
                  {:else}
                    Agregar producto
                  {/if}
                </Button>
              </div>
            </form>
          </Modal>
          <Modal bind:open={popupModal} size="xs" autoclose>
            <div class="text-center">
              <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Estas seguro que deseas eliminar este producto? </h3>

              <Button color="red" class="me-2" on:click={async () => await handleDelete(producto.id)} >Si, estoy seguro</Button>
              
              <Button color="alternative">No, cancelar</Button>
            </div>
          </Modal>
          <Button color='alternative'>Acciones<ChevronDownSolid class="w-3 h-3 ml-2 " /></Button>
            <Dropdown class="w-44 divide-y divide-gray-100">
              <DropdownItem>Editar</DropdownItem>
              <DropdownItem>Borrar todo</DropdownItem>
            </Dropdown>
          <Button color='alternative' class="hidden">Filtrad<FilterSolid class="w-3 h-3 ml-2 "/></Button>
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
            <TableHeadCell padding="px-4 py-3" scope="col">Nombre</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Categoria</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Medida</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Presentacion</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Precio de produccion</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Precio de venta</TableHeadCell>

            <TableHeadCell class="justify-end flex" padding="px-4 py-3" scope="col">Acciones</TableHeadCell>
          </TableHead>
          <TableBody >
            {#if searchTerm !== ''}
              {#each filteredItems as item (item.id)}
                <TableBodyRow>
                  <TableBodyCell tdClass="px-4 py-3">{item.product_name}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.products_categories.category_name}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.units_of_measures.large_name}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.presentation_quantity}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.production_price}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.sale_price}</TableBodyCell>
                  <div class="justify-end flex" >

                      productName=producto.product_name=productName
                      categoryId=producto.category_id=categoryId
                      unitOfMeasureId=producto.unit_of_measure_id=unitofmeasureid
                      salePrice=producto.sale_price=salePrice
                      productionPrice=producto.production_price=productionPrice
                      presentationQuantity=producto.presentation_quantity=presentationQuantity
                      productDescription=producto.description=description

                      <Button  on:click={() => editar(item.id,item.product_name,item.products_categories.id,item.products_categories.category_name,item.units_of_measures.id,item.units_of_measures.large_name,item.sale_price,item.production_price,item.presentation_quantity,item.description_product)} class="!p-2 m-2" color ="primary"><EditOutline class="w-5 h-5" /></Button>

                    <Button on:click={() => eliminar(item.id,item.product_name,item.category_id,item.unit_of_measure_id,item.sale_price,item.production_price,item.presentation_quantity,item.description)} class="!p-2 m-2" color ="red"><TrashBinOutline class="w-5 h-5" /></Button>
                  </div>
                </TableBodyRow>
              {/each}
            {:else}
              {#each currentPageItems as item (item.id)}
                <TableBodyRow>
                  <TableBodyCell tdClass="px-4 py-3">{item.product_name}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.products_categories.category_name}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.units_of_measures.large_name}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.presentation_quantity}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.production_price}</TableBodyCell>
                  <TableBodyCell tdClass="px-4 py-3">{item.sale_price}</TableBodyCell>
                  <div class="justify-end flex" >

                    <Button  on:click={() => editar(item.id,item.product_name,item.products_categories.id,item.products_categories.category_name,item.units_of_measures.id,item.units_of_measures.large_name,item.sale_price,item.production_price,item.presentation_quantity,item.description_product)} class="!p-2 m-2" color ="primary"><EditOutline class="w-5 h-5" /></Button>

                    <Button on:click={() => eliminar(item.id,item.product_name,item.category_id,item.unit_of_measure_id,item.sale_price,item.production_price,item.presentation_quantity,item.description)} class="!p-2 m-2" color ="red"><TrashBinOutline class="w-5 h-5" /></Button>

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
    </div>