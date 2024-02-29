import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './Signup.css'
export const Signup = () => {
    let navigate = useNavigate()
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })

        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter valid Credentials")
        }
        else{
            navigate("/");
        }


    }
    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className='signup-container'>
                <form onSubmit={handleSubmit} className='signup-form'>
                    <div className="mb-3 form-group">
                        <label htmlFor="name" className="form-label">Name</label><br></br>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange} />
                    </div>
                    <div className="mb-3 form-group" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" value={credentials.password} onChange={onchange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputlocation" className="form-label">location</label>
                        <input type="text" name='location' className="form-control" value={credentials.location} onChange={onchange} id="exampleInputlocation" />
                    </div>

                    <button type="submit" className=" m-3 btn btn-primary"> Submit </button> <br/>
                  Already have an account?  <Link to="/login" className='m-3 btn btn-danger'> Login </Link>
                </form>
            </div>
        </>
    )
}
