
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeScreen from './pages/HomeScreen';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import ArticlesDetails from './pages/ArticlesDetails';


function App() {
  return (
    <div > 

      <Navbar />
      < Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:fullName' element={<ArticlesDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
