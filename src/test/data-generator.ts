import faker from '@faker-js/faker';

export const taskGenerator = (overrides?: any) => ({
  taskName: faker.fake('{{word.noun}}{{word.verb}}{{word.noun}}'),
  done: faker.datatype.boolean,
  id: faker.datatype.uuid,
  ...overrides,
});
