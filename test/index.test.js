const { getRandomWish, getWishById, generateWish } = require('./../index.js');
const { readDataFile } = require('./../fileHelper.js');

const data = readDataFile('wishes.json');
const wishes = JSON.parse(data).wishes;

  describe('getRandomWish', () => {
    it('should return a random wish', () => {
      const wish = getRandomWish(wishes);
      expect(wish).toBeDefined();
      expect(typeof wish).toBe('object');

       // Check that the wish object has the expected properties
      expect(wish).toHaveProperty('id');
      expect(typeof wish.id).toBe('number');

      expect(wish).toHaveProperty('theme');
      expect(typeof wish.theme).toBe('string');

      expect(wish).toHaveProperty('recipient');
      expect(typeof wish.recipient).toBe('string');

      expect(wish).toHaveProperty('wish');
      expect(typeof wish.wish).toBe('string');
      });
  });

  describe('getWishById', () => {
    it('should return a wish by id', () => {
      const wish = getWishById(1);
      expect(wish).toEqual(wishes[0]);
    });
  });

  describe('generateWish', () => {
    it('should return a random wish with the given theme', () => {
      const wish = generateWish('birthday');
      expect(wish.theme).toBe('birthday');
    });

    it('should return a random wish with the given theme and recipient', () => {
      const wish = generateWish('birthday', 'friends');
      expect(wish.theme).toBe('birthday');
      expect(wish.recipient).toBe('friends');
    });
  });

