import './style.css';
import pokeball from './assets/pokeball.png';
import pokedex from './assets/Pokédex_logo.png';
import { displayList, getPokemons } from '../modules/pokemon.js';

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

const promises = [];

for (let i = 0; i <= 25; i++) {
  promises.push(getPokemons(i));
}
const lastPromise = promises[promises.length - 1];

lastPromise
  .then((lastResult) => {
    // Aquí tendrás el resultado de la última promesa
    console.log(lastResult);
    // Ahora puedes usar displayList para mostrar los resultados
    displayList(lastResult);
  })
  .catch((error) => {
    console.error(error);
  });

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
