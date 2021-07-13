import React from 'react'

function input(props) {
    return (
        <input className={props.class} value={props.value} onChange={props.onChange} />
    )
}

export default input
