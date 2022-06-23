import getValue from 'utils/getValue';

const formatData = (data, keys) =>
  keys.reduce((acc, key) => ({ ...acc, [key]: getValue(data, key, '') }), {});

export default formatData;
