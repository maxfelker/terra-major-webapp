import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDetail from '../Character/CharacterDetail'; 
import CharacterCreate from '../Character/CharacterCreate';
import HomePage from '../HomePage';
import Dashboard from '../Dashboard';
import UnityWebClient from '../UnityWebClient';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="play" element={<UnityWebClient />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/characters/new" element={<CharacterCreate />} />
      </Routes>
    </Router>
  );
}
