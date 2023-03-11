import React, { createContext, useState, ReactNode, Dispatch } from "react";
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
  setAuth: (auth: IAuth) => {}
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<IAuth>({} as IAuth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
