import { useState } from 'react'

const activeBtnStyles =
  'bg-primary text-white rounded-md borderborder-transparent outline-none'
const notActiveBtnStyles =
  'text-lightPrimary rounded-md hover:bg-lightPrimary outline-none duration-200 hover:text-white border border-lightPrimary'

export const TabBar = ({ setText }) => {
  const [activeBtn, setActiveBtn] = useState('created')
  return (
    <div className="flex items-center justify-center gap-2 my-4 font-semibold text-center">
      <button
        className={`py-2 px-3 w-24 ${
          activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles
        }`}
        type="button"
        onClick={(e) => {
          setText(e.target.textContent)
          setActiveBtn('created')
        }}>
        Created
      </button>
      <button
        className={`py-2  px-3 w-24 ${
          activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles
        }`}
        type="button"
        onClick={(e) => {
          setText(e.target.textContent)
          setActiveBtn('saved')
        }}>
        Saved
      </button>
    </div>
  )
}
