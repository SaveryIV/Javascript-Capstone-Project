import { inventoryAPI } from './api.js';

/* API Functions */

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

/* Display Functions */

const commentList = document.querySelector('#comment-list');
const totalComments = document.querySelector('#comment-counter');

const displayComment = async (id) => {
  const commentData = await getComment(id);
  commentList.innerHTML = '';
  if (commentData.error) {
    totalComments.textContent = 'Comments (0):';
  } else {
    totalComments.textContent = `Comments (${commentData.length}):`;
    commentData.forEach((item) => {
      commentList.innerHTML += `<li class="comment"> ${item.username}: ${item.comment} (${item.creation_date})`;
    });
  }
};

export { getComment, addComment, displayComment };