import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { createAccount, setAccountToken } from '../service.accounts';
import { TextInput } from "../../Form";
import appStyles from '../../App/styles.module.css';
import bg from './bg.png';

export default function SignUpForm() {
  const navigate = useNavigate();
  const [ error, setError ] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
    
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    const payload = {
      email: email,
      password: password
    }
  
    try {
      const { token, error } = await createAccount(payload);
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
    <>
      <div className={appStyles.hero} style={{backgroundImage:"url("+bg+")", backgroundPositionY:'15%'}}>
        <div className={appStyles.heroContent}>
          <div className={appStyles.content}>
            <h1>Citizen Registry</h1>
          </div>
        </div>
      </div>

      <form className={appStyles.content} onSubmit={handleSubmit}>
        <p>All civillians travelling to the <em>Terra Major</em> surface must register as a Commonwealth citizen.</p>
        {error && 
          <p className={appStyles.error}>ERROR: {error}</p>
        }
        <TextInput type="email" name="email" placeholder="Email" />
        <TextInput type="password" name="password" placeholder="Password" />
        <TextInput type="password" name="confirmPassword" placeholder="Confirm Password" />
        <button type="submit">Become a citizen!</button>
        <p>Already a Citizen? <Link to="/login">Login</Link></p>
      </form>
    </>
  );
}
