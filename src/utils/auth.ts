/**
 * 存储token
 * @param token 
 */
const setToken = (token: string) => {
  localStorage.setItem('token', token);
}

/**
 * 获取token
 */
const getToken = () => {
  return localStorage.getItem('token');
}

/**
 * 删除token
 */
const removeToken = () => {
  localStorage.removeItem('token');
}

export { setToken, getToken, removeToken };