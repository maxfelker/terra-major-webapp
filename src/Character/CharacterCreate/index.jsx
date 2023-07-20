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
    <>
      <h2>New Citizen Registry</h2>
      <p>All persons travelling to the <em>Terra Major</em> surface must register as Commonwealth citizenship.</p>
      <p>Please tell us about you citizen:</p>
      <CharacterForm
        submitHandler={handleSubmit}
        onSuccess={handleSuccess}
        submitBtnLabel="Become a Citizen!"
      />
    </>
  );
}
