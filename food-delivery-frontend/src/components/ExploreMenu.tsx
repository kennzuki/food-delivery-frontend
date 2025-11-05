import { food_list } from '../data/assets'

import MenuCard from './MenuCard'

const ExploreMenu = () => {
    return ( 
        <div className="p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl capitalize font-bold mb-6">Explore our menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {food_list.map((item: Menu) => {
                    return (
                      <MenuCard key={item._id} item={item} />
                    );
                  })}
            </div>
        </div>
     );
}
 
export default ExploreMenu;