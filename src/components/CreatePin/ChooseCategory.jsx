import { categories } from '../../utils/data';

const ChooseCategory = ({ setCategory }) => {
  return (
    <>
      <p className="mb-2 text-lg font-semibold sm:text-xl">Choose Pin Category</p>
      <select
        className="w-full py-2 text-base border-b-[1px] border-gray-200 rounded-md outline-none cursor-pointer"
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
    </>
  );
};

export default ChooseCategory;
