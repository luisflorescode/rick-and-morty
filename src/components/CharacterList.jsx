import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';
import Character from './Character';
import Loader from './Loader';
import '../assets/styles/components/CharacterList.scss';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getCharacters() {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      const result = response.data.results;
      setCharacters(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className='characterList'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        characters.map((character) => (
          <Character key={character.id} data={character} />
        ))
      )}
    </div>
  );
};

export default CharacterList;
