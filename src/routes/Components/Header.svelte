<script>
  import { DarkMode,Button } from "flowbite-svelte";
  import authLogin from "../login/authLogin";
  import gravatarUrl from 'gravatar-url';
  import { goto } from "$app/navigation";
  const user = authLogin.user;

  const logout = async () => {
		await authLogin.signOut();
		goto('/');
	};
</script>

<header>
  <div class="mx-auto flex flex-wrap justify-between items-center container">
    <a href="/">
      <span class="flex borderp-10">
        <img class="w-12 h-12 m-3" src="NetxelLogo.svg" alt="logo" />
        <span class="grid place-content-center mt-1">
          <div
            class=" bg-primary-500 rounded-full items-center justify-center inline-flex py-0.5 px-2.5 font-medium color dark:text-white"
          >
            v0.0.15
          </div>
        </span>
      </span>
    </a>
    <div class="flex">
      <DarkMode class="px-10 border-black" />
     <div class="nav-end">
		
      {#if $user}
        <img src={gravatarUrl($user.email, { size: 40 })} alt="Gravatar" />
        <button class="bg-primary-300 text-white rounded-full" on:click={logout}>   Salir   </button>
      {/if}
      
	</div>
    </div>
  </div>
</header>
