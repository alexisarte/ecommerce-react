import LogoSneakes from '@/assets/images/logo.svg';
import AvatarImage from '@/assets/images/image-avatar.png';
import MenuIcon from '@/components/icons/MenuIcon';
import CartIcon from '@/components/icons/CartIcon';

const Header = () => {
  return (
    <header className="container flex items-center bg-gray-200 mx-auto px-4 py-4 gap-8">
      <button className="md:hidden">
        <MenuIcon />
      </button>
      <img src={LogoSneakes} alt="Logo sneakers" className="mr-auto md:mr-0 h-5 mb-1" />
      <nav className="hidden md:mr-auto md:flex md:gap-4">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon />
        </button>
        <img src={AvatarImage} alt="" className="w-10" />
      </div>
    </header>
  );
};

export default Header;
