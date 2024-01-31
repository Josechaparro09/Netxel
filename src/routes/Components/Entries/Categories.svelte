<script lang="ts">import { Section } from "flowbite-svelte-blocks";
    import { Label, Input, Button, Modal, Textarea, Select } from "flowbite-svelte";
    let defaultModal = false;
    const handleSubmit = () => {
      alert("Form submited.");
    };
    let selected = false;
    </script>
    
    <Section classSection="h-96">
      <div class="flex justify-center m-5">
        <Button on:click={() => (defaultModal = true)}>Nueva categoria</Button>
      </div>
      <Modal title="Nueva categoria" bind:open={defaultModal} autoclose class="min-w-full">
        <form on:submit={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <Label for="Nombre" class="mb-2">Name</Label>
              <Input type="text" id="name"  required />
            </div>
            <div class=" justify-center bottom-0 right-0 flex items-end">
              <Button type="submit" class="w-52 h-50 ">
                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg>
                Agregar categoria
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </Section>
