import type { Path } from '$lib/shared';

export interface Column<T = any> {
  name: string;
  uid: Path<T>;
  render?: (value: T, idx?: number) => string;
}

export interface BaseEntity {
  active: boolean;
}
