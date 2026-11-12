function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    if (!pair) {
      continue;
    }
    const [key, ...value] = pair.replace(/\+/g, " ").split("=");
    queryParams[decodeURIComponent(key)] = decodeURIComponent(
      value.join("=").replace(/\+/g, " ")
    );
  }
  return queryParams;
}

module.exports = parseQueryString;
