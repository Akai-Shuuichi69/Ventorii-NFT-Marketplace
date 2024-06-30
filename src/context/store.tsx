'use client';

import { login } from '@/fetching/client/auth';
import { setItemLocalStorage } from '@/utils/localStorage';
import { toastError, toastSuccess } from '@/utils/toast';
import { useAccount, useConnect } from '@starknet-react/core';
import { createContext, useContext, useEffect, useState } from 'react';
import { useStarknetkitConnectModal } from 'starknetkit';

const storeContext = createContext<any>(null);

export const useStore = () => useContext(storeContext);

const StoreProvider = ({ children }: any) => {
  const [userLoginData, setUserLoginData] = useState<any>(true);

  const { connect, connectors } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as any,
  });
  const { address } = useAccount();

  const connectWallet = async () => {
    const { connector }: any = await starknetkitConnectModal();
    connect({ connector });
  };

  useEffect(() => {
    if (!address) return;

    const handleLogin = async () => {
      try {
        const loginResponse = await login({
          address,
        });
        const token = loginResponse?.data?.data?.token;
        setItemLocalStorage('token', token);
      } catch (error) {
        toastError('Login failed');
        console.log(error);
      }
    };

    handleLogin();
  }, [address]);

  return (
    <storeContext.Provider
      value={{
        userLoginData,
        setUserLoginData,
        connectWallet,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};
export default StoreProvider;
