import classes from './Warnings.module.scss';
import Warning from './Warning/Warning';
import { useCookies } from 'react-cookie';

import DataService from '../../services/DataService';

function Warnings() {
  const [cookies] = useCookies(['token']);
  const getData = async () => {
    const warningsResponse = await DataService.getWarnings('105128581', cookies);
    console.log(warningsResponse);
  };

  getData();

  return (
    <div className={classes.warningsContainer}>
      <h2 className={classes.title}>Warnings</h2>
      <div>
        <Warning />
      </div>
    </div>
  );
}

export default Warnings;
