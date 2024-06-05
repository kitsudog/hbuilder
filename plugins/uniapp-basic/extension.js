var hx = require("hbuilderx");
const validate = require("./validate.js");

function activate(context) {
	return {
		verify: validate.verify,
		verifyAndroidCert: validate.verifyAndroidCert,
		verifyAppleCert: validate.verifyAppleCert,
		getAlias: validate.getAlias
	}
}

function deactivate() {

}

module.exports = {
	activate,
	deactivate
}