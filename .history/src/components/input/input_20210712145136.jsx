import React from 'react'

function Input(props) {
    return (
        <input className={props.class} value={props.value} onChange={props.onChange} />
    )
}

export default Input
