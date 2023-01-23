import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const [id,setId] = useState(0)
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
   const navigate =useNavigate();


   useEffect(() => {
       setId(localStorage.getItem("id"));
       setName(localStorage.getItem("name"));
       setEmail(localStorage.getItem("email"));
   },[])


    const handleUpdate = (e)=>{
        console.log("clicked")
        e.preventDefault();
        axios.put(
            `https://63ce67f9d2e8c29a9bd5d9dc.mockapi.io/react-crud/${id}`,{
                name:name,
                email:email,
            }
                 
        ).then(()=>{
            navigate("/read") 
        })
    }
  return (
    <div>
      <h2>Update id-{id}</h2>
    <form>
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input 
    type="text" 
    value={name}
    className="form-control"
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input 
    type="email" 
    value={email}
    className="form-control"  
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
  <Link to="/read">
    <button className="btn btn-secondary">Back</button>
    </Link>
</form>
    </div>
  )
}

export default Update;
