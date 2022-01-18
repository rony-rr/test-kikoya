const checkToken = async () => {
  const token = await localStorage.getItem("tokenUser-kikoya");
  if (token) return token;
  return false;
};

export default checkToken;
