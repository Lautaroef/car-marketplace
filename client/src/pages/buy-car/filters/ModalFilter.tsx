import React from 'react';
import Makers from './Makers';
import Price from './Price';
import Years from './Years';
import HorsePower from './HorsePower';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ModalFilter({ open, setOpen }: Props) {
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
