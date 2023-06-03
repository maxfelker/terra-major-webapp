import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from '../Character/CharacterList';
import CharacterDetail from '../Character/CharacterDetail'; 
import CharacterCreate from '../Character/CharacterCreate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/characters/new" element={<CharacterCreate />} />
        <Route path="/" element={<CharacterList />} />
      </Routes>
    </Router>
  );
}

export default App;
