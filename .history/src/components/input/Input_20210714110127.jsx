const Input = (props) => {
    return <input type="text" pattern="[0-9]*" className={props.class} value={props.value} onChange={props.onChange} />
}

export { Input }
