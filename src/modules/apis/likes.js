const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3V6KQXimBFmwwKE1A3A0/likes/';

export const addLike = async (id) => {
  await fetch(url, {
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
  const response = await fetch(url);
  const resultArray = await response.json();
  /* onsole.log(name); */
  const foundItem = await resultArray.find((item) => item.item_id === name);
  if (foundItem) {
    return foundItem.likes;
  }
  return 0;
};
