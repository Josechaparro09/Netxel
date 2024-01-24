<script lang="ts">
  import { SidebarDropdownItem, SidebarItem } from 'flowbite-svelte';
  import { Link } from 'svelte-navigator';
  import type { MenuItem } from '$lib/shared';

  export let item: MenuItem;
</script>

<Link to={item.href}>
  {#if item.icon}
    <SidebarItem label={item.label} href={item.href}>
      <svelte:fragment slot="icon">
        <svelte:component
          this={item.icon}
          class="w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        />
      </svelte:fragment>
    </SidebarItem>
  {:else}
    <SidebarItem spanClass="pl-8" label={item.label} href={item.href} />
  {/if}
</Link>
