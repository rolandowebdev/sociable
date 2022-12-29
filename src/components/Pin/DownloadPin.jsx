import { MdDownloadForOffline } from 'react-icons/md';

const DownloadPin = ({ image }) => {
  return (
    <div className="flex gap-2 mx-1">
      <a
        className="flex items-center justify-center text-left bg-white rounded-full outline-none opacity-75 text-slate-900 w-7 h-7 hover:opacity-100 hover:shadow-md"
        href={`${image?.asset?.url}?dl=`}
        onClick={(e) => e.stopPropagation()}
        download>
        <MdDownloadForOffline className="text-sm" />
      </a>
    </div>
  );
};

export default DownloadPin;
