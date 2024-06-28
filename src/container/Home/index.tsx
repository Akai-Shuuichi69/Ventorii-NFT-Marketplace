import React, { useState } from 'react';

import CardMarketplace from '@/components/CardMarketplace';
import CardMint from '@/components/CardMint';
import ModalBuyNFT from '@/components/modal/ModalBuyNFT';

const HomeContainer = () => {
  const [openModalBuyNTF, setOpenModalBuyNTF] = useState(false);
  return (
    <div className='layout-container my-[3rem]'>
      <ModalBuyNFT
        open={openModalBuyNTF}
        onCancel={() => {
          setOpenModalBuyNTF(false);
        }}
      />
      <h1 className='text-[32px] font-[700]  mb-[2rem]'>Mint Now</h1>
      <div className='grid grid-cols-4 gap-[1rem]'>
        {[...Array(1)].map((_, index) => (
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
            <CardMarketplace setOpenModalBuyNTF={setOpenModalBuyNTF} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
