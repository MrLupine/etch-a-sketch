function gridCreation(gridSize) {
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
}

gridCreation(50)