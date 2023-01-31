const fetchUserData = () => {
  // * : localStorage() use for : clear for ensure delete user token expired
  const getUser = JSON.parse(localStorage.getItem('user'));
  const userInfo = getUser !== 'undefined' ? getUser : localStorage.clear();
  return userInfo;
};

export default fetchUserData;
