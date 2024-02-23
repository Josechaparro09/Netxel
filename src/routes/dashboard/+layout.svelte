<script lang ="ts">

  import { error } from '@sveltejs/kit';
    import authLogin from '../login/authLogin';
    import Slidebar from './slidebar.svelte';
      
  
    
      let user = authLogin.user;
    function redirectIfNoUser(){
      if (!$user) {
        error(404)
        console.log("No hay usuario pa")
      }
    }
  </script>
  <main use:redirectIfNoUser>
    <div class="flex h-screen">
      <Slidebar/>
      <slot/>
    </div>
  </main> 
  
