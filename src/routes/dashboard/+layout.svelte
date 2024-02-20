<script lang ="ts">

  import { error } from '@sveltejs/kit';
    import authLogin from '../login/authLogin';
    import Slidebar from './slidebar.svelte';
<<<<<<< HEAD
    let user = authLogin.user;

=======
      
  
    
      let user = authLogin.user;
>>>>>>> 3978b724418ba3a2eea6ab1b4795b71f3146cad2
    function redirectIfNoUser(){
      if (!$user) {
        error(404)
        console.log("No hay usuario pa")
      }
    }
  </script>
  <main use:redirectIfNoUser>
    {#if $user}
<<<<<<< HEAD
      <div class="flex h-screen">
        <Slidebar/>
        <slot/>
      </div>
=======
      <Slidebar/>
      <slot/>
>>>>>>> 3978b724418ba3a2eea6ab1b4795b71f3146cad2
    {/if}
  </main> 
  
