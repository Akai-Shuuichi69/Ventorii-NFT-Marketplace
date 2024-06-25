import React from 'react';

import CardMarketplace from '@/components/CardMarketplace';
import CardMint from '@/components/CardMint';

const HomeContainer = () => {
  return (
    <div className='layout-container my-[3rem]'>
      <h1 className='text-[32px] font-[700]  mb-[2rem]'>Mint Now</h1>
      <div className='grid grid-cols-4 gap-[1rem]'>
        {[...Array(2)].map((_, index) => (
          <div key={index}>
            <CardMint />
          </div>
        ))}
      </div>

      <h1 className='text-[32px] font-[700] mb-[2rem] mt-[5rem]'>
        Marketplace
      </h1>
      <div className='grid grid-cols-5 gap-[1rem]'>
        {[...Array(10)].map((_, index) => (
          <div key={index}>
            <CardMarketplace />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
