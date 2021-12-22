import { useState, useCallback } from "react";
import { getQueryStringValue, setQueryStringValue } from "../utils/queryString";

const useQueryString = (
  key: string,
  initialValue: string
): [string, Setter<string>] => {
  const [value, setValue] = useState(getQueryStringValue(key, initialValue));
  const onSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue);
      setQueryStringValue(key, newValue, initialValue);
    },
    [key, initialValue]
  );

  return [value, onSetValue];
};

export default useQueryString;
