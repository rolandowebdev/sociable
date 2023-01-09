import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { MdDownloading } from 'react-icons/md';

const PostHeader = ({ pinDetail: { image, destination } }) => {
  return (
    <div className="flex items-center justify-between">
      <a
        className="flex items-center justify-center h-10 text-3xl text-left text-red-500 duration-200 bg-white rounded-full shadow-md outline-none aspect-square hover:opacity-100 hover:text-white hover:bg-red-500"
        href={`${image?.asset?.url}?dl=`}
        onClick={(e) => e.stopPropagation()}
        download>
        <MdDownloading />
      </a>
      <a
        className="flex items-center gap-[2px] font-semibold duration-150 hover:underline hover:text-red-500"
        href={destination}
        target="_blank"
        rel="noreferrer">
        <BsLink45Deg className="text-2xl" />
        {destination?.length > 20 ? destination?.slice(8) : destination}
      </a>
    </div>
  );
};

export default PostHeader;
