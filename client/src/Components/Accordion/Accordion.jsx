import React, { useState } from 'react';
import * as Style from './Accordion.styles';
import { questionData } from './accordionData';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = clickValue => {
    setClicked(clickValue);
  }

  return (
    <Style.AccordionSection>
      <Style.Container>
        {questionData.map((item, clickValue) => {
          return (
            <>
              <Style.Wrap onClick={() => toggle(clickValue)} key={clickValue}>
                <h1>{item.question}</h1>
                <span>{clicked === clickValue ? '-' : '+'}</span>
              </Style.Wrap>
              {clicked === clickValue ? (
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
