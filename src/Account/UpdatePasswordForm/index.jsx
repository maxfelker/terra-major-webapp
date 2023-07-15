import { useState } from 'react';
import { setAccountToken, updatePassword } from '../service.accounts';
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
      const { token, error } = await updatePassword(payload);
      if(error) {
        setError(error);
      } else {
        setAccountToken(token);
        setSuccess(true);
        setPayload(initialPayload);
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
