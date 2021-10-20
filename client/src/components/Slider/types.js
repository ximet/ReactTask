import PropTypes from 'prop-types';

export const slidesType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    component: PropTypes.node
  })
);
