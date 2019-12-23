import React from 'react';

const FormattedDate = (props) => (
    <div>{ `${props.date.getDate()}.${props.date.getMonth()}.${props.date.getFullYear()}` }</div>
);
 
export default FormattedDate;