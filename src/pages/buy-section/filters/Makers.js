import React, { useState } from 'react';
import { makers } from './schema';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
// Other
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Makers() {
  const [selectedMakers, setSelectedMakers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCheckboxes = (e) => {
    // if (e.target.checked === false) {
    //   selectedMakers.filter((maker) => console.log(maker));
    // }

    setSelectedMakers([...selectedMakers, e.target.name]);
  };
  console.log(selectedMakers);

  return (
    <div className='makers'>
      <h3>Make</h3>
      <div className='quick-checkboxes'>
        {makers.slice(0, 8).map((maker) => {
          return (
            <FormControlLabel
              key={maker}
              label={maker}
              sx={{ width: 'max-content' }}
              control={<Checkbox name={maker} />}
              onChange={handleCheckboxes}
            />
          );
        })}
      </div>
      <Button variant='text' onClick={() => setOpenDialog(true)}>
        See more...
      </Button>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Make</DialogTitle>
        <Divider />
        <DialogContent>
          <FormControl component='fieldset' variant='standard' sx={{ m: 3 }}>
            <FormGroup>
              {makers.map((maker) => {
                return (
                  <FormControlLabel
                    key={maker}
                    sx={{ width: 'max-content' }}
                    label={maker}
                    control={<Checkbox name={maker} />}
                    onChange={handleCheckboxes}
                  />
                );
              })}
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            variant='outlined'
            disableElevation
            color='error'
            onClick={() => setSelectedMakers([])}
          >
            Clear All
          </Button>
          <Button
            variant='contained'
            disableElevation
            onClick={() => setOpenDialog(false)}
          >
            View Results
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Makers;
