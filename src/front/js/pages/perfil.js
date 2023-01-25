import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Perfil = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({})
	useEffect(() =>{
		if(!store.accessToken){
		  navigate("/")
		  return
		}
		actions.getProfile().then(data=>setUserInfo(data))
		},[store.accessToken])
	return (
		<div className="container">
			<h1>Perfil</h1>
			<p>Id de usuario: {userInfo.id} </p>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
