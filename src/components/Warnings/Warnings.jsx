// @flow
import * as React from 'react';
import classes from './Warnings.module.scss';
import Warning from './Warning/Warning';
import EmptyListMessage from '../EmptyListMessage/EmptyListMessage';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocationWarnings } from '../../hooks/warningsHooks';
import {
  EMPTY_WARNING_LIST_MAIN_MESSAGE,
  EMPTY_WARNING_LIST_ADDITIONAL_MESSAGE
} from '../../utils/constants';
import type { WarningsPropsType } from './WarningsPropsType';

function Warnings({ currentLocation }: WarningsPropsType): React$Node {
  const [warnings] = useLocationWarnings(currentLocation.id);

  return (
    <div className={classes.warningsContainer}>
      <h2 className={classes.title}>Warnings</h2>
      <div>
        {warnings.length ? (
          warnings.map(warning => <Warning data={warning} />)
        ) : (
          <EmptyListMessage title="Warnings list is empty" message="Have a nice day!" />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ locationManager: { currentLocation } }) => {
  return {
    currentLocation
  };
};

const WrappedWarnings = (connect(mapStateToProps)(
  Warnings
): React.AbstractComponent<WarningsPropsType>);

export default WrappedWarnings;
