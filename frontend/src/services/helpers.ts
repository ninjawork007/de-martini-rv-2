import { AUTH_TOKEN_NAME } from "../constants";

export function saveToken(authInfo: any) {
  return localStorage.setItem(AUTH_TOKEN_NAME, authInfo);
}

export const getToken = () => {
  if (sessionStorage.getItem(AUTH_TOKEN_NAME)) {
    return sessionStorage.getItem(AUTH_TOKEN_NAME);
  } else {
    return localStorage.getItem(AUTH_TOKEN_NAME);
  }
};

export const removeToken = () => {
  if (sessionStorage.getItem(AUTH_TOKEN_NAME)) {
    return sessionStorage.removeItem(AUTH_TOKEN_NAME);
  } else {
    return localStorage.removeItem(AUTH_TOKEN_NAME);
  }
};
