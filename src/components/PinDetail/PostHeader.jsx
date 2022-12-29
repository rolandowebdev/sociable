import React from 'react';
import { BsPinAngleFill } from 'react-icons/bs';
import { MdDownloadForOffline } from 'react-icons/md';

const PostHeader = ({ pinDetail }) => {
  return (
    <div className="flex items-center justify-between">
      <a
        className="flex items-center justify-center w-10 h-10 text-left bg-white rounded-full outline-none opacity-75 text-slate-900 hover:opacity-100 hover:shadow-md"
        href={`${pinDetail?.image?.asset?.url}?dl=`}
        onClick={(e) => e.stopPropagation()}
        download>
        <MdDownloadForOffline className="text-3xl" />
      </a>
      <a
        className="flex items-center gap-1 font-semibold duration-150 hover:underline hover:text-sky-600"
        href={pinDetail?.destination}
        target="_blank"
        rel="noreferrer">
        <BsPinAngleFill />
        {pinDetail?.destination?.length > 20
          ? pinDetail?.destination?.slice(8)
          : pinDetail?.destination}
      </a>
    </div>
  );
};

export default PostHeader;
