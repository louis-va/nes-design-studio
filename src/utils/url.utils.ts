const setUrlParameter = (key: string, value: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.replaceState({}, '', url.toString());
}

const getUrlParameter = (key: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}

export { setUrlParameter, getUrlParameter }