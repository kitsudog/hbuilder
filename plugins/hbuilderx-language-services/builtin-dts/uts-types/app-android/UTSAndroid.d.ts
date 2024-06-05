/**
 * 任务分发器
 */
declare class UTSTaskDispatcher {
	/**
	 * 在当前任务分发器 异步执行任务
	 * @param action 任务函数
	 * @param param 任务函数需要的参数
	 */
	async(action:(action:any|null)=>void,param?:any|null): void
}


interface UTSAndroid {

	/**
	 * 监听 App配置发生变化, 对应 android原生 onAppConfigChange
	 * @param 用于监听的响应函数
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#onAppConfigChange
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	onAppConfigChange(callback:(res:UTSJSONObject)=>void):void;

	/**
	 * onAppConfigChange 对应的反注册函数
	 * @param 准备取消监听的函数,如果传入的函数为null,则移除全部
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#offAppConfigChange
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	offAppConfigChange(callback?:(res:UTSJSONObject)=>void):void;


	/**
	 * 注册监听 App 内存不足时的系统回调函数 对应原生的API: onTrimMemory
	 * @param 用于监听的响应函数
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#onAppTrimMemory
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	onAppTrimMemory(callback?:(res:Number)=>void):void;

	/**
	 * onAppTrimMemory 对应的反注册函数。
	 * @param 准备取消监听的函数,如果传入的函数为null,则移除全部
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#offAppTrimMemory
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  	    	 "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	offAppTrimMemory(callback?:(res:Number)=>void):void;


	/**
	 * 注册监听 activity onPause事件
	 * @param 用于监听的响应函数
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#onAppActivityPause
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	onAppActivityPause(callback:()=>void):void;

	/**
	 * onAppActivityPause 对应的反注册函数
	 * @param 准备取消监听的函数,如果传入的函数为null,则移除全部
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#offAppActivityPause
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	offAppActivityPause(callback?:()=>void):void;


	/**
	 * 注册监听 activity onResume事件
	 * @param 用于监听的响应函数
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#onAppActivityResume
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	onAppActivityResume(callback:()=>void):void;


	/**
	 * onAppActivityResume 对应的反注册函数
	 * @param 准备取消监听的函数,如果传入的函数为null,则移除全部
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#offAppActivityResume
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	offAppActivityResume(callback?:()=>void):void;


	/**
	 * 注册监听 activity onDestroy事件
	 * @param 用于监听的响应函数
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#onAppActivityDestroy
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  	    	 "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	onAppActivityDestroy(callback:()=>void):void;

	/**
	 * onAppActivityDestroy 对应的反注册函数。
	 * @param 准备取消监听的函数,如果传入的函数为null,则移除全部
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#offAppActivityDestroy
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	offAppActivityDestroy(callback?:()=>void):void;

	/**
	 * 注册监听 activity onAppActivityResult 函数
	 * @param callback 用于监听的响应函数
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#onAppActivityResult
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 	    		 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	onAppActivityResult(callback:(requestCode: Int, resultCode: Int, data: Intent?)=>void):void;

	/**
	 * onAppActivityResult 对应的反注册函数。
	 * @param 准备取消监听的函数,如果传入的函数为null,则移除全部
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#offAppActivityResult
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	offAppActivityResult(callback?:(requestCode: Int, resultCode: Int, data: Intent?)=>void):void;


	/**
	 * 注册监听 activity onAppActivityBack 函数
	 * @param callback 用于监听的响应函数
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#onAppActivityBack
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	onAppActivityBack(callback:()=>void):void;

	/**
	 * 取消注册监听 activity onAppActivityBack 函数
	 * @param 准备取消监听的函数,如果传入的函数为null,则移除全部
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#offAppActivityBack
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	offAppActivityBack(callback?:()=>void):void;


	/**
	 * 获取当前应用Application上下文，对应android平台 Context.getApplicationContext 函数实现
	 * @return 当前应用程序 上下文实例对象
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getAppContext
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	getAppContext() : Context | null;


	/**
	 * 获取当前应用 栈顶的 Activity实例，对应android平台 getActivity 函数实现
	 * @return 当前应用栈顶的 Activity实例
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getUniActivity
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  	     	 "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	getUniActivity() : Activity | null;

  /**
   * 获取与当前页面绑定的activity对象，需要注意的是:当页面对象未与activity建立绑定关系时，可能为null
   * @return 当前页面绑定的activity示例
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getTopPageActivity
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  	     	 "uniVer": "4.0",
   * 		    	 "unixVer": "4.0"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 		    	 "unixVer": "x"
   *        }
   *    }
   * }
   */
  getTopPageActivity() : Activity | null;


