<script lang="ts">import { Section, Register } from 'flowbite-svelte-blocks';
  import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
  </script>
  
    
    <div class="grid place-content-center place-items-center py-10">
    <Section name="login">
      <Register href="/">
        <svelte:fragment slot="top">
          <img class="w-12 h-12 flex items-center text-primary-100 mb-3" src="src\Images\NetxelLogo.svg" alt="logo" />
          etxel
        </svelte:fragment>
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="grid gap-6 w-[560px] p-8 pl-9 pr-9" action="/">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Iniciar sesion</h3>
            <Label class="space-y-2">
              <span>Correo</span>
              <Input type="email" name="email" placeholder="name@netxel.com" required />
            </Label>
            <Label class="space-y-2">
              <span>Contraseña</span>
              <Input type="password" name="password" placeholder="•••••" required />
            </Label>
            <div class="flex items-start">
              <Checkbox>Recordarme</Checkbox>
              <a href="/PasswordReset" class="ml-auto text-sm  text-primary-500 hover:underline dark:text-primary-50">¿Olvidaste tu contraseña?</a>
            </div>
            <Button type="submit" class="w-full1 bg-primary-500">Sign in</Button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              ¿No tienes cuenta todavia? <a href="/" class="font-medium text-primary-500 hover:underline dark:text-primary-50">Registrarse</a>
            </p>
          </form>
        </div>
      </Register>
    </Section>
  </div>
  

  