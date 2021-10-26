import PropTypes from 'prop-types';

function Star({ value }) {
  const starId = ['rating', value].join('-');

  return (
    <>
      <input type="radio" id={starId} name="rating" value={value} />
      <label htmlFor={starId}></label>
    </>
  );
}

Star.propTypes = {
  value: PropTypes.number.isRequired
};

export default Star;
