import React from 'react'

function FormElement(props) {
    return (
        <div className={'input-element'}>
            <label>{props.labelName}</label>
            {props.children}
        </div>



    )
}

export default FormElement
