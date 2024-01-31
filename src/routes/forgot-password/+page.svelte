<script lang="ts">
  import { Section, Register } from "flowbite-svelte-blocks";
  import { Button, Checkbox, Label, Input } from "flowbite-svelte";
</script>

<div class="grid place-content-center place-items-center py-10">
  <Section name="login">
    <Register href="/">
      <svelte:fragment slot="top">
        <img
          class="w-full h-full flex items-center text-primary-100 mb-3"
          src="src\Images\Logo.svg"
          alt="logo"
        />
      </svelte:fragment>
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form class="grid gap-6 w-[560px] p-8 pl-9 pr-9" action="/">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
            Recuperar contraseña
          </h3>
          <Label class="space-y-2">
            <span>Email</span>
            <Input type="email" name="email" required />
          </Label>

          <Button type="submit" class="w-full1 bg-primary-500">Enviar</Button>
        </form>
      </div>
    </Register>
  </Section>
</div>
