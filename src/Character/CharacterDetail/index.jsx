import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import CharacterForm from '../CharacterForm';
import { retrieveCharacter, updateCharacter, archiveCharacter } from '../service.characters';
//import CharacterPreview from '../Preview';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await retrieveCharacter(id);
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [id]);

  function handleSuccess(updatedCharacter){
    setCharacter(updatedCharacter);
  }

  async function handleSubmit(characterData){
    try {
      return await updateCharacter(id, characterData);
    } catch (error) {
      console.error(error);
    }
  }

  async function attemptArchive(){
    const confirmArchive = confirm('Are you sure that you want to archive this character?');
    if(confirmArchive) {
      try {
        await archiveCharacter(id);
        navigate(`/dashboard`);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return(
    <>
    {!character && 
      <p>Loading</p>
    }

    {character &&
      <div  style={{margin:'4rem auto', maxWidth:'600px'}}>
        {/*<CharacterPreview />*/}
        <CharacterForm
          initialCharacter={character}
          submitHandler={handleSubmit}
          onSuccess={handleSuccess}
          submitBtnLabel="Save"
        />
        <p><button onClick={attemptArchive}>Archive</button></p>
        <p><Link to="/dashboard">Back to Dashboard</Link></p>
      </div>
    }
    </>
  );

}