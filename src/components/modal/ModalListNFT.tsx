import React, { useState } from 'react';
import CustomModal from '../custom/CustomModal';
import CustomImage from '../custom/CustomImage';
import logo from '../../../public/images/logo.png';
import IconVerified from '@/assets/icons/IconVerified';
import CustomButton from '../custom/CustomButton';
import CustomInput from '../custom/CustomInput';

const ModalListNFT = ({ open, onCancel }: any) => {
  const [price, setPrice] = useState('');

  return (
    <CustomModal width={435} open={open} onCancel={onCancel}>
      <div className='p-4 md:p-8 '>
        <h4 className='text-xl text-white font-medium mb-4'>List Items</h4>

        <div className='overflow-y-auto scrollbar-custom max-h-[80vh]'>
          <div className='text-white flex justify-between items-center space-x-2 py-8 border-b border-solid border-stroke'>
            <CustomImage
              src={logo}
              alt='nft'
              width={50}
              height={50}
              className='rounded-lg'
            />
            <div className='flex-1 flex flex-col justify-between truncate'>
              <span className='text-lg font-medium truncate'>Title</span>
              <div className='flex items-center space-x-2'>
                <IconVerified />
                <span className='text-secondary text-sm font-medium truncate'>
                  Hello
                </span>
              </div>
            </div>
            <div className='space-x-1 flex items-center'>
              <span className='text-sm '>100 STRK</span>
            </div>
          </div>
          <div className='border-b border-solid border-stroke pb-5'>
            <div className='mt-5'>
              <p className='text-secondary text-base mb-[1rem]'>Price:</p>
              <CustomInput
                placeholder='Price'
                pattern='[0-9\.]*$'
                value={price}
                onChange={(e: any) => {
                  if (!e.target.value) setPrice('');
                  if (e.target.value && e.target.validity.valid)
                    setPrice(e.target.value);
                }}
              />
            </div>
          </div>
          <div className='flex items-center justify-between text-white mt-4'>
            <span>Fee</span>
            <div className='space-x-1 flex items-center font-medium text-base'>
              0 STRK
            </div>
          </div>
        </div>

        <div className='flex items-center mt-5 gap-[1rem]'>
          <CustomButton onClick={onCancel} className='btn-secondary basis-1/2'>
            Cancel
          </CustomButton>
          <CustomButton className='btn-primary basis-1/2'>
            List Now
          </CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default ModalListNFT;
