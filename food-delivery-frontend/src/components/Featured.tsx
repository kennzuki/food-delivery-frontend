import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Menu } from '../types';
import { Link } from 'react-router';

const Featured = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeaturedFoods();
  }, []);

  const fetchFeaturedFoods = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'http://localhost:5000/foods?featured=true'
      );
      setFeaturedFoods(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <div className='text-center py-10'>Loading featured items...</div>;
  if (error)
    return <div className='text-center py-10 text-red-500'>Error: {error}</div>;

  return (
    <section className='py-16 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Featured Dishes
          </h2>
          <p className='text-gray-600'>
            Try our chef's special recommendations
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {featuredFoods.map((food: Menu) => (
            <div
              key={food._id}
              className='bg-linear-to-br from-orange-50 to-yellow-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
            >
              <div className='relative'>
                <div className='h-56 bg-gray-200'>
                  <img
                    src={food.image}
                    alt={food.name}
                    className='w-full h-full object-cover'
                    onError={(e) => {
                      e.target.src =
                        'https://via.placeholder.com/300x250?text=Featured+Food';
                    }}
                  />
                </div>
                <div className='absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1'>
                  <span>⭐</span>
                  <span>Featured</span>
                </div>
              </div>

              <div className='p-5'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-xl font-bold text-gray-800'>
                    {food.name}
                  </h3>
                  <span className='text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded'>
                    {food.category}
                  </span>
                </div>

                <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                  {food.description}
                </p>

                <div className='flex justify-between items-center border-t pt-4'>
                  <div>
                    <span className='text-gray-500 text-xs block'>Price</span>
                    <span className='text-2xl font-bold text-orange-600'>
                      ${food.price}
                    </span>
                  </div>

                  <Link to={'/cart'}>
                    <button className='bg-linear-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg'>
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {featuredFoods.length === 0 && (
          <div className='text-center py-10 text-gray-500'>
            No featured items available at the moment
          </div>
        )}
      </div>
    </section>
  );
};

export default Featured;
