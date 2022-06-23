import getValue from '.';

export const mockData = {
  firstName: 'karama',
  lastName: 'Battikh',
  email: 'username@gmail.com',
  number: 12356,
};

describe('getvalue', () => {
  test('get value of key firstName', () => {
    const value = getValue(mockData, 'firstName');
    expect(value).toBe('karama');
  });

  test('test default value', () => {
    const value = getValue(mockData, 'name', 'default_value');
    expect(value).toBe('default_value');
  });
});
