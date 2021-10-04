import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Color from "./color";

const colorsList = ["red", "orangered", "orange", "yellowgreen", "darkcyan", "blue", "blueviolet"];
let arr = [];
colorsList.forEach(el => {
	arr.push(<Color bg={el}/>);
});
console.log(arr);

ReactDOM.render(
	// <h1>Hello React!</h1>,
	// React.createElement("h1", {}, "Hello React!"),
	<div>
		<h1>Rainbow</h1>
		<div className="rainbow">
			{/*colorsList.map(function(el) {
				return <Color />
			})*/}
			{/*colorsList.map(el => <Color bg={el}/>)*/}
			{arr}
		</div>
	</div>,
	document.querySelector("[data-type=\"app\"]")
);