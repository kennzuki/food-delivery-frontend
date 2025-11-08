import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import SearchFilter from './SearchFilter';
import { Link } from 'react-router';
const Navbar = () => {
  const [menu, setMenu] = useState('menu');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='max-w-6xl mx-auto p-4 md:p-8'>
      <div className='flex justify-between items-center'>
        <Link to='/' className='flex items-center gap-2'>
          <h1 className='text-2xl md:text-3xl font-bold uppercase text-green-500'>
            Kenki deli
          </h1>
        </Link>
        {/* Mobile menu button */}
        <button className='md:hidden p-2' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-4 place-items-center capitalize cursor-pointer'>
          <Link to='/'
            onClick={() => setMenu('home')}
            className={`hover:text-green-500 ${
              menu === 'home' ? 'underline' : ''
            }`}
          >
            home
          </Link>
          <Link to='/menu'
            onClick={() => setMenu('menu')}
            className={`hover:text-green-500 ${
              menu === 'menu' ? 'underline' : ''
            }`}
          >
            menu
          </Link>
          <Link to='/about'
            onClick={() => setMenu('about')}
            className={`hover:text-green-500 ${
              menu === 'about' ? 'underline' : ''
            }`}
          >
            about
          </Link>
          <Link to='/contacts'
            onClick={() => setMenu('contact')}
            className={`hover:text-green-500 ${
              menu === 'contact' ? 'underline' : ''
            }`}
          >
            contacts
          </Link>
        </ul>

        <div className='hidden md:flex gap-4 place-items-center items-center'>
          <SearchFilter searchQuery='' onSearchange={() => { }} />
          <Link to='/cart'>
          <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex gap-2 place-items-center relative'>
            shop
            <FaShoppingCart />
            <div className='absolute h-4 w-4 bg-red-600 rounded-full top-0 right-0'></div>
            </button>
          </Link>
          <button className='py-2 px-4 rounded border hover:bg-gray-100'>
            Sign in
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className='flex flex-col gap-4 mt-4 capitalize cursor-pointer'>
          <Link to='/'>
           <a
            onClick={() => {
              setMenu('home');
              setIsOpen(false);
            }}
            className={`hover:text-green-500 cursor ${
              menu === 'home' ? 'underline' : ''
            }`}
          >
            home
          </a></Link>
         
          <Link to='/menu'
            onClick={() => {
              setMenu('menu');
              setIsOpen(false);
            }}
            className={`hover:text-green-500 cursor-pointer ${
              menu === 'menu' ? 'underline' : ''
            }`}
          >
            menu
          </Link>
          <Link to='/about'
            onClick={() => {
              setMenu('about');
              setIsOpen(false);
            }}
            className={`hover:text-green-500 ${
              menu === 'about' ? 'underline' : ''
            }`}
          >
            about
          </Link>
          <Link to='/contacts'
            onClick={() => {
              setMenu('contact');
              setIsOpen(false);
            }}
            className={`hover:text-green-500 ${
              menu === 'contact' ? 'underline' : ''
            }`}
          >
            contacts
          </Link>
          <div className='flex flex-col gap-4 py-4'>
            <input
              type='search'
              className='p-2 border rounded'
              placeholder='Search...'
            />
            {/* cart */}
            <Link to='/cart>'>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex gap-2 place-items-center relative'>
              - shop - <FaShoppingCart />-{' '}
              <div className='absolute h-4 w-4 bg-red-600 rounded-full top-0 right-0'></div>
              -{' '}
            </button>
            +{' '}
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex gap-2 items-center relative'>
              + shop + <FaShoppingCart />+ {/* cart count */}+{' '}
              <span className='absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 bg-black rounded-full text-xs font-semibold text-gray-100'>
                + 4hy
              </span>
              +{' '}
            </button>
            </Link>
            <button className='py-2 px-4 rounded border hover:bg-gray-100'>
              Sign in
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
