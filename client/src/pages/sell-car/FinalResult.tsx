import React, { useState } from 'react';
import { numberWithSeparator } from '../../functions';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

type Props = {
  carFormInfo: {
    [x: string]: any;
  };
  previewSource: string;
};

type TypePanels = 'panel1' | 'panel2';

function FinalResult({ carFormInfo, previewSource }: Props) {
  const [expandenEl, setExpandedEl] = useState<string | false>(false);
  const {
    make = 'Ford',
    model = 'Raptor',
    horsepower = '450',
    year = '2021',
    price = '70000',
  } = carFormInfo;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedEl(isExpanded ? panel : false);
    };

  // To generate random number in retail price range
  const multiply = (multiplyNum: number) => {
    numberWithSeparator(parseInt((price * multiplyNum).toFixed(0)), '.');
  };

  return (
    <div className='final-result'>
      <div>
        <h2>
          {year} {make} {model}
        </h2>
        <p>Estimated KBB Private Party Value</p>
        <h1>${numberWithSeparator(price, '.')}</h1>
        {previewSource && <img src={previewSource} alt={`${make}, ${model}`} />}
        <div className='grid-estimated-values'>
          <small>Trade-In Value</small>
          <small>Retail Value</small>
          <b>$ {multiply(0.96)}</b>
          <b>$ {multiply(1.08)}</b>
        </div>
      </div>
      <Accordion
        expanded={expandenEl === 'panel1'}
        onChange={() => handleChange('panel1')}
      >
        <AccordionSummary
          aria-controls='panel1d-content'
          id='panel1d-header'
          expandIcon={
            <i className='fas fa-chevron-down' style={{ fontSize: '0.9rem' }} />
          }
        >
          <Typography>Car Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Horsepowers: {horsepower}</b>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandenEl === 'panel2'}
        onChange={() => handleChange('panel2')}
      >
        <AccordionSummary
          aria-controls='panel2d-content'
          expandIcon={
            <i className='fas fa-chevron-down' style={{ fontSize: '0.9rem' }} />
          }
          id='panel2d-header'
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, dui vel
            sagittis lacinia, velit nibh porttitor elit, eu facilisis eros nulla a nibh.
            Integer vulputate mauris in enim vulputate sodales. Suspendisse egestas turpis
            quam, ac tempus ipsum .
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FinalResult;
