import React from 'react';

interface CreateLineProps {
  coordsBeg: { x1: string; y1: string };
  coordsEnd: { x2: string; y2: string };
  color: string;
}

const CreateLine: React.FunctionComponent<CreateLineProps> = ({ coordsBeg, coordsEnd, color }) => {
  return (
    <line
      x1={coordsBeg.x1}
      x2={coordsEnd.x2}
      y1={coordsBeg.y1}
      y2={coordsEnd.y2}
      stroke={color}
    ></line>
  );
};

export default CreateLine;
