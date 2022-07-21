const getUser = async (id) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export default getUser;