const devtoolcdp = require("./log/devtoolcdp.js");
const hx = require("hbuilderx");

function activate(context) {
	return {
		consoleMessage() {},
		async connectNewTab(data) {
			const extension = hx.extensions.getExtension('uniapp-extension');
			if (extension.cdpInitiatile) {
				const res = await extension.cdpInitiatile(data)
				return res
			} else {
				return true
			}
		}
	}
}

function deactivate() {

}

module.exports = {
	activate,
	deactivate
}