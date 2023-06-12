import { useState, useEffect } from 'react';

import { useNavigate, useParams, Link } from 'react-router-dom';
import InstanceForm from '../InstanceForm';
import { createInstance, retrieveSandbox } from '../service.sandboxes';

export default function InstanceCreate() {
  const navigate = useNavigate();
  const { sandboxId } = useParams();
  const [sandbox, setSandbox] = useState(null);

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

  const handleSuccess = (createdInstance) => {
    navigate(`/admin/sandboxes/${sandbox.id}/instances/${createdInstance.id}`);
  };

  const handleSubmit = async (instanceData) => {
    try {
      return await createInstance(sandbox, instanceData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    {sandbox && 
      <>
          <InstanceForm
            sandbox={sandbox}
            submitHandler={handleSubmit}
            onSuccess={handleSuccess}
          />
          <p>
            <Link to={`/admin/sandboxes/${sandbox.id}`}>Back</Link>
          </p>
      </>
    }
    </>
  );
}
