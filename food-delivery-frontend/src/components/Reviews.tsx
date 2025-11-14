import type { Testimonial } from '../types';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/axios';


const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill={filled ? 'currentColor' : 'none'}
    viewBox='0 0 24 24'
    aria-hidden='true'
  >
    <path
      stroke='currentColor'
      strokeWidth='1'
      d='M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.897 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z'
    />
  </svg>
);

const Reviews = () => {
  const {
    data: testimonials,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const response = await api.get('/testimonials');
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });

  if (isLoading) {
    return (
      <section className='py-8 px-4 md:px-8 bg-gray-50 mx-auto'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex justify-center items-center h-64'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-600'></div>
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className='py-8 px-4 md:px-8 bg-gray-50 mx-auto'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center py-8'>
            <p className='text-red-600'>
              Error loading testimonials: {error.message}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='py-8 px-4 md:px-8 bg-gray-50 mx-auto'>
      <div className='max-w-7xl mx-auto'>
        <header className='mb-6 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            What <span className='text-green-600'>people say</span>
          </h2>
          <p className='text-gray-600 mt-2'>
            Read testimonials from our happy customers
          </p>
        </header>

        {testimonials && testimonials.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {testimonials.map((t: Testimonial) => (
              <article
                key={t.id}
                className='bg-white rounded-lg shadow-sm p-5 flex flex-col h-full'
                aria-labelledby={`testimonial-${t.id}-name`}
              >
                <div className='flex items-center gap-4 mb-3'>
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-semibold ${t.avatarColor}`}
                    aria-hidden='true'
                  >
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <h3
                      id={`testimonial-${t.id}-name`}
                      className='text-sm font-semibold text-gray-900'
                    >
                      {t.name}
                    </h3>
                    {t.role && (
                      <p className='text-xs text-gray-500'>{t.role}</p>
                    )}
                  </div>
                </div>
                <div className='flex items-center mb-3' aria-hidden='true'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className='mr-1'>
                      <Star filled={i < t.rating} />
                    </span>
                  ))}
                  <span className='text-xs text-gray-500 ml-2'>
                    · {t.rating}.0
                  </span>
                </div>
                <p className='text-gray-700 text-sm flex-1'>{t.text}</p>
                <div className='mt-4'>
                  <button
                    className='text-sm text-green-600 hover:underline'
                    onClick={() => {}}
                    aria-label={`Read more review from ${t.name}`}
                  >
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className='text-center py-8'>
            <p className='text-gray-500'>No testimonials available yet.</p>
          </div>
        )}
      </div>
      <Link to='/testimonials' className='flex justify-center mt-6'>
        <button className='py-3 px-6 mt-6 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors'>
          Write a review
        </button>
      </Link>
    </section>
  );
};

export default Reviews;
