import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CharacterList from "../Character/CharacterList";
import { retrieveAccount } from '../Account/service.accounts';

export default function Dashboard() {

  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accountId = sessionStorage.getItem('accountId');
    if(!accountId) {
      navigate('/')
      return;
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
  });

  function signOut() {
    sessionStorage.clear();
    navigate('/');
  }

  return (
    <>
      <h1>Dashboard</h1> - <Link to="/play">Play Now</Link>
      <p>{account && account.email} - <button onClick={signOut}>Sign Out</button></p>
      <CharacterList />  
    </>
  )
}