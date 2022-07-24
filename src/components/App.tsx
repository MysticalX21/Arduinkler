import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Plants } from './Plants';
import { PlantStats } from './PlantStats';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path=":id" element={<PlantStats />} />
        <Route path="/" element={<Plants />} />
      </Routes>
    </Router>
  );
};
