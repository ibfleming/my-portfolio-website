import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import BibleButton from './components/BibleButton';

function App() {
   return (
      <Router>
         <BibleButton />
         <Routes>
            <Route path='/' element={<HomePage />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
