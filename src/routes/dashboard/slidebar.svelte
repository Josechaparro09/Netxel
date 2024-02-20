<script lang="ts">
	import Categories from '../components/Entries/Old table.svelte';
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
<<<<<<< HEAD
  <span class= "">
=======
  <span class= "mx-auto flex flex-wrap  items-center container">
>>>>>>> 3978b724418ba3a2eea6ab1b4795b71f3146cad2
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
          
<<<<<<< HEAD
          <SidebarItem label="Ventas" href="/dashboard/ventas" {spanClass}>
            <svelte:fragment slot="icon">
              <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
            
=======
          <SidebarItem label="Inbox" {spanClass}>
            <svelte:fragment slot="icon">
              <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            </svelte:fragment>
            <svelte:fragment slot="subtext">
              <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
            </svelte:fragment>
>>>>>>> 3978b724418ba3a2eea6ab1b4795b71f3146cad2
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
