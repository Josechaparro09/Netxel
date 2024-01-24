import type { HTMLInputTypeAttribute } from 'svelte/elements';
import type { Path } from './Path';
import type { Validator } from 'svelte-forms';
import type { Writable } from 'svelte/store';

export interface FormField<TField> {
  name: Path<TField>;
  label: string;
  defaultValue?: any;
  variant?:
    | 'input'
    | 'select'
    | 'autocomplete'
    | 'area'
    | 'checkbox'
    | 'radio'
    | 'switch'
    | 'divider';
  type?: HTMLInputTypeAttribute;
  validators?: Validator[];
  required?: boolean;
  icon?: any;
  rightIcon?: any;
}

export declare type Field<T> = {
  name: string;
  value: T;
  valid: boolean;
  invalid: boolean;
  dirty: boolean;
  errors: string[];
};

export type LogicField<T> = Omit<Writable<Field<T>>, 'set'> & {
  validate: () => Promise<Field<T>>;
  reset: () => void;
  clear: () => void;
  set(this: void, value: T | Field<T>): void;
};
