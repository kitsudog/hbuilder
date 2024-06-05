declare class UTSJSONObject {
  [key: string]: any | null
  /**
   * 获取一个 属性，返回类型是any 或者 null
   * @return 如果属性存在返回结果，不存在返回null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#get
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  get(key:string) : any|null;
  /**
   * 获取一个 属性，返回类型是any 或者 null
   * @return 如果属性存在返回结果，不存在返回null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#set
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  set(key:string, value: any) : void;
  /**
   * 获取一个 属性，返回类型是any 或者 null
   * @return 如果属性存在返回结果，不存在返回null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#getAny
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  getAny(key:string) : any|null;
  /**
   * 获取一个Boolean属性，返回类型是Boolean 或者 null
   * @return 如果属性名存在，且类型为Boolean返回对应的结果，不存在返回null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#getBoolean
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  getBoolean(key:string) : boolean|null;
  /**
   * 获取一个number属性，返回类型是number 或者 null
   * @return 如果属性名存在，且类型为number返回对应的结果，不存在返回null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#getNumber
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  getNumber(key:string) : number|null;
  /**
   * 获取一个string属性，返回类型是string 或者 null
   * @return 如果属性名存在，且类型为string返回对应的结果，不存在返回null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#getString
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  getString(key:string) : string|null;
  /**
   * 获取一个UTSJSONObject属性，返回类型是UTSJSONObject 或者 null
   * @return 如果属性名存在，且类型为UTSJSONObject返回对应的结果，不存在返回null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#getJSON
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  getJSON(key:string) : UTSJSONObject|null;
  /**
   * 获取一个Array属性，返回类型是Array 或者 null, 数组元素类型由泛型T决定
   * @return 如果属性名存在，且类型为Array返回对应的结果，不存在返回null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#getArray<T>
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  getArray<T>(key:string) : Array<T>|null;
  /**
   * 获取一个Array属性，返回类型是Array 或者 null
   * @return 如果属性名存在，且类型为Array返回对应的结果，不存在返回null
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#getArray
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  getArray(key:string) : Array<any>|null;
  /**
   * 将当前 UTSJSONObject 实例转换为 Map 实例。
   * @return 返回 Map<string, any> 类型的 map
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/UTSJSONObject.html#toMap
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *           "uniVer": "3.9+",
   *            "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "12.0",
   *           "uniVer": "√",
   *            "unixVer": "4.11"
   *        }
   *    },
   *    "web": {
   *       "uniVer": "x",
   *       "unixVer": "4.0"
   *    }
   * }
   */
  toMap() : Map<string, any>;
}
