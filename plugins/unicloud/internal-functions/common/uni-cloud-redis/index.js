const uniCloudPrototype=Object.getPrototypeOf(uniCloud);uniCloudPrototype.redis=()=>{throw new Error("当前云函数用到了Redis扩展能力暂不支持本地调试，请上传到云端调试")};