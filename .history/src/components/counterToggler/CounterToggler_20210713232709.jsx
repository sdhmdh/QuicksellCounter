import React from 'react';
import './CounterToggler.css';

function CounterToggler(props) {
    return (
        <div className={"operator " + props.name} onClick={props.onOperatorClick}>{props.operator}</div>
    )
}

export { CounterToggler }
