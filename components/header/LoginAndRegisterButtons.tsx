import React from 'react';
import Divider from '@mui/material/Divider';

function LoginAndRegisterButtons({ handleOpenModal }: { handleOpenModal: () => void }) {
  return (
    <ul>
      <li>
        <a onClick={handleOpenModal} data-testid='login/register'>
          Register
        </a>
      </li>
      <Divider orientation='vertical' variant='middle' flexItem />
      <li>
        <a onClick={handleOpenModal} data-testid='login/register'>
          Login
        </a>
      </li>
    </ul>
  );
}

export default LoginAndRegisterButtons;
