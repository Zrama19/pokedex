import React, { useState } from 'react';
import axios from 'axios';

const Poke = () => {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');

  const handleChange = (e) => {
    setPokemon(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      setPokemon('');
    } catch (e) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            onChange={handleChange}
            placeholder='enter pokemon name'
            value={pokemon}
          />
        </label>
        <button>Submit</button>
      </form>
      {pokemonData.map((data) => {
        return (
          <div>
            <img src={data.sprites['front_default']} alt='Pokemon Sprite' />
            <div>Pokemon Type:</div>
            <div>{pokemonType}</div>
            <div>Health:</div>
            <div>{data.stats[0].base_stat}</div>
            <div>Attack:</div>
            <div>{data.stats[1].base_stat}</div>
            <div>Defense:</div>
            <div>{data.stats[2].base_stat}</div>
            <div>Speed:</div>
            <div>{data.stats[5].base_stat}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Poke;
