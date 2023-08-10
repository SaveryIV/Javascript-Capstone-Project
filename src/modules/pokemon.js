/* eslint-disable no-await-in-loop */
/* eslint-disable object-curly-newline */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
import '../style.css';
import like from '../assets/like.png';
import { addLike, catchLike } from './likes.js';

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
                <button class="button-like" name="${name}"><p name="${name}" class="counter-likes">0</p><img class="like-img" src="${like}" alt="like">Like!</button>
            </div>
        </div>
      `;
  });
  const $likeBtn = document.querySelectorAll('.button-like');

  const $counterLikes = document.querySelectorAll('.counter-likes');
  const local = JSON.parse(localStorage.getItem('likesList'));
  if (local) {
    $counterLikes.forEach((count) => {
      const name = count.getAttribute('name');
      const foundItem = local.find((item) => item.item_id === name);
      if (foundItem) {
        count.textContent = foundItem.likes === 0 ? '0' : foundItem.likes;
      } else {
        count.textContent = '0';
      }
    });
  }

  $likeBtn.forEach(async (btn) => {
    btn.addEventListener('click', async (e) => {
      const $ele = e.target.querySelector('.counter-likes');
      const btnName = btn.name; // Almacena el nombre del botón
      await addLike(btnName);
      const result = await catchLike(btnName);
      console.log(result);
      if ($ele) {
        $ele.textContent = result === 0 ? '0' : result;
      }
    });
  });
};

export const fetchPokemons = async (number) => {
  for (let i = 1; i <= number; i++) {
    await fetchPokemon(i);
  }
  array.sort((a, b) => a.value - b.value);
  await displayList(array);
};
