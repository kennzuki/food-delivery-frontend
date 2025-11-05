type PostFilterProps = {
  searchQuery: string;

  onSearchange: (value: string) => void;
};

const SearchFilter = ({ searchQuery, onSearchange }: PostFilterProps) => {
  return (
    <div className=''>
      <input
        type='text'
        placeholder='Search...'
        value={searchQuery}
        onChange={(e) => onSearchange(e.target.value)}
        className='w-full px-4 py-2 rounded-lg border border-gray-400  text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  );
};

export default SearchFilter;