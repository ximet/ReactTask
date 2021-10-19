import PropTypes, { string, number } from 'prop-types';

export const sliderSlidesTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: string.isRequired,
    component: PropTypes.node
  })
);
