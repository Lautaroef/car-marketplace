import React, { useState } from 'react';
// Components
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { sellingFaqs } from '../../components/other-components/random-data/faqs';

function SellingFaqs() {
  const [expanded, setExpanded] = useState('sell-panel1');

  const handleChange = (panel) => (e, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {sellingFaqs.map((question) => {
        const { id, title, answer, listArray = [], summary } = question;
        return (
          <Accordion
            key={id}
            expanded={expanded === `sell-panel${id}`}
            onChange={handleChange(`sell-panel${id}`)}
          >
            <AccordionSummary
              aria-controls={`sell-panel${id}d-content`}
              expandIcon={<i className='fas fa-chevron-down' />}
              id={`sell-panel${id}d-header`}
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

export default SellingFaqs;
