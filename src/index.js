import './style.css';
import pokeball from './assets/pokeball.png';
import pokedex from './assets/Pokédex_logo.png';
import { fetchPokemons } from './modules/pokemon.js';
import { getComment, addComment } from './modules/comment.js';

const $header = document.querySelector('.header');
const $footer = document.querySelector('.footer');

$header.innerHTML = `
    <div class="img-container">
        <div class="pokeball-container">
            <img src="${pokeball}" alt="pokeball">
        </div>
        <div class="pokedex-container">
            <img class="pokedex" src="${pokedex}" alt="Pokedex">
        </div>
    </div>
    <nav class="list-links">
        <a href="" id="Pokemons-category">Pokemons</a>
        <a href="" id="About-category">About</a>
        <a href="" id="Contact-category">Contact</a>
    </nav>
`;

fetchPokemons(25);

$footer.innerHTML = `
    <div class="footer-block">
        <div class="logo">
            <img src=${pokedex} alt="Pokedex Logo"/>
        </div>
        <div class="rights">
            <h3>Created by Microverse under CC license</h3>
        </div>
    </div>
`;

const newComment = document.querySelector('#add-comment');
const commentForm = document.querySelector('.comment-section');
const test = document.querySelector('.test');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('#close-btn');
const list = document.querySelector('#comment-list');

const displayComment = async () => {
  const commentList = await getComment('item2');
  commentList.forEach((item) => {
    list.innerHTML += `<li> ${item.username}: ${item.comment} (${item.creation_date})`;
  });
};

test.addEventListener('click', () => {
  popup.classList.remove('overlay');
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('overlay');
});

newComment.addEventListener('click', (e) => {
  const commentor = document.querySelector('#username').value;
  const comment = document.querySelector('#comment').value;
  if (!commentor || !comment) {
    e.preventDefault();
  } else {
    addComment('item2', commentor, comment);
    getComment('item2');
    commentForm.reset();
  }
});

document.addEventListener(displayComment());