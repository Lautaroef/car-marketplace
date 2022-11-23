import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { buyingFaqs } from '../../components/other-components/random-data/faqs';

function BuyingFaqs() {
  const [expandedEl, setExpandedEl] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedEl(isExpanded ? panel : false);
    };

  return (
    <>
      {buyingFaqs.map((question) => {
        const { id, title, answer, listElements, summary } = question;
        return (
          <Accordion
            key={id}
            expanded={expandedEl === `buy-panel-${id}`}
            onChange={handleChange(`buy-panel-${id}`)}
          >
            <AccordionSummary
              aria-controls={`buy-panel-${id}d-content`}
              expandIcon={<i className='fas fa-chevron-down' />}
              id={`buy-panel-${id}d-header`}
            >
              <h4>
                {id}. {title}
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              {answer}
              <br />
              <ol>
                {listElements &&
                  listElements.map((item, i) => {
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
