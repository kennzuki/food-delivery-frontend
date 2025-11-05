import { food_list } from '../data/assets';
import { useState } from 'react';
import type { Menu } from '../types';
import MenuCard from './MenuCard';
import Pagination from './Pagination';

const ExploreMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  //total pages
  const totalPages = Math.ceil(food_list.length / itemsPerPage);
  //get current pages items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = food_list.slice(indexOfFirstItem, indexOfLastItem);


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
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
    </div>
  );
};

export default ExploreMenu;
