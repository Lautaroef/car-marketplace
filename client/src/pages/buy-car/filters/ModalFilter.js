import React from 'react';
// Components
import Makers from './Makers';
import Price from './Price';
import Years from './Years';
import HorsePower from './HorsePower';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

function ModalFilter({ open, setOpen }) {
  return (
    <Dialog
      fullScreen
      open={open}
      className='filters-modal'
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
    >
      <form className='filters-sidebar'>
        <Years />
        <Makers />
        <Price />
        <HorsePower />
      </form>
    </Dialog>
  );
}

export default ModalFilter;
