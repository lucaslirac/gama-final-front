import React, { createContext, useState, ReactNode, Dispatch, useEffect } from "react";
import { getAuthLocalStorage } from "../../service/localStorage";
import { IAuth } from '../../types';

type AuthContext = {
  auth: IAuth;
  setAuth: Dispatch<React.SetStateAction<IAuth>>;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({
  auth: {} as IAuth,
  setAuth: (auth: IAuth) => { }
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<IAuth>({} as IAuth);

  useEffect(() => {
    const authLocalStorege = getAuthLocalStorage();
    if (authLocalStorege && auth !== authLocalStorege) setAuth(authLocalStorege)
    setAuth(auth);
  }, [])


  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
