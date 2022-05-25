import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      about: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          description: PropTypes.string
        })
      )
    })
  )
};

export default Accordion;
