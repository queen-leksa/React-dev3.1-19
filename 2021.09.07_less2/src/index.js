import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
	// <h1>Hello React!</h1>,
	// React.createElement("h1", {}, "Hello React!"),
	<div>
		<h1>Rainbow</h1>
		<div className="rainbow">
			<div className="color" />	
			<div className="color" />	
			<div className="color" />	
			<div className="color" />	
			<div className="color" />	
			<div className="color" />	
			<div className="color" />	
		</div>
	</div>,
	document.querySelector("[data-type=\"app\"]")
);