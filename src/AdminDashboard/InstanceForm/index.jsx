import { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../Character/CharacterForm/TextInput';
import Vector3GroupInput from '../../Form/Vector3GroupInput';

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
      {instance.created &&
        <p>Created: {instance.created} / Last Updated: {instance.updated} </p>
      }
      <TextInput name="prefabName" value={instance.prefabName} onChange={handleChange} label="Prefab Name" />
      <Vector3GroupInput vector3={instance.position} handleChange={handleChange} name="position" label="Position" />
      <Vector3GroupInput vector3={instance.rotation} handleChange={handleChange} name="rotation" label="Rotation" />   
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  );
}
