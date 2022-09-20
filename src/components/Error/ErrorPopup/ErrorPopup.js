import './ErrorPopup.css'

function ErrorPopup(props) {
    return (
        <div className="error-container">
            <h3>{props.title}</h3>
            <p>{props.message}</p>
            {/* <button onClick={props.onConfirm}>Ok</button> */}
        </div>
    )
}
export default ErrorPopup;