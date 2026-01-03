import React from "react"
import { useContext } from "react"
import { counterContextObj } from "../contexts/CounterContext"
import { userContextObj } from "../contexts/UserContext"
function Child2(){
    let {counter,decrement}=useContext(counterContextObj)
    let users=useContext(userContextObj)
    return (
        <div className="text-center p-5 bg-secondary">
            <h1>child-2</h1>
            <p className="fs-1">Counter:{counter}</p>
            <button className="btn btn-danger" onClick={decrement}>-</button>
            <h2>No. of users:{users.length}</h2>
        </div>
    )
}


export default Child2