export const indexObjectField = (object: any, fieldPath: string) => {
  const fieldList = fieldPath.split('.');
  let value: any = { ...object };
  for (const field of fieldList) {
    if (value) {
      value = value[field];
    }
  }

  return value;
};
