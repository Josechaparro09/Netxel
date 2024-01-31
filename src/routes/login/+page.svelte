<script lang="ts">import { Section, Register } from 'flowbite-svelte-blocks';
  import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
  import authLogin, { supabase } from './authLogin';
  import { goto } from '$app/navigation';
  let loading: boolean = false;
  let email: string, password: string;
  let message: { success: boolean | null, display: string } = { success: null, display: "" };

  const handleLogin = async (): Promise<void> => {
    try {
      loading = true;
      const { error } = await authLogin.signIn(email, password);
      if (error) throw error;
      message = { success: true, display: "Successfully logged in!" };
      goto("/dashboard")
    } catch (error:any) {
      let errorMsg: string = error.error_description || error.message;
      message = { success: false, display: errorMsg };
    } finally {
      loading = false;
    }
}
	
  </script>
  
    
    <div class="grid place-content-center  py-10">
    <Section name="login">
      <Register href="/dashboard">
        <svelte:fragment slot="top">
          <img class="w-full h-full flex items-center text-primary-100 mb-3" src="src\Images\Logo.svg" alt="logo" />
        </svelte:fragment>
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form on:submit|preventDefault={handleLogin} class="grid gap-6 w-[560px] p-8 pl-9 pr-9" action="/">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Iniciar sesion</h3>
            <Label class="space-y-2">
              <span>Email</span>
              <Input type="email" name="email" bind:value={email} required  />
            </Label>
            <Label class="space-y-2">
              <span>Contraseña</span>
              <Input type="password" name="password"  bind:value={password} required />
            </Label>
            <div class="flex items-start">
              <Checkbox>Recordarme</Checkbox>
              <a href="/forgot-password" class="ml-auto text-sm  text-primary-500 hover:underline dark:text-primary-50">¿Olvidaste tu contraseña?</a>
            </div>
            <Button type="submit" class="w-full1 bg-primary-500">Iniciar sesion</Button>
            
          </form>
        </div>
      </Register>
    </Section>
  </div>
  <div>
    {#if message.success != null}
			<div class="alert {message.success ? 'alert-success' : 'alert-danger'}" role="alert">
				{message.display}
			</div>
		{/if}
  </div>
  

  