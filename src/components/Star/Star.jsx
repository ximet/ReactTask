function Star({ value }) {
  const starId = ['rating', value].join('-');

  return (
    <>
      <input type="radio" id={starId} name="rating" value={value} />
      <label htmlFor={starId}></label>
    </>
  );
}

export default Star;
