import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {
    const [user,setUser] = useState(
        {
            name:"",
            username:"",
            email:""
        }
    )

    const {id} = useParams()

    useEffect(() => {
        loadUser()

    },[])

    const loadUser =async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)

    }
  return (
    /*
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">User Details</h2>
                <div className="card">
                    <div className="card-header">
                        Details of user id :
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Name:</b>
                                {user.name}
                            </li>
                            <li className="list-group-item">
                                <b>UserName:</b>
                                {user.username}
                            </li>
                            <li className="list-group-item">
                                <b>Email:</b>
                                {user.email}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to="/">Back to Home</Link>
                </div>
                </div>
                </div>
                */
           <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="col-md-6">
        <div className="card shadow-lg border-0 rounded-3">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">User Details (ID: {id})</h4>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name: </b> {user.name}
              </li>
              <li className="list-group-item">
                <b>Username: </b> {user.username}
              </li>
              <li className="list-group-item">
                <b>Email: </b> {user.email}
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link className="btn btn-secondary px-4" to="/">Back to Home</Link>
        </div>
      </div>
    </div>    
  )
}
