import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
  const navigate = useNavigate()
useEffect(() =>{
if(store.accessToken){
  navigate("/perfil")
}
},[store.accessToken])

	async function submitLogin(e){
    e.preventDefault();
    let data = new FormData(e.target);
    let email=data.get("email");
    let password=data.get("password");
    let resp = await actions.login(email, password)
    if(resp != "ok"){
        console.error(resp)
    }
    console.log("Login exitoso");
}
	return (
		<div className="text-center mt-5 mx-5">
			<h1>Log In</h1>
			<form onSubmit={submitLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name="password" type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Log in</button>
</form>
			<div className="alert alert-info">
				
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
