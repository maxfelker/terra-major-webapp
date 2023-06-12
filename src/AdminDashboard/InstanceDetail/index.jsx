import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import InstanceForm from '../InstanceForm';
import { retrieveInstance, updateInstance, archiveInstance, retrieveSandbox } from '../service.sandboxes';

export default function InstanceDetail() {
  const { sandboxId, instanceId } = useParams();
  const [instance, setInstance] = useState(null);
  const [sandbox, setSandbox] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const sandboxData = await retrieveSandbox({id:sandboxId});
        setSandbox(sandboxData);
        const data = await retrieveInstance({id:sandboxId},{id: instanceId});
        setInstance(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [sandboxId, instanceId]);

  function handleSuccess(updatedInstance){
    setInstance(updatedInstance);
  }

  async function handleSubmit(instanceData){
    try {
      return await updateInstance(sandbox, instanceData);
    } catch (error) {
      console.error(error);
    }
  }

  async function attemptArchive(){
    const confirmArchive = confirm('Are you sure that you want to archive this instance?');
    if(confirmArchive) {
      try {
        await archiveInstance(sandbox,instance);
        navigate(`/dashboard`);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return(
    <>

    {sandbox &&
      <p>Sandbox: {sandbox.id}</p>
    }

    {!instance && !
      <p>Loading</p>
    }

    {instance &&
      <>
      <InstanceForm
        sandbox={sandbox}
        initialInstance={instance}
        submitHandler={handleSubmit}
        onSuccess={handleSuccess}
      />
      <p><button onClick={attemptArchive}>Archive</button></p>
      <Link to={`/admin/sandboxes/${sandbox.id}`}>Back</Link>
      </>
    }
    </>
  );

}
