import { inventoryAPI } from './api.js';

const commentURLpost = `${inventoryAPI}comments`;
const commentURLget = `${inventoryAPI}comments?item_id=`;
const list = document.querySelector('#comment-list');

const getComment = async (id) => {
  const res = await fetch(commentURLget + id);
  const data = await res.json();
  /* console.log(data); */
  return data;
};

const addComment = async (id, user, desc) => {
  const res = await fetch(commentURLpost, {
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

const displayComment = async (id) => {
  const commentList = await getComment(id);
  console.log(commentList);
  if (commentList.error.message !== "'item_id' not found.") {
    commentList.forEach((item) => {
      list.innerHTML += `<li> ${item.username}: ${item.comment} (${item.creation_date})`;
    });
  }
};

export { getComment, addComment, displayComment };