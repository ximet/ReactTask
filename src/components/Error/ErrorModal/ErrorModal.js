import ReactDOM from "react-dom";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

function ErrorModal (props) {
    return (
        <>
            {
                ReactDOM.createPortal(
                    <ErrorPopup
                    title={props.title} 
                    message={props.message}
                    // onConfirm={props.onConfirm}
                    />,
                    document.getElementById('modal-root')
                )
            }
            {}
        </>
    )
}

export default ErrorModal;