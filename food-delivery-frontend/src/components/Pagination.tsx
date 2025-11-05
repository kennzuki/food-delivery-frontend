
type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    if(totalPages <= 1){
       return null
    }
    return ( 
         <div className='flex justify-center gap-2 mt-8'>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => onPageChange(index + 1)}
                  className={`${
                    currentPage === index + 1
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  } px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
     );
}
 
export default Pagination;