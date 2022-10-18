import React, { FunctionComponent, useEffect, useRef } from 'react';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from './Footer.styles';

const Footer: FunctionComponent = () => {
  const copyrightRef = useRef<HTMLSpanElement>(null);

  // Get current year for copyright
  useEffect(() => {
    copyrightRef.current?.appendChild(document.createTextNode(new Date().getFullYear().toString()));
  }, []);

  return (
    <S.Footer>
      <Container>
        <Flex justifyFlexEnd>
          <p>
            &copy; <span ref={copyrightRef} /> All rights reserved.
          </p>
        </Flex>
      </Container>
    </S.Footer>
  );
};

export default Footer;
