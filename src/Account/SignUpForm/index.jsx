import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { signUp, setAccountToken } from '../service.accounts';
import { TextInput } from "../../Form";

export default function SignUpForm() {
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
      const { token, error } = await signUp(payload);
      if(error) {
        setError(error);
      } else {
        setAccountToken(token);
        navigate(`/dashboard`);
      }
    } catch (error) {
      console.error(error);
      setError('Try again later citizen, orbital API is not responding...');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Citizen Registry</h1>
      <p>All persons travelling to the <em>Terra Major</em> surface must register as Commonwealth citizenship.</p>
      {error && 
        <p>ERROR: {error}</p>
      }
      <TextInput type="email" name="email" label="Your Email" />
      <TextInput type="password" name="password" label="Password" />
      <button type="submit">Become a citizen!</button>
      <p>Already a Citizen? <Link to="/login">Login</Link></p>
    </form>
  );
}
