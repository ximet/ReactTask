import classes from './error.scss';

function Error(props) {
    const {errorMessage = 'Sorry, the data could not be loaded'} = props;

    return (
        <div className={classes.errorContainer}>
            <h2 className={classes.error}>{errorMessage}</h2>
        </div>
    );
}

export default Error;