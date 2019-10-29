import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';


function NavBarElement (props) {
    return (
    <div className = {styles.nav_element}>
        {props.title}
        <img src={props.image} className = {styles.image}/>
    </div>
    );
}

NavBarElement.propTypes = {
    title: PropTypes.string.isRequired,
}

// NavBarElement.defaultProps = {
//   title: 'Problem'
// };

export default NavBarElement;