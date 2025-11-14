import { useState, useEffect } from 'react';
import type { Food} from '../types';
import MenuCard from './MenuCard';
import Pagination from './Pagination';
import axios from 'axios';
import CategoryMenu from './CategoryMenu';


const ExploreMenu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:5000/foods');
        console.log(response);

        setFoods(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const itemsPerPage = 12;

  const food_list:Food[] = foods;

  //get unique categories
  const categories = [
    'All',
    ...new Set(food_list.map((food) => food.category)),
  ];
  const filteredMenu =
    selectedCategory === 'All'
      ? food_list
      : food_list.filter((food) => food.category === selectedCategory);

  //total pages
  const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);
  //get current pages items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMenu.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='p-4 md:p-8 m-8'>
      <h1 className='text-2xl md:text-3xl capitalize font-bold mb-6'>
        Explore our menu
      </h1>
      {/* category buttons */}
      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setCurrentPage={setCurrentPage}
      />

      {/* //all the menu */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {currentItems.map((item: Food) => {
          return <MenuCard key={item._id} item={item} />;
        })}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ExploreMenu;
