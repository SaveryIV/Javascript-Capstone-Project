/* eslint-disable no-await-in-loop */
import List from './pokeList.js';
import { displayHeader, pokeCard } from './displayHome.js';

const pokemonNumber = 20;
const pokemonList = async () => {
  for (let i = 1; i <= pokemonNumber; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    List.pokeList.push(pokemon);
  }
  pokeCard(List.pokeList);
  displayHeader(List.pokeList);
  return List.pokeList;
};

export default pokemonList;
