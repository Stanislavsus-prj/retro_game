import Character from '../Characters/Character.js'
import Magician from '../Characters/Magician.js'

test('new Character', () => {
  expect(() => new Character(1)).toThrowError(new Error('Do not use new Character()'));
});

test('new Magician', () => {
  expect(() => new Magician(1)).not.toThrowError();
});
