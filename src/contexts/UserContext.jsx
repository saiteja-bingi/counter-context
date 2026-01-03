import React from 'react'
import { createContext,useState,useEffect } from 'react'
export const userContextObj=createContext()

function UserContext({children}){
    const [users,setUsers]=useState([]);

    // get users
    const getUsers=async()=>{
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
        let userList=await res.json()
        setUsers(userList)
    }

    useEffect(()=>{
        getUsers();
    },[])

  return (
    <userContextObj.Provider value={users}>
        {children}
    </userContextObj.Provider>
  )
}

export default UserContext