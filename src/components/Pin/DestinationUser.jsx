import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'

export const DestinationUser = ({ destination }) => (
  <a
    className="flex items-center gap-2 p-2 pr-4 text-[10px] font-bold text-slate-900 bg-white rounded-full opacity-70 hover:opacity-100 hover:shadow-md hover:text-red-500"
    href={destination}
    target="_blank"
    rel="noreferrer"
    onClick={(e) => e.stopPropagation()}>
    <BsFillArrowUpRightCircleFill className="text-xs" />
    {destination?.length > 15 ? `${destination?.slice(0, 13)}...` : destination}
  </a>
)
