import { FC } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";
import useQueryString from "../hooks/useQueryString";
import useQueryStringArray from "../hooks/useQueryStringArray";
import generateId from "../utils/generateId";

const initialBaseSalary = "";
const initialTotalStock = "";
const initialSigningBonusOne = "";
const initialBaseSalaryGrowth = "";
const initialStockGrowth = "";
const initialVestingSchedule = ["25", "25", "25", "25", ""];
const initialSigningBonusTwo = "";
const initialPerformanceBonus = "";
const initialRelocationBonus = "";
const initialMiscellaneous = "";

const ids = [
  generateId(),
  generateId(),
  generateId(),
  generateId(),
  generateId(),
];

const App: FC = () => {
  const [baseSalary, setBaseSalary] = useQueryString("bs", initialBaseSalary);
  const [totalStock, setTotalStock] = useQueryString("sg", initialTotalStock);
  const [signingBonusOne, setSigningBonusOne] = useQueryString(
    "sbone",
    initialSigningBonusOne
  );
  const [baseSalaryGrowth, setBaseSalaryGrowth] = useQueryString(
    "bsgr",
    initialBaseSalaryGrowth
  );
  const [stockGrowth, setStockGrowth] = useQueryString(
    "gr",
    initialStockGrowth
  );
  const [vestingSchedule, setVestingSchedule] = useQueryStringArray(
    "ve",
    initialVestingSchedule
  );
  const [signingBonusTwo, setSigningBonusTwo] = useQueryString(
    "sbtwo",
    initialSigningBonusTwo
  );
  const [performanceBonus, setPerformanceBonus] = useQueryString(
    "bp",
    initialPerformanceBonus
  );
  const [relocationBonus, setRelocationBonus] = useQueryString(
    "rb",
    initialRelocationBonus
  );
  const [miscellaneous, setMiscellaneous] = useQueryString(
    "misc",
    initialMiscellaneous
  );

  const handleReset = () => {
    setBaseSalary(initialBaseSalary);
    setTotalStock(initialTotalStock);
    setSigningBonusOne(initialSigningBonusOne);
    setBaseSalaryGrowth(initialBaseSalaryGrowth);
    setStockGrowth(initialStockGrowth);
    setVestingSchedule(initialVestingSchedule);
    setSigningBonusTwo(initialSigningBonusTwo);
    setPerformanceBonus(initialPerformanceBonus);
    setRelocationBonus(initialRelocationBonus);
    setMiscellaneous(initialMiscellaneous);
  };

  return (
    <div className="parent-container">
      <div className="child-container">
        <h1>Total Compensation</h1>
        <button onClick={handleReset}>Reset Form</button>
        <Form
          compensation={{
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
          }}
          compensationSetters={{
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
          }}
          ids={ids}
        />
        <hr />
        <Result
          compensation={{
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
          }}
          ids={ids}
        />
      </div>
    </div>
  );
};

export default App;
