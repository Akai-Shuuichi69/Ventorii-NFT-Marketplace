'use client';

import CardMarketplace from '@/components/CardMarketplace';
import CardProfile from '@/components/CardProfile';
import ModalListNFT from '@/components/modal/ModalListNFT';
import { formatWallet } from '@/utils';
import { useAccount } from '@starknet-react/core';
import React, { useState } from 'react';

const Profile = () => {
  const [openModalListNFT, setModalListNFT] = useState(false);
  const { address } = useAccount();
  return (
    <div className='layout-container my-[3rem]'>
      <ModalListNFT
        open={openModalListNFT}
        onCancel={() => {
          setModalListNFT(false);
        }}
      />
      <h1 className='text-[32px] font-[700] mb-[2rem] mt-[5rem]'>Profile</h1>
      <div className='flex items-center gap-[1rem] mb-[3rem]'>
        <p className='text-[24px]'>User: {formatWallet(address)}</p>
      </div>
      <div className='grid grid-cols-5 gap-[1rem]'>
        {[...Array(10)].map((_, index) => (
          <div key={index}>
            <CardProfile setModalListNFT={setModalListNFT} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
