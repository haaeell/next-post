const CardList = ({ children}:any) => {
  return <div className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300 w-full p-4 m-3 rounded-2xl">{children}</div>;
};

export default CardList;
