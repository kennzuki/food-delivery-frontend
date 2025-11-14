import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';

const Cart = () => {
    // Sample cart items - replace with your actual data
    const sampleItems = [
        {
            id: 1,
            name: "Chicken Burger",
            price: 599,
            quantity: 2,
            image: "/public/food_1.png"
        },
        {
            id: 2,
            name: "Margherita Pizza",
            price: 899,
            quantity: 1,
            image: "/images/pizza.jpg"
        }
    ];

    const subtotal = 2097; // Sample calculation: (599 * 2) + (899 * 1)
    const deliveryFee = 100;
    const total = subtotal + deliveryFee;

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

            {sampleItems.length === 0 ? (
                <div className="text-center py-12">
                    <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
                    <Link 
                        to="/menu" 
                        className="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-4">
                        {sampleItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-green-600 font-bold">
                                        Ksh {item.price.toFixed(2)}
                                    </p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <button className="p-1 hover:bg-gray-100 rounded">
                                            <FaMinus size={12} />
                                        </button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button className="p-1 hover:bg-gray-100 rounded">
                                            <FaPlus size={12} />
                                        </button>
                                        <button className="ml-4 text-red-500 hover:text-red-700">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold">
                                        Ksh {(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>Ksh {subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Fee</span>
                                <span>Ksh {deliveryFee.toFixed(2)}</span>
                            </div>
                            <div className="border-t pt-2 mt-2">
                                <div className="flex justify-between font-bold">
                                    <span>Total</span>
                                    <span>Ksh {total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;