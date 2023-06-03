// CharacterCreate.js
import { useNavigate } from 'react-router-dom';
import CharacterForm from '../CharacterForm';
import { createCharacter } from '../service.characters';

export default function CharacterCreate() {
  const navigate = useNavigate();

  const handleSuccess = (createdCharacter) => {
    navigate(`/characters/${createdCharacter.id}`);
  };

  const handleSubmit = async (characterData) => {
    try {
      return await createCharacter(characterData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CharacterForm
      submitHandler={handleSubmit}
      onSuccess={handleSuccess}
    />
  );
}
