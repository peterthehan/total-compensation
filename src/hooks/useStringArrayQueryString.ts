import useQueryString from "./useQueryString";

const useStringArrayQueryString = (
  key: string,
  initialValue: string[]
): [string[], Setter<string[]>] => {
  return useQueryString(
    key,
    initialValue,
    (string) => string.split("-"),
    (value) => value.join("-"),
    (value, initialValue) =>
      value.length === initialValue.length &&
      value.every((val, index) => val === initialValue[index])
  );
};

export default useStringArrayQueryString;
