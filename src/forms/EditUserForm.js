import React, { useEffect, useState } from 'react'

function EditUserForm({currentUser,updateuser,setEditing}) {
 const [user,setUser]=useState(currentUser)
 function handleInputChange(event){
    const {name,value}=event.target;
    setUser({...user,[name]:value})
    
}
useEffect(()=>{
  setUser(currentUser);
},[currentUser])
  return (
    <form onSubmit={event=>{
        event.preventDefault();
        if(!user.userName||!user.name)return;
        updateuser(user.id,user);
    }}>
        <label>Name</label>
        <input type='text' name="name" onChange={handleInputChange} value={user.name}/>
        <label>UserNAme</label>
        <input type='text' name="userName" onChange={handleInputChange} value={user.userName}/>
        <button>Update User</button>
        <button className="button muted-button" onClick={()=>{
            setEditing(false)
        }}>Cancle</button>
    </form>
  )
}

export default EditUserForm