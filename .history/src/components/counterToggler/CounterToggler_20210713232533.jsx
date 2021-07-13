import React from 'react'

function CounterToggler(props) {
    return (
        <div className="operator" onClick={props.onOperatorClick}>{props.operator}</div>
    )
}

export { CounterToggler }
