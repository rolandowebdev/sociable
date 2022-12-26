/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MasonryLayout, Spinner } from '..';

import client from '../../utils/sanityClient';
import { feedQuery, searchQuery } from '../../utils/data';

const Feed = () => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client
        .fetch(query)
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

  console.log(pins);

  if (loading) return <Spinner message="We are adding new ideas to your feed!" />;

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
