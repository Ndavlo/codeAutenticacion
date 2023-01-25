import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Logout = () => {
	const { store, actions } = useContext(Context);
	const [status, setStatus] = useState(false)
	useEffect(() => {
		actions
		.logout()
		.then(resp => 
			setStatus(resp)
		)
	}, [])


	return (
		<div className="container">
			<h1>Log Out</h1>
			<p>{status?"Sesion cerrada correctamente": ""}</p>
		</div>
	);
};
