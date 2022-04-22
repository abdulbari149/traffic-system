export default (number) => {
  let transformedNumber = number;
  if (!number.startsWith("+92")) {
    transformedNumber = "+92" + values.number.slice(1, values.number.length);
  }
  return transformedNumber;
};
