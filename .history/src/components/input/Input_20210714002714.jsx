import { useEffect, useRef } from 'react';

const Input = (props) => {
    const inputRef = useRef(null);
    useEffect(() => {
        debugger
        inputRef.current.addEventListener('keydown', () => {
            debugger
        });
    }, []);

    return (
        <input ref={inputRef} className={props.class} value={props.value} onChange={props.onChange} />
    )
}

export { Input }
