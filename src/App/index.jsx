import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDetail from '../Character/CharacterDetail'; 
import CharacterCreate from '../Character/CharacterCreate';
import HomePage from '../HomePage';
import Dashboard from '../Dashboard';
import UnityWebClient from '../UnityWebClient';
import AdminDashboard from '../AdminDashboard';
import SandboxDetail from '../AdminDashboard/SandboxDetail';
import InstanceDetail from '../AdminDashboard/InstanceDetail';
import InstanceCreate from '../AdminDashboard/InstanceCreate';
import SignUpForm from '../Account/SignUpForm';
import styles from "./styles.module.css";
import Account from '../Account';
import LoginForm from '../Account/LoginForm';

export default function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpForm/>} />
          <Route path="/login" element={<LoginForm/>} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/account" element={<Account />} />

          <Route path="/play" element={<UnityWebClient />} />

          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/characters/new" element={<CharacterCreate />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/sandboxes/:sandboxId" element={<SandboxDetail />} />
          <Route path="/admin/sandboxes/:sandboxId/instances/new" element={<InstanceCreate />} />
          <Route path="/admin/sandboxes/:sandboxId/instances/:instanceId" element={<InstanceDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
