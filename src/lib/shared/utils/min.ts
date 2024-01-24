export function min(n: number) {
  return (value: any) => {
    const val = isNaN(value) ? value?.length : parseFloat(value);
    return { valid: val >= n, name: 'min' };
  };
}
