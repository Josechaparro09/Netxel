<script lang ="ts">
  import { goto} from '$app/navigation';
  import authLogin from '../login/authLogin';
  import Home from '../home/home.svelte';
	

  
	let user = authLogin.user;
  function redirectIfNoUser(){
    if ($user) {
      goto('/dashboard');
    }
  }
</script>

<main use:redirectIfNoUser>
  {#if !$user}
    <Home/>
  {/if}
</main>