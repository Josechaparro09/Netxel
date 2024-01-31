<script lang="ts">import { Section } from "flowbite-svelte-blocks";
    import { Label, Input, Button, Modal, Textarea, Select } from "flowbite-svelte";
    let defaultModal = false;
    const handleSubmit = () => {
      alert("Form submited.");
    };
    let measureSelected:any;
    let categorySelected :any;
    let measures = [
      { value: "cc", name: "Centimetro cubico" },
      { value: "ml", name: "Mililitro" },
      { value: "L", name: "Litro" }
    ];
    let categories = [
      { value: "Vinagre", name: "Vinagre" },
      { value: "Salsa", name: "Salsa" },
      { value: "Esencia", name: "Esencia" }
    ];
    </script>
    
    <Section classSection="h-96">
      <div class="flex justify-center m-5">
        <Button on:click={() => (defaultModal = true)}>Nuevo producto</Button>
      </div>
      <Modal title="Nuevo producto" bind:open={defaultModal} autoclose class="min-w-full">
        <form on:submit={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <Label for="name" class="mb-2">Name</Label>
              <Input type="text" id="name"required />
            </div>
            <div>
                <Label for="presentation" class="mb-2">Presentacion</Label>
                <Input type="text" id="presentation"required />
            </div>
            <div>
                <Label
                  >Medida
                  <Select class="mt-2" items={measures} bind:value={measureSelected} required />
                </Label>
            </div>
            <div>
                <Label
                  >Categoria
                  <Select class="mt-2" items={categories} bind:value={categorySelected} required  />
                </Label>
              </div>
            <div>
                
              <Label for="price" class="mb-2">Costo fabricación</Label>
              <Input type="text" id="price"required />
            </div>
            
            <div>
                <Label for="sell-price" class="mb-2">Precio de venta</Label>
                <Input type="text" id="sell-price"required />
            </div>
            <div class="sm:col-span-2">
              <Label for="description" class="mb-2">Descripción</Label>
              <Textarea id="description" placeholder="Describe el producto" rows="4" name="description"  />
            </div>
            <Button type="submit" class="w-52">
              <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg>
              Agregar producto
            </Button>
          </div>
        </form>
      </Modal>
    </Section>