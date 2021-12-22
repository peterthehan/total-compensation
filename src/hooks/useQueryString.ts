import { useState, useCallback } from "react";
import { getQueryString, setQueryString } from "../utils/queryString";

const useQueryString = <T>(
  key: string,
  initialValue: T,
  converter: (string: string) => T,
  reverseConverter: (value: T) => string,
  equalityChecker: (value: T, initialValue: T) => boolean
): [T, Setter<T>] => {
  const [value, setValue] = useState(
    getQueryString(key, initialValue, converter)
  );
  const onSetValue = useCallback(
    (newValue: T) => {
      setValue(newValue);
      setQueryString(
        key,
        newValue,
        initialValue,
        reverseConverter,
        equalityChecker
      );
    },
    [key, initialValue, reverseConverter, equalityChecker]
  );

  return [value, onSetValue];
};

export default useQueryString;
