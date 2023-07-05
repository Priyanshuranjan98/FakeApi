import React, { useEffect,useState } from 'react'

function Products(props) {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(json=>{
          setData(json)
            console.log(json);
        })
    })
  return (
<>
<div style={props.myStyle}>
<h1>Welcome To Product Page</h1>
<hr/>
{data.map((elm) => {
  return (
    <div>
              <h3>{elm.id} {elm.title}</h3>
              <img src={elm.image} style={{width:"100px",height:"100px"}}></img>
              <h4>Price: ${elm.price}</h4>
              <hr/>
    </div>
    
  )
})}
</div>
</>    
  )
}

export default Products