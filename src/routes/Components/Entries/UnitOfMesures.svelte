<script lang="ts">import { Section } from "flowbite-svelte-blocks";
    import { Label, Input, Button, Modal, Textarea, Select } from "flowbite-svelte";
    let defaultModal = false;
    const handleSubmit = () => {
      alert("Form submited.");
    };
    let selected = false;
    let categories = [
      { value: "tv", name: "TV/Monitors" },
      { value: "pc", name: "PC" },
      { value: "phone", name: "Phones" }
    ];
    </script>
    
    <Section classSection="h-96">
      <div class="flex justify-center m-5">
        <Button on:click={() => (defaultModal = true)}>Nueva medida</Button>
      </div>
      <Modal title="Nueva medida" bind:open={defaultModal} autoclose class="min-w-full">
        <form on:submit={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <Label for="Nombre corto" class="mb-2">Nombre corto</Label>
              <Input type="text" id="short-name"  required />
            </div>
            <div>
              <Label for="Nombre largo" class="mb-2">Nombre largo</Label>
              <Input type="text" id="large-name"  required />
            </div>
          </div>
          <div class=" justify-center bottom-0 right-0 flex items-end">
            <Button type="submit" class="w-52 h-50 ">
              <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg>
              Agregar medida
            </Button>
          </div>
        </form>
      </Modal>
    </Section>
