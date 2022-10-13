import React, { FunctionComponent, useState, KeyboardEvent } from 'react';

// Assets
import { IconChevron } from 'assets/images/svg';

// Utils
import { checkIfEnterOrSpacePressed } from 'utils/helpers';

// Styles
import { Flex } from 'styles/global';
import * as S from './Accordion.styles';

interface AccordionProps {
  id: string;
  index: number;
  title: string;
}

const Accordion: FunctionComponent<AccordionProps> = ({ id, index, title, children }) => {
  const [active, setActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(index === 0);

  const handleToggleOnClick = (): void => {
    if (isExpanded) {
      setIsExpanded(false);
      setActive(false);
    } else {
      setActive(!active);
    }
  };

  const handleToggleOnKeyPress = (e: KeyboardEvent<HTMLDivElement>): void => {
    e.preventDefault();

    if (checkIfEnterOrSpacePressed(e)) {
      if (isExpanded) {
        setIsExpanded(false);
        setActive(false);
      } else {
        setActive(!active);
      }
    }
  };

  return (
    <S.Accordion>
      <Flex directionColumn>
        <S.AccordionTab
          active={active}
          isExpanded={isExpanded}
          onClick={handleToggleOnClick}
          onKeyPress={handleToggleOnKeyPress}
        >
          <Flex justifySpaceBetween>
            <button type="button" aria-expanded={active} aria-controls={id}>
              &#x2022; {title}
            </button>
            <IconChevron />
          </Flex>
        </S.AccordionTab>
        <S.AccordionContent id={id} active={active} isExpanded={isExpanded}>
          {children}
        </S.AccordionContent>
      </Flex>
    </S.Accordion>
  );
};

export default Accordion;
