import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import InstanceList from '../InstanceList';
import { retrieveSandbox, archiveSandbox } from '../service.sandboxes';

export default function SandboxDetail() {
  const { sandboxId } = useParams();
  const [sandbox, setSandbox] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await retrieveSandbox({id: sandboxId});
        setSandbox(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [sandboxId]);

  async function attemptArchive(){
    const confirmArchive = confirm('Are you sure that you want to archive this sandbox?');
    if(confirmArchive) {
      try {
        await archiveSandbox(sandbox);
        navigate(`/admin`);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return(
    <>
    {!sandbox && 
      <p>Loading</p>
    }

    {sandbox &&
      <>
      <h1>Sandbox {sandbox.id}</h1>
      <p>Account: {sandbox.accountId} </p>
      <p>Character: {sandbox.characterId} </p>
      <p>Created Date: {sandbox.created}</p>
      <Link to={`/admin/sandboxes/${sandbox.id}/instances/new`}>Create New Instance</Link>
      <InstanceList sandbox={sandbox} />
      <p><button onClick={attemptArchive}>Archive</button></p>
      </>
    }
    <Link to={"/admin"}>Back</Link>
    </>
  );
}
