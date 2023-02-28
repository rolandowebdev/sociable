export const fetchUserData = () => {
  const getUser = JSON.parse(localStorage.getItem('user'))
  const userInfo = getUser !== 'undefined' ? getUser : localStorage.clear()
  return userInfo
}
