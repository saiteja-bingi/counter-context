import React from 'react'
import {useContext} from 'react'
import { counterContextObj } from '../contexts/CounterContext';
import { userContextObj } from '../contexts/UserContext';
function Child1(){
    let {counter,increment}=useContext(counterContextObj) //{counter,increment ,decrement}
    
    // get state form user context
    let users=useContext(userContextObj)
    
    return (
        <div className='text-center p-5 bg-warning'>
            <h1>child-1</h1>
            <p className="fs-1">Counter:{counter}</p>
            <button className="btn btn-success" onClick={increment}>+</button>
            <h2>No. of users:{users.length}</h2>
        </div>
    )
}

export default Child1;