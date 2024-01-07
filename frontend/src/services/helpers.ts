export function saveToken(authInfo: any) {
  return localStorage.setItem("auth", authInfo);
}

export const getToken = () => {
  if (sessionStorage.getItem("auth")) {
    return sessionStorage.getItem("auth");
  } else {
    return localStorage.getItem("auth");
  }
};

export const removeToken = () => {
  if (sessionStorage.getItem("auth")) {
    return sessionStorage.removeItem("auth");
  } else {
    return localStorage.removeItem("auth");
  }
};
