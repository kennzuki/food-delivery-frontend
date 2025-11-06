import { useState } from "react";

const Testimonials = () => {
    
    return ( 
        <div className=" bg-gradient-to-br from-orange-50 to-red-50 p-8 w-full ">
      <div className=" max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          🍔 Customer Testimonials
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Share your experience with our food delivery service
        </p>

        <div className="flex justify-center items-center w-full">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-4 w-1/2 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Submit Your Review
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
               
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Role
                </label>
                <input
                  type="text"
                  name="role"
                 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                  placeholder="Food Enthusiast"
                />
               
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <select
                  name="rating"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                >
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Testimonial
                </label>
                <textarea
                  name="text"
                 rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your experience..."
                />
             
              </div>

              <button
                type="button"
               
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Submit Testimonial
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
     );
}
 
export default Testimonials;