import { useParams, useNavigate, Link } from 'react-router';
import { useFoodById } from '../hooks/useFoods';
import { FaX } from 'react-icons/fa6';
import { FaMinus, FaPlus } from 'react-icons/fa';

const FoodDetailPage = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  // name the returned data `food` to match usage below
  const { data: food, isLoading, isError, error } = useFoodById(id ?? '');

  console.log('food:', food);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500'></div>
      </div>
    );
  }

  // guard against missing data
  if (isError || !food) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-16 text-center'>
        <h2 className='text-2xl font-bold text-red-600 mb-4'>
          Error loading food item
        </h2>
        <p className='text-gray-600 mb-6'>
          {error?.message || 'Food item not found'}
        </p>
        <button
          onClick={() => navigate('/menu')}
          className='bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600'
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Breadcrumb */}
      <div className='bg-white border-b'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <nav className='flex items-center gap-2 text-sm text-gray-600'>
            <Link to='/' className='hover:text-orange-500'>
              Home
            </Link>
            <span>/</span>
            <Link to='/menu' className='hover:text-orange-500'>
              Menu
            </Link>
            <span>/</span>
            <span className='text-gray-900 font-medium'>{food?.name}</span>
          </nav>
        </div>
      </div>

      {/* details */}
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
        <div className='bg-white rounded-lg max-w-2xl w-full p-6 relative'>
          {/* Close Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full'
          >
            <FaX size={20} />
          </button>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Image */}
            <div>
              <img
                src={food.image}
                alt={food.name}
                className='w-full h-96 object-cover rounded-lg'
              />
            </div>

            {/* Details */}
            <div className='flex flex-col justify-between'>
              <div>
                <h1 className='text-3xl font-bold mb-2'>{food.name}</h1>
               
                <p className='text-2xl font-bold text-green-600 mb-4'>
                  Ksh {food.price?.toFixed(2) ?? 'N/A'}
                </p>
                <p className='text-gray-700 mb-6'>{food.description}</p>
                {food.category && (
                  <p className='text-sm text-gray-500 mb-4'>
                    Category:{' '}
                    <span className='font-semibold'>{food.category}</span>
                  </p>
                )}
              </div>
                 {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold">Quantity:</label>
                <div className="flex gap-4 items-center border rounded-lg ml-3">
                  <button
                    // onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaMinus size={16} />
                  </button>
                  {/* <span className="px-4 py-2">{quantity}</span> */}
                  <button
                    // onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaPlus size={16} />
                  </button>
                </div>
              </div>
              </div>

              {/* Add to Cart Button */}
              <button
                // onClick={() => addToCart(food)}
                className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300'
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
