import { useState, useEffect } from 'react';
import { getMyAccount } from '../Account/service.accounts';
import UpdatePasswordForm from '../Account/UpdatePasswordForm';

export default function Account() {
  const [account, setAccount] = useState(null);

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


  return (
    <>
      <h1>Account</h1> 
      <p>{account && account.email}</p>
      <UpdatePasswordForm />  
    </>
  )
}