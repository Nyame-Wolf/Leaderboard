const game = {
  name: 'GameNight LeaderBoard',
};
const postData = async (game) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  const jsonResponse = await response.json();
  const id = jsonResponse.result.split(' ')[3];
  return id;
};

const id = postData(game);
export default id;

// const scores = async