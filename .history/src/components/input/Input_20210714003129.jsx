import { useEffect, useRef } from 'react';

const Input = (props) => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.addEventListener('keydown', (e) => {
            e.preventDefault();
            switch (e.keyCode) {
                case 38:
                    props.onUpArrorw();
                    break;
                case 40:
                    props.onDownArrorw();
                    break;
                default:
                    break;
            }
        });
    }, []);

    return (
        <input ref={inputRef} className={props.class} value={props.value} onChange={props.onChange} />
    )
}

export { Input }
