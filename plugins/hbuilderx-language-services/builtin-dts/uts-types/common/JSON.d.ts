interface JSON {

  /**
   * JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换 (操作)。
   * @param text 要被解析成 JavaScript 值的字符串
   * @param reviver [可选] 转换器，如果传入该参数 (函数)，可以用来修改解析生成的原始值，调用时机在 parse 函数返回之前。
   * @return 返回一个any 或者 null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/JSON.html#parse
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "√",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  parse(text : string, reviver ?: (this : any, key : string, value : any) => any) : any | null;

  /**
   * JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的值或者对象，其类型由泛型参数T决定
   * 如果输入的是一个合法的json值或者对象，返回一个对应的T值或者对象，如果json描述的值或对象和 T 指定的类型不符，将返回null
   * @param text 要被解析成 JavaScript 值的字符串
   * @return 返回一个T类型的值或者对象 或者 null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/JSON.html#parse<T>
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
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  parse<T>(text : string)  : T | null;

  /**
   * JSON.parseObject() 方法用来解析 JSON 字符串，构造由字符串描述的对象。
   * 如果输入的是一个合法的json对象，返回一个对应的UTSJSONObject，如果是json array 或者其他格式的字符串返回null
   * @param text 要被解析成 JavaScript 值的字符串
   * @return 返回一个UTSJSONObjet 或者 null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/JSON.html#parseObject
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "√",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  parseObject(text : string) : UTSJSONObject | null;




  /**
   * JSON.parseObject() 方法用来解析 JSON 字符串，构造由字符串描述的对象，该对象的类型由泛型参数T决定
   * 如果输入的是一个合法的json对象，返回一个对应的T对象，如果是json array 或者其他格式的字符串返回null
   * @param text 要被解析成 JavaScript 值的字符串
   * @return 返回一个T类型对象 或者 null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/JSON.html#parseObject<T>
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
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  parseObject<T>(text : string)  : T | null;


  /**
   * JSON.parseArray() 方法用来解析 JSON 字符串，构造由字符串描述的数组。数组元素类型为any
   * 如果输入的是一个合法的json数组，返回一个对应的Array，如果是json object 或者其他格式的字符串返回null
   * @param text 要被解析成 JavaScript 值的字符串
   * @return 返回一个Array 或者 null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/JSON.html#parseArray
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "√",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  parseArray(text : string) : Array<any> | null;

  /**
   * JSON.parseArray() 方法用来解析 JSON 字符串，构造由字符串描述的数组。数组元素类型由泛型T决定
   * 如果输入的是一个合法的json数组，返回一个对应的Array，如果是json object 或者其他格式的字符串返回null
   * @param text 要被解析成 JavaScript 值的字符串
   * @return 返回一个Array 或者 null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/JSON.html#parseArray<T>
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "√",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *        "uniVer": "x",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  parseArray<T>(text : string) : Array<T> | null;


  /**
   * JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性
   * @param value 将要序列化成 一个 JSON 字符串的值。
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/JSON.html#stringify
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "√",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *        "uniVer": "√",
   *        "unixVer": "4.0"
   *    }
   * }
   */
  stringify(value : any | null) : string;
}

/**
 * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
 */
declare var JSON : JSON;
