export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='m-3 max-w-xs rounded bg-gray-200 py-2 px-4 font-bold text-black hover:bg-gray-500'
    >
      {children}
    </button>
  );
};
