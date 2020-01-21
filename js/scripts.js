function gridCreation(gridSize) {
	for (let x = 0; x < gridSize; x++) { 
		let createRow = document.createElement("div")
		createRow.style.cssText = "display: flex; flex: 1; justify-content: space-between; margin: 0; background-color: green;"
		createRow.className = "GridRow"
		document.getElementById("SketchBox").appendChild(createRow)
		for (let y = 0; y < gridSize; y++) {
			let createCell = document.createElement("div");
			createCell.style.cssText = "margin: 0; width: 100%;"
			createCell.className = "GridCell"
			document.getElementsByClassName("GridRow")[x].appendChild(createCell)
		}
	}
}

gridCreation(4)