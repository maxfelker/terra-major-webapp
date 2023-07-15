// CharacterForm.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../Form/TextInput';
import RangeInput from '../../Form/RangeInput';
import { getActiveAccount } from '../../App/service.app';

CharacterForm.propTypes = {
  initialCharacter: PropTypes.object,
  submitHandler: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
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
  updated: null,
  accountId: getActiveAccount()
};

export default function CharacterForm({ initialCharacter, submitHandler, onSuccess }) {
  const [character, setCharacter] = useState(initialCharacter || defaultCharacter);

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
      const updatedCharacter = await submitHandler(character);
      setCharacter(updatedCharacter);
      if(onSuccess) {
        onSuccess(updatedCharacter);
      }
    } catch (error) {
      console.error(error);
      // Handle errors as needed
    }
  };

  const checkDisabled = () => initialCharacter !== undefined;

  return (
    <form onSubmit={handleSubmit}>
      <TextInput name="name" value={character.name} onChange={handleChange} label="Name" />
      <TextInput name="bio" value={character.bio} onChange={handleChange} label="Bio" />
      {character.created &&
        <p>Age: {character.age}</p>
      }
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
      {character.created &&
        <p>Created: {character.created} / Last Updated: {character.updated} </p>
      }
      <button type="submit">Save</button>
    </form>
  );
}
