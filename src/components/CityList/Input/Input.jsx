import React from 'react';
import { connect } from 'react-redux'
import styles from './styles.css';


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.findCity = this.findCity.bind(this);
      } 
      findCity() {
        this.props.onFindCity(this.serchInput.value)
      }
      render() {
        return (
          <div className={styles.input_box}>
            <input type="text" ref={(input)=> (this.serchInput = input)}/>
            <button onClick={this.findCity.bind(this)}> Find </button>
          </div>
        );
      }
    }
      

export default connect(
    state => ({
      Store: state
    }),
    dispatch => ({
        onFindCity: (city) => {
        dispatch({ type: 'FIND_CITY', payload: city });
      }
    })
  )(Input);

