import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/blocks/Main/Main';

const MainContainer = (props) => (
    <Main cityData={ props.state }/>
)

const mapStateToProps = (state) =>({
    state
});

export default connect(mapStateToProps)(MainContainer);