	/**
	 * 获取资源文件的原生路径。
	 * @param resourceName 资源文件相对于工程的绝对路径, 如：“/static/logo.png”
	 * @return 该资源在原生目录下的路径
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getResourcePath
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  	    	 "uniVer": "√",
	 * 		    	 "unixVer": "3.9"
	 *        },
	 *        "ios": {
	 *           "osVer": "9.0",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	getResourcePath(resourceName: string) : string;


  /**
   * 获取对象的jvm class实例
   * @param input 任意不为空对象
   * @return 传入对象所对应的class实例
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getJavaClass
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  	    	 "uniVer": "4.0",
   * 		    	 "unixVer": "4.0"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  		     "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  getJavaClass(input: any) : Class;


  /**
   * 获取app 临时目录。
   * @return 返回app临时目录路径。存放在该文件可能会在应用退出后被清理
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getAppCachePath
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  	    	 "uniVer": "√",
   * 		    	 "unixVer": "3.99"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  		     "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  getAppCachePath() : string | null;


	/**
	 * 退出当前应用
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#exit
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  	    	 "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	exit() : void;



	/**
	 * 获取一个任务分发器实例
	 * @param threadName 任务组名称，可能为：
   * main: ui thread / dom: 仅uni-app x环境生效，uni-app 环境会自动切换到 ui
   * io : io thread
   * 匿名线程 null 或者 '': 来源线程，如果来源线程不支持任务分发，则会在当前线程执行执行. 这个场景下要求第一个参数必须是线程环境
   *
	 * @return 一个任务分发器，可以用于分发协程任务
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getDispatcher
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  	     	 "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	getDispatcher(threadName:string|null) : UTSTaskDispatcher;


	/**
	 * 获取当前运行的app的AppId。
	 * @return 当前运行的app的AppId。
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getAppId
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	getAppId() : string;


	/**
	 * 获取当前系统主题样式
	 * @return 系统主题样式 "dark":暗色模式  "light":亮色模式
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getOsTheme
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  	    	 "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	getOsTheme() : string;

	/**
	 * 获取当前运行环境是否是unimp。
	 * @return 是否是unimp。
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#isUniMp
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	isUniMp() : boolean;

	/**
	 * 获取manifest.json 中配置的应用名称
	 * @return 应用名称。
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getAppName
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	getAppName() : string;

	/**
	 * 获取manifest.json 中配置的应用版本信息
	 * @return 应用版本信息
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getAppVersion
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	getAppVersion() : UTSJSONObject;


	/**
	 * 获取引擎版本号。
	 * @return 引擎版本号。
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getInnerVersion
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  	    	 "uniVer": "√",
	 * 		    	 "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 		    	 "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	getInnerVersion() : string;


	/**
	 * 获取当前是否是uniapp x 环境
	 * @return uniapp x 环境 true, uniapp 环境： false。
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#isUniAppX
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "4.4",
	 *  		     "uniVer": "√",
	 * 			     "unixVer": "3.9+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  	    	 "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	isUniAppX() : boolean;

  /**
   * @deprecated 注意：已废弃，请使用 `uni.rpx2px` 替代
   *
   * rpx单位 转换为 逻辑像素px单位
   * @return 返回对应的逻辑像素值
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#rpx2px
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  		     "uniVer": "3.9+",
   * 			     "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  rpx2px(rpx:number) : number;


  /**
   * 当前应用是否已取得用户同意隐私协议
   * @return true 用户已同意 false 用户未同意
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#isPrivacyAgree
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5",
   *  		     "uniVer": "3.9+",
   * 			     "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  isPrivacyAgree() : boolean;


  /**
   * 设置当前应用是否已取得用户同意隐私协议
   * @param state true 用户已同意 false 用户未同意
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#setPrivacyAgree
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5",
   *  		     "uniVer": "3.9+",
   * 			     "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  setPrivacyAgree(state:boolean):void;


  /**
   * 重置当前应用至用户未同意隐私协议
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#resetPrivacyAgree
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5",
   *  		     "uniVer": "3.9+",
   * 			     "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  resetPrivacyAgree():void;


  /**
   * 请求系统权限
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#requestSystemPermission
   * @param requestPermission 期望请求的权限
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  		     "uniVer": "3.9+",
   * 			     "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  requestSystemPermission(
    context: Activity,
    requestPermission:Array<string>,
    success: (allRight:boolean, grantedList:Array<string>)=>void,
    fail: (doNotAskAgain:boolean, grantedList:Array<string>)=>void
  ):void;


  /**
   * 检查当前应用是否已经具备指定权限
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#checkSystemPermissionGranted
   * @param requestPermission 期望具备的权限
   * @return 请求的权限列表中是否已经具备
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  		     "uniVer": "3.9+",
   * 			     "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  checkSystemPermissionGranted(
    context: Activity,
    requestPermission:Array<string>
  ):boolean;

  /**
   * 跳转至系统权限手动设备列表
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#gotoSystemPermissionActivity
   * @param requestPermission 期望请求的权限
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  		     "uniVer": "3.9+",
   * 			     "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  gotoSystemPermissionActivity(
    context: Activity,
    requestPermission:Array<string>
  ):void;


  /**
   * 获取当前应用不具备的权限列表
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getSystemPermissionDenied
   * @param requestPermission 期望请求的权限
   * @return 请求的权限列表中已经被禁用的部分
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  		     "uniVer": "3.9+",
   * 			     "unixVer": "3.9+"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  getSystemPermissionDenied(
    context: Activity,
    requestPermission:Array<string>
  ):Array<string>;



  /**
   * 页面的rpx像素转换为页面的px像素
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#rpx2px
   * @param rpx 待转换的rpx
   * @return 转换后的px
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  		     "uniVer": "3.95",
   * 			     "unixVer": "3.95"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  rpx2px(
    rpx: number
  ):number;


  /**
   * 物理像素转换为页面的px像素
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#devicePX2px
   * @param devicePX 待转换的物理像素
   * @return 转换后的页面px
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  		     "uniVer": "3.95",
   * 			     "unixVer": "3.95"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  devicePX2px(
    devicePX: number
  ):number;


  /**
   * 将文件的项目相对地址转换为 运行期对应的绝对地址
   * eg.
   *    'static/logo.png' -> '/storage/sdcard/0/apps/com.xxxx/files/logo.png'
   *
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#convert2AbsFullPath
   * @param inputPath 待转换的文件相对路径
   * @return 转换后文件绝对路径
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  		     "uniVer": "3.9",
   * 			     "unixVer": "3.9"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  convert2AbsFullPath(
    inputPath: string
  ):string;


  /**
   * 将应用的私有文件 通过内置的FileProvider转换为外部应用可以访问的Uri
   *
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getFileProviderUri
   * @param file 待转换的私有文件
   * @return 转换后的Uri
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "4.4",
   *  		     "uniVer": "3.99",
   * 			     "unixVer": "3.99"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  getFileProviderUri(
    file: File
  ):Uri;


  /**
   * 获取指定service的指定provider实现
   *
   * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroid.html#getExtApiProvider
   * @param service 指定的服务名称
   * @param providerName 指定provider名称
   * @return 指定 provider 实例
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *           "osVer": "5.0",
   *  		     "uniVer": "4.14",
   * 			     "unixVer": "4.14"
   *        },
   *        "ios": {
   *           "osVer": "x",
   *  	    	 "uniVer": "x",
   * 			     "unixVer": "x"
   *        }
   *    }
   * }
   */
  getExtApiProvider<T>(
    service: string,
    providerName: string
  ):T | null;


}


declare var UTSAndroid : UTSAndroid;
