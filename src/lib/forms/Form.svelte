<script lang="ts" generics="T">
  import type { Readable } from 'svelte/motion';
  import type { Writable } from 'svelte/store';

  import { required } from 'svelte-forms/validators';

  import DynamicFormField from './components/DynamicFormField.svelte';

  import { GradientButton, Spinner } from 'flowbite-svelte';

  import { form as buildForm, field, type Validator } from 'svelte-forms';

  import ServerResponse from '$lib/components/atomic/ServerResponse.svelte';
  import type { Field, FormField, LogicField } from '$lib/shared/models';

  let clazz = '';
  export { clazz as class };
  export let onSubmit: (formValues: T) => Promise<any> | any;
  export let onSucceed: (formValues: any) => Promise<any> | any = () => {};
  export let withServerMessage = false;
  export let withReset = true;
  export let formFields: FormField<T>[];
  export let submitLabel: string;
  export let columns = 'md:grid-cols-1';
  let autocomplete: Writable<Field<any>> | Readable<Field<any>>;

  const fields: LogicField<any>[] = formFields.map((f) => {
    let validators: Validator[] = [];
    if (f.required) {
      validators.push(required());
    }
    validators = [...validators, ...(f.validators ?? [])];
    return field(f.name, f.defaultValue, validators);
  });

  const form = buildForm(...fields);

  let responseMessage: string | undefined;
  let responseError = false;
  let isSubmitting = false;
  let hasSubmitted = false;

  function startSubmission(e: MouseEvent) {
    e.stopPropagation();
    isSubmitting = true;
  }

  const submit = async (e: Event) => {
    e.preventDefault();

    Object.keys($form.summary).forEach((field: string) => {
      // @ts-ignore
      if (typeof $form.summary[field]?.value !== 'string') return;
      // @ts-ignore
      const isInvalid = $form.summary[field].value?.trim() === '';
      if (isInvalid) {
        // @ts-ignore
        autocomplete = form.getField(field);
        $autocomplete.value = null;
      }
    });

    await form.validate();

    if (!$form.valid) return;

    isSubmitting = true;
    const data = await onSubmit($form.summary as any);
    responseMessage = data?.message;
    responseError = data?.error;
    isSubmitting = false;
    hasSubmitted = true;
    withReset && form.reset();
    onSucceed && onSucceed(data);
  };
</script>

<form class="text-left {clazz}" on:submit={submit}>
  <div class="grid gap-2 {columns} grid-cols-1">
    {#each fields as logicField, i}
      <DynamicFormField
        field={formFields[i]}
        {logicField}
        disabled={isSubmitting}
      />
    {/each}
  </div>

  <GradientButton
    disabled={isSubmitting}
    size="lg"
    color="green"
    type="submit"
    class="w-full"
  >
    {#if isSubmitting}
      <Spinner class="mr-3" color="white" size="4" />
      {submitLabel}...
    {:else}
      {submitLabel}
    {/if}
  </GradientButton>
  <slot {isSubmitting} {hasSubmitted} {startSubmission} />
  {#if withServerMessage}
    <ServerResponse message={responseMessage} error={responseError} />
  {/if}
</form>
