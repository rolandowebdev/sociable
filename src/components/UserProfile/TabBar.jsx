import { useState } from 'react';

const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';
const notActiveBtnStyles =
  'bg-primary mr-4 text-slate-900 font-bold p-2 rounded-full w-20 outline-none';

const TabBar = ({ setText }) => {
  const [activeBtn, setActiveBtn] = useState('created');
  return (
    <div className="text-center mb-7">
      <button
        className={`${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`}
        type="button"
        onClick={(e) => {
          setText(e.target.textContent);
          setActiveBtn('created');
        }}>
        Created
      </button>
      <button
        className={`${activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles}`}
        type="button"
        onClick={(e) => {
          setText(e.target.textContent);
          setActiveBtn('saved');
        }}>
        Saved
      </button>
    </div>
  );
};

export default TabBar;
