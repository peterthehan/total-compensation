import { FC } from "react";
import humanizeInputNumber from "../utils/humanizeInputNumber";

interface NumberInputProps {
  label?: string;
  prefix?: string;
  suffix?: string;
  value: string;
  min?: number;
  max?: number;
  maximumFractionDigits?: number;
  onChange: Setter<string>;
  formatValue?: (value: string) => string;
}

const NumberInput: FC<NumberInputProps> = ({
  label = "",
  prefix = "",
  suffix = "",
  value,
  min = 0,
  max = Number.MAX_SAFE_INTEGER,
  maximumFractionDigits = 2,
  onChange,
  formatValue = humanizeInputNumber,
}) => {
  const sanitize = (value: string): string => {
    return value.replace(/[^-\d.]+/g, "");
  };

  const validate = (value: string): boolean => {
    const validateRegExp =
      maximumFractionDigits === 0
        ? RegExp("^-?\\d*$")
        : RegExp(`^-?\\d*\\.?\\d{0,${maximumFractionDigits}}$`);
    return validateRegExp.test(value);
  };

  const format = (value: string): string => {
    // handle non-number cases
    if (value === "" || value === "-") {
      return value;
    }

    // add leading zero
    if (value.startsWith(".") || value.startsWith("-.")) {
      value = value.replace(".", "0.");
    }

    const number = Number(value);

    if (number < min) {
      return min.toString();
    }

    if (number > max) {
      return max.toString();
    }

    // handle leading and negative zeroes
    const numbers = value.split(".");
    numbers[0] = numbers[0].startsWith("-")
      ? `-${Math.abs(Number(numbers[0]))}`
      : Number(numbers[0]).toString();

    return numbers.join(".");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const sanitizedValue = sanitize(event.target.value);
    if (!validate(sanitizedValue)) {
      return;
    }

    onChange(format(sanitizedValue));
  };

  return (
    <div className="input">
      {label && <div>{label}</div>}
      {prefix}
      <input
        type="search"
        inputMode="decimal"
        onChange={handleChange}
        value={formatValue(value)}
      />
      {suffix}
    </div>
  );
};

export default NumberInput;
