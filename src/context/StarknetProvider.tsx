'use client';

import { useMemo } from 'react';
import { ArgentMobileConnector } from 'starknetkit/argentMobile';
import { WebWalletConnector } from 'starknetkit/webwallet';
import {
  StarknetConfig,
  publicProvider,
  braavos,
  argent,
} from '@starknet-react/core';
import { mainnet } from '@starknet-react/chains';

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const chains = [mainnet];

  const provider = publicProvider();

  const connectors = useMemo(() => {
    return [
      braavos(),
      argent(),
      new WebWalletConnector({ url: 'https://web.argent.xyz' }),
      new ArgentMobileConnector(),
    ];
  }, []);

  return (
    <StarknetConfig
      chains={chains}
      provider={provider}
      connectors={connectors}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
