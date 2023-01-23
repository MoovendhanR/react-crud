import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Create = () => {

   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   
   const navigate =useNavigate()
   
   const header = {"Access-Control-Allow-Origin":"*"}
   const handleSubmit =(e)=>{
      alert("submitted")
    e.preventDefault();
    axios.post(
        "https://63ce67f9d2e8c29a9bd5d9dc.mockapi.io/react-crud",{
            name:name,
            email:email,
            header
        },
        
    ).then(()=>{
        navigate("/read")
    })
  }

  return <>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" />
</div>
    <div className="d-flex justify-content-between m-2">
    <h2>Create</h2>
    <Link to="/read">
    <button className="btn btn-info">Show Data</button>
    </Link>
        </div>   
        <br/> 
        <br/>

    <form>
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input 
    type="text" 
    className="form-control"
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input 
    type="email" 
    className="form-control"  
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </>
  
}

export default Create
