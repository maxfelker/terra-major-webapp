import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CharacterList from "../Character/CharacterList";
import { getMyAccount } from '../Account/service.accounts';

export default function Dashboard() {

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMyAccount();
        setAccount(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[]);

  function signOut() {
    sessionStorage.clear();
    navigate('/');
  }

  return (
    <>
      <h1>Dashboard</h1> - <Link to="/play">Play Now</Link> <Link to="/dashboard/account">My Account</Link>
      <p>{account && account.email} - <button onClick={signOut}>Sign Out</button></p>
      <CharacterList />  
    </>
  )
}