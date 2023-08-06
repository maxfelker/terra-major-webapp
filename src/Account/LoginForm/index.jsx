import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { login, setAccountToken } from '../service.accounts';
import { TextInput } from "../../Form";
import appStyles from '../../App/styles.module.css';
import bg from './colonist-1.png';

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
 
    <>
      <div className={appStyles.hero} style={{backgroundImage:"url("+bg+")", backgroundPositionY:'15%'}}>
        <div className={appStyles.heroContent}>
          <div className={appStyles.content}>
            <h1>Citizen Access</h1>
          </div>
        </div>
      </div>

        <form  className={appStyles.content}  onSubmit={handleSubmit}>
          {error && 
            <p className={appStyles.error}>ERROR: {error}</p>
          }
          <p>To reach the planet surface, you must verify your Commonwealth Citizenship.</p>

          <TextInput type="email" name="email" placeholder="Citizen Email" />
          <TextInput type="password" name="password" placeholder="Password" />
          <button type="submit">Verify Citizenship</button>

          <p>All civillians must <Link to="/sign-up">register for Citizenship!</Link></p>

      </form>
    </>
  );
}
