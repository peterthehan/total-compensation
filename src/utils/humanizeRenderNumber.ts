const humanizeRenderNumber = (
  value: string,
  options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
): string => {
  const [whole, decimal] = Number(value)
    .toLocaleString("en-US", options)
    .split(".");
  if (decimal === undefined || Number(decimal) === 0) {
    return whole;
  }

  return `${whole}.${decimal}`;
};

export default humanizeRenderNumber;
