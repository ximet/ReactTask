import React, { useState } from 'react';
import { AccordionItem, Spinner } from '../index';
import * as S from './Accordion.styles';

const Accordion = ({ data }) => {
  const [clicked, setClicked] = useState(null);

  const toggle = id => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  return (
    <S.Container>
      {data.length ? (
        data.map(item => (
          <AccordionItem data={item} toggle={toggle} clicked={clicked} key={item.id} />
        ))
      ) : (
        <Spinner />
      )}
    </S.Container>
  );
};

export default Accordion;
