import React from 'react';
import * as Style from './Spinner.styles';

const Spinner = () => {
  return (
    <Style.SpinnerWrapper>
      <Style.StyledSpinner viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="3" />
      </Style.StyledSpinner>
    </Style.SpinnerWrapper>
  );
};

export default Spinner;
