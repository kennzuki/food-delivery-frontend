import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='max-w-6xl mx-auto p-4 md:p-8 bg-gray-900 text-gray-200'>
      <section className='grid grid-cols-1 md:grid-cols-3  gap-4 p-8 mb-4'>
        <article className='space-y-4'>
          <h1 className='font-bold uppercase text-green-500 text-3xl'>
            Kenki Deli
          </h1>
          <p className=''>
            Our restaurant is dedicated to providing you with a delightful
            dining experience.
          </p>
        </article>
        {/* links */}
        <article className='flex flex-col gap-4 items-center'>
          <h2 className='font-bold text-2xl underline'>Links</h2>
          <ul className='flex flex-col gap-4 items-start'>
            <Link to='/'>
              <a href='#'>Home</a>
            </Link>
            <Link to='/menu'>
              <a href='#'>Menu</a>
            </Link>
            <Link to='/about'>
              <a href='#'>About</a>
            </Link>
            <Link to='/contact'>
              <a href='#'>Contact</a>
            </Link>
          </ul>
        </article>
        {/* contact    */}
        <article className='space-y-4'>
          <h2 className='font-bold text-2xl underline'>Contact</h2>
          <p className=''>123 Main Street</p>
          <p className=''>City, State ZIP</p>
          <p className=''>Phone: (123) 456-7890</p>
          <p className=''>Email: 6Ym5b@example.com</p>
        </article>
      </section>
      <p className='text-center text-gray-300 border-t mt-4 p-4'>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
