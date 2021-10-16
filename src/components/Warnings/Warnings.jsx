// @flow
import * as React from 'react';
import classes from './Warnings.module.scss';
import Warning from './Warning/Warning';
import EmptyListMessage from '../EmptyListMessage/EmptyListMessage';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import ApiService from '../../services/ForecastApiService';
import {
  EMPTY_WARNING_LIST_MAIN_MESSAGE,
  EMPTY_WARNING_LIST_ADDITIONAL_MESSAGE
} from '../../utils/constants';
import type { WarningsPropsType } from './WarningsPropsType';

const makeWarningsList = warnings => warnings.map(warning => <Warning data={warning} />);

function Warnings({ currentLocation }: WarningsPropsType): React$Node {
  const [warnings, setWarnings] = useState([]);

  useEffect(() => {
    const getWarningsData = async (): Promise<void> => {
      try {
        if (currentLocation.id) {
          const { data } = await ApiService.getWarnings(currentLocation.id);
          setWarnings(data.warnings);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getWarningsData();
  }, [currentLocation]);

  return (
    <div className={classes.warningsContainer}>
      <h2 className={classes.title}>Warnings</h2>
      <div>
        {warnings.length ? (
          makeWarningsList(warnings)
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
