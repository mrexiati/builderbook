const generateSlug = require('../../../server/utils/slugify');

const MockUser = {
  slug: ['john-johnson-jr', 'john-johnson-jr-1', 'john'],
  findOne({ slug }) {
    if (this.slug.includes(slug)) {
      return Promise.resolve({ id: 'id' });
    }

    return Promise.resolve(null);
  },
};

describe('Slugify', () => {
  test('no duplication', () => {
    expect.assertions(1);

    return generateSlug(MockUser, 'John Jonhson.').then((slug) => {
      expect(slug).toBe('john-jonhson');
    });
  });

  test('one dupliate slug', () => {
    expect.assertions(1);

    return generateSlug(MockUser, 'John.').then((slug) => {
      expect(slug).toBe('john-1');
    });
  });

  test('two dupliate slug', () => {
    expect.assertions(1);

    return generateSlug(MockUser, 'John Johnson Jr.').then((slug) => {
      expect(slug).toBe('john-johnson-jr-2');
    });
  });
});
