import { FC } from "react";
import NumberInput from "./NumberInput";

interface FormProps {
  compensation: Compensation;
  compensationSetters: CompensationSetters;
  ids: string[];
}

const Form: FC<FormProps> = ({
  compensation: {
    baseSalary,
    totalStock,
    signingBonusOne,
    baseSalaryGrowth,
    stockGrowth,
    vestingSchedule,
    signingBonusTwo,
    performanceBonus,
    relocationBonus,
    miscellaneous,
  },
  compensationSetters: {
    setBaseSalary,
    setTotalStock,
    setSigningBonusOne,
    setBaseSalaryGrowth,
    setStockGrowth,
    setVestingSchedule,
    setSigningBonusTwo,
    setPerformanceBonus,
    setRelocationBonus,
    setMiscellaneous,
  },
  ids,
}) => {
  return (
    <>
      <details open>
        <summary>Basic</summary>
        <NumberInput
          label="Base Salary"
          prefix="$"
          suffix="/year"
          value={baseSalary}
          onChange={setBaseSalary}
        />
        <NumberInput
          label={`Total Stock Grant (${vestingSchedule.map(Number).join("-")})`}
          prefix="$"
          value={totalStock}
          onChange={setTotalStock}
        />
        <NumberInput
          label="Signing Bonus (Year 1)"
          prefix="$"
          value={signingBonusOne}
          onChange={setSigningBonusOne}
        />
      </details>
      <details>
        <summary>Advanced</summary>
        <NumberInput
          label="Estimated Base Salary Growth"
          suffix="%/year"
          value={baseSalaryGrowth}
          onChange={setBaseSalaryGrowth}
        />
        <NumberInput
          label="Estimated Stock Growth"
          suffix="%/year"
          value={stockGrowth}
          min={-100}
          onChange={setStockGrowth}
        />
        {vestingSchedule.map((value, index) => {
          return (
            <NumberInput
              label={`Vesting Schedule (Year ${index + 1})`}
              suffix="%"
              value={value}
              max={100}
              onChange={(value) => {
                const copyVestingSchedule = [...vestingSchedule];
                copyVestingSchedule[index] = value;
                setVestingSchedule(copyVestingSchedule);
              }}
              key={`vesting-schedule-${ids[index]}`}
            />
          );
        })}
        <NumberInput
          label="Signing Bonus (Year 2)"
          prefix="$"
          value={signingBonusTwo}
          onChange={setSigningBonusTwo}
        />
        <NumberInput
          label="Performance Bonus"
          suffix="%/year"
          value={performanceBonus}
          onChange={setPerformanceBonus}
        />
        <NumberInput
          label="Relocation Bonus"
          prefix="$"
          value={relocationBonus}
          onChange={setRelocationBonus}
        />
        <NumberInput
          label="Miscellaneous"
          prefix="$"
          suffix="/year"
          value={miscellaneous}
          onChange={setMiscellaneous}
        />
      </details>
    </>
  );
};

export default Form;
