import React, { createContext, ReactNode, useContext, useState } from "react";
import { LoginRequest, UserInfo } from "../API/types/UserTypes.tsx";
import UsersApi from "../API";

interface AuthContextType {
  user: UserInfo | null;
  isLogged: () => boolean;
  setUser: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  login: (props: LoginRequest) => Promise<boolean>;
}
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  const isLogged = (): boolean => user != null;

  const login = async ({
    username,
    password,
  }: LoginRequest): Promise<boolean> => {
    try {
      const result = await UsersApi.login({ username, password });
      setUser(result as UserInfo);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLogged, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
