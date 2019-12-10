import React from 'react';
import { connect } from 'react-redux';
import Icon from 'components/reusable/icons/Icon';
import styles from 'assets/css/styles.scss';
import sunny from 'assets/images/icons/sunny.svg';

function Loader(props) {

  const { enabled } = props;

  return (
    <div className={`${styles.loader} ${enabled?styles.enabled:''}`}>
      <div className={styles.loaderSpinningIcon}>
        <Icon path={sunny} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ LoaderReducer }) => {
  const reducer = LoaderReducer;
  return {
    enabled: reducer.loader,
  }
}

export default connect(mapStateToProps)(Loader);
