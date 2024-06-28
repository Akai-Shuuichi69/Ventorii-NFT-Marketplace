'use client';

import CustomImage from '@/components/custom/CustomImage';
import { useAccount } from '@starknet-react/core';
import React, { useState } from 'react';
import logo from '../../../../public/images/logo.png';
import CustomButton from '@/components/custom/CustomButton';
import { useStore } from '@/context/store';

const Mint = () => {
  const { isConnected } = useAccount();
  const { connectWallet } = useStore();
  const onMint = () => {
    if (!isConnected) {
      connectWallet();
      return;
    }
  };
  return (
    <div className='layout-container py-[5rem] max-w-[1000px] my-[3rem]'>
      <div className='flex items-start  gap-[2rem]'>
        <div className='basis-1/2 border-[2px] border-white rounded-lg'>
          <CustomImage src={logo} alt='logo' className='w-full' />
        </div>
        <div className='basis-1/2 flex flex-col gap-[1rem]'>
          <h1 className='text-[24px] font-[700]'>Hello Collection</h1>
          <div className='flex items-center justify-between'>
            <p>Minted Item</p>
            <p>0/1000</p>
          </div>
          <div className='flex items-center justify-between'>
            <p>Price</p>
            <p>100 STRK</p>
          </div>
          <CustomButton onClick={onMint} className='btn-primary mt-[5rem]'>
            Mint
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Mint;
