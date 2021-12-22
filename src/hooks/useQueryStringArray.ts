import { useState, useCallback } from "react";
import {
  getQueryStringValues,
  setQueryStringValues,
} from "../utils/queryString";

const useQueryStringArray = (
  key: string,
  initialValue: string[]
): [string[], Setter<string[]>] => {
  const [value, setValue] = useState(getQueryStringValues(key, initialValue));
  const onSetValue = useCallback(
    (newValue: string[]) => {
      setValue(newValue);
      setQueryStringValues(key, newValue, initialValue);
    },
    [key, initialValue]
  );

  return [value, onSetValue];
};

export default useQueryStringArray;
