const humanizeInputNumber = (value: string): string => {
  if (value === "" || value === "-") {
    return value;
  }

  const numbers = value.split(".");
  numbers[0] = Number(numbers[0]).toLocaleString("en-US");

  return numbers.join(".");
};

export default humanizeInputNumber;
