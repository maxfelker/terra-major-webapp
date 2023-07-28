import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CharacterList from "../Character/CharacterList";
import { getMyAccount, logout } from '../Account/service.accounts';
import styles from './styles.module.css';

export default function Dashboard() {

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMyAccount();
        if(response.error){
          signOut();
        } else{
          setAccount(response);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[]);

  function signOut() {
    logout();
    navigate('/');
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link to="/dashboard/account">My Account</Link>
        <div>{account && account.email} - <button onClick={signOut}>Sign Out</button></div>
      </nav>
      {/*<h1>Good afternoon, Citizen!</h1>
      <p>This is your dashboard where you can explore and manage your Terra Major characters.</p>*/}
      <CharacterList />  
    </>
  )
}