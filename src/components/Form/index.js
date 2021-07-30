import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Send } from 'react-feather';

import './form.scss';

const Form = ({ isLogged, inputValue, onInputChange, onMessageSubmit }) => {
  const inputRef = useRef(null);
  // tableau de dépendances vide
  // appelé au chargement initial du composant
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className="form"
      onSubmit={(event) => {
        // on empeche le rechargement de la page
        event.preventDefault();
        // si quelque chose a été tapé, on envoie le message
        // trim vide espaces du début et de la fin
        if (inputValue.trim() !== '') {
          onMessageSubmit();
        }
      }}
    >
      <input
        placeholder={isLogged ? 'Écrivez un message' : 'Connectez vous pour parler'}
        ref={inputRef}
        className="form__input"
        type="text"
        value={inputValue}
        disabled={!isLogged}
        onChange={(event) => onInputChange(event.target.value)}
      />
      <button
        type="submit"
        className="form__button"
      >
        <Send size={32} />
      </button>
    </form>
  );
};

Form.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onMessageSubmit: PropTypes.func.isRequired,
};

export default Form;
