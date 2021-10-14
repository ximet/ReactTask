import Link from '../../Link/Link';
import classes from './Warning.module.scss';
import { formatTime, formatDate } from '../../../utils/dateTimeUtils';

function Warning({data}) {
  return (
    <div className={classes.item}>
      <div className={classes.timestamp}>{formatDate(data.validFrom)} {formatTime(data.validFrom)}</div>
      <div className={classes.title}>{data.name}</div>
      <div className={classes.type}>{data.significanceDescription}</div>
      <div className={classes.description}>
        {data.description.map((message) => (
          message.text
        ))}
      </div>
    </div>
  );
}

export default Warning;
