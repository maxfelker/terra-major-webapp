import { useState, useEffect } from 'react';
import { retrieveAccount } from '../Account/service.accounts';
import UpdatePasswordForm from '../Account/UpdatePasswordForm';

export default function Account() {

  const [account, setAccount] = useState(null);

  useEffect(() => {
    const accountId = sessionStorage.getItem('accountId');
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


  return (
    <>
      <h1>Account</h1> 
      <p>{account && account.email}</p>
      <UpdatePasswordForm />  
    </>
  )
}