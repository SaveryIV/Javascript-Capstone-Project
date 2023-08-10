import { inventoryAPI } from './api.js';

const commentURL = `${inventoryAPI}comments?item_id=`;

const getComment = async (id) => {
  const res = await fetch(commentURL + id);
  const data = await res.json();
  return data;
};

const addComment = async (id, user, desc) => {
  const res = await fetch(commentURL + id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ item_id: id, username: user, comment: desc }),
  });
  const data = await res.json();
  return data;
};

export { getComment, addComment };