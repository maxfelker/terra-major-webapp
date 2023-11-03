import { useNavigate } from 'react-router-dom';
import CharacterForm from '../CharacterForm';
import { createCharacter } from '../service.characters';

export default function CharacterCreate() {
  const navigate = useNavigate();

  const handleSuccess = (createdCharacter) => {
    console.log(createdCharacter);
    navigate(`/dashboard`);
    history.pushState();
  };

  const handleSubmit = async (characterData) => {
    try {
      return await createCharacter(characterData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{margin:'4rem auto', maxWidth:'600px'}}>
      <h1>New Colonist</h1>
      <p>All Commonwealth citizens are free to travel to <em>Terra Major</em>, but only designated <em>Colonists</em> can build and mine resources. To register as a Commonwealth Colonist, please complete the form below.</p>
      <CharacterForm
        submitHandler={handleSubmit}
        onSuccess={handleSuccess}
        submitBtnLabel="Save"
      />
    </div>
  );
}
