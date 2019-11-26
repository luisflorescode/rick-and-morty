import React from 'react';
import propTypes from 'prop-types';
import '../assets/styles/components/Character.scss';

const Character = ({ data }) => (
  <div className='character'>
    <img className='character__img' src={data.image} alt='Character' />
    <div className='character__details'>
      <h2 className='character__details-name'>{data.name}</h2>
      <p className='character__details__item'>
        <span className='character__details__item-type'>Status:</span>
        {' '}
        {data.status}
      </p>
      <p className='character__details__item'>
        <span className='character__details__item-type'>Species:</span>
        {' '}
        {data.species}
      </p>
      <p className='character__details__item'>
        <span className='character__details__item-type'>Gender:</span>
        {' '}
        {data.gender}
      </p>
      <p className='character__details__item'>
        <span className='character__details__item-type'>Origin:</span>
        {' '}
        {data.origin.name}
      </p>
    </div>
  </div>
);

Character.propTypes = {
  data: propTypes.object,
};

export default Character;
