/// <reference path="android.d.ts"/>

declare module io {
  export module dcloud {
    export module uts {
      export module android {
        type Callback = () => void
        type RequestPermissionResultCallback = (
          requestCode: number,
          permissions: string[],
          grantResults: number[]
        ) => void
        type AppTrimMemoryCallback = (level: number) => void
        type AppConfigChangeCallback = (res: UTSJSONObject) => void
        type AppActivityResultCallback = (requestCode: Number, resultCode: Number, data?: globalAndroid.content.Intent) => void
        function getUniActivity(): globalAndroid.app.Activity
        function getAppContext(): globalAndroid.content.Context
        function getResourcePath(path: string): string
        function onAppActivityDestroy(callback: Callback): void
        function onAppActivityPause(callback: Callback): void
        function onAppActivityResume(callback: Callback): void
        function onAppActivityRequestPermissionsResult(
          callback: RequestPermissionResultCallback
        ): void
        function onAppTrimMemory(callback: AppTrimMemoryCallback): void
        function onAppConfigChange(callback: AppConfigChangeCallback): void
        function onAppActivityResult(callback: AppActivityResultCallback): void
      }
    }
  }
}
