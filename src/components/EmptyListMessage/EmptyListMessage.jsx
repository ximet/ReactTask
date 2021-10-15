import classes from './EmptyListMessage.module.scss';

function EmptyListNotice({ mainMessage, additionalMessage }) {
  return (
    <div className={classes.noticeMessage}>
      {mainMessage.length && <h3>{mainMessage}</h3>}
      {additionalMessage.length && <p>additionalMessage</p>}
    </div>
  );
}

export default EmptyListNotice;
