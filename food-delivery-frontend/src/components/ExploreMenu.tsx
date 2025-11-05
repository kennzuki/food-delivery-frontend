import { food_list } from '../data/assets';
import { useState } from 'react';
import type { Menu } from '../types';
import MenuCard from './MenuCard';

const ExploreMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  //total pages
  const totalPages = Math.ceil(food_list.length / itemsPerPage);
  //get current pages items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = food_list.slice(indexOfFirstItem, indexOfLastItem);

  //pagination button render
  const pagePagination = (
    <div className='flex justify-center gap-2 mt-8'>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => setCurrentPage(index + 1)}
          className={`${
            currentPage === index + 1
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-800'
          } px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
  return (
    <div className='p-4 md:p-8'>
      <h1 className='text-2xl md:text-3xl capitalize font-bold mb-6'>
        Explore our menu
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {currentItems.map((item: Menu) => {
          return <MenuCard key={item._id} item={item} />;
        })}
      </div>
      {totalPages > 1 && pagePagination}
    </div>
  );
};

export default ExploreMenu;
