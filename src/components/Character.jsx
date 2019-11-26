import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/Character.scss';

const Character = (props) => {
  const { data } = props;
  const { id, image, name, status, species, gender, origin } = data;

  const handleSetFavorite = () => {
    props.setFavorite({ id, image, name, status, species, gender, origin });
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='character'>
      <img className='character__img' src={image} alt='Character' />
      <div className='character__details'>
        <h2 onClick={handleSetFavorite} className='character__details-name'>{name}</h2>
        <p onClick={() => handleDeleteFavorite(id)} className='character__details__item'>
          <span className='character__details__item-type'>Status:</span>
          {' '}
          {status}
        </p>
        <p className='character__details__item'>
          <span className='character__details__item-type'>Species:</span>
          {' '}
          {species}
        </p>
        <p className='character__details__item'>
          <span className='character__details__item-type'>Gender:</span>
          {' '}
          {gender}
        </p>
        <p className='character__details__item'>
          <span className='character__details__item-type'>Origin:</span>
          {' '}
          {origin.name}
        </p>
      </div>
    </div>
  );
};

Character.propTypes = {
  data: propTypes.object,
};

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
