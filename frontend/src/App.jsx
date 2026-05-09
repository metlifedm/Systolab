import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Interface from './pages/Interface';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Interface />} />
      </Routes>
    </Router>
  );
}

export default App;
