'use client';

import { useConnect } from '@starknet-react/core';
import { createContext, useContext, useState } from 'react';
import { useStarknetkitConnectModal } from 'starknetkit';

const storeContext = createContext<any>(null);

export const useStore = () => useContext(storeContext);

const StoreProvider = ({ children }: any) => {
  const [userLoginData, setUserLoginData] = useState<any>(true);

  const { connect, connectors } = useConnect();

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as any,
  });

  const connectWallet = async () => {
    const { connector } = await starknetkitConnectModal();
    connect({ connector });
  };

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
