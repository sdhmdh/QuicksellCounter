import React from 'react'

function CounterToggler(props) {
    return (
        <div onClick={props.onOperatorClick}>{props.operator}</div>
    )
}

export { CounterToggler }
