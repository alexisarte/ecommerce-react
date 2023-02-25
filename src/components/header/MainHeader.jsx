import LogoSneakes from '@/assets/images/logo.svg';
import AvatarImage from '@/assets/images/image-avatar.png';
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import { useState } from 'react';
import NavLinkHeader from '@/components/header/NavLinkHeader';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(
    'hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0'
  );

  const handleOpenMenu = () => {
    setIsOpen(
      'absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0'
    );
  };

  const handleCloseMenu = () => {
    setIsOpen(
      'hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0'
    );
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-8 p-4 md:p-0">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakes}
          alt="Logo sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />

        <nav className={isOpen}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Collections" />
          <NavLinkHeader text="Mens" />
          <NavLinkHeader text="Womens" />
          <NavLinkHeader text="About" />
          <NavLinkHeader text="Contact" />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto h-[1px] w-full bg-gray-500 md:block"></span>
    </>
  );
};

export default MainHeader;
