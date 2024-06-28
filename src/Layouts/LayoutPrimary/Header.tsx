import IconCopy from '@/assets/icons/IconCopy';
import Logo from '@/components/Logo';
import CustomButton from '@/components/custom/CustomButton';
import CustomTooltip from '@/components/custom/CustomTooltip';
import { useStore } from '@/context/store';
import useCopyToClipboard from '@/context/useCopyToClipboard';
import { formatWallet } from '@/utils';
import { useAccount, useDisconnect } from '@starknet-react/core';
import { useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [text, copy] = useCopyToClipboard();
  const { connectWallet } = useStore();

  return (
    <div className='border-b border-divider flex justify-between items-center px-[32px] py-[12px] sticky top-0 bg-layer-1'>
      <Logo />
      {isConnected ? (
        <div className='flex items-center gap-[1rem]'>
          <p
            onClick={() => {
              router.push(`/profile/${address}`);
            }}
            className='cursor-pointer'
          >
            {formatWallet(address)}
          </p>
          <CustomTooltip title='Copied' placement='right' trigger={['click']}>
            <IconCopy
              className='cursor-pointer'
              onClick={() => copy(address as string)}
            />
          </CustomTooltip>
          <CustomButton onClick={disconnect as any} className='btn-secondary'>
            Disconnect
          </CustomButton>
        </div>
      ) : (
        <CustomButton onClick={connectWallet} className='btn-primary'>
          Connect Wallet
        </CustomButton>
      )}
    </div>
  );
};

export default Header;
