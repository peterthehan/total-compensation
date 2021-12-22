/// <reference types="react-scripts" />

interface Compensation {
  baseSalary: string;
  totalStock: string;
  signingBonusOne: string;
  baseSalaryGrowth: string;
  stockGrowth: string;
  vestingSchedule: string[];
  signingBonusTwo: string;
  performanceBonus: string;
  relocationBonus: string;
  miscellaneous: string;
}

interface CompensationSetters {
  setBaseSalary: Setter<string>;
  setTotalStock: Setter<string>;
  setSigningBonusOne: Setter<string>;
  setBaseSalaryGrowth: Setter<string>;
  setStockGrowth: Setter<string>;
  setVestingSchedule: Setter<string[]>;
  setSigningBonusTwo: Setter<string>;
  setPerformanceBonus: Setter<string>;
  setRelocationBonus: Setter<string>;
  setMiscellaneous: Setter<string>;
}

interface Calculation {
  year: number;
  total: number;
  hourly: number;
  base: number;
  stock: number;
  bonus: number;
}

type Setter<T> = (value: T) => void;
