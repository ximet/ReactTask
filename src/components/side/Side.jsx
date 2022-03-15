import classes from './side.scss';
import Navbar from '../navbar/Navbar';

function Side() {
  return (
    <div className={classes.side}>
      <Navbar style={'sideNavigation'} />
    </div>
  );
}

export default Side;
