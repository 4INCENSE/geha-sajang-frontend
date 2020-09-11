export const removeChar = (value) => {
  const pattern = /[^0-9]/gi;
  return value.replace(pattern, '');
};

export const numberWithCommas = (numberValue) => {
  const number = numberValue.replace(/,/gi, '');
  return Number(number).toLocaleString();
};

export const calculateAvailableStringLength = (value, limitLength) => {
  return limitLength - value.length;
};

export const checkIsOnlyBlank = (value) => {
  const blankPattern = /^\s+|\s+$/g;
  const valueLengthWithoutBlank = value.replace(blankPattern, '').length;
  return valueLengthWithoutBlank === 0 ? true : false;
};
