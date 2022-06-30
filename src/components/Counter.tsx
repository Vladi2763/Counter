import classes from './Counter.module.css'
import { increment } from '../store/ActionCreators'
import { decrement } from '../store/ActionCreators'
import { deleteCounter } from '../store/ActionCreators'

import { useDispatch } from "react-redux"

const Counter: React.FC<{ index: number, counter: number }> = (props) => {


    const dispatch = useDispatch()

    const counterIncrementHandler = (index: number) => {
        dispatch(increment(index))
    }

    const counterDecrementHandler = (index: number) => {
        dispatch(decrement(index))
    }

    const counterDeleteHandler = (index: number) => {
        dispatch(deleteCounter(index))
    }

    const isButtonsAvailible = ((props.index + 1) % 4 === 0)

    return (
        <div className={classes.container}>
            <button className={classes.trash} onClick={() => counterDeleteHandler(props.index)}>
                <img src='/assets/trash.svg' alt='trash' />
            </button>
            <div className={classes.counter}>{props.counter}</div>
            {!isButtonsAvailible && <div className={classes.buttonsContainer}>
                <button className={classes.increment} onClick={() => counterIncrementHandler(props.index)}>+</button>
                <button className={classes.decrement} onClick={() => counterDecrementHandler(props.index)}>-</button>
            </div>}
            {isButtonsAvailible && <div className={classes.clock} />}
        </div>
    )
}

export default Counter;