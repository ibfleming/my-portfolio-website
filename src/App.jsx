import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import BibleButton from './components/BibleButton';
import BibleWidget from './components/BibleWidget';

function App() {
   return (
      <Router>
         <BibleButton />

         <div className='bg-gray-200 rounded-lg border-2 border-slate-800 shadow-lg p-8 max-w-lg w-full mx-auto'>
            <BibleWidget />
         </div>

         <Routes>
            <Route path='/' element={<HomePage />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
