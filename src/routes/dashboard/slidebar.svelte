<script lang="ts">
    import { page } from "$app/stores";
    import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, BagSolid, ArrowRightToBracketSolid, FileEditSolid, FireSolid, BookSolid, WindowRestoreOutline, LifeBuoySolid, ShoppingCartSolid, ChevronDoubleUpOutline, ChevronDoubleDownOutline } from 'flowbite-svelte-icons';
    
    import {
      Button,
      Sidebar,
      SidebarGroup,
      SidebarItem,
      SidebarWrapper,
      SidebarDropdownItem,
      SidebarDropdownWrapper,
      Dropdown,
      DropdownItem,
    } from "flowbite-svelte";
    let spanClass = "flex-1 ml-3 whitespace-nowrap";
    $: activeUrl = $page.url.pathname;
  </script>  
  <span class= "">
    <Sidebar>
      <SidebarWrapper>
        <SidebarGroup>
          <SidebarItem label="Inicio">
            <svelte:fragment slot="icon">
              <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <SidebarDropdownWrapper label="Registros">
            <svelte:fragment slot="icon">
              <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
            <svelte:fragment slot="arrowup">
              <ChevronDoubleUpOutline class="w-3 h-3" />
            </svelte:fragment>
            <svelte:fragment slot="arrowdown">
              <ChevronDoubleDownOutline class="w-3 h-3" />
            </svelte:fragment>
            <SidebarDropdownItem label="Categorias" href = "/dashboard/categorias"/>
            <SidebarDropdownItem label="Medidas" href = "/dashboard/medidas"/>
            <SidebarDropdownItem label="Productos" href = "/dashboard/productos" />
            <SidebarDropdownItem label="Insumos" href = "/dashboard/insumos"/>
            <SidebarDropdownItem label="Empleados" href = "/dashboard/empleados"/>
            <SidebarDropdownItem label="Proveedores" href = "/dashboard/proveedores"/>

          </SidebarDropdownWrapper>
          <SidebarDropdownWrapper label="Produccion">
            <svelte:fragment slot="icon">
              <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
            <svelte:fragment slot="arrowup">
              <ChevronDoubleUpOutline class="w-3 h-3" />
            </svelte:fragment>
            <svelte:fragment slot="arrowdown">
              <ChevronDoubleDownOutline class="w-3 h-3" />
            </svelte:fragment>
            <SidebarDropdownItem label="Ver insumos" href = "/dashboard/categorias"/>
            <SidebarDropdownItem label="Ver productos" href = "/dashboard/medidas"/>
            <SidebarDropdownItem label="Productos" href = "/dashboard/productos" />
            <SidebarDropdownItem label="Insumos" href = "/dashboard/insumos"/>
            <SidebarDropdownItem label="Empleados" href = "/dashboard/empleados"/>
            <SidebarDropdownItem label="Proveedores" href = "/dashboard/proveedores"/>

          </SidebarDropdownWrapper>

          <SidebarItem label="Ventas" href="/dashboard/ventas" {spanClass}>
            <svelte:fragment slot="icon">
              <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>

          </SidebarItem>
          <SidebarItem label="Users">
            <svelte:fragment slot="icon">
              <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Products">
            <svelte:fragment slot="icon">
              <BagSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Sign In">
            <svelte:fragment slot="icon">
              <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Sign Up">
            <svelte:fragment slot="icon">
              <FileEditSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
        </SidebarGroup>
        <SidebarGroup border>
          <SidebarItem label="Upgrade to Pro">
            <svelte:fragment slot="icon">
              <FireSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Documentation">
            <svelte:fragment slot="icon">
              <BookSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Components">
            <svelte:fragment slot="icon">
              <WindowRestoreOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem label="Help">
            <svelte:fragment slot="icon">
              <LifeBuoySolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
          </SidebarItem>
        </SidebarGroup>
      </SidebarWrapper>
    </Sidebar>
  </span>