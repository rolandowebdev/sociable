import { NavLink } from 'react-router-dom';

const Categories = ({ categories, linkStatus, handleCloseSidebar }) => {
  return (
    <>
      <h3 className="px-5 mt-2 text-base font-bold text-gray-500 2xl:text-xl">
        Discover categories
      </h3>
      {categories?.slice(0, categories.length - 1).map((category) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? linkStatus.isActiveStyle : linkStatus.isNotActiveStyle
          }
          key={category?.name}
          to={`/category/${category?.name}`}
          onClick={handleCloseSidebar}>
          <img className="w-8 h-8 rounded-full shadow-sm" src={category?.image} alt="category" />
          {category?.name}
        </NavLink>
      ))}
    </>
  );
};

export default Categories;
