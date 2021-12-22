import { FC } from "react";
import humanizeRenderNumber from "../utils/humanizeRenderNumber";

const WORKING_HOURS_IN_YEAR = 2080; // 52 weeks * 40 hours

interface ResultProps {
  compensation: Compensation;
  ids: string[];
}

const Result: FC<ResultProps> = ({
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
  ids,
}) => {
  const numBaseSalary = Number(baseSalary) || 0;
  const numTotalStock = Number(totalStock) || 0;
  const numSigningBonusOne = Number(signingBonusOne) || 0;
  const numBaseSalaryGrowth = Number(baseSalaryGrowth) || 0;
  const numStockGrowth = Number(stockGrowth) || 0;

  const copyVestingSchedule = [...vestingSchedule];
  while (
    copyVestingSchedule.length &&
    copyVestingSchedule[copyVestingSchedule.length - 1] === ""
  ) {
    copyVestingSchedule.pop();
  }
  const numVestingSchedule = copyVestingSchedule.map(
    (value) => Number(value) || 0
  );

  const numSigningBonusTwo = Number(signingBonusTwo) || 0;
  const numPerformanceBonus = Number(performanceBonus) || 0;
  const numRelocationBonus = Number(relocationBonus) || 0;
  const numMiscellaneous = Number(miscellaneous) || 0;

  const calculateBase = (year: number): number => {
    return numBaseSalary * Math.pow(numBaseSalaryGrowth / 100 + 1, year - 1);
  };

  const calculateStock = (year: number): number => {
    return (
      numTotalStock *
      (numVestingSchedule[year - 1] / 100) *
      Math.pow(numStockGrowth / 100 + 1, year)
    );
  };

  const calculateBonus = (year: number, base: number): number => {
    return (
      (year - 1 === 0 ? numSigningBonusOne + numRelocationBonus : 0) +
      (year - 1 === 1 ? numSigningBonusTwo : 0) +
      base * (numPerformanceBonus / 100) +
      numMiscellaneous
    );
  };

  const calculate = (): Calculation[] => {
    return new Array(numVestingSchedule.length).fill("").map((_, index) => {
      const year = index + 1;
      const base = calculateBase(year);
      const stock = calculateStock(year);
      const bonus = calculateBonus(year, base);

      const total = base + stock + bonus;
      const hourly = total / WORKING_HOURS_IN_YEAR;

      return { year, total, hourly, base, stock, bonus };
    });
  };

  const calculateTotal = (calculation: Calculation[]): number => {
    return calculation
      .map((i) => i.total)
      .reduce((sum, value) => sum + value, 0);
  };

  const calculation = calculate();
  const total = calculateTotal(calculation);

  return (
    <div className="spacer">
      <b>{`Total ${numVestingSchedule.length}-year Compensation`}</b>
      <div className="horizontal-scroll">
        {`$${humanizeRenderNumber(total.toString())}`}
      </div>
      <div className="horizontal-scroll">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total</th>
              <th>Hourly</th>
              <th>Base</th>
              <th>Stock</th>
              <th>Bonus</th>
            </tr>
          </thead>
          <tbody>
            {calculation.map((i, index) => {
              return (
                <tr key={`calculation-${ids[index]}`}>
                  <td>{i.year}</td>
                  <td>{`$${humanizeRenderNumber(i.total.toString())}`}</td>
                  <td>{`$${humanizeRenderNumber(i.hourly.toString())}`}</td>
                  <td>{`$${humanizeRenderNumber(i.base.toString())}`}</td>
                  <td>{`$${humanizeRenderNumber(i.stock.toString())}`}</td>
                  <td>{`$${humanizeRenderNumber(i.bonus.toString())}`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
