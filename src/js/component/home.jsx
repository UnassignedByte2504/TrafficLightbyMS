import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selected, setSelected] =useState("stop");
	const [onOff, setOnOff] =useState("On")

	const handleColor = (color) =>{
		if (onOff === "On") {	
			alert("Turn on the lights first!");}
			else if(onOff==="Off"){
				if (color === selected) {
					setSelected("");
				} else {
					setSelected(color);
				}
			}


	};

	const handleAutoColor = () => {
		if (onOff === "On") {	
			alert("Turn on the lights first!");}
			else{
		let colors = ["red", "yellow", "green"];
		let i = 0;
		let interval = setInterval(() => {
			setSelected(colors[i]);
			i++;
			if (i === colors.length+1) {
				clearInterval(interval);
				setSelected("");
	
			}
		}, 1500);
		}
	};

	const handleOnOff = () =>{
		if (onOff === "Off"){
			setOnOff("On");
			setSelected("stop")
		}else if (onOff === "On"){
			setOnOff("Off");
			setSelected("");
		}
	};

	return (
		<div className="MainContainer container">
			<div className="TraficLight">
				<div className="RedContainer">
					<div className={
						selected !== "red"?"lightOff":"RedLight"
					}></div>
					<div className={
						selected !== "red"?"lightOff":"RedLight"
					}></div>
					<div className={
						selected !== "red"?"lightOff":"RedLight"
					}></div>
				</div>
				<div className="YellowContainer">
					<div className={
						selected === "" && selected !== "red"? "AmberLight": "lightOff"
						&& selected === "yellow" ? "YellowLight" : "lightOff"
					}></div>
					<div className={
						selected === "" && selected !== "red" && selected !== "green" ? "AmberLight": "lightOff"
					 && selected === "yellow" ? "YellowLight" : "lightOff"}></div>
					<div className= {
						selected === "" && selected !== "red"? "AmberLight": "lightOff"
						&& selected === "yellow" ? "YellowLight" : "lightOff"
					}></div>
				</div>
				<div className="GreenContainer">
					<div className={
						selected !== "green"?"lightOff":
					"GreenLight"
					}></div>
					<div className={
						selected !== "green"?"lightOff":
					"GreenLight"
					}></div>
					<div className={
						selected !== "green"?"lightOff":
					"GreenLight"
					}></div>
				</div>
			</div>
			<div className="ButtonGroup">
				<div className="BGLabel"><span>Please select: </span></div>
				<div className="SwitchButtonGroup">
				<button className="SwitchButton" onClick={()=>handleColor("red")}>red</button>
				<button className="SwitchButton" onClick={()=>handleColor("yellow")}>yellow</button>
				<button className="SwitchButton" onClick={()=>handleColor("green")}>green</button>
				</div>
				<div className="LowerButtonGroup">
					<button className="AutoButton" onClick={()=>handleAutoColor()}>Automatic Mode</button>
					<button className="StopButton" onClick={()=>handleOnOff()}>Turn {onOff} the lights!</button>
				</div>
			
			</div>
		</div>
	);
};

export default Home;
