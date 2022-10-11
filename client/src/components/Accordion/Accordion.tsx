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
  const [active, setActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(index === 0);

  const handleToggleAccordion = (): void => {
    if (isExpanded) {
      setIsExpanded(false);
      setActive(false);
    } else {
      setActive(!active);
    }
  };

  return (
    <S.Accordion>
      <Flex directionColumn>
        <S.AccordionTab active={active} isExpanded={isExpanded} onClick={handleToggleAccordion}>
          <Flex justifySpaceBetween>
            <p>&#x2022; {title}</p>
            <IconChevron />
          </Flex>
        </S.AccordionTab>
        <S.AccordionContent active={active} isExpanded={isExpanded}>
          {children}
        </S.AccordionContent>
      </Flex>
    </S.Accordion>
  );
};

export default Accordion;
