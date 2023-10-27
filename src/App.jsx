import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm';
import UserTable from './tables/UserTable';


function App() {
// state(état, données)

  const [formAdd, setFormAdd] = useState(true);

  const [users, setUsers] = useState([
    {id : 1, name : "Nico", username : "REITIN"},
    {id : 2, name : "Florent", username : "BENOIST"}
  ]);

  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [editUserId, setEditUserId] = useState(null);

  const [newUser, setNewUser] = useState([    
    {
      name : newName,
      userName: newUsername
    }
    
  ]);
  

// comportements
const handleName = (e) => {
  const valeurAfterChange = e.target.value;
  // console.log(e.target.value);
  setNewName (valeurAfterChange);
};

const handleUsername = (e) => {
  const valeurAfterChange = e.target.value;
  // console.log(e.target.value);
  setNewUsername (valeurAfterChange);  
};
 
  const handleSubmit = (e) => {
    e.preventDefault();
    //1- copier le state
    const usersCopy = [...users];
    //2- manipuler le state copié
    const id = new Date().getTime();
    usersCopy.push({id: id, name: newName, username: newUsername});
    //3- modifier mon state avec le setter
    setUsers(usersCopy);
    setNewName("");
    setNewUsername("");
    
  };

  const handleEdit = (user) => {
    // console.log(user);
    setFormAdd(false);
    setNewName(user.name);
    setEditUserId(user.id);
    setNewUsername(user.username);

  }

  const updateUser = (e) => {
    e.preventDefault();
    const usersCopy = [...users];

    const newData = usersCopy.map((userCopy) =>{
      console.log(users.id);
      
       return (userCopy.id === editUserId ? {...userCopy, name: newName, username: newUsername} : {...userCopy});
    });

    setUsers(newData);
    setFormAdd(true);
    setNewName("");
    setNewUsername("");
  }

  const handleDelete = (id) => {
    console.log(id);
    //1- copier le state
    const usersCopy = [...users]
    //2- manipuler le state copié
    const usersCopyUpdate = usersCopy.filter(user => user.id !== id)
    //3- modifier mon state avec le setter
    setUsers(usersCopyUpdate);
  };



// affichage
  return (
    <div className="container ms-5 p-5">
      <h1 className='mb-5 text-center'>CRUD App with Hooks</h1>
      <div className='d-flex justify-content-between gap-5'>
        <div>
          <h2>Add user</h2>
            {/* <MyForm 
            
            /> */}
          <form onSubmit={formAdd ? handleSubmit : updateUser}>
            <div>
              <label>Name</label>
              <input className='form-control' type="text" value={newName} onChange={handleName}/>
            </div>
            <div>
              <label>Username</label>
              <input className='form-control' type="text" value={newUsername} onChange={handleUsername}/>
            </div>
            <div>
              <button type="submit" className='btn btn-primary mt-3' >{formAdd ? "Add new user" : "Edit user"}</button>
            </div>
          </form>
          
        </div>
        <div>
          <h2>View users</h2>
          {/* <UserTable 
          
          /> */}
          <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <tr key = {user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td><button className='btn btn-warning' onClick={() => handleEdit(user)}>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button></td>
                  </tr>)}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default App
