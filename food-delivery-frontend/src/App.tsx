import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
