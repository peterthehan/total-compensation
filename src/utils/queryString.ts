const setUrl = (queryString: string): void => {
  const [url] = window.location.href.split("?");
  const newUrl = queryString === "" ? url : `${url}?${queryString}`;
  window.history.replaceState(null, "", newUrl);
};

const getQueryStringValue = (key: string, initialValue: string): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || initialValue;
};

const getQueryStringValues = (
  key: string,
  initialValue: string[]
): string[] => {
  const params = new URLSearchParams(window.location.search);
  return params.has(key)
    ? (params.get(key) as string).split("-")
    : initialValue;
};

const setQueryStringValue = (
  key: string,
  value: string,
  initialValue: string
): void => {
  const params = new URLSearchParams(window.location.search);

  if (value === "" || value === initialValue) {
    params.delete(key);
  } else if (params.has(key)) {
    params.set(key, value);
  } else {
    params.append(key, value);
  }

  setUrl(params.toString());
};

const setQueryStringValues = (
  key: string,
  value: string[],
  initialValue: string[]
): void => {
  const params = new URLSearchParams(window.location.search);

  if (
    value.length === initialValue.length &&
    value.every((val, index) => val === initialValue[index])
  ) {
    params.delete(key);
  } else if (params.has(key)) {
    params.set(key, value.join("-"));
  } else {
    params.append(key, value.join("-"));
  }

  setUrl(params.toString());
};

export {
  getQueryStringValue,
  getQueryStringValues,
  setQueryStringValue,
  setQueryStringValues,
};
