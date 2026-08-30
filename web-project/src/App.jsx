import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Imgupload from './pages/imgupload';
import Docxupload from './pages/docxupload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imgupload" element={<Imgupload />} />
        <Route path="/docxupload" element={<Docxupload />} />
      </Routes>
    </Router>
  );
}

export default App;
