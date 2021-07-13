import React from 'react';
import './CounterToggler.css';

function CounterToggler(props) {
    return (
        <div className="operator" onClick={props.onOperatorClick}>{props.operator}</div>
    )
}

export { CounterToggler }
