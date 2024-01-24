<script lang="ts">
  import { writable } from 'svelte/store';

  import { indexObjectField } from './indexObjectField';

  import type { Column } from './TableColumns';

  import { onMount } from 'svelte';
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Button,
    ButtonGroup,
    Modal,
    GradientButton,
    Toggle,
  } from 'flowbite-svelte';
  import {
    ChevronRightOutline,
    ChevronLeftOutline,
    EditOutline,
    PlusSolid,
    ArrowsRepeatOutline,
  } from 'flowbite-svelte-icons';
  import Searchbar from '$lib/components/atomic/Searchbar.svelte';

  type T = $$Generic<{ active: boolean }>;

  export let title: string;
  export let dataSource: () => Promise<T[]>;
  export let filterFunction: (searchTerm: string, entity: T) => boolean;
  export let columns: Column[];

  let paginationData: T[] = [];
  let totalData = 0;
  let searchTerm = '';

  const loadData = async () => {
    paginationData = await dataSource();
    totalData = paginationData.length;
    renderPagination();
  };

  onMount(() => {
    loadData();
  });

  let currentPosition = 0;
  const dataPerPage = 10;
  const showPage = 5;
  let totalPages = 0;
  let pagesToShow: any[] = [];
  let startPage: number;
  let endPage: number;
  let reloadTable = writable(false);

  $: loadNextPage = () => {
    if (currentPosition + dataPerPage < paginationData.length) {
      currentPosition += dataPerPage;
      renderPagination();
    }
  };

  $: {
    if ($reloadTable) {
      loadData();
      reloadTable.set(false);
    }
  }

  const loadPreviousPage = () => {
    if (currentPosition - dataPerPage >= 0) {
      currentPosition -= dataPerPage;
      renderPagination();
    }
  };

  const renderPagination = () => {
    totalPages = Math.ceil(paginationData.length / dataPerPage);
    const currentPage = Math.ceil((currentPosition + 1) / dataPerPage);

    startPage = currentPage - Math.floor(showPage / 2);
    startPage = Math.max(1, startPage);
    endPage = Math.min(startPage + showPage - 1, totalPages);

    pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const goToPage = (pageNumber: number) => {
    currentPosition = (pageNumber - 1) * dataPerPage;
    renderPagination();
  };

  $: startRange = currentPosition + 1;
  $: endRange = Math.min(currentPosition + dataPerPage, totalData);

  $: currentPageData = paginationData.slice(
    currentPosition,
    currentPosition + dataPerPage
  );

  $: filteredData = paginationData.filter((entity) =>
    filterFunction(searchTerm, entity)
  );

  let clickOutsideModal = false;
</script>

<div class="mx-5 flex flex-col gap-5">
  <div class="flex justify-between">
    <Searchbar
      placeholder="Buscar {title.toLowerCase()}"
      bind:searchString={searchTerm}
    />
    <div class="flex justify-end gap-2 w-full">
      <Button outline color="dark" on:click={() => reloadTable.set(true)}>
        <ArrowsRepeatOutline class="h-3.5 w-3.5" />
      </Button>
      <GradientButton color="green" on:click={() => (clickOutsideModal = true)}>
        <PlusSolid class="h-3.5 w-3.5 mr-2" />Agregar {title.toLowerCase()}
      </GradientButton>
    </div>
    <Modal size="xl" title="Registrar {title}" bind:open={clickOutsideModal}>
      <slot {reloadTable} />
    </Modal>
  </div>

  <Table hoverable shadow>
    <TableHead>
      <TableHeadCell padding="px-4 py-3" scope="col">#</TableHeadCell>
      {#each columns as column}
        <TableHeadCell padding="px-4 py-3" scope="col">
          {column.name}
        </TableHeadCell>
      {/each}
      <TableHeadCell padding="px-4 py-3" scope="col"></TableHeadCell>
    </TableHead>
    <TableBody>
      {#if searchTerm !== ''}
        {#each filteredData as data, idx}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{idx + 1}</TableBodyCell>
            {#each columns as column}
              <TableBodyCell tdClass="px-4 py-3">
                {column.render
                  ? column.render(data, idx)
                  : indexObjectField(data, column.uid)}
              </TableBodyCell>
            {/each}
            <TableBodyCell tdClass="px-4 py-3 flex flex-row">
              <Toggle checked={data.active === true} />
              <Button color="purple" outline pill class="!p-2" size="sm">
                <EditOutline class="h-3.5 w-3.5" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      {:else}
        {#each currentPageData as data, idx}
          <TableBodyRow>
            <TableBodyCell tdClass="px-4 py-3">{idx + 1}</TableBodyCell>
            {#each columns as column}
              <TableBodyCell tdClass="px-4 py-3">
                {column.render
                  ? column.render(data, idx)
                  : indexObjectField(data, column.uid)}
              </TableBodyCell>
            {/each}
            <TableBodyCell tdClass="px-4 py-3 flex flex-row">
              <Toggle checked={data.active === true} />
              <Button color="purple" outline pill class="!p-2" size="sm">
                <EditOutline class="h-3.5 w-3.5" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
      {/if}
    </TableBody>
  </Table>
  <div
    class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
    aria-label="Table navigation"
  >
    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
      Mostrando
      <span class="font-semibold text-gray-900 dark:text-white"
        >{startRange}-{endRange}</span
      >
      de
      <span class="font-semibold text-gray-900 dark:text-white"
        >{totalData}</span
      >
    </span>
    <ButtonGroup>
      <Button on:click={loadPreviousPage} disabled={currentPosition === 0}
        ><ChevronLeftOutline size="xs" class="m-1.5" /></Button
      >
      {#each pagesToShow as pageNumber}
        <Button on:click={() => goToPage(pageNumber)}>{pageNumber}</Button>
      {/each}
      <Button on:click={loadNextPage} disabled={totalPages === endPage}
        ><ChevronRightOutline size="xs" class="m-1.5" /></Button
      >
    </ButtonGroup>
  </div>
</div>
