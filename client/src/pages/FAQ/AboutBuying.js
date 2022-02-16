import React, { useState } from 'react';
// Components
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { buyingFaqs } from '../../components/other-components/random-data/faqs';

function BuyingFaqs() {
  const [expanded, setExpanded] = useState('buy-panel1');

  const handleChange = (panel) => (e, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {buyingFaqs.map((question) => {
        const { id, title, answer, listArray = [], summary } = question;
        return (
          <Accordion
            key={id}
            expanded={expanded === `buy-panel${id}`}
            onChange={handleChange(`buy-panel${id}`)}
          >
            <AccordionSummary
              aria-controls={`buy-panel${id}d-content`}
              expandIcon={<i className='fas fa-chevron-down' />}
              id={`buy-panel${id}d-header`}
            >
              <h4>
                {id}. {title}
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              {answer}
              <br />
              <ol>
                {listArray.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
                {summary}
              </ol>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}

export default BuyingFaqs;
