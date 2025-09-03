import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

function Home() {
    const [users,setUsers] = useState([])
    const {id} = useParams()
    useEffect(() => {
        loadUsers();
    },[])

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
        console.log(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers();

    }
  return (
    /*
    <div className="container">
        <div className="py-4">
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.N</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index) => (
            <tr key={user.id}>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
        <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
        <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.id)}>Delete</button>
      </td>
    </tr>

        ))
    }
    
    
    
  </tbody>
</table>
        </div>
      
    </div>
    */
   <div className="container py-4">
      <h2 className="text-center mb-4 text-primary">User Management</h2>
      <div className="table-responsive">
        <table className="table table-hover table-striped border shadow-sm rounded">
          <thead className="table-dark">
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col" className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  <Link
                    className="btn btn-sm btn-primary mx-1"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-sm btn-warning mx-1"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Home
