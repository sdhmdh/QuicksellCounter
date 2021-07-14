import { useEffect, useRef } from 'react';

const Input = (props) => {
    const inputRef = useRef(null);
    useEffect(() => {
        // listening to key up and key down events on input element
        inputRef.current.addEventListener('keydown', (e) => {
            debugger
            e.preventDefault();
            switch (e.keyCode) {
                case 38:
                    props.onUpArrorw();
                    break;
                case 40:
                    props.onDownArrorw();
                    break;
                default:
                    props.onChange(e.target.value);
                    break;
            }
        });

        // cleanup
        return () => {
            // removing event listeners from input element
            inputRef.current.removeEventListener('keydown');
        }

    }, []);

    return (
        <input ref={inputRef} className={props.class} value={props.value} />
    )
}

export { Input }
