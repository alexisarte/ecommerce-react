import { useContext, useState } from 'react';
import { useCartDetails } from '@/components/context/UseCartDetails';

import LogoSneakes from '@/assets/images/logo.svg';
import AvatarImage from '@/assets/images/image-avatar.png';

import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import NavLinkHeader from '@/components/header/NavLinkHeader';

import CardDetailsHeader from './CardDetailsHeader';

const MainHeader = () => {
  const { cartProduct, totalQuantityProduct } = useContext(useCartDetails);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDetailsCart, setIsOpenDetailsCart] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="container relative mx-auto flex items-center gap-8 p-4 md:p-0">
        <button className="md:hidden" onClick={toggleMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakes}
          alt="Logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />

        <nav
          className={`font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 ${
            isOpen
              ? 'absolute top-0 left-0 z-10 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8'
              : 'hidden'
          } `}
        >
          <button className="mb-12 md:hidden" onClick={toggleMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Mens" />
          <NavLinkHeader text="Womens" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button
            onClick={() => setIsOpenDetailsCart(!isOpenDetailsCart)}
            className="relative"
          >
            <CartIcon />
            <span className="absolute top-0 right-0 translate-x-1 rounded-full bg-orange-primary px-1 text-xs font-bold text-white">
              {totalQuantityProduct}
            </span>
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
          {isOpenDetailsCart && <CardDetailsHeader />}
        </div>
      </header>
      <span className="container mx-auto h-[3px] w-full bg-gray-500 md:block"></span>
    </>
  );
};

export default MainHeader;
