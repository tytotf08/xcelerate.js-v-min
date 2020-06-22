// xCelerate JS 
// Please refer to LICENSE to view how you can distribute and branch off of this code.
var randomContent;
var content;
content = document.querySelector("body");

window.onload = function start() {
	console.log("xCelerate running");
	content.innerHTML += `<!-- xCelerate JS - an Open-source Javascript framework. -->`
}

function write(output, color, size) {
	if (output !== undefined && color !== undefined && size !== undefined) {
		if (typeof output === "string" && typeof color === "string" && typeof size === "number") {

		}
	}
}
function hello(outPutEnvironment) {
	if (typeof outPutEnvironment === "string") {
		if (outPutEnvironment === "console") {
			console.log("Hello");
		} else if (outPutEnvironment === "html") {
			content.innerHTML += `<p>Hello</p>`;
		} else if (outPutEnvironment === "alert") {
			alert("Hello");
		} else if (outPutEnvironment === "") {
			alert("SyntaxError: must specify at least one output environment.");
		} else {
			alert("SyntaxError: '"+outPutEnvironment+"' is not a valid output environment.");
		}
	} else {
		alert("SyntaxError: output environment must be a specified string.");
	}
}
function print(output) {
	content.innerHTML += `<p>` + output + `</p>`;
}
function random(arrayName) {
	if (typeof arrayName === "string") {
		randomContent = arrayName[Math.floor(Math.random() * arrayName.length)];
		content.innerHTML += `<p>` + randomContent + `</p>`;
	}	
}
function line(color) {
	if (typeof color === "string" && color !== undefined) {
		content.innerHTML += `<hr style = "color: `+color+`; background-color: `+color+`; min-height: 2px; border: none;"/>`;
	}
}
function button(value, functionCalled) {
	if (typeof value === "string" && typeof functionCalled === "string" && !functionCalled.includes("()")) {
		content.innerHTML += `<button onclick = "`+functionCalled+`()">`+value+`</button>`;
	}
}