type CategoryMenuProps = {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    setCurrentPage: (page: number) => void;
}

const CategoryMenu = ({ categories, selectedCategory, setSelectedCategory, setCurrentPage }: CategoryMenuProps) => {
    return ( 
         <div className='flex flex-wrap gap-2  mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`${
              selectedCategory === category
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-800'
            } px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300`}
          >
            {category}
          </button>
        ))}
      </div>
     );
}
 
export default CategoryMenu;