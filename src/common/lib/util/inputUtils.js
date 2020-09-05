export const removeChar = (value) => {
  const pattern = /[^0-9]/gi;
  return value.replace(pattern, '');
};

export const numberWithCommas = (numberValue) => {
  const number = numberValue.replace(/,/gi, '');
  return Number(number).toLocaleString();
};
