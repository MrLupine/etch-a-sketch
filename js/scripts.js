/*function gridCreation(gridSize) {
	for (let x = 0; x < gridSize; x++) { 
		let createRow = document.createElement("div");
		createRow.className = "GridRow";
		document.getElementById("SketchBox").appendChild(createRow);
		for (let y = 0; y < gridSize; y++) {
			let createCell = document.createElement("div");
			createCell.className = "GridCell";
			document.getElementsByClassName("GridRow")[x].appendChild(createCell);
		}
	}
}*/

window.addEventListener("load", gridCreation);

function gridCreation() {
	const gridSizeInput = document.getElementById("GridSizeInput");
	const sketchBox = document.getElementById("SketchBox")
	let mouseDown = false;

	document.getElementById("SketchBox").addEventListener("mousedown", () => {
		mouseDown = true;
	})

	document.getElementById("SketchBox").addEventListener("mouseup", () => {
		mouseDown = false;
	})

	document.getElementById("SketchBox").addEventListener("mouseleave", () => {
		mouseDown = false;
	})

	sketchBox.setAttribute("style", `display: grid; grid-template-columns: repeat(${gridSizeInput.value}, 1fr); grid-template-rows: repeat(${gridSizeInput.value}, 1fr);`);
	for (let i = 0; i < (gridSizeInput.value ** 2); i++) {
		const createCell = document.createElement("div");
		createCell.className = "GridCell";
		createCell.style.border = "1px solid #E6E6E6"
		createCell.addEventListener("mouseenter", e => {
			let colourChoice = document.getElementById("ColourChangerInput").value
			let multicolouredInput = document.getElementById("MulticolouredInput").checked;
			if (mouseDown && multicolouredInput) {
				e.target.style.backgroundColor = `${colourMulticoloured()}`;
			} else if (mouseDown) {
				e.target.style.backgroundColor = `${colourChoice}`;
			}
		})
		createCell.addEventListener("mousedown", e => {
			let colourChoice = document.getElementById("ColourChangerInput").value
			let multicolouredInput = document.getElementById("MulticolouredInput").checked;
			if (multicolouredInput) {
				e.target.style.backgroundColor = `${colourMulticoloured()}`;
			} else {
				e.target.style.backgroundColor = `${colourChoice}`;
			}
		})
		sketchBox.appendChild(createCell);
	}
	hideGrid()
}

