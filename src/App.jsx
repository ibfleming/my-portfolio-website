import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import BibleWidget from './components/BibleWidget';

function App() {
   return (
      <Router>
         <BibleWidget />
         <Routes>
            <Route path='/' element={<HomePage />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
