import IconCopy from '@/assets/icons/IconCopy';
import Logo from '@/components/Logo';
import CustomButton from '@/components/custom/CustomButton';
import CustomTooltip from '@/components/custom/CustomTooltip';
import { useStore } from '@/context/store';
import useCopyToClipboard from '@/context/useCopyToClipboard';
import { dcoinFomart, formatWallet } from '@/utils';
import {
  useAccount,
  useBalance,
  useContractRead,
  useDisconnect,
} from '@starknet-react/core';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import erc20ABI from '@/abi/erc20.json';
import { removeItemLocalStorage } from '@/utils/localStorage';

const Header = () => {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [text, copy] = useCopyToClipboard();
  const { connectWallet } = useStore();

  const ethBalance = useBalance({
    address,
    watch: false,
  });
  const dcoin = useBalance({
    address,
    token: process.env.NEXT_PUBLIC_ERC20_CONTRACT_ADDRESS,
    watch: false,
  });

  const handleDisconnect = () => {
    disconnect();
    removeItemLocalStorage('token');
  };

  return (
    <div className='border-b z-[99] border-divider flex justify-between items-center px-[32px] py-[12px] sticky top-0 bg-layer-1'>
      <Logo />
      <div className='max-md:hidden'>
        {dcoin?.data
          ? parseFloat(dcoin?.data?.formatted as string).toFixed(3)
          : 0}{' '}
        <span className='font-[700]'>DCOIN</span> |{' '}
        {ethBalance?.data
          ? parseFloat(ethBalance?.data?.formatted as string)?.toFixed(3) + ' '
          : '0'}{' '}
        <span className='font-[700]'>{ethBalance?.data?.symbol || 'ETH'}</span>
      </div>
      {isConnected ? (
        <div className='flex items-center gap-[1rem] max-md:hidden'>
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
          <CustomButton onClick={handleDisconnect} className='btn-secondary'>
            Disconnect
          </CustomButton>
        </div>
      ) : (
        <CustomButton
          onClick={connectWallet}
          className='btn-primary max-md:hidden'
        >
          Connect Wallet
        </CustomButton>
      )}
    </div>
  );
};

export default Header;
