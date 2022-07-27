import faker from '@faker-js/faker';

export const taskGenerator = (overrides?: any) => ({
  name: faker.fake('{{word.noun}}'),
  done: faker.datatype.boolean(),
  id: faker.datatype.uuid(),
  ...overrides,
});
