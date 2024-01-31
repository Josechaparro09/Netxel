<script lang ="ts">
  import { goto} from '$app/navigation';
  import {error } from '@sveltejs/kit';
  import authLogin from '../login/authLogin';
  import Dashboard from './Dashboard.svelte';
	

  
	let user = authLogin.user;
  function redirectIfNoUser(){
    if (!$user) {
      goto('/error');
    }
  }
</script>

<main use:redirectIfNoUser>
  {#if $user}
    <Dashboard/>
  {/if}
</main>