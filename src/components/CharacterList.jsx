import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  async function getCharacters() {
    const response = await axios.get('https://rickandmortyapi.com/api/character/');
    const result = response.data.results;
    setCharacters(result);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="characterList">
      {characters.map((character) => (<h1>{character.name}</h1>))}
    </div>
  );
};

export default CharacterList;
