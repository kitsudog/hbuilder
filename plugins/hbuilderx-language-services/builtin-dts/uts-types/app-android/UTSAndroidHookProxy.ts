import { Application } from 'android.app.Application';

interface UTSAndroidHookProxy {
	/**
	 * uts 插件创建时的回调。
   * 对应原生 Application onCreate 函数
	 * @tutorial https://uniapp.dcloud.net.cn/uts/UTSAndroidHookProxy.html#onCreate
	 * @uniPlatform {
	 *    "app": {
	 *        "android": {
	 *           "osVer": "5.0",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "3.97+"
	 *        },
	 *        "ios": {
	 *           "osVer": "x",
	 *  		     "uniVer": "x",
	 * 			     "unixVer": "x"
	 *        }
	 *    }
	 * }
	 */
	onCreate(application: Application) : void;

}


declare var UTSAndroidHookProxy : UTSAndroidHookProxy;