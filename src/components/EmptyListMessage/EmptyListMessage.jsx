import classes from './EmptyListMessage.module.scss';

function EmptyListNotice({ title, message }) {
  return (
    <div className={classes.noticeMessage}>
      {title.length && <h3>{title}</h3>}
      {message.length && <p>{message}</p>}
    </div>
  );
}

export default EmptyListNotice;
