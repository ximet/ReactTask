import classes from './Link.module.scss';

function Link({ children, className, ...props }) {
  return (
    <a className={[className, classes.link].join(' ')} {...props}>
      {children}
    </a>
  );
}

export default Link;
