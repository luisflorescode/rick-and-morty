import React, { useState } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/Character.scss';
import Modal from './Modal';
import CharacterDetail from './CharacterDetail';

const Character = (props) => {
  const [modal, setModal] = useState(false);

  const { data } = props;
  const { id, image, name, status, species, gender } = data;

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleSetFavorite = () => {
    props.setFavorite({ data });
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
        <p onClick={handleOpenModal} className='character__details__item-more'>
          More details...
        </p>
      </div>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetail data={data} />
      </Modal>
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
