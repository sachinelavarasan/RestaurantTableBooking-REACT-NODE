exports.mapSeries = async (array) => {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const item of array) result.push(item);
  return result;
};
