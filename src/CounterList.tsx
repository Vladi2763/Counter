import classes from './CountersList.module.css'
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { CountersDispatch, checkTimers } from './store/counterActions'
import { useEffect } from 'react';

import { addCounter } from './store/counterActions';

import { Counter as CounterType, State } from './store/counterReducer';

function CountersList() {

  useEffect(() => {
    dispatch(checkTimers())
  }, [])

  const counters = useSelector((state: State) => state.counters)

  const dispatch: CountersDispatch = useDispatch();

  const addCounterHandler = () => {
    dispatch(addCounter())
  }

  return (
    <div className={classes.container}>
      <span className={classes.title}>Redux Counter</span>
      {
        counters.map((counter: CounterType, index: number) => (
          <div className={classes.counters} key={index} >
            <Counter index={index} counter={counter.count} />
          </div>
        ))
      }
      <button onClick={addCounterHandler} className={classes.buttonAddCounter}>+ Add Counter</button>
    </div>

  );
}

export default CountersList;
