import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Testimonials from './pages/Testimonials';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import About from './pages/About';
import Contacts from './pages/Contacts';
import FoodDetailModal from './pages/FoodDetailModal';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:id' element={<FoodDetailModal />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
