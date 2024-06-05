declare var NaN : number;
declare var Infinity : number;

/**
 * eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
 * @param x 一个表示 JavaScript 表达式、语句或一系列语句的字符串。表达式可以包含变量与已存在对象的属性。
 * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/eval.html
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *           "osVer": "x",
 *           "uniVer": "x",
 *            "unixVer": "x"
 *        },
 *        "ios": {
 *           "osVer": "x",
 *           "uniVer": "x",
 *            "unixVer": "x"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
declare function eval(x : string) : any;

/**
 * parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数，radix 是 2-36 之间的整数，表示被解析字符串的基数。
 * @param string 要被解析的值。字符串开头的空白符将会被忽略。（注意：只接收字符串类型的参数，其他类型将编译报错。）
 * @param radix 从 2 到 36 的整数，表示进制的基数。例如指定 16 表示被解析值是十六进制数。如果超出这个范围，将返回 NaN。假如指定 0 或未指定，基数将会根据字符串的值进行推算。注意，推算的结果不会永远是默认值 10！
 * @return 从给定的字符串中解析出的一个整数，或者 NaN。当radix 小于 2 或大于 36，或第一个非空格字符不能转换为数字时返回 NAN。
 * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/parseInt.html
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *           "osVer": "5.0",
 *           "uniVer": "3.9+",
 *            "unixVer": "3.9+"
 *        },
 *        "ios": {
 *           "osVer": "12.0",
 *           "uniVer": "3.9+",
 *            "unixVer": "4.11"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
declare function parseInt(string : string, radix ?: number) : number;

/**
 * parseFloat() 函数解析一个参数（直接收字符串类型的参数，其他类型编译报错）并返回一个浮点数。
 * @param string 需要被解析成为浮点数的值。
 * @return 给定值被解析成浮点数。如果给定值不能被转换成数值，则会返回 NaN。
 * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/parseFloat.html
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *           "osVer": "5.0",
 *           "uniVer": "3.9+",
 *            "unixVer": "3.9+"
 *        },
 *        "ios": {
 *           "osVer": "12.0",
 *           "uniVer": "3.9+",
 *            "unixVer": "4.11"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
declare function parseFloat(string : string) : number;

/**
 * isNaN() 函数用来确定一个值是否为NaN 。注：isNaN函数内包含一些非常有趣的规则；你也可以使用 ECMAScript 2015 中定义的 Number.isNaN() 来判断。
 * @param number 要被检测的值。
 * @return 如果给定值为 NaN则返回值为true；否则为false。
 * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/isNaN.html
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *           "osVer": "5.0",
 *           "uniVer": "3.9+",
 *            "unixVer": "3.9+"
 *        },
 *        "ios": {
 *           "osVer": "12.0",
 *           "uniVer": "3.9+",
 *            "unixVer": "4.11"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
declare function isNaN(number : number) : boolean;

/**
 * isFinite() 函数用来判断被传入的参数值是否为一个有限数值（finite number）。
 * @param number 要被检测的值。
 * @return 如果参数是 NaN，正无穷大或者负无穷大，会返回false，其他返回 true。
 * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/isFinite.html
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *           "osVer": "5.0",
 *           "uniVer": "3.9+",
 *            "unixVer": "3.9+"
 *        },
 *        "ios": {
 *           "osVer": "12.0",
 *           "uniVer": "3.9+",
 *            "unixVer": "4.11"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
declare function isFinite(number : number) : boolean;

/**
 * decodeURI() 函数能解码由encodeURI 创建或其他流程得到的统一资源标识符（URI）。
 * @param encodedURI 一个完整的编码过的 URI
 * @return 返回一个给定编码统一资源标识符 (URI) 的未编码版本的新字符串, 当 encodedURI 包含无效字符序列时，会返回null
 * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/decodeURI.html
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *           "osVer": "5.0",
 *           "uniVer": "3.91",
 *            "unixVer": "3.91"
 *        },
 *        "ios": {
 *           "osVer": "12.0",
 *           "uniVer": "3.91",
 *            "unixVer": "4.11"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
declare function decodeURI(encodedURI : string) : string;

/**
 * decodeURIComponent() 方法用于解码由 encodeURIComponent 方法或者其他类似方法编码的部分统一资源标识符（URI）。
 * @param encodedURIComponent 编码后的部分 URI
 * @return 一个解码后的统一资源标识符（URI）字符串，处理前的 URI 经过了给定格式的编码。当 encodedURI 包含无效字符序列时，会返回null.
 * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/decodeURIComponent.html
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *           "osVer": "5.0",
 *           "uniVer": "3.91",
 *            "unixVer": "3.91"
 *        },
 *        "ios": {
 *           "osVer": "12.0",
 *           "uniVer": "3.91",
 *            "unixVer": "4.11"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
declare function decodeURIComponent(encodedURIComponent : string) : string;

/**
 * encodeURI() 函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 (该字符的 UTF-8 编码仅为四转义序列) 由两个 "代理" 字符组成)。
 * @param uri 一个完整的 URI。
 * @return 一个新字符串，表示提供的字符串编码为统一资源标识符 (URI)。
 * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/encodeURI.html
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *           "osVer": "5.0",
 *           "uniVer": "3.91",
 *            "unixVer": "3.91"
 *        },
 *        "ios": {
 *           "osVer": "12.0",
 *           "uniVer": "3.91",
 *            "unixVer": "4.11"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
declare function encodeURI(uri : string) : string;

/**
 * encodeURIComponent() 函数通过将特定字符的每个实例替换成代表字符的 UTF-8 编码的一个、两个、三个或四个转义序列来编码 URI（只有由两个“代理”字符组成的字符会被编码为四个转义序列）。与 encodeURI() 相比，此函数会编码更多的字符，包括 URI 语法的一部分。
 * @param uriComponent 要被检测的 string 值。
 * @return 原字串作为 URI 组成部分被被编码后的新字符串。
 * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/encodeURIComponent.html
 * @uniPlatform {
 *    "app": {
 *        "android": {
 *           "osVer": "5.0",
 *           "uniVer": "3.91",
 *            "unixVer": "3.91"
 *        },
 *        "ios": {
 *           "osVer": "12.0",
 *           "uniVer": "3.91",
 *            "unixVer": "4.11"
 *        }
 *    },
 *    "web": {
 *        "uniVer": "√",
 *        "unixVer": "4.0"
 *    }
 * }
 */
declare function encodeURIComponent(uriComponent : string) : string;
