import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  
  
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Credentials.email,
        password: Credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if(json.success){
        localStorage.setItem('token',json.authtoken)
        navigate('/');
        props.showAlert("Logged In","success")
    }
    else{
        props.showAlert("Invalid Credentials",'danger')
    }
  };

  const onChange = (e)=>{
    setCredentials({...Credentials,[e.target.name]: e.target.value})
  }

  
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={Credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={Credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
