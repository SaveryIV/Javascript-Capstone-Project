const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TpSQYZhyRfL6B96XWZQ9/likes/';

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

export const catchLike = async () => {
  const response = await fetch(url);
  const resultJSON = await response.json();
  const resultMessage = resultJSON;
  console.log(resultMessage);
};
