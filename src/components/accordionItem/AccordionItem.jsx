import React from 'react';
import { Dropdown } from '../index';
import * as S from './AccordionItem.styles';

const AccordionItem = ({ data, toggle, clicked }) => {
  return (
    <React.Fragment>
      <S.Wrap onClick={() => toggle(data.id)}>
        <S.Element>{data.id}</S.Element>
        <h2>{data.title}</h2>
        <S.BorderLine active={clicked === data.id} />
      </S.Wrap>
      {clicked === data.id && <Dropdown data={data.about} />}
    </React.Fragment>
  );
};

export default AccordionItem;
