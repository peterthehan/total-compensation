import { FC } from "react";
import "./App.css";
import Copy from "./Copy";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import useStringArrayQueryString from "../hooks/useStringArrayQueryString";
import useStringQueryString from "../hooks/useStringQueryString";
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
  const [baseSalary, setBaseSalary] = useStringQueryString(
    "bs",
    initialBaseSalary
  );
  const [totalStock, setTotalStock] = useStringQueryString(
    "sg",
    initialTotalStock
  );
  const [signingBonusOne, setSigningBonusOne] = useStringQueryString(
    "sbone",
    initialSigningBonusOne
  );
  const [baseSalaryGrowth, setBaseSalaryGrowth] = useStringQueryString(
    "bsgr",
    initialBaseSalaryGrowth
  );
  const [stockGrowth, setStockGrowth] = useStringQueryString(
    "gr",
    initialStockGrowth
  );
  const [vestingSchedule, setVestingSchedule] = useStringArrayQueryString(
    "ve",
    initialVestingSchedule
  );
  const [signingBonusTwo, setSigningBonusTwo] = useStringQueryString(
    "sbtwo",
    initialSigningBonusTwo
  );
  const [performanceBonus, setPerformanceBonus] = useStringQueryString(
    "bp",
    initialPerformanceBonus
  );
  const [relocationBonus, setRelocationBonus] = useStringQueryString(
    "rb",
    initialRelocationBonus
  );
  const [miscellaneous, setMiscellaneous] = useStringQueryString(
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
        <Copy text={window.location.href} />
        <div className="spacer">
          <button onClick={handleReset}>📝 Reset Form</button>
        </div>
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
        <Footer />
      </div>
    </div>
  );
};

export default App;
