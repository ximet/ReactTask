import PropTypes from 'prop-types';

export const locationType = PropTypes.shape({
  name: PropTypes.string.isRequired
});

export const weatherType = PropTypes.shape({
  temperature: PropTypes.number.isRequired,
  symbolPhrase: PropTypes.string.isRequired
});
