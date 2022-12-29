import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { client } from '../../utils/sanityClient';

const CommentInput = ({ user, fetchPinDetail }) => {
  const { pinId } = useParams();
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);

  const addComment = () => {
    if (comment) {
      setAddingComment(true);
      client
        .patch(pinId)
        .setIfMissing({ comments: [] })
        .insert('after', 'comments[-1]', [
          {
            comment,
            _key: uuidv4(),
            postedBy: {
              _type: 'postedBy',
              _ref: user._id
            }
          }
        ])
        .commit()
        .then(() => {
          fetchPinDetail();
          setComment('');
          setAddingComment(false);
        });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mt-6">
      <input
        className="flex-1 p-2 border-2 border-gray-100 rounded-md outline-none focus:border-gray-300"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onClick={addComment}
        placeholder="Add a comment"
      />
      <button
        className="px-6 py-2 text-base font-semibold text-white bg-red-500 rounded-md outline-none"
        type="button"
        onClick={addComment}>
        {addingComment ? 'Posting the comment...' : 'Post!'}
      </button>
    </div>
  );
};

export default CommentInput;
