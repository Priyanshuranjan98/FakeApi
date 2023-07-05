import React, { useState } from 'react'
import { json } from 'react-router-dom'

function Users(props) {
    const[data,setData]=useState([]);
    useState(()=>{
        fetch('https://fakestoreapi.com/users')
        .then(response=>response.json())
        .then(json=>{
            setData(json);
            console.log(json);
        })
    })
  return (
    <>
    <div style={props.myStyle}>
    <h1>Welcome To User Page</h1>
    <hr/>
    {data.map((elm)=>{
        return(
            <div>
                <h3>{elm.id}</h3>
                <h3>{elm.name.firstname} {elm.name.lastname}</h3>
                <h4>{elm.email}</h4>
                <hr/>
            </div>
        )
    })}
    </div>
    </>
  )
}

export default Users