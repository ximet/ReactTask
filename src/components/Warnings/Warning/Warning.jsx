// @flow
import classes from './Warning.module.scss';
import { formatTime, formatDate } from '../../../utils/dateTimeUtils';
import type { WarningPropsType } from './WarningPropsType';

function Warning({ data }: WarningPropsType): React$Node {
  return (
    <div className={classes.item}>
      <div className={classes.timestamp}>
        {formatDate(data.validFrom)} {formatTime(data.validFrom)}
      </div>
      <div className={classes.title}>{data.name}</div>
      <div className={classes.type}>{data.significanceDescription}</div>
      <div className={classes.description}>{data.description.map(message => message.text)}</div>
    </div>
  );
}

export default Warning;
