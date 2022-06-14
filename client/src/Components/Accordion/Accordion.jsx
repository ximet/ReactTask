import React, { useState } from 'react';
import * as Style from './Accordion.styles';
import { Data } from './accordionData';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Style.AccordionSection>
      <Style.Container>
        {Data.map((item, index) => {
          return (
            <>
              <Style.Wrap onClick={() => toggle(index)} key={index}>
                <h1>{item.question}</h1>
                <span>{clicked === index ? '+' : '-'}</span>
              </Style.Wrap>
              {clicked === index ? (
                <Style.Dropdown>
                  <p>{item.answer}</p>
                </Style.Dropdown>
              ) : null}
            </>
          );
        })}
      </Style.Container>
    </Style.AccordionSection>
  );
};

export default Accordion;
