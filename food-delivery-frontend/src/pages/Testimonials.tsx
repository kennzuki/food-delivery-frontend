// ...existing code...
import { useForm, type FieldValues } from 'react-hook-form';

const Testimonials = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FieldValues>();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('testimonial submitted', data);
    reset();
  };

  return (
    <div className='bg-linear-to-br from-orange-50 to-red-50 p-8 w-full'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold text-gray-800 mb-2 text-center'>
          🍔 Customer Testimonials
        </h1>
        <p className='text-gray-600 text-center mb-8'>
          Share your experience with our food delivery service
        </p>

        <div className='flex justify-center items-start w-full'>
          {/* Form Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl space-y-6'
          >
            <h2 className='text-2xl font-bold text-gray-800 mb-2 text-center'>
              Submit Your Review
            </h2>

            <div>
              <label className='sr-only'>Name</label>
              <input
                type='text'
                {...register('name', { required: 'Name is required' })}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition'
                placeholder='Your name'
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && (
                <p className='text-red-500 text-sm mt-2'>
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className='sr-only'>Email</label>
              <input
                type='email'
                {...register('email', {
                  required: 'Email is required',
                  minLength: {
                    value: 5,
                    message: 'Email must be at least 5 characters',
                  },
                })}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition'
                placeholder='you@example.com'
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-2'>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Rating
              </label>
              <select
                {...register('rating', { required: 'Rating is required' })}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition'
                defaultValue='5'
              >
                <option value='1'>1 Star</option>
                <option value='2'>2 Stars</option>
                <option value='3'>3 Stars</option>
                <option value='4'>4 Stars</option>
                <option value='5'>5 Stars</option>
              </select>
              {errors.rating && (
                <p className='text-red-500 text-sm mt-2'>
                  {errors.rating.message}
                </p>
              )}
            </div>

            <div>
              <label className='sr-only'>Testimonial</label>
              <textarea
                {...register('text', { required: 'Testimonial is required' })}
                rows={5}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none'
                placeholder='Tell us about your experience...'
                aria-invalid={errors.text ? 'true' : 'false'}
              />
              {errors.text && (
                <p className='text-red-500 text-sm mt-2'>
                  {errors.text.message}
                </p>
              )}
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg disabled:opacity-50'
            >
              {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
