import React from 'react';

interface TitleProps {
  title: string;
}

const Title: React.FunctionComponent<TitleProps> = ({ title }) => {
  return <h2>{title}</h2>;
};

export default Title;
