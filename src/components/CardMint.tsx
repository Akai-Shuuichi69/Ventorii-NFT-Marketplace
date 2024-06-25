import Link from 'next/link';
import React from 'react';
import CustomImage from './custom/CustomImage';
import logo from '../../public/images/logo.png';

const CardMint = () => {
  return (
    <Link href={`/mint/${1}`}>
      <div className='flex flex-col rounded-lg bg-layer-2 max-w-full cursor-pointer group p-2 border border-solid border-stroke'>
        <div className=' overflow-hidden rounded-lg'>
          <CustomImage
            src={logo}
            alt='game'
            className='w-full h-full object-cover aspect-square rounded-lg group-hover:scale-110 !transition !ease-in-out !duration-200'
          />
        </div>
        <div className='flex justify-center items-center mt-2'>
          <div className='flex flex-col w-full'>
            <div className='flex justify-start items-center space-x-1 mb-2'>
              <span className='text-sm text-white font-medium three_dot_1_line'>
                Hello
              </span>
            </div>
            <div className=' bg-layer-3 text-xs font-medium text-secondary rounded-lg text-center py-2 px-3'>
              <div className='flex justify-between mt-1'>
                <div>Price</div>
                <div>100 STRK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMint;
