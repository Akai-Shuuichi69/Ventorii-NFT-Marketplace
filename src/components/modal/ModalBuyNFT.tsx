import React from 'react';
import CustomModal from '../custom/CustomModal';
import CustomImage from '../custom/CustomImage';
import logo from '../../../public/images/logo.png';
import IconVerified from '@/assets/icons/IconVerified';
import CustomButton from '../custom/CustomButton';
import { useAccount } from '@starknet-react/core';
import { formatWallet } from '@/utils';
import useCopyToClipboard from '@/context/useCopyToClipboard';
import CustomTooltip from '../custom/CustomTooltip';
import IconCopy from '@/assets/icons/IconCopy';

const ModalBuyNFT = ({ open, onCancel }: any) => {
  const [text, copy] = useCopyToClipboard();
  const { address } = useAccount();

  return (
    <CustomModal width={435} open={open} onCancel={onCancel}>
      <div className='p-4 md:p-8 '>
        <h4 className='text-xl text-white font-medium mb-4'>Checkout</h4>
        <p className='text-secondary text-base'>You decide to buy</p>

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
              <p className='text-secondary text-base'>Your wallet:</p>
              <div className='bg-layer-2 rounded-lg p-4 flex items-center space-x-2 mt-5'>
                <div className='text-lg flex items-center gap-[1rem]'>
                  {/* <span className="text-secondary">{getCurrency.currency}</span> */}
                  <div className='text-white flex items-center font-medium space-x-2'>
                    {formatWallet(address)}
                  </div>
                  <CustomTooltip
                    title='Copied'
                    placement='right'
                    trigger={['click']}
                  >
                    <IconCopy
                      className='cursor-pointer'
                      onClick={() => copy(address as string)}
                    />
                  </CustomTooltip>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between text-white mt-4'>
            <span>You will pay</span>
            <div className='space-x-1 flex items-center font-medium text-base'>
              100 STRK
            </div>
          </div>
        </div>

        <div className='flex items-center mt-5 gap-[1rem]'>
          <CustomButton onClick={onCancel} className='btn-secondary basis-1/2'>
            Cancel
          </CustomButton>
          <CustomButton className='btn-primary basis-1/2'>Buy Now</CustomButton>
        </div>
      </div>
    </CustomModal>
  );
};

export default ModalBuyNFT;
