import './style.css';
import pokeball from './assets/pokeball.png';
import pokedex from './assets/Pokédex_logo.png';

const $header = document.querySelector('.header');
//
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