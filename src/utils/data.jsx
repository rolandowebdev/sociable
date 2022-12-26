// TODO: function for send data into sanity
const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export default userQuery;
