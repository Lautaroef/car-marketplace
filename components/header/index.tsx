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
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Navbar() {
  const isModalOpen = useAppSelector((state) => state.loginValues.isModalOpen);
  const { username: serverUsername, userIcon } = useAppSelector(
    (state) => state.loginValues.userCredentials
  );
  const router = useRouter();
  const windowXSize = useWindowSize();
  const dispatch = useAppDispatch();

  // Fixed the hydration error by saving the username in state
  const [username, setUsername] = useState<string | null>(null);
  useEffect(() => {
    setUsername(serverUsername);
    if (username) {
      router.refresh();
    }
  }, []);
  //

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
