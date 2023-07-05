import React, { useState } from 'react'
import { json } from 'react-router-dom'

function Cart(props) {
    const[data,setData]=useState([]);
    useState(()=>{
        fetch('https://fakestoreapi.com/carts')
        .then(response=>response.json())
        .then(json=>{
            setData(json)
            console.log(json);
        })
    })
  return (
    <>
    <div style={props.myStyle}>
    <h1>Welcome To Cart</h1>
    <hr/>
    {data.map((elm)=>{
        
        return(
            <div>
                <h3>{elm.id}</h3>
                <h3>{`Purchase Date: ${elm.date}`}</h3>
                {elm.products.map((product)=>{
                    return (
                        <h4>{`productId: ${product.productId} Quantity: ${product.quantity}`}</h4>
                    )
                    
                })}
                <hr/>
            </div>
        )
    })}
    </div>
    </>
  )
}

export default Cart