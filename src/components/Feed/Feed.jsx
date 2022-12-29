import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MasonryLayout, Spinner } from '..';

import { client } from '../../utils/sanityClient';
import { feedQuery, searchQuery } from '../../utils/data';

const Feed = () => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    // TODO: check whether feed are in a category or not
    if (categoryId) {
      const categoryQuery = searchQuery(categoryId);
      client
        .fetch(categoryQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      client
        .fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [categoryId]);

  if (loading) return <Spinner message="We are adding new ideas to your feed!" />;
  if (!pins?.length) {
    return <h2 className="text-2xl font-bold text-center text-slate-900">No Pins Avaiable</h2>;
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
