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
      <h1>Your new DigiPersona</h1>
      <p>Every Commonwealth citizen has atleast one DigiPersona: a digital representation of you that can explore <em>Terra Major</em>. To create a new DigiPersona, please fill out all the fields below.</p>
      <CharacterForm
        submitHandler={handleSubmit}
        onSuccess={handleSuccess}
        submitBtnLabel="Create your DigiPersona"
      />
    </>
  );
}
