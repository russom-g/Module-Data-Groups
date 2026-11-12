function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    const [key, ...value] = pair.split("=");
   
    if (!pair) {
      continue;
    }
    queryParams[key] = value.join("=");
  }
  return queryParams;
}

module.exports = parseQueryString;
