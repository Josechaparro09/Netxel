<script lang="ts">
	import Ejemplo from './Categories.svelte';
	import {deleteCategory, getAllCategories, insertCategory, updateCategory } from '../db/Categoriesdb';
  import { Section } from "flowbite-svelte-blocks";
  import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
      let formModal = false;
      onMount
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    TableSearch,
  } from "flowbite-svelte";

  import { onMount } from 'svelte';

  let defaultModal = false;


  let searchTerm = "";
  let items: { id: any; category_name: any }[] = [];
  let categoryName = "";
  let selectedCategoryId:any = null;

  onMount(async () => {
    await fetchData();
  });

  async function fetchData() {
    try {
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSubmit = async () => {
    try {
      if (selectedCategoryId) {
        // Si hay un categoryId seleccionado, actualiza la categoría existente
        await updateCategory(selectedCategoryId, categoryName);
      } else {
        // Si no hay un categoryId seleccionado, inserta una nueva categoría
        await insertCategory(categoryName);
      }

      // Limpia los campos y recarga los datos después de la inserción/actualización
      resetForm();
      await fetchData();
    } catch (error) {
      console.error("Error inserting/updating category:", error);
    }
  };

  const handleEdit = (id:any) => {
    // Establece el categoryId seleccionado y el nombre para la edición
    selectedCategoryId = id;
    categoryName = items.find((item) => item.id === id)?.category_name || "";
  };

  const handleDelete = async (id:any) => {
    try {
      // Elimina la categoría
      await deleteCategory(id);

      // Recarga los datos después de la eliminación
      await fetchData();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const resetForm = () => {
    // Reinicia los campos del formulario
    selectedCategoryId = null;
    categoryName = "";
  };
  
  $: filteredItems = items.filter(
    (item) => item.category_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
</script>

<span class="flex-auto" >
  <Section classSection="h-96 border ">

    <div class="justify-center flex m-auto">
      <Button on:click={() => (formModal = true)}>Agregar categoria</Button>

    <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full" on:close={resetForm}>
      <form class="" action="#" on:submit|preventDefault={handleSubmit}>
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Nueva categoria</h3>
        <Label class="space-y-2">
          <span>Nombre</span>
          <Input type="text" name="Nombre" required bind:value={categoryName} class="" />
        </Label>
        <Button type="submit" class="mt-4 flex ">Agregar categoria</Button>
      </form>
    </Modal>
    </div>
    <TableSearch
      placeholder="Buscar por nombre"
      hoverable={true}
      bind:inputValue={searchTerm}
      class="border"
    >
      <TableHead>
        <TableHeadCell>ID</TableHeadCell>
        <TableHeadCell>Nombre</TableHeadCell>
        <TableHeadCell>Acciones</TableHeadCell>
      </TableHead>
      <TableBody>
        {#each filteredItems as item}
          <TableBodyRow>
            <TableBodyCell>{item.id}</TableBodyCell>
            <TableBodyCell>{item.category_name}</TableBodyCell>
            <TableBodyCell>
              <button on:click={() => handleEdit(item.id)} class="text-green-700">Editar</button>
              <button on:click={() => handleDelete(item.id)} class="text-red-600">Eliminar</button></TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </TableSearch>
  </Section>
</span>

