import Logo from '@/components/Logo';
import CustomButton from '@/components/custom/CustomButton';
import React from 'react';

const Header = () => {
  return (
    <div className='border-b border-divider flex justify-between items-center px-[32px] py-[12px] sticky top-0 bg-layer-1'>
      <Logo />
      <CustomButton className='btn-primary'>Connect Wallet</CustomButton>
    </div>
  );
};

export default Header;
