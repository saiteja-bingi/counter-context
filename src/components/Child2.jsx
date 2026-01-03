import React from "react"
import { useContext } from "react"
import { counterContextObj } from "../contexts/CounterContext"
function Child2(){
    let {counter,decrement}=useContext(counterContextObj)
    return (
        <div className="text-center p-5 bg-secondary">
            <h1>child-2</h1>
            <p className="fs-1">Counter:{counter}</p>
            <button className="btn btn-danger" onClick={decrement}>-</button>
        </div>
    )
}

export default Child2