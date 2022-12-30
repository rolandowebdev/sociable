import { useState, useEffect } from 'react';

import { client } from '../../utils/sanityClient';
import { feedQuery, searchQuery } from '../../utils/data';

import { MasonryLayout, PinNotFound, Spinner } from '..';

const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [searchTerm]);

  return (
    <>
      {loading && <Spinner message="Searching or Pins..." />}
      {!pins?.length && searchTerm && !loading ? <PinNotFound /> : <MasonryLayout pins={pins} />}
    </>
  );
};

export default Search;
