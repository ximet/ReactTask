import classes from './Warnings.module.scss';
import Warning from './Warning/Warning';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import ApiService from '../../services/ForecastApiService';
import mockData from './mockData';

const warningsList = (warnings) => warnings.map((warning) => <Warning data={warning} />);
const emptyWarningList = () => (
  <div className={classes.noticeMessage}>
    <h3>Warnings list is empy</h3>
    <p>Have a nice day!</p>
  </div>
);

function Warnings() {
  const [warnings, setWarnings] = useState([]);
  const [cookies] = useCookies(['token']);

  useEffect(async () => {
    const warningsResponse = await ApiService.getWarnings('105128581', cookies);
    setWarnings(warningsResponse.warnings);
  }, []);

  return (
    <div className={classes.warningsContainer}>
      <h2 className={classes.title}>Warnings</h2>
      <div>
        {warnings.length ? warningsList(warnings) : emptyWarningList()}
      </div>
    </div>
  );
}

export default Warnings;
