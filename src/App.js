import { useState } from "react";
import UserTable from "./Tables/UserTable";
import UserForm from "./forms/userForm";
import EditUserForm from "./forms/EditUserForm";


function App() {
  const  usersData=[{id:1,name:"suresh",userName:"sureshhx"},{id:2,name:"soundar",userName:"soundarhx"},{id:3,name:"ram",userName:"ramhx"}];
  const [users,setUsers]=useState(usersData);

  function addUser(user){
    
    user.id=users.length+1;
    setUsers([...users,user]);
  }

  function deleteUser(id){
    setUsers(users.filter((user)=>user.id!==id));
    setEditing(false);
  }
  const [editing,setEditing]=useState(false);
  const initialFormState={id:null,name:'',userName:''};
  const [currUser,setCurrUser]=useState(initialFormState);

  function editUser(user){
    setEditing(true);
    setCurrUser({id:user.id,name:user.name,userName:user.userName});

  }
  function update(id,updatedUser){
    setEditing(false);
    setUsers(users.map((user)=>user.id===id?updatedUser:user))
   
  }
  
  return (
    <div className="container">
      <h1>CURD WITH REACT</h1>
      <div className="flex-row">
       
        <div className="flex-large">
          {editing?(<div> <h1>EDIT FORM</h1> <EditUserForm  setEditing={setEditing} currentUser={currUser} updateuser={update} /></div>):(<div><h2>ADD USER</h2>
          <UserForm adduser={addUser}/></div>)}
          
        </div>
        <div className="flex-large">
          <h2> SHOW USER</h2>
          <UserTable edituser={editUser} deleteuser={deleteUser} users={users}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
