import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
export default function Login() {
    
    const [credentials, setcredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter valid Credentials")
        }
        if (json.success) {
            localStorage.setItem("authToken", json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate("/");


        }


    }
    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className='login-container'>
                <form onSubmit={handleSubmit} className='login-form'>

                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputEmail1" >Email </label>
                        <input type="email" className='form-control' name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name='password' className="form-control" value={credentials.password} onChange={onchange} id="exampleInputPassword1" />
                    </div>


                    <button type="submit" className=" m-3 btn btn-primary">Submit</button>
                    <p>
                        Don't have an account? <Link to="/createuser" className='m-3 btn btn-danger'>Sign Up</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

