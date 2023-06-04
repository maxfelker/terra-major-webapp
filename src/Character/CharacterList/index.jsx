// CharacterList.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CharacterList() {
    const baseUrl = 'http://localhost:8000'
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `${baseUrl}/characters`;
            const response = await fetch(url);
            const data = await response.json();
            setCharacters(data);
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
