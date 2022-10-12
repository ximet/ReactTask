import React, { FunctionComponent, useState } from 'react';

// Assets
import { IconChevron } from 'assets/images/svg';

// Styles
import { Flex } from 'styles/global';
import * as S from './Accordion.styles';

interface AccordionProps {
  index: number;
  title: string;
}

const Accordion: FunctionComponent<AccordionProps> = ({ index, title, children }) => {
  const [active, setActive] = useState<boolean>(index === 0 || false);

  const handleToggleAccordion = (): void => setActive(!active);

  return (
    <S.Accordion>
      <Flex directionColumn>
        <S.AccordionTab active={active} onClick={handleToggleAccordion}>
          <Flex justifySpaceBetween>
            <p>&#x2022; {title}</p>
            <IconChevron />
          </Flex>
        </S.AccordionTab>
        <S.AccordionContent active={active}>{children}</S.AccordionContent>
      </Flex>
    </S.Accordion>
  );
};

export default Accordion;
