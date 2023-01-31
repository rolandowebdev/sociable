import { useState } from 'react';

const activeBtnStyles = 'bg-red-500 text-white rounded-md outline-none';
const notActiveBtnStyles =
  'bg-primary text-slate-900 rounded-md hover:bg-red-200 outline-none duration-200 hover:text-red-400';

function TabBar({ setText }) {
  const [activeBtn, setActiveBtn] = useState('created');
  return (
    <div className="flex items-center justify-center gap-2 my-4 font-semibold text-center">
      <button
        className={`py-2 px-3 w-24 ${
          activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles
        }`}
        type="button"
        onClick={(e) => {
          setText(e.target.textContent);
          setActiveBtn('created');
        }}>
        Created
      </button>
      <button
        className={`py-2  px-3 w-24 ${
          activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles
        }`}
        type="button"
        onClick={(e) => {
          setText(e.target.textContent);
          setActiveBtn('saved');
        }}>
        Saved
      </button>
    </div>
  );
}

export default TabBar;
