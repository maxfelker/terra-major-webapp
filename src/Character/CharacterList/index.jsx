// CharacterList.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMyCharacters } from '../service.characters';

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getMyCharacters();
            setCharacters(response);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Characters</h1>
            <p><Link to="/characters/new">New Character</Link></p>
            {characters.map((character) => (
                <div key={character.id}>
                    <Link to={`/characters/${character.id}`}>{character.name}</Link>
                </div>
            ))}
        </div>
    );
}
