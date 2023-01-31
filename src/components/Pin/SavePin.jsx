import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { client } from '../../utils/sanityClient';

function SavePin({ save, user, _id }) {
  const [savingPost, setSavingPost] = useState(false);
  /**
   * How the filter function work's here :
   * userId is -> 1 | array of user -> [2,3,1] -> [1].length -> result : 1.
   * * id from postedBy is the same with userId because user post the image with userId
   * * (!!) <- this mark will return boolean
   */
  const alreadySaved = !!save?.filter((item) => item?.postedBy?._id === user?.sub)?.length;

  const savePin = (id) => {
    if (!alreadySaved) {
      setSavingPost(true);
      client
        .patch(id)
        .setIfMissing({ save: [] })
        .insert('after', 'save[-1]', [
          {
            _key: uuidv4(),
            userId: user?.sub,
            postedBy: {
              _type: 'postedBy',
              _ref: user?.sub
            }
          }
        ])
        .commit() // send data into sanity
        .then(() => {
          window.location.reload();
          setSavingPost(false);
        });
    }
  };

  if (alreadySaved) {
    return (
      <button className="text-xs save-btn" type="button">
        {save?.length} Saved
      </button>
    );
  }

  return (
    <button
      className="text-xs save-btn"
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        savePin(_id);
      }}>
      {!savingPost && save?.length} {savingPost ? 'Saving...' : 'Save'}
    </button>
  );
}

export default SavePin;
