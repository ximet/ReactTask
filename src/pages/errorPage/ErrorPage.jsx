import classes from './errorPage.scss';

function ErrorPage() {
  return (
    <div className={classes.errorPage}>
        <h2 className={classes.title}>Page not found</h2>
        <p className={classes.description}>The address is entered incorrectly, or such page does not exist on the site.</p>
    </div>
  );
}

export default ErrorPage;