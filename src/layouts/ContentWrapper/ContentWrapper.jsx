import classes from './ContentWrapper.module.scss';

function ContentWrapper({ children }) {
  return <div className={classes.contentWrapperContainer}>{children}</div>;
}

export default ContentWrapper;
