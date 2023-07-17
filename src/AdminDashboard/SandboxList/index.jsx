import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSandboxes } from '../service.sandboxes';

function sandboxUrl(sandbox) {
  return `/admin/sandboxes/${sandbox.id}/`;
}

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
        {sandboxes.length > 0 && 
        <table>
          <thead>
            <tr style={{textAlign:'left'}}>
              <th>Sandbox Id</th>
              <th>Account Id</th>
              <th>Character Id</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
          {sandboxes.map((sandbox) => (
            <tr key={sandbox.id}>
              <td> 
                <Link to={sandboxUrl(sandbox)}>{sandbox.id} </Link>
              </td>
              <td>{sandbox.accountId}</td>
              <td>{sandbox.characterId}</td>
              <td>{sandbox.created}</td>
            </tr>
          ))}
          </tbody>
        </table>
        }
      </>
    )
}