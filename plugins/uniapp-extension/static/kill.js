const HBuilderProcessId = process.env.HBuilderProcessId
let isCompiler = false
try {
	const argv = process.argv?.[1]
	isCompiler = argv?.includes('uniapp-cli.js') || argv?.includes('uni.js') || argv?.includes('vue-cli-service.js')
} catch (e) {}
if (HBuilderProcessId && isCompiler) {
	setInterval(() => {
		try {
			process.kill(HBuilderProcessId, 0);
		} catch (ex) {
			try {
				process.kill(process.pid, 'SIGKILL')
			} catch (e) {}
		}
	}, 3000);
}