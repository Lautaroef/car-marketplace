import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import useWindowSize from 'hooks/useWindowSize';
import { openCloseModal } from 'redux/login/LoginSlice';
import logoSrc from 'images/logos/rumrum.png';
import HamburgerMenu from './HamburgerMenu';
import FirebaseModal from '../firebase/Main';
import UsernameAndPhoto from '../firebase/UsernameAndPhoto';
import LoginAndRegisterButtons from './LoginAndRegisterButtons';

function Navbar() {
  const isModalOpen = useAppSelector((state) => state.loginValues.isModalOpen);
  const { username, userIcon } = useAppSelector(
    (state) => state.loginValues.userCredentials
  );
  const windowXSize = useWindowSize();
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openCloseModal(true));
  };

  const menuItems: HamburgerMenuItem[] = [
    { title: 'Buy a car', to: '/buy-a-car' },
    { title: 'Sell a car', to: '/sell-a-car' },
    { title: 'FAQ', to: '/faqs' },
    { title: 'Our Team', to: '/our-team' },
    { title: 'Contact', to: '/contact' },
  ];

  return (
    <div className='infinite-navbar'>
      {isModalOpen ? <FirebaseModal /> : null}
      <nav>
        {/* Hamburger Menu */}
        <HamburgerMenu menuItems={menuItems} logo={logoSrc} />
        <Link href='/'>
          <Image src={logoSrc} alt='RumRumCars' width={135} />
        </Link>
        <ul>
          {menuItems.map((item) => {
            return (
              <li key={item.title}>
                <Link href={item.to}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        {username ? (
          <UsernameAndPhoto
            username={username}
            userIcon={userIcon}
            handleOpenModal={handleOpenModal}
          />
        ) : (
          <>
            {/* Show only userLogo if window X with is smaller than 576 px */}
            {windowXSize && windowXSize < 576 ? (
              <i onClick={handleOpenModal} className='login-icon fas fa-user-circle' />
            ) : (
              <LoginAndRegisterButtons handleOpenModal={handleOpenModal} />
            )}
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
