import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../../utils/sanityClient';
import { pinDetailQuery, pinDetailMorePinQuery } from '../../utils/data';

import { Loading } from '..';
import CommentList from './CommentList';
import AnotherPins from './AnotherPins';
import CommentInput from './CommentInput';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostInfo from './PostInfo';

const PinDetail = ({ user }) => {
  const { pinId } = useParams();
  const [pins, setPins] = useState(null);
  const [pinDetail, setPinDetail] = useState(null);

  const fetchPinDetail = () => {
    let query = pinDetailQuery(pinId);
    if (query) {
      client.fetch(query).then((data) => {
        setPinDetail(data[0]);
        if (data[0]) {
          query = pinDetailMorePinQuery(data[0]);
          client.fetch(query).then((response) => setPins(response));
        }
      });
    }
  };

  useEffect(() => {
    fetchPinDetail();
  }, [pinId]);

  if (!pinDetail) return <Loading center message="Loading pin..." />;

  return (
    <div className="flex gap-5">
      <PostImage pinDetail={pinDetail} />
      <div className="flex-1">
        <PostHeader pinDetail={pinDetail} />
        <PostInfo pinDetail={pinDetail} user={user} />
        <CommentInput user={user} fetchPinDetail={fetchPinDetail} />
        <CommentList pinDetail={pinDetail} user={user} />
        <AnotherPins pins={pins} />
      </div>
    </div>
  );
};

export default PinDetail;
