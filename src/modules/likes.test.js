/**
 * @jest-environment jsdom
 */
/* eslint-disable arrow-body-style */

// eslint-disable-next-line no-unused-vars
import { likesURL } from './api.js';
import { catchLike } from './likes.js';

jest.mock('./api.js', () => {
  return {
    likesUrl: likesURL,
  };
});

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    { item_id: 'item1', likes: 10 },
    { item_id: 'item2', likes: 5 },
  ]),
}));

test('Likes test:', async () => {
  const likes = await catchLike('item1');
  expect(likes).toBe(10);
});
