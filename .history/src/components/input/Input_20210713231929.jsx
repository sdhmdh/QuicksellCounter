import React from 'react'

const Input = (props) => {
    return (
        <input className={props.class} value={props.value} onChange={props.onChange} />
    )
}

export { Input }
