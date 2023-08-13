const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'WtRU0pkCN8fwvlF713ba';

const postLike = async (id) => {
  const response = await fetch(`${baseURL}${appID}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/JSON',
    },
  });
  const result = await response.text();
  return result;
};

const getLike = async () => {
  const response = await fetch(`${baseURL}${appID}/likes/`);
  const result = await response.json();
  return result;
};

export { postLike, getLike };
