import { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../Character/CharacterForm/TextInput';
import NumberInput from './NumberInput';

InstanceForm.propTypes = {
  sandbox: PropTypes.object.isRequired,
  initialInstance: PropTypes.object,
  submitHandler: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default function InstanceForm({ sandbox, initialInstance, submitHandler, onSuccess }) {

  const defaultInstance = {
    sandboxId: sandbox.id,
    characterId: sandbox.characterId, // replace with root 
    prefabName: 'Outpost',
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0
    },
    created: null,
    updated: null,
  };

  const [instance, setInstance] = useState(initialInstance || defaultInstance);

  const handleChange = (event) => {
    const {name, value } = event.target;
    const parsedValue = parseFloat(value);
    const valueToStore = isNaN(parsedValue) ? value : parsedValue;
    const matches = name.split('.');
    if(matches.length > 1) {
      const [field, subField] = matches;
      setInstance(prevState => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subField]: valueToStore,
        },
      }));
    } else {
      setInstance({
        ...instance,
        [name]: valueToStore,
      });
    }  
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedInstance = await submitHandler(instance);
      setInstance(updatedInstance);
      if(onSuccess) {
        onSuccess(updatedInstance);
      }
    } catch (error) {
      console.error(error);
      // Handle errors as needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput name="prefabName" value={instance.prefabName} onChange={handleChange} label="Prefab Name" />
      <NumberInput  
          name="position.x"
          value={instance.position.x} 
          onChange={handleChange} 
          label="Position X" 
        />
      <NumberInput  
          name="position.y"
          value={instance.position.y} 
          onChange={handleChange} 
          label="Position Y" 
        />
      <NumberInput  
          name="position.z"
          value={instance.position.z} 
          onChange={handleChange} 
          label="Position Z" 
        />
      <NumberInput  
          name="rotation.x"
          value={instance.rotation.x} 
          onChange={handleChange} 
          label="Rotation X" 
        />
      <NumberInput  
          name="rotation.y"
          value={instance.rotation.y} 
          onChange={handleChange} 
          label="Rotation Y" 
        />
      <NumberInput  
          name="rotation.z"
          value={instance.rotation.z} 
          onChange={handleChange} 
          label="Rotation Z" 
        />
      {instance.created &&
        <p>Created: {instance.created} / Last Updated: {instance.updated} </p>
      }
      <button type="submit">Save</button>
    </form>
  );
}
