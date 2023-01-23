import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
const [data,setData]=useState([]);
const [tabledark , setTabledark] = useState("")



const getData = async()=>{
await axios.get(`https://63ce67f9d2e8c29a9bd5d9dc.mockapi.io/react-crud`)
.then((res)=>setData(res.data))

}



function handleDelete(id){
    axios.delete(`https://63ce67f9d2e8c29a9bd5d9dc.mockapi.io/react-crud/${id}`)
    .then(()=>{
        getData()
    })
    console.log(id)
}
useEffect(()=>{
    getData()
},[])

const setToLocalStorage=(ele) => {
       localStorage.setItem("id",ele.id);
       localStorage.setItem("name",ele.name);
       localStorage.setItem("email",ele.email);

}


  return (
    <div>
    <div className="form-switch">
  <input 
   className="form-check-input" 
   type="checkbox" 
   onClick={()=>{
    if(tabledark === "table-dark"){
        setTabledark("");
    }else{
        setTabledark("table-dark")
    }
   }}
   
  />
    <label class="form-check-label" for="flexSwitchCheckChecked">Mode</label>

</div>
        <br/>
     <div className="d-flex justify-content-between m-2">
    <h2>Read Data</h2>
    <Link to="/">
    <button className="btn btn-secondary">Create Data</button>
    </Link>
        </div> 
        <br/>

<table className={`table ${tabledark}`}>
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
  <tbody >
    <tr>
      <td>{ele.id}</td>
      <td>{ele.name}</td>
      <td>{ele.email}</td>
      <td>
      <Link to="/update">
        <button className="btn btn-success" onClick={()=>setToLocalStorage(ele)}>Edit</button>
      </Link>
        </td>
      <td><button className="btn btn-danger" onClick={()=>handleDelete(ele.id)}>Delete</button></td>
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
