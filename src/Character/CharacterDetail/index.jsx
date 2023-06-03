// CharacterEdit.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterForm from '../CharacterForm';
import { retrieveCharacter, updateCharacter } from '../service.characters';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveCharacter(id);
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleSuccess = (updatedCharacter) => {
    setCharacter(updatedCharacter);
  };

  const handleSubmit = async (characterData) => {
    try {
      return await updateCharacter(id, characterData);
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <>
    {!character && 
      <p>Loading</p>
    }

    {character &&
      <CharacterForm
        initialCharacter={character}
        submitHandler={handleSubmit}
        onSuccess={handleSuccess}
      />
    }
    </>
  );

}