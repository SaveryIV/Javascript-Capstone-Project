/* eslint-disable arrow-body-style */

// eslint-disable-next-line no-unused-vars
import { likesURL } from './api.js';
import { catchLike } from './likes.js';

jest.mock('./api.js', () => {
  return {
    likesURL: 'mocked-likes-url',
  };
});

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    { item_id: 'item1', likes: 10 },
    { item_id: 'item2', likes: 5 },
    { item_id: 'item3', likes: 0 },
  ]),
}));

test('Likes test: item1 should have 10 likes', async () => {
  global.localStorage.getItem.mockReturnValue(JSON.stringify([
    { item_id: 'item1', likes: 10 },
    { item_id: 'item2', likes: 5 },
    { item_id: 'item3', likes: 0 },
  ]));

  const likes = await catchLike('item1');
  expect(likes).toBe(10);
});

test('Likes test: item1 should have 5 likes', async () => {
  global.localStorage.getItem.mockReturnValue(JSON.stringify([
    { item_id: 'item1', likes: 10 },
    { item_id: 'item2', likes: 5 },
    { item_id: 'item3', likes: 0 },
  ]));

  const likes = await catchLike('item2');
  expect(likes).toBe(5);
});

test('Likes test: item3 should no have likes', async () => {
  global.localStorage.getItem.mockReturnValue(JSON.stringify([
    { item_id: 'item1', likes: 10 },
    { item_id: 'item2', likes: 5 },
    { item_id: 'item3', likes: 0 },
  ]));

  const likes = await catchLike('item3');
  expect(likes).toBe(0);
});

test('Likes test: item4 should no have likes', async () => {
  global.localStorage.getItem.mockReturnValue(JSON.stringify([
    { item_id: 'item1', likes: 10 },
    { item_id: 'item2', likes: 5 },
    { item_id: 'item3', likes: 0 },
  ]));

  const likes = await catchLike('item4');
  expect(likes).toBe(0);
});