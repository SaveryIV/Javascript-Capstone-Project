import { likesURL } from './api.js';

export const addLike = async (id) => {
  await fetch(likesURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

export const catchLike = async (name) => {
  const response = await fetch(likesURL);
  const resultArray = await response.json();
  localStorage.setItem('likesList', JSON.stringify(resultArray));
  const foundItem = await resultArray.find((item) => item.item_id === name);
  if (foundItem) {
    return foundItem.likes;
  }
  return 0;
};