function colourMulticoloured(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgba(${r}, ${g}, ${b})`
}


{
	const clearBox = document.getElementById("ClearBox");
	const nightModeInput = document.getElementById("NightModeInput").checked;
	const settingsIcon = document.getElementById("SettingsIcon");
	const crossIcon = document.getElementById("CrossIcon");
	 
	clearBox.addEventListener("mouseenter", () => {
		if (nightModeInput) {
			clearBox.style.backgroundImage = "linear-gradient(#595959, #4C4C4C)";
		} else if (!nightModeInput) {
			clearBox.style.backgroundImage = "linear-gradient(#BFBFBF, #B3B3B3)";
		}
	})

	clearBox.addEventListener("mouseleave", () => {
		if (nightModeInput) {
			clearBox.style.backgroundImage = "linear-gradient(#3F3F3F, #333333)";
		} else if (!nightModeInput) {
			clearBox.style.backgroundImage = "linear-gradient(#D9D9D9, #CCCCCC)";
		}
	})

	settingsIcon.addEventListener("mouseenter", () => {
		if (nightModeInput) {
			settingsIcon.style.fill = "#9A9A9A";
		} else if (!nightModeInput) {
			settingsIcon.style.fill = "#666666";
		}
	})

	settingsIcon.addEventListener("mouseleave", () => {
		if (nightModeInput) {
			settingsIcon.style.fill = "#4C4C4C";
		} else if (!nightModeInput) {
			settingsIcon.style.fill = "#B3B3B3";
		}
	})

	crossIcon.addEventListener("mouseenter", () => {
		if (nightModeInput) {
			crossIcon.style.fill = "#9A9A9A";
		} else if (!nightModeInput) {
			crossIcon.style.fill = "#666666";
		}
	})

	crossIcon.addEventListener("mouseleave", () => {
		if (nightModeInput) { 
			crossIcon.style.fill = "#4C4C4C";
		} else if (!nightModeInput) {
			crossIcon.style.fill = "#B3B3B3";
		}
	})
}

function nightMode() {
	const bodyColour = document.getElementById("body");
	const nightModeInput = document.getElementById("NightModeInput").checked;
	const defaultColour = document.getElementById("ColourChangerInput");
	const hiddenSettings = document.getElementById("HiddenSettings");
	const clearBox = document.getElementById("ClearBox");
	const settingsIcon = document.getElementById("SettingsIcon")
	if (nightModeInput) {
		bodyColour.style.color = "white";
		bodyColour.style.backgroundColor = "black";
		defaultColour.setAttribute("value", "#C0C0C0");
		hiddenSettings.style.boxShadow = "0 0 6px 2px #505050";
		clearBox.style.backgroundImage = "linear-gradient(#3F3F3F, #333333)";
		clearBox.style.color = "#BFBFBF";
		settingsIcon.style.fill = "#4C4C4C";
	} else if (!nightModeInput) {
		bodyColour.style.color = "black";
		bodyColour.style.backgroundColor = "white";
		defaultColour.setAttribute("value", "#3F3F3F");
		hiddenSettings.style.boxShadow = "0 0 5px 1px #B3B3B3";
		clearBox.style.backgroundImage = "linear-gradient(#D9D9D9, #CCCCCC)";
		clearBox.style.color = "#414141";
		settingsIcon.style.fill = "#B3B3B3";
	}
}

function hideGrid(){
	const hideGridInput = document.getElementById("HideGridInput").checked;
	const sketchBox = document.getElementById("SketchBox");
	const nightModeInput = document.getElementById("NightModeInput").checked;
	if (hideGridInput && nightModeInput) {
		document.querySelectorAll(".GridCell").forEach(cell => {
			cell.style.border = "";
		})
		sketchBox.style.boxShadow = "0 0 6px 2px #505050";
	} else if (!hideGridInput && nightModeInput) {
		document.querySelectorAll(".GridCell").forEach(cell => {
			cell.style.border = "1px solid #181818";
		})
		sketchBox.style.boxShadow = "";
	} else if (!hideGridInput && !nightModeInput || !hideGridInput) {
		document.querySelectorAll(".GridCell").forEach(cell => {
			cell.style.border = "1px solid #E6E6E6";
		})
		sketchBox.style.boxShadow = "";
	} else if (hideGridInput) {
		document.querySelectorAll(".GridCell").forEach(cell => {
			cell.style.border = "";
		})
		sketchBox.style.boxShadow = " 0 0 6px 2px #F3F3F3";		
	}
}

document.getElementById("HideGridInput").addEventListener("change", hideGrid)
document.getElementById("NightModeInput").addEventListener("change", hideGrid)
document.getElementById("NightModeInput").addEventListener("change", nightMode)

document.getElementById("GridSizeInput").addEventListener("input", () => {
	const sketchBox = document.getElementById("SketchBox");
	while(sketchBox.firstChild){
		sketchBox.removeChild(sketchBox.firstChild);
	}
	gridCreation()
});

document.getElementById("ClearBox").addEventListener("click", () => {
	const sketchBox = document.getElementById("SketchBox");
	while(sketchBox.firstChild){
		sketchBox.removeChild(sketchBox.firstChild);
	}
	gridCreation()
});

document.getElementById("SettingsToggleButton").addEventListener("change", () => {
	const hiddenSettings = document.getElementById("HiddenSettings");
	const settingsCheckbox = document.getElementById("SettingsToggleButton").checked;
	const settingsIcon = document.getElementById("SettingsIcon");
	if (settingsCheckbox) {
		settingsIcon.style.transform = "rotate(180deg)";
		hiddenSettings.style.bottom = "0"
	} else {
		settingsIcon.style.transform = "rotate(0deg)";
		hiddenSettings.style.bottom = "-100px"
	}
})

document.addEventListener("mousedown", (e) => {
	let settingsCheckbox = document.getElementById("SettingsToggleButton").checked;
	const hiddenSettings = document.getElementById("HiddenSettings");
	const checkboxLabel = document.getElementById("Switch")
	if (checkboxLabel.contains(e.target)) {
		return
	} else if ((hiddenSettings.contains(e.target)) && (e.target.id !== "CrossIcon")) {
		return
	} else if (settingsCheckbox && (e.target.id === "CrossIcon" || e.target.id !== "HiddenSettings")) {
		document.getElementById("SettingsToggleButton").click();
	}
})
