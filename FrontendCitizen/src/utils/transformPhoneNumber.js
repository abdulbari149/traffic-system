export default (number) => {
  let transformedNumber = number;
  if (!number.startsWith("+92")) {
    transformedNumber = "+92" + number.slice(1, number.length);
  }
  return transformedNumber;
};
