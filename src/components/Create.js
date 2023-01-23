import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
    <h2>Create</h2>
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
