/* eslint-disable object-curly-newline */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import '../src/style.css';
import like from '../src/assets/like.png';

const $list = document.querySelector('.pokemon-list');
const url = 'https://pokeapi.co/api/v2/pokemon/';
const array = [];

const fetchPokemon = async (id) => {
  await fetch(url + id)
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line no-use-before-define
      array.push(data);
    });
};

export const displayList = (array) => {
  array.forEach((poke) => {
    const { name, id, sprites, types } = poke;
    $list.innerHTML += `
        <div class="card">
            <div class="container-sprite"><img src="${sprites.front_default}" alt="${name}"></div>
            <p class="name">${name}</p>
            <p class="types">${types.map((type) => type.type.name).join(', ')}</p>
            <p class="id">#${id}</p>
            <div class="buttons-container">
                <button class="button-comments">Comments</button>
                <button class="button-like"><img class="like-img" src="${like}" alt="like">Like!</button>
            </div>
        </div>
      `;
  });
};

export const fetchPokemons = async (number) => {
  for (let i = 1; i <= number; i++) {
    // eslint-disable-next-line no-await-in-loop
    await fetchPokemon(i);
  }
  array.sort((a, b) => a.value - b.value);
  await displayList(array);
};
