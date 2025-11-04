import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className='max-w-6xl mx-auto p-8 flex justify-evenly'>
      <h1 className='text-3xl font-bold underline uppercase text-green-500'>
        {' '}
        Kenki deli{' '}
      </h1>
      <nav className='flex gap-2 place-items-center'>
        <a href='/'>Home</a>
        <a href='/menu'>Menu</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact-us</a>
      </nav>
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
