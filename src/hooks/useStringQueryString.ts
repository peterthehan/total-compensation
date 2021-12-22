import useQueryString from "./useQueryString";

const useStringQueryString = (
  key: string,
  initialValue: string
): [string, Setter<string>] => {
  return useQueryString(
    key,
    initialValue,
    (string) => string,
    (value) => value,
    (value, initialValue) => value === "" || value === initialValue
  );
};

export default useStringQueryString;
