import React from 'react'

function UserTable({users,deleteuser,edituser}) {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Actions</th>
            </tr>
        </thead>
        {users.length>0?(
            users.map((user)=>(
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>
                    <button onClick={()=>edituser(user)} className='button muted-button'>  Edit</button>
                    <button onClick={()=>deleteuser(user.id)} className='button muted-button'>Delete</button>
                </td>
             </tr>
            ))
        ):(
            <tr>
                <td colSpan={3}> No User Data</td>
            </tr>
        )}
         
    </table>
  )
}

export default UserTable