// CharacterList.js
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getMyCharacters } from '../service.characters';
import styles from './styles.module.css';
import { createUnityClientToken } from '../../UnityWebClient/service.unity-client';
//import CharacterPreview from "../Preview";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getMyCharacters();
            setCharacters(response);
        };
        fetchData();
    }, []);

    async function startGame(characterId) {
        sessionStorage.setItem('unity-client-token', null);
        const { token, error } = await createUnityClientToken(characterId);
        if(error) {
            console.error('Issue generating the token', error);
        } else {
            sessionStorage.setItem('unity-client-token', token);
            navigate(`/play`);
        }
    }
    return (
        <>
        {characters && 
            <>
            <div className={styles.characterGrid}>
                {characters.map((character) => (
                    <div className={styles.characterPreview} key={character.id}>
                        <div className={styles.buttonContainer}>
                            <Link to={`/characters/${character.id}`}>{character.name}</Link>
                            <br/><span className={styles.colonistId}>Colonist ID {character.id}</span>
                            <button onClick={() => startGame(character.id)} className={styles.playButton}>Send to Surface</button>
                        </div>
                        <CharacterPreview />
                    </div>
                ))}
                    <div className={styles.characterPreview} key="new-character">
                        <div className={styles.buttonContainer}>
                            <p><Link to="/characters/new">Create New Colonist</Link></p>
                        </div>
                        {/*<CharacterPreview />*/}
                    </div>
            </div>
            </>
        }
        </>    
    );
}
