import React, { useEffect, useState } from 'react';
import history from 'history/browser';
import Chip from '@mui/material/Chip';

function ChipsArray() {
  // Working on this...
  // Works only when i refresh this file
  const [filterKeys, setFilterKeys] = useState<string[]>([]);
  const urlParams = new URLSearchParams(history.location.search);
  urlParams.delete('page');
  urlParams.delete('sort');

  const noRepeatedKeys = new Set(filterKeys);

  useEffect(() => {
    urlParams.forEach((value, key) => {
      // Separate string on Uppercase characters
      const parsedKey = key
        .match(/([A-Z]?[^A-Z]*)/g)!
        .slice(0, -1)
        .join(' ');

      if (value) {
        setFilterKeys((keys) => [...keys, `${parsedKey}: ${value}`]);
      }
    });
  }, []);
  // console.log(filterKeys);

  const handleDelete = (chipToDelete: string) => () => {
    setFilterKeys((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  // console.log([...noRepeatedKeys]);

  return (
    <>
      {noRepeatedKeys.forEach((value, i) => {
        return (
          <li key={i}>
            <Chip
              label={value}
              onDelete={handleDelete(value)}
              sx={{
                m: '0.15rem 0.165rem',
                textTransform: 'capitalize',
              }}
              deleteIcon={<i className='fas fa-times-circle' />}
            />
          </li>
        );
      })}
    </>
  );
}

export default ChipsArray;
