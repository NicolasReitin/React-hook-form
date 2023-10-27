import React from 'react'
import { useState } from 'react';


const MyForm = () => {

  
  const [users, setUsers] = useState([
    {id : 1, name : ""},
    {id : 2, username : ""}
  ]);

  const handleSubmit = (e) => {
    e.preventDefault()
    
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input className='form-control' id='name'  type="text"
        />
      </div>
      <div>
        <label>Username</label>
        <input className='form-control' id='username'  type="text"
        />
      </div>
      <div>
        <button type="submit" className='btn btn-primary mt-3' >Add new user</button>
      </div>
    </form>


    </>
         
      
      
  )
};

export default MyForm;

