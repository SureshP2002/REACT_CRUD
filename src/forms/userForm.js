import React, { useState } from 'react'

function UserForm(props) {
    const initialState={id:null,name:'',userName:''}
  
    const [user,setUser]=useState(initialState);
    function handleInputChange(event){
        const {name,value}=event.target;
        setUser({...user,[name]:value})
        return
    }
  return (
    <form onSubmit={event=>{
        event.preventDefault();
        if(!user.userName||!user.name)return;
        props.adduser(user);
        setUser(initialState);
    }}>
        <label>Name</label>
        <input type='text' name='name' onChange={handleInputChange} value={user.name}/>
        <label>UserName</label>
        <input type='text' name='userName' onChange={handleInputChange} value={user.userName}/>
        <button>Add New User</button>
    </form>
  )
}

export default UserForm