import classes from './Warnings.module.scss';
import Warning from './Warning/Warning';

function Warnings() {
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
