import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Editor from "./Editor";
import Simulator from "./Simulator/Simulator";

/**
 * FrontEnd: Handles the entire front end of Chora. Splits into two tabs: Editor and Simulator.
 */
const FrontEnd = (props) => {
	let click, toggle = "tab", errMes = "";

	// fix it so it displays correct line number instead of
	if (props.error.length) { 
		for (let i in props.error) errMes += props.error[i] === "fine" ? "" : `L${props.numMap[i]}: ` + props.error[i] + "\n";
		click = () => { alert(errMes); };
		toggle = "";
	}

	return (
		<Fragment>
			<ul className ="nav nav-tabs justify-content-center">
				<li className="nav-item">
					<a href="#editor" className="nav-link active" data-toggle="tab" role="tab">Editor</a>
				</li>
				<li className="nav-item ">
					<a href="#simulator" className="nav-link" onClick={click} data-toggle={toggle} role="tab">Simulator</a>
				</li>
			</ul>

			<div className="tab-content no-scroll">
				<div role="tabpanel" className="tab-pane active" id="editor">
					<Editor
						editorUpdate = {props.editorUpdate}
					/>
				</div>
				<div role="tabpanel" className="tab-pane" id="simulator">
					<Simulator
						history = {props.history}
						memory = {props.memory}
						stepClick = {props.stepClick}
						runClick = {props.runClick}
						prevClick = {props.prevClick}
						resetClick = {props.resetClick}
						dumpClick = {props.dumpClick}
						registers = {props.registers}
						pc = {props.pc}
						bundles = {props.bundles}
					/>
				</div>
			</div>
		</Fragment>
	);
};

FrontEnd.propTypes = {
	history         : PropTypes.array,
	editorUpdate 	: PropTypes.func,
	pc 				: PropTypes.number,
	runClick 		: PropTypes.func,
	stepClick		: PropTypes.func,
	prevClick 		: PropTypes.func,
	resetClick 		: PropTypes.func,
	dumpClick		: PropTypes.func,
	bundles			: PropTypes.object,
	registers 		: PropTypes.object,
	memory 			: PropTypes.object,
	error			: PropTypes.arrayOf(String),
	numMap			: PropTypes.array,
};

export default FrontEnd;
