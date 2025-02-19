import { LoginResponse } from '@/types/auth';
import { storage } from '@/utils/mmkv';
import React, { createContext, useEffect, useState } from 'react';

const saveAuthData = (data: LoginResponse) => {
  storage.set('auth', JSON.stringify(data));
};

const getAuthData = (): LoginResponse | null => {
  const jsonData = storage.getString('auth');
  return jsonData ? JSON.parse(jsonData) : null;
};

const clearAuthData = () => {
  storage.delete('auth');
};

type AuthContextType = {
  auth: LoginResponse | null;
  login: (data: LoginResponse) => void;
  logout: () => void;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<LoginResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAuth = getAuthData();
    if (storedAuth) setAuth(storedAuth);
    setLoading(false);
  }, []);

  const login = (data: LoginResponse) => {
    setAuth(data);
    saveAuthData(data);
  };

  const logout = () => {
    setAuth(null);
    clearAuthData();
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
