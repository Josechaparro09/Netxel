<script lang="ts" generics="T = any">
  import Autocomplete from '$lib/forms/components/Autocomplete.svelte';

  import FieldTemplate from './FieldTemplate.svelte';
  import Input from './Input.svelte';

  import type { FormField, LogicField } from '$lib/shared/models';

  export let field: FormField<T>;
  export let logicField: LogicField<any>;
  export let disabled = false;

  let clazz = '';
  export { clazz as class };
</script>

<FieldTemplate
  label={field.label}
  required={field.required}
  error={$logicField.errors[0]}
>
  {#if field.variant == 'input'}
    <Input
      {disabled}
      {logicField}
      class={clazz}
      error={$logicField.errors.length > 0}
      type={field.type ?? 'text'}
      icon={field.icon}
      name={field.name}
    />
  {:else if field.variant == 'autocomplete'}
    <Autocomplete
      {disabled}
      {logicField}
      name={field.name}
      error={$logicField.errors.length > 0}
    />
  {/if}
</FieldTemplate>
