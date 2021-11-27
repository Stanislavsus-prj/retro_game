import { calcTileType } from '../utils';

test('corners', () => {
  expect(calcTileType(0, 8)).toBe('top-left');
  expect(calcTileType(7, 8)).toBe('top-right');
  expect(calcTileType(56, 8)).toBe('bottom-left');
  expect(calcTileType(63, 8)).toBe('bottom-right');
});

test('side', () => {
  expect(calcTileType(2, 8)).toBe('top');
  expect(calcTileType(32, 8)).toBe('left');
  expect(calcTileType(23, 8)).toBe('right');
  expect(calcTileType(60, 8)).toBe('bottom');
});

test('center', () => {
  expect(calcTileType(18, 8)).toBe('center');
  expect(calcTileType(45, 8)).toBe('center');
});