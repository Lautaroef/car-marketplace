import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makersArray } from './schema';
import { saveMakers } from '../../../redux/carsInfo/filtersSlice';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

function Makers() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleCheckboxes = (e: React.SyntheticEvent<Element, Event>) => {
    const element = e.target as HTMLInputElement;
    const makerValue = element.value;

    dispatch(saveMakers(makerValue));
    // dispatch(saveMakers({ ...makers, [e.target.value]: e.target.checked }));
  };

  return (
    <div className='makers'>
      <h3>Make</h3>
      <div className='preAlpha-v'>
        <Autocomplete
          fullWidth
          size='small'
          disablePortal
          options={makersArray}
          onChange={handleCheckboxes}
          renderInput={(params) => (
            <TextField {...params} placeholder='Select a maker' sx={{ pt: '1rem' }} />
          )}
        />
      </div>
      {/* Not allowed */}
      <div className='disabled'>
        <p style={{ color: 'rgba(0,0,0, 0.38)', marginBottom: 2 }}>Comming soon...</p>
        <div className='quick-checkboxes'>
          {makersArray.slice(0, 8).map((maker) => {
            return (
              <FormControlLabel
                key={maker}
                label={maker}
                sx={{ width: 'max-content' }}
                control={
                  <Checkbox
                    value={maker}
                    onChange={handleCheckboxes}
                    className='maker-checkbox'
                    disabled={true}
                  />
                }
              />
            );
          })}
        </div>
        <Button variant='text' onClick={() => setOpenDialog(true)} data-makers-open-modal>
          See more...
        </Button>
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title' className='dialog-title'>
            Make
            <i className='fas fa-times' onClick={() => setOpenDialog(false)} />
          </DialogTitle>

          <Divider />
          <DialogContent>
            <FormControl component='fieldset' variant='standard' sx={{ m: 3 }}>
              <FormGroup>
                {makersArray.map((maker) => {
                  return (
                    <FormControlLabel
                      key={maker}
                      sx={{ width: 'max-content' }}
                      label={maker}
                      control={
                        <Checkbox
                          value={maker}
                          onChange={handleCheckboxes}
                          className='maker-checkbox'
                          disabled={true}
                        />
                      }
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
              onClick={() => dispatch(saveMakers({}))}
              sx={{ cursor: 'not-allowed' }}
            >
              Clear All
            </Button>
            <Button
              data-info='view-results'
              variant='contained'
              disableElevation
              type='submit'
            >
              View Results
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Makers;
