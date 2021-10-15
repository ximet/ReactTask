import classes from './Warnings.module.scss';
import Warning from './Warning/Warning';
import EmptyListMessage from '../EmptyListMessage/EmptyListMessage';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import ApiService from '../../services/ForecastApiService';
import mockData from './mockData';

const warningsList = warnings => warnings.map(warning => <Warning data={warning} />);

function Warnings() {
  const [warnings, setWarnings] = useState([]);

  useEffect(async () => {
    const { data } = await ApiService.getWarnings('105128581');
    setWarnings(data.warnings);
  }, []);

  return (
    <div className={classes.warningsContainer}>
      <h2 className={classes.title}>Warnings</h2>
      <div>
        {warnings.length ? (
          warningsList(warnings)
        ) : (
          <EmptyListMessage
            mainMessage={`Warnings list is empy`}
            additionalMessage={`Have a nice day!`}
          />
        )}
      </div>
    </div>
  );
}

export default Warnings;
