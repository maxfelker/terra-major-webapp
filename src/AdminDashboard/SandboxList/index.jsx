import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSandboxes } from '../service.sandboxes';

export default function SandboxList() {
    const [sandboxes, setSandboxes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSandboxes()
            setSandboxes(data);
        };

        fetchData();
    }, []);

    return (
      <>
        <h2>Sandboxes</h2>
        {sandboxes && sandboxes.map((sandbox) => (
          <p key={sandbox.id}>
            <Link to={`/admin/sandboxes/${sandbox.id}`}>Sandbox {sandbox.id}</Link> for Character {sandbox.characterId}</p>
        ))}
      </>
    )
}