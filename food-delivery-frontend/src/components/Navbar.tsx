import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import SearchFilter from './SearchFilter';
import { Link } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';

const Navbar = () => {
  const [menu, setMenu] = useState('menu');
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <nav className='max-w-6xl mx-auto p-4 md:p-8 mb-8'>
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
          <Link
            to='/'
            onClick={() => setMenu('home')}
            className={`hover:text-green-500 ${
              menu === 'home' ? 'underline' : ''
            }`}
          >
            home
          </Link>
          <Link
            to='/menu'
            onClick={() => setMenu('menu')}
            className={`hover:text-green-500 ${
              menu === 'menu' ? 'underline' : ''
            }`}
          >
            menu
          </Link>
          <Link
            to='/about'
            onClick={() => setMenu('about')}
            className={`hover:text-green-500 ${
              menu === 'about' ? 'underline' : ''
            }`}
          >
            about
          </Link>
          <Link
            to='/contacts'
            onClick={() => setMenu('contact')}
            className={`hover:text-green-500 ${
              menu === 'contact' ? 'underline' : ''
            }`}
          >
            contacts
          </Link>
        </ul>

        <div className='hidden md:flex gap-4 place-items-center items-center'>
          <SearchFilter searchQuery='' onSearchange={() => {}} />
          <Link to='/cart'>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex gap-2 place-items-center relative'>
              shop
              <FaShoppingCart />
              <span className='absolute h-4 w-4 bg-red-600 rounded-full top-0 right-0 flex items-center justify-center text-xs text-white'>
                4
              </span>
            </button>
          </Link>
          {!isLoading && (isAuthenticated ? <LogoutButton /> : <LoginButton />)}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className='flex flex-col gap-4 mt-4 capitalize cursor-pointer'>
          <Link
            to='/'
            onClick={() => {
              setMenu('home');
              setIsOpen(false);
            }}
          >
            <li
              className={`hover:text-green-500 ${
                menu === 'home' ? 'underline' : ''
              }`}
            >
              home
            </li>
          </Link>

          <Link
            to='/menu'
            onClick={() => {
              setMenu('menu');
              setIsOpen(false);
            }}
            className={`hover:text-green-500 ${
              menu === 'menu' ? 'underline' : ''
            }`}
          >
            menu
          </Link>

          <Link
            to='/about'
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

          <Link
            to='/contacts'
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

          <div className='flex flex-col gap-4 py-4 border-t'>
            <input
              type='search'
              className='p-2 border rounded'
              placeholder='Search...'
            />

            <Link to='/cart'>
              <button className='w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex gap-2 items-center justify-center relative'>
                shop <FaShoppingCart />
                <span className='absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 bg-red-600 rounded-full text-xs font-semibold text-white'>
                  4
                </span>
              </button>
            </Link>

            {!isLoading &&
              (isAuthenticated ? <LogoutButton /> : <LoginButton />)}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
