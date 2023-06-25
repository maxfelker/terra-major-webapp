import { useState } from 'react';
import { updatePassword } from '../service.accounts';
import { TextInput } from "../../Form";
import { Link } from 'react-router-dom';

export default function UpdatePasswordForm() {
  const initialPayload = {
    currentPassword: '',
    newPassword: '',
  };

  const [ error, setError ] = useState(null);
  const [ success, setSuccess ] = useState(null);
  const [ payload, setPayload ] = useState(initialPayload);

  const handleChange = (event) => {
    setPayload({
      ...payload,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const accountId = sessionStorage.getItem('accountId');
      const { status, error } = await updatePassword(accountId, payload);
      if(status === 200) {
        setSuccess(true);
        setPayload(initialPayload); // Reset form inputs to their initial state
      }
      if(error) {
        setError(error);
      } 
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <h2>Update your password</h2>
      {success && 
        <p>Password updated!</p>
      }
      {error && 
        <p>ERROR: {error.toString()}</p>
      }
      <form onSubmit={handleSubmit}>
        <TextInput 
          type="password" 
          name="currentPassword" 
          label="Current Password"
          onChange={handleChange}
          value={payload.currentPassword}
        />
        <TextInput 
          type="password" 
          name="newPassword" 
          label="New Password"
          onChange={handleChange}
          value={payload.newPassword}
        />
        <button type="submit">Change Password</button>
      </form>
      <p><Link to="/dashboard">Back</Link></p>

    </>
  );
}
