import React from 'react';

interface CreateLineProps {
  coordsBeg: { x1: string; y1: string };
  coordsEnd: { x2: string; y2: string };
  color?: string;
}
class CreateLine extends React.Component<CreateLineProps> {
  render() {
    const { coordsBeg, coordsEnd, color = '#245f763b' } = this.props;
    return <line {...coordsBeg} {...coordsEnd} stroke={color}></line>;
  }
}

export default CreateLine;
