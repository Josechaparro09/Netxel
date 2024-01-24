<script lang="ts">
  import {
    DarkMode,
    NavLi,
    Navbar,
    NavUl,
    NavHamburger,
    GradientButton,
    Badge,
    Spinner,
  } from 'flowbite-svelte';
  import {
    SunSolid,
    MoonSolid,
    ArrowLeftToBracketOutline,
  } from 'flowbite-svelte-icons';
  import { link, useLocation } from 'svelte-navigator';
  import SpotlightButton from '../atomic/SpotlightButton.svelte';
  import type { User } from '@supabase/supabase-js';
  import { auth, APP_VERSION, signOut } from '$lib/shared';

  const location = useLocation();

  let path: string;
  $: {
    path = $location.pathname;
  }

  let user: User | null;

  $: {
    user = $auth.user;
  }

  let signingOut = false;
</script>

<Navbar
  navClass="bg-slate-900 dark:bg-slate-950 px-2 sm:px-4 py-2.5 absolute w-full z-[100] top-0 left-0 border-b"
  let:hidden
  let:toggle
  color="form"
>
  <div class="grid grid-cols-2">
    <a
      class="grid place-content-center"
      href={!user ? '/' : path === '/' ? '/panel/dashboard' : '/'}
      use:link
    >
      <img src="/favicon.svg" class="h-8" alt="Pinapp Logo" />
    </a>
    <span class="grid place-content-center mt-1">
      <Badge rounded color="purple">v{APP_VERSION}</Badge>
    </span>
  </div>
  <div class="flex md:order-2">
    <div class="grid place-content-center">
      <DarkMode
        class="ml-3 text-lg hover:bg-slate-800 dark:hover:bg-slate-900 focus:ring-gray-700"
      >
        <svelte:fragment slot="lightIcon">
          <SunSolid />
        </svelte:fragment>
        <svelte:fragment slot="darkIcon">
          <MoonSolid />
        </svelte:fragment>
      </DarkMode>
    </div>
    <NavUl ulClass="m-1" {hidden}>
      {#if path !== '/auth/login' && !user}
        <NavLi>
          <a href="/auth/login" use:link>
            <SpotlightButton>
              <svelte:fragment slot="icon">
                <ArrowLeftToBracketOutline class="w-4 h-4 mr-2" />
              </svelte:fragment>
              Iniciar Sesión
            </SpotlightButton>
          </a>
        </NavLi>
      {/if}
      {#if user}
        <NavLi>
          <div class="flex">
            <Badge
              class="mr-2 bg-indigo-900 text-indigo-300"
              rounded
              color="indigo">{user.email}</Badge
            >
            <GradientButton
              size="sm"
              pill
              color="green"
              on:click={async () => {
                signingOut = true;
                await signOut();
                signingOut = false;
              }}
            >
              {#if signingOut}
                <Spinner class="mr-3" color="white" size="4" />
                Cerrando sesión...
              {:else}
                <ArrowLeftToBracketOutline class="w-4 h-4 mr-2" />
                Salir
              {/if}
            </GradientButton>
          </div>
        </NavLi>
      {/if}
    </NavUl>

    <NavHamburger on:click={toggle} />
  </div>
</Navbar>
