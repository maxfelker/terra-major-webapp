import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login, setAccountToken } from '../service.accounts';
import { TextInput } from "../../Form";

export default function LoginForm() {
  const navigate = useNavigate();
  const [ error, setError ] = useState(null);

  const handleSubmit = async (event) => {
    setError(null)
    const payload = {
      email: event.target[0].value,
      password: event.target[1].value
    }
    event.preventDefault();
    try {
      const { token, error } = await login(payload);
      if(error) {
        setError(error);
      } else {
        setAccountToken(token);
        navigate(`/dashboard`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {error && 
        <p>ERROR: {error}</p>
      }
      <TextInput type="email" name="email" label="Your Email" />
      <TextInput type="password" name="password" label="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
