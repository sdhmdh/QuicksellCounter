import React from 'react'

const Input = (props) => {
    return (
        <input className="counter-input" value={props.value} onChange={props.onChange} />
    )
}

export { Input }
