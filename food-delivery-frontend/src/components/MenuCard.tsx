import type { Menu } from '../types'

const MenuCard = ({ item }: { item: Menu }) => {
    return ( 
         <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" >
                            <div className="relative w-full h-48 mb-4">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                                <p className="text-green-600 font-bold mb-2">Ksh {item.price}</p>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                                <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300">
                                    Add to Cart
                                </button>
                            </div>
                            </div>
     );
}
 
export default MenuCard;