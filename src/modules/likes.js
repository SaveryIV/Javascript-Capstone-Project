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

export const catchLike = async () => {
  const response = await fetch(likesURL);
  const resultJSON = await response.json();
  const resultMessage = resultJSON;
  console.log(resultMessage);
};
