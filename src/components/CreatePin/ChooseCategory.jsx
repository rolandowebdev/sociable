import { categories } from '../../utils/categories';

const ChooseCategory = ({ setCategory }) => {
  return (
    <select
      className="py-2 text-base border-b-[1px] font-semibold border-gray-200 rounded-md outline-none cursor-pointer"
      onChange={(e) => setCategory(e.target.value)}>
      <option className="bg-white" value="other">
        Select Category
      </option>
      {categories?.map((category) => (
        <option
          key={category?.name}
          className="text-base capitalize bg-white border-0 outline-none text-slate-900"
          value={category?.name}>
          {category?.name}
        </option>
      ))}
    </select>
  );
};

export default ChooseCategory;
