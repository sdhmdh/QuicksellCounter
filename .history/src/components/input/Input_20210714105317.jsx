const Input = (props) => {
    return (
        <input ref={inputRef} className={props.class} value={props.value} onChange={props.onChange} />
    )
}

export { Input }
