import React from 'react';
import CustomImage from './custom/CustomImage';
import CustomButton from './custom/CustomButton';
import logo from '../../public/images/logo.png';

const CardMarketplace = () => {
  return (
    <div className='bg-layer-2 cursor-pointer border border-solid rounded-lg p-2 border-stroke group'>
      <div className='flex flex-col space-y-2'>
        <div className='relative'>
          <div className='aspect-square w-full overflow-hidden relative rounded-lg'>
            <CustomImage
              src={logo}
              alt='Nft'
              className='object-cover w-full h-full group-hover:scale-110 !transition !duration-300 !ease-in-out group-hover:blur-sm'
            />
          </div>
          <div className='items-center space-x-2 w-[90%] hidden group-hover:flex absolute bottom-3 right-1/2 translate-x-1/2 z-5'>
            <CustomButton className='btn-primary flex-1'>Buy</CustomButton>
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <span className='text-white text-base font-medium leading-6 truncate'>
            Hello
          </span>
          <div className='flex justify-between leading-[18px]'>
            <span className='text-secondary text-xs font-medium'>Price</span>
            <div className='flex items-center space-x-1'>
              <span className='text-white text-xs font-medium'>100 STRK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMarketplace;
