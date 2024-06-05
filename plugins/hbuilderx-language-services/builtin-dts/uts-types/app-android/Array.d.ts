interface Array<T> {


  /**
   * fromNative() 方法 从native 数据结构中 转换得到一个UTS环境下的Array对象
   * 支持传入的参数类型有: kotlin.collections.List/ kotlin.Array/kotlin.ByteArray/Kotlin.LongArray/Kotlin.IntArray 等
   * @tutorial https://uniapp.dcloud.net.cn/uts/buildin-object-api/Array.html#fromNative
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *  		      "uniVer": "√",
   * 			      "unixVer": "3.9.0"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *  		      "uniVer": "x",
   * 			      "unixVer": "x"
   *        }
   *    }
   * }
   */
  fromNative(input:kotlin.ByteArray|Kotlin.LongArray|Kotlin.IntArray|Kotlin.FloatArray|Kotlin.DoubleArray|Kotlin.ShortArray|Kotlin.CharArray|Kotlin.BooleanArray|kotlin.Array|kotlin.collections.List) : Array;

}

