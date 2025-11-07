import { FaTruck, FaUtensils, FaClock, FaShieldAlt } from 'react-icons/fa';
import {Link} from 'react-router';

const About = () => {
    return ( 
         <div className="max-w-6xl mx-auto p-4 md:p-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kenki Deli</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Delivering happiness through delicious food and exceptional service since 2023
                </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-green-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                    At Kenki Deli, we're committed to making food delivery convenient, reliable, 
                    and delightful. We connect local restaurants with hungry customers, ensuring 
                    every meal arrives fresh and on time.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <FaTruck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">Quick and reliable delivery to your doorstep</p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <FaUtensils className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Quality Food</h3>
                    <p className="text-gray-600">Partnering with the best local restaurants</p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <FaClock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">24/7 Service</h3>
                    <p className="text-gray-600">Available whenever you're hungry</p>
                </div>

                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <FaShieldAlt className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Secure Ordering</h3>
                    <p className="text-gray-600">Safe and secure payment methods</p>
                </div>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
                    <div className="text-gray-600">Restaurants</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">50k+</div>
                    <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">100k+</div>
                    <div className="text-gray-600">Deliveries</div>
                </div>
                <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">4.8</div>
                    <div className="text-gray-600">Average Rating</div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Want to know more?</h2>
                <p className="text-gray-600 mb-6">
                    We'd love to hear from you. Get in touch with our team.
                </p>
                <Link to="/contacts" className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors">
                    Contact Us
                </Link>
            </div>
        </div>
     );
}
 
export default About;