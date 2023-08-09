import './style.css';
import pokeball from './assets/pokeball.png';
import pokedex from './assets/Pokédex_logo.png';
import { fetchPokemons } from '../modules/pokemon.js';

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