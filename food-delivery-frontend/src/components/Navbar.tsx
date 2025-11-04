import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
  const [menu, setMenu] = useState('menu');
  return (
    <div className='max-w-6xl mx-auto p-8 flex justify-evenly cursor-pointer'>
      <h1 className='text-3xl font-bold underline uppercase text-green-500 '>
        {' '}
        Kenki deli{' '}
      </h1>
      <ul className='flex gap-2 place-items-center capitalize'>
        <li
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'underline' : ''}
        >
          home
        </li>
        <li
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'underline' : ''}
        >
          menu{' '}
        </li>
        <li
          onClick={() => setMenu('about')}
          className={menu === 'about' ? 'underline' : ''}
        >
          about{' '}
        </li>
        <li
          onClick={() => setMenu('contact')}
          className={menu === 'contact' ? 'underline' : ''}
        >
          contacts{' '}
        </li>
      </ul>
      <div className='flex gap-2'>
        <input type='search' className='' />
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex gap-2 place-items-center'>
          shop
          <FaShoppingCart />
        </button>
        <button className='py-3 px-2 rounded border'>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
