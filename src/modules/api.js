const inventoryAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fWAJPqcXqO3QM9dV6LYn/';
const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';
const likesURL = `${inventoryAPI}likes/`;

const getPokemon = async (id) => {
  const res = await fetch(pokeAPI + id);
  const data = await res.json();
  return data;
};

export {
  inventoryAPI, likesURL, pokeAPI, getPokemon,
};