import { Input, CounterToggler } from '../../components';
import withCounter from '../../hoc/withCounter';
import './Counter.css';


const Counter = (props) => {
    const onInputChange = (val) => {
        const input = Number(val);
        if (input >= 1 && input <= 1000) {
            props.setCounter(input);
        }
    }

    return (
        <div className="counter">
            <CounterToggler name="substract" operator={"-"} onOperatorClick={props.decreaseCounter} />
            <Input
                class="counter-input"
                value={props.counter}
                onChange={onInputChange}
                onUpArrorw={props.increaseCounter}
                onDownArrorw={props.decreaseCounter}
            />
            <CounterToggler name="add" operator={"+"} onOperatorClick={props.increaseCounter} />
        </div>
    )
}

const WithCounter = withCounter(Counter);
export { WithCounter as Counter }
