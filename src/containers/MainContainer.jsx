import { connect } from 'react-redux';
import Main from '../components/blocks/Main/Main';

export default connect(state => {
    console.log(state);
    return {cityData: state}}
)(Main);