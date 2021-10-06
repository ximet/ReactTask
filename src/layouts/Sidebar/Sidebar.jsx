import classes from './Sidebar.module.scss';

function Sidebar({ children }) {
  return <div className={classes.sidebarContainer}>{children}</div>;
}

export default Sidebar;
