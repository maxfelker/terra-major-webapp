import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getInstancesBySandboxId, attemptArchiveInstance } from '../service.sandboxes';

InstanceList.propTypes = {
  sandbox: PropTypes.object.isRequired
};

function instanceUrl(instance) {
  return `/admin/sandboxes/${instance.sandboxId}/instances/${instance.id}`;
}

export default function InstanceList(props) {
  const { sandbox } = props;
  const [instances, setSandboxes] = useState([]);

  const fetchData = async () => {
    const data = await getInstancesBySandboxId(sandbox)
    setSandboxes(data);
  };

  useEffect(() => {
    fetchData();
  }, [sandbox]);

  async function attemptArchive(instance){
      try {
        await attemptArchiveInstance(sandbox, instance);
        fetchData();
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <>
      <h2>Instances</h2>
      {!instances.length &&
        <p>No instances in this sandbox</p>
      } 
      {instances.length > 0 && 
      <table>
        <thead>
          <tr style={{textAlign:'left'}}>
            <th>Instance Id</th>
            <th>Prefab</th>
            <th>Position</th>
            <th>Rotation</th>
            <th>Last Updated</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {instances.map((instance) => (
          <tr key={instance.id}>
            <td> 
              <Link to={instanceUrl(instance)}>{instance.id} </Link>
            </td>
            <td>{instance.prefabName}</td>
            <td>{JSON.stringify(instance.position)}</td>
            <td>{JSON.stringify(instance.rotation)}</td>
            <td>{instance.updated}</td>
            <td>{instance.created}</td>
            <td><button onClick={() => attemptArchive(instance)}>Archive</button></td>
          </tr>
        ))}
        </tbody>
      </table>
      }
    </>
  )
}