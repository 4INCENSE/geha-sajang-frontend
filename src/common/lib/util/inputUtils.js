export const removeChar = (value) => {
  const pattern = /[^0-9]/gi;
  return value.replace(pattern, '');
};
