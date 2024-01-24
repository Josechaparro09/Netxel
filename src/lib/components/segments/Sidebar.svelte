<script lang="ts">
  import type { MenuItem } from '$lib/shared';
  import {
    ChartPieOutline,
    ArchiveOutline,
    CogOutline,
    ChartMixedDollarSolid,
    StoreOutline,
  } from 'flowbite-svelte-icons';
  import {
    Sidebar,
    SidebarCta,
    SidebarDropdownWrapper,
    SidebarGroup,
    SidebarWrapper,
  } from 'flowbite-svelte';
  import Item from '$lib/components/atomic/MenuItem.svelte';
  import { useLocation } from 'svelte-navigator';

  const location = useLocation();

  const menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      href: '/panel/dashboard',
      icon: ChartPieOutline,
    },
    {
      label: 'Ventas',
      href: '/panel/sales',
      icon: ChartMixedDollarSolid,
    },
    {
      label: 'Inventario',
      href: '/panel/inventory',
      icon: ArchiveOutline,
      children: [
        { label: 'Materia Prima', href: '/panel/inventory/materials' },
        { label: 'Productos', href: '/panel/inventory/products' },
      ],
    },
    {
      label: 'Producción',
      href: '/panel/production',
      icon: StoreOutline,
      children: [
        { label: 'Producciones', href: '/panel/productions' },
        { label: 'Recetas', href: '/panel/production/recipes' },
      ],
    },
    {
      label: 'Parametros',
      href: '/panel/config',
      icon: CogOutline,
      children: [
        {
          label: 'Empleados',
          href: '/panel/config/employees',
        },
        {
          label: 'Proveedores',
          href: '/panel/config/providers',
        },
        {
          label: 'Unidades de Medida',
          href: '/panel/config/units',
        },
        {
          label: 'Usuarios',
          href: '/panel/config/users',
        },
      ],
    },
  ];

  $: activeUrl = $location.pathname;
</script>

<Sidebar
  {activeUrl}
  asideClass="w-64"
  activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-slate-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-slate-900"
>
  <SidebarWrapper
    class="h-full min-h-[80vh] max-h-screen overflow-auto border border-light-bd dark:border-dark-bd bg-light-card dark:bg-dark-card flex flex-col justify-between"
  >
    <SidebarGroup ulClass="grid gap-2">
      {#each menuItems as item}
        {#if item.children}
          <SidebarDropdownWrapper label={item.label}>
            <svelte:fragment slot="icon">
              <svelte:component
                this={item.icon}
                class="w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400"
              />
            </svelte:fragment>
            {#each item.children as child}
              <Item item={child} />
            {/each}
          </SidebarDropdownWrapper>
        {:else}
          <Item {item} />
        {/if}
      {/each}
    </SidebarGroup>

    <SidebarGroup class="relative">
      <SidebarCta label="Alpha">
        <p class="mb-3 text-sm text-primary-900 dark:text-primary-400">
          Pinapp se encuentra en fase de desarrollo. Si encuentras algún error,
          por favor reportalo.
        </p>
      </SidebarCta>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
