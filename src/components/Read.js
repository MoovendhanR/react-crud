import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Read = () => {
const [data,setData]=useState([]);
const getData = async()=>{
await axios.get(`https://63ce67f9d2e8c29a9bd5d9dc.mockapi.io/react-crud`)
.then((res)=>setData(res.data))

}





  return (
    <div>
        <h2>Read</h2>
       
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>

  {
    data.map((ele)=>{
        return(
            <>
  <tbody>
    <tr>
      <td>{ele.id}</td>
      <td>{ele.name}</td>
      <td>{ele.email}</td>
      <td><button className="btn btn-success">Edit</button></td>
      <td><button className="btn btn-danger" >Delete</button></td>
    </tr>
    
  </tbody>

            </>
        )
    })
  }
</table>

    </div>
  )
}

export default Read
