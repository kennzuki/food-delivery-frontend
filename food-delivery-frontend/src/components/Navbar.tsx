import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menu, setMenu] = useState('menu');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='max-w-6xl mx-auto p-4 md:p-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl md:text-3xl font-bold uppercase text-green-500'>
          Kenki deli
        </h1>

        {/* Mobile menu button */}
        <button
          className='md:hidden p-2'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-4 place-items-center capitalize'>
          <li
            onClick={() => setMenu('home')}
            className={`hover:text-green-500 ${menu === 'home' ? 'underline' : ''}`}
          >
            home
          </li>
          <li
            onClick={() => setMenu('menu')}
            className={`hover:text-green-500 ${menu === 'menu' ? 'underline' : ''}`}
          >
            menu
          </li>
          <li
            onClick={() => setMenu('about')}
            className={`hover:text-green-500 ${menu === 'about' ? 'underline' : ''}`}
          >
            about
          </li>
          <li
            onClick={() => setMenu('contact')}
            className={`hover:text-green-500 ${menu === 'contact' ? 'underline' : ''}`}
          >
            contacts
          </li>
        </ul>

        <div className='hidden md:flex gap-4 items-center'>
          <input type='search' className='p-2 border rounded' placeholder='Search...' />
          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex gap-2 place-items-center relative'>
            shop
            <FaShoppingCart />
            <div className="absolute h-4 w-4 bg-red-600 rounded-full top-0 right-0"></div>
          </button>
          <button className='py-2 px-4 rounded border hover:bg-gray-100'>Sign in</button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className='flex flex-col gap-4 mt-4 capitalize'>
          <li
            onClick={() => {setMenu('home'); setIsOpen(false)}}
            className={`hover:text-green-500 ${menu === 'home' ? 'underline' : ''}`}
          >
            home
          </li>
          <li
            onClick={() => {setMenu('menu'); setIsOpen(false)}}
            className={`hover:text-green-500 ${menu === 'menu' ? 'underline' : ''}`}
          >
            menu
          </li>
          <li
            onClick={() => {setMenu('about'); setIsOpen(false)}}
            className={`hover:text-green-500 ${menu === 'about' ? 'underline' : ''}`}
          >
            about
          </li>
          <li
            onClick={() => {setMenu('contact'); setIsOpen(false)}}
            className={`hover:text-green-500 ${menu === 'contact' ? 'underline' : ''}`}
          >
            contacts
          </li>
          <div className='flex flex-col gap-4 py-4'>
            <input type='search' className='p-2 border rounded' placeholder='Search...' />
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex gap-2 place-items-center relative'>
              shop
              <FaShoppingCart />
              <div className="absolute h-4 w-4 bg-red-600 rounded-full top-0 right-0"></div>
            </button>
            <button className='py-2 px-4 rounded border hover:bg-gray-100'>Sign in</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;