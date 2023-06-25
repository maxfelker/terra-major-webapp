import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../service.accounts';
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
      const response = await login(payload);
      
      if(response.error) {
        setError(response.error);
      } else {
        sessionStorage.setItem('accountId', response.id);
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
