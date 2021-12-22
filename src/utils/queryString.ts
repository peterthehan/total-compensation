const setUrl = (queryString: string): void => {
  const [url] = window.location.href.split("?");
  const newUrl = queryString === "" ? url : `${url}?${queryString}`;
  window.history.replaceState(null, "", newUrl);
};

const getQueryString = <T>(
  key: string,
  initialValue: T,
  converter: (string: string) => T
): T => {
  const params = new URLSearchParams(window.location.search);
  if (!params.has(key)) {
    return initialValue;
  }

  return converter(params.get(key) as string);
};

const setQueryString = <T>(
  key: string,
  value: T,
  initialValue: T,
  reverseConverter: (value: T) => string,
  equalityChecker: (value: T, initialValue: T) => boolean
): void => {
  const params = new URLSearchParams(window.location.search);

  if (equalityChecker(value, initialValue)) {
    params.delete(key);
  } else if (params.has(key)) {
    params.set(key, reverseConverter(value));
  } else {
    params.append(key, reverseConverter(value));
  }

  setUrl(params.toString());
};

export { getQueryString, setQueryString };
