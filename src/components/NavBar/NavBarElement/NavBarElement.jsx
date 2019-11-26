import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import defImg from '../../../img/broken-image.png';
import styles from './styles.css';


class NavBarElement extends React.Component {
    constructor(props) {
        super(props);
        this.clearFilter = this.clearFilter.bind(this);
      }
      clearFilter(){
        this.props.onClearFilter(!this.props.Store.main.mainState);
      }  
    render() {
        return (
            // Как сделать весь блок ссылкой?
            <div className = {styles.nav_element}>
                <Link to={this.props.link} onClick = {this.clearFilter}>{this.props.title}</Link>
                <img src={this.props.image} className = {styles.image}/>
            </div>
            );
    }
}

NavBarElement.propTypes = {
    title: PropTypes.string.isRequired,
}

NavBarElement.defaultProps = {
  link: '/',
  image: defImg
};

export default connect(
    state => ({
      Store: state
    }),
    dispatch => ({
        onClearFilter: () => {
        dispatch({ type: 'FIND_CITY', payload: "" });
      }
    })
  )(NavBarElement);