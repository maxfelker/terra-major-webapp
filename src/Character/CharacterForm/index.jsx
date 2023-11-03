// CharacterForm.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../Form/TextInput';
import RangeInput from '../../Form/RangeInput';
import appStyles from '../../App/styles.module.css';

CharacterForm.propTypes = {
  initialCharacter: PropTypes.object,
  submitHandler: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  submitBtnLabel: PropTypes.string.isRequired
};

const defaultCharacter = {
  name: '',
  bio: '',
  age: 25,
  strength: 5,
  intelligence: 5,
  endurance: 5,
  agility: 5,
  created: null,
  updated: null
};

export default function CharacterForm({ initialCharacter, submitHandler, onSuccess, submitBtnLabel }) {
  const [character, setCharacter] = useState(initialCharacter || defaultCharacter);
  const [ error, setError ] = useState(null);

  const handleChange = (event) => {
    let value = event.target.value;
    let parsedValue = parseInt(value);
    
    setCharacter({
      ...character,
      [event.target.name]: isNaN(parsedValue) ? value : parsedValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await submitHandler(character);
      const { error } = response;
      if(error) {
          setError(error);
      } else {
        setError(null);
        setCharacter(response);
        if(onSuccess) {
          onSuccess(response);
        }
      }
    } catch (error) {
      setError(error);
    }
  };

  const checkDisabled = () => initialCharacter !== undefined;

  return (
    <form onSubmit={handleSubmit}>
      {error && 
        <p className={appStyles.error}>{error}</p>
      }
      <TextInput name="name" value={character.name} onChange={handleChange} label="Name" />
      {character.created &&
        <>
          <TextInput name="bio" value={character.bio} onChange={handleChange} label="Bio" />
          <p>XP: 0</p>
          <p>Skills: Building</p>
          <p>Age: {character.age}</p>

          {['strength', 'intelligence', 'endurance', 'agility'].map(attr => (
            <RangeInput 
              key={attr} 
              name={attr} 
              value={character[attr]} 
              onChange={handleChange} 
              disabled={checkDisabled()} 
              label={attr.charAt(0).toUpperCase() + attr.slice(1)} 
            />
          ))}

          <p>Created: {character.created} / Last Updated: {character.updated} </p>

        </>
        
      }

      <button type="submit">{submitBtnLabel}</button>
    </form>
  );
}
