
// All of the Node.js APIs are available in the preload process.

// It has the same sandbox as a Chrome extension.

window.addEventListener('DOMContentLoaded', () => {

	const replaceText = (selector, text) => {
	const element = document.getElementById(selector)
	if (element) element.innerText = text
	}

	for (const type of ['chrome', 'node', 'electron']) {
	replaceText(`${type}-version`, process.versions[type])
	}

	// const fs = require('fs')

	// let content = JSON.stringify(fs.readdirSync(__dirname),null,2)

	// fs.writeFileSync("test_2_2022.txt", content, "utf8");

})
