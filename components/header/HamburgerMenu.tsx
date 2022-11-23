import type { StaticImageData } from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

type Props = {
  menuItems: HamburgerMenuItem[];
  logo: StaticImageData;
};

function HamburgerMenu({ menuItems, logo }: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className='hamburger-menu'>
      <i className='fas fa-bars' onClick={() => setOpenMenu(true)} />
      <SwipeableDrawer
        anchor='left'
        open={openMenu}
        onOpen={() => setOpenMenu(true)}
        onClose={() => setOpenMenu(false)}
      >
        <div style={{ width: '250px' }}>
          <Box textAlign={'center'} p={2} paddingLeft={1}>
            <Link href='/'>
              <Image src={logo} alt='RumRumCars' width={135} />
            </Link>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => {
              return (
                <ListItem
                  component={Link}
                  href={item.to}
                  key={item.title}
                  onClick={() => setOpenMenu(false)}
                >
                  <ListItemText>{item.title}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default HamburgerMenu;
