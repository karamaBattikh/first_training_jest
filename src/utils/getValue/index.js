const getValue = (object, path, def) => {
  const result = Object.entries(object).find(([key, value]) => key === path && value);
  return result?.length > 0 ? result[1] : def;
};

export default getValue;
