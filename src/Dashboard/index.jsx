import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CharacterList from "../Character/CharacterList";
import { retrieveAccount } from '../Account/service.accounts';
import { getActiveAccount } from '../App/service.app';

export default function Dashboard() {

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accountId = getActiveAccount();
    if(!accountId) {
      console.error("No account id!")
    }
    async function fetchData() {
      try {
        const response = await retrieveAccount(accountId);
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