import { mockData } from 'utils/getValue/getValue.test';

import formatData from '.';

describe('format data', () => {
  test('format data function', () => {
    const values = formatData(mockData, ['firstName', 'email']);
    expect(Object.keys(values)).toEqual(['firstName', 'email']);
  });

  test('not key', () => {
    const values = formatData(mockData, ['userName', 'test']);
    expect(Object.values(values)).toEqual(['', '']);
  });
});
