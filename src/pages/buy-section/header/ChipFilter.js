import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = useState([
    '2017',
    'McLaren',
    'Less than $650.000',
    '700Hp',
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <>
      {chipData.map((filter, i) => {
        return (
          <ListItem key={i}>
            <Chip
              label={filter}
              onDelete={handleDelete(filter)}
              deleteIcon={<i className='fas fa-times-circle' />}
            />
          </ListItem>
        );
      })}
    </>
  );
}
