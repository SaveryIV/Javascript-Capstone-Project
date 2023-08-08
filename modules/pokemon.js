import '../src/style.css';

const $list = document.querySelector('.pokemon-list');
const url = 'https://pokeapi.co/api/v2/pokemon/';
const array = [];
// eslint-disable-next-line import/prefer-default-export

export const displayList = (array) => {
  array.forEach((poke) => {
    $list.innerHTML += `
        <div class="card">
            <img src="pikachu.png" alt="pikachu">
            <p>${poke.name}</p>
            <p>${poke.type.name}</p>
            <p>${poke.id}</p>
        </div>
        `;
  });
};

// eslint-disable-next-line consistent-return
export const getPokemons = async (i) => {
  try {
    const response = await fetch(url + i);
    const pokemons = await response.json();
    array.push(pokemons);
    array.sort((a, b) => a.id - b.id);
    return array;
  } catch (error) {
    console.error(error);
  }
};
