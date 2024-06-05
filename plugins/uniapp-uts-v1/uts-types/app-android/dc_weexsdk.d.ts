/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module taobao {
		export module weex {
			export class BuildConfig {
				public static class: java.lang.Class<com.taobao.weex.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static buildJavascriptFrameworkVersion: string;
				public static buildVersion: string;
				public static isV8: boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class ComponentObserver {
				public static class: java.lang.Class<com.taobao.weex.ComponentObserver>;
				/**
				 * Constructs a new instance of the com.taobao.weex.ComponentObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreate(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
					onPreDestory(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
					onViewCreated(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: globalAndroid.view.View): void;
				});
				public constructor();
				public onCreate(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
				public onViewCreated(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: globalAndroid.view.View): void;
				public onPreDestory(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class IWXActivityStateListener {
				public static class: java.lang.Class<com.taobao.weex.IWXActivityStateListener>;
				/**
				 * Constructs a new instance of the com.taobao.weex.IWXActivityStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onActivityCreate(): void;
					onActivityStart(): void;
					onActivityPause(): void;
					onActivityResume(): void;
					onActivityStop(): void;
					onActivityDestroy(): void;
					onActivityBack(): boolean;
				});
				public constructor();
				public onActivityStop(): void;
				public onActivityPause(): void;
				public onActivityStart(): void;
				public onActivityBack(): boolean;
				public onActivityResume(): void;
				public onActivityCreate(): void;
				public onActivityDestroy(): void;
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class IWXInstanceContainerOnSizeListener {
				public static class: java.lang.Class<com.taobao.weex.IWXInstanceContainerOnSizeListener>;
				/**
				 * Constructs a new instance of the com.taobao.weex.IWXInstanceContainerOnSizeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSizeChanged(param0: string, param1: number, param2: number, param3: boolean, param4: boolean): void;
				});
				public constructor();
				public onSizeChanged(param0: string, param1: number, param2: number, param3: boolean, param4: boolean): void;
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class IWXRenderListener {
				public static class: java.lang.Class<com.taobao.weex.IWXRenderListener>;
				/**
				 * Constructs a new instance of the com.taobao.weex.IWXRenderListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onViewCreated(param0: com.taobao.weex.WXSDKInstance, param1: globalAndroid.view.View): void;
					onRenderSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
					onRefreshSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
					onException(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string): void;
				});
				public constructor();
				public onRefreshSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
				public onException(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string): void;
				public onViewCreated(param0: com.taobao.weex.WXSDKInstance, param1: globalAndroid.view.View): void;
				public onRenderSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class IWXStatisticsListener {
				public static class: java.lang.Class<com.taobao.weex.IWXStatisticsListener>;
				/**
				 * Constructs a new instance of the com.taobao.weex.IWXStatisticsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSDKEngineInitialize(): void;
					onJsFrameworkStart(): void;
					onJsFrameworkReady(): void;
					onFirstView(): void;
					onFirstScreen(): void;
					onHttpStart(): void;
					onHeadersReceived(): void;
					onHttpFinish(): void;
					onException(param0: string, param1: string, param2: string): void;
				});
				public constructor();
				public onException(param0: string, param1: string, param2: string): void;
				public onJsFrameworkStart(): void;
				public onFirstScreen(): void;
				public onHttpStart(): void;
				public onHeadersReceived(): void;
				public onFirstView(): void;
				public onSDKEngineInitialize(): void;
				public onHttpFinish(): void;
				public onJsFrameworkReady(): void;
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class InitConfig {
				public static class: java.lang.Class<com.taobao.weex.InitConfig>;
				public setClassLoaderAdapter(param0: com.taobao.weex.adapter.ClassLoaderAdapter): com.taobao.weex.InitConfig;
				public getIWXSoLoaderAdapter(): com.taobao.weex.adapter.IWXSoLoaderAdapter;
				public getClassLoaderAdapter(): com.taobao.weex.adapter.ClassLoaderAdapter;
				public getUtAdapter(): com.taobao.weex.adapter.IWXUserTrackAdapter;
				public getFramework(): string;
				public getURIAdapter(): com.taobao.weex.adapter.URIAdapter;
				public getHttpAdapter(): com.taobao.weex.adapter.IWXHttpAdapter;
				public getJscProcessManager(): com.taobao.weex.adapter.IWXJscProcessManager;
				public getApmGenerater(): com.taobao.weex.performance.IApmGenerator;
				public getDrawableLoader(): com.taobao.weex.adapter.IDrawableLoader;
				public getJsFileLoaderAdapter(): com.taobao.weex.adapter.IWXJsFileLoaderAdapter;
				public getStorageAdapter(): com.taobao.weex.appfram.storage.IWXStorageAdapter;
				public getJSExceptionAdapter(): com.taobao.weex.adapter.IWXJSExceptionAdapter;
				public getWebSocketAdapterFactory(): com.taobao.weex.appfram.websocket.IWebSocketAdapterFactory;
				public getImgAdapter(): com.taobao.weex.adapter.IWXImgLoaderAdapter;
			}
			export module InitConfig {
				export class Builder {
					public static class: java.lang.Class<com.taobao.weex.InitConfig.Builder>;
					public setImgAdapter(param0: com.taobao.weex.adapter.IWXImgLoaderAdapter): com.taobao.weex.InitConfig.Builder;
					public setFramework(param0: string): com.taobao.weex.InitConfig.Builder;
					public setApmGenerater(param0: com.taobao.weex.performance.IApmGenerator): com.taobao.weex.InitConfig.Builder;
					public setUtAdapter(param0: com.taobao.weex.adapter.IWXUserTrackAdapter): com.taobao.weex.InitConfig.Builder;
					public setHttpAdapter(param0: com.taobao.weex.adapter.IWXHttpAdapter): com.taobao.weex.InitConfig.Builder;
					public setClassLoaderAdapter(param0: com.taobao.weex.adapter.ClassLoaderAdapter): com.taobao.weex.InitConfig.Builder;
					public setJscProcessManager(param0: com.taobao.weex.adapter.IWXJscProcessManager): com.taobao.weex.InitConfig.Builder;
					public setWebSocketAdapterFactory(param0: com.taobao.weex.appfram.websocket.IWebSocketAdapterFactory): com.taobao.weex.InitConfig.Builder;
					public setDrawableLoader(param0: com.taobao.weex.adapter.IDrawableLoader): com.taobao.weex.InitConfig.Builder;
					public setSoLoader(param0: com.taobao.weex.adapter.IWXSoLoaderAdapter): com.taobao.weex.InitConfig.Builder;
					public addNativeLibrary(param0: string): com.taobao.weex.InitConfig.Builder;
					public setStorageAdapter(param0: com.taobao.weex.appfram.storage.IWXStorageAdapter): com.taobao.weex.InitConfig.Builder;
					public constructor();
					public setJsFileLoaderAdapter(param0: com.taobao.weex.adapter.IWXJsFileLoaderAdapter): com.taobao.weex.InitConfig.Builder;
					public setJSExceptionAdapter(param0: com.taobao.weex.adapter.IWXJSExceptionAdapter): com.taobao.weex.InitConfig.Builder;
					public setURIAdapter(param0: com.taobao.weex.adapter.URIAdapter): com.taobao.weex.InitConfig.Builder;
					public build(): com.taobao.weex.InitConfig;
					public getJscProcessManager(): com.taobao.weex.adapter.IWXJscProcessManager;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class RenderContainer extends com.taobao.weex.render.WXAbstractRenderContainer implements com.taobao.weex.WeexFrameRateControl.VSyncListener {
				public static class: java.lang.Class<com.taobao.weex.RenderContainer>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onDetachedFromWindow(): void;
				public dispatchWindowVisibilityChanged(param0: number): void;
				public OnVSync(): void;
				public onAttachedToWindow(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class Script {
				public static class: java.lang.Class<com.taobao.weex.Script>;
				public constructor(param0: androidNative.Array<number>);
				public getBinary(): androidNative.Array<number>;
				public getContent(): string;
				public length(): number;
				public isEmpty(): boolean;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class WXEnvironment {
				public static class: java.lang.Class<com.taobao.weex.WXEnvironment>;
				public static OS: string;
				public static SYS_VERSION: string;
				public static SYS_MODEL: string;
				public static EAGLE: string;
				public static ENVIRONMENT: string;
				public static WEEX_CURRENT_KEY: string;
				public static JS_LIB_SDK_VERSION: string;
				public static WXSDK_VERSION: string;
				public static sApplication: globalAndroid.app.Application;
				public static DEV_Id: string;
				public static sDefaultWidth: number;
				public static JsFrameworkInit: boolean;
				public static SETTING_EXCLUDE_X86SUPPORT: string;
				public static SETTING_FORCE_VERTICAL_SCREEN: boolean;
				public static AUTO_ADJUST_ENV_DEVICE_WIDTH: boolean;
				public static AUTO_UPDATE_APPLICATION_SCREEN_SIZE: boolean;
				public static sUseRunTimeApi: boolean;
				public static sDebugMode: boolean;
				public static sForceEnableDevTool: boolean;
				public static sDebugWsUrl: string;
				public static sDebugServerConnectable: boolean;
				public static sRemoteDebugMode: boolean;
				public static sRemoteDebugProxyUrl: string;
				public static sDebugNetworkEventReporterEnable: boolean;
				public static sJSLibInitTime: number;
				public static sSDKInitStart: number;
				public static sSDKInitInvokeTime: number;
				public static sSDKInitExecuteTime: number;
				public static sSDKInitTime: number;
				public static sJSFMStartListenerTime: number;
				public static isWsFixMode: boolean;
				public static sComponentsAndModulesReadyTime: number;
				public static sInAliWeex: boolean;
				public static sLogLevel: io.dcloud.feature.uniapp.utils.AbsLogLevel;
				public static CORE_SO_NAME: string;
				public static CORE_JSS_SO_NAME: string;
				public static CORE_JSB_SO_NAME: string;
				public static CORE_JST_SO_NAME: string;
				public static CORE_JSC_SO_NAME: string;
				public static CORE_JSS_RUNTIME_SO_PATH: string;
				public static CORE_JSB_SO_PATH: string;
				public static sDynamicMode: boolean;
				public static sDynamicUrl: string;
				public static isPerf(): boolean;
				public static getGlobalFontFamilyName(): string;
				public static addCustomOptions(param0: string, param1: string): void;
				public static getCacheDir(): string;
				public static setViewProt(param0: number): void;
				public static isCPUSupport(): boolean;
				public static getApplication(): globalAndroid.app.Application;
				public static getFilesDir(param0: globalAndroid.content.Context): string;
				public static getDefaultSettingValue(param0: string, param1: string): string;
				public static getCustomOptions(param0: string): string;
				public constructor();
				/** @deprecated */
				public static isSupport(): boolean;
				public static getLibJScRealPath(): string;
				/** @deprecated */
				public static getCustomOptions(): java.util.Map<string,string>;
				public static setOpenDebugLog(param0: boolean): void;
				public static getWXDefaultSettings(): com.taobao.weex.WXEnvironment.WXDefaultSettings;
				public static isApkDebugable(): boolean;
				public static getLibJssRealPath(): string;
				public static getViewProt(): number;
				/** @deprecated */
				public static isHardwareSupport(): boolean;
				public static isOpenDebugLog(): boolean;
				public static isLayoutDirectionRTL(): boolean;
				public static setApkDebugable(param0: boolean): void;
				public static getLibLdPath(): string;
				public static copySoDesDir(): string;
				public static findSoPath(param0: string): string;
				public static extractSo(): boolean;
				public static writeDefaultSettingsValue(param0: string, param1: string): void;
				public static getCrashFilePath(param0: globalAndroid.content.Context): string;
				public static getLibJssIcuPath(): string;
				public static isApkDebugable(param0: globalAndroid.app.Application): boolean;
				public static getDiskCacheDir(param0: globalAndroid.content.Context): string;
				public static setGlobalFontFamily(param0: string, param1: globalAndroid.graphics.Typeface): void;
				public static getConfig(): java.util.Map<string,string>;
				public static getAppVersionName(): string;
				public initMetrics(): void;
			}
			export module WXEnvironment {
				export class WXDefaultSettings {
					public static class: java.lang.Class<com.taobao.weex.WXEnvironment.WXDefaultSettings>;
					public saveValue(param0: string, param1: string): void;
					public getValue(param0: string, param1: string): string;
					public constructor(param0: globalAndroid.app.Application);
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class WXGlobalEventModule extends com.taobao.weex.common.WXModule {
				public static class: java.lang.Class<com.taobao.weex.WXGlobalEventModule>;
				public addEventListener(param0: string, param1: string): void;
				public removeEventListener(param0: string): void;
				public addEventListener(param0: string, param1: string, param2: java.util.Map<string,any>): void;
				public removeEventListener(param0: string, param1: string): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class WXGlobalEventReceiver {
				public static class: java.lang.Class<com.taobao.weex.WXGlobalEventReceiver>;
				public static EVENT_NAME: string;
				public static EVENT_PARAMS: string;
				public static EVENT_ACTION: string;
				public static EVENT_WX_INSTANCEID: string;
				public constructor(param0: com.taobao.weex.WXSDKInstance);
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class WXHttpListener extends com.taobao.weex.adapter.IWXHttpAdapter.OnHttpListener {
				public static class: java.lang.Class<com.taobao.weex.WXHttpListener>;
				public isPreDownLoadMode: boolean;
				public getInstance(): com.taobao.weex.WXSDKInstance;
				public onHttpFinish(param0: com.taobao.weex.common.WXResponse): void;
				public onInstanceReady(): void;
				public onHeadersReceived(param0: number, param1: java.util.Map<string,java.util.List<string>>): void;
				public setSDKInstance(param0: com.taobao.weex.WXSDKInstance): void;
				public onHttpResponseProgress(param0: number): void;
				public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
				public onHttpStart(): void;
				public onSuccess(param0: com.taobao.weex.common.WXResponse): void;
				public onFail(param0: com.taobao.weex.common.WXResponse): void;
				public constructor(param0: com.taobao.weex.WXSDKInstance);
				public onHttpUploadProgress(param0: number): void;
				public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: java.util.Map<string,any>, param3: string, param4: com.taobao.weex.common.WXRenderStrategy, param5: number);
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class WXSDKEngine extends io.dcloud.feature.uniapp.AbsSDKEngine {
				public static class: java.lang.Class<com.taobao.weex.WXSDKEngine>;
				public static JS_FRAMEWORK_RELOAD: string;
				public static registerComponent(param0: string, param1: java.lang.Class<any>, param2: boolean): boolean;
				public static registerComponent(param0: java.lang.Class<any>, param1: boolean, param2: androidNative.Array<string>): boolean;
				public static registerModule(param0: string, param1: com.taobao.weex.bridge.ModuleFactory<any>, param2: boolean): boolean;
				public static getNavigator(): com.taobao.weex.appfram.navigator.INavigator;
				public static addCustomOptions(param0: string, param1: string): void;
				public static getIWXHttpAdapter(): com.taobao.weex.adapter.IWXHttpAdapter;
				public static registerCoreEnv(param0: string, param1: string): void;
				/** @deprecated */
				public static init(param0: globalAndroid.app.Application, param1: com.taobao.weex.adapter.IWXUserTrackAdapter): void;
				/** @deprecated */
				public static init(param0: globalAndroid.app.Application): void;
				public constructor();
				public static getIWXStorageAdapter(): com.taobao.weex.appfram.storage.IWXStorageAdapter;
				public static initialize(param0: globalAndroid.app.Application, param1: com.taobao.weex.InitConfig): void;
				public static isSoInitialized(): boolean;
				public static reload(): void;
				public static setJSExcetptionAdapter(param0: com.taobao.weex.adapter.IWXJSExceptionAdapter): void;
				public static setNavigator(param0: com.taobao.weex.appfram.navigator.INavigator): void;
				public static getIWXImgLoaderAdapter(): com.taobao.weex.adapter.IWXImgLoaderAdapter;
				public static reload(param0: globalAndroid.content.Context, param1: string, param2: boolean): void;
				public static restartBridge(param0: boolean): void;
				/** @deprecated */
				public static init(param0: globalAndroid.app.Application, param1: com.taobao.weex.adapter.IWXUserTrackAdapter, param2: string): void;
				public static registerComponent(param0: string, param1: java.lang.Class<any>): boolean;
				public static getDrawableLoader(): com.taobao.weex.adapter.IDrawableLoader;
				public static getActivityNavBarSetter(): com.taobao.weex.appfram.navigator.IActivityNavBarSetter;
				public static setActivityNavBarSetter(param0: com.taobao.weex.appfram.navigator.IActivityNavBarSetter): void;
				public static isInitialized(): boolean;
				public static registerComponent(param0: java.util.Map<string,any>, param1: java.lang.Class<any>): boolean;
				public static registerModuleWithFactory(param0: string, param1: com.taobao.weex.ui.IExternalModuleGetter, param2: boolean): boolean;
				public static reload(param0: globalAndroid.content.Context, param1: boolean): void;
				public static registerComponent(param0: com.taobao.weex.ui.IFComponentHolder, param1: boolean, param2: androidNative.Array<string>): boolean;
				public static restartWeex(): void;
				public static callback(param0: string, param1: string, param2: java.util.Map<string,any>): void;
				public static getIWXUserTrackAdapter(): com.taobao.weex.adapter.IWXUserTrackAdapter;
				public static unRegisterService(param0: string): boolean;
				public static registerService(param0: string, param1: string, param2: java.util.Map<string,any>): boolean;
				public static registerModuleWithFactory(param0: string, param1: com.taobao.weex.WXSDKEngine.DestroyableModuleFactory<any>, param2: boolean): boolean;
				public static registerModule(param0: string, param1: java.lang.Class<any>): boolean;
				public static getIWXJsFileLoaderAdapter(): com.taobao.weex.adapter.IWXJsFileLoaderAdapter;
				public static registerModule(param0: string, param1: java.lang.Class<any>, param2: boolean): boolean;
				/** @deprecated */
				public static init(param0: globalAndroid.app.Application, param1: string, param2: com.taobao.weex.adapter.IWXUserTrackAdapter, param3: com.taobao.weex.adapter.IWXImgLoaderAdapter, param4: com.taobao.weex.adapter.IWXHttpAdapter): void;
				public static registerComponent(param0: string, param1: com.taobao.weex.ui.IExternalComponentGetter, param2: boolean): boolean;
			}
			export module WXSDKEngine {
				export abstract class DestroyableModule extends com.taobao.weex.common.WXModule implements com.taobao.weex.common.Destroyable {
					public static class: java.lang.Class<com.taobao.weex.WXSDKEngine.DestroyableModule>;
					public destroy(): void;
					public constructor();
				}
				export abstract class DestroyableModuleFactory<T>  extends com.taobao.weex.common.TypeModuleFactory<any> {
					public static class: java.lang.Class<com.taobao.weex.WXSDKEngine.DestroyableModuleFactory<any>>;
					public constructor(param0: java.lang.Class<any>);
					public buildInstance(): any;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class WXSDKInstance extends io.dcloud.feature.uniapp.AbsSDKInstance {
				public static class: java.lang.Class<com.taobao.weex.WXSDKInstance>;
				public static ACTION_DEBUG_INSTANCE_REFRESH: string;
				public static ACTION_INSTANCE_RELOAD: string;
				public mEnd: boolean;
				public mHasCreateFinish: boolean;
				public static BUNDLE_URL: string;
				public mContext: globalAndroid.content.Context;
				public static requestUrl: string;
				public isNewFsEnd: boolean;
				public bundleType: com.taobao.weex.bridge.WXBridgeManager.BundType;
				public mRenderStartNanos: number;
				public mExecJSTraceId: number;
				public mwxDims: androidNative.Array<string>;
				public measureTimes: androidNative.Array<number>;
				public templateRef: java.lang.ref.WeakReference<string>;
				public responseHeaders: java.util.Map<string,java.util.List<string>>;
				public mRenderStartTime: number;
				public mTimeCalculator: com.taobao.weex.utils.tools.TimeCalculator;
				public hiddenEmbeds: java.util.PriorityQueue<com.taobao.weex.ui.component.WXEmbed>;
				public getMaxDeepLayer(): number;
				public onSupportNavigateUp(): boolean;
				public setonSizeChangedRnder(param0: boolean): void;
				public getComponentsExceedGPULimit(): java.util.List<com.alibaba.fastjson.JSONObject>;
				public setDeviceDisplayOfPage(param0: number, param1: number): void;
				public isNeedReLoad(): boolean;
				public onActivityStart(): void;
				/** @deprecated */
				public registerScrollViewListener(param0: com.taobao.weex.ui.view.WXScrollView.WXScrollViewListener): void;
				public render(param0: string, param1: java.util.Map<string,any>, param2: string): void;
				/** @deprecated */
				public reloadImages(): void;
				public renderByUrl(param0: string, param1: string, param2: java.util.Map<string,any>, param3: string, param4: com.taobao.weex.common.WXRenderStrategy): void;
				public skipFrameworkInit(): boolean;
				public fireModuleEvent(param0: string, param1: com.taobao.weex.common.WXModule, param2: java.util.Map<string,any>): void;
				public setWXInstanceContainerOnSizeListener(param0: com.taobao.weex.IWXInstanceContainerOnSizeListener): void;
				public getInstanceOnFireEventInterceptorList(): java.util.List<com.taobao.weex.instance.InstanceOnFireEventInterceptor>;
				public addFrameViewEventListener(param0: com.taobao.weex.WXSDKInstance.FrameViewEventListener): void;
				public getCustomFontNetworkHandler(): com.taobao.weex.WXSDKInstance.CustomFontNetworkHandler;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				/** @deprecated */
				public registerActivityStateListener(param0: com.taobao.weex.IWXActivityStateListener): void;
				public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
				public setDefaultFontSize(param0: number): void;
				public removeUserTrackParameter(param0: string): void;
				public isFullScreenHeightEnabled(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public runOnUiThread(param0: java.lang.Runnable): void;
				public setBundleUrl(param0: string): void;
				public setContext(param0: globalAndroid.content.Context): void;
				public getInstanceId(): string;
				public addUserTrackParameter(param0: string, param1: java.io.Serializable): void;
				public isTrackComponent(): boolean;
				public destroy(): void;
				public onActivityPause(): void;
				public setRenderStartTime(param0: number): void;
				public setTrackComponent(param0: boolean): void;
				public setComponentObserver(param0: com.taobao.weex.ComponentObserver): void;
				/** @deprecated */
				public render(param0: string, param1: java.util.Map<string,any>, param2: string, param3: com.taobao.weex.common.WXRenderStrategy): void;
				public getBundleUrl(): string;
				public onCreateFinish(): void;
				public registerBackPressedHandler(param0: com.taobao.weex.WXSDKInstance.OnBackPressedHandler): void;
				public render(param0: string, param1: com.taobao.weex.Script, param2: java.util.Map<string,any>, param3: string, param4: com.taobao.weex.common.WXRenderStrategy): void;
				public createInstanceFuncHeartBeat(): void;
				public render(param0: string, param1: string, param2: java.util.Map<string,any>, param3: string, param4: com.taobao.weex.common.WXRenderStrategy): void;
				/** @deprecated */
				public render(param0: string, param1: string, param2: java.util.Map<string,any>, param3: string, param4: number, param5: number, param6: com.taobao.weex.common.WXRenderStrategy): void;
				/** @deprecated */
				public getScrollViewListener(): com.taobao.weex.ui.view.WXScrollView.WXScrollViewListener;
				public onRenderError(param0: string, param1: string): void;
				public onRenderSuccess(param0: number, param1: number): void;
				public isAutoAdjustDeviceWidth(): boolean;
				public setContainerInfo(param0: string, param1: string): void;
				public refreshInstance(param0: string): void;
				public setImmersive(param0: boolean): void;
				public getComponentObserver(): com.taobao.weex.ComponentObserver;
				public onInstanceReady(): void;
				public getRenderStrategy(): com.taobao.weex.common.WXRenderStrategy;
				public isPreRenderMode(): boolean;
				public render(param0: string): void;
				public getURIAdapter(): com.taobao.weex.adapter.URIAdapter;
				public isImmersive(): boolean;
				public getRenderType(): string;
				public setImageNetworkHandler(param0: com.taobao.weex.WXSDKInstance.ImageNetworkHandler): void;
				public preInit(param0: string, param1: string, param2: java.util.Map<string,any>, param3: string, param4: com.taobao.weex.common.WXRenderStrategy): void;
				public setComponentsInfoExceedGPULimit(param0: com.alibaba.fastjson.JSONObject): void;
				/** @deprecated */
				public render(param0: string, param1: number, param2: number): void;
				public getStreamNetworkHandler(): com.taobao.weex.WXSDKInstance.StreamNetworkHandler;
				public getParentInstance(): com.taobao.weex.WXSDKInstance;
				public getContainerView(): globalAndroid.view.View;
				public getContext(): globalAndroid.content.Context;
				public registerActionbarHandler(param0: com.taobao.weex.WXSDKInstance.ActionBarHandler): void;
				public registerRenderListener(param0: com.taobao.weex.IWXRenderListener): void;
				public removeEventListener(param0: string): void;
				public getInstanceViewPortWidth(): number;
				public setInstanceViewPortWidth(param0: number): void;
				public setNestedInstanceInterceptor(param0: com.taobao.weex.WXSDKInstance.NestedInstanceInterceptor): void;
				public removeLayerOverFlowListener(param0: string): void;
				public setTemplate(param0: string): void;
				public isFrameViewShow(): boolean;
				public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>, param4: java.util.List<any>): void;
				public addEventListener(param0: string, param1: string): void;
				public isCompilerWithUniapp(): boolean;
				public setInstanceViewPortWidth(param0: number, param1: boolean): void;
				public onActivityStop(): void;
				public constructor(param0: globalAndroid.content.Context);
				public removeInActiveAddElmentAction(param0: string): void;
				public setWXAbstractRenderContainer(param0: com.taobao.weex.render.WXAbstractRenderContainer): void;
				public getDrawableLoader(): com.taobao.weex.adapter.IDrawableLoader;
				public registerOnWXScrollListener(param0: com.taobao.weex.common.OnWXScrollListener): void;
				public getRootComponent(): com.taobao.weex.ui.component.WXComponent<any>;
				public removeFrameViewEventListener(param0: com.taobao.weex.WXSDKInstance.FrameViewEventListener): void;
				public rewriteUri(param0: globalAndroid.net.Uri, param1: string): globalAndroid.net.Uri;
				public isHasException(): boolean;
				public isPreDownLoad(): boolean;
				public getContainerInfo(): java.util.Map<string,string>;
				public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public fireEvent(param0: string, param1: string): void;
				public getImageNetworkHandler(): com.taobao.weex.WXSDKInstance.ImageNetworkHandler;
				public isPreInitMode(): boolean;
				public removeFixedView(param0: globalAndroid.view.View): void;
				public moveFixedView(param0: globalAndroid.view.View): void;
				public getWeexHeight(): number;
				public refreshInstance(param0: java.util.Map<string,any>): void;
				public getOriginalContext(): globalAndroid.content.Context;
				public getUIContext(): globalAndroid.content.Context;
				public getImgLoaderAdapter(): com.taobao.weex.adapter.IWXImgLoaderAdapter;
				public getRootView(): globalAndroid.view.View;
				public onJSException(param0: string, param1: string, param2: string): void;
				public getLayerOverFlowListeners(): java.util.List<string>;
				/** @deprecated */
				public renderByUrl(param0: string, param1: string, param2: java.util.Map<string,any>, param3: string, param4: number, param5: number, param6: com.taobao.weex.common.WXRenderStrategy): void;
				public callActionAddElementTime(param0: number): void;
				public setEnableFullScreenHeight(param0: boolean): void;
				public removeEventListener(param0: string, param1: string): void;
				public init(param0: globalAndroid.content.Context): void;
				public onBackPressed(): boolean;
				public onOldFsRenderTimeLogic(): void;
				public setAutoAdjustDeviceWidth(param0: boolean): void;
				public getNativeInvokeHelper(): com.taobao.weex.bridge.NativeInvokeHelper;
				public setSize(param0: number, param1: number): void;
				public onActivityResume(): void;
				public addInActiveAddElementAction(param0: string, param1: com.taobao.weex.ui.action.GraphicActionAddElement): void;
				public getWeexWidth(): number;
				public setCustomFontNetworkHandler(param0: com.taobao.weex.WXSDKInstance.CustomFontNetworkHandler): void;
				public isNeedValidate(): boolean;
				public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>): void;
				public getInstanceViewPortWidthWithFloat(): number;
				public callJsTime(param0: number): void;
				public onRootCreated(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
				public onShowAnimationEnd(): void;
				public getWXHttpAdapter(): com.taobao.weex.adapter.IWXHttpAdapter;
				public getDefaultFontSize(): number;
				public getTemplateInfo(): string;
				public setRootScrollView(param0: globalAndroid.widget.ScrollView): void;
				public reloadPage(param0: boolean): void;
				public registerStatisticsListener(param0: com.taobao.weex.IWXStatisticsListener): void;
				public getContentBoxMeasurement(param0: number): com.taobao.weex.layout.ContentBoxMeasurement;
				public setMaxDomDeep(param0: number): void;
				public reloadImages(): void;
				public onActivityBack(): boolean;
				public getWXPerformance(): com.taobao.weex.common.WXPerformance;
				public unRegisterActionbarHandler(param0: com.taobao.weex.WXSDKInstance.ActionBarHandler): void;
				public getWXStatisticsListener(): com.taobao.weex.IWXStatisticsListener;
				public getRenderContainerPaddingRight(): number;
				public checkModuleEventRegistered(param0: string, param1: com.taobao.weex.common.WXModule): boolean;
				public addContentBoxMeasurement(param0: number, param1: com.taobao.weex.layout.ContentBoxMeasurement): void;
				public setHasException(param0: boolean): void;
				public createNestedInstance(param0: com.taobao.weex.ui.component.NestedContainer): com.taobao.weex.WXSDKInstance;
				public setMaxDeepLayer(param0: number): void;
				public isViewDisAppear(): boolean;
				public onComponentCreate(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
				public resetDeviceDisplayOfPage(): void;
				public onViewAppear(): void;
				public fireGlobalEventCallback(param0: string, param1: java.util.Map<string,any>): void;
				public setMaxHiddenEmbedsNum(param0: number): void;
				/** @deprecated */
				public setIWXUserTrackAdapter(param0: com.taobao.weex.adapter.IWXUserTrackAdapter): void;
				public onActivityCreate(): void;
				public removeOnInstanceVisibleListener(param0: com.taobao.weex.WXSDKInstance.OnInstanceVisibleListener): void;
				public setRenderType(param0: string): void;
				public render(param0: string, param1: androidNative.Array<number>, param2: java.util.Map<string,any>, param3: string): void;
				public getFlatUIContext(): com.taobao.weex.ui.flat.FlatGUIContext;
				public isUseScroller(): boolean;
				public newNestedInstance(): com.taobao.weex.WXSDKInstance;
				public OnVSync(): void;
				/** @deprecated */
				public setBundleUrl(param0: string): void;
				public constructor();
				public setUseScroller(param0: boolean): void;
				public getRenderContainerPaddingLeft(): number;
				public onHttpStart(): void;
				public getTemplate(): string;
				public onViewDisappear(): void;
				public getWXScrollListeners(): java.util.List<com.taobao.weex.common.OnWXScrollListener>;
				public setRenderContainer(param0: com.taobao.weex.RenderContainer): void;
				public addOnInstanceVisibleListener(param0: com.taobao.weex.WXSDKInstance.OnInstanceVisibleListener): void;
				public setPageKeepRawCssStyles(): void;
				public firstScreenCreateInstanceTime(param0: number): void;
				public preDownLoad(param0: string, param1: java.util.Map<string,any>, param2: string, param3: com.taobao.weex.common.WXRenderStrategy): void;
				public getInActiveAddElementAction(param0: string): com.taobao.weex.ui.action.GraphicActionAddElement;
				public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
				public onActivityDestroy(): void;
				public setUseSandBox(param0: boolean): void;
				public setStreamNetworkHandler(param0: com.taobao.weex.WXSDKInstance.StreamNetworkHandler): void;
				/** @deprecated */
				public setBizType(param0: string): void;
				public enableLayerType(param0: boolean): void;
				public getScrollView(): globalAndroid.widget.ScrollView;
				public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>, param4: java.util.List<any>, param5: com.taobao.weex.bridge.EventResult): void;
				public onLayoutChange(param0: globalAndroid.view.View): void;
				public reloadPageLayout(): void;
				public isOnSizeChangedRender(): boolean;
				public isLayerTypeEnabled(): boolean;
				public isDestroy(): boolean;
				public isContentMd5Match(): boolean;
				public setNeedLoad(param0: boolean): void;
				public clearUserTrackParameters(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.Context);
				public onRefreshSuccess(param0: number, param1: number): void;
				public setPreRenderMode(param0: boolean): void;
				public setParentInstance(param0: com.taobao.weex.WXSDKInstance): void;
				public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
				public addInstanceOnFireEventInterceptor(param0: com.taobao.weex.instance.InstanceOnFireEventInterceptor): void;
				public addLayerOverFlowListener(param0: string): void;
				public getMaxHiddenEmbedsNum(): number;
				public getRenderContainerPaddingTop(): number;
				public unRegisterBackPressedHandler(param0: com.taobao.weex.WXSDKInstance.OnBackPressedHandler): void;
				public getApmForInstance(): com.taobao.weex.performance.WXInstanceApm;
				public getUserTrackParams(): java.util.Map<string,java.io.Serializable>;
				public getWXWebSocketAdapter(): com.taobao.weex.appfram.websocket.IWebSocketAdapter;
				public onUpdateFinish(): void;
				public onChangeElement(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
			}
			export module WXSDKInstance {
				export class ActionBarHandler {
					public static class: java.lang.Class<com.taobao.weex.WXSDKInstance.ActionBarHandler>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WXSDKInstance$ActionBarHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSupportNavigateUp(): boolean;
					});
					public constructor();
					public onSupportNavigateUp(): boolean;
				}
				export class CustomFontNetworkHandler {
					public static class: java.lang.Class<com.taobao.weex.WXSDKInstance.CustomFontNetworkHandler>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WXSDKInstance$CustomFontNetworkHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchLocal(param0: string): string;
					});
					public constructor();
					public fetchLocal(param0: string): string;
				}
				export class FrameViewEventListener {
					public static class: java.lang.Class<com.taobao.weex.WXSDKInstance.FrameViewEventListener>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WXSDKInstance$FrameViewEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onShowAnimationEnd(): void;
					});
					public constructor();
					public onShowAnimationEnd(): void;
				}
				export class ImageNetworkHandler {
					public static class: java.lang.Class<com.taobao.weex.WXSDKInstance.ImageNetworkHandler>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WXSDKInstance$ImageNetworkHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchLocal(param0: string): string;
					});
					public constructor();
					public fetchLocal(param0: string): string;
				}
				export class NestedInstanceInterceptor {
					public static class: java.lang.Class<com.taobao.weex.WXSDKInstance.NestedInstanceInterceptor>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WXSDKInstance$NestedInstanceInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreateNestInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.NestedContainer): void;
					});
					public constructor();
					public onCreateNestInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.NestedContainer): void;
				}
				export class OnBackPressedHandler {
					public static class: java.lang.Class<com.taobao.weex.WXSDKInstance.OnBackPressedHandler>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WXSDKInstance$OnBackPressedHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBackPressed(): boolean;
					});
					public constructor();
					public onBackPressed(): boolean;
				}
				export class OnInstanceVisibleListener {
					public static class: java.lang.Class<com.taobao.weex.WXSDKInstance.OnInstanceVisibleListener>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WXSDKInstance$OnInstanceVisibleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAppear(): void;
						onDisappear(): void;
					});
					public constructor();
					public onAppear(): void;
					public onDisappear(): void;
				}
				export class StreamNetworkHandler {
					public static class: java.lang.Class<com.taobao.weex.WXSDKInstance.StreamNetworkHandler>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WXSDKInstance$StreamNetworkHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchLocal(param0: string): string;
					});
					public constructor();
					public fetchLocal(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class WXSDKManager {
				public static class: java.lang.Class<com.taobao.weex.WXSDKManager>;
				public needInitV8(): boolean;
				public static getInstance(): com.taobao.weex.WXSDKManager;
				public registerComponents(param0: java.util.List<java.util.Map<string,any>>): void;
				public setNeedInitV8(param0: boolean): void;
				public notifySerializeCodeCache(): void;
				public getClassLoaderAdapter(): com.taobao.weex.adapter.ClassLoaderAdapter;
				public getAllInstanceMap(): java.util.Map<string,com.taobao.weex.WXSDKInstance>;
				public getURIAdapter(): com.taobao.weex.adapter.URIAdapter;
				public getActivityNavBarSetter(): com.taobao.weex.appfram.navigator.IActivityNavBarSetter;
				public initScriptsFramework(param0: string): void;
				public getIWXImgLoaderAdapter(): com.taobao.weex.adapter.IWXImgLoaderAdapter;
				public registerInstanceLifeCycleCallbacks(param0: com.taobao.weex.WXSDKManager.InstanceLifeCycleCallbacks): void;
				public onSDKEngineInitialize(): void;
				public getWXAnalyzerList(): java.util.List<com.taobao.weex.performance.IWXAnalyzer>;
				public setAccessibilityRoleAdapter(param0: com.taobao.weex.adapter.IWXAccessibilityRoleAdapter): void;
				public getIWXWebSocketAdapter(): com.taobao.weex.appfram.websocket.IWebSocketAdapter;
				public getTracingAdapter(): com.taobao.weex.adapter.ITracingAdapter;
				public setCrashInfoReporter(param0: com.taobao.weex.adapter.ICrashInfoReporter): void;
				public restartBridge(): void;
				public setTracingAdapter(param0: com.taobao.weex.adapter.ITracingAdapter): void;
				public getIWXSoLoaderAdapter(): com.taobao.weex.adapter.IWXSoLoaderAdapter;
				public setActivityNavBarSetter(param0: com.taobao.weex.appfram.navigator.IActivityNavBarSetter): void;
				public postOnUiThread(param0: java.lang.Runnable, param1: number): void;
				public registerModules(param0: java.util.Map<string,any>): void;
				public getWXRenderManager(): com.taobao.weex.ui.WXRenderManager;
				public setIWXJSExceptionAdapter(param0: com.taobao.weex.adapter.IWXJSExceptionAdapter): void;
				public getFontAdapter(): com.taobao.weex.font.FontAdapter;
				public rmWXAnalyzer(param0: com.taobao.weex.performance.IWXAnalyzer): void;
				public getIWXJSExceptionAdapter(): com.taobao.weex.adapter.IWXJSExceptionAdapter;
				public getIWXHttpAdapter(): com.taobao.weex.adapter.IWXHttpAdapter;
				public registerStatisticsListener(param0: com.taobao.weex.IWXStatisticsListener): void;
				public getValidateProcessor(): com.taobao.weex.bridge.WXValidateProcessor;
				public setNavigator(param0: com.taobao.weex.appfram.navigator.INavigator): void;
				public getWxConfigAdapter(): com.taobao.weex.adapter.IWXConfigAdapter;
				public getWXStatisticsListener(): com.taobao.weex.IWXStatisticsListener;
				public getWXWorkThreadManager(): com.taobao.weex.common.WXWorkThreadManager;
				public destroy(): void;
				/** @deprecated */
				public fireEvent(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>): void;
				/** @deprecated */
				public fireEvent(param0: string, param1: string, param2: string): void;
				public getApmGenerater(): com.taobao.weex.performance.IApmGenerator;
				public getNavigator(): com.taobao.weex.appfram.navigator.INavigator;
				public getDrawableLoader(): com.taobao.weex.adapter.IDrawableLoader;
				public getWXBridgeManager(): com.taobao.weex.bridge.WXBridgeManager;
				public setCrashInfo(param0: string, param1: string): void;
				public addWXAnalyzer(param0: com.taobao.weex.performance.IWXAnalyzer): void;
				public static getInstanceViewPortWidth(param0: string): number;
				/** @deprecated */
				public callback(param0: string, param1: string, param2: java.util.Map<string,any>): void;
				public getIWXStorageAdapter(): com.taobao.weex.appfram.storage.IWXStorageAdapter;
				public setWxConfigAdapter(param0: com.taobao.weex.adapter.IWXConfigAdapter): void;
				public getWXJscProcessManager(): com.taobao.weex.adapter.IWXJscProcessManager;
				public registerValidateProcessor(param0: com.taobao.weex.bridge.WXValidateProcessor): void;
				public getAccessibilityRoleAdapter(): com.taobao.weex.adapter.IWXAccessibilityRoleAdapter;
				public notifyTrimMemory(): void;
				public getSDKInstance(param0: string): com.taobao.weex.WXSDKInstance;
				public getIWXJsFileLoaderAdapter(): com.taobao.weex.adapter.IWXJsFileLoaderAdapter;
				public takeJSHeapSnapshot(param0: string): void;
				/** @deprecated */
				public fireEvent(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>, param4: java.util.Map<string,any>): void;
				public getIWXUserTrackAdapter(): com.taobao.weex.adapter.IWXUserTrackAdapter;
				/** @deprecated */
				public callback(param0: string, param1: string, param2: java.util.Map<string,any>, param3: boolean): void;
			}
			export module WXSDKManager {
				export class InstanceLifeCycleCallbacks {
					public static class: java.lang.Class<com.taobao.weex.WXSDKManager.InstanceLifeCycleCallbacks>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WXSDKManager$InstanceLifeCycleCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInstanceDestroyed(param0: string): void;
						onInstanceCreated(param0: string): void;
					});
					public constructor();
					public onInstanceDestroyed(param0: string): void;
					public onInstanceCreated(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export class WeexFrameRateControl {
				public static class: java.lang.Class<com.taobao.weex.WeexFrameRateControl>;
				public stop(): void;
				public start(): void;
				public constructor(param0: com.taobao.weex.WeexFrameRateControl.VSyncListener);
			}
			export module WeexFrameRateControl {
				export class VSyncListener {
					public static class: java.lang.Class<com.taobao.weex.WeexFrameRateControl.VSyncListener>;
					/**
					 * Constructs a new instance of the com.taobao.weex.WeexFrameRateControl$VSyncListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						OnVSync(): void;
					});
					public constructor();
					public OnVSync(): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class ClassLoaderAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.ClassLoaderAdapter>;
					public getComponentClass(param0: string, param1: string, param2: com.taobao.weex.WXSDKInstance): java.lang.Class<any>;
					public constructor();
					public getModuleClass(param0: string, param1: string, param2: globalAndroid.content.Context): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class DefaultUriAdapter extends com.taobao.weex.adapter.URIAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.DefaultUriAdapter>;
					public rewrite(param0: string, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
					public constructor();
					public rewrite(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class DefaultWXHttpAdapter extends com.taobao.weex.adapter.IWXHttpAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.DefaultWXHttpAdapter>;
					public sendRequest(param0: com.taobao.weex.common.WXRequest, param1: com.taobao.weex.adapter.IWXHttpAdapter.OnHttpListener): void;
					public getEventReporterDelegate(): com.taobao.weex.adapter.DefaultWXHttpAdapter.IEventReporterDelegate;
					public constructor();
					public createConnection(param0: java.net.URL): java.net.HttpURLConnection;
				}
				export module DefaultWXHttpAdapter {
					export class IEventReporterDelegate {
						public static class: java.lang.Class<com.taobao.weex.adapter.DefaultWXHttpAdapter.IEventReporterDelegate>;
						/**
						 * Constructs a new instance of the com.taobao.weex.adapter.DefaultWXHttpAdapter$IEventReporterDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							preConnect(param0: java.net.HttpURLConnection, param1: string): void;
							postConnect(): void;
							interpretResponseStream(param0: java.io.InputStream): java.io.InputStream;
							httpExchangeFailed(param0: java.io.IOException): void;
						});
						public constructor();
						public httpExchangeFailed(param0: java.io.IOException): void;
						public postConnect(): void;
						public preConnect(param0: java.net.HttpURLConnection, param1: string): void;
						public interpretResponseStream(param0: java.io.InputStream): java.io.InputStream;
					}
					export class NOPEventReportDelegate extends com.taobao.weex.adapter.DefaultWXHttpAdapter.IEventReporterDelegate {
						public static class: java.lang.Class<com.taobao.weex.adapter.DefaultWXHttpAdapter.NOPEventReportDelegate>;
						public httpExchangeFailed(param0: java.io.IOException): void;
						public postConnect(): void;
						public preConnect(param0: java.net.HttpURLConnection, param1: string): void;
						public interpretResponseStream(param0: java.io.InputStream): java.io.InputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class DrawableStrategy {
					public static class: java.lang.Class<com.taobao.weex.adapter.DrawableStrategy>;
					public width: number;
					public height: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class ICrashInfoReporter {
					public static class: java.lang.Class<com.taobao.weex.adapter.ICrashInfoReporter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.ICrashInfoReporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addCrashInfo(param0: string, param1: string): void;
					});
					public constructor();
					public addCrashInfo(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IDrawableLoader {
					public static class: java.lang.Class<com.taobao.weex.adapter.IDrawableLoader>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IDrawableLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setDrawable(param0: string, param1: com.taobao.weex.adapter.IDrawableLoader.DrawableTarget, param2: com.taobao.weex.adapter.DrawableStrategy): void;
					});
					public constructor();
					public setDrawable(param0: string, param1: com.taobao.weex.adapter.IDrawableLoader.DrawableTarget, param2: com.taobao.weex.adapter.DrawableStrategy): void;
				}
				export module IDrawableLoader {
					export class AnimatedTarget extends com.taobao.weex.adapter.IDrawableLoader.DrawableTarget {
						public static class: java.lang.Class<com.taobao.weex.adapter.IDrawableLoader.AnimatedTarget>;
						/**
						 * Constructs a new instance of the com.taobao.weex.adapter.IDrawableLoader$AnimatedTarget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setAnimatedDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							setDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
						});
						public constructor();
						public setAnimatedDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
					}
					export class DrawableTarget {
						public static class: java.lang.Class<com.taobao.weex.adapter.IDrawableLoader.DrawableTarget>;
						/**
						 * Constructs a new instance of the com.taobao.weex.adapter.IDrawableLoader$DrawableTarget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
						});
						public constructor();
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
					}
					export class StaticTarget extends com.taobao.weex.adapter.IDrawableLoader.DrawableTarget {
						public static class: java.lang.Class<com.taobao.weex.adapter.IDrawableLoader.StaticTarget>;
						/**
						 * Constructs a new instance of the com.taobao.weex.adapter.IDrawableLoader$StaticTarget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
							setDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
						});
						public constructor();
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class ITracingAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.ITracingAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.ITracingAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						enable(): void;
						disable(): void;
						submitTracingEvent(param0: com.taobao.weex.tracing.WXTracing.TraceEvent): void;
					});
					public constructor();
					public disable(): void;
					public submitTracingEvent(param0: com.taobao.weex.tracing.WXTracing.TraceEvent): void;
					public enable(): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IWXAccessibilityRoleAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.IWXAccessibilityRoleAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IWXAccessibilityRoleAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getRole(param0: string): string;
					});
					public constructor();
					public getRole(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IWXConfigAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.IWXConfigAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IWXConfigAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getConfig(param0: string, param1: string, param2: string): string;
						getConfigWhenInit(param0: string, param1: string, param2: string): string;
						checkMode(param0: string): boolean;
					});
					public constructor();
					public checkMode(param0: string): boolean;
					public getConfig(param0: string, param1: string, param2: string): string;
					public getConfigWhenInit(param0: string, param1: string, param2: string): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IWXHttpAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.IWXHttpAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IWXHttpAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sendRequest(param0: com.taobao.weex.common.WXRequest, param1: com.taobao.weex.adapter.IWXHttpAdapter.OnHttpListener): void;
					});
					public constructor();
					public sendRequest(param0: com.taobao.weex.common.WXRequest, param1: com.taobao.weex.adapter.IWXHttpAdapter.OnHttpListener): void;
				}
				export module IWXHttpAdapter {
					export class OnHttpListener {
						public static class: java.lang.Class<com.taobao.weex.adapter.IWXHttpAdapter.OnHttpListener>;
						/**
						 * Constructs a new instance of the com.taobao.weex.adapter.IWXHttpAdapter$OnHttpListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onHttpStart(): void;
							onHeadersReceived(param0: number, param1: java.util.Map<string,java.util.List<string>>): void;
							onHttpUploadProgress(param0: number): void;
							onHttpResponseProgress(param0: number): void;
							onHttpFinish(param0: com.taobao.weex.common.WXResponse): void;
						});
						public constructor();
						public onHttpResponseProgress(param0: number): void;
						public onHttpStart(): void;
						public onHttpUploadProgress(param0: number): void;
						public onHeadersReceived(param0: number, param1: java.util.Map<string,java.util.List<string>>): void;
						public onHttpFinish(param0: com.taobao.weex.common.WXResponse): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IWXImgLoaderAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.IWXImgLoaderAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IWXImgLoaderAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setImage(param0: string, param1: globalAndroid.widget.ImageView, param2: com.taobao.weex.dom.WXImageQuality, param3: com.taobao.weex.common.WXImageStrategy): void;
					});
					public constructor();
					public setImage(param0: string, param1: globalAndroid.widget.ImageView, param2: com.taobao.weex.dom.WXImageQuality, param3: com.taobao.weex.common.WXImageStrategy): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IWXJSExceptionAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.IWXJSExceptionAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IWXJSExceptionAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onJSException(param0: com.taobao.weex.common.WXJSExceptionInfo): void;
					});
					public constructor();
					public onJSException(param0: com.taobao.weex.common.WXJSExceptionInfo): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IWXJsFileLoaderAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.IWXJsFileLoaderAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IWXJsFileLoaderAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadRaxApi(): string;
						loadJsFramework(): string;
						loadJsFrameworkForSandBox(): string;
					});
					public constructor();
					public loadRaxApi(): string;
					public loadJsFrameworkForSandBox(): string;
					public loadJsFramework(): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IWXJscProcessManager {
					public static class: java.lang.Class<com.taobao.weex.adapter.IWXJscProcessManager>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IWXJscProcessManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						enableBackupThread(): boolean;
						enableBackUpThreadCache(): boolean;
						shouldReboot(): boolean;
						rebootTimeout(): number;
						withException(param0: com.taobao.weex.WXSDKInstance): boolean;
					});
					public constructor();
					public withException(param0: com.taobao.weex.WXSDKInstance): boolean;
					public shouldReboot(): boolean;
					public rebootTimeout(): number;
					public enableBackUpThreadCache(): boolean;
					public enableBackupThread(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IWXSoLoaderAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.IWXSoLoaderAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IWXSoLoaderAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						doLoadLibrary(param0: string): void;
						doLoad(param0: string): void;
					});
					public constructor();
					public doLoad(param0: string): void;
					public doLoadLibrary(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class IWXUserTrackAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.IWXUserTrackAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.IWXUserTrackAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						commit(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.taobao.weex.common.WXPerformance, param4: java.util.Map<string,java.io.Serializable>): void;
					});
					public constructor();
					public static STREAM_MODULE: string;
					public static MONITOR_ERROR_MSG: string;
					public static INVOKE_MODULE: string;
					public static MONITOR_ERROR_CODE: string;
					public static MONITOR_ARG: string;
					public static COUNTER: string;
					public static DOM_MODULE: string;
					public static JS_BRIDGE: string;
					public static MODULE_NAME: string;
					public static LOAD: string;
					public static INIT_FRAMEWORK: string;
					public static JS_DOWNLOAD: string;
					public static JS_FRAMEWORK: string;
					public commit(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.taobao.weex.common.WXPerformance, param4: java.util.Map<string,java.io.Serializable>): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module adapter {
				export class URIAdapter extends io.dcloud.feature.uniapp.adapter.AbsURIAdapter {
					public static class: java.lang.Class<com.taobao.weex.adapter.URIAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.adapter.URIAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						rewrite(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
						rewrite(param0: string, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
					});
					public constructor();
					public static BUNDLE: string;
					public static IMAGE: string;
					public static OTHERS: string;
					public static REQUEST: string;
					public static VIDEO: string;
					public static WEB: string;
					public static LINK: string;
					public static FILE: string;
					public static FONT: string;
					public rewrite(param0: string, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
					public rewrite(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module annotation {
				export class Component {
					public static class: java.lang.Class<com.taobao.weex.annotation.Component>;
					/**
					 * Constructs a new instance of the com.taobao.weex.annotation.Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						lazyload(): boolean;
					});
					public constructor();
					public lazyload(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module annotation {
				export class JSMethod {
					public static class: java.lang.Class<com.taobao.weex.annotation.JSMethod>;
					/**
					 * Constructs a new instance of the com.taobao.weex.annotation.JSMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						uiThread(): boolean;
						alias(): string;
					});
					public constructor();
					public static NOT_SET: string;
					public uiThread(): boolean;
					public alias(): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module clipboard {
					export class IWXClipboard {
						public static class: java.lang.Class<com.taobao.weex.appfram.clipboard.IWXClipboard>;
						/**
						 * Constructs a new instance of the com.taobao.weex.appfram.clipboard.IWXClipboard interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setString(param0: string): void;
							getString(param0: com.taobao.weex.bridge.JSCallback): void;
						});
						public constructor();
						public setString(param0: string): void;
						public getString(param0: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module clipboard {
					export class WXClipboardModule extends com.taobao.weex.common.WXModule implements com.taobao.weex.appfram.clipboard.IWXClipboard {
						public static class: java.lang.Class<com.taobao.weex.appfram.clipboard.WXClipboardModule>;
						public setString(param0: string): void;
						public constructor();
						public getString(param0: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module navigator {
					export class IActivityNavBarSetter {
						public static class: java.lang.Class<com.taobao.weex.appfram.navigator.IActivityNavBarSetter>;
						/**
						 * Constructs a new instance of the com.taobao.weex.appfram.navigator.IActivityNavBarSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							push(param0: string): boolean;
							pop(param0: string): boolean;
							setNavBarRightItem(param0: string): boolean;
							clearNavBarRightItem(param0: string): boolean;
							setNavBarLeftItem(param0: string): boolean;
							clearNavBarLeftItem(param0: string): boolean;
							setNavBarMoreItem(param0: string): boolean;
							clearNavBarMoreItem(param0: string): boolean;
							setNavBarTitle(param0: string): boolean;
						});
						public constructor();
						public clearNavBarRightItem(param0: string): boolean;
						public clearNavBarLeftItem(param0: string): boolean;
						public pop(param0: string): boolean;
						public clearNavBarMoreItem(param0: string): boolean;
						public setNavBarLeftItem(param0: string): boolean;
						public push(param0: string): boolean;
						public setNavBarTitle(param0: string): boolean;
						public setNavBarRightItem(param0: string): boolean;
						public setNavBarMoreItem(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module navigator {
					export class INavigator {
						public static class: java.lang.Class<com.taobao.weex.appfram.navigator.INavigator>;
						/**
						 * Constructs a new instance of the com.taobao.weex.appfram.navigator.INavigator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							push(param0: globalAndroid.app.Activity, param1: string): boolean;
							pop(param0: globalAndroid.app.Activity, param1: string): boolean;
						});
						public constructor();
						public push(param0: globalAndroid.app.Activity, param1: string): boolean;
						public pop(param0: globalAndroid.app.Activity, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module navigator {
					export class WXNavigatorModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<com.taobao.weex.appfram.navigator.WXNavigatorModule>;
						public static MSG_SUCCESS: string;
						public static MSG_FAILED: string;
						public static MSG_PARAM_ERR: string;
						public static CALLBACK_RESULT: string;
						public static CALLBACK_MESSAGE: string;
						public constructor();
						public push(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public clearNavBarMoreItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public setNavBarLeftItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public close(param0: com.alibaba.fastjson.JSONObject, param1: com.taobao.weex.bridge.JSCallback, param2: com.taobao.weex.bridge.JSCallback): void;
						public setNavBarHidden(param0: string, param1: string): void;
						public clearNavBarLeftItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public setNavBarMoreItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public pop(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public setNavBarRightItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public clearNavBarRightItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public setNavBarTitle(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public open(param0: com.alibaba.fastjson.JSONObject, param1: com.taobao.weex.bridge.JSCallback, param2: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module pickers {
					export class DatePickerImpl {
						public static class: java.lang.Class<com.taobao.weex.appfram.pickers.DatePickerImpl>;
						public static pickDate(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: com.taobao.weex.appfram.pickers.DatePickerImpl.OnPickListener, param5: java.util.Map<string,any>): void;
						public constructor();
						public static pickTime(param0: globalAndroid.content.Context, param1: string, param2: com.taobao.weex.appfram.pickers.DatePickerImpl.OnPickListener, param3: java.util.Map<string,any>): void;
					}
					export module DatePickerImpl {
						export class OnPickListener {
							public static class: java.lang.Class<com.taobao.weex.appfram.pickers.DatePickerImpl.OnPickListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.appfram.pickers.DatePickerImpl$OnPickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPick(param0: boolean, param1: string): void;
							});
							public constructor();
							public onPick(param0: boolean, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module pickers {
					export class WXPickersModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<com.taobao.weex.appfram.pickers.WXPickersModule>;
						public constructor();
						public pickDate(param0: java.util.Map<string,any>, param1: com.taobao.weex.bridge.JSCallback): void;
						public pick(param0: java.util.Map<string,any>, param1: com.taobao.weex.bridge.JSCallback): void;
						public pickTime(param0: java.util.Map<string,any>, param1: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module storage {
					export class DefaultWXStorage extends com.taobao.weex.appfram.storage.IWXStorageAdapter {
						public static class: java.lang.Class<com.taobao.weex.appfram.storage.DefaultWXStorage>;
						public setItem(param0: string, param1: string, param2: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public constructor(param0: globalAndroid.content.Context);
						public getItem(param0: string, param1: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public close(): void;
						public setItemPersistent(param0: string, param1: string, param2: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public removeItem(param0: string, param1: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public getAllKeys(param0: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public length(param0: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module storage {
					export class IWXStorage {
						public static class: java.lang.Class<com.taobao.weex.appfram.storage.IWXStorage>;
						/**
						 * Constructs a new instance of the com.taobao.weex.appfram.storage.IWXStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setItem(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
							getItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
							removeItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
							length(param0: com.taobao.weex.bridge.JSCallback): void;
							getAllKeys(param0: com.taobao.weex.bridge.JSCallback): void;
							setItemPersistent(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
						});
						public constructor();
						public getAllKeys(param0: com.taobao.weex.bridge.JSCallback): void;
						public setItemPersistent(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
						public getItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public setItem(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
						public removeItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public length(param0: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module storage {
					export class IWXStorageAdapter {
						public static class: java.lang.Class<com.taobao.weex.appfram.storage.IWXStorageAdapter>;
						/**
						 * Constructs a new instance of the com.taobao.weex.appfram.storage.IWXStorageAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setItem(param0: string, param1: string, param2: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
							getItem(param0: string, param1: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
							removeItem(param0: string, param1: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
							length(param0: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
							getAllKeys(param0: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
							setItemPersistent(param0: string, param1: string, param2: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
							close(): void;
						});
						public constructor();
						public setItem(param0: string, param1: string, param2: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public getItem(param0: string, param1: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public close(): void;
						public setItemPersistent(param0: string, param1: string, param2: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public removeItem(param0: string, param1: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public getAllKeys(param0: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
						public length(param0: com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener): void;
					}
					export module IWXStorageAdapter {
						export class OnResultReceivedListener {
							public static class: java.lang.Class<com.taobao.weex.appfram.storage.IWXStorageAdapter.OnResultReceivedListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.appfram.storage.IWXStorageAdapter$OnResultReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onReceived(param0: java.util.Map<string,any>): void;
							});
							public constructor();
							public onReceived(param0: java.util.Map<string,any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module storage {
					export class StorageResultHandler {
						public static class: java.lang.Class<com.taobao.weex.appfram.storage.StorageResultHandler>;
						public static removeItemResult(param0: boolean): java.util.Map<string,any>;
						public static getLengthResult(param0: number): java.util.Map<string,any>;
						public static setItemResult(param0: boolean): java.util.Map<string,any>;
						public static getItemResult(param0: string): java.util.Map<string,any>;
						public static handleInvalidParam(param0: com.taobao.weex.bridge.JSCallback): void;
						public static handleNoHandlerError(param0: com.taobao.weex.bridge.JSCallback): void;
						public static getAllkeysResult(param0: java.util.List<string>): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module storage {
					export class WXSQLiteOpenHelper {
						public static class: java.lang.Class<com.taobao.weex.appfram.storage.WXSQLiteOpenHelper>;
						public constructor(param0: globalAndroid.content.Context);
						public getDatabase(): globalAndroid.database.sqlite.SQLiteDatabase;
						public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public setMaximumSize(param0: number): void;
						public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
						public closeDatabase(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module storage {
					export class WXStorageModule extends com.taobao.weex.WXSDKEngine.DestroyableModule implements com.taobao.weex.appfram.storage.IWXStorage {
						public static class: java.lang.Class<com.taobao.weex.appfram.storage.WXStorageModule>;
						public getAllKeys(param0: com.taobao.weex.bridge.JSCallback): void;
						public constructor();
						public setItemPersistent(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
						public getItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public setItem(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
						public destroy(): void;
						public removeItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public length(param0: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module websocket {
					export class IWebSocketAdapter {
						public static class: java.lang.Class<com.taobao.weex.appfram.websocket.IWebSocketAdapter>;
						/**
						 * Constructs a new instance of the com.taobao.weex.appfram.websocket.IWebSocketAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							connect(param0: string, param1: string, param2: com.taobao.weex.appfram.websocket.IWebSocketAdapter.EventListener): void;
							connect(param0: string, param1: string, param2: string, param3: com.taobao.weex.appfram.websocket.IWebSocketAdapter.EventListener): void;
							send(param0: string): void;
							close(param0: number, param1: string): void;
							destroy(): void;
						});
						public constructor();
						public static HEADER_SEC_WEBSOCKET_PROTOCOL: string;
						public connect(param0: string, param1: string, param2: com.taobao.weex.appfram.websocket.IWebSocketAdapter.EventListener): void;
						public connect(param0: string, param1: string, param2: string, param3: com.taobao.weex.appfram.websocket.IWebSocketAdapter.EventListener): void;
						public destroy(): void;
						public close(param0: number, param1: string): void;
						public send(param0: string): void;
					}
					export module IWebSocketAdapter {
						export class EventListener {
							public static class: java.lang.Class<com.taobao.weex.appfram.websocket.IWebSocketAdapter.EventListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.appfram.websocket.IWebSocketAdapter$EventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onOpen(): void;
								onMessage(param0: string): void;
								onClose(param0: number, param1: string, param2: boolean): void;
								onError(param0: string): void;
							});
							public constructor();
							public onMessage(param0: string): void;
							public onOpen(): void;
							public onClose(param0: number, param1: string, param2: boolean): void;
							public onError(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module websocket {
					export class IWebSocketAdapterFactory {
						public static class: java.lang.Class<com.taobao.weex.appfram.websocket.IWebSocketAdapterFactory>;
						/**
						 * Constructs a new instance of the com.taobao.weex.appfram.websocket.IWebSocketAdapterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createWebSocketAdapter(): com.taobao.weex.appfram.websocket.IWebSocketAdapter;
						});
						public constructor();
						public createWebSocketAdapter(): com.taobao.weex.appfram.websocket.IWebSocketAdapter;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module websocket {
					export class WebSocketCloseCodes {
						public static class: java.lang.Class<com.taobao.weex.appfram.websocket.WebSocketCloseCodes>;
						public static CLOSE_NORMAL: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static CLOSE_GOING_AWAY: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static CLOSE_PROTOCOL_ERROR: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static CLOSE_UNSUPPORTED: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static CLOSE_NO_STATUS: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static CLOSE_ABNORMAL: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static UNSUPPORTED_DATA: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static POLICY_VIOLATION: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static CLOSE_TOO_LARGE: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static MISSING_EXTENSION: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static INTERNAL_ERROR: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static SERVICE_RESTART: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static TRY_AGAIN_LATER: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static TLS_HANDSHAKE: com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public static values(): androidNative.Array<com.taobao.weex.appfram.websocket.WebSocketCloseCodes>;
						public static valueOf(param0: string): com.taobao.weex.appfram.websocket.WebSocketCloseCodes;
						public getCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module appfram {
				export module websocket {
					export class WebSocketModule extends com.taobao.weex.WXSDKEngine.DestroyableModule {
						public static class: java.lang.Class<com.taobao.weex.appfram.websocket.WebSocketModule>;
						public constructor();
						public close(param0: string, param1: string): void;
						public WebSocket(param0: string, param1: string, param2: string): void;
						public destroy(): void;
						public WebSocket(param0: string, param1: string): void;
						public onopen(param0: com.taobao.weex.bridge.JSCallback): void;
						public onmessage(param0: com.taobao.weex.bridge.JSCallback): void;
						public onerror(param0: com.taobao.weex.bridge.JSCallback): void;
						public send(param0: string): void;
						public onclose(param0: com.taobao.weex.bridge.JSCallback): void;
					}
					export module WebSocketModule {
						export class WebSocketEventListener extends com.taobao.weex.appfram.websocket.IWebSocketAdapter.EventListener {
							public static class: java.lang.Class<com.taobao.weex.appfram.websocket.WebSocketModule.WebSocketEventListener>;
							public onMessage(param0: string): void;
							public onOpen(): void;
							public onClose(param0: number, param1: string, param2: boolean): void;
							public onError(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module base {
				export class CalledByNative {
					public static class: java.lang.Class<com.taobao.weex.base.CalledByNative>;
					/**
					 * Constructs a new instance of the com.taobao.weex.base.CalledByNative interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module base {
				export class FloatUtil {
					public static class: java.lang.Class<com.taobao.weex.base.FloatUtil>;
					public constructor();
					public static floatsEqual(param0: number, param1: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module base {
				export class SystemMessageHandler {
					public static class: java.lang.Class<com.taobao.weex.base.SystemMessageHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
					public static create(param0: number, param1: boolean): com.taobao.weex.base.SystemMessageHandler;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class EventResult {
					public static class: java.lang.Class<com.taobao.weex.bridge.EventResult>;
					public onCallback(param0: any): void;
					public constructor();
					public getResult(): any;
					public isSuccess(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class Invoker {
					public static class: java.lang.Class<com.taobao.weex.bridge.Invoker>;
					/**
					 * Constructs a new instance of the com.taobao.weex.bridge.Invoker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						invoke(param0: any, param1: androidNative.Array<any>): any;
						getParameterTypes(): androidNative.Array<java.lang.reflect.Type>;
						isRunOnUIThread(): boolean;
					});
					public constructor();
					public invoke(param0: any, param1: androidNative.Array<any>): any;
					public getParameterTypes(): androidNative.Array<java.lang.reflect.Type>;
					public isRunOnUIThread(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class JSCallback {
					public static class: java.lang.Class<com.taobao.weex.bridge.JSCallback>;
					/**
					 * Constructs a new instance of the com.taobao.weex.bridge.JSCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						invoke(param0: any): void;
						invokeAndKeepAlive(param0: any): void;
					});
					public constructor();
					public invokeAndKeepAlive(param0: any): void;
					public invoke(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class JavascriptInvokable {
					public static class: java.lang.Class<com.taobao.weex.bridge.JavascriptInvokable>;
					/**
					 * Constructs a new instance of the com.taobao.weex.bridge.JavascriptInvokable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMethods(): androidNative.Array<string>;
						getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					});
					public constructor();
					public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					public getMethods(): androidNative.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class MethodInvoker extends com.taobao.weex.bridge.Invoker {
					public static class: java.lang.Class<com.taobao.weex.bridge.MethodInvoker>;
					public constructor(param0: java.lang.reflect.Method, param1: boolean);
					public toString(): string;
					public invoke(param0: any, param1: androidNative.Array<any>): any;
					public getParameterTypes(): androidNative.Array<java.lang.reflect.Type>;
					public constructor(param0: java.lang.reflect.Method);
					public isRunOnUIThread(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class ModuleFactory<T>  extends com.taobao.weex.bridge.JavascriptInvokable {
					public static class: java.lang.Class<com.taobao.weex.bridge.ModuleFactory<any>>;
					/**
					 * Constructs a new instance of the com.taobao.weex.bridge.ModuleFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						buildInstance(): any;
						getMethods(): androidNative.Array<string>;
						getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					});
					public constructor();
					public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					public getMethods(): androidNative.Array<string>;
					public buildInstance(): any;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class ModuleFactoryImpl {
					public static class: java.lang.Class<com.taobao.weex.bridge.ModuleFactoryImpl>;
					public mFactory: com.taobao.weex.bridge.ModuleFactory<any>;
					public hasRigster: boolean;
					public constructor(param0: com.taobao.weex.bridge.ModuleFactory<any>, param1: boolean);
					public constructor(param0: com.taobao.weex.bridge.ModuleFactory<any>);
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class NativeInvokeHelper {
					public static class: java.lang.Class<com.taobao.weex.bridge.NativeInvokeHelper>;
					public constructor(param0: string);
					public prepareArguments(param0: androidNative.Array<java.lang.reflect.Type>, param1: com.alibaba.fastjson.JSONArray): androidNative.Array<any>;
					public invoke(param0: any, param1: com.taobao.weex.bridge.Invoker, param2: com.alibaba.fastjson.JSONArray): any;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class RequestHandler {
					public static class: java.lang.Class<com.taobao.weex.bridge.RequestHandler>;
					public constructor();
					public static create(): com.taobao.weex.bridge.RequestHandler;
					public send(param0: string, param1: string, param2: number): void;
					public getBundleType(param0: string, param1: string, param2: number): void;
				}
				export module RequestHandler {
					export class OnHttpListenerInner extends com.taobao.weex.WXHttpListener {
						public static class: java.lang.Class<com.taobao.weex.bridge.RequestHandler.OnHttpListenerInner>;
						public onHttpResponseProgress(param0: number): void;
						public onSuccess(param0: com.taobao.weex.common.WXResponse): void;
						public onHttpStart(): void;
						public onHttpUploadProgress(param0: number): void;
						public onFail(param0: com.taobao.weex.common.WXResponse): void;
						public onHeadersReceived(param0: number, param1: java.util.Map<string,java.util.List<string>>): void;
						public onHttpFinish(param0: com.taobao.weex.common.WXResponse): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class ResultCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.taobao.weex.bridge.ResultCallback<any>>;
					/**
					 * Constructs a new instance of the com.taobao.weex.bridge.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReceiveResult(param0: T): void;
					});
					public constructor();
					public onReceiveResult(param0: T): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class ResultCallbackManager {
					public static class: java.lang.Class<com.taobao.weex.bridge.ResultCallbackManager>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class SimpleJSCallback extends io.dcloud.feature.uniapp.bridge.UniJSCallback {
					public static class: java.lang.Class<com.taobao.weex.bridge.SimpleJSCallback>;
					public constructor(param0: string, param1: string);
					public setInvokerCallback(param0: com.taobao.weex.bridge.SimpleJSCallback.InvokerCallback): void;
					public invokeAndKeepAlive(param0: any): void;
					public invoke(param0: any): void;
					public getCallbackId(): string;
				}
				export module SimpleJSCallback {
					export class InvokerCallback {
						public static class: java.lang.Class<com.taobao.weex.bridge.SimpleJSCallback.InvokerCallback>;
						/**
						 * Constructs a new instance of the com.taobao.weex.bridge.SimpleJSCallback$InvokerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onInvokeSuccess(): void;
						});
						public constructor();
						public onInvokeSuccess(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXBridge extends com.taobao.weex.common.IWXBridge {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXBridge>;
					public static MULTIPROCESS: boolean;
					public static TAG: string;
					public registerCoreEnv(param0: string, param1: string): void;
					public registerModuleOnDataRenderNode(param0: string): void;
					public callAddElement(param0: string, param1: string, param2: string, param3: number, param4: string, param5: java.util.HashMap<string,string>, param6: java.util.HashMap<string,string>, param7: java.util.HashSet<string>, param8: androidNative.Array<number>, param9: androidNative.Array<number>, param10: androidNative.Array<number>, param11: boolean): number;
					public getFirstScreenRenderTime(param0: string): androidNative.Array<number>;
					public nativeExecJSWithResult(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): androidNative.Array<number>;
					public onNativePerformanceDataUpdate(param0: string, param1: java.util.Map<string,string>): void;
					public callRefreshFinish(param0: string, param1: androidNative.Array<number>, param2: string): number;
					public nativeRegisterComponentOnDataRenderNode(param0: string): void;
					public updateInitFrameworkParams(param0: string, param1: string, param2: string): void;
					public callMoveElement(param0: string, param1: string, param2: string, param3: number): number;
					public setStyleWidth(param0: string, param1: string, param2: number, param3: boolean): void;
					public onReceivedResult(param0: number, param1: androidNative.Array<number>): void;
					public setStyleHeight(param0: string, param1: string, param2: number, param3: boolean): void;
					public nativeGetFirstScreenRenderTime(param0: string): androidNative.Array<number>;
					public nativeFireEventOnDataRenderNode(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public constructor();
					public callRemoveChildFromRichtext(param0: string, param1: string, param2: string, param3: string): number;
					public resetWXBridge(param0: boolean): void;
					public reloadPageLayout(param0: string): void;
					public execJSService(param0: string): number;
					public getMeasurementFunc(param0: string, param1: number): com.taobao.weex.layout.ContentBoxMeasurement;
					public setTimeoutNative(param0: string, param1: string): void;
					public callRemoveEvent(param0: string, param1: string, param2: string): number;
					public setRenderContainerWrapContent(param0: boolean, param1: string): void;
					public setDeviceDisplay(param0: string, param1: number, param2: number, param3: number): void;
					public nativeDumpIpcPageQueueInfo(): string;
					public callRenderSuccess(param0: string): number;
					public setStyleWidth(param0: string, param1: string, param2: number): void;
					public invokeCallbackOnDataRender(param0: string, param1: string, param2: string, param3: boolean): void;
					public onInstanceClose(param0: string): void;
					public nativeExecJSWithCallback(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>, param4: number): void;
					public nativeInvokeCallbackOnDataRender(param0: string, param1: string, param2: string, param3: boolean): void;
					public registerComponentOnDataRenderNode(param0: string): void;
					public notifyLayout(param0: string): boolean;
					public getRenderFinishTime(param0: string): androidNative.Array<number>;
					public callUpdateFinish(param0: string, param1: androidNative.Array<number>, param2: string): number;
					public setStyleHeight(param0: string, param1: string, param2: number): void;
					public forceLayout(param0: string): void;
					public markDirty(param0: string, param1: string, param2: boolean): void;
					public callRemoveElement(param0: string, param1: string): number;
					public callCreateFinish(param0: string): number;
					public reportJSException(param0: string, param1: string, param2: string): void;
					public nativeExecJSOnInstance(param0: string, param1: string, param2: number): string;
					public setDeviceDisplayOfPage(param0: string, param1: number, param2: number): void;
					public callLayout(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: number): number;
					public callAddEvent(param0: string, param1: string, param2: string): number;
					public callUpdateStyle(param0: string, param1: string, param2: java.util.HashMap<string,any>, param3: java.util.HashMap<string,string>, param4: java.util.HashMap<string,string>, param5: java.util.HashMap<string,string>): number;
					public callUpdateRichtextStyle(param0: string, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string): number;
					public nativeRegisterModuleOnDataRenderNode(param0: string): void;
					public callAppendTreeCreateFinish(param0: string, param1: string): number;
					public nativeCreateInstanceContext(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
					public nativeOnInteractionTimeUpdate(param0: string): void;
					public initFrameworkEnv(param0: string, param1: com.taobao.weex.bridge.WXParams, param2: string, param3: boolean): number;
					public setPadding(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
					public nativeGetRenderFinishTime(param0: string): androidNative.Array<number>;
					public setPosition(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
					public setJSFrmVersion(param0: string): void;
					public callNative(param0: string, param1: androidNative.Array<number>, param2: string): number;
					public reportServerCrash(param0: string, param1: string): void;
					public setMargin(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
					public setViewPortWidth(param0: string, param1: number): void;
					public callNativeComponent(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>): void;
					public setDefaultHeightAndWidthIntoRootDom(param0: string, param1: number, param2: number, param3: boolean, param4: boolean): void;
					public setPageArgument(param0: string, param1: string, param2: string): void;
					public removeInstanceRenderType(param0: string): void;
					public initFramework(param0: string, param1: com.taobao.weex.bridge.WXParams): number;
					public bindMeasurementToRenderObject(param0: number): void;
					public fireEventOnDataRenderNode(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public createInstanceContext(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
					public destoryInstance(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
					public setFlexDirectionDef(param0: string): void;
					public execJS(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
					public setLogType(param0: number, param1: boolean): void;
					public callCreateBody(param0: string, param1: string, param2: string, param3: java.util.HashMap<string,string>, param4: java.util.HashMap<string,string>, param5: java.util.HashSet<string>, param6: androidNative.Array<number>, param7: androidNative.Array<number>, param8: androidNative.Array<number>): number;
					public execJSOnInstance(param0: string, param1: string, param2: number): string;
					public callNative(param0: string, param1: string, param2: string): number;
					public refreshInstance(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): void;
					public callUpdateRichtextChildAttr(param0: string, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string): number;
					public execJSWithCallback(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>, param4: com.taobao.weex.bridge.ResultCallback<any>): void;
					public callHasTransitionPros(param0: string, param1: string, param2: java.util.HashMap<string,string>): number;
					public setInstanceRenderType(param0: string, param1: string): void;
					public nativeUpdateGlobalConfig(param0: string): void;
					public reportNativeInitStatus(param0: string, param1: string): void;
					public callNativeModule(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>): any;
					public nativeDestoryInstance(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
					public callAddChildToRichtext(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.HashMap<string,string>, param6: java.util.HashMap<string,string>): number;
					public callUpdateAttrs(param0: string, param1: string, param2: java.util.HashMap<string,string>): number;
					public takeHeapSnapshot(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXBridgeManager extends com.taobao.weex.utils.batch.BactchExecutor {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXBridgeManager>;
					public static METHOD_CHECK_APPKEY: string;
					public static METHOD_CREATE_INSTANCE: string;
					public static METHOD_CREATE_PAGE_WITH_CONTENT: string;
					public static METHOD_UPDATE_COMPONENT_WITH_DATA: string;
					public static METHOD_DESTROY_INSTANCE: string;
					public static METHOD_CALL_JS: string;
					public static METHOD_SET_TIMEOUT: string;
					public static METHOD_REGISTER_MODULES: string;
					public static METHOD_REGISTER_COMPONENTS: string;
					public static METHOD_FIRE_EVENT: string;
					public static METHD_FIRE_EVENT_SYNC: string;
					public static METHD_COMPONENT_HOOK_SYNC: string;
					public static METHOD_CALLBACK: string;
					public static METHOD_REFRESH_INSTANCE: string;
					public static METHOD_FIRE_EVENT_ON_DATA_RENDER_NODE: string;
					public static METHOD_NOTIFY_TRIM_MEMORY: string;
					public static METHOD_NOTIFY_SERIALIZE_CODE_CACHE: string;
					public static METHOD_CREATE_INSTANCE_CONTEXT: string;
					public static KEY_METHOD: string;
					public static KEY_ARGS: string;
					public static COMPONENT: string;
					public static REF: string;
					public static MODULE: string;
					public static METHOD: string;
					public static KEY_PARAMS: string;
					public static ARGS: string;
					public static OPTIONS: string;
					public static INITLOGFILE: string;
					public static reInitCount: number;
					public static sInitFrameWorkTimeOrigin: number;
					public static sInitFrameWorkMsg: java.lang.StringBuilder;
					public getInitParams(): com.taobao.weex.bridge.WXParams;
					public post(param0: java.lang.Runnable, param1: any): void;
					public callAddElement(param0: string, param1: string, param2: string, param3: number, param4: string, param5: java.util.HashMap<string,string>, param6: java.util.HashMap<string,string>, param7: java.util.HashSet<string>, param8: androidNative.Array<number>, param9: androidNative.Array<number>, param10: androidNative.Array<number>, param11: boolean): number;
					public getFirstScreenRenderTime(param0: string): androidNative.Array<number>;
					public onInteractionTimeUpdate(param0: string): void;
					public dumpIpcPageInfo(): string;
					public setStyleWidth(param0: string, param1: string, param2: number, param3: boolean): void;
					public setStyleHeight(param0: string, param1: string, param2: number, param3: boolean): void;
					public callNativeModule(param0: string, param1: string, param2: string, param3: com.alibaba.fastjson.JSONArray, param4: com.alibaba.fastjson.JSONObject): any;
					public isJSThread(): boolean;
					public callRemoveChildFromRichtext(param0: string, param1: string, param2: string, param3: string): number;
					public reloadPageLayout(param0: string): void;
					public static argsToJSON(param0: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): string;
					public callRemoveEvent(param0: string, param1: string, param2: string): number;
					public setDeviceDisplay(param0: string, param1: number, param2: number, param3: number): void;
					/** @deprecated */
					public notifyTrimMemory(): void;
					public setDefaultRootSize(param0: string, param1: number, param2: number, param3: boolean, param4: boolean): void;
					public callRefreshFinish(param0: string, param1: string): number;
					/** @deprecated */
					public callback(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public onInstanceClose(param0: string): void;
					public commitJscCrashAlarmMonitor(param0: string, param1: com.taobao.weex.common.WXErrorCode, param2: string, param3: string, param4: string, param5: java.util.Map<string,string>): void;
					public notifyLayout(param0: string): boolean;
					public getRenderFinishTime(param0: string): androidNative.Array<number>;
					public invokeDestoryInstance(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>, param4: boolean): void;
					public callNativeModule(param0: string, param1: string, param2: string, param3: com.alibaba.fastjson.JSONArray, param4: any): any;
					public sendMessageDelayed(param0: globalAndroid.os.Message, param1: number): void;
					public static updateGlobalConfig(param0: string): void;
					public stopRemoteDebug(): void;
					public setStyleHeight(param0: string, param1: string, param2: number): void;
					public asyncCallJSEventVoidResult(param0: string, param1: string, param2: java.util.List<any>, param3: androidNative.Array<any>): void;
					public forceLayout(param0: string): void;
					public callRemoveElement(param0: string, param1: string): number;
					public callCreateFinish(param0: string): number;
					public reportJSException(param0: string, param1: string, param2: string): void;
					public jsEngineMultiThreadEnable(): boolean;
					public callLayout(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: number): number;
					public takeJSHeapSnapshot(param0: string): void;
					public callUpdateStyle(param0: string, param1: string, param2: java.util.HashMap<string,any>, param3: java.util.HashMap<string,string>, param4: java.util.HashMap<string,string>, param5: java.util.HashMap<string,string>): number;
					public callUpdateRichtextStyle(param0: string, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string): number;
					public callReportCrashReloadPage(param0: string, param1: string): number;
					public destroy(): void;
					public syncCallJSEventWithResult(param0: string, param1: string, param2: java.util.List<any>, param3: androidNative.Array<any>): com.taobao.weex.bridge.EventResult;
					public setViewPortWidth(param0: string, param1: number): void;
					public setPageArgument(param0: string, param1: string, param2: string): void;
					public callModuleMethod(param0: string, param1: string, param2: string, param3: com.alibaba.fastjson.JSONArray): any;
					public updateInitDeviceParams(param0: string, param1: string, param2: string, param3: string): void;
					public callReportCrash(param0: string, param1: string, param2: string, param3: java.util.Map<string,string>): void;
					public syncExecJsOnInstanceWithResult(param0: string, param1: string, param2: number): string;
					public setFlexDirectionDef(param0: string): void;
					public callUpdateFinish(param0: string, param1: string): number;
					public shouldReloadCurrentInstance(param0: string): boolean;
					public registerComponents(param0: java.util.List<java.util.Map<string,any>>): void;
					public callUpdateRichtextChildAttr(param0: string, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string): number;
					public handleMessage(param0: globalAndroid.os.Message): boolean;
					public invokeExecJS(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>, param4: boolean): void;
					public callAddChildToRichtext(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.HashMap<string,string>, param6: java.util.HashMap<string,string>): number;
					public notifySerializeCodeCache(): void;
					public fireEventOnNode(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>, param4: java.util.Map<string,any>, param5: java.util.List<any>): void;
					public static getInstance(): com.taobao.weex.bridge.WXBridgeManager;
					public registerCoreEnv(param0: string, param1: string): void;
					public setRenderContentWrapContentToCore(param0: boolean, param1: string): void;
					public postDelay(param0: java.lang.Runnable, param1: number): void;
					/** @deprecated */
					public fireEvent(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>, param4: java.util.Map<string,any>): void;
					public isJSFrameworkInit(): boolean;
					public callMoveElement(param0: string, param1: string, param2: string, param3: number): number;
					public post(param0: java.lang.Runnable): void;
					public destroyInstance(param0: string): void;
					public invokeCreateInstanceContext(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>, param4: boolean): number;
					/** @deprecated */
					public callback(param0: string, param1: string, param2: string): void;
					public callModuleMethod(param0: string, param1: string, param2: string, param3: com.alibaba.fastjson.JSONArray, param4: com.alibaba.fastjson.JSONObject): any;
					public optionObjConvert(param0: boolean, param1: com.taobao.weex.bridge.WXBridgeManager.BundType, param2: com.taobao.weex.bridge.WXJSObject): com.taobao.weex.bridge.WXJSObject;
					public getMeasurementFunc(param0: string, param1: number): com.taobao.weex.layout.ContentBoxMeasurement;
					public removeMessage(param0: number, param1: any): void;
					public getWeexCoreThreadStackTrace(): string;
					public callRenderSuccess(param0: string): number;
					public setStyleWidth(param0: string, param1: string, param2: number): void;
					public createInstance(param0: string, param1: com.taobao.weex.Script, param2: java.util.Map<string,any>, param3: string): void;
					public restart(): void;
					public execJSService(param0: string): void;
					public markDirty(param0: string, param1: string, param2: boolean): void;
					public setStackTopInstance(param0: string): void;
					public setDeviceDisplayOfPage(param0: string, param1: number, param2: number): void;
					public registerModules(param0: java.util.Map<string,any>): void;
					public callAddEvent(param0: string, param1: string, param2: string): number;
					public callAppendTreeCreateFinish(param0: string, param1: string): number;
					public setSandBoxContext(param0: boolean): void;
					public setPadding(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
					public setPosition(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
					public callNativeComponent(param0: string, param1: string, param2: string, param3: com.alibaba.fastjson.JSONArray, param4: any): any;
					public setMargin(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
					/** @deprecated */
					public callback(param0: string, param1: string, param2: any, param3: boolean): void;
					public bindMeasurementToRenderObject(param0: number): void;
					public fireEventOnNode(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>, param4: java.util.Map<string,any>, param5: java.util.List<any>, param6: com.taobao.weex.bridge.EventResult): void;
					public setInterceptor(param0: com.taobao.weex.utils.batch.Interceptor): void;
					public setUseSingleProcess(param0: boolean): void;
					public postWithName(param0: java.lang.Runnable, param1: com.taobao.weex.WXSDKInstance, param2: string): void;
					public setLogLevel(param0: number, param1: boolean): void;
					public createInstance(param0: string, param1: string, param2: java.util.Map<string,any>, param3: string): void;
					public fireEventOnNode(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>, param4: java.util.Map<string,any>): void;
					public callCreateBody(param0: string, param1: string, param2: string, param3: java.util.HashMap<string,string>, param4: java.util.HashMap<string,string>, param5: java.util.HashSet<string>, param6: androidNative.Array<number>, param7: androidNative.Array<number>, param8: androidNative.Array<number>): number;
					public post(param0: java.lang.Runnable, param1: any, param2: com.taobao.weex.WXSDKInstance, param3: string): void;
					public initScriptsFramework(param0: string): void;
					/** @deprecated */
					public fireEvent(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>): void;
					public getBundleType(param0: string, param1: string): com.taobao.weex.bridge.WXBridgeManager.BundType;
					public callNative(param0: string, param1: com.alibaba.fastjson.JSONArray, param2: string): number;
					public getJSLooper(): globalAndroid.os.Looper;
					public loadJsBundleInPreInitMode(param0: string, param1: string): void;
					public callHasTransitionPros(param0: string, param1: string, param2: java.util.HashMap<string,string>): number;
					public refreshInstance(param0: string, param1: com.taobao.weex.common.WXRefreshData): void;
					public callUpdateAttrs(param0: string, param1: string, param2: java.util.HashMap<string,string>): number;
					public checkJsEngineMultiThread(): void;
				}
				export module WXBridgeManager {
					export class BundType {
						public static class: java.lang.Class<com.taobao.weex.bridge.WXBridgeManager.BundType>;
						public static Vue: com.taobao.weex.bridge.WXBridgeManager.BundType;
						public static Rax: com.taobao.weex.bridge.WXBridgeManager.BundType;
						public static Others: com.taobao.weex.bridge.WXBridgeManager.BundType;
						public static valueOf(param0: string): com.taobao.weex.bridge.WXBridgeManager.BundType;
						public static values(): androidNative.Array<com.taobao.weex.bridge.WXBridgeManager.BundType>;
					}
					export class TimerInfo {
						public static class: java.lang.Class<com.taobao.weex.bridge.WXBridgeManager.TimerInfo>;
						public callbackId: string;
						public time: number;
						public instanceId: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXDebugJsBridge {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXDebugJsBridge>;
					public jsHandleCallRefreshFinish(param0: string, param1: androidNative.Array<number>, param2: string): void;
					public jsHandleCallAddEvent(param0: string, param1: string, param2: string): void;
					public resetWXBridge(param0: any, param1: string): void;
					public jsHandleSetTimeout(param0: string, param1: string): void;
					public jsHandleCallAddElement(param0: string, param1: string, param2: androidNative.Array<number>, param3: string, param4: boolean): void;
					public jsHandleCallGCanvasLinkNative(param0: string, param1: number, param2: string): void;
					public jsHandleCallAddElement(param0: string, param1: string, param2: string, param3: string): void;
					public jsHandleCallUpdateStyleNative(param0: string, param1: string, param2: androidNative.Array<number>, param3: boolean): void;
					public jsHandleSetInterval(param0: string, param1: string, param2: string): void;
					public jsHandleCallNative(param0: string, param1: androidNative.Array<number>, param2: string): void;
					public constructor();
					public jsHandleCallCreateBody(param0: string, param1: androidNative.Array<number>, param2: boolean): void;
					public jsHandleCallCreateFinish(param0: string): void;
					public jsHandleCallNativeComponent(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>, param5: boolean): void;
					public jsHandleCallRemoveElement(param0: string, param1: string): void;
					public jsHandleCallUpdateAttrs(param0: string, param1: string, param2: androidNative.Array<number>, param3: boolean): void;
					public jsHandleReportException(param0: string, param1: string, param2: string): void;
					public jsHandleSetJSVersion(param0: string): void;
					public jsHandleCallNativeModule(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>, param5: boolean): void;
					public jsHandleCallCreateBody(param0: string, param1: string): void;
					public jsHandleCallNativeModule(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>): void;
					public jsHandleCallNativeLog(param0: androidNative.Array<number>): void;
					public jsHandleCallRemoveEvent(param0: string, param1: string, param2: string): void;
					public jsHandleCallUpdateStyle(param0: string, param1: string, param2: string): void;
					public jsHandleCallUpdateFinish(param0: string, param1: androidNative.Array<number>, param2: string): void;
					public jsHandleCallNativeComponent(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>): void;
					public jsHandleCallMoveElement(param0: string, param1: string, param2: string, param3: string): void;
					public jsHandleCallUpdateAttrs(param0: string, param1: string, param2: string): void;
					public jsHandleClearInterval(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXHashMap<K, V>  extends java.util.HashMap<any,any> {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXHashMap<any,any>>;
					public getStackTopInstanceId(): string;
					public removeFromMapAndStack(param0: any): any;
					public getInstanceStack(): java.util.Stack<string>;
					public remove(param0: any): any;
					public constructor();
					public setTag(param0: string): void;
					public put(param0: any, param1: any): any;
					public setStackTopInstance(param0: string): void;
					public getTag(): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXJSObject {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXJSObject>;
					public static NUMBER: number;
					public static String: number;
					public static JSON: number;
					public static WSON: number;
					public data: any;
					public type: number;
					public key: string;
					public constructor(param0: number, param1: any);
					public constructor(param0: number, param1: any, param2: string);
					public constructor(param0: any);
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXModuleManager {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXModuleManager>;
					public static registerWhenCreateInstance(): void;
					public static registerModule(param0: java.util.Map<string,com.taobao.weex.utils.cache.RegisterCache.ModuleCache>): boolean;
					public static hasModule(param0: string): boolean;
					public static onActivityStart(param0: string): void;
					public static getRegisterJsModules(): com.alibaba.fastjson.JSONObject;
					public static destoryDomModule(param0: string): void;
					public static destroyInstanceModules(param0: string): void;
					public static resetAllModuleState(): void;
					public static modulesToJSONArray(param0: androidNative.Array<string>, param1: com.taobao.weex.bridge.ModuleFactory<any>): com.alibaba.fastjson.JSONArray;
					public static onActivityResult(param0: string, param1: number, param2: number, param3: globalAndroid.content.Intent): void;
					public static onActivityDestroy(param0: string): void;
					public static onCreateOptionsMenu(param0: string, param1: globalAndroid.view.Menu): boolean;
					public static onRequestPermissionsResult(param0: string, param1: number, param2: androidNative.Array<string>, param3: androidNative.Array<number>): void;
					public static onActivityPause(param0: string): void;
					public static createDomModule(param0: com.taobao.weex.WXSDKInstance): void;
					public static registerModule(param0: string, param1: com.taobao.weex.bridge.ModuleFactory<any>, param2: boolean): boolean;
					public static onActivityCreate(param0: string): void;
					public constructor();
					public static reload(): void;
					public static onActivityBack(param0: string): boolean;
					public static getDomModule(param0: string): com.taobao.weex.ui.module.WXDomModule;
					public static onActivityStop(param0: string): void;
					public static onActivityResume(param0: string): void;
					public static resetModuleState(param0: string, param1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXParams {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXParams>;
					public setShouldInfoCollect(param0: string): void;
					public getLogLevel(): string;
					public getOptions(): any;
					public getReleaseMap(): boolean;
					public toMap(): java.util.Map<string,any>;
					public getAppName(): string;
					public setPlatform(param0: string): void;
					public setLibJssPath(param0: string): void;
					public setDeviceModel(param0: string): void;
					public setNeedInitV8(param0: boolean): void;
					public getAppVersion(): string;
					public getOsVersion(): string;
					public constructor();
					public getNeedInitV8(): string;
					public getCrashFilePath(): string;
					public setWeexVersion(param0: string): void;
					public setLogLevel(param0: string): void;
					public getLayoutDirection(): string;
					public getUseRunTimeApi(): string;
					public getShouldInfoCollect(): string;
					public setDeviceHeight(param0: string): void;
					public getDeviceHeight(): string;
					public setLibIcuPath(param0: string): void;
					/** @deprecated */
					public setDeviceWidth(param0: string): void;
					public getCacheDir(): string;
					public setOsVersion(param0: string): void;
					public getPlatform(): string;
					public setCacheDir(param0: string): void;
					public getDeviceModel(): string;
					public setUseSingleProcess(param0: string): void;
					public getLibJscPath(): string;
					public setCrashFilePath(param0: string): void;
					public setLibJscPath(param0: string): void;
					public setLibLdPath(param0: string): void;
					public setOptions(param0: java.util.Map<string,string>): void;
					public setAppVersion(param0: string): void;
					public getWeexVersion(): string;
					public getLibJssPath(): string;
					public getLibJsbPath(): string;
					public getLibLdPath(): string;
					public setAppName(param0: string): void;
					public getUseSingleProcess(): string;
					public setLibJsbPath(param0: string): void;
					public getDeviceWidth(): string;
					public getLibIcuPath(): string;
					public setLayoutDirection(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXServiceManager {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXServiceManager>;
					public static execAllCacheJsService(): void;
					public static registerService(param0: string, param1: string, param2: java.util.Map<string,any>): boolean;
					public constructor();
					public static unRegisterService(param0: string): boolean;
					public static reload(): void;
					public static getService(param0: string): com.taobao.weex.common.WXJSService;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXTask extends com.taobao.weex.common.IWXObject {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXTask>;
					public module: string;
					public method: string;
					public args: java.util.ArrayList<string>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module bridge {
				export class WXValidateProcessor {
					public static class: java.lang.Class<com.taobao.weex.bridge.WXValidateProcessor>;
					/**
					 * Constructs a new instance of the com.taobao.weex.bridge.WXValidateProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onModuleValidate(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string, param3: com.alibaba.fastjson.JSONArray, param4: com.alibaba.fastjson.JSONObject): com.taobao.weex.bridge.WXValidateProcessor.WXModuleValidateResult;
						onComponentValidate(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: com.taobao.weex.ui.component.WXComponent<any>): com.taobao.weex.bridge.WXValidateProcessor.WXComponentValidateResult;
						needValidate(param0: string): boolean;
					});
					public constructor();
					public needValidate(param0: string): boolean;
					public onComponentValidate(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: com.taobao.weex.ui.component.WXComponent<any>): com.taobao.weex.bridge.WXValidateProcessor.WXComponentValidateResult;
					public onModuleValidate(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string, param3: com.alibaba.fastjson.JSONArray, param4: com.alibaba.fastjson.JSONObject): com.taobao.weex.bridge.WXValidateProcessor.WXModuleValidateResult;
				}
				export module WXValidateProcessor {
					export class WXComponentValidateResult {
						public static class: java.lang.Class<com.taobao.weex.bridge.WXValidateProcessor.WXComponentValidateResult>;
						public isSuccess: boolean;
						public replacedComponent: string;
						public validateInfo: com.alibaba.fastjson.JSONObject;
						public constructor();
					}
					export class WXModuleValidateResult {
						public static class: java.lang.Class<com.taobao.weex.bridge.WXValidateProcessor.WXModuleValidateResult>;
						public isSuccess: boolean;
						public validateInfo: com.alibaba.fastjson.JSONObject;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class Constants {
					public static class: java.lang.Class<com.taobao.weex.common.Constants>;
					public constructor();
				}
				export module Constants {
					export class CodeCache {
						public static class: java.lang.Class<com.taobao.weex.common.Constants.CodeCache>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.Constants$CodeCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static PATH: string;
						public static SAVE_PATH: string;
						public static BANNER_DIGEST: string;
						public static DIGEST: string;
						public static URL: string;
					}
					export class Event {
						public static class: java.lang.Class<com.taobao.weex.common.Constants.Event>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.Constants$Event interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static PAGESTART: string;
						public static STOP_PROPAGATION_RAX: string;
						public static RECEIVEDTITLE: string;
						public static SCROLL: string;
						public static SCROLL_END: string;
						public static BLUR: string;
						public static VIEWDISAPPEAR: string;
						public static ONLOAD: string;
						public static CLICK: string;
						public static START: string;
						public static CLICKBACKITEM: string;
						public static FAIL: string;
						public static NATIVE_BACK: string;
						public static APPEAR: string;
						public static PAUSE_EVENT: string;
						public static VIEWAPPEAR: string;
						public static ONPULLING_DOWN: string;
						public static RETURN: string;
						public static PAUSE: string;
						public static PAGEFINISH: string;
						public static ONMESSAGE: string;
						public static ERROR: string;
						public static CHANGE: string;
						public static DISAPPEAR: string;
						public static INPUT: string;
						public static STOP_PROPAGATION: string;
						public static ONPULLING_UP: string;
						public static LAYEROVERFLOW: string;
						public static RESUME_EVENT: string;
						public static ON_TRANSITION_END: string;
						public static ONREFRESH: string;
						public static FOCUS: string;
						public static LOADMORE: string;
						public static ONLOADING: string;
						public static KEYBOARD: string;
						public static STICKY: string;
						public static UNSTICKY: string;
						public static FINISH: string;
						public static SCROLL_START: string;
					}
					export module Event {
						export class SLOT_LIFECYCLE {
							public static class: java.lang.Class<com.taobao.weex.common.Constants.Event.SLOT_LIFECYCLE>;
							/**
							 * Constructs a new instance of the com.taobao.weex.common.Constants$Event$SLOT_LIFECYCLE interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static CREATE: string;
							public static ATTACH: string;
							public static DESTORY: string;
							public static DETACH: string;
						}
					}
					export class Name {
						public static class: java.lang.Class<com.taobao.weex.common.Constants.Name>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.Constants$Name interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static RETURN_KEY_TYPE: string;
						public static COLUMN_GAP: string;
						public static MIN: string;
						public static SCROLL_TOP: string;
						public static OVERFLOW: string;
						public static MARGIN_RIGHT: string;
						public static TOP: string;
						public static ELLIPSIS: string;
						public static ORIENTATION: string;
						public static SOURCE: string;
						public static PAGE_SIZE: string;
						public static RECYCLE_IMAGE: string;
						public static INSERT_CELL_ANIMATION: string;
						public static LAYER_LIMIT: string;
						public static SUFFIX: string;
						public static RECYCLE: string;
						public static PADDING_RIGHT: string;
						public static LEFT: string;
						public static OFFSET_X_RATIO: string;
						public static POSITION: string;
						public static AUTOPLAY: string;
						public static MARGIN_LEFT: string;
						public static AUTOFOCUS: string;
						public static PADDING_TOP: string;
						public static SCROLL_LEFT: string;
						public static ARIA_HIDDEN: string;
						public static AUTO_PLAY: string;
						public static BORDER_LEFT_WIDTH: string;
						public static TYPE: string;
						public static RIPPLE_ENABLED: string;
						public static BORDER_RIGHT_COLOR: string;
						public static TEXT_ALIGN: string;
						public static IMAGE_QUALITY: string;
						public static MAX_WIDTH: string;
						public static BORDER_RADIUS: string;
						public static BORDER_COLOR: string;
						public static BORDER_LEFT_STYLE: string;
						public static BORDER_TOP_COLOR: string;
						public static UNDEFINED: string;
						public static BOTTOM: string;
						public static PLACEHOLDER_COLOR: string;
						public static HREF: string;
						public static DEFAULT_WIDTH: string;
						public static MARGIN_BOTTOM: string;
						public static BORDER_BOTTOM_LEFT_RADIUS: string;
						public static SELECTION_START: string;
						public static JUSTIFY_CONTENT: string;
						public static SHADOW_QUALITY: string;
						public static PLACE_HOLDER: string;
						public static DELETE_CELL_ANIMATION: string;
						public static NORMAL: string;
						public static INTERVAL: string;
						public static HAS_FIXED_SIZE: string;
						public static DISTANCE_Y: string;
						public static PADDING_BOTTOM: string;
						public static CONTROLS: string;
						public static STICKY_OFFSET: string;
						public static BORDER_RIGHT_STYLE: string;
						public static SHOULD_STOP_PROPAGATION_INIT_RESULT: string;
						public static CONTENT_SIZE: string;
						public static CONTENT_OFFSET: string;
						public static ROLE: string;
						public static LOADMORERETRY: string;
						public static SINGLELINE: string;
						public static ENABLE_COPY: string;
						public static RESIZE: string;
						public static RIGHT_GAP: string;
						public static RIGHT: string;
						public static Y: string;
						public static OFFSET: string;
						public static FLAT: string;
						public static BORDER_TOP_RIGHT_RADIUS: string;
						public static LEFT_GAP: string;
						public static X: string;
						public static BACKGROUND_IMAGE: string;
						public static STABLE: string;
						public static ROTATE_FIX: string;
						public static MARGIN_TOP: string;
						public static BORDER_WIDTH: string;
						public static BORDER_BOTTOM_WIDTH: string;
						public static ITEM_COLOR: string;
						public static QUALITY: string;
						public static NAV_BAR_VISIBILITY: string;
						public static MAX: string;
						public static SHOW_INDICATORS: string;
						public static SCROLLABLE: string;
						public static LAYOUT: string;
						public static FONT_FACE: string;
						public static STRATEGY: string;
						public static INCLUDE_FONT_PADDING: string;
						public static RTL: string;
						public static WIDTH: string;
						public static PADDING: string;
						public static LINE_HEIGHT: string;
						public static MARGIN: string;
						public static AUTO: string;
						public static BORDER_TOP_WIDTH: string;
						public static DISABLED: string;
						public static PADDING_LEFT: string;
						public static VISIBILITY: string;
						public static DEFAULT_HEIGHT: string;
						public static PREFIX: string;
						public static ARIA_LABEL: string;
						public static SCROLL_DIRECTION: string;
						public static PAGE_ENABLED: string;
						public static MIN_WIDTH: string;
						public static MIN_HEIGHT: string;
						public static OFFSET_ACCURACY: string;
						public static PERSPECTIVE: string;
						public static KEEP_INDEX: string;
						public static OPACITY: string;
						public static BOX_SHADOW: string;
						public static PREVENT_MOVE_EVENT: string;
						public static BOUNCE: string;
						public static FONT_WEIGHT: string;
						public static MAXLENGTH: string;
						public static COLUMN_COUNT: string;
						public static BACKGROUND_COLOR: string;
						public static PLACEHOLDER: string;
						public static MAX_LENGTH: string;
						public static SELECTION_END: string;
						public static TEXT_DECORATION: string;
						public static KEEP_SELECTION_INDEX: string;
						public static COLOR: string;
						public static ITEM_SIZE: string;
						public static IMAGE_SHARPEN: string;
						public static MAX_HEIGHT: string;
						public static SHOW_LOADING: string;
						public static BORDER_LEFT_COLOR: string;
						public static INDEX: string;
						public static FLEX_DIRECTION: string;
						public static TRANSFORM: string;
						public static DRAGGABLE: string;
						public static ALIGN_ITEMS: string;
						public static SCOPE: string;
						public static NEST_SCROLLING_ENABLED: string;
						public static OVERFLOW_HIDDEN_WIDTH: string;
						public static MODE: string;
						public static KEEP_SCROLL_POSITION: string;
						public static PULLING_DISTANCE: string;
						public static VALUE: string;
						public static SPAN_OFFSETS: string;
						public static VIF_FALSE: string;
						public static PRIORITY: string;
						public static CHECKED: string;
						public static FONT_STYLE: string;
						public static LINES: string;
						public static BORDER_TOP_STYLE: string;
						public static VIEW_HEIGHT: string;
						public static FLEX_WRAP: string;
						public static ANIMATING: string;
						public static COLUMN_WIDTH: string;
						public static ROWS: string;
						public static BORDER_BOTTOM_COLOR: string;
						public static BORDER_TOP_LEFT_RADIUS: string;
						public static FONT_SIZE: string;
						public static FILTER: string;
						public static PLAY_STATUS: string;
						public static ANIMATED: string;
						public static ALIGN_SELF: string;
						public static KEEP_POSITION_LAYOUT_DELAY: string;
						public static BORDER_STYLE: string;
						public static TEXT_OVERFLOW: string;
						public static DIRECTION: string;
						public static ZORDERTOP: string;
						public static ELEVATION: string;
						public static HEIGHT: string;
						public static ALLOW_COPY_PASTE: string;
						public static ITEM_SELECTED_COLOR: string;
						public static DISPLAY: string;
						public static BORDER_BOTTOM_STYLE: string;
						public static FLEX: string;
						public static BORDER_RIGHT_WIDTH: string;
						public static ISDRAGGING: string;
						public static FONT_FAMILY: string;
						public static LOADMOREOFFSET: string;
						public static SHOULD_STOP_PROPAGATION_INTERVAL: string;
						public static SRC: string;
						public static OFFSET_X_ACCURACY: string;
						public static OVERFLOW_HIDDEN_HEIGHT: string;
						public static SHOW_SCROLLBAR: string;
						public static LAYERLIMIT: string;
						public static AUTO_RECYCLE: string;
						public static BORDER_BOTTOM_RIGHT_RADIUS: string;
						public static SHARPEN: string;
						public static RESIZE_MODE: string;
						public static TRANSFORM_ORIGIN: string;
					}
					export module Name {
						export class Recycler {
							public static class: java.lang.Class<com.taobao.weex.common.Constants.Name.Recycler>;
							/**
							 * Constructs a new instance of the com.taobao.weex.common.Constants$Name$Recycler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static LIST_DATA_ITEM: string;
							public static LIST_DATA_ITEM_INDEX: string;
							public static SLOT_TEMPLATE_DEFAULT: string;
							public static LIST_DATA_TEMPLATE_SWITCH_KEY: string;
							public static LIST_DATA: string;
							public static CELL_INDEX: string;
							public static TYPE_INDEX: string;
							public static SLOT_TEMPLATE_CASE: string;
						}
					}
					export class Orientation {
						public static class: java.lang.Class<com.taobao.weex.common.Constants.Orientation>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.Constants$Orientation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static HORIZONTAL: number;
						public static VERTICAL: number;
					}
					export class PSEUDO {
						public static class: java.lang.Class<com.taobao.weex.common.Constants.PSEUDO>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.Constants$PSEUDO interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static DISABLED: string;
						public static ACTIVE: string;
						public static FOCUS: string;
						public static ENABLED: string;
					}
					export class Scheme {
						public static class: java.lang.Class<com.taobao.weex.common.Constants.Scheme>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.Constants$Scheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static HTTPS: string;
						public static DATA: string;
						public static LOCAL: string;
						public static HTTP: string;
						public static FILE: string;
					}
					export class TimeFunction {
						public static class: java.lang.Class<com.taobao.weex.common.Constants.TimeFunction>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.Constants$TimeFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static EASE_IN_OUT: string;
						public static CUBIC_BEZIER: string;
						public static EASE_IN: string;
						public static LINEAR: string;
						public static EASE_OUT: string;
						public static EASE: string;
					}
					export class Value {
						public static class: java.lang.Class<com.taobao.weex.common.Constants.Value>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.Constants$Value interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static DATE: string;
						public static LOW: string;
						public static PASSWORD: string;
						public static DATETIME: string;
						public static DIRECTION_DOWN: string;
						public static HORIZONTAL: string;
						public static TEL: string;
						public static NORMAL: string;
						public static DEFAULT: string;
						public static DIRECTION_RIGHT: string;
						public static ITALIC: string;
						public static NUMBER: string;
						public static STOP: string;
						public static LEFT: string;
						public static GRID: string;
						public static DENSITY: number;
						public static FIXED: string;
						public static MULTI_COLUMN: string;
						public static HIDDEN: string;
						public static NAV_BAR_SHOWN: number;
						public static TIME: string;
						public static COLUMN_GAP_NORMAL: number;
						public static PLAY: string;
						public static CENTER: string;
						public static PAUSE: string;
						public static DIRECTION_UP: string;
						public static RIGHT: string;
						public static BOLD: string;
						public static COLUMN_COUNT_NORMAL: number;
						public static NONE: string;
						public static DIRECTION_LEFT: string;
						public static HIGH: string;
						public static AUTO: number;
						public static ORIGINAL: string;
						public static TEXT: string;
						public static STICKY: string;
						public static EMAIL: string;
						public static NAV_BAR_HIDDEN: number;
						public static VISIBLE: string;
						public static URL: string;
					}
					export class Weex {
						public static class: java.lang.Class<com.taobao.weex.common.Constants.Weex>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.Constants$Weex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static REF: string;
						public static INSTANCEID: string;
						public static TYPE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class Destroyable {
					public static class: java.lang.Class<com.taobao.weex.common.Destroyable>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.Destroyable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						destroy(): void;
					});
					public constructor();
					public destroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class ICheckBindingScroller {
					public static class: java.lang.Class<com.taobao.weex.common.ICheckBindingScroller>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.ICheckBindingScroller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isNeedScroller(param0: string, param1: any): boolean;
					});
					public constructor();
					public isNeedScroller(param0: string, param1: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class IWXBridge extends com.taobao.weex.common.IWXObject {
					public static class: java.lang.Class<com.taobao.weex.common.IWXBridge>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.IWXBridge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initFramework(param0: string, param1: com.taobao.weex.bridge.WXParams): number;
						initFrameworkEnv(param0: string, param1: com.taobao.weex.bridge.WXParams, param2: string, param3: boolean): number;
						updateInitFrameworkParams(param0: string, param1: string, param2: string): void;
						setLogType(param0: number, param1: boolean): void;
						refreshInstance(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): void;
						execJS(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
						execJSWithCallback(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>, param4: com.taobao.weex.bridge.ResultCallback<any>): void;
						execJSService(param0: string): number;
						takeHeapSnapshot(param0: string): void;
						createInstanceContext(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
						destoryInstance(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
						execJSOnInstance(param0: string, param1: string, param2: number): string;
						callNative(param0: string, param1: androidNative.Array<number>, param2: string): number;
						callNative(param0: string, param1: string, param2: string): number;
						reportJSException(param0: string, param1: string, param2: string): void;
						callNativeModule(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>): any;
						callNativeComponent(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>): void;
						callUpdateFinish(param0: string, param1: androidNative.Array<number>, param2: string): number;
						callRefreshFinish(param0: string, param1: androidNative.Array<number>, param2: string): number;
						reportServerCrash(param0: string, param1: string): void;
						callCreateBody(param0: string, param1: string, param2: string, param3: java.util.HashMap<string,string>, param4: java.util.HashMap<string,string>, param5: java.util.HashSet<string>, param6: androidNative.Array<number>, param7: androidNative.Array<number>, param8: androidNative.Array<number>): number;
						callAddElement(param0: string, param1: string, param2: string, param3: number, param4: string, param5: java.util.HashMap<string,string>, param6: java.util.HashMap<string,string>, param7: java.util.HashSet<string>, param8: androidNative.Array<number>, param9: androidNative.Array<number>, param10: androidNative.Array<number>, param11: boolean): number;
						callRemoveElement(param0: string, param1: string): number;
						callMoveElement(param0: string, param1: string, param2: string, param3: number): number;
						callAddEvent(param0: string, param1: string, param2: string): number;
						callRemoveEvent(param0: string, param1: string, param2: string): number;
						callUpdateStyle(param0: string, param1: string, param2: java.util.HashMap<string,any>, param3: java.util.HashMap<string,string>, param4: java.util.HashMap<string,string>, param5: java.util.HashMap<string,string>): number;
						callUpdateAttrs(param0: string, param1: string, param2: java.util.HashMap<string,string>): number;
						callAddChildToRichtext(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.HashMap<string,string>, param6: java.util.HashMap<string,string>): number;
						callRemoveChildFromRichtext(param0: string, param1: string, param2: string, param3: string): number;
						callUpdateRichtextStyle(param0: string, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string): number;
						callUpdateRichtextChildAttr(param0: string, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string): number;
						callLayout(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: number): number;
						callCreateFinish(param0: string): number;
						callRenderSuccess(param0: string): number;
						callAppendTreeCreateFinish(param0: string, param1: string): number;
						callHasTransitionPros(param0: string, param1: string, param2: java.util.HashMap<string,string>): number;
						getMeasurementFunc(param0: string, param1: number): com.taobao.weex.layout.ContentBoxMeasurement;
						bindMeasurementToRenderObject(param0: number): void;
						setRenderContainerWrapContent(param0: boolean, param1: string): void;
						getFirstScreenRenderTime(param0: string): androidNative.Array<number>;
						getRenderFinishTime(param0: string): androidNative.Array<number>;
						setDefaultHeightAndWidthIntoRootDom(param0: string, param1: number, param2: number, param3: boolean, param4: boolean): void;
						onInstanceClose(param0: string): void;
						forceLayout(param0: string): void;
						notifyLayout(param0: string): boolean;
						setStyleWidth(param0: string, param1: string, param2: number, param3: boolean): void;
						setStyleHeight(param0: string, param1: string, param2: number, param3: boolean): void;
						setStyleWidth(param0: string, param1: string, param2: number): void;
						setStyleHeight(param0: string, param1: string, param2: number): void;
						setMargin(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
						setPadding(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
						setPosition(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
						markDirty(param0: string, param1: string, param2: boolean): void;
						setDeviceDisplay(param0: string, param1: number, param2: number, param3: number): void;
						registerCoreEnv(param0: string, param1: string): void;
						reportNativeInitStatus(param0: string, param1: string): void;
						setTimeoutNative(param0: string, param1: string): void;
						setJSFrmVersion(param0: string): void;
						resetWXBridge(param0: boolean): void;
						setInstanceRenderType(param0: string, param1: string): void;
						removeInstanceRenderType(param0: string): void;
						setPageArgument(param0: string, param1: string, param2: string): void;
						setViewPortWidth(param0: string, param1: number): void;
						setFlexDirectionDef(param0: string): void;
						reloadPageLayout(param0: string): void;
						setDeviceDisplayOfPage(param0: string, param1: number, param2: number): void;
					});
					public constructor();
					public static INSTANCE_RENDERING_ERROR: number;
					public static INSTANCE_RENDERING: number;
					public static DESTROY_INSTANCE: number;
					public registerCoreEnv(param0: string, param1: string): void;
					public callAddElement(param0: string, param1: string, param2: string, param3: number, param4: string, param5: java.util.HashMap<string,string>, param6: java.util.HashMap<string,string>, param7: java.util.HashSet<string>, param8: androidNative.Array<number>, param9: androidNative.Array<number>, param10: androidNative.Array<number>, param11: boolean): number;
					public getFirstScreenRenderTime(param0: string): androidNative.Array<number>;
					public callRefreshFinish(param0: string, param1: androidNative.Array<number>, param2: string): number;
					public updateInitFrameworkParams(param0: string, param1: string, param2: string): void;
					public callMoveElement(param0: string, param1: string, param2: string, param3: number): number;
					public setStyleWidth(param0: string, param1: string, param2: number, param3: boolean): void;
					public setStyleHeight(param0: string, param1: string, param2: number, param3: boolean): void;
					public callRemoveChildFromRichtext(param0: string, param1: string, param2: string, param3: string): number;
					public resetWXBridge(param0: boolean): void;
					public reloadPageLayout(param0: string): void;
					public execJSService(param0: string): number;
					public getMeasurementFunc(param0: string, param1: number): com.taobao.weex.layout.ContentBoxMeasurement;
					public callRemoveEvent(param0: string, param1: string, param2: string): number;
					public setTimeoutNative(param0: string, param1: string): void;
					public setRenderContainerWrapContent(param0: boolean, param1: string): void;
					public setDeviceDisplay(param0: string, param1: number, param2: number, param3: number): void;
					public callRenderSuccess(param0: string): number;
					public setStyleWidth(param0: string, param1: string, param2: number): void;
					public onInstanceClose(param0: string): void;
					public notifyLayout(param0: string): boolean;
					public getRenderFinishTime(param0: string): androidNative.Array<number>;
					public callUpdateFinish(param0: string, param1: androidNative.Array<number>, param2: string): number;
					public setStyleHeight(param0: string, param1: string, param2: number): void;
					public forceLayout(param0: string): void;
					public markDirty(param0: string, param1: string, param2: boolean): void;
					public callRemoveElement(param0: string, param1: string): number;
					public callCreateFinish(param0: string): number;
					public reportJSException(param0: string, param1: string, param2: string): void;
					public setDeviceDisplayOfPage(param0: string, param1: number, param2: number): void;
					public callLayout(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean, param9: number): number;
					public callAddEvent(param0: string, param1: string, param2: string): number;
					public callUpdateStyle(param0: string, param1: string, param2: java.util.HashMap<string,any>, param3: java.util.HashMap<string,string>, param4: java.util.HashMap<string,string>, param5: java.util.HashMap<string,string>): number;
					public callUpdateRichtextStyle(param0: string, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string): number;
					public callAppendTreeCreateFinish(param0: string, param1: string): number;
					public initFrameworkEnv(param0: string, param1: com.taobao.weex.bridge.WXParams, param2: string, param3: boolean): number;
					public setPadding(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
					public setPosition(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
					public setJSFrmVersion(param0: string): void;
					public callNative(param0: string, param1: androidNative.Array<number>, param2: string): number;
					public reportServerCrash(param0: string, param1: string): void;
					public setMargin(param0: string, param1: string, param2: com.taobao.weex.dom.CSSShorthand.EDGE, param3: number): void;
					public setViewPortWidth(param0: string, param1: number): void;
					public callNativeComponent(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>): void;
					public setDefaultHeightAndWidthIntoRootDom(param0: string, param1: number, param2: number, param3: boolean, param4: boolean): void;
					public setPageArgument(param0: string, param1: string, param2: string): void;
					public removeInstanceRenderType(param0: string): void;
					public initFramework(param0: string, param1: com.taobao.weex.bridge.WXParams): number;
					public bindMeasurementToRenderObject(param0: number): void;
					public createInstanceContext(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
					public destoryInstance(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
					public setFlexDirectionDef(param0: string): void;
					public execJS(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): number;
					public setLogType(param0: number, param1: boolean): void;
					public callCreateBody(param0: string, param1: string, param2: string, param3: java.util.HashMap<string,string>, param4: java.util.HashMap<string,string>, param5: java.util.HashSet<string>, param6: androidNative.Array<number>, param7: androidNative.Array<number>, param8: androidNative.Array<number>): number;
					public execJSOnInstance(param0: string, param1: string, param2: number): string;
					public callNative(param0: string, param1: string, param2: string): number;
					public refreshInstance(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>): void;
					public callUpdateRichtextChildAttr(param0: string, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string): number;
					public execJSWithCallback(param0: string, param1: string, param2: string, param3: androidNative.Array<com.taobao.weex.bridge.WXJSObject>, param4: com.taobao.weex.bridge.ResultCallback<any>): void;
					public callHasTransitionPros(param0: string, param1: string, param2: java.util.HashMap<string,string>): number;
					public setInstanceRenderType(param0: string, param1: string): void;
					public reportNativeInitStatus(param0: string, param1: string): void;
					public callNativeModule(param0: string, param1: string, param2: string, param3: androidNative.Array<number>, param4: androidNative.Array<number>): any;
					public callAddChildToRichtext(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.HashMap<string,string>, param6: java.util.HashMap<string,string>): number;
					public callUpdateAttrs(param0: string, param1: string, param2: java.util.HashMap<string,string>): number;
					public takeHeapSnapshot(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class IWXDebugConfig {
					public static class: java.lang.Class<com.taobao.weex.common.IWXDebugConfig>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.IWXDebugConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWXJSManager(): com.taobao.weex.bridge.WXBridgeManager;
						getWXDebugJsBridge(): com.taobao.weex.bridge.WXDebugJsBridge;
					});
					public constructor();
					public getWXJSManager(): com.taobao.weex.bridge.WXBridgeManager;
					public getWXDebugJsBridge(): com.taobao.weex.bridge.WXDebugJsBridge;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class IWXObject {
					public static class: java.lang.Class<com.taobao.weex.common.IWXObject>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.IWXObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class OnWXScrollListener {
					public static class: java.lang.Class<com.taobao.weex.common.OnWXScrollListener>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.OnWXScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScrolled(param0: globalAndroid.view.View, param1: number, param2: number): void;
						onScrollStateChanged(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): void;
					});
					public constructor();
					public static DRAGGING: number;
					public static SETTLING: number;
					public static IDLE: number;
					public onScrolled(param0: globalAndroid.view.View, param1: number, param2: number): void;
					public onScrollStateChanged(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class RenderTypes {
					public static class: java.lang.Class<com.taobao.weex.common.RenderTypes>;
					public static RENDER_TYPE_NATIVE: string;
					public static RENDER_TYPE_HERON: string;
					public static RENDER_TYPE_HERON_URL_PARAM: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class TypeModuleFactory<T>  extends com.taobao.weex.bridge.ModuleFactory<any> {
					public static class: java.lang.Class<com.taobao.weex.common.TypeModuleFactory<any>>;
					public static TAG: string;
					public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					public constructor(param0: java.lang.Class<any>);
					public getMethods(): androidNative.Array<string>;
					public buildInstance(): any;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export abstract class WXCompatModule extends com.taobao.weex.common.WXModule implements com.taobao.weex.common.Destroyable {
					public static class: java.lang.Class<com.taobao.weex.common.WXCompatModule>;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public destroy(): void;
					public constructor();
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
				}
				export module WXCompatModule {
					export class ModuleReceive {
						public static class: java.lang.Class<com.taobao.weex.common.WXCompatModule.ModuleReceive>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXConfig {
					public static class: java.lang.Class<com.taobao.weex.common.WXConfig>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.WXConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static androidStatusBarHeight: string;
					public static weexVersion: string;
					public static logLevel: string;
					public static appGroup: string;
					public static sysModel: string;
					public static layoutDirection: string;
					public static debugMode: string;
					public static devId: string;
					public static sysVersion: string;
					public static deviceWidth: string;
					public static appVersion: string;
					public static cacheDir: string;
					public static os: string;
					public static appName: string;
					public static scale: string;
					public static externalUserAgent: string;
					public static osName: string;
					public static deviceHeight: string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXErrorCode {
					public static class: java.lang.Class<com.taobao.weex.common.WXErrorCode>;
					public static WX_ERR_LOAD_SO: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_LOAD_JSLIB: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_BAD_SO: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_COPY_FROM_APK: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JSFUNC_PARAM: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JSON_OBJECT: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_INVOKE_NATIVE: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JS_EXECUTE: com.taobao.weex.common.WXErrorCode;
					public static WX_SUCCESS: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_DOM_CREATEBODY: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_DOM_UPDATEATTRS: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_DOM_UPDATESTYLE: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_DOM_ADDELEMENT: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_DOM_REMOVEELEMENT: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_DOM_MOVEELEMENT: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_DOM_ADDEVENT: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_DOM_REMOVEEVENT: com.taobao.weex.common.WXErrorCode;
					public static WX_ERROR_DOM_CREATEFINISH: com.taobao.weex.common.WXErrorCode;
					public static WX_ERROR_DOM_REFRESHFINISH: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_DOM_SCROLLTO: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_RELOAD_PAGE: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_RELOAD_PAGE_EXCEED_LIMIT: com.taobao.weex.common.WXErrorCode;
					public static WX_ERROR_WHITE_SCREEN: com.taobao.weex.common.WXErrorCode;
					public static WHITE_SCREEN_RESPONSE_TIMEOUT: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JSC_CRASH: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_FIRST_DOM_ACTION_EXCEPTION: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JSDOWNLOAD_START: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JSBUNDLE_DOWNLOAD: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JSBUNDLE_EMPTY: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JSDOWNLOAD_END: com.taobao.weex.common.WXErrorCode;
					public static WX_JS_FRAMEWORK_INIT_SUCCESS: com.taobao.weex.common.WXErrorCode;
					public static WX_JS_FRAMEWORK_REINIT_SUCCESS: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JS_FRAMEWORK: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_JS_REINIT_FRAMEWORK: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_SINGLE_PROCESS_DLOPEN_FILE_NOT_EXIST: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_SINGLE_PROCESS_DLOPEN_FLAIED: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_SINGLE_PROCESS_DLSYM_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_SINGLE_PROCESS_JS_FRAMEWORK: com.taobao.weex.common.WXErrorCode;
					public static WX_JS_FRAMEWORK_INIT_MULPROCESS_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_JS_FRAMEWORK_REINIT_MULPROCESS_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_JS_FRAMEWORK_INIT_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_JS_FRAMEWORK_INIT_SINGLE_PROCESS_SUCCESS: com.taobao.weex.common.WXErrorCode;
					public static WX_JS_FRAMEWORK_INIT_FAILED_PARAMS_NULL: com.taobao.weex.common.WXErrorCode;
					public static WX_JS_FRAMEWORK_INIT_FAILED_FIND_ICU_TIMEOUT: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_SDK_INIT: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_SDK_INIT_CPU_NOT_SUPPORT: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_SDK_INIT_TABLE_NOT_SUPPORT: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_SDK_INIT_JSFM_INIT_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_INVOKE_BRIDGE: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_INVOKE_REGISTER_CONTENT_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_INVOKE_JSSERVICE_EXECUTE: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_INVOKE_REGISTER_MODULES: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_INVOKE_REGISTER_COMPONENT: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_JS_DOWNLOAD: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_JS_DOWNLOAD_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_WXBRIDGE: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_WXBRIDGE_EXCEPTION: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_JS_CREATE_INSTANCE: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_JS_CREATE_INSTANCE_CONTEXT: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_LAYER_OVERFLOW: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_NULL_KEY: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_NATIVE_RUNTIME: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_COMPONENT_NOT_REGISTER: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_COMPONENT_ATTR_KEY: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_BRIDGE_ARG_NULL: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_CONTAINER_TYPE: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_TRANSITION: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_INSTANCE_ID_NULL: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_LIST_INVALID_COLUMN_COUNT: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_ERR_TEXTURE_SETBACKGROUND: com.taobao.weex.common.WXErrorCode;
					public static WX_RENDER_WAR_GPU_LIMIT_LAYOUT: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_HERON: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_HERON_RENDER: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_NO_BUNDLE_TYPE: com.taobao.weex.common.WXErrorCode;
					public static WX_KEY_EXCEPTION_VALIDAPPKEY: com.taobao.weex.common.WXErrorCode;
					public static WX_DEGRAD_ERR: com.taobao.weex.common.WXErrorCode;
					public static WX_DEGRAD_ERR_INSTANCE_CREATE_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_DEGRAD_ERR_NETWORK_BUNDLE_DOWNLOAD_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_DEGRAD_ERR_NETWORK_CHECK_CONTENT_LENGTH_FAILED: com.taobao.weex.common.WXErrorCode;
					public static WX_DEGRAD_ERR_BUNDLE_CONTENTTYPE_ERROR: com.taobao.weex.common.WXErrorCode;
					public static WX_DEGRAD_ERR_OTHER_CAUSE_DEGRADTOH5: com.taobao.weex.common.WXErrorCode;
					public static WX_DEGRAD_ERR_INSTANCE_CREATE_FAILED_JS: com.taobao.weex.common.WXErrorCode;
					public static WX_DEGRAD_EAGLE_RENDER_ERROR: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_HASH_MAP_TMP: com.taobao.weex.common.WXErrorCode;
					public static WX_ERROR_MOVE_RENDER_OBJECT_OUT_OF_BOUNDS: com.taobao.weex.common.WXErrorCode;
					public static WX_ERR_TEST: com.taobao.weex.common.WXErrorCode;
					public static valueOf(param0: string): com.taobao.weex.common.WXErrorCode;
					public setArgs(param0: string): void;
					public getErrorGroup(): com.taobao.weex.common.WXErrorCode.ErrorGroup;
					public getErrorMsg(): string;
					public static values(): androidNative.Array<com.taobao.weex.common.WXErrorCode>;
					public getErrorType(): com.taobao.weex.common.WXErrorCode.ErrorType;
					public appendErrMsg(param0: string): void;
					public getErrorCode(): string;
					public getArgs(): string;
				}
				export module WXErrorCode {
					export class ErrorGroup {
						public static class: java.lang.Class<com.taobao.weex.common.WXErrorCode.ErrorGroup>;
						public static JS: com.taobao.weex.common.WXErrorCode.ErrorGroup;
						public static NATIVE: com.taobao.weex.common.WXErrorCode.ErrorGroup;
						public static values(): androidNative.Array<com.taobao.weex.common.WXErrorCode.ErrorGroup>;
						public static valueOf(param0: string): com.taobao.weex.common.WXErrorCode.ErrorGroup;
					}
					export class ErrorType {
						public static class: java.lang.Class<com.taobao.weex.common.WXErrorCode.ErrorType>;
						public static JS_ERROR: com.taobao.weex.common.WXErrorCode.ErrorType;
						public static NATIVE_ERROR: com.taobao.weex.common.WXErrorCode.ErrorType;
						public static RENDER_ERROR: com.taobao.weex.common.WXErrorCode.ErrorType;
						public static DEGRAD_ERROR: com.taobao.weex.common.WXErrorCode.ErrorType;
						public static DOWN_LOAD_ERROR: com.taobao.weex.common.WXErrorCode.ErrorType;
						public static valueOf(param0: string): com.taobao.weex.common.WXErrorCode.ErrorType;
						public static values(): androidNative.Array<com.taobao.weex.common.WXErrorCode.ErrorType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXException extends io.dcloud.feature.uniapp.common.UniException {
					public static class: java.lang.Class<com.taobao.weex.common.WXException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXImageSharpen {
					public static class: java.lang.Class<com.taobao.weex.common.WXImageSharpen>;
					public static UNSHARPEN: com.taobao.weex.common.WXImageSharpen;
					public static SHARPEN: com.taobao.weex.common.WXImageSharpen;
					public static values(): androidNative.Array<com.taobao.weex.common.WXImageSharpen>;
					public static valueOf(param0: string): com.taobao.weex.common.WXImageSharpen;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXImageStrategy {
					public static class: java.lang.Class<com.taobao.weex.common.WXImageStrategy>;
					public isClipping: boolean;
					public isSharpen: boolean;
					public blurRadius: number;
					public placeHolder: string;
					public instanceId: string;
					public getImageListener(): com.taobao.weex.common.WXImageStrategy.ImageListener;
					public setAutoCompression(param0: boolean): void;
					public constructor(param0: string);
					public constructor();
					public setImageListener(param0: com.taobao.weex.common.WXImageStrategy.ImageListener): void;
					public isAutoCompression(): boolean;
				}
				export module WXImageStrategy {
					export class ImageListener {
						public static class: java.lang.Class<com.taobao.weex.common.WXImageStrategy.ImageListener>;
						/**
						 * Constructs a new instance of the com.taobao.weex.common.WXImageStrategy$ImageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onImageFinish(param0: string, param1: globalAndroid.widget.ImageView, param2: boolean, param3: java.util.Map<any,any>): void;
						});
						public constructor();
						public onImageFinish(param0: string, param1: globalAndroid.widget.ImageView, param2: boolean, param3: java.util.Map<any,any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXInstanceWrap extends com.taobao.weex.common.WXModule {
					public static class: java.lang.Class<com.taobao.weex.common.WXInstanceWrap>;
					public constructor();
					public error(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXJSBridgeMsgType {
					public static class: java.lang.Class<com.taobao.weex.common.WXJSBridgeMsgType>;
					public static SET_TIMEOUT: number;
					public static NATIVE_CALL: number;
					public static FIRE_EVENT: number;
					public static CALLBACK: number;
					public static CALL_JS: number;
					public static CALL_JS_BATCH: number;
					public static INIT_FRAMEWORK: number;
					public static REGISTER_COMPONENTS: number;
					public static REGISTER_MODULES: number;
					public static REFRESH_INSTANCE: number;
					public static MODULE_TIMEOUT: number;
					public static MODULE_INTERVAL: number;
					public static TAKE_HEAP_SNAPSHOT: number;
					public static RELOAD_PAGE_NATIVE: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXJSEngineListener {
					public static class: java.lang.Class<com.taobao.weex.common.WXJSEngineListener>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.WXJSEngineListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createInstanceSuccess(param0: string): void;
						destroyInstanceSuccess(param0: string): void;
						createInstanceFailed(param0: string): void;
						destroyInstanceFailed(param0: string): void;
						fireEvent(param0: boolean, param1: string, param2: string, param3: string): void;
						callback(param0: boolean, param1: string, param2: string, param3: string): void;
						initFramework(param0: boolean, param1: string, param2: number): void;
					});
					public constructor();
					public fireEvent(param0: boolean, param1: string, param2: string, param3: string): void;
					public destroyInstanceSuccess(param0: string): void;
					public destroyInstanceFailed(param0: string): void;
					public createInstanceFailed(param0: string): void;
					public initFramework(param0: boolean, param1: string, param2: number): void;
					public callback(param0: boolean, param1: string, param2: string, param3: string): void;
					public createInstanceSuccess(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXJSExceptionInfo {
					public static class: java.lang.Class<com.taobao.weex.common.WXJSExceptionInfo>;
					public time: number;
					public getFunction(): string;
					public setException(param0: string): void;
					public getJsFrameworkVersion(): string;
					public setFunction(param0: string): void;
					public setInstanceId(param0: string): void;
					public setErrCode(param0: com.taobao.weex.common.WXErrorCode): void;
					public constructor(param0: string, param1: string, param2: com.taobao.weex.common.WXErrorCode, param3: string, param4: string, param5: java.util.Map<string,string>);
					public getErrCode(): com.taobao.weex.common.WXErrorCode;
					public getExtParams(): java.util.Map<string,string>;
					public toString(): string;
					public getBundleUrl(): string;
					public getWeexVersion(): string;
					public getInstanceId(): string;
					public getException(): string;
					public setExtParams(param0: java.util.Map<string,string>): void;
					public setBundleUrl(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXJSService extends com.taobao.weex.common.IWXObject {
					public static class: java.lang.Class<com.taobao.weex.common.WXJSService>;
					public getScript(): string;
					public setScript(param0: string): void;
					public getOptions(): java.util.Map<string,any>;
					public constructor();
					public getName(): string;
					public setOptions(param0: java.util.Map<string,any>): void;
					public setName(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export abstract class WXModule extends com.taobao.weex.common.IWXObject {
					public static class: java.lang.Class<com.taobao.weex.common.WXModule>;
					public static ACTION_ACTIVITY_RESULT: string;
					public static ACTION_REQUEST_PERMISSIONS_RESULT: string;
					public static REQUEST_CODE: string;
					public static RESULT_CODE: string;
					public static PERMISSIONS: string;
					public static GRANT_RESULTS: string;
					public mWXSDKInstance: com.taobao.weex.WXSDKInstance;
					public mUniSDKInstance: io.dcloud.feature.uniapp.AbsSDKInstance;
					public onActivityCreate(): void;
					public addEventListener(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public removeAllEventListeners(param0: string): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public getModuleName(): string;
					public setModuleName(param0: string): void;
					public findComponent(param0: string): com.taobao.weex.ui.component.WXComponent<any>;
					public onActivityStop(): void;
					public onActivityBack(): boolean;
					public onActivityDestroy(): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onActivityPause(): void;
					public onActivityStart(): void;
					public constructor();
					public getEventCallbacks(param0: string): java.util.List<string>;
					public onActivityResume(): void;
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public isOnce(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXModuleAnno {
					public static class: java.lang.Class<com.taobao.weex.common.WXModuleAnno>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.WXModuleAnno interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						moduleMethod(): boolean;
						runOnUIThread(): boolean;
					});
					public constructor();
					/** @deprecated */
					public moduleMethod(): boolean;
					public runOnUIThread(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXPerformance {
					public static class: java.lang.Class<com.taobao.weex.common.WXPerformance>;
					public static DEFAULT: string;
					public static CACHE_TYPE: string;
					public static VIEW_LIMIT_HEIGHT: number;
					public static VIEW_LIMIT_WIDTH: number;
					public static TRACE_DATA: boolean;
					public bizType: string;
					public templateUrl: string;
					public cacheType: string;
					public renderTimeOrigin: number;
					public renderUnixTimeOrigin: number;
					public fsRenderTime: number;
					public callCreateFinishTime: number;
					public interactionTime: number;
					public interactionRealUnixTime: number;
					public interactionViewAddCount: number;
					public interactionViewAddLimitCount: number;
					public newFsRenderTime: number;
					public localInteractionViewAddCount: number;
					public callCreateInstanceTime: number;
					public fsCallJsTotalTime: number;
					public fsCallJsTotalNum: number;
					public fsCallNativeTotalTime: number;
					public fsCallNativeTotalNum: number;
					public fsRequestNum: number;
					public fsComponentCount: number;
					public fsComponentCreateTime: number;
					public cellExceedNum: number;
					public timerInvokeCount: number;
					public fsCallEventTotalNum: number;
					public avgFPS: number;
					public fluency: number;
					public backImproveMemory: number;
					public localReadTime: number;
					public pageName: string;
					public JSLibSize: number;
					public JSLibInitTime: number;
					public JSTemplateSize: number;
					public templateLoadTime: number;
					public communicateTime: number;
					public screenRenderTime: number;
					public callBridgeTime: number;
					public firstScreenJSFExecuteTime: number;
					public parseJsonTime: number;
					public cssLayoutTime: number;
					public totalTime: number;
					public networkTime: number;
					public pureNetworkTime: number;
					public actualNetworkTime: number;
					public packageSpendTime: number;
					public syncTaskTime: number;
					public maxDeepViewLayer: number;
					public maxDeepVDomLayer: number;
					public wrongImgSizeCount: number;
					public useScroller: number;
					public componentCount: number;
					public componentCreateTime: number;
					public JSLibVersion: string;
					public WXSDKVersion: string;
					public renderFailedDetail: string;
					public errCode: string;
					public errMsg: string;
					public args: string;
					public connectionType: string;
					public requestType: string;
					public zCacheInfo: string;
					public wxDims: androidNative.Array<string>;
					public measureTimes: androidNative.Array<number>;
					public mActionAddElementCount: number;
					public mActionAddElementSumTime: number;
					public toString(): string;
					public getMeasureMap(): java.util.Map<string,java.lang.Double>;
					public getDimensionMap(): java.util.Map<string,string>;
					public constructor(param0: string);
					public static getDimensions(): androidNative.Array<string>;
					public static getMeasures(): androidNative.Array<string>;
					public beforeInstanceRender(param0: string): void;
					public afterInstanceDestroy(param0: string): void;
					public getPerfData(): string;
					public appendErrMsg(param0: string): void;
					public getErrMsg(): string;
				}
				export module WXPerformance {
					export class Dimension {
						public static class: java.lang.Class<com.taobao.weex.common.WXPerformance.Dimension>;
						public static JSLibVersion: com.taobao.weex.common.WXPerformance.Dimension;
						public static WXSDKVersion: com.taobao.weex.common.WXPerformance.Dimension;
						public static pageName: com.taobao.weex.common.WXPerformance.Dimension;
						public static spm: com.taobao.weex.common.WXPerformance.Dimension;
						public static scheme: com.taobao.weex.common.WXPerformance.Dimension;
						public static cacheType: com.taobao.weex.common.WXPerformance.Dimension;
						public static requestType: com.taobao.weex.common.WXPerformance.Dimension;
						public static networkType: com.taobao.weex.common.WXPerformance.Dimension;
						public static connectionType: com.taobao.weex.common.WXPerformance.Dimension;
						public static zcacheInfo: com.taobao.weex.common.WXPerformance.Dimension;
						public static wxContainerName: com.taobao.weex.common.WXPerformance.Dimension;
						public static wxInstanceType: com.taobao.weex.common.WXPerformance.Dimension;
						public static wxParentPage: com.taobao.weex.common.WXPerformance.Dimension;
						public static wxdim1: com.taobao.weex.common.WXPerformance.Dimension;
						public static wxdim2: com.taobao.weex.common.WXPerformance.Dimension;
						public static wxdim3: com.taobao.weex.common.WXPerformance.Dimension;
						public static wxdim4: com.taobao.weex.common.WXPerformance.Dimension;
						public static wxdim5: com.taobao.weex.common.WXPerformance.Dimension;
						public static bizType: com.taobao.weex.common.WXPerformance.Dimension;
						public static templateUrl: com.taobao.weex.common.WXPerformance.Dimension;
						public static useScroller: com.taobao.weex.common.WXPerformance.Dimension;
						public static valueOf(param0: string): com.taobao.weex.common.WXPerformance.Dimension;
						public static values(): androidNative.Array<com.taobao.weex.common.WXPerformance.Dimension>;
					}
					export class Measure {
						public static class: java.lang.Class<com.taobao.weex.common.WXPerformance.Measure>;
						public static JSLibSize: com.taobao.weex.common.WXPerformance.Measure;
						public static JSLibInitTime: com.taobao.weex.common.WXPerformance.Measure;
						public static SDKInitTime: com.taobao.weex.common.WXPerformance.Measure;
						public static SDKInitInvokeTime: com.taobao.weex.common.WXPerformance.Measure;
						public static SDKInitExecuteTime: com.taobao.weex.common.WXPerformance.Measure;
						public static JSTemplateSize: com.taobao.weex.common.WXPerformance.Measure;
						public static pureNetworkTime: com.taobao.weex.common.WXPerformance.Measure;
						public static networkTime: com.taobao.weex.common.WXPerformance.Measure;
						public static fsCreateInstanceTime: com.taobao.weex.common.WXPerformance.Measure;
						public static fsCallJsTotalTime: com.taobao.weex.common.WXPerformance.Measure;
						public static fsCallJsTotalNum: com.taobao.weex.common.WXPerformance.Measure;
						public static fsCallNativeTotalTime: com.taobao.weex.common.WXPerformance.Measure;
						public static fsCallNativeTotalNum: com.taobao.weex.common.WXPerformance.Measure;
						public static fsCallEventTotalNum: com.taobao.weex.common.WXPerformance.Measure;
						public static fsComponentCount: com.taobao.weex.common.WXPerformance.Measure;
						public static fsComponentCreateTime: com.taobao.weex.common.WXPerformance.Measure;
						public static fsRenderTime: com.taobao.weex.common.WXPerformance.Measure;
						public static fsRequestNum: com.taobao.weex.common.WXPerformance.Measure;
						public static callCreateFinishTime: com.taobao.weex.common.WXPerformance.Measure;
						public static cellExceedNum: com.taobao.weex.common.WXPerformance.Measure;
						public static communicateTotalTime: com.taobao.weex.common.WXPerformance.Measure;
						public static maxDeepViewLayer: com.taobao.weex.common.WXPerformance.Measure;
						public static maxDeepVDomLayer: com.taobao.weex.common.WXPerformance.Measure;
						public static componentCount: com.taobao.weex.common.WXPerformance.Measure;
						public static componentCreateTime: com.taobao.weex.common.WXPerformance.Measure;
						public static avgFps: com.taobao.weex.common.WXPerformance.Measure;
						public static timerCount: com.taobao.weex.common.WXPerformance.Measure;
						public static MaxImproveMemory: com.taobao.weex.common.WXPerformance.Measure;
						public static BackImproveMemory: com.taobao.weex.common.WXPerformance.Measure;
						public static PushImproveMemory: com.taobao.weex.common.WXPerformance.Measure;
						public static measureTime1: com.taobao.weex.common.WXPerformance.Measure;
						public static measureTime2: com.taobao.weex.common.WXPerformance.Measure;
						public static measureTime3: com.taobao.weex.common.WXPerformance.Measure;
						public static measureTime4: com.taobao.weex.common.WXPerformance.Measure;
						public static measureTime5: com.taobao.weex.common.WXPerformance.Measure;
						public static callBridgeTime: com.taobao.weex.common.WXPerformance.Measure;
						public static cssLayoutTime: com.taobao.weex.common.WXPerformance.Measure;
						public static parseJsonTime: com.taobao.weex.common.WXPerformance.Measure;
						public static communicateTime: com.taobao.weex.common.WXPerformance.Measure;
						public static screenRenderTime: com.taobao.weex.common.WXPerformance.Measure;
						public static totalTime: com.taobao.weex.common.WXPerformance.Measure;
						public static localReadTime: com.taobao.weex.common.WXPerformance.Measure;
						public static templateLoadTime: com.taobao.weex.common.WXPerformance.Measure;
						public static packageSpendTime: com.taobao.weex.common.WXPerformance.Measure;
						public static syncTaskTime: com.taobao.weex.common.WXPerformance.Measure;
						public static actualNetworkTime: com.taobao.weex.common.WXPerformance.Measure;
						public static firstScreenJSFExecuteTime: com.taobao.weex.common.WXPerformance.Measure;
						public static fluency: com.taobao.weex.common.WXPerformance.Measure;
						public static imgSizeCount: com.taobao.weex.common.WXPerformance.Measure;
						public static interactionTime: com.taobao.weex.common.WXPerformance.Measure;
						public static interactionViewAddCount: com.taobao.weex.common.WXPerformance.Measure;
						public static interactionViewAddLimitCount: com.taobao.weex.common.WXPerformance.Measure;
						public static newFsRenderTime: com.taobao.weex.common.WXPerformance.Measure;
						public static values(): androidNative.Array<com.taobao.weex.common.WXPerformance.Measure>;
						public getMaxRange(): number;
						public getMinRange(): number;
						public static valueOf(param0: string): com.taobao.weex.common.WXPerformance.Measure;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXRefreshData {
					public static class: java.lang.Class<com.taobao.weex.common.WXRefreshData>;
					public data: string;
					public isDirty: boolean;
					public constructor(param0: string, param1: boolean);
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXRenderStrategy {
					public static class: java.lang.Class<com.taobao.weex.common.WXRenderStrategy>;
					public static APPEND_ASYNC: com.taobao.weex.common.WXRenderStrategy;
					public static APPEND_ONCE: com.taobao.weex.common.WXRenderStrategy;
					public static DATA_RENDER: com.taobao.weex.common.WXRenderStrategy;
					public static DATA_RENDER_BINARY: com.taobao.weex.common.WXRenderStrategy;
					public static JSON_RENDER: com.taobao.weex.common.WXRenderStrategy;
					public static valueOf(param0: string): com.taobao.weex.common.WXRenderStrategy;
					public static values(): androidNative.Array<com.taobao.weex.common.WXRenderStrategy>;
					public getFlag(): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXRequest {
					public static class: java.lang.Class<com.taobao.weex.common.WXRequest>;
					public paramMap: java.util.Map<string,string>;
					public url: string;
					public method: string;
					public body: string;
					public timeoutMs: number;
					public static DEFAULT_TIMEOUT_MS: number;
					public instanceId: string;
					public sslVerify: boolean;
					public isFirstIpv4: boolean;
					public tls: com.alibaba.fastjson.JSONObject;
					public inputType: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXRequestListener {
					public static class: java.lang.Class<com.taobao.weex.common.WXRequestListener>;
					/**
					 * Constructs a new instance of the com.taobao.weex.common.WXRequestListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: number, param1: any, param2: com.taobao.weex.common.WXResponse): void;
						onError(param0: number, param1: any, param2: com.taobao.weex.common.WXResponse): void;
					});
					public constructor();
					public onError(param0: number, param1: any, param2: com.taobao.weex.common.WXResponse): void;
					public onSuccess(param0: number, param1: any, param2: com.taobao.weex.common.WXResponse): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXResponse {
					public static class: java.lang.Class<com.taobao.weex.common.WXResponse>;
					public statusCode: string;
					public data: string;
					public originalData: androidNative.Array<number>;
					public errorCode: string;
					public errorMsg: string;
					public toastMsg: string;
					public extendParams: java.util.Map<string,any>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXRuntimeException {
					public static class: java.lang.Class<com.taobao.weex.common.WXRuntimeException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXThread {
					public static class: java.lang.Class<com.taobao.weex.common.WXThread>;
					public constructor(param0: string, param1: globalAndroid.os.Handler.Callback);
					public static secure(param0: java.lang.Runnable): java.lang.Runnable;
					public constructor(param0: string);
					public static secure(param0: globalAndroid.os.Handler.Callback): globalAndroid.os.Handler.Callback;
					public constructor(param0: string, param1: number);
					public getHandler(): globalAndroid.os.Handler;
					public isWXThreadAlive(): boolean;
					public static secure(param0: java.lang.Runnable, param1: com.taobao.weex.WXSDKInstance, param2: string): java.lang.Runnable;
					public quit(): boolean;
					public constructor(param0: string, param1: number, param2: globalAndroid.os.Handler.Callback);
				}
				export module WXThread {
					export class SafeCallback {
						public static class: java.lang.Class<com.taobao.weex.common.WXThread.SafeCallback>;
						public handleMessage(param0: globalAndroid.os.Message): boolean;
					}
					export class SafeRunnable {
						public static class: java.lang.Class<com.taobao.weex.common.WXThread.SafeRunnable>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module common {
				export class WXWorkThreadManager {
					public static class: java.lang.Class<com.taobao.weex.common.WXWorkThreadManager>;
					public post(param0: java.lang.Runnable): void;
					public destroy(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class CSSConstants {
					public static class: java.lang.Class<com.taobao.weex.dom.CSSConstants>;
					public static UNDEFINED: number;
					public constructor();
					public static isUndefined(param0: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class CSSShorthand<T>  extends io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any> {
					public static class: java.lang.Class<com.taobao.weex.dom.CSSShorthand<any>>;
					public clone(): com.taobao.weex.dom.CSSShorthand<any>;
					public constructor();
					public clone(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
					public constructor(param0: androidNative.Array<number>);
				}
				export module CSSShorthand {
					export class CORNER extends com.taobao.weex.dom.CSSShorthand.WXCSSProperty {
						public static class: java.lang.Class<com.taobao.weex.dom.CSSShorthand.CORNER>;
						public static BORDER_TOP_LEFT: com.taobao.weex.dom.CSSShorthand.CORNER;
						public static BORDER_TOP_RIGHT: com.taobao.weex.dom.CSSShorthand.CORNER;
						public static BORDER_BOTTOM_RIGHT: com.taobao.weex.dom.CSSShorthand.CORNER;
						public static BORDER_BOTTOM_LEFT: com.taobao.weex.dom.CSSShorthand.CORNER;
						public static ALL: com.taobao.weex.dom.CSSShorthand.CORNER;
						public static values(): androidNative.Array<com.taobao.weex.dom.CSSShorthand.CORNER>;
						public static valueOf(param0: string): com.taobao.weex.dom.CSSShorthand.CORNER;
					}
					export class EDGE extends com.taobao.weex.dom.CSSShorthand.WXCSSProperty {
						public static class: java.lang.Class<com.taobao.weex.dom.CSSShorthand.EDGE>;
						public static TOP: com.taobao.weex.dom.CSSShorthand.EDGE;
						public static BOTTOM: com.taobao.weex.dom.CSSShorthand.EDGE;
						public static LEFT: com.taobao.weex.dom.CSSShorthand.EDGE;
						public static RIGHT: com.taobao.weex.dom.CSSShorthand.EDGE;
						public static ALL: com.taobao.weex.dom.CSSShorthand.EDGE;
						public static valueOf(param0: string): com.taobao.weex.dom.CSSShorthand.EDGE;
						public static values(): androidNative.Array<com.taobao.weex.dom.CSSShorthand.EDGE>;
					}
					export class WXCSSProperty extends io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CSSProperty {
						public static class: java.lang.Class<com.taobao.weex.dom.CSSShorthand.WXCSSProperty>;
						/**
						 * Constructs a new instance of the com.taobao.weex.dom.CSSShorthand$WXCSSProperty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class RenderContext {
					public static class: java.lang.Class<com.taobao.weex.dom.RenderContext>;
					/**
					 * Constructs a new instance of the com.taobao.weex.dom.RenderContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getInstance(): com.taobao.weex.WXSDKInstance;
						getComponent(param0: string): com.taobao.weex.ui.component.WXComponent<any>;
						unregisterComponent(param0: string): com.taobao.weex.ui.component.WXComponent<any>;
					});
					public constructor();
					public getInstance(): com.taobao.weex.WXSDKInstance;
					public getComponent(param0: string): com.taobao.weex.ui.component.WXComponent<any>;
					public unregisterComponent(param0: string): com.taobao.weex.ui.component.WXComponent<any>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class TextDecorationSpan {
					public static class: java.lang.Class<com.taobao.weex.dom.TextDecorationSpan>;
					public constructor(param0: com.taobao.weex.ui.component.WXTextDecoration);
					public updateDrawState(param0: globalAndroid.text.TextPaint): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class WXAttr extends io.dcloud.feature.uniapp.dom.AbsAttr {
					public static class: java.lang.Class<com.taobao.weex.dom.WXAttr>;
					public constructor();
					public clone(): io.dcloud.feature.uniapp.dom.AbsAttr;
					public constructor(param0: java.util.Map<string,any>);
					public constructor(param0: java.util.Map<string,any>, param1: number);
					public clone(): com.taobao.weex.dom.WXAttr;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class WXCustomStyleSpan {
					public static class: java.lang.Class<com.taobao.weex.dom.WXCustomStyleSpan>;
					public getFontFamily(): string;
					public getStyle(): number;
					public getWeight(): number;
					public updateDrawState(param0: globalAndroid.text.TextPaint): void;
					public updateMeasureState(param0: globalAndroid.text.TextPaint): void;
					public constructor(param0: number, param1: number, param2: string);
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class WXEvent extends io.dcloud.feature.uniapp.dom.AbsEvent {
					public static class: java.lang.Class<com.taobao.weex.dom.WXEvent>;
					public clone(): com.taobao.weex.dom.WXEvent;
					public constructor();
					public clone(): io.dcloud.feature.uniapp.dom.AbsEvent;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class WXImageQuality {
					public static class: java.lang.Class<com.taobao.weex.dom.WXImageQuality>;
					public static ORIGINAL: com.taobao.weex.dom.WXImageQuality;
					public static LOW: com.taobao.weex.dom.WXImageQuality;
					public static NORMAL: com.taobao.weex.dom.WXImageQuality;
					public static HIGH: com.taobao.weex.dom.WXImageQuality;
					public static AUTO: com.taobao.weex.dom.WXImageQuality;
					public static values(): androidNative.Array<com.taobao.weex.dom.WXImageQuality>;
					public static valueOf(param0: string): com.taobao.weex.dom.WXImageQuality;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class WXLineHeightSpan {
					public static class: java.lang.Class<com.taobao.weex.dom.WXLineHeightSpan>;
					public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.Paint.FontMetricsInt): void;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export class WXStyle extends io.dcloud.feature.uniapp.dom.AbsStyle {
					public static class: java.lang.Class<com.taobao.weex.dom.WXStyle>;
					public constructor();
					public clone(): com.taobao.weex.dom.WXStyle;
					public constructor(param0: java.util.Map<string,any>, param1: boolean);
					public constructor(param0: java.util.Map<string,any>);
					public clone(): io.dcloud.feature.uniapp.dom.AbsStyle;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export module binding {
					export class ELUtils {
						public static class: java.lang.Class<com.taobao.weex.dom.binding.ELUtils>;
						public static BINDING: string;
						public static IS_COMPONENT_ROOT: string;
						public static COMPONENT_PROPS: string;
						public static EXCLUDES_BINDING: androidNative.Array<string>;
						public static vforBlock(param0: any): any;
						public constructor();
						public static isBinding(param0: any): boolean;
						public static bindingBlock(param0: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export module binding {
					export class JSONUtils {
						public static class: java.lang.Class<com.taobao.weex.dom.binding.JSONUtils>;
						public static isJSON(param0: string): boolean;
						public constructor();
						public static isJSON(param0: any): boolean;
						public static toJSON(param0: any): com.alibaba.fastjson.JSONObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export module binding {
					export class WXStatement extends androidx.collection.ArrayMap<string,any> implements java.lang.Cloneable  {
						public static class: java.lang.Class<com.taobao.weex.dom.binding.WXStatement>;
						public static WX_FOR: string;
						public static WX_FOR_INDEX: string;
						public static WX_FOR_ITEM: string;
						public static WX_FOR_LIST: string;
						public static WX_IF: string;
						public static WX_ONCE: string;
						public constructor();
						public clone(): com.taobao.weex.dom.binding.WXStatement;
						public constructor(param0: androidx.collection.SimpleArrayMap);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module dom {
				export module transition {
					export class WXTransition {
						public static class: java.lang.Class<com.taobao.weex.dom.transition.WXTransition>;
						public static TRANSITION_PROPERTY: string;
						public static TRANSITION_DURATION: string;
						public static TRANSITION_DELAY: string;
						public static TRANSITION_TIMING_FUNCTION: string;
						public static PROPERTY_SPLIT_PATTERN: java.util.regex.Pattern;
						public constructor();
						public static asynchronouslyUpdateLayout(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: string, param2: number): void;
						public getProperties(): java.util.List<string>;
						public static fromMap(param0: java.util.Map<string,any>, param1: com.taobao.weex.ui.component.WXComponent<any>): com.taobao.weex.dom.transition.WXTransition;
						public updateTranstionParams(param0: java.util.Map<string,any>): void;
						public hasTransitionProperty(param0: java.util.Map<string,any>): boolean;
						public doPendingLayoutAnimation(): void;
						public startTransition(param0: java.util.Map<string,any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module el {
				export module parse {
					export class ArrayStack<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.taobao.weex.el.parse.ArrayStack<any>>;
						public constructor();
						public pop(): T;
						public push(param0: T): void;
						public add(param0: number, param1: T): void;
						public peek(): T;
						public get(param0: number): T;
						public isEmpty(): boolean;
						public remove(param0: number): T;
						public size(): number;
						public getList(): java.util.List<T>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module el {
				export module parse {
					export class Block extends com.taobao.weex.el.parse.Token {
						public static class: java.lang.Class<com.taobao.weex.el.parse.Block>;
						public constructor(param0: java.util.List<com.taobao.weex.el.parse.Token>, param1: number);
						public constructor(param0: string, param1: number);
						public execute(param0: any): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module el {
				export module parse {
					export class Operator extends com.taobao.weex.el.parse.Token {
						public static class: java.lang.Class<com.taobao.weex.el.parse.Operator>;
						public self: com.taobao.weex.el.parse.Token;
						public first: com.taobao.weex.el.parse.Token;
						public second: com.taobao.weex.el.parse.Token;
						public constructor(param0: string, param1: number);
						public execute(param0: any): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module el {
				export module parse {
					export class Operators {
						public static class: java.lang.Class<com.taobao.weex.el.parse.Operators>;
						public static BRACKET_END: string;
						public static BRACKET_END_STR: string;
						public static BRACKET_START: string;
						public static BRACKET_START_STR: string;
						public static QUOTE: string;
						public static SINGLE_QUOTE: string;
						public static DOT: string;
						public static DOT_STR: string;
						public static ARRAY_START: string;
						public static ARRAY_START_STR: string;
						public static ARRAY_SEPRATOR: string;
						public static ARRAY_SEPRATOR_STR: string;
						public static ARRAY_END: string;
						public static ARRAY_END_STR: string;
						public static SPACE_STR: string;
						public static SPACE: string;
						public static BLOCK_START: string;
						public static BLOCK_START_STR: string;
						public static BLOCK_END: string;
						public static BLOCK_END_STR: string;
						public static DOLLAR: string;
						public static DOLLAR_STR: string;
						public static CONDITION_IF: string;
						public static CONDITION_IF_STRING: string;
						public static CONDITION_IF_MIDDLE: string;
						public static PLUS: string;
						public static SUB: string;
						public static MUL: string;
						public static DIV: string;
						public static MOD: string;
						public static AND: string;
						public static OR: string;
						public static EQUAL: string;
						public static EQUAL2: string;
						public static NOT_EQUAL: string;
						public static NOT_EQUAL2: string;
						public static AND_NOT: string;
						public static G: string;
						public static GE: string;
						public static LE: string;
						public static L: string;
						public static OPERATORS_PRIORITY: java.util.Map<string,java.lang.Integer>;
						public static KEYWORDS: java.util.Map<string,any>;
						public static isTrue(param0: any): boolean;
						public static isDot(param0: string): boolean;
						public constructor();
						public static div(param0: com.taobao.weex.el.parse.Token, param1: com.taobao.weex.el.parse.Token, param2: any): any;
						public static sub(param0: com.taobao.weex.el.parse.Token, param1: com.taobao.weex.el.parse.Token, param2: any): any;
						public static mod(param0: com.taobao.weex.el.parse.Token, param1: com.taobao.weex.el.parse.Token, param2: any): any;
						public static dot(param0: com.taobao.weex.el.parse.Token, param1: com.taobao.weex.el.parse.Token, param2: any): any;
						public static specialKey(param0: any, param1: string): any;
						public static condition(param0: com.taobao.weex.el.parse.Token, param1: com.taobao.weex.el.parse.Token, param2: com.taobao.weex.el.parse.Token, param3: any): any;
						public static isOpEnd(param0: string): boolean;
						public static isEquals(param0: com.taobao.weex.el.parse.Token, param1: com.taobao.weex.el.parse.Token, param2: any): boolean;
						public static plus(param0: com.taobao.weex.el.parse.Token, param1: com.taobao.weex.el.parse.Token, param2: any): any;
						public static el(param0: any, param1: string): any;
						public static mul(param0: com.taobao.weex.el.parse.Token, param1: com.taobao.weex.el.parse.Token, param2: any): any;
						public static tokenTrue(param0: com.taobao.weex.el.parse.Token, param1: any): boolean;
						public static isEmpty(param0: string): boolean;
						public static tokenNumber(param0: com.taobao.weex.el.parse.Token, param1: any): number;
						public static getNumber(param0: any): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module el {
				export module parse {
					export class Parser {
						public static class: java.lang.Class<com.taobao.weex.el.parse.Parser>;
						public parse(): com.taobao.weex.el.parse.Token;
						public constructor(param0: string);
						public static parse(param0: string): com.taobao.weex.el.parse.Token;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module el {
				export module parse {
					export class Symbol {
						public static class: java.lang.Class<com.taobao.weex.el.parse.Symbol>;
						public op: string;
						public pos: number;
						public constructor(param0: string, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module el {
				export module parse {
					export class Token {
						public static class: java.lang.Class<com.taobao.weex.el.parse.Token>;
						public static TYPE_IDENTIFIER: number;
						public static TYPE_INT: number;
						public static TYPE_DOUBLE: number;
						public static TYPE_STRING: number;
						public static TYPE_KEYWORD: number;
						public static TYPE_OPERATOR: number;
						public static TYPE_BLOCK: number;
						public static TYPE_ARRAY: number;
						public constructor(param0: string, param1: number);
						public execute(param0: any): any;
						public getType(): number;
						public toString(): string;
						public getToken(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module font {
				export class FontAdapter {
					public static class: java.lang.Class<com.taobao.weex.font.FontAdapter>;
					public removeFontListener(param0: com.taobao.weex.font.FontListener): void;
					public constructor();
					public onAddFontRule(param0: string, param1: string, param2: string): void;
					public addFontListener(param0: com.taobao.weex.font.FontListener): void;
					public onFontLoad(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module font {
				export class FontListener {
					public static class: java.lang.Class<com.taobao.weex.font.FontListener>;
					/**
					 * Constructs a new instance of the com.taobao.weex.font.FontListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAddFontRule(param0: string, param1: string, param2: string): void;
						onFontLoad(param0: string, param1: string, param2: string): void;
					});
					public constructor();
					public onAddFontRule(param0: string, param1: string, param2: string): void;
					public onFontLoad(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module http {
				export class CertDTO {
					public static class: java.lang.Class<com.taobao.weex.http.CertDTO>;
					public host: string;
					public client: string;
					public clientPassword: string;
					public server: androidNative.Array<string>;
					public getClientPassword(): string;
					public getServer(): androidNative.Array<string>;
					public setClientPassword(param0: string): void;
					public constructor();
					public setServer(param0: androidNative.Array<string>): void;
					public setHost(param0: string): void;
					public setClient(param0: string): void;
					public getHost(): string;
					public getClient(): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module http {
				export class CertJSResponse {
					public static class: java.lang.Class<com.taobao.weex.http.CertJSResponse>;
					public type: string;
					public code: number;
					public message: string;
					public constructor();
					public static obtainFail(param0: number, param1: string): com.taobao.weex.http.CertJSResponse;
					public static obtainSuccess(): com.taobao.weex.http.CertJSResponse;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module http {
				export class Options {
					public static class: java.lang.Class<com.taobao.weex.http.Options>;
					public getHeaders(): java.util.Map<string,string>;
					public getType(): com.taobao.weex.http.Options.Type;
					public getInputType(): string;
					public getTlsConfig(): com.alibaba.fastjson.JSONObject;
					public getUrl(): string;
					public getTimeout(): number;
					public isFirstIpv4(): boolean;
					public setInputType(param0: string): void;
					public getBody(): string;
					public getSslVerify(): boolean;
					public setTlsConfig(param0: com.alibaba.fastjson.JSONObject): void;
					public getMethod(): string;
				}
				export module Options {
					export class Builder {
						public static class: java.lang.Class<com.taobao.weex.http.Options.Builder>;
						public constructor();
						public setInputTypes(param0: string): com.taobao.weex.http.Options.Builder;
						public setType(param0: com.taobao.weex.http.Options.Type): com.taobao.weex.http.Options.Builder;
						public setMethod(param0: string): com.taobao.weex.http.Options.Builder;
						public setFirstIpv4(param0: boolean): com.taobao.weex.http.Options.Builder;
						public putHeader(param0: string, param1: string): com.taobao.weex.http.Options.Builder;
						public setType(param0: string): com.taobao.weex.http.Options.Builder;
						public setSslVerify(param0: boolean): com.taobao.weex.http.Options.Builder;
						public setTimeout(param0: number): com.taobao.weex.http.Options.Builder;
						public createOptions(): com.taobao.weex.http.Options;
						public setAndroidTlsConfig(param0: com.alibaba.fastjson.JSONObject): com.taobao.weex.http.Options.Builder;
						public setUrl(param0: string): com.taobao.weex.http.Options.Builder;
						public setBody(param0: string): com.taobao.weex.http.Options.Builder;
					}
					export class Type {
						public static class: java.lang.Class<com.taobao.weex.http.Options.Type>;
						public static json: com.taobao.weex.http.Options.Type;
						public static text: com.taobao.weex.http.Options.Type;
						public static jsonp: com.taobao.weex.http.Options.Type;
						public static base64: com.taobao.weex.http.Options.Type;
						public static values(): androidNative.Array<com.taobao.weex.http.Options.Type>;
						public static valueOf(param0: string): com.taobao.weex.http.Options.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module http {
				export class Status {
					public static class: java.lang.Class<com.taobao.weex.http.Status>;
					public static UNKNOWN_STATUS: string;
					public static ERR_INVALID_REQUEST: string;
					public static ERR_CONNECT_FAILED: string;
					public constructor();
					public static getStatusText(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module http {
				export class WXHttpUtil {
					public static class: java.lang.Class<com.taobao.weex.http.WXHttpUtil>;
					public static KEY_USER_AGENT: string;
					public constructor();
					public static assembleUserAgent(param0: globalAndroid.content.Context, param1: java.util.Map<string,string>): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module http {
				export class WXStreamModule extends com.taobao.weex.common.WXModule {
					public static class: java.lang.Class<com.taobao.weex.http.WXStreamModule>;
					public static STATUS_TEXT: string;
					public static STATUS: string;
					public static certMap: java.util.HashMap<string,com.taobao.weex.http.CertDTO>;
					public fetch(param0: com.alibaba.fastjson.JSONObject, param1: com.taobao.weex.bridge.JSCallback, param2: com.taobao.weex.bridge.JSCallback): void;
					public constructor();
					public fetch(param0: com.alibaba.fastjson.JSONObject, param1: com.taobao.weex.bridge.JSCallback, param2: com.taobao.weex.bridge.JSCallback, param3: string, param4: string): void;
					/** @deprecated */
					public sendHttp(param0: com.alibaba.fastjson.JSONObject, param1: string): void;
					public configMTLS(param0: com.alibaba.fastjson.JSONArray, param1: com.taobao.weex.bridge.JSCallback): void;
					public fetchWithArrayBuffer(param0: com.alibaba.fastjson.JSONObject, param1: com.alibaba.fastjson.JSONObject, param2: com.taobao.weex.bridge.JSCallback, param3: com.taobao.weex.bridge.JSCallback): void;
					public constructor(param0: com.taobao.weex.adapter.IWXHttpAdapter);
				}
				export module WXStreamModule {
					export class ResponseCallback {
						public static class: java.lang.Class<com.taobao.weex.http.WXStreamModule.ResponseCallback>;
						/**
						 * Constructs a new instance of the com.taobao.weex.http.WXStreamModule$ResponseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onResponse(param0: com.taobao.weex.common.WXResponse, param1: java.util.Map<string,string>): void;
						});
						public constructor();
						public onResponse(param0: com.taobao.weex.common.WXResponse, param1: java.util.Map<string,string>): void;
					}
					export class StreamHttpListener extends com.taobao.weex.adapter.IWXHttpAdapter.OnHttpListener {
						public static class: java.lang.Class<com.taobao.weex.http.WXStreamModule.StreamHttpListener>;
						public onHttpResponseProgress(param0: number): void;
						public onHttpStart(): void;
						public onHttpUploadProgress(param0: number): void;
						public onHeadersReceived(param0: number, param1: java.util.Map<string,java.util.List<string>>): void;
						public onHttpFinish(param0: com.taobao.weex.common.WXResponse): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module instance {
				export abstract class InstanceOnFireEventInterceptor {
					public static class: java.lang.Class<com.taobao.weex.instance.InstanceOnFireEventInterceptor>;
					public onInterceptFireEvent(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>, param4: java.util.Map<string,any>): void;
					public getListenEvents(): java.util.List<string>;
					public onFireEvent(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>, param4: java.util.Map<string,any>): void;
					public constructor();
					public addInterceptEvent(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module layout {
				export abstract class ContentBoxMeasurement extends com.taobao.weex.common.Destroyable {
					public static class: java.lang.Class<com.taobao.weex.layout.ContentBoxMeasurement>;
					public mComponent: com.taobao.weex.ui.component.WXComponent<any>;
					public mMeasureWidth: number;
					public mMeasureHeight: number;
					public mMeasureExactly: boolean;
					public layoutBefore(): void;
					public destroy(): void;
					public constructor();
					public getHeight(): number;
					public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>);
					public getWidth(): number;
					public measureInternal(param0: number, param1: number, param2: number, param3: number): void;
					public measure(param0: number, param1: number, param2: number, param3: number): void;
					public layoutAfter(param0: number, param1: number): void;
					public getMeasureExactly(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module layout {
				export class MeasureMode {
					public static class: java.lang.Class<com.taobao.weex.layout.MeasureMode>;
					public static EXACTLY: number;
					public static UNSPECIFIED: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module layout {
				export class MeasureSize {
					public static class: java.lang.Class<com.taobao.weex.layout.MeasureSize>;
					public constructor();
					public setWidth(param0: number): void;
					public getHeight(): number;
					public setHeight(param0: number): void;
					public getWidth(): number;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module layout {
				export module measurefunc {
					export class TextContentBoxMeasurement extends com.taobao.weex.layout.ContentBoxMeasurement {
						public static class: java.lang.Class<com.taobao.weex.layout.measurefunc.TextContentBoxMeasurement>;
						public mIsColorSet: boolean;
						public mColor: number;
						public mFontStyle: number;
						public mFontWeight: number;
						public mFontSize: number;
						public mLineHeight: number;
						public mFontFamily: string;
						public mAlignment: globalAndroid.text.Layout.Alignment;
						public mTextDecoration: com.taobao.weex.ui.component.WXTextDecoration;
						public mTextPaint: globalAndroid.text.TextPaint;
						public forceRelayout(): void;
						public constructor();
						public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>);
						public setSpan(param0: globalAndroid.text.Spannable, param1: any, param2: number, param3: number, param4: number): void;
						public layoutBefore(): void;
						public measureInternal(param0: number, param1: number, param2: number, param3: number): void;
						public destroy(): void;
						public createSpanned(param0: string): globalAndroid.text.Spanned;
						public layoutAfter(param0: number, param1: number): void;
						public updateSpannable(param0: globalAndroid.text.Spannable, param1: number): void;
					}
					export module TextContentBoxMeasurement {
						export class SetSpanOperation {
							public static class: java.lang.Class<com.taobao.weex.layout.measurefunc.TextContentBoxMeasurement.SetSpanOperation>;
							public start: number;
							public end: number;
							public flag: number;
							public what: any;
							public execute(param0: globalAndroid.text.Spannable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module performance {
				export class IApmGenerator {
					public static class: java.lang.Class<com.taobao.weex.performance.IApmGenerator>;
					/**
					 * Constructs a new instance of the com.taobao.weex.performance.IApmGenerator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						generateApmInstance(param0: string): com.taobao.weex.performance.IWXApmMonitorAdapter;
					});
					public constructor();
					public generateApmInstance(param0: string): com.taobao.weex.performance.IWXApmMonitorAdapter;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module performance {
				export class IWXAnalyzer {
					public static class: java.lang.Class<com.taobao.weex.performance.IWXAnalyzer>;
					/**
					 * Constructs a new instance of the com.taobao.weex.performance.IWXAnalyzer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transfer(param0: string, param1: string, param2: string, param3: string): void;
					});
					public constructor();
					public transfer(param0: string, param1: string, param2: string, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module performance {
				export class IWXApmMonitorAdapter {
					public static class: java.lang.Class<com.taobao.weex.performance.IWXApmMonitorAdapter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.performance.IWXApmMonitorAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStart(param0: string): void;
						onEnd(): void;
						onEvent(param0: string, param1: any): void;
						onStage(param0: string, param1: number): void;
						addProperty(param0: string, param1: any): void;
						addStats(param0: string, param1: number): void;
						onSubProcedureStage(param0: string, param1: string): void;
						onSubProcedureEvent(param0: string, param1: string): void;
						setSubProcedureStats(param0: string, param1: string, param2: number): void;
						setSubProcedureProperties(param0: string, param1: string, param2: any): void;
						onAppear(): void;
						onDisappear(): void;
						parseReportUrl(param0: string): string;
					});
					public constructor();
					public onAppear(): void;
					public parseReportUrl(param0: string): string;
					public addStats(param0: string, param1: number): void;
					public setSubProcedureProperties(param0: string, param1: string, param2: any): void;
					public onStage(param0: string, param1: number): void;
					public onSubProcedureEvent(param0: string, param1: string): void;
					public onSubProcedureStage(param0: string, param1: string): void;
					public onEnd(): void;
					public addProperty(param0: string, param1: any): void;
					public onStart(param0: string): void;
					public setSubProcedureStats(param0: string, param1: string, param2: number): void;
					public onEvent(param0: string, param1: any): void;
					public onDisappear(): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module performance {
				export class WXAnalyzerDataTransfer {
					public static class: java.lang.Class<com.taobao.weex.performance.WXAnalyzerDataTransfer>;
					public static isOpenPerformance: boolean;
					public static INTERACTION_TAG: string;
					public static transferError(param0: com.taobao.weex.common.WXJSExceptionInfo, param1: string): void;
					public constructor();
					public static isInteractionLogOpen(): boolean;
					public static transferPerformance(param0: string, param1: string, param2: string, param3: any): void;
					public static switchInteractionLog(param0: boolean): void;
					public static transferInteractionInfo(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module performance {
				export class WXInstanceApm {
					public static class: java.lang.Class<com.taobao.weex.performance.WXInstanceApm>;
					public static WEEX_PAGE_TOPIC: string;
					public static KEY_PROPERTIES_ERROR_CODE: string;
					public static KEY_PAGE_PROPERTIES_BIZ_ID: string;
					public static KEY_PAGE_PROPERTIES_BUBDLE_URL: string;
					public static KEY_PAGE_PROPERTIES_JSLIB_VERSION: string;
					public static KEY_PAGE_PROPERTIES_WEEX_VERSION: string;
					public static KEY_PAGE_PROPERTIES_REQUEST_TYPE: string;
					public static KEY_PAGE_PROPERTIES_CACHE_TYPE: string;
					public static KEY_PAGE_PROPERTIES_CACHE_INFO: string;
					public static KEY_PAGE_PROPERTIES_JS_FM_INI: string;
					public static KEY_PAGE_PROPERTIES_CONTAINER_NAME: string;
					public static KEY_PAGE_PROPERTIES_INSTANCE_TYPE: string;
					public static KEY_PAGE_PROPERTIES_PARENT_PAGE: string;
					public static KEY_PAGE_PROPERTIES_BUNDLE_TYPE: string;
					public static KEY_PAGE_PROPERTIES_RENDER_TYPE: string;
					public static KEY_PAGE_PROPERTIES_UIKIT_TYPE: string;
					public static KEY_PAGE_STAGES_CONTAINER_READY: string;
					public static KEY_PAGE_STAGES_DOWN_BUNDLE_START: string;
					public static KEY_PAGE_STAGES_DOWN_BUNDLE_END: string;
					public static KEY_PAGE_STAGES_RENDER_ORGIGIN: string;
					public static KEY_PAGE_STAGES_LOAD_BUNDLE_START: string;
					public static KEY_PAGE_STAGES_LOAD_BUNDLE_END: string;
					public static KEY_PAGE_STAGES_FIRST_INTERACTION_VIEW: string;
					public static KEY_PAGE_STAGES_CREATE_FINISH: string;
					public static KEY_PAGE_STAGES_FSRENDER: string;
					public static KEY_PAGE_STAGES_NEW_FSRENDER: string;
					public static KEY_PAGE_STAGES_END_EXCUTE_BUNDLE: string;
					public static KEY_PAGE_STAGES_INTERACTION: string;
					public static KEY_PAGE_STAGES_DESTROY: string;
					public static KEY_PAGE_STAGES_CUSTOM_PREPROCESS_START: string;
					public static KEY_PAGE_STAGES_CUSTOM_PREPROCESS_END: string;
					public static KEY_PAGE_STATS_BUNDLE_SIZE: string;
					public static KEY_PAGE_STATS_FS_CALL_JS_TIME: string;
					public static KEY_PAGE_STATS_FS_CALL_JS_NUM: string;
					public static KEY_PAGE_STATS_FS_TIMER_NUM: string;
					public static KEY_PAGE_STATS_FS_CALL_NATIVE_TIME: string;
					public static KEY_PAGE_STATS_FS_CALL_NATIVE_NUM: string;
					public static KEY_PAGE_STATS_FS_CALL_EVENT_NUM: string;
					public static KEY_PAGE_STATS_FS_REQUEST_NUM: string;
					public static KEY_PAGE_STATS_CELL_EXCEED_NUM: string;
					public static KEY_PAGE_STATS_MAX_DEEP_VIEW: string;
					public static KEY_PAGE_STATS_MAX_DEEP_DOM: string;
					public static KEY_PAGE_STATS_MAX_COMPONENT_NUM: string;
					public static KEY_PAGE_STATS_WRONG_IMG_SIZE_COUNT: string;
					public static KEY_PAGE_STATS_EMBED_COUNT: string;
					public static KEY_PAGE_STATS_LARGE_IMG_COUNT: string;
					public static KEY_PAGE_STATS_BODY_RATIO: string;
					public static KEY_PAGE_STATS_SCROLLER_NUM: string;
					public static KEY_PAGE_STATS_CELL_DATA_UN_RECYCLE_NUM: string;
					public static KEY_PAGE_STATS_CELL_UN_RE_USE_NUM: string;
					public static KEY_PAGE_STATS_IMG_UN_RECYCLE_NUM: string;
					public static KEY_PAGE_STATS_I_SCREEN_VIEW_COUNT: string;
					public static KEY_PAGE_STATS_I_ALL_VIEW_COUNT: string;
					public static KEY_PAGE_STATS_I_COMPONENT_CREATE_COUNT: string;
					public static KEY_PAGE_ANIM_BACK_NUM: string;
					public static KEY_PAGE_TIMER_BACK_NUM: string;
					public static KEY_PAGE_STATS_ACTUAL_DOWNLOAD_TIME: string;
					public static KEY_PAGE_STATS_IMG_LOAD_NUM: string;
					public static KEY_PAGE_STATS_IMG_LOAD_SUCCESS_NUM: string;
					public static KEY_PAGE_STATS_IMG_LOAD_FAIL_NUM: string;
					public static KEY_PAGE_STATS_NET_NUM: string;
					public static KEY_PAGE_STATS_NET_SUCCESS_NUM: string;
					public static KEY_PAGE_STATS_NET_FAIL_NUM: string;
					public static KEY_PAGE_STATS_JSLIB_INIT_TIME: string;
					public static KEY_PAGE_STATS_VIEW_CREATE_COST: string;
					public static KEY_PAGE_STATS_COMPONENT_CREATE_COST: string;
					public static KEY_PAGE_STATS_EXECUTE_JS_CALLBACK_COST: string;
					public static KEY_PAGE_STATS_LAYOUT_TIME: string;
					public static VALUE_ERROR_CODE_DEFAULT: string;
					public static VALUE_BUNDLE_LOAD_LENGTH: string;
					public stageMap: java.util.Map<string,java.lang.Long>;
					public extInfo: java.util.Map<string,any>;
					public forceStopRecordInteraction: boolean;
					public instanceRect: globalAndroid.graphics.Rect;
					public reportPageName: string;
					public hasReportLayerOverDraw: boolean;
					public hasAddView: boolean;
					public exceptionRecord: java.util.Set<string>;
					public componentCreateTime: number;
					public viewCreateTime: number;
					public isReady: boolean;
					public actionNetRequest(): void;
					public hasInit(): boolean;
					public updateDiffStats(param0: string, param1: number): void;
					public constructor(param0: string);
					public updateFSDiffStats(param0: string, param1: number): void;
					public doDelayCollectData(): void;
					public updateRecordInfo(param0: java.util.Map<string,any>): void;
					public doInit(): void;
					public onStage(param0: string): void;
					public arriveNewFsRenderTime(): void;
					public updateNativePerformanceData(param0: java.util.Map<string,string>): void;
					public onEnd(): void;
					public arriveFSRenderTime(): void;
					public onStageWithTime(param0: string, param1: number): void;
					public onDisAppear(): void;
					public onAppear(): void;
					public onInstanceReady(param0: boolean): void;
					public addStats(param0: string, param1: number): void;
					public recordPerformanceDetailData(): void;
					public actionLoadImgResult(param0: boolean, param1: string): void;
					public sendPerformanceToJS(): void;
					public arriveInteraction(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
					public actionLoadImg(): void;
					public toPerfString(): string;
					public addProperty(param0: string, param1: any): void;
					public updateMaxStats(param0: string, param1: number): void;
					public actionNetResult(param0: boolean, param1: string): void;
					public onEvent(param0: string, param1: any): void;
					public setPageName(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module performance {
				export class WXStateRecord {
					public static class: java.lang.Class<com.taobao.weex.performance.WXStateRecord>;
					public onJSFMInit(): void;
					public onJSCCrash(param0: string): void;
					public recordAction(param0: string, param1: string): void;
					public recordJsThreadWatch(param0: string): void;
					public recordException(param0: string, param1: string): void;
					public onJSEngineReload(param0: string): void;
					public static getInstance(): com.taobao.weex.performance.WXStateRecord;
					public startJSThreadWatchDog(): void;
					public recoreJsfmInitHistory(param0: string): void;
					public recordIPCException(param0: string, param1: string): void;
					public getStateInfo(): java.util.Map<string,string>;
				}
				export module WXStateRecord {
					export class Info extends java.lang.Comparable<com.taobao.weex.performance.WXStateRecord.Info> {
						public static class: java.lang.Class<com.taobao.weex.performance.WXStateRecord.Info>;
						public compareTo(param0: com.taobao.weex.performance.WXStateRecord.Info): number;
						public constructor(param0: number, param1: string, param2: string);
						public toString(): string;
					}
					export class RecordList<E>  extends java.util.concurrent.ConcurrentLinkedQueue<any> {
						public static class: java.lang.Class<com.taobao.weex.performance.WXStateRecord.RecordList<any>>;
						public constructor(param0: number);
					}
					export class SingleTonHolder {
						public static class: java.lang.Class<com.taobao.weex.performance.WXStateRecord.SingleTonHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module performance {
				export class WhiteScreenUtils {
					public static class: java.lang.Class<com.taobao.weex.performance.WhiteScreenUtils>;
					public static isWhiteScreen(param0: com.taobao.weex.WXSDKInstance): boolean;
					public static doWhiteScreenCheck(): boolean;
					public constructor();
					public static takeViewTreeSnapShot(param0: com.taobao.weex.WXSDKInstance): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module render {
				export class WXAbstractRenderContainer {
					public static class: java.lang.Class<com.taobao.weex.render.WXAbstractRenderContainer>;
					public mSDKInstance: java.lang.ref.WeakReference<com.taobao.weex.WXSDKInstance>;
					public mHasConsumeEvent: boolean;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setSDKInstance(param0: com.taobao.weex.WXSDKInstance): void;
					public createInstanceRenderView(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public hasConsumeEvent(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module tracing {
				export class Stopwatch {
					public static class: java.lang.Class<com.taobao.weex.tracing.Stopwatch>;
					public static tick(): void;
					public static nanosToMillis(param0: number): number;
					public constructor();
					public static lastTickStamp(): number;
					public static getProcessEvents(): java.util.List<com.taobao.weex.tracing.Stopwatch.ProcessEvent>;
					public static split(param0: string): void;
					public static millisUntilNow(param0: number): number;
					public static tack(): number;
					public static tackAndTick(): number;
				}
				export module Stopwatch {
					export class ProcessEvent {
						public static class: java.lang.Class<com.taobao.weex.tracing.Stopwatch.ProcessEvent>;
						public fname: string;
						public duration: number;
						public startMillis: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module tracing {
				export class WXTracing {
					public static class: java.lang.Class<com.taobao.weex.tracing.WXTracing>;
					public constructor();
					public static nextId(): number;
					public static currentThreadName(): string;
					public static submit(param0: com.taobao.weex.tracing.WXTracing.TraceEvent): void;
					public static newEvent(param0: string, param1: string, param2: number): com.taobao.weex.tracing.WXTracing.TraceEvent;
					public static isAvailable(): boolean;
				}
				export module WXTracing {
					export class TraceEvent {
						public static class: java.lang.Class<com.taobao.weex.tracing.WXTracing.TraceEvent>;
						public fname: string;
						public tname: string;
						public ph: string;
						public traceId: number;
						public ts: number;
						public iid: string;
						public ref: string;
						public parentRef: string;
						public name: string;
						public classname: string;
						public parentId: number;
						public duration: number;
						public subEvents: globalAndroid.util.SparseArray<com.taobao.weex.tracing.WXTracing.TraceEvent>;
						public payload: string;
						public parseJsonTime: number;
						public isSegment: boolean;
						public extParams: java.util.Map<string,any>;
						public firstScreenFinish: boolean;
						public constructor();
						public submit(): void;
					}
					export class TraceInfo {
						public static class: java.lang.Class<com.taobao.weex.tracing.WXTracing.TraceInfo>;
						public rootEventId: number;
						public domQueueTime: number;
						public uiQueueTime: number;
						public domThreadStart: number;
						public domThreadNanos: number;
						public uiThreadStart: number;
						public uiThreadNanos: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class ComponentCreator {
					public static class: java.lang.Class<com.taobao.weex.ui.ComponentCreator>;
					/**
					 * Constructs a new instance of the com.taobao.weex.ui.ComponentCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
					});
					public constructor();
					public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class ExternalLoaderComponentHolder extends com.taobao.weex.ui.IFComponentHolder {
					public static class: java.lang.Class<com.taobao.weex.ui.ExternalLoaderComponentHolder>;
					public static TAG: string;
					public loadIfNonLazy(): void;
					public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					public constructor(param0: string, param1: com.taobao.weex.ui.IExternalComponentGetter);
					public getPropertyInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
					public getMethods(): androidNative.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class IExternalComponentGetter {
					public static class: java.lang.Class<com.taobao.weex.ui.IExternalComponentGetter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.ui.IExternalComponentGetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getExternalComponentClass(param0: string, param1: com.taobao.weex.WXSDKInstance): java.lang.Class<any>;
					});
					public constructor();
					public getExternalComponentClass(param0: string, param1: com.taobao.weex.WXSDKInstance): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class IExternalModuleGetter {
					public static class: java.lang.Class<com.taobao.weex.ui.IExternalModuleGetter>;
					/**
					 * Constructs a new instance of the com.taobao.weex.ui.IExternalModuleGetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getExternalModuleClass(param0: string, param1: globalAndroid.content.Context): java.lang.Class<any>;
					});
					public constructor();
					public getExternalModuleClass(param0: string, param1: globalAndroid.content.Context): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class IFComponentHolder extends io.dcloud.feature.uniapp.ui.AbsIComponentHolder {
					public static class: java.lang.Class<com.taobao.weex.ui.IFComponentHolder>;
					/**
					 * Constructs a new instance of the com.taobao.weex.ui.IFComponentHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadIfNonLazy(): void;
						getPropertyInvoker(param0: string): com.taobao.weex.bridge.Invoker;
						createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						getMethods(): androidNative.Array<string>;
						getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					});
					public constructor();
					public loadIfNonLazy(): void;
					public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					public getPropertyInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
					public getMethods(): androidNative.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class RenderContextImpl extends com.taobao.weex.dom.RenderContext {
					public static class: java.lang.Class<com.taobao.weex.ui.RenderContextImpl>;
					public getInstance(): com.taobao.weex.WXSDKInstance;
					public destroy(): void;
					public getWXSDKInstance(): com.taobao.weex.WXSDKInstance;
					public getComponent(param0: string): com.taobao.weex.ui.component.WXComponent<any>;
					public getComponentCount(): number;
					public setAllScrollerScrollable(param0: boolean, param1: string): void;
					public registerComponent(param0: string, param1: com.taobao.weex.ui.component.WXComponent<any>): void;
					public constructor(param0: com.taobao.weex.WXSDKInstance);
					public unregisterComponent(param0: string): com.taobao.weex.ui.component.WXComponent<any>;
					public getComponentById(param0: string): com.taobao.weex.ui.component.WXComponent<any>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class SimpleComponentHolder extends com.taobao.weex.ui.IFComponentHolder {
					public static class: java.lang.Class<com.taobao.weex.ui.SimpleComponentHolder>;
					public static TAG: string;
					public loadIfNonLazy(): void;
					public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					public constructor(param0: java.lang.Class<any>);
					public static getMethods(param0: java.lang.Class<any>): globalAndroid.util.Pair<java.util.Map<string,com.taobao.weex.bridge.Invoker>,java.util.Map<string,com.taobao.weex.bridge.Invoker>>;
					public getPropertyInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
					public constructor(param0: java.lang.Class<any>, param1: com.taobao.weex.ui.ComponentCreator);
					public getMethods(): androidNative.Array<string>;
				}
				export module SimpleComponentHolder {
					export class ClazzComponentCreator extends com.taobao.weex.ui.ComponentCreator {
						public static class: java.lang.Class<com.taobao.weex.ui.SimpleComponentHolder.ClazzComponentCreator>;
						public constructor(param0: java.lang.Class<any>);
						public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class WXComponentRegistry {
					public static class: java.lang.Class<com.taobao.weex.ui.WXComponentRegistry>;
					public constructor();
					public static reload(): void;
					public static registerComponent(param0: java.util.Map<string,com.taobao.weex.utils.cache.RegisterCache.ComponentCache>): boolean;
					public static getComponent(param0: string): com.taobao.weex.ui.IFComponentHolder;
					public static registerComponent(param0: string, param1: com.taobao.weex.ui.IFComponentHolder, param2: java.util.Map<string,any>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class WXRenderHandler {
					public static class: java.lang.Class<com.taobao.weex.ui.WXRenderHandler>;
					public post(param0: string, param1: java.lang.Runnable): boolean;
					public constructor();
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export class WXRenderManager {
					public static class: java.lang.Class<com.taobao.weex.ui.WXRenderManager>;
					public registerComponent(param0: string, param1: string, param2: com.taobao.weex.ui.component.WXComponent<any>): void;
					public static getOpenGLRenderLimitValue(): number;
					public getWXComponent(param0: string, param1: string): com.taobao.weex.ui.component.WXComponent<any>;
					public postGraphicAction(param0: string, param1: com.taobao.weex.ui.action.BasicGraphicAction): void;
					public getAllInstances(): java.util.List<com.taobao.weex.WXSDKInstance>;
					public getWXComponentById(param0: string, param1: string): com.taobao.weex.ui.component.WXComponent<any>;
					public postOnUiThread(param0: java.lang.Runnable, param1: number): void;
					public getRenderContext(param0: string): com.taobao.weex.dom.RenderContext;
					public getWXSDKInstance(param0: string): com.taobao.weex.WXSDKInstance;
					public removeTask(param0: java.lang.Runnable): void;
					public unregisterComponent(param0: string, param1: string): com.taobao.weex.ui.component.WXComponent<any>;
					public postOnUiThread(param0: java.lang.Runnable, param1: string): void;
					public setScrollable(param0: string, param1: boolean, param2: string): void;
					public constructor();
					public postOnUiThread(param0: java.lang.Runnable): void;
					public removeRenderStatement(param0: string): void;
					public registerInstance(param0: com.taobao.weex.WXSDKInstance): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class ActionAddRule extends com.taobao.weex.ui.action.IExecutable {
						public static class: java.lang.Class<com.taobao.weex.ui.action.ActionAddRule>;
						public constructor(param0: string, param1: string, param2: com.alibaba.fastjson.JSONObject);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class ActionGetComponentRect extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.ActionGetComponentRect>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class ActionGetLayoutDirection extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.ActionGetLayoutDirection>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class ActionInvokeMethod extends com.taobao.weex.ui.action.IExecutable {
						public static class: java.lang.Class<com.taobao.weex.ui.action.ActionInvokeMethod>;
						public constructor(param0: string, param1: string, param2: string, param3: com.alibaba.fastjson.JSONArray);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class ActionReloadPage extends com.taobao.weex.ui.action.IExecutable {
						public static class: java.lang.Class<com.taobao.weex.ui.action.ActionReloadPage>;
						public executeAction(): void;
						public constructor(param0: string, param1: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class BasicComponentData<T>  extends io.dcloud.feature.uniapp.ui.action.AbsComponentData<any> {
						public static class: java.lang.Class<com.taobao.weex.ui.action.BasicComponentData<any>>;
						public getEvents(): com.taobao.weex.dom.WXEvent;
						public getAttrs(): com.taobao.weex.dom.WXAttr;
						public clone(): io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>;
						public getMargin(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
						public getAttrs(): io.dcloud.feature.uniapp.dom.AbsAttr;
						public getPadding(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
						public getBorder(): com.taobao.weex.dom.CSSShorthand<any>;
						public getStyles(): io.dcloud.feature.uniapp.dom.AbsStyle;
						public constructor(param0: string, param1: string, param2: string);
						public getStyles(): com.taobao.weex.dom.WXStyle;
						public getBorder(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
						public getMargin(): com.taobao.weex.dom.CSSShorthand<any>;
						public getEvents(): io.dcloud.feature.uniapp.dom.AbsEvent;
						public clone(): com.taobao.weex.ui.action.BasicComponentData<any>;
						public getPadding(): com.taobao.weex.dom.CSSShorthand<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export abstract class BasicGraphicAction extends com.taobao.weex.ui.action.IExecutable {
						public static class: java.lang.Class<com.taobao.weex.ui.action.BasicGraphicAction>;
						public mActionType: number;
						public static ActionTypeBatchBegin: number;
						public static ActionTypeBatchEnd: number;
						public static ActionTypeNormal: number;
						public getRef(): string;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public run(): void;
						public getPageId(): string;
						public executeActionOnRender(): void;
						public getWXSDKIntance(): com.taobao.weex.WXSDKInstance;
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export abstract class GraphicActionAbstractAddElement extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionAbstractAddElement>;
						public mComponentType: string;
						public mParentRef: string;
						public mIndex: number;
						public mStyle: java.util.Map<string,string>;
						public mAttributes: java.util.Map<string,string>;
						public mEvents: java.util.Set<string>;
						public mMargins: androidNative.Array<number>;
						public mPaddings: androidNative.Array<number>;
						public mBorders: androidNative.Array<number>;
						public getEvents(): java.util.Set<string>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public createComponent(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						public getAttributes(): java.util.Map<string,string>;
						public getStyle(): java.util.Map<string,string>;
						public getComponentType(): string;
						public getParentRef(): string;
						public getIndex(): number;
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionAddChildToRichtext extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionAddChildToRichtext>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string, param3: string, param4: string, param5: java.util.HashMap<string,string>, param6: java.util.HashMap<string,string>);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionAddElement extends com.taobao.weex.ui.action.GraphicActionAbstractAddElement {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionAddElement>;
						public setSize(param0: com.taobao.weex.ui.action.GraphicSize): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public setRTL(param0: boolean): void;
						public setIndex(param0: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string, param3: string, param4: number, param5: java.util.Map<string,string>, param6: java.util.Map<string,string>, param7: java.util.Set<string>, param8: androidNative.Array<number>, param9: androidNative.Array<number>, param10: androidNative.Array<number>);
						public setPosition(param0: com.taobao.weex.ui.action.GraphicPosition): void;
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionAddEvent extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionAddEvent>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: any);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionAnimation extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionAnimation>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: com.taobao.weex.ui.animation.WXAnimationBean, param3: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string, param3: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: com.taobao.weex.ui.animation.WXAnimationBean);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionAppendTreeCreateFinish extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionAppendTreeCreateFinish>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionBatchAction extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionBatchAction>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: java.util.List<com.taobao.weex.ui.action.BasicGraphicAction>);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionBatchBegin extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionBatchBegin>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionBatchEnd extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionBatchEnd>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionCreateBody extends com.taobao.weex.ui.action.GraphicActionAbstractAddElement {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionCreateBody>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string, param3: java.util.Map<string,string>, param4: java.util.Map<string,string>, param5: java.util.Set<string>, param6: androidNative.Array<number>, param7: androidNative.Array<number>, param8: androidNative.Array<number>);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionCreateFinish extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionCreateFinish>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionLayout extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionLayout>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: com.taobao.weex.ui.action.GraphicPosition, param3: com.taobao.weex.ui.action.GraphicSize, param4: boolean);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionMoveElement extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionMoveElement>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string, param3: number);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionRefreshFinish extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionRefreshFinish>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionRemoveChildFromRichtext extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionRemoveChildFromRichtext>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string, param3: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionRemoveElement extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionRemoveElement>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionRemoveEvent extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionRemoveEvent>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: any);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionRenderSuccess extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionRenderSuccess>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionScrollToElement extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionScrollToElement>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: com.alibaba.fastjson.JSONObject);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionUpdateAttr extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionUpdateAttr>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: java.util.Map<string,string>);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionUpdateRichtextAttr extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionUpdateRichtextAttr>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionUpdateRichtextStyle extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionUpdateRichtextStyle>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: java.util.HashMap<string,string>, param3: string, param4: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicActionUpdateStyle extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicActionUpdateStyle>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: java.util.Map<string,any>, param3: com.taobao.weex.dom.CSSShorthand<any>, param4: com.taobao.weex.dom.CSSShorthand<any>, param5: com.taobao.weex.dom.CSSShorthand<any>, param6: boolean);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,string>, param4: java.util.Map<string,string>, param5: java.util.Map<string,string>, param6: boolean);
						public executeAction(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,string>, param4: java.util.Map<string,string>, param5: java.util.Map<string,string>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicPosition {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicPosition>;
						public getTop(): number;
						public getLeft(): number;
						public getBottom(): number;
						public setBottom(param0: number): void;
						public update(param0: number, param1: number, param2: number, param3: number): void;
						public getRight(): number;
						public setLeft(param0: number): void;
						public setRight(param0: number): void;
						public setTop(param0: number): void;
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class GraphicSize {
						public static class: java.lang.Class<com.taobao.weex.ui.action.GraphicSize>;
						public setWidth(param0: number): void;
						public getWidth(): number;
						public setHeight(param0: number): void;
						public update(param0: number, param1: number): void;
						public getHeight(): number;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class IExecutable {
						public static class: java.lang.Class<com.taobao.weex.ui.action.IExecutable>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.action.IExecutable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							executeAction(): void;
						});
						public constructor();
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module action {
					export class UpdateComponentDataAction extends com.taobao.weex.ui.action.BasicGraphicAction {
						public static class: java.lang.Class<com.taobao.weex.ui.action.UpdateComponentDataAction>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: com.alibaba.fastjson.JSONObject, param3: string);
						public executeAction(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module animation {
					export class BackgroundColorProperty extends globalAndroid.util.Property<globalAndroid.view.View,java.lang.Integer> {
						public static class: java.lang.Class<com.taobao.weex.ui.animation.BackgroundColorProperty>;
						public get(param0: globalAndroid.view.View): java.lang.Integer;
						public constructor();
						public set(param0: globalAndroid.view.View, param1: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module animation {
					export class CameraDistanceProperty extends globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float> {
						public static class: java.lang.Class<com.taobao.weex.ui.animation.CameraDistanceProperty>;
						public get(param0: globalAndroid.view.View): java.lang.Float;
						public set(param0: globalAndroid.view.View, param1: java.lang.Float): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module animation {
					export class HeightProperty extends com.taobao.weex.ui.animation.LayoutParamsProperty {
						public static class: java.lang.Class<com.taobao.weex.ui.animation.HeightProperty>;
						public constructor();
						public getProperty(param0: globalAndroid.view.ViewGroup.LayoutParams): java.lang.Integer;
						public setProperty(param0: globalAndroid.view.ViewGroup.LayoutParams, param1: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module animation {
					export abstract class LayoutParamsProperty extends globalAndroid.util.Property<globalAndroid.view.View,java.lang.Integer> {
						public static class: java.lang.Class<com.taobao.weex.ui.animation.LayoutParamsProperty>;
						public get(param0: globalAndroid.view.View): java.lang.Integer;
						public set(param0: globalAndroid.view.View, param1: java.lang.Integer): void;
						public getProperty(param0: globalAndroid.view.ViewGroup.LayoutParams): java.lang.Integer;
						public setProperty(param0: globalAndroid.view.ViewGroup.LayoutParams, param1: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module animation {
					export class TransformParser {
						public static class: java.lang.Class<com.taobao.weex.ui.animation.TransformParser>;
						public static WX_TRANSLATE: string;
						public static WX_TRANSLATE_X: string;
						public static WX_TRANSLATE_Y: string;
						public static WX_ROTATE: string;
						public static WX_ROTATE_X: string;
						public static WX_ROTATE_Y: string;
						public static WX_ROTATE_Z: string;
						public static WX_SCALE: string;
						public static WX_SCALE_X: string;
						public static WX_SCALE_Y: string;
						public static BACKGROUND_COLOR: string;
						public static WIDTH: string;
						public static HEIGHT: string;
						public static TOP: string;
						public static BOTTOM: string;
						public static RIGHT: string;
						public static LEFT: string;
						public static CENTER: string;
						public static wxToAndroidMap: java.util.Map<string,java.util.List<globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>>>;
						public constructor();
						public static parseTransForm(param0: string, param1: string, param2: number, param3: number, param4: number): java.util.Map<globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>,java.lang.Float>;
						public static toHolders(param0: java.util.Map<globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>,java.lang.Float>): androidNative.Array<globalAndroid.animation.PropertyValuesHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module animation {
					export class WXAnimationBean {
						public static class: java.lang.Class<com.taobao.weex.ui.animation.WXAnimationBean>;
						public static LINEAR: string;
						public static EASE_IN_OUT: string;
						public static EASE_IN: string;
						public static EASE_OUT: string;
						public static CUBIC_BEZIER: string;
						public static NUM_CUBIC_PARAM: number;
						public delay: number;
						public duration: number;
						public timingFunction: string;
						public styles: com.taobao.weex.ui.animation.WXAnimationBean.Style;
						public needLayout: boolean;
						public constructor();
					}
					export module WXAnimationBean {
						export class Style {
							public static class: java.lang.Class<com.taobao.weex.ui.animation.WXAnimationBean.Style>;
							public static WX_TRANSLATE: string;
							public static WX_TRANSLATE_X: string;
							public static WX_TRANSLATE_Y: string;
							public static WX_ROTATE: string;
							public static WX_SCALE_X: string;
							public static WX_SCALE_Y: string;
							public static WX_SCALE: string;
							public static WX_ROTATE_X: string;
							public static WX_ROTATE_Y: string;
							public static BACKGROUND_COLOR: string;
							public static WIDTH: string;
							public static HEIGHT: string;
							public static TOP: string;
							public static BOTTOM: string;
							public static RIGHT: string;
							public static LEFT: string;
							public static CENTER: string;
							public static wxToAndroidMap: java.util.Map<string,java.util.List<globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>>>;
							public opacity: string;
							public backgroundColor: string;
							public width: string;
							public height: string;
							public transform: string;
							public transformOrigin: string;
							public constructor();
							public init(param0: string, param1: string, param2: number, param3: number, param4: number, param5: com.taobao.weex.WXSDKInstance): void;
							public init(param0: java.util.Map<globalAndroid.util.Property<globalAndroid.view.View,java.lang.Float>,globalAndroid.util.Pair<java.lang.Float,java.lang.Float>>): void;
							public getPivot(): globalAndroid.util.Pair<java.lang.Float,java.lang.Float>;
							public getHolders(): java.util.List<globalAndroid.animation.PropertyValuesHolder>;
							public getCameraDistance(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module animation {
					export class WXAnimationModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<com.taobao.weex.ui.animation.WXAnimationModule>;
						public constructor();
						public transition(param0: string, param1: string, param2: string): void;
					}
					export module WXAnimationModule {
						export class AnimationHolder extends io.dcloud.feature.uniapp.ui.AbsAnimationHolder {
							public static class: java.lang.Class<com.taobao.weex.ui.animation.WXAnimationModule.AnimationHolder>;
							public constructor(param0: com.taobao.weex.ui.animation.WXAnimationBean, param1: string);
							public execute(param0: io.dcloud.feature.uniapp.AbsSDKInstance, param1: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module animation {
					export class WidthProperty extends com.taobao.weex.ui.animation.LayoutParamsProperty {
						public static class: java.lang.Class<com.taobao.weex.ui.animation.WidthProperty>;
						public constructor();
						public getProperty(param0: globalAndroid.view.ViewGroup.LayoutParams): java.lang.Integer;
						public setProperty(param0: globalAndroid.view.ViewGroup.LayoutParams, param1: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export abstract class AbstractEditComponent extends com.taobao.weex.ui.component.WXComponent<com.taobao.weex.ui.view.WXEditText> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.AbstractEditComponent>;
						public setPlaceholderColor(param0: string): void;
						public setMaxLength(param0: number): void;
						public performOnChange(param0: string): void;
						public appleStyleAfterCreated(param0: com.taobao.weex.ui.view.WXEditText): void;
						public focus(): void;
						public destroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setMax(param0: string): void;
						public setType(param0: string): void;
						public onActivityPause(): void;
						public onHostViewInitialized(param0: com.taobao.weex.ui.view.WXEditText): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setAutofocus(param0: boolean): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getMeasuredLineHeight(): number;
						/** @deprecated */
						public setMaxlength(param0: number): void;
						public addEditorActionListener(param0: globalAndroid.widget.TextView.OnEditorActionListener): void;
						public setSelectionRange(param0: number, param1: number): void;
						public setColor(param0: string): void;
						public onActivityResume(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getSelectionRange(param0: string): void;
						public addTextChangedListener(param0: globalAndroid.text.TextWatcher): void;
						public setFontSize(param0: string): void;
						public setLines(param0: number): void;
						public isConsumeTouch(): boolean;
						public onActivityCreate(): void;
						public setReturnKeyType(param0: string): void;
						public setValue(param0: string): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public blur(): void;
						public onActivityBack(): boolean;
						public getMeasureHeight(): number;
						public addEvent(param0: string): void;
						public setTextAlign(param0: string): void;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXEditText;
						public onHostViewInitialized(param0: any): void;
						public layoutDirectionDidChanged(param0: boolean): void;
						public convertEmptyProperty(param0: string, param1: any): any;
						public getVerticalGravity(): number;
						public setSingleLine(param0: boolean): void;
						public setMin(param0: string): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setPlaceholder(param0: string): void;
						public setProperty(param0: string, param1: any): boolean;
						public addEvent(param0: java.util.Set<string>): void;
						public updateStyleAndAttrs(): void;
						public setTextFormatter(param0: com.alibaba.fastjson.JSONObject): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityDestroy(): void;
					}
					export module AbstractEditComponent {
						export class PatternWrapper {
							public static class: java.lang.Class<com.taobao.weex.ui.component.AbstractEditComponent.PatternWrapper>;
						}
						export class ReturnTypes {
							public static class: java.lang.Class<com.taobao.weex.ui.component.AbstractEditComponent.ReturnTypes>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.AbstractEditComponent$ReturnTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static DONE: string;
							public static SEARCH: string;
							public static NEXT: string;
							public static GO: string;
							public static DEFAULT: string;
							public static SEND: string;
						}
						export class TextFormatter {
							public static class: java.lang.Class<com.taobao.weex.ui.component.AbstractEditComponent.TextFormatter>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class AppearanceHelper {
						public static class: java.lang.Class<com.taobao.weex.ui.component.AppearanceHelper>;
						public static APPEAR: number;
						public static DISAPPEAR: number;
						public static RESULT_APPEAR: number;
						public static RESULT_DISAPPEAR: number;
						public static RESULT_NO_CHANGE: number;
						public isWatch(): boolean;
						public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>);
						public getCellPositionINScollable(): number;
						public getAwareChild(): com.taobao.weex.ui.component.WXComponent<any>;
						public isViewVisible(param0: boolean): boolean;
						public isViewVisible(param0: globalAndroid.view.View): boolean;
						public setCellPosition(param0: number): void;
						public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number);
						public setWatchEvent(param0: number, param1: boolean): void;
						public setAppearStatus(param0: boolean): number;
						public isAppear(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class ConfirmBar {
						public static class: java.lang.Class<com.taobao.weex.ui.component.ConfirmBar>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class DCTextArea extends com.taobao.weex.ui.component.DCWXInput {
						public static class: java.lang.Class<com.taobao.weex.ui.component.DCTextArea>;
						public appleStyleAfterCreated(param0: com.taobao.weex.ui.view.WXEditText): void;
						public destroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setHostLayoutParams(param0: com.taobao.weex.ui.view.WXEditText, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public setType(param0: string): void;
						public onActivityCreate(): void;
						public onActivityPause(): void;
						public onHostViewInitialized(param0: com.taobao.weex.ui.view.WXEditText): void;
						public onActivityStart(): void;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public addEvent(param0: string): void;
						public getMeasureHeight(): number;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onHostViewInitialized(param0: any): void;
						public setShowConfirmBar(param0: boolean): void;
						public setHostLayoutParams(param0: any, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public getVerticalGravity(): number;
						public setSingleLine(param0: boolean): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setProperty(param0: string, param1: any): boolean;
						public addEvent(param0: java.util.Set<string>): void;
						public setAutoHeight(param0: boolean): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public setFocusAndBlur(): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class DCWXInput extends com.taobao.weex.ui.component.WXComponent<com.taobao.weex.ui.view.WXEditText> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.DCWXInput>;
						public mType: string;
						public isNeedConfirm: boolean;
						public setPlaceholderColor(param0: string): void;
						public setMaxLength(param0: number): void;
						public appleStyleAfterCreated(param0: com.taobao.weex.ui.view.WXEditText): void;
						public focus(): void;
						public destroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getValue(): string;
						public setType(param0: string): void;
						/** @deprecated */
						public updateProperties(param0: java.util.Map<string,any>): void;
						public onActivityPause(): void;
						public onHostViewInitialized(param0: com.taobao.weex.ui.view.WXEditText): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setAutofocus(param0: boolean): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						/** @deprecated */
						public setMaxlength(param0: number): void;
						public updateProperties(param0: java.util.Map<string,any>): void;
						public setColor(param0: string): void;
						public onActivityResume(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getSelectionRange(param0: string): void;
						public setFontSize(param0: string): void;
						public setLines(param0: number): void;
						public setHostLayoutParams(param0: com.taobao.weex.ui.view.WXEditText, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public setPlaceholderStyle(param0: com.alibaba.fastjson.JSONObject): void;
						public setLayoutSize(param0: com.taobao.weex.ui.action.GraphicSize): void;
						public isConsumeTouch(): boolean;
						public onActivityCreate(): void;
						public setReturnKeyType(param0: string): void;
						public setAdjustPosition(param0: any): void;
						public setValue(param0: string): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public blur(): void;
						public onActivityBack(): boolean;
						public getCursor(param0: com.taobao.weex.bridge.JSCallback): void;
						public getMeasureHeight(): number;
						public addEvent(param0: string): void;
						public setTextAlign(param0: string): void;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXEditText;
						public onHostViewInitialized(param0: any): void;
						public layoutDirectionDidChanged(param0: boolean): void;
						public setHostLayoutParams(param0: any, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public setCursorSpacing(param0: string): void;
						public convertEmptyProperty(param0: string, param1: any): any;
						public getVerticalGravity(): number;
						public setSingleLine(param0: boolean): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setPlaceholder(param0: string): void;
						public setProperty(param0: string, param1: any): boolean;
						public addEvent(param0: java.util.Set<string>): void;
						public setPlaceholderClass(param0: com.alibaba.fastjson.JSONObject): void;
						public setTextFormatter(param0: com.alibaba.fastjson.JSONObject): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public setFocusAndBlur(): void;
						public setText(param0: string): void;
						public onActivityDestroy(): void;
					}
					export module DCWXInput {
						export class PatternWrapper {
							public static class: java.lang.Class<com.taobao.weex.ui.component.DCWXInput.PatternWrapper>;
						}
						export class ReturnTypes {
							public static class: java.lang.Class<com.taobao.weex.ui.component.DCWXInput.ReturnTypes>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.DCWXInput$ReturnTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static DONE: string;
							public static SEARCH: string;
							public static NEXT: string;
							public static GO: string;
							public static DEFAULT: string;
							public static SEND: string;
						}
						export class TextFormatter {
							public static class: java.lang.Class<com.taobao.weex.ui.component.DCWXInput.TextFormatter>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class DCWXScroller extends com.taobao.weex.ui.component.WXBaseScroller implements io.dcloud.feature.weex_scroller.view.DCWXScrollView.WXScrollViewListener, com.taobao.weex.ui.component.Scrollable {
						public static class: java.lang.Class<com.taobao.weex.ui.component.DCWXScroller>;
						public static DIRECTION: string;
						public mOrientation: number;
						/** @deprecated */
						public getView(): globalAndroid.view.View;
						public destroy(): void;
						public onFinishLayout(): void;
						public isEnableBackToTop(param0: boolean): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						/** @deprecated */
						public getView(): globalAndroid.view.ViewGroup;
						public measure(param0: number, param1: number): com.taobao.weex.ui.component.WXComponent.MeasureOutput;
						public getScrollEvent(param0: number, param1: number): java.util.Map<string,any>;
						public getScrollX(): number;
						public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public getRealView(): globalAndroid.view.ViewGroup;
						public onActivityPause(): void;
						public onScroll(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public scrollBy(param0: number, param1: number, param2: boolean): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setScrollTop(param0: string): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public getInnerView(): globalAndroid.view.ViewGroup;
						public getOrientation(): number;
						public scrollTo(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,any>): void;
						public getScrollEvent(param0: number, param1: number, param2: number, param3: number): java.util.Map<string,any>;
						public getRef(): string;
						public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
						public isScrollable(): boolean;
						public setScrollLeft(param0: string): void;
						public setOffsetAccuracy(param0: number): void;
						public onLoadMore(param0: globalAndroid.widget.FrameLayout, param1: number, param2: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public scrollTo(param0: number): void;
						public unbindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public scrollToTop(): void;
						public remove(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
						public onScrollStopped(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
						public onScrollToTop(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
						public getChildrenLayoutTopOffset(): number;
						public setUpperHeight(param0: number): void;
						public unbindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public getStickMap(): java.util.Map<string,java.util.Map<string,com.taobao.weex.ui.component.WXComponent<any>>>;
						public getView(): globalAndroid.view.ViewGroup;
						public onScrollToBottom(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public scrollTo(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public scrollBy(param0: number, param1: number): void;
						public setDecelerationRate(param0: number): void;
						public resetLoadmore(): void;
						public onActivityResume(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setScrollable(param0: boolean): void;
						public getScrollY(): number;
						public getRealView(): globalAndroid.view.View;
						public createViewImpl(): void;
						public onActivityCreate(): void;
						public addSubView(param0: globalAndroid.view.View, param1: number): void;
						public setScrollWithAnimation(param0: boolean): void;
						public onActivityStart(): void;
						public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public bindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public onScrollChanged(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number, param3: number, param4: number): void;
						public onActivityBack(): boolean;
						public addEvent(param0: string): void;
						public onScroll(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
						public setLowwerHeight(param0: number): void;
						public onScrollToBottom(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
						public setLayout(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public onScrollStopped(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setProperty(param0: string, param1: any): boolean;
						public addEvent(param0: java.util.Set<string>): void;
						public initComponentHostView(param0: globalAndroid.content.Context): globalAndroid.view.ViewGroup;
						public setMarginsSupportRTL(param0: globalAndroid.view.ViewGroup.MarginLayoutParams, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onScrollChanged(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number, param3: number, param4: number): void;
						public getScrollStartEndHelper(): com.taobao.weex.ui.component.helper.ScrollStartEndHelper;
						public bindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public notifyAppearStateChange(param0: string, param1: string): void;
						public setShowScrollbar(param0: boolean): void;
						public onActivityDestroy(): void;
						public setScrollIntoView(param0: string): void;
					}
					export module DCWXScroller {
						export class Creator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<com.taobao.weex.ui.component.DCWXScroller.Creator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
						export class MyGestureDetector {
							public static class: java.lang.Class<com.taobao.weex.ui.component.DCWXScroller.MyGestureDetector>;
							public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
							public getScrollView(): io.dcloud.feature.weex_scroller.view.DCWXHorizontalScrollView;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class NestedContainer {
						public static class: java.lang.Class<com.taobao.weex.ui.component.NestedContainer>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.component.NestedContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setOnNestEventListener(param0: com.taobao.weex.ui.component.NestedContainer.OnNestedInstanceEventListener): void;
							getViewContainer(): globalAndroid.view.ViewGroup;
							renderNewURL(param0: string): void;
							reload(): void;
						});
						public constructor();
						public setOnNestEventListener(param0: com.taobao.weex.ui.component.NestedContainer.OnNestedInstanceEventListener): void;
						public renderNewURL(param0: string): void;
						public reload(): void;
						public getViewContainer(): globalAndroid.view.ViewGroup;
					}
					export module NestedContainer {
						export class OnNestedInstanceEventListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.NestedContainer.OnNestedInstanceEventListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.NestedContainer$OnNestedInstanceEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onException(param0: com.taobao.weex.ui.component.NestedContainer, param1: string, param2: string): void;
								onPreCreate(param0: com.taobao.weex.ui.component.NestedContainer, param1: string): boolean;
								transformUrl(param0: string): string;
								onCreated(param0: com.taobao.weex.ui.component.NestedContainer, param1: com.taobao.weex.WXSDKInstance): void;
							});
							public constructor();
							public onException(param0: com.taobao.weex.ui.component.NestedContainer, param1: string, param2: string): void;
							public onCreated(param0: com.taobao.weex.ui.component.NestedContainer, param1: com.taobao.weex.WXSDKInstance): void;
							public transformUrl(param0: string): string;
							public onPreCreate(param0: com.taobao.weex.ui.component.NestedContainer, param1: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class Scrollable {
						public static class: java.lang.Class<com.taobao.weex.ui.component.Scrollable>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.component.Scrollable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							bindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							bindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							unbindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							unbindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							getView(): globalAndroid.view.ViewGroup;
							scrollTo(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,any>): void;
							getRef(): string;
							getScrollY(): number;
							getScrollX(): number;
							getOrientation(): number;
							isScrollable(): boolean;
						});
						public constructor();
						public getRef(): string;
						public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public isScrollable(): boolean;
						public unbindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public getScrollX(): number;
						public unbindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public getView(): globalAndroid.view.ViewGroup;
						public bindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public bindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public scrollTo(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,any>): void;
						public getScrollY(): number;
						public getOrientation(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class Textarea extends com.taobao.weex.ui.component.AbstractEditComponent {
						public static class: java.lang.Class<com.taobao.weex.ui.component.Textarea>;
						public static DEFAULT_ROWS: number;
						public appleStyleAfterCreated(param0: com.taobao.weex.ui.view.WXEditText): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getVerticalGravity(): number;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public setProperty(param0: string, param1: any): boolean;
						public updateStyleAndAttrs(): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onHostViewInitialized(param0: com.taobao.weex.ui.view.WXEditText): void;
						public onActivityStart(): void;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getMeasureHeight(): number;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onHostViewInitialized(param0: any): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setRows(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXA extends com.taobao.weex.ui.component.WXDiv {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXA>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public promoteToView(param0: boolean): boolean;
						public onHostViewInitialized(param0: com.taobao.weex.ui.view.WXFrameLayout): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public getOrCreateFlatWidget(): com.taobao.weex.ui.flat.widget.WidgetGroup;
						public setProperty(param0: string, param1: any): boolean;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public getOrCreateFlatWidget(): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onHostViewInitialized(param0: any): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXBaseRefresh extends com.taobao.weex.ui.component.WXVContainer<com.taobao.weex.ui.view.WXFrameLayout> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXBaseRefresh>;
						public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXFrameLayout;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXBaseScroller extends com.taobao.weex.ui.component.WXVContainer<globalAndroid.view.ViewGroup> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXBaseScroller>;
						/** @deprecated */
						public getView(): globalAndroid.view.View;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						/** @deprecated */
						public getView(): globalAndroid.view.ViewGroup;
						public onActivityCreate(): void;
						public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public getScrollX(): number;
						public getScrollEvent(param0: number, param1: number): java.util.Map<string,any>;
						public onActivityPause(): void;
						public onScroll(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public onActivityStart(): void;
						public bindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public onScrollChanged(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number, param3: number, param4: number): void;
						public onActivityBack(): boolean;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public scrollTo(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,any>): void;
						public getOrientation(): number;
						public getInnerView(): globalAndroid.view.ViewGroup;
						public getRef(): string;
						public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public isScrollable(): boolean;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public unbindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public onScrollStopped(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public unbindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public getStickMap(): java.util.Map<string,java.util.Map<string,com.taobao.weex.ui.component.WXComponent<any>>>;
						public getView(): globalAndroid.view.ViewGroup;
						public onScrollToBottom(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public bindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getScrollY(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXBasicComponentType {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXBasicComponentType>;
						public static TEXT: string;
						public static IMAGE: string;
						public static IMG: string;
						public static CONTAINER: string;
						public static DIV: string;
						public static SCROLLER: string;
						public static SLIDER: string;
						public static SLIDER_NEIGHBOR: string;
						public static LIST: string;
						public static RECYCLER: string;
						public static WATERFALL: string;
						public static VLIST: string;
						public static HLIST: string;
						public static CELL: string;
						public static HEADER: string;
						public static FOOTER: string;
						public static INDICATOR: string;
						public static VIDEO: string;
						public static INPUT: string;
						public static TEXTAREA: string;
						public static A: string;
						public static EMBED: string;
						public static WEB: string;
						public static REFRESH: string;
						public static LOADING: string;
						public static LOADING_INDICATOR: string;
						public static CYCLE_SLIDER: string;
						public static RICHTEXT: string;
						public static RECYCLE_LIST: string;
						public static CELL_SLOT: string;
						public static VIEW: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export abstract class WXComponent<T>  extends com.taobao.weex.ui.component.basic.WXBasicComponent<any> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXComponent<any>>;
						public static PROP_FIXED_SIZE: string;
						public static PROP_FS_MATCH_PARENT: string;
						public static PROP_FS_WRAP_CONTENT: string;
						public static TYPE: string;
						public static ROOT: string;
						public mGesture: com.taobao.weex.ui.view.gesture.WXGesture;
						public mDeepInComponentTree: number;
						public mIsAddElementToTree: boolean;
						public interactionAbsoluteX: number;
						public interactionAbsoluteY: number;
						public mTraceInfo: com.taobao.weex.tracing.WXTracing.TraceInfo;
						public static TYPE_COMMON: number;
						public static TYPE_VIRTUAL: number;
						public isIgnoreInteraction: boolean;
						public contentBoxMeasurement: com.taobao.weex.layout.ContentBoxMeasurement;
						public static STATE_DOM_FINISH: number;
						public static STATE_UI_FINISH: number;
						public static STATE_ALL_FINISH: number;
						public isRippleEnabled(): boolean;
						public removeStickyStyle(): void;
						public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
						/** @deprecated */
						public getView(): globalAndroid.view.View;
						public onFinishLayout(): void;
						public destroy(): void;
						public getAttrByKey(param0: string): string;
						public setBorderWidth(param0: string, param1: number): void;
						public getInstanceId(): string;
						public setBorderColor(param0: string, param1: string): void;
						public setPseudoClassStatus(param0: string, param1: boolean): void;
						public onRenderFinish(param0: number): void;
						public getHostView(): any;
						public removeLayerOverFlowListener(param0: string): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public fireEvent(param0: string): void;
						public onActivityStop(): void;
						public isWaste(): boolean;
						public setSafeLayout(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public addClickListener(param0: com.taobao.weex.ui.component.WXComponent.OnClickListener): void;
						public setOpacity(param0: number): void;
						public appendEventToDOM(param0: string): void;
						public getHover(): io.dcloud.weex.ViewHover;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public removeEvent(param0: string): void;
						public setStickyOffset(param0: number): void;
						public getAbsoluteX(): number;
						public getParent(): com.taobao.weex.ui.component.WXVContainer<any>;
						public refreshData(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public detachViewAndClearPreInfo(): globalAndroid.view.View;
						public addAnimationForElement(param0: java.util.Map<string,any>): void;
						public getRenderObjectPtr(): number;
						public setHoverReceiveTouch(param0: boolean): void;
						public updateNativeStyles(param0: java.util.Map<string,any>): void;
						public lazy(param0: boolean): void;
						public fireEvent(param0: string, param1: java.util.Map<string,any>): void;
						public clearBoxShadow(): void;
						public setTransition(param0: com.taobao.weex.dom.transition.WXTransition): void;
						public addLayerOverFlowListener(param0: string): void;
						public getRealView(): globalAndroid.view.View;
						public setDemission(param0: com.taobao.weex.ui.action.GraphicSize, param1: com.taobao.weex.ui.action.GraphicPosition): void;
						public fireEvent(param0: string, param1: java.util.Map<string,any>, param2: java.util.Map<string,any>): void;
						public createViewImpl(): void;
						public removeEventFromView(param0: string): void;
						public computeVisiblePointInViewCoordinate(param0: globalAndroid.graphics.PointF): void;
						public isConsumeTouch(): boolean;
						public hoverStopPropagation(param0: boolean): void;
						public createView(): void;
						public onActivityCreate(): void;
						public isLazy(): boolean;
						public isSticky(): boolean;
						public isDisabled(): boolean;
						public getVisibility(): string;
						public setBorderStyle(param0: string, param1: string): void;
						public getInstance(): com.taobao.weex.WXSDKInstance;
						public addFocusChangeListener(param0: com.taobao.weex.ui.component.WXComponent.OnFocusChangeListener): void;
						public onActivityStart(): void;
						public getLayoutTopOffsetForSibling(): number;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						public useFeature(): boolean;
						public setVisibility(param0: string): void;
						public removeVirtualComponent(): void;
						public layoutDirectionDidChanged(param0: boolean): void;
						public recycled(): void;
						public setHostLayoutParams(param0: any, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public onInvokeUnknownMethod(param0: string, param1: com.alibaba.fastjson.JSONArray): void;
						public setAriaLabel(param0: string): void;
						public convertEmptyProperty(param0: string, param1: any): any;
						public setNeedLayoutOnAnimation(param0: boolean): void;
						public setHoverClassStatus(param0: boolean): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setContentBoxMeasurement(param0: com.taobao.weex.layout.ContentBoxMeasurement): void;
						public setProperty(param0: string, param1: any): boolean;
						public addEvent(param0: java.util.Set<string>): void;
						public setElevation(param0: string): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public applyComponentEvents(): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public updateStyles(param0: java.util.Map<string,any>): void;
						public bindHolder(param0: com.taobao.weex.ui.IFComponentHolder): void;
						public updateStyles(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public updateDemission(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
						public getAbsoluteY(): number;
						public postAnimation(param0: io.dcloud.feature.uniapp.ui.AbsAnimationHolder): void;
						public getViewTreeKey(): string;
						public applyLayoutAndEvent(param0: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
						public notifyNativeSizeChanged(param0: number, param1: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public containsGesture(param0: com.taobao.weex.ui.view.gesture.WXGestureType): boolean;
						public getStickyOffset(): number;
						public measure(param0: number, param1: number): com.taobao.weex.ui.component.WXComponent.MeasureOutput;
						public updateBoxShadow(param0: number, param1: number, param2: boolean): void;
						public setBackgroundColor(param0: string): void;
						public bindData(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						/** @deprecated */
						public updateProperties(param0: java.util.Map<string,any>): void;
						public onActivityPause(): void;
						public bindComponentData(param0: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
						public bindComponent(param0: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
						public updateActivePseudo(param0: boolean): void;
						public setWaste(param0: boolean): void;
						public getFirstScroller(): com.taobao.weex.ui.component.Scrollable;
						public canRecycled(): boolean;
						public findComponent(param0: string): com.taobao.weex.ui.component.WXComponent<any>;
						public clearPreLayout(): void;
						public getContext(): globalAndroid.content.Context;
						public isDestoryed(): boolean;
						public hoverStayTime(param0: number): void;
						public removeClickListener(param0: com.taobao.weex.ui.component.WXComponent.OnClickListener): void;
						public setPreventGesture(param0: boolean): void;
						public isFixed(): boolean;
						public isPreventGesture(): boolean;
						public setAriaHidden(param0: boolean): void;
						public applyLayoutOnly(): void;
						public hoverClass(param0: string): void;
						public onActivityResume(): void;
						public nativeUpdateAttrs(param0: java.util.Map<string,any>): void;
						public setBackgroundImage(param0: string): void;
						public isUsing(): boolean;
						public getOrCreateBorder(): com.taobao.weex.ui.view.border.BorderDrawable;
						public hasScrollParent(param0: com.taobao.weex.ui.component.WXComponent<any>): boolean;
						public isLayerTypeEnabled(): boolean;
						public updateNativeAttr(param0: string, param1: any): void;
						public containsEvent(param0: string): boolean;
						public setDisabled(param0: boolean): void;
						public isFlatUIEnabled(): boolean;
						public readyToRender(): void;
						public fireEventWait(param0: string, param1: java.util.Map<string,any>): com.taobao.weex.bridge.EventResult;
						/** @deprecated */
						public registerActivityStateListener(): void;
						public updateAttrs(param0: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
						public isVirtualComponent(): boolean;
						/** @deprecated */
						public initView(): void;
						public initElevation(param0: string): void;
						public findTypeParent(param0: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>, param1: java.lang.Class<any>): any;
						public hoverStartTime(param0: number): void;
						public getComponentSize(): globalAndroid.graphics.Rect;
						public addEvent(param0: string): void;
						public setBorderRadius(param0: string, param1: number): void;
						public onHostViewInitialized(param0: any): void;
						public setPadding(param0: io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>, param1: io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
						public updateNativeStyle(param0: string, param1: any): void;
						public getViewPortWidthForFloat(): number;
						public getTransition(): com.taobao.weex.dom.transition.WXTransition;
						public ismHasFocusChangeListener(param0: com.taobao.weex.ui.component.WXComponent.OnFocusChangeListener): boolean;
						public getParentScroller(): com.taobao.weex.ui.component.Scrollable;
						public getType(): number;
						public setLayout(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public setRole(param0: string): void;
						public setSticky(param0: string): void;
						public interceptFocusAndBlurEvent(): void;
						public updateAttrs(param0: java.util.Map<string,any>): void;
						public setMarginsSupportRTL(param0: globalAndroid.view.ViewGroup.MarginLayoutParams, param1: number, param2: number, param3: number, param4: number): void;
						public onCreate(): void;
						public removeAllEvent(): void;
						public notifyAppearStateChange(param0: string, param1: string): void;
						public setUsing(param0: boolean): void;
						public onActivityDestroy(): void;
						public invoke(param0: string, param1: com.alibaba.fastjson.JSONArray): void;
					}
					export module WXComponent {
						export class MeasureOutput {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXComponent.MeasureOutput>;
							public width: number;
							public height: number;
							public constructor();
						}
						export class OnClickListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXComponent.OnClickListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.WXComponent$OnClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onHostViewClick(): void;
							});
							public constructor();
							public onHostViewClick(): void;
						}
						export class OnClickListenerImp extends com.taobao.weex.ui.component.WXComponent.OnClickListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXComponent.OnClickListenerImp>;
							public onHostViewClick(): void;
						}
						export class OnFocusChangeListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXComponent.OnFocusChangeListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.WXComponent$OnFocusChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onFocusChange(param0: boolean): void;
							});
							public constructor();
							public onFocusChange(param0: boolean): void;
						}
						export class RenderState {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXComponent.RenderState>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.WXComponent$RenderState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXComponentFactory {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXComponentFactory>;
						public constructor();
						public static newInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXComponentProp {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXComponentProp>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.component.WXComponentProp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							name(): string;
						});
						public constructor();
						public name(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXDiv extends com.taobao.weex.ui.flat.WidgetContainer<com.taobao.weex.ui.view.WXFrameLayout> implements com.taobao.weex.ui.flat.FlatComponent<com.taobao.weex.ui.flat.widget.WidgetGroup>  {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXDiv>;
						public unmountFlatGUI(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public promoteToView(param0: boolean): boolean;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getOrCreateFlatWidget(): com.taobao.weex.ui.flat.widget.WidgetGroup;
						public onActivityCreate(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXFrameLayout;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public isVirtualComponent(): boolean;
						public onActivityPause(): void;
						public intendToBeFlatContainer(): boolean;
						public onActivityStart(): void;
						public getOrCreateFlatWidget(): any;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public mountFlatGUI(): void;
					}
					export module WXDiv {
						export class Ceator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXDiv.Ceator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXEmbed extends com.taobao.weex.ui.component.WXDiv implements com.taobao.weex.WXSDKInstance.OnInstanceVisibleListener, com.taobao.weex.ui.component.NestedContainer {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXEmbed>;
						public static STRATEGY_NONE: string;
						public static STRATEGY_NORMAL: string;
						public static STRATEGY_HIGH: string;
						public static PRIORITY_LOW: string;
						public static PRIORITY_NORMAL: string;
						public static PRIORITY_HIGH: string;
						public static ITEM_ID: string;
						public mNestedInstance: com.taobao.weex.WXSDKInstance;
						public getSrc(): string;
						public addLayerOverFlowListener(param0: string): void;
						public destroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setPriority(param0: string): void;
						public onActivityCreate(): void;
						public getOrCreateFlatWidget(): com.taobao.weex.ui.flat.widget.WidgetGroup;
						public onActivityPause(): void;
						public onActivityStart(): void;
						public removeLayerOverFlowListener(param0: string): void;
						public getOrCreateFlatWidget(): any;
						public renderNewURL(param0: string): void;
						public getOriginUrl(): string;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public addEvent(param0: string): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onDisappear(): void;
						public setVisibility(param0: string): void;
						public setStrategy(param0: string): void;
						public loadContent(): void;
						public promoteToView(param0: boolean): boolean;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setProperty(param0: string, param1: any): boolean;
						public setOriginUrl(param0: string): void;
						public addEvent(param0: java.util.Set<string>): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public setOnNestEventListener(param0: com.taobao.weex.ui.component.NestedContainer.OnNestedInstanceEventListener): void;
						public setSrc(param0: string): void;
						public reload(): void;
						public onAppear(): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getViewContainer(): globalAndroid.view.ViewGroup;
					}
					export module WXEmbed {
						export class ClickToReloadListener extends com.taobao.weex.ui.component.NestedContainer.OnNestedInstanceEventListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXEmbed.ClickToReloadListener>;
							public constructor();
							public onException(param0: com.taobao.weex.ui.component.NestedContainer, param1: string, param2: string): void;
							public onCreated(param0: com.taobao.weex.ui.component.NestedContainer, param1: com.taobao.weex.WXSDKInstance): void;
							public transformUrl(param0: string): string;
							public onPreCreate(param0: com.taobao.weex.ui.component.NestedContainer, param1: string): boolean;
						}
						export class EmbedInstanceOnScrollFireEventInterceptor extends com.taobao.weex.instance.InstanceOnFireEventInterceptor implements com.taobao.weex.common.OnWXScrollListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXEmbed.EmbedInstanceOnScrollFireEventInterceptor>;
							public constructor();
							public constructor(param0: com.taobao.weex.ui.component.WXEmbed);
							public resetFirstLaterScroller(): void;
							public onFireEvent(param0: string, param1: string, param2: string, param3: java.util.Map<string,any>, param4: java.util.Map<string,any>): void;
							public onScrollStateChanged(param0: globalAndroid.view.View, param1: number, param2: number, param3: number): void;
							public onScrolled(param0: globalAndroid.view.View, param1: number, param2: number): void;
						}
						export class EmbedManager {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXEmbed.EmbedManager>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.WXEmbed$EmbedManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getEmbed(param0: string): com.taobao.weex.ui.component.WXEmbed;
								putEmbed(param0: string, param1: com.taobao.weex.ui.component.WXEmbed): void;
							});
							public constructor();
							public putEmbed(param0: string, param1: com.taobao.weex.ui.component.WXEmbed): void;
							public getEmbed(param0: string): com.taobao.weex.ui.component.WXEmbed;
						}
						export class EmbedRenderListener extends com.taobao.weex.IWXRenderListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXEmbed.EmbedRenderListener>;
							public onRefreshSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
							public onRenderSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
							public onViewCreated(param0: com.taobao.weex.WXSDKInstance, param1: globalAndroid.view.View): void;
							public onException(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string): void;
						}
						export class FailToH5Listener extends com.taobao.weex.ui.component.WXEmbed.ClickToReloadListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXEmbed.FailToH5Listener>;
							public constructor();
							public onException(param0: com.taobao.weex.ui.component.NestedContainer, param1: string, param2: string): void;
							public onCreated(param0: com.taobao.weex.ui.component.NestedContainer, param1: com.taobao.weex.WXSDKInstance): void;
							public transformUrl(param0: string): string;
							public onPreCreate(param0: com.taobao.weex.ui.component.NestedContainer, param1: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXHeader extends com.taobao.weex.ui.component.list.WXCell {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXHeader>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public isLazy(): boolean;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public canRecycled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXImage extends com.taobao.weex.ui.component.WXComponent<globalAndroid.widget.ImageView> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXImage>;
						public static SUCCEED: string;
						public static ERRORDESC: string;
						public mIsUni: boolean;
						public setImage(param0: string, param1: com.taobao.weex.common.WXImageStrategy): void;
						public onFinishLayout(): void;
						public destroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setResize(param0: string): void;
						public onActivityCreate(): void;
						/** @deprecated */
						public updateProperties(param0: java.util.Map<string,any>): void;
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public autoRecoverImage(): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onImageFinish(param0: boolean, param1: java.util.Map<any,any>): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setResizeMode(param0: string): void;
						public recycled(): void;
						public autoReleaseImage(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setProperty(param0: string, param1: any): boolean;
						public updateProperties(param0: java.util.Map<string,any>): void;
						public initComponentHostView(param0: globalAndroid.content.Context): globalAndroid.widget.ImageView;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public refreshData(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public setSrc(param0: string): void;
						public getResizeMode(param0: string): globalAndroid.widget.ImageView.ScaleType;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public save(param0: com.taobao.weex.bridge.JSCallback): void;
						public getImageQuality(): com.taobao.weex.dom.WXImageQuality;
					}
					export module WXImage {
						export class Creator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXImage.Creator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
						export class Measurable {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXImage.Measurable>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.WXImage$Measurable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getNaturalWidth(): number;
								getNaturalHeight(): number;
							});
							public constructor();
							public getNaturalHeight(): number;
							public getNaturalWidth(): number;
						}
						export class MyImageListener extends com.taobao.weex.common.WXImageStrategy.ImageListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXImage.MyImageListener>;
							public onImageFinish(param0: string, param1: globalAndroid.widget.ImageView, param2: boolean, param3: java.util.Map<any,any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXIndicator extends com.taobao.weex.ui.component.WXComponent<com.taobao.weex.ui.view.WXCircleIndicator> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXIndicator>;
						public onHostViewInitialized(param0: com.taobao.weex.ui.view.WXCircleIndicator): void;
						public setItemColor(param0: string): void;
						public setShowIndicators(param0: boolean): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onHostViewInitialized(param0: any): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setHostLayoutParams(param0: com.taobao.weex.ui.view.WXCircleIndicator, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public setHostLayoutParams(param0: any, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public setItemSize(param0: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setProperty(param0: string, param1: any): boolean;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXCircleIndicator;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public setItemSelectedColor(param0: string): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXInput extends com.taobao.weex.ui.component.AbstractEditComponent {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXInput>;
						public appleStyleAfterCreated(param0: com.taobao.weex.ui.view.WXEditText): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXLoading extends com.taobao.weex.ui.component.WXBaseRefresh implements com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.WXOnLoadingListener {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXLoading>;
						public static HIDE: string;
						public onPullingUp(param0: number, param1: number, param2: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setHostLayoutParams(param0: any, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public onLoading(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setDisplay(param0: string): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXFrameLayout;
						public setProperty(param0: string, param1: any): boolean;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public setHostLayoutParams(param0: com.taobao.weex.ui.view.WXFrameLayout, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public canRecycled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXLoadingIndicator extends com.taobao.weex.ui.component.WXComponent<com.taobao.weex.ui.view.refresh.circlebar.CircleProgressBar> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXLoadingIndicator>;
						public setAnimating(param0: boolean): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.refresh.circlebar.CircleProgressBar;
						public destroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public setProperty(param0: string, param1: any): boolean;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public setColor(param0: string): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXRefresh extends com.taobao.weex.ui.component.WXBaseRefresh implements com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.WXOnRefreshListener {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXRefresh>;
						public static HIDE: string;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setDisplay(param0: string): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXFrameLayout;
						public setProperty(param0: string, param1: any): boolean;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onPullingDown(param0: number, param1: number, param2: number): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public getLayoutTopOffsetForSibling(): number;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onRefresh(): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public canRecycled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXScroller extends com.taobao.weex.ui.component.WXBaseScroller {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXScroller>;
						public static DIRECTION: string;
						public mOrientation: number;
						/** @deprecated */
						public getView(): globalAndroid.view.View;
						public destroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						/** @deprecated */
						public getView(): globalAndroid.view.ViewGroup;
						public measure(param0: number, param1: number): com.taobao.weex.ui.component.WXComponent.MeasureOutput;
						public getScrollEvent(param0: number, param1: number): java.util.Map<string,any>;
						public getScrollX(): number;
						public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public getRealView(): globalAndroid.view.ViewGroup;
						public onActivityPause(): void;
						public onScroll(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public scrollBy(param0: number, param1: number, param2: boolean): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public getInnerView(): globalAndroid.view.ViewGroup;
						public getOrientation(): number;
						public scrollTo(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,any>): void;
						public getRef(): string;
						public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
						public isScrollable(): boolean;
						public setOffsetAccuracy(param0: number): void;
						public onLoadMore(param0: globalAndroid.widget.FrameLayout, param1: number, param2: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public unbindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public remove(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
						public getChildrenLayoutTopOffset(): number;
						public unbindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public getStickMap(): java.util.Map<string,java.util.Map<string,com.taobao.weex.ui.component.WXComponent<any>>>;
						public getView(): globalAndroid.view.ViewGroup;
						public onScrollToBottom(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public scrollBy(param0: number, param1: number): void;
						public resetLoadmore(): void;
						public onActivityResume(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setScrollable(param0: boolean): void;
						public getScrollY(): number;
						public getRealView(): globalAndroid.view.View;
						public createViewImpl(): void;
						public onActivityCreate(): void;
						public addSubView(param0: globalAndroid.view.View, param1: number): void;
						public onActivityStart(): void;
						public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public bindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public onScrollChanged(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number, param3: number, param4: number): void;
						public onActivityBack(): boolean;
						public addEvent(param0: string): void;
						public setLayout(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public onScrollStopped(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setProperty(param0: string, param1: any): boolean;
						public addEvent(param0: java.util.Set<string>): void;
						public initComponentHostView(param0: globalAndroid.content.Context): globalAndroid.view.ViewGroup;
						public setMarginsSupportRTL(param0: globalAndroid.view.ViewGroup.MarginLayoutParams, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public getScrollStartEndHelper(): com.taobao.weex.ui.component.helper.ScrollStartEndHelper;
						public bindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public notifyAppearStateChange(param0: string, param1: string): void;
						public setShowScrollbar(param0: boolean): void;
						public onActivityDestroy(): void;
					}
					export module WXScroller {
						export class Creator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXScroller.Creator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
						export class MyGestureDetector {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXScroller.MyGestureDetector>;
							public getScrollView(): com.taobao.weex.ui.view.WXHorizontalScrollView;
							public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXSlider extends com.taobao.weex.ui.component.WXVContainer<globalAndroid.widget.FrameLayout> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXSlider>;
						public static INDEX: string;
						public static INFINITE: string;
						public mIndicator: com.taobao.weex.ui.component.WXIndicator;
						public mAdapter: com.taobao.weex.ui.view.WXCirclePageAdapter;
						public mShowIndicators: boolean;
						public mPageChangeListener: androidx.viewpager.widget.ViewPager.OnPageChangeListener;
						public setShowIndicators(param0: string): void;
						public getRealView(): globalAndroid.view.View;
						public addIndicator(param0: com.taobao.weex.ui.component.WXIndicator): void;
						public destroy(): void;
						public setAutoPlay(param0: string): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						/** @deprecated */
						public setValue(param0: string): void;
						public containsGesture(param0: com.taobao.weex.ui.view.gesture.WXGestureType): boolean;
						public onActivityCreate(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.BaseFrameLayout;
						public addSubView(param0: globalAndroid.view.View, param1: number): void;
						public getRealView(): globalAndroid.view.ViewGroup;
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public addEvent(param0: string): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public setOffsetXAccuracy(param0: number): void;
						public setInterval(param0: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public remove(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
						public setIndex(param0: number): void;
						public setLayout(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setProperty(param0: string, param1: any): boolean;
						public addEvent(param0: java.util.Set<string>): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public getChildLayoutParams(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: globalAndroid.view.View, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): globalAndroid.view.ViewGroup.LayoutParams;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setScrollable(param0: boolean): void;
					}
					export module WXSlider {
						export class Creator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXSlider.Creator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
						export class FlingGestureListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXSlider.FlingGestureListener>;
							public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
						}
						export class SliderOnScrollListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXSlider.SliderOnScrollListener>;
							public onPageScrollStateChanged(param0: number): void;
							public constructor(param0: com.taobao.weex.ui.component.WXSlider);
							public onPageScrolled(param0: number, param1: number, param2: number): void;
							public onPageSelected(param0: number): void;
						}
						export class SliderPageChangeListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXSlider.SliderPageChangeListener>;
							public onPageScrollStateChanged(param0: number): void;
							public constructor(param0: com.taobao.weex.ui.component.WXSlider);
							public onPageScrolled(param0: number, param1: number, param2: number): void;
							public onPageSelected(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXSliderNeighbor extends com.taobao.weex.ui.component.WXSlider {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXSliderNeighbor>;
						public static NEIGHBOR_SCALE: string;
						public static NEIGHBOR_ALPHA: string;
						public static NEIGHBOR_SPACE: string;
						public static CURRENT_ITEM_SCALE: string;
						public setNeighborSpace(param0: string): void;
						public setCurrentItemScale(param0: string): void;
						public setNeighborScale(param0: string): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public setProperty(param0: string, param1: any): boolean;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.BaseFrameLayout;
						public addSubView(param0: globalAndroid.view.View, param1: number): void;
						public bindData(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public setNeighborAlpha(param0: string): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
					export module WXSliderNeighbor {
						export class Creator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXSliderNeighbor.Creator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
						export class ZoomTransformer {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXSliderNeighbor.ZoomTransformer>;
							public transformPage(param0: globalAndroid.view.View, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXSwitch extends com.taobao.weex.ui.component.WXComponent<com.taobao.weex.ui.view.WXSwitchView> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXSwitch>;
						public setChecked(param0: boolean): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXSwitchView;
						public removeEventFromView(param0: string): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public setProperty(param0: string, param1: any): boolean;
						public addEvent(param0: java.util.Set<string>): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public addEvent(param0: string): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXText extends com.taobao.weex.ui.component.WXComponent<com.taobao.weex.ui.view.WXTextView> implements com.taobao.weex.ui.flat.FlatComponent<com.taobao.weex.ui.flat.widget.TextWidget>  {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXText>;
						public createViewImpl(): void;
						public destroy(): void;
						public updateExtra(param0: any): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXTextView;
						public isVirtualComponent(): boolean;
						public onActivityPause(): void;
						public onActivityStart(): void;
						public getOrCreateFlatWidget(): any;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public layoutDirectionDidChanged(param0: boolean): void;
						public setAriaLabel(param0: string): void;
						public convertEmptyProperty(param0: string, param1: any): any;
						public promoteToView(param0: boolean): boolean;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setProperty(param0: string, param1: any): boolean;
						public getOrCreateFlatWidget(): com.taobao.weex.ui.flat.widget.TextWidget;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public refreshData(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
					}
					export module WXText {
						export class Creator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXText.Creator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXTextDecoration {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXTextDecoration>;
						public static INVALID: com.taobao.weex.ui.component.WXTextDecoration;
						public static NONE: com.taobao.weex.ui.component.WXTextDecoration;
						public static UNDERLINE: com.taobao.weex.ui.component.WXTextDecoration;
						public static LINETHROUGH: com.taobao.weex.ui.component.WXTextDecoration;
						public static values(): androidNative.Array<com.taobao.weex.ui.component.WXTextDecoration>;
						public static valueOf(param0: string): com.taobao.weex.ui.component.WXTextDecoration;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export abstract class WXVContainer<T>  extends io.dcloud.feature.uniapp.ui.component.AbsVContainer<any> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXVContainer<any>>;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public getChildrenLayoutTopOffset(): number;
						public getBoxShadowHost(param0: boolean): globalAndroid.view.View;
						public onActivityCreate(): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public removeBoxShadowHost(): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
					export module WXVContainer {
						export class BoxShadowHost {
							public static class: java.lang.Class<com.taobao.weex.ui.component.WXVContainer.BoxShadowHost>;
							public constructor(param0: com.taobao.weex.ui.component.WXVContainer<any>, param1: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXVideo extends com.taobao.weex.ui.component.WXComponent<globalAndroid.widget.FrameLayout> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXVideo>;
						public setAutoPlay(param0: boolean): void;
						public setControls(param0: string): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public destroy(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): globalAndroid.widget.FrameLayout;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public setProperty(param0: string, param1: any): boolean;
						public setPlaystatus(param0: string): void;
						public bindData(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public setSrc(param0: string): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public notifyAppearStateChange(param0: string, param1: string): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export class WXWeb extends com.taobao.weex.ui.component.WXComponent<any> {
						public static class: java.lang.Class<com.taobao.weex.ui.component.WXWeb>;
						public static GO_BACK: string;
						public static GO_FORWARD: string;
						public static RELOAD: string;
						public static POST_MESSAGE: string;
						public mWebView: com.taobao.weex.ui.view.IWebView;
						public postMessage(param0: any): void;
						public goBack(): void;
						public destroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public initComponentHostView(param0: globalAndroid.content.Context): globalAndroid.view.View;
						public onActivityCreate(): void;
						public createWebView(): void;
						public setAction(param0: string, param1: any): void;
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public goForward(): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public setShowLoading(param0: boolean): void;
						public loadUrl(param0: string): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setUrl(param0: string): void;
						public setSource(param0: string): void;
						public setProperty(param0: string, param1: any): boolean;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public reload(): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module basic {
						export abstract class WXBasicComponent<T>  extends io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any> {
							public static class: java.lang.Class<com.taobao.weex.ui.component.basic.WXBasicComponent<any>>;
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public getStyles(): com.taobao.weex.dom.WXStyle;
							public getMargin(): com.taobao.weex.dom.CSSShorthand<any>;
							public getStyles(): io.dcloud.feature.uniapp.dom.AbsStyle;
							public getBasicComponentData(): io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>;
							public getBorder(): com.taobao.weex.dom.CSSShorthand<any>;
							public getEvents(): com.taobao.weex.dom.WXEvent;
							public getMargin(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
							public getAttrs(): com.taobao.weex.dom.WXAttr;
							public getBasicComponentData(): com.taobao.weex.ui.action.BasicComponentData<any>;
							public getPadding(): com.taobao.weex.dom.CSSShorthand<any>;
							public getEvents(): io.dcloud.feature.uniapp.dom.AbsEvent;
							public getPadding(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
							public getBorder(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
							public getAttrs(): io.dcloud.feature.uniapp.dom.AbsAttr;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module binding {
						export class AsynLayoutTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
							public static class: java.lang.Class<com.taobao.weex.ui.component.binding.AsynLayoutTask>;
							public onPostExecute(param0: java.lang.Void): void;
							public doInBackground(param0: androidNative.Array<java.lang.Void>): java.lang.Void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module binding {
						export class Layouts {
							public static class: java.lang.Class<com.taobao.weex.ui.component.binding.Layouts>;
							public constructor();
							public static setLayout(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
							public static doLayoutAsync(param0: com.taobao.weex.ui.component.list.template.TemplateViewHolder, param1: boolean): void;
							public static doLayoutOnly(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: com.taobao.weex.ui.component.list.template.TemplateViewHolder): void;
							public static doLayoutSync(param0: com.taobao.weex.ui.component.list.WXCell, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module binding {
						export class Statements {
							public static class: java.lang.Class<com.taobao.weex.ui.component.binding.Statements>;
							public constructor();
							public static parseStatementsToken(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public static copyComponentTree(param0: com.taobao.weex.ui.component.WXComponent<any>): com.taobao.weex.ui.component.WXComponent<any>;
							public static initLazyComponent(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: com.taobao.weex.ui.component.WXVContainer<any>): void;
							public static renderProps(param0: com.alibaba.fastjson.JSONObject, param1: com.taobao.weex.el.parse.ArrayStack<any>): java.util.Map<string,any>;
							public static getBindingEventArgs(param0: com.taobao.weex.el.parse.ArrayStack<any>, param1: any): java.util.List<any>;
							public static doRender(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: com.taobao.weex.ui.component.list.template.CellRenderContext): java.util.List<com.taobao.weex.ui.component.WXComponent<any>>;
							public static renderBindingAttrs(param0: androidx.collection.ArrayMap, param1: com.taobao.weex.el.parse.ArrayStack<any>): java.util.Map<string,any>;
							public static getComponentId(param0: com.taobao.weex.ui.component.WXComponent<any>): string;
							public static doInitCompontent(param0: java.util.List<com.taobao.weex.ui.component.WXComponent<any>>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module helper {
						export class ScrollStartEndHelper {
							public static class: java.lang.Class<com.taobao.weex.ui.component.helper.ScrollStartEndHelper>;
							public static isScrollEvent(param0: string): boolean;
							public onScrollStateChanged(param0: number): void;
							public onScrolled(param0: number, param1: number): void;
							public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module helper {
						export class SoftKeyboardDetector {
							public static class: java.lang.Class<com.taobao.weex.ui.component.helper.SoftKeyboardDetector>;
							public constructor();
							public static registerKeyboardEventListener(param0: globalAndroid.app.Activity, param1: com.taobao.weex.ui.component.helper.SoftKeyboardDetector.OnKeyboardEventListener): com.taobao.weex.ui.component.helper.SoftKeyboardDetector.Unregister;
							public static isKeyboardVisible(param0: globalAndroid.app.Activity): boolean;
							public static getActivityRoot(param0: globalAndroid.app.Activity): globalAndroid.view.View;
						}
						export module SoftKeyboardDetector {
							export class DefaultUnRegister extends com.taobao.weex.ui.component.helper.SoftKeyboardDetector.Unregister {
								public static class: java.lang.Class<com.taobao.weex.ui.component.helper.SoftKeyboardDetector.DefaultUnRegister>;
								public constructor(param0: globalAndroid.app.Activity, param1: globalAndroid.view.ViewTreeObserver.OnGlobalLayoutListener);
								public execute(): void;
							}
							export class OnKeyboardEventListener {
								public static class: java.lang.Class<com.taobao.weex.ui.component.helper.SoftKeyboardDetector.OnKeyboardEventListener>;
								/**
								 * Constructs a new instance of the com.taobao.weex.ui.component.helper.SoftKeyboardDetector$OnKeyboardEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onKeyboardEvent(param0: boolean): void;
								});
								public constructor();
								public onKeyboardEvent(param0: boolean): void;
							}
							export class Unregister {
								public static class: java.lang.Class<com.taobao.weex.ui.component.helper.SoftKeyboardDetector.Unregister>;
								/**
								 * Constructs a new instance of the com.taobao.weex.ui.component.helper.SoftKeyboardDetector$Unregister interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									execute(): void;
								});
								public constructor();
								public execute(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module helper {
						export class WXStickyHelper {
							public static class: java.lang.Class<com.taobao.weex.ui.component.helper.WXStickyHelper>;
							public constructor(param0: com.taobao.weex.ui.component.Scrollable);
							public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,java.util.Map<string,com.taobao.weex.ui.component.WXComponent<any>>>): void;
							public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,java.util.Map<string,com.taobao.weex.ui.component.WXComponent<any>>>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module helper {
						export class WXTimeInputHelper {
							public static class: java.lang.Class<com.taobao.weex.ui.component.helper.WXTimeInputHelper>;
							public constructor();
							public static pickDate(param0: string, param1: string, param2: com.taobao.weex.ui.component.AbstractEditComponent): void;
							public static pickTime(param0: com.taobao.weex.ui.component.AbstractEditComponent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class DefaultDragHelper extends com.taobao.weex.ui.component.list.DragHelper {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.DefaultDragHelper>;
							public startDrag(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
							public isDraggable(): boolean;
							public onDragStart(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
							public onDragEnd(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number, param2: number): void;
							public setLongPressDragEnabled(param0: boolean): void;
							public setDraggable(param0: boolean): void;
							public setDragExcluded(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: boolean): void;
							public onDragging(param0: number, param1: number): void;
							public isLongPressDragEnabled(): boolean;
							public isDragExcluded(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class DragHelper {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.DragHelper>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.list.DragHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDragStart(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
								onDragEnd(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number, param2: number): void;
								onDragging(param0: number, param1: number): void;
								isLongPressDragEnabled(): boolean;
								setLongPressDragEnabled(param0: boolean): void;
								startDrag(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
								isDraggable(): boolean;
								setDraggable(param0: boolean): void;
								setDragExcluded(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: boolean): void;
								isDragExcluded(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
							});
							public constructor();
							public startDrag(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
							public isDraggable(): boolean;
							public onDragStart(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
							public onDragEnd(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number, param2: number): void;
							public setLongPressDragEnabled(param0: boolean): void;
							public setDraggable(param0: boolean): void;
							public setDragExcluded(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: boolean): void;
							public onDragging(param0: number, param1: number): void;
							public isLongPressDragEnabled(): boolean;
							public isDragExcluded(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class DragSupportCallback {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.DragSupportCallback>;
							public onSelectedChanged(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
							public getMovementFlags(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
							public onSwiped(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
							public isItemViewSwipeEnabled(): boolean;
							public isLongPressDragEnabled(): boolean;
							public clearView(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
							public onMove(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class EventTrigger {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.EventTrigger>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.list.EventTrigger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								triggerEvent(param0: string, param1: java.util.Map<string,any>): void;
							});
							public constructor();
							public triggerEvent(param0: string, param1: java.util.Map<string,any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class GapItemDecoration {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.GapItemDecoration>;
							public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
							public constructor(param0: com.taobao.weex.ui.component.list.WXListComponent);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class HorizontalListComponent extends com.taobao.weex.ui.component.list.WXListComponent {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.HorizontalListComponent>;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public getItemId(param0: number): number;
							/** @deprecated */
							public getView(): globalAndroid.view.ViewGroup;
							public notifyAppearStateChange(param0: string, param1: string): void;
							public getItemViewType(param0: number): number;
							public getRef(): string;
							public getScrollX(): number;
							public onLoadMore(param0: number): void;
							public onActivityStop(): void;
							public onFailedToRecycleView(param0: any): boolean;
							public onBindViewHolder(param0: com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder, param1: number): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public getView(): globalAndroid.view.ViewGroup;
							public notifyAppearStateChange(param0: number, param1: number, param2: number, param3: number): void;
							public updateActivePseudo(param0: boolean): void;
							public bindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public unbindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public isScrollable(): boolean;
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public bindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public onViewRecycled(param0: any): void;
							public onActivityStart(): void;
							public onActivityDestroy(): void;
							public onActivityPause(): void;
							public getScrollY(): number;
							public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public scrollTo(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,any>): void;
							public onBeforeScroll(param0: number, param1: number): void;
							public onFailedToRecycleView(param0: com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder): boolean;
							public onActivityResume(): void;
							public getOrientation(): number;
							public onActivityCreate(): void;
							public onActivityBack(): boolean;
							public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public getItemCount(): number;
							public onBindViewHolder(param0: any, param1: number): void;
							public unbindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public scrollTo(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
							public onViewRecycled(param0: com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder;
							/** @deprecated */
							public getView(): globalAndroid.view.View;
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class ListComponentView {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.ListComponentView>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.list.ListComponentView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getInnerView(): com.taobao.weex.ui.view.listview.WXRecyclerView;
								setRecyclerViewBaseAdapter(param0: com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter<any>): void;
								notifyStickyShow(param0: com.taobao.weex.ui.component.list.WXCell): void;
								notifyStickyRemove(param0: com.taobao.weex.ui.component.list.WXCell): void;
								updateStickyView(param0: number): void;
								getRecyclerViewBaseAdapter(): com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter<any>;
							});
							public constructor();
							public updateStickyView(param0: number): void;
							public getRecyclerViewBaseAdapter(): com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter<any>;
							public getInnerView(): com.taobao.weex.ui.view.listview.WXRecyclerView;
							public setRecyclerViewBaseAdapter(param0: com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter<any>): void;
							public notifyStickyShow(param0: com.taobao.weex.ui.component.list.WXCell): void;
							public notifyStickyRemove(param0: com.taobao.weex.ui.component.list.WXCell): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class ListStanceCell extends com.taobao.weex.common.IWXObject {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.ListStanceCell>;
							public getBackgroundColor(): string;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class RecyclerTransform {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.RecyclerTransform>;
							public static TRANSFORM: string;
							public constructor();
							public static parseTransforms(param0: number, param1: string): androidx.recyclerview.widget.RecyclerView.ItemDecoration;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class SimpleListComponent extends com.taobao.weex.ui.component.list.BasicListComponent<com.taobao.weex.ui.component.list.SimpleRecyclerView> {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.SimpleListComponent>;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public getItemId(param0: number): number;
							/** @deprecated */
							public getView(): globalAndroid.view.ViewGroup;
							public notifyAppearStateChange(param0: string, param1: string): void;
							public getItemViewType(param0: number): number;
							public generateListView(param0: globalAndroid.content.Context, param1: number): com.taobao.weex.ui.component.list.SimpleRecyclerView;
							public getRef(): string;
							public getScrollX(): number;
							public onLoadMore(param0: number): void;
							public onActivityStop(): void;
							public onFailedToRecycleView(param0: any): boolean;
							public onBindViewHolder(param0: com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder, param1: number): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public getView(): globalAndroid.view.ViewGroup;
							public notifyAppearStateChange(param0: number, param1: number, param2: number, param3: number): void;
							public updateActivePseudo(param0: boolean): void;
							public bindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public unbindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public isScrollable(): boolean;
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public bindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public onViewRecycled(param0: any): void;
							public onActivityStart(): void;
							public onActivityDestroy(): void;
							public onActivityPause(): void;
							public getScrollY(): number;
							public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public scrollTo(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,any>): void;
							public onBeforeScroll(param0: number, param1: number): void;
							public onFailedToRecycleView(param0: com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder): boolean;
							public onActivityResume(): void;
							public getOrientation(): number;
							public onActivityCreate(): void;
							public onActivityBack(): boolean;
							public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public getItemCount(): number;
							public onBindViewHolder(param0: any, param1: number): void;
							public unbindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public scrollTo(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
							public onViewRecycled(param0: com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder;
							/** @deprecated */
							public getView(): globalAndroid.view.View;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class SimpleRecyclerView extends com.taobao.weex.ui.view.listview.WXRecyclerView implements com.taobao.weex.ui.component.list.ListComponentView {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.SimpleRecyclerView>;
							public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
							public updateStickyView(param0: number): void;
							public getRecyclerViewBaseAdapter(): com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter<any>;
							public getInnerView(): com.taobao.weex.ui.view.listview.WXRecyclerView;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setRecyclerViewBaseAdapter(param0: com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter<any>): void;
							public notifyStickyShow(param0: com.taobao.weex.ui.component.list.WXCell): void;
							public notifyStickyRemove(param0: com.taobao.weex.ui.component.list.WXCell): void;
							public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class StickyHeaderHelper {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.StickyHeaderHelper>;
							public updateStickyView(param0: number): void;
							public constructor(param0: globalAndroid.view.ViewGroup);
							public notifyStickyShow(param0: com.taobao.weex.ui.component.list.WXCell): void;
							public notifyStickyRemove(param0: com.taobao.weex.ui.component.list.WXCell): void;
							public clearStickyHeaders(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class WXCell extends com.taobao.weex.ui.flat.WidgetContainer<com.taobao.weex.ui.view.WXFrameLayout> {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.WXCell>;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public removeSticky(): void;
							public setLocationFromStart(param0: number): void;
							public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXFrameLayout;
							public intendToBeFlatContainer(): boolean;
							public setCellAppendTreeListener(param0: com.taobao.weex.ui.component.list.WXCell.CellAppendTreeListener): void;
							public onActivityStop(): void;
							public getRealView(): globalAndroid.view.View;
							public getStickyOffset(): number;
							public isSourceUsed(): boolean;
							public getRealView(): globalAndroid.view.ViewGroup;
							public isLazy(): boolean;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public unmountFlatGUI(): void;
							public updateActivePseudo(param0: boolean): void;
							public appendTreeCreateFinish(): void;
							public isAppendTreeDone(): boolean;
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public setRenderData(param0: any): void;
							public getScrollPositon(): number;
							public setSourceUsed(param0: boolean): void;
							public onActivityStart(): void;
							public onActivityDestroy(): void;
							public createViewImpl(): void;
							public onActivityPause(): void;
							public onActivityResume(): void;
							public initComponentHostView(param0: globalAndroid.content.Context): any;
							public onActivityCreate(): void;
							public onActivityBack(): boolean;
							public getLocationFromStart(): number;
							public mountFlatGUI(): void;
							public getRenderData(): any;
							public recoverySticky(): void;
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
							public isFlatUIEnabled(): boolean;
						}
						export module WXCell {
							export class CellAppendTreeListener {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.WXCell.CellAppendTreeListener>;
								/**
								 * Constructs a new instance of the com.taobao.weex.ui.component.list.WXCell$CellAppendTreeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onAppendTreeDone(): void;
								});
								public constructor();
								public onAppendTreeDone(): void;
							}
							export class Creator extends com.taobao.weex.ui.ComponentCreator {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.WXCell.Creator>;
								public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class WXListComponent extends com.taobao.weex.ui.component.list.BasicListComponent<com.taobao.weex.ui.view.refresh.wrapper.BounceRecyclerView> {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.WXListComponent>;
							public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public getItemId(param0: number): number;
							public updateProperties(param0: java.util.Map<string,any>): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public updateActivePseudo(param0: boolean): void;
							public setColumnWidth(param0: number): void;
							public bindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public bindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public onActivityPause(): void;
							public getScrollY(): number;
							public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public onFailedToRecycleView(param0: com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder): boolean;
							public onActivityCreate(): void;
							public onActivityBack(): boolean;
							public createChildViewAt(param0: number): void;
							public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public scrollTo(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							/** @deprecated */
							public getView(): globalAndroid.view.ViewGroup;
							public notifyAppearStateChange(param0: string, param1: string): void;
							public getItemViewType(param0: number): number;
							public getRef(): string;
							public getScrollX(): number;
							public onLoadMore(param0: number): void;
							public onActivityStop(): void;
							public generateListView(param0: globalAndroid.content.Context, param1: number): com.taobao.weex.ui.view.refresh.wrapper.BounceRecyclerView;
							public onFailedToRecycleView(param0: any): boolean;
							public onBindViewHolder(param0: com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder, param1: number): void;
							public setColumnCount(param0: number): void;
							public getSpanOffsets(): androidNative.Array<java.lang.Float>;
							/** @deprecated */
							public updateProperties(param0: java.util.Map<string,any>): void;
							public getView(): globalAndroid.view.ViewGroup;
							public notifyAppearStateChange(param0: number, param1: number, param2: number, param3: number): void;
							public unbindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public isScrollable(): boolean;
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public onViewRecycled(param0: any): void;
							public onActivityStart(): void;
							public onActivityDestroy(): void;
							public setScrollable(param0: boolean): void;
							public scrollTo(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,any>): void;
							public onBeforeScroll(param0: number, param1: number): void;
							public setColumnGap(param0: number): void;
							public onActivityResume(): void;
							public getOrientation(): number;
							public setSpanOffsets(param0: string): void;
							public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
							public remove(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
							public getItemCount(): number;
							public onBindViewHolder(param0: any, param1: number): void;
							public unbindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public onViewRecycled(param0: com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder): void;
							/** @deprecated */
							public getView(): globalAndroid.view.View;
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						}
						export module WXListComponent {
							export class Creator extends com.taobao.weex.ui.ComponentCreator {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.WXListComponent.Creator>;
								public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export class WXPagerSnapHelper {
							public static class: java.lang.Class<com.taobao.weex.ui.component.list.WXPagerSnapHelper>;
							public constructor();
							public calculateDistanceToFinalSnap(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: globalAndroid.view.View): androidNative.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class AsyncCellLoadTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.AsyncCellLoadTask>;
								public onPostExecute(param0: java.lang.Void): void;
								public constructor(param0: string, param1: com.taobao.weex.ui.component.list.WXCell, param2: com.taobao.weex.ui.component.list.template.WXRecyclerTemplateList);
								public doInBackground(param0: androidNative.Array<java.lang.Void>): java.lang.Void;
								public startTask(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class CellDataManager {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.CellDataManager>;
								public static SUB_COMPONENT_TEMPLATE_ID: string;
								public static VIRTUAL_COMPONENT_ID: string;
								public templateList: com.taobao.weex.ui.component.list.template.WXRecyclerTemplateList;
								public static getListRef(param0: string): string;
								public updateData(param0: any, param1: number): boolean;
								public removeData(param0: java.lang.Integer): void;
								public getRenderState(param0: number): com.taobao.weex.ui.component.list.template.CellRenderState;
								public insertData(param0: number, param1: any): boolean;
								public insertRange(param0: number, param1: com.alibaba.fastjson.JSONArray): boolean;
								public constructor(param0: com.taobao.weex.ui.component.list.template.WXRecyclerTemplateList);
								public static createVirtualComponentId(param0: string, param1: string, param2: number): string;
								public setListData(param0: com.alibaba.fastjson.JSONArray): void;
								public createVirtualComponentData(param0: number, param1: string, param2: any): void;
								public updateVirtualComponentData(param0: string, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class CellRenderContext {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.CellRenderContext>;
								public stack: com.taobao.weex.el.parse.ArrayStack<any>;
								public map: java.util.Map<any,any>;
								public renderState: com.taobao.weex.ui.component.list.template.CellRenderState;
								public position: number;
								public templateList: com.taobao.weex.ui.component.list.template.WXRecyclerTemplateList;
								public getRenderState(): com.taobao.weex.ui.component.list.template.CellRenderState;
								public clear(): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class CellRenderState {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.CellRenderState>;
								public getOnceComponentStates(): java.util.Map<string,com.taobao.weex.el.parse.ArrayStack<any>>;
								public constructor();
								public getVirtualComponentDatas(): java.util.Map<string,any>;
								public isDirty(): boolean;
								public isHasDataUpdate(): boolean;
								public getVirtualComponentIds(): java.util.Map<string,string>;
								public hasVirtualComponents(): boolean;
								public resetDirty(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class PositionRef {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.PositionRef>;
								public toString(): string;
								public intValue(): number;
								public longValue(): number;
								public toJSONString(): string;
								public constructor(param0: com.taobao.weex.ui.component.list.template.CellRenderState);
								public doubleValue(): number;
								public floatValue(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class Selector {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.Selector>;
								public static closest(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: string, param2: java.util.List<com.taobao.weex.ui.component.WXComponent<any>>): void;
								public constructor();
								public static queryElementAll(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: string, param2: java.util.List<com.taobao.weex.ui.component.WXComponent<any>>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class TemplateCache {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.TemplateCache>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class TemplateDom {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.TemplateDom>;
								public static KEY_RESET_ANIMATION: string;
								public static KEY_ATTRS: string;
								public static KEY_TYPE: string;
								public static KEY_VIRTUAL_DOM_REF: string;
								public static VIRTUAL_DOM_IDENTIFY: string;
								public static ATTRS_KEY_REF: string;
								public static ATTACH_CELL_SLOT: string;
								public static DETACH_CELL_SLOT: string;
								public static SEPARATOR: string;
								public static resetAnimaiton(param0: globalAndroid.view.View): void;
								public static findComponentByViewTreeKey(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: string): com.taobao.weex.ui.component.WXComponent<any>;
								public static toMap(param0: string, param1: number, param2: com.taobao.weex.ui.component.WXComponent<any>): java.util.Map<any,any>;
								public static findAllComponentRefs(param0: string, param1: number, param2: com.taobao.weex.ui.component.WXComponent<any>): java.util.Map<string,any>;
								public constructor();
								public static isVirtualDomRef(param0: string): boolean;
								public static genKeyVirtualDomRef(param0: string, param1: number, param2: string): string;
								public static findVirtualComponentByVRef(param0: string, param1: string): com.taobao.weex.ui.component.WXComponent<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class TemplateStickyHelper {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.TemplateStickyHelper>;
								public onBeforeScroll(param0: number, param1: number): void;
								public constructor(param0: com.taobao.weex.ui.component.list.template.WXRecyclerTemplateList);
								public getStickyPositions(): java.util.List<java.lang.Integer>;
								public getStickyTypes(): java.util.List<string>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class TemplateViewHolder extends com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.TemplateViewHolder>;
								public asyncTask: globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void>;
								public data: any;
								public setHolderPosition(param0: number): void;
								public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number, param2: boolean);
								public constructor(param0: com.taobao.weex.ui.component.list.template.WXRecyclerTemplateList, param1: com.taobao.weex.ui.component.list.WXCell, param2: number);
								public constructor(param0: com.taobao.weex.ui.component.list.template.WXRecyclerTemplateList, param1: globalAndroid.view.View, param2: number);
								public getTemplate(): com.taobao.weex.ui.component.list.WXCell;
								public getTemplateList(): com.taobao.weex.ui.component.list.template.WXRecyclerTemplateList;
								public constructor(param0: globalAndroid.view.View, param1: number);
								public getHolderPosition(): number;
								public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class VirtualComponentLifecycle {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.VirtualComponentLifecycle>;
								public static LIFECYCLE: string;
								public static CREATE: string;
								public static ATTACH: string;
								public static SYNSTATE: string;
								public static DETACH: string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export class WXRecyclerTemplateList extends com.taobao.weex.ui.component.WXVContainer<com.taobao.weex.ui.view.refresh.wrapper.BounceRecyclerView> {
								public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.WXRecyclerTemplateList>;
								public static ENABLE_TRACE_LOG: boolean;
								public static TAG: string;
								public mLayoutType: number;
								public mColumnCount: number;
								public mColumnGap: number;
								public mColumnWidth: number;
								public appendRange(param0: number, param1: com.alibaba.fastjson.JSONArray): void;
								public copyComponentFromSourceCell(param0: com.taobao.weex.ui.component.list.WXCell): com.taobao.weex.ui.component.WXComponent<any>;
								public bindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public unbindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
								public addEvent(param0: java.util.Set<string>): void;
								public onFailedToRecycleView(param0: com.taobao.weex.ui.component.list.template.TemplateViewHolder): boolean;
								public setColumnCount(param0: number): void;
								public getTemplateKey(param0: number): string;
								public getOrientation(): number;
								public resetLoadmore(): void;
								/** @deprecated */
								public getView(): globalAndroid.view.ViewGroup;
								public static doCreateCellViewBindData(param0: com.taobao.weex.ui.component.list.WXCell, param1: string, param2: boolean): void;
								public updateData(param0: number, param1: any): void;
								public queryElement(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
								public setShowScrollbar(param0: boolean): void;
								public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
								/** @deprecated */
								public getView(): globalAndroid.view.View;
								public getItemViewType(param0: number): number;
								public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public getRef(): string;
								public getSourceTemplate(param0: number): com.taobao.weex.ui.component.list.WXCell;
								public queryElementAll(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
								public onHostViewInitialized(param0: com.taobao.weex.ui.view.refresh.wrapper.BounceRecyclerView): void;
								public setColumnWidth(param0: number): void;
								public unbindDisappearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public getItemId(param0: number): number;
								public onActivityDestroy(): void;
								public insertData(param0: number, param1: any): void;
								public insertRange(param0: number, param1: com.alibaba.fastjson.JSONArray): void;
								public scrollToElement(param0: string, param1: java.util.Map<string,any>): void;
								public getScrollX(): number;
								public getTemplatesCache(): java.util.concurrent.ConcurrentHashMap<string,com.taobao.weex.ui.component.list.template.TemplateCache>;
								public onActivityCreate(): void;
								public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
								public computeVisiblePointInViewCoordinate(param0: globalAndroid.graphics.PointF): void;
								public onViewRecycled(param0: com.taobao.weex.ui.component.list.template.TemplateViewHolder): void;
								public setScrollable(param0: boolean): void;
								public getScrollStartEndHelper(): com.taobao.weex.ui.component.helper.ScrollStartEndHelper;
								public getTemplateCacheSize(): number;
								public createChildViewAt(param0: number): void;
								public setHostLayoutParams(param0: any, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
								public onActivityPause(): void;
								public onActivityStart(): void;
								public getView(): globalAndroid.view.ViewGroup;
								public setProperty(param0: string, param1: any): boolean;
								public setScrollLeft(param0: string): void;
								public getItemCount(): number;
								/** @deprecated */
								public updateProperties(param0: java.util.Map<string,any>): void;
								public getTemplateKey(param0: any): string;
								public addSubView(param0: globalAndroid.view.View, param1: number): void;
								public notifyAppearStateChange(param0: number, param1: number, param2: number, param3: number): void;
								public isScrollable(): boolean;
								public getCellDataManager(): com.taobao.weex.ui.component.list.template.CellDataManager;
								public removeData(param0: number, param1: number): void;
								public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public calcContentOffset(param0: androidx.recyclerview.widget.RecyclerView): number;
								public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
								public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
								public scrollTo(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,any>): void;
								public remove(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
								public notifyAppearStateChange(param0: string, param1: string): void;
								public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.taobao.weex.ui.component.list.template.TemplateViewHolder;
								public addEvent(param0: string): void;
								public getScrollY(): number;
								public findChildByAttrsRef(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: string): com.taobao.weex.ui.component.WXComponent<any>;
								public getChildrenLayoutTopOffset(): number;
								public onLoadMore(param0: number): void;
								public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.refresh.wrapper.BounceRecyclerView;
								public setListData(param0: any): void;
								public onViewRecycled(param0: any): void;
								public findParentType(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.lang.Class<any>): com.taobao.weex.ui.component.WXComponent<any>;
								public onHostViewInitialized(param0: any): void;
								public setHostLayoutParams(param0: com.taobao.weex.ui.view.refresh.wrapper.BounceRecyclerView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
								public updateProperties(param0: java.util.Map<string,any>): void;
								public setScrollTop(param0: string): void;
								public closest(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
								public destroy(): void;
								public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
								public onFailedToRecycleView(param0: any): boolean;
								public scrollTo(param0: string, param1: java.util.Map<string,any>): void;
								public setScrollDirection(param0: string): void;
								public onBeforeScroll(param0: number, param1: number): void;
								public appendData(param0: com.alibaba.fastjson.JSONArray): void;
								public setOffsetAccuracy(param0: number): void;
								public updateActivePseudo(param0: boolean): void;
								public copyStack(param0: com.taobao.weex.ui.component.list.template.CellRenderContext, param1: com.taobao.weex.el.parse.ArrayStack<any>): com.taobao.weex.el.parse.ArrayStack<any>;
								public findChildByRef(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: string): com.taobao.weex.ui.component.WXComponent<any>;
								public findChildListByRef(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: string): java.util.List<com.taobao.weex.ui.component.WXComponent<any>>;
								public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
								public getScrollEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): java.util.Map<string,any>;
								public onBindViewHolder(param0: any, param1: number): void;
								public bindAppearEvent(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public notifyUpdateList(): void;
								public onActivityResume(): void;
								public setIsLayoutRTL(param0: boolean): void;
								public onActivityStop(): void;
								public measure(param0: number, param1: number): com.taobao.weex.ui.component.WXComponent.MeasureOutput;
								public initComponentHostView(param0: globalAndroid.content.Context): any;
								public onActivityBack(): boolean;
								public onBindViewHolder(param0: com.taobao.weex.ui.component.list.template.TemplateViewHolder, param1: number): void;
								public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public getChildLayoutParams(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: globalAndroid.view.View, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): globalAndroid.view.ViewGroup.LayoutParams;
								public setColumnGap(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export module jni {
								export class NativeRenderLayoutDirection {
									public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.jni.NativeRenderLayoutDirection>;
									public static inherit: number;
									public static ltr: number;
									public static rtl: number;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module list {
						export module template {
							export module jni {
								export class NativeRenderObjectUtils {
									public static class: java.lang.Class<com.taobao.weex.ui.component.list.template.jni.NativeRenderObjectUtils>;
									public constructor();
									public static nativeUpdateRenderObjectAttr(param0: number, param1: string, param2: string): void;
									public static nativeLayoutRenderObject(param0: number, param1: number, param2: number): number;
									public static nativeUpdateRenderObjectStyle(param0: number, param1: string, param2: string): void;
									public static updateComponentSize(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
									public static nativeGetRenderObject(param0: string, param1: string): number;
									public static nativeRenderObjectHasNewLayout(param0: number): boolean;
									public static nativeRenderObjectChildCount(param0: number): number;
									public static nativeRenderObjectGetLayoutDirectionFromPathNode(param0: number): number;
									public static nativeRenderObjectGetChild(param0: number, param1: number): number;
									public static nativeAddChildRenderObject(param0: number, param1: number): void;
									public static nativeRenderObjectUpdateComponent(param0: number, param1: com.taobao.weex.ui.component.WXComponent<any>): void;
									public static nativeCopyRenderObject(param0: number): number;
									public static nativeRenderObjectChildWaste(param0: number, param1: boolean): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module pesudo {
						export class OnActivePseudoListner {
							public static class: java.lang.Class<com.taobao.weex.ui.component.pesudo.OnActivePseudoListner>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.component.pesudo.OnActivePseudoListner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								updateActivePseudo(param0: boolean): void;
							});
							public constructor();
							public updateActivePseudo(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module pesudo {
						export class PesudoStatus {
							public static class: java.lang.Class<com.taobao.weex.ui.component.pesudo.PesudoStatus>;
							public constructor();
							public updateStatusAndGetUpdateStyles(param0: string, param1: boolean, param2: java.util.Map<string,java.util.Map<string,any>>, param3: java.util.Map<string,any>): java.util.Map<string,any>;
							public setStatus(param0: string, param1: boolean): void;
							public getStatuses(): string;
							public isSet(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module pesudo {
						export class TouchActivePseudoListener {
							public static class: java.lang.Class<com.taobao.weex.ui.component.pesudo.TouchActivePseudoListener>;
							public constructor(param0: com.taobao.weex.ui.component.pesudo.OnActivePseudoListner, param1: boolean);
							public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export class WXRichText extends com.taobao.weex.ui.component.WXText {
							public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.WXRichText>;
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public AddChildNode(param0: string, param1: string, param2: string, param3: java.util.Map<string,string>, param4: java.util.Map<string,string>): void;
							public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.component.richtext.WXRichTextView;
							public onActivityStart(): void;
							public onActivityDestroy(): void;
							public promoteToView(param0: boolean): boolean;
							public onActivityPause(): void;
							public getOrCreateFlatWidget(): any;
							public onActivityStop(): void;
							public onActivityResume(): void;
							public getOrCreateFlatWidget(): com.taobao.weex.ui.flat.widget.TextWidget;
							public removeChildNode(param0: string, param1: string): void;
							public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXTextView;
							public initComponentHostView(param0: globalAndroid.content.Context): any;
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public onActivityCreate(): void;
							public onActivityBack(): boolean;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public updateChildNodeAttrs(param0: string, param1: java.util.Map<string,any>): void;
							public updateActivePseudo(param0: boolean): void;
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
							public updateChildNodeStyles(param0: string, param1: java.util.Map<string,any>): void;
						}
						export module WXRichText {
							export class Creator extends com.taobao.weex.ui.ComponentCreator {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.WXRichText.Creator>;
								public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
								public constructor();
							}
							export class RichTextContentBoxMeasurement extends com.taobao.weex.layout.measurefunc.TextContentBoxMeasurement {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.WXRichText.RichTextContentBoxMeasurement>;
								public createSpanned(param0: string): globalAndroid.text.Spanned;
								public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>);
								public constructor();
								public destroy(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export class WXRichTextView extends com.taobao.weex.ui.view.WXTextView {
							public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.WXRichTextView>;
							public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
							public holdComponent(param0: any): void;
							public getText(): string;
							public getComponent(): com.taobao.weex.ui.component.WXText;
							public setTextLayout(param0: globalAndroid.text.Layout): void;
							public getComponent(): any;
							public holdComponent(param0: com.taobao.weex.ui.component.WXText): void;
							public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
							public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export module node {
							export class ANode extends com.taobao.weex.ui.component.richtext.node.RichTextNode {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.node.ANode>;
								public static NODE_TYPE: string;
								public static HREF: string;
								public toString(): string;
								public isInternalNode(): boolean;
								public updateSpans(param0: globalAndroid.text.SpannableStringBuilder, param1: number): void;
							}
							export module ANode {
								export class ANodeCreator extends com.taobao.weex.ui.component.richtext.node.RichTextNodeCreator<com.taobao.weex.ui.component.richtext.node.ANode> {
									public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.node.ANode.ANodeCreator>;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>, param5: java.util.Map<string,any>): com.taobao.weex.ui.component.richtext.node.ANode;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string): com.taobao.weex.ui.component.richtext.node.ANode;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string): any;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>, param5: java.util.Map<string,any>): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export module node {
							export class ImgNode extends com.taobao.weex.ui.component.richtext.node.RichTextNode {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.node.ImgNode>;
								public static NODE_TYPE: string;
								public toString(): string;
								public isInternalNode(): boolean;
								public updateSpans(param0: globalAndroid.text.SpannableStringBuilder, param1: number): void;
							}
							export module ImgNode {
								export class ImgNodeCreator extends com.taobao.weex.ui.component.richtext.node.RichTextNodeCreator<com.taobao.weex.ui.component.richtext.node.ImgNode> {
									public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.node.ImgNode.ImgNodeCreator>;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string): com.taobao.weex.ui.component.richtext.node.ImgNode;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>, param5: java.util.Map<string,any>): com.taobao.weex.ui.component.richtext.node.ImgNode;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string): any;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>, param5: java.util.Map<string,any>): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export module node {
							export abstract class RichTextNode {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.node.RichTextNode>;
								public static TYPE: string;
								public static STYLE: string;
								public static ATTR: string;
								public static CHILDREN: string;
								public static VALUE: string;
								public static ITEM_CLICK: string;
								public static PSEUDO_REF: string;
								public mContext: globalAndroid.content.Context;
								public mInstanceId: string;
								public mComponentRef: string;
								public mRef: string;
								public style: java.util.Map<string,any>;
								public attr: java.util.Map<string,any>;
								public children: java.util.List<com.taobao.weex.ui.component.richtext.node.RichTextNode>;
								public toString(): string;
								public updateAttrs(param0: java.util.Map<string,any>): void;
								public findRichNode(param0: string): com.taobao.weex.ui.component.richtext.node.RichTextNode;
								public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>, param5: java.util.Map<string,any>);
								public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
								public static createSpanFlag(param0: number): number;
								public toSpan(param0: number): globalAndroid.text.Spannable;
								public isInternalNode(): boolean;
								public addChildNode(param0: com.taobao.weex.ui.component.richtext.node.RichTextNode): void;
								public updateStyles(param0: java.util.Map<string,any>): void;
								public removeChildNode(param0: string): void;
								public getLineHeight(param0: java.util.Map<string,any>, param1: number): number;
								public updateSpans(param0: globalAndroid.text.SpannableStringBuilder, param1: number): void;
								public static parse(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string): globalAndroid.text.Spannable;
								public getRef(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export module node {
							export class RichTextNodeCreator<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.node.RichTextNodeCreator<any>>;
								/**
								 * Constructs a new instance of the com.taobao.weex.ui.component.richtext.node.RichTextNodeCreator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string): T;
									createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>, param5: java.util.Map<string,any>): T;
								});
								public constructor();
								public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>, param5: java.util.Map<string,any>): T;
								public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string): T;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export module node {
							export class RichTextNodeManager {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.node.RichTextNodeManager>;
								public static registerTextNode(param0: string, param1: com.taobao.weex.ui.component.richtext.node.RichTextNodeCreator<any>): void;
								public static createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,string>, param6: java.util.Map<string,string>): com.taobao.weex.ui.component.richtext.node.RichTextNode;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export module node {
							export class SpanNode extends com.taobao.weex.ui.component.richtext.node.RichTextNode {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.node.SpanNode>;
								public static NODE_TYPE: string;
								public toString(): string;
								public isInternalNode(): boolean;
								public updateSpans(param0: globalAndroid.text.SpannableStringBuilder, param1: number): void;
							}
							export module SpanNode {
								export class SpanNodeCreator extends com.taobao.weex.ui.component.richtext.node.RichTextNodeCreator<com.taobao.weex.ui.component.richtext.node.SpanNode> {
									public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.node.SpanNode.SpanNodeCreator>;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string): any;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>, param5: java.util.Map<string,any>): any;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: java.util.Map<string,any>, param5: java.util.Map<string,any>): com.taobao.weex.ui.component.richtext.node.SpanNode;
									public createRichTextNode(param0: globalAndroid.content.Context, param1: string, param2: string): com.taobao.weex.ui.component.richtext.node.SpanNode;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export module span {
							export class ASpan {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.span.ASpan>;
								public updateDrawState(param0: globalAndroid.text.TextPaint): void;
								public constructor(param0: string, param1: string);
								public onClick(param0: globalAndroid.view.View): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export module span {
							export class ImgSpan implements com.taobao.weex.adapter.IDrawableLoader.StaticTarget {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.span.ImgSpan>;
								public constructor(param0: number, param1: number, param2: string, param3: string);
								public draw(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: globalAndroid.graphics.Paint): void;
								public setView(param0: globalAndroid.view.View): void;
								public getSize(param0: globalAndroid.graphics.Paint, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Paint.FontMetricsInt): number;
								public setDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module component {
					export module richtext {
						export module span {
							export class ItemClickSpan {
								public static class: java.lang.Class<com.taobao.weex.ui.component.richtext.span.ItemClickSpan>;
								public onClick(param0: globalAndroid.view.View): void;
								public constructor(param0: string, param1: string, param2: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module config {
					export class AutoScanConfigRegister {
						public static class: java.lang.Class<com.taobao.weex.ui.config.AutoScanConfigRegister>;
						public static TAG: string;
						public static setScanDelay(param0: number): void;
						public constructor();
						public static doScanConfig(): void;
						public static doScanConfigAsync(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module config {
					export class ConfigComponentHolder extends com.taobao.weex.ui.IFComponentHolder {
						public static class: java.lang.Class<com.taobao.weex.ui.config.ConfigComponentHolder>;
						public static TAG: string;
						public constructor(param0: string, param1: boolean, param2: string, param3: androidNative.Array<string>);
						public loadIfNonLazy(): void;
						public static fromConfig(param0: com.alibaba.fastjson.JSONObject): com.taobao.weex.ui.config.ConfigComponentHolder;
						public getType(): string;
						public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						public isAppendTree(): boolean;
						public getPropertyInvoker(param0: string): com.taobao.weex.bridge.Invoker;
						public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
						public getMethods(): androidNative.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module config {
					export class ConfigModuleFactory<T>  extends com.taobao.weex.bridge.ModuleFactory<any> {
						public static class: java.lang.Class<com.taobao.weex.ui.config.ConfigModuleFactory<any>>;
						public static TAG: string;
						public buildInstance(): any;
						public constructor(param0: string, param1: string, param2: androidNative.Array<string>);
						public buildInstance(param0: com.taobao.weex.WXSDKInstance): any;
						public static fromConfig(param0: com.alibaba.fastjson.JSONObject): com.taobao.weex.ui.config.ConfigModuleFactory<any>;
						public getMethods(): androidNative.Array<string>;
						public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module flat {
					export class FlatComponent<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.taobao.weex.ui.flat.FlatComponent<any>>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.flat.FlatComponent<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							promoteToView(param0: boolean): boolean;
							getOrCreateFlatWidget(): T;
						});
						public constructor();
						public getOrCreateFlatWidget(): T;
						public promoteToView(param0: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module flat {
					export class FlatGUIContext extends com.taobao.weex.common.Destroyable {
						public static class: java.lang.Class<com.taobao.weex.ui.flat.FlatGUIContext>;
						public isFlatUIEnabled(param0: com.taobao.weex.ui.component.WXComponent<any>): boolean;
						public register(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: com.taobao.weex.ui.flat.WidgetContainer<any>): void;
						public getWidgetContainerView(param0: com.taobao.weex.ui.flat.widget.Widget): globalAndroid.view.View;
						public constructor();
						public register(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: com.taobao.weex.ui.flat.widget.AndroidViewWidget): void;
						public destroy(): void;
						public getAndroidViewWidget(param0: com.taobao.weex.ui.component.WXComponent<any>): com.taobao.weex.ui.flat.widget.AndroidViewWidget;
						public register(param0: com.taobao.weex.ui.flat.widget.Widget, param1: com.taobao.weex.ui.component.WXComponent<any>): void;
						public getFlatComponentAncestor(param0: com.taobao.weex.ui.component.WXComponent<any>): com.taobao.weex.ui.flat.WidgetContainer<any>;
						public promoteToView(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean, param2: java.lang.Class<any>): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module flat {
					export abstract class WidgetContainer<T>  extends com.taobao.weex.ui.component.WXVContainer<any> {
						public static class: java.lang.Class<com.taobao.weex.ui.flat.WidgetContainer<any>>;
						public widgets: java.util.List<com.taobao.weex.ui.flat.widget.Widget>;
						public unmountFlatGUI(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public intendToBeFlatContainer(): boolean;
						public createChildViewAt(param0: number): void;
						public onActivityStart(): void;
						public onActivityBack(): boolean;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public mountFlatGUI(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module flat {
					export module widget {
						export class AndroidViewWidget extends com.taobao.weex.ui.flat.widget.BaseWidget implements com.taobao.weex.common.Destroyable {
							public static class: java.lang.Class<com.taobao.weex.ui.flat.widget.AndroidViewWidget>;
							public getBorderBox(): globalAndroid.graphics.Rect;
							public setBackgroundAndBorder(param0: com.taobao.weex.ui.view.border.BorderDrawable): void;
							public constructor(param0: com.taobao.weex.ui.flat.FlatGUIContext);
							public setLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Point): void;
							public getLocInFlatContainer(): globalAndroid.graphics.Point;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public setContentBox(param0: number, param1: number, param2: number, param3: number): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public setContentView(param0: globalAndroid.view.View): void;
							public destroy(): void;
							public getBackgroundAndBorder(): com.taobao.weex.ui.view.border.BorderDrawable;
							public invalidate(): void;
							public getView(): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module flat {
					export module widget {
						export abstract class BaseWidget extends com.taobao.weex.ui.flat.widget.Widget {
							public static class: java.lang.Class<com.taobao.weex.ui.flat.widget.BaseWidget>;
							public getBorderBox(): globalAndroid.graphics.Rect;
							public setBackgroundAndBorder(param0: com.taobao.weex.ui.view.border.BorderDrawable): void;
							public getBackgroundAndBorder(): com.taobao.weex.ui.view.border.BorderDrawable;
							public setLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Point): void;
							public getLocInFlatContainer(): globalAndroid.graphics.Point;
							public invalidate(): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public setContentBox(param0: number, param1: number, param2: number, param3: number): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public setCallback(param0: globalAndroid.graphics.drawable.Drawable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module flat {
					export module widget {
						export class TextWidget extends com.taobao.weex.ui.flat.widget.BaseWidget {
							public static class: java.lang.Class<com.taobao.weex.ui.flat.widget.TextWidget>;
							public getBorderBox(): globalAndroid.graphics.Rect;
							public setBackgroundAndBorder(param0: com.taobao.weex.ui.view.border.BorderDrawable): void;
							public constructor(param0: com.taobao.weex.ui.flat.FlatGUIContext);
							public getBackgroundAndBorder(): com.taobao.weex.ui.view.border.BorderDrawable;
							public setLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Point): void;
							public getLocInFlatContainer(): globalAndroid.graphics.Point;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public setContentBox(param0: number, param1: number, param2: number, param3: number): void;
							public updateTextDrawable(param0: globalAndroid.text.Layout): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module flat {
					export module widget {
						export class Widget {
							public static class: java.lang.Class<com.taobao.weex.ui.flat.widget.Widget>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.flat.widget.Widget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								draw(param0: globalAndroid.graphics.Canvas): void;
								onDraw(param0: globalAndroid.graphics.Canvas): void;
								setBackgroundAndBorder(param0: com.taobao.weex.ui.view.border.BorderDrawable): void;
								setLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Point): void;
								setContentBox(param0: number, param1: number, param2: number, param3: number): void;
								getLocInFlatContainer(): globalAndroid.graphics.Point;
								getBackgroundAndBorder(): com.taobao.weex.ui.view.border.BorderDrawable;
								getBorderBox(): globalAndroid.graphics.Rect;
							});
							public constructor();
							public static TAG: string;
							public getBorderBox(): globalAndroid.graphics.Rect;
							public setBackgroundAndBorder(param0: com.taobao.weex.ui.view.border.BorderDrawable): void;
							public getBackgroundAndBorder(): com.taobao.weex.ui.view.border.BorderDrawable;
							public setLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Point): void;
							public getLocInFlatContainer(): globalAndroid.graphics.Point;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public setContentBox(param0: number, param1: number, param2: number, param3: number): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module flat {
					export module widget {
						export class WidgetGroup extends com.taobao.weex.ui.flat.widget.BaseWidget {
							public static class: java.lang.Class<com.taobao.weex.ui.flat.widget.WidgetGroup>;
							public getBorderBox(): globalAndroid.graphics.Rect;
							public setBackgroundAndBorder(param0: com.taobao.weex.ui.view.border.BorderDrawable): void;
							public constructor(param0: com.taobao.weex.ui.flat.FlatGUIContext);
							public getBackgroundAndBorder(): com.taobao.weex.ui.view.border.BorderDrawable;
							public setLayout(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Point): void;
							public getChildren(): java.util.List<com.taobao.weex.ui.flat.widget.Widget>;
							public getLocInFlatContainer(): globalAndroid.graphics.Point;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public setContentBox(param0: number, param1: number, param2: number, param3: number): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public replaceAll(param0: java.util.List<com.taobao.weex.ui.flat.widget.Widget>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module module {
					export class ConsoleLogModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<com.taobao.weex.ui.module.ConsoleLogModule>;
						public constructor();
						public switchLogLevel(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public setPerfMode(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module module {
					export class WXDeviceInfoModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<com.taobao.weex.ui.module.WXDeviceInfoModule>;
						public constructor();
						public enableFullScreenHeight(param0: com.taobao.weex.bridge.JSCallback, param1: com.alibaba.fastjson.JSONObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module module {
					export class WXDomModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<com.taobao.weex.ui.module.WXDomModule>;
						public static SCROLL_TO_ELEMENT: string;
						public static ADD_RULE: string;
						public static GET_COMPONENT_RECT: string;
						public static GET_COMPONENT_DIRECTION: string;
						public static WXDOM: string;
						public static INVOKE_METHOD: string;
						public static UPDATE_COMPONENT_DATA: string;
						public static BATCH_BEGIN: string;
						public static BATCH_END: string;
						public static METHODS: androidNative.Array<string>;
						public callDomMethod(param0: com.alibaba.fastjson.JSONObject, param1: androidNative.Array<number>): void;
						public constructor();
						public callDomMethod(param0: string, param1: com.alibaba.fastjson.JSONArray, param2: androidNative.Array<number>): any;
						public invokeMethod(param0: string, param1: string, param2: com.alibaba.fastjson.JSONArray): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module module {
					export class WXLocaleModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<com.taobao.weex.ui.module.WXLocaleModule>;
						public constructor();
						public getLanguage(param0: com.taobao.weex.bridge.JSCallback): void;
						public getLanguages(param0: com.taobao.weex.bridge.JSCallback): void;
						public getLanguageSync(): string;
						public getLanguages(): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module module {
					export class WXMetaModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<com.taobao.weex.ui.module.WXMetaModule>;
						public static WIDTH: string;
						public static DEVICE_WIDTH: string;
						public constructor();
						public setViewport(param0: string): void;
						public getPageInfo(param0: com.taobao.weex.bridge.JSCallback): void;
						public getViewPort(): number;
						public openLog(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module module {
					export class WXModalUIModule extends com.taobao.weex.WXSDKEngine.DestroyableModule {
						public static class: java.lang.Class<com.taobao.weex.ui.module.WXModalUIModule>;
						public static OK: string;
						public static CANCEL: string;
						public static RESULT: string;
						public static DATA: string;
						public static MESSAGE: string;
						public static DURATION: string;
						public static GRAVITY: string;
						public static OK_TITLE: string;
						public static CANCEL_TITLE: string;
						public static DEFAULT: string;
						public constructor();
						public confirm(param0: com.alibaba.fastjson.JSONObject, param1: com.taobao.weex.bridge.JSCallback): void;
						public destroy(): void;
						public alert(param0: com.alibaba.fastjson.JSONObject, param1: com.taobao.weex.bridge.JSCallback): void;
						public toast(param0: com.alibaba.fastjson.JSONObject): void;
						public prompt(param0: com.alibaba.fastjson.JSONObject, param1: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module module {
					export class WXTimerModule extends com.taobao.weex.common.WXModule implements com.taobao.weex.common.Destroyable {
						public static class: java.lang.Class<com.taobao.weex.ui.module.WXTimerModule>;
						public setInterval(param0: number, param1: number): void;
						public constructor();
						public setTimeout(param0: number, param1: number): void;
						public clearInterval(param0: number): void;
						public clearTimeout(param0: number): void;
						public destroy(): void;
						public handleMessage(param0: globalAndroid.os.Message): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module module {
					export class WXWebViewModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<com.taobao.weex.ui.module.WXWebViewModule>;
						public constructor();
						public goForward(param0: string): void;
						public reload(param0: string): void;
						public goBack(param0: string): void;
						public postMessage(param0: string, param1: any): void;
					}
					export module WXWebViewModule {
						export class Action {
							public static class: java.lang.Class<com.taobao.weex.ui.module.WXWebViewModule.Action>;
							public static reload: com.taobao.weex.ui.module.WXWebViewModule.Action;
							public static goBack: com.taobao.weex.ui.module.WXWebViewModule.Action;
							public static goForward: com.taobao.weex.ui.module.WXWebViewModule.Action;
							public static postMessage: com.taobao.weex.ui.module.WXWebViewModule.Action;
							public static valueOf(param0: string): com.taobao.weex.ui.module.WXWebViewModule.Action;
							public static values(): androidNative.Array<com.taobao.weex.ui.module.WXWebViewModule.Action>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class BaseFrameLayout {
						public static class: java.lang.Class<com.taobao.weex.ui.view.BaseFrameLayout>;
						public constructor(param0: globalAndroid.content.Context);
						public unmountFlatGUI(): void;
						public mountFlatGUI(param0: java.util.List<com.taobao.weex.ui.flat.widget.Widget>): void;
						public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
						public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
						public dispatchDrawInterval(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class IRenderResult<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.taobao.weex.ui.view.IRenderResult<any>>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.view.IRenderResult<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getComponent(): T;
						});
						public constructor();
						public getComponent(): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class IRenderStatus<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.taobao.weex.ui.view.IRenderStatus<any>>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.view.IRenderStatus<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							holdComponent(param0: T): void;
						});
						public constructor();
						public holdComponent(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class IWXScroller {
						public static class: java.lang.Class<com.taobao.weex.ui.view.IWXScroller>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.view.IWXScroller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							destroy(): void;
						});
						public constructor();
						public destroy(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class IWXTextView {
						public static class: java.lang.Class<com.taobao.weex.ui.view.IWXTextView>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.view.IWXTextView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getText(): string;
						});
						public constructor();
						public getText(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class IWebView {
						public static class: java.lang.Class<com.taobao.weex.ui.view.IWebView>;
						/**
						 * Constructs a new instance of the com.taobao.weex.ui.view.IWebView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getView(): globalAndroid.view.View;
							destroy(): void;
							loadUrl(param0: string): void;
							loadDataWithBaseURL(param0: string): void;
							reload(): void;
							goBack(): void;
							goForward(): void;
							postMessage(param0: any): void;
							setShowLoading(param0: boolean): void;
							setOnErrorListener(param0: com.taobao.weex.ui.view.IWebView.OnErrorListener): void;
							setOnPageListener(param0: com.taobao.weex.ui.view.IWebView.OnPageListener): void;
							setOnMessageListener(param0: com.taobao.weex.ui.view.IWebView.OnMessageListener): void;
							onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						});
						public constructor();
						public loadUrl(param0: string): void;
						public postMessage(param0: any): void;
						public goBack(): void;
						public destroy(): void;
						public setOnMessageListener(param0: com.taobao.weex.ui.view.IWebView.OnMessageListener): void;
						public setOnErrorListener(param0: com.taobao.weex.ui.view.IWebView.OnErrorListener): void;
						public loadDataWithBaseURL(param0: string): void;
						public getView(): globalAndroid.view.View;
						public goForward(): void;
						public reload(): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public setShowLoading(param0: boolean): void;
						public setOnPageListener(param0: com.taobao.weex.ui.view.IWebView.OnPageListener): void;
					}
					export module IWebView {
						export class OnErrorListener {
							public static class: java.lang.Class<com.taobao.weex.ui.view.IWebView.OnErrorListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.view.IWebView$OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onError(param0: string, param1: any): void;
							});
							public constructor();
							public onError(param0: string, param1: any): void;
						}
						export class OnMessageListener {
							public static class: java.lang.Class<com.taobao.weex.ui.view.IWebView.OnMessageListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.view.IWebView$OnMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMessage(param0: java.util.Map<string,any>): void;
							});
							public constructor();
							public onMessage(param0: java.util.Map<string,any>): void;
						}
						export class OnPageListener {
							public static class: java.lang.Class<com.taobao.weex.ui.view.IWebView.OnPageListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.view.IWebView$OnPageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onReceivedTitle(param0: string): void;
								onPageStart(param0: string): void;
								onPageFinish(param0: string, param1: boolean, param2: boolean): void;
							});
							public constructor();
							public onReceivedTitle(param0: string): void;
							public onPageFinish(param0: string, param1: boolean, param2: boolean): void;
							public onPageStart(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXBaseCircleIndicator implements com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXBaseCircleIndicator>;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public setFillColor(param0: number): void;
						public getCount(): number;
						public getRealCurrentItem(): number;
						public setRealCurrentItem(param0: number): void;
						public setPageColor(param0: number): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public setRadius(param0: number): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public setCircleViewPager(param0: com.taobao.weex.ui.view.WXCircleViewPager): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXBaseRefreshLayout extends com.taobao.weex.ui.view.WXFrameLayout {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXBaseRefreshLayout>;
						public holdComponent(param0: com.taobao.weex.ui.component.WXDiv): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public holdComponent(param0: any): void;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getComponent(): any;
						public getComponent(): com.taobao.weex.ui.component.WXDiv;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXCircleIndicator extends com.taobao.weex.ui.view.WXBaseCircleIndicator {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXCircleIndicator>;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXCirclePageAdapter {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXCirclePageAdapter>;
						public isRTL: boolean;
						public constructor();
						public replacePageView(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public getRealPosition(param0: number): number;
						public getFirst(): number;
						public getRealCount(): number;
						public removePageView(param0: globalAndroid.view.View): void;
						public getCount(): number;
						public getItemIndex(param0: any): number;
						public constructor(param0: java.util.List<globalAndroid.view.View>, param1: boolean);
						public setLayoutDirectionRTL(param0: boolean): void;
						public addPageView(param0: globalAndroid.view.View): void;
						public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
						public getViews(): java.util.List<globalAndroid.view.View>;
						public getPagePosition(param0: globalAndroid.view.View): number;
						public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
						public constructor(param0: boolean);
						public getItemPosition(param0: any): number;
						public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXCircleViewPager implements com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXCircleViewPager>;
						public scrollTo(param0: number, param1: number): void;
						public constructor(param0: globalAndroid.content.Context);
						public getCurrentItem(): number;
						public setCurrentItem(param0: number, param1: boolean): void;
						public getCirclePageAdapter(): com.taobao.weex.ui.view.WXCirclePageAdapter;
						public getRealCurrentItem(): number;
						public setCirclePageAdapter(param0: com.taobao.weex.ui.view.WXCirclePageAdapter): void;
						public startAutoScroll(): void;
						public setCircle(param0: boolean): void;
						public isAutoScroll(): boolean;
						public setIntervalTime(param0: number): void;
						public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public getmScroller(): com.taobao.weex.ui.view.WXSmoothScroller;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
						public stopAutoScroll(): void;
						public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public pauseAutoScroll(): void;
						public isScrollable(): boolean;
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getRealCount(): number;
						public superGetCurrentItem(): number;
						public destory(): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public getIntervalTime(): number;
						public setCurrentItem(param0: number): void;
						public setScrollable(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXEditText implements com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXEditText>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public setAllowCopyPaste(param0: boolean): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public setLines(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: string);
						public setAllowDisableMovement(param0: boolean): void;
						public onTextContextMenuItem(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXFrameLayout extends com.taobao.weex.ui.view.BaseFrameLayout {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXFrameLayout>;
						public holdComponent(param0: com.taobao.weex.ui.component.WXDiv): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public holdComponent(param0: any): void;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getComponent(): any;
						public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public notifyLayerOverFlow(): void;
						public getComponent(): com.taobao.weex.ui.component.WXDiv;
						public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXHorizontalScrollView implements com.taobao.weex.ui.view.IWXScroller, com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXHorizontalScrollView>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public isScrollable(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getContentFrame(): globalAndroid.graphics.Rect;
						public setScrollViewListener(param0: com.taobao.weex.ui.view.WXHorizontalScrollView.ScrollViewListener): void;
						public destroy(): void;
						public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
						public addScrollViewListener(param0: com.taobao.weex.ui.view.WXHorizontalScrollView.ScrollViewListener): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public removeScrollViewListener(param0: com.taobao.weex.ui.view.WXHorizontalScrollView.ScrollViewListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public setScrollable(param0: boolean): void;
					}
					export module WXHorizontalScrollView {
						export class ScrollViewListener {
							public static class: java.lang.Class<com.taobao.weex.ui.view.WXHorizontalScrollView.ScrollViewListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.view.WXHorizontalScrollView$ScrollViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onScrollChanged(param0: com.taobao.weex.ui.view.WXHorizontalScrollView, param1: number, param2: number, param3: number, param4: number): void;
							});
							public constructor();
							public onScrollChanged(param0: com.taobao.weex.ui.view.WXHorizontalScrollView, param1: number, param2: number, param3: number, param4: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXImageView extends globalAndroid.widget.ImageView {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXImageView>;
						public constructor(param0: globalAndroid.content.Context);
						public onAttachedToWindow(): void;
						public onWindowVisibilityChanged(param0: number): void;
						public onFinishTemporaryDetach(): void;
						public setBorderRadius(param0: androidNative.Array<number>): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setImageResource(param0: number): void;
						public setEnableBitmapAutoManage(param0: boolean): void;
						public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getComponent(): com.taobao.weex.ui.component.WXImage;
						public autoRecoverImage(): void;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getComponent(): any;
						public getNaturalHeight(): number;
						public onStartTemporaryDetach(): void;
						public holdComponent(param0: com.taobao.weex.ui.component.WXImage): void;
						public onDetachedFromWindow(): void;
						public getNaturalWidth(): number;
						public autoReleaseImage(): void;
						public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public holdComponent(param0: any): void;
						public dispatchWindowVisibilityChanged(param0: number): void;
						public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXLoadingLayout extends com.taobao.weex.ui.view.WXBaseRefreshLayout {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXLoadingLayout>;
						public holdComponent(param0: com.taobao.weex.ui.component.WXDiv): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public holdComponent(param0: any): void;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getComponent(): any;
						public getComponent(): com.taobao.weex.ui.component.WXDiv;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXRefreshLayout extends com.taobao.weex.ui.view.WXBaseRefreshLayout {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXRefreshLayout>;
						public holdComponent(param0: com.taobao.weex.ui.component.WXDiv): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public holdComponent(param0: any): void;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getComponent(): any;
						public getComponent(): com.taobao.weex.ui.component.WXDiv;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXScrollView implements com.taobao.weex.ui.view.IWXScroller, com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXScrollView>;
						public constructor(param0: globalAndroid.content.Context);
						public handleMessage(param0: globalAndroid.os.Message): boolean;
						public destroy(): void;
						public fling(param0: number): void;
						public removeScrollViewListener(param0: com.taobao.weex.ui.view.WXScrollView.WXScrollViewListener): void;
						public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
						public onScrollToBottom(param0: number, param1: number): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public dispatchNestedPreFling(param0: number, param1: number): boolean;
						public onScroll(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public startScrollerTask(): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): boolean;
						public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
						public setNestedScrollingEnabled(param0: boolean): void;
						public hasNestedScrollingParent(): boolean;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public stopNestedScroll(): void;
						public isScrollable(): boolean;
						public dispatchNestedPreScroll(param0: number, param1: number, param2: androidNative.Array<number>, param3: androidNative.Array<number>): boolean;
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getContentFrame(): globalAndroid.graphics.Rect;
						public isNestedScrollingEnabled(): boolean;
						public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
						public onScrollStopped(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public startNestedScroll(param0: number): boolean;
						public addScrollViewListener(param0: com.taobao.weex.ui.view.WXScrollView.WXScrollViewListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setWAScroller(param0: com.taobao.weex.ui.component.WXBaseScroller): void;
						public setScrollable(param0: boolean): void;
					}
					export module WXScrollView {
						export class WXScrollViewListener {
							public static class: java.lang.Class<com.taobao.weex.ui.view.WXScrollView.WXScrollViewListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.view.WXScrollView$WXScrollViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onScrollChanged(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number, param3: number, param4: number): void;
								onScrollToBottom(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
								onScrollStopped(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
								onScroll(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
							});
							public constructor();
							public onScroll(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
							public onScrollToBottom(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
							public onScrollChanged(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number, param3: number, param4: number): void;
							public onScrollStopped(param0: com.taobao.weex.ui.view.WXScrollView, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXSmoothScroller {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXSmoothScroller>;
						public constructor(param0: globalAndroid.content.Context);
						public startScroll(param0: number, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.animation.Interpolator);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.animation.Interpolator, param2: boolean);
						public setScrollDurationFactor(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXSwitchView implements com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXSwitchView>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXTextView extends globalAndroid.view.View {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXTextView>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getComponent(): any;
						public setAriaLabel(param0: string): void;
						public getText(): string;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public setTextLayout(param0: globalAndroid.text.Layout): void;
						public holdComponent(param0: any): void;
						public setTextColor(param0: number): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public getTextLayout(): globalAndroid.text.Layout;
						public holdComponent(param0: com.taobao.weex.ui.component.WXText): void;
						public getComponent(): com.taobao.weex.ui.component.WXText;
						public enableCopy(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXVideoView implements com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXVideoView>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public start(): void;
						public pause(): void;
						public setOnVideoPauseListener(param0: com.taobao.weex.ui.view.WXVideoView.VideoPlayListener): void;
					}
					export module WXVideoView {
						export class VideoPlayListener {
							public static class: java.lang.Class<com.taobao.weex.ui.view.WXVideoView.VideoPlayListener>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.view.WXVideoView$VideoPlayListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPause(): void;
								onStart(): void;
							});
							public constructor();
							public onPause(): void;
							public onStart(): void;
						}
						export class Wrapper {
							public static class: java.lang.Class<com.taobao.weex.ui.view.WXVideoView.Wrapper>;
							public getProgressBar(): globalAndroid.widget.ProgressBar;
							public setOnCompletionListener(param0: globalAndroid.media.MediaPlayer.OnCompletionListener): void;
							public createIfNotExist(): com.taobao.weex.ui.view.WXVideoView;
							public pause(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public getVideoView(): com.taobao.weex.ui.view.WXVideoView;
							public onGlobalLayout(): void;
							public stopPlayback(): void;
							public setOnPreparedListener(param0: globalAndroid.media.MediaPlayer.OnPreparedListener): void;
							public setVideoURI(param0: globalAndroid.net.Uri): void;
							public getMediaController(): globalAndroid.widget.MediaController;
							public start(): void;
							public setControls(param0: boolean): void;
							public setOnErrorListener(param0: globalAndroid.media.MediaPlayer.OnErrorListener): void;
							public setOnVideoPauseListener(param0: com.taobao.weex.ui.view.WXVideoView.VideoPlayListener): void;
							public createVideoViewIfVisible(): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public resume(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export class WXWebView extends com.taobao.weex.ui.view.IWebView {
						public static class: java.lang.Class<com.taobao.weex.ui.view.WXWebView>;
						public loadUrl(param0: string): void;
						public postMessage(param0: any): void;
						public goBack(): void;
						public destroy(): void;
						public constructor(param0: globalAndroid.content.Context, param1: string);
						public setOnMessageListener(param0: com.taobao.weex.ui.view.IWebView.OnMessageListener): void;
						public setOnErrorListener(param0: com.taobao.weex.ui.view.IWebView.OnErrorListener): void;
						public loadDataWithBaseURL(param0: string): void;
						public getView(): globalAndroid.view.View;
						public goForward(): void;
						public reload(): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public setShowLoading(param0: boolean): void;
						public setOnPageListener(param0: com.taobao.weex.ui.view.IWebView.OnPageListener): void;
					}
					export module WXWebView {
						export class MessageHandler {
							public static class: java.lang.Class<com.taobao.weex.ui.view.WXWebView.MessageHandler>;
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export abstract class BorderCorner {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.BorderCorner>;
							public mAngleBisector: number;
							public prepareRoundCorner(): void;
							public drawRoundedCorner(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint, param2: number): void;
							public getAngleBisectorDegree(): number;
							public getOuterCornerRadius(): number;
							public prepareOval(): void;
							public getRoundCornerStartX(): number;
							public getRoundCornerEndY(): number;
							public getPostBorderWidth(): number;
							public getBorderBox(): globalAndroid.graphics.RectF;
							public getRoundCornerEndX(): number;
							public getRoundCornerStartY(): number;
							public getPreBorderWidth(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export class BorderDrawable {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.BorderDrawable>;
							public static BORDER_TOP_LEFT_RADIUS: number;
							public static BORDER_TOP_RIGHT_RADIUS: number;
							public static BORDER_BOTTOM_RIGHT_RADIUS: number;
							public static BORDER_BOTTOM_LEFT_RADIUS: number;
							public static BORDER_RADIUS_ALL: number;
							public constructor();
							public isRounded(): boolean;
							public setImage(param0: globalAndroid.graphics.Shader): void;
							public setBorderColor(param0: com.taobao.weex.dom.CSSShorthand.EDGE, param1: number): void;
							public getOutline(param0: any): void;
							public setBorderRadius(param0: com.taobao.weex.dom.CSSShorthand.CORNER, param1: number): void;
							public getAlpha(): number;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
							public getColor(): number;
							public hasImage(): boolean;
							public getBorderRadius(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
							public setAlpha(param0: number): void;
							public setBorderStyle(param0: com.taobao.weex.dom.CSSShorthand.EDGE, param1: string): void;
							public setBorderWidth(param0: com.taobao.weex.dom.CSSShorthand.EDGE, param1: number): void;
							public setColor(param0: number): void;
							public getBorderInnerRadius(param0: globalAndroid.graphics.RectF): androidNative.Array<number>;
							public getOpacity(): number;
							public getContentPath(param0: globalAndroid.graphics.RectF): globalAndroid.graphics.Path;
							public updateBoxShadowData(param0: io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowData): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export class BorderEdge {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.BorderEdge>;
							public getBorderWidth(): number;
							public getEdge(): com.taobao.weex.dom.CSSShorthand.EDGE;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export class BorderRadiusType {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.BorderRadiusType>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.view.border.BorderRadiusType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export class BorderStyle {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.BorderStyle>;
							public static SOLID: com.taobao.weex.ui.view.border.BorderStyle;
							public static DASHED: com.taobao.weex.ui.view.border.BorderStyle;
							public static DOTTED: com.taobao.weex.ui.view.border.BorderStyle;
							public static valueOf(param0: string): com.taobao.weex.ui.view.border.BorderStyle;
							public static values(): androidNative.Array<com.taobao.weex.ui.view.border.BorderStyle>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export class BorderUtil {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.BorderUtil>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export class BottomLeftCorner extends com.taobao.weex.ui.view.border.BorderCorner {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.BottomLeftCorner>;
							public prepareRoundCorner(): void;
							public prepareOval(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export class BottomRightCorner extends com.taobao.weex.ui.view.border.BorderCorner {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.BottomRightCorner>;
							public prepareRoundCorner(): void;
							public prepareOval(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export class TopLeftCorner extends com.taobao.weex.ui.view.border.BorderCorner {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.TopLeftCorner>;
							public prepareRoundCorner(): void;
							public prepareOval(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module border {
						export class TopRightCorner extends com.taobao.weex.ui.view.border.BorderCorner {
							public static class: java.lang.Class<com.taobao.weex.ui.view.border.TopRightCorner>;
							public prepareRoundCorner(): void;
							public prepareOval(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module gesture {
						export class WXGesture {
							public static class: java.lang.Class<com.taobao.weex.ui.view.gesture.WXGesture>;
							public static START: string;
							public static MOVE: string;
							public static END: string;
							public static UNKNOWN: string;
							public static LEFT: string;
							public static RIGHT: string;
							public static UP: string;
							public static DOWN: string;
							public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: globalAndroid.content.Context);
							public setRequestDisallowInterceptTouchEvent(param0: boolean): void;
							public onLongPress(param0: globalAndroid.view.MotionEvent): void;
							public isRequestDisallowInterceptTouchEvent(): boolean;
							public static isStopPropagation(param0: string): boolean;
							public static hasStopPropagation(param0: com.taobao.weex.ui.component.WXComponent<any>): boolean;
							public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
							public onDown(param0: globalAndroid.view.MotionEvent): boolean;
							public removeTouchListener(param0: globalAndroid.view.View.OnTouchListener): boolean;
							public setPreventMoveEvent(param0: boolean): void;
							public addOnTouchListener(param0: globalAndroid.view.View.OnTouchListener): void;
							public isTouchEventConsumedByAdvancedGesture(): boolean;
							public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
						}
						export module WXGesture {
							export class GestureHandler {
								public static class: java.lang.Class<com.taobao.weex.ui.view.gesture.WXGesture.GestureHandler>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module gesture {
						export class WXGestureObservable {
							public static class: java.lang.Class<com.taobao.weex.ui.view.gesture.WXGestureObservable>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.view.gesture.WXGestureObservable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
								getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
							});
							public constructor();
							public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
							public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module gesture {
						export class WXGestureType {
							public static class: java.lang.Class<com.taobao.weex.ui.view.gesture.WXGestureType>;
							/**
							 * Constructs a new instance of the com.taobao.weex.ui.view.gesture.WXGestureType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export module WXGestureType {
							export class GestureInfo {
								public static class: java.lang.Class<com.taobao.weex.ui.view.gesture.WXGestureType.GestureInfo>;
								public static HISTORICAL_XY: string;
								public static PAGE_X: string;
								public static PAGE_Y: string;
								public static SCREEN_X: string;
								public static SCREEN_Y: string;
								public static POINTER_ID: string;
								public static DIRECTION: string;
								public static STATE: string;
								public constructor();
							}
							export class HighLevelGesture extends com.taobao.weex.ui.view.gesture.WXGestureType {
								public static class: java.lang.Class<com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture>;
								public static SWIPE: com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture;
								public static LONG_PRESS: com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture;
								public static PAN_START: com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture;
								public static PAN_MOVE: com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture;
								public static PAN_END: com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture;
								public static HORIZONTALPAN: com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture;
								public static VERTICALPAN: com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture;
								public static valueOf(param0: string): com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture;
								public toString(): string;
								public static values(): androidNative.Array<com.taobao.weex.ui.view.gesture.WXGestureType.HighLevelGesture>;
							}
							export class LowLevelGesture extends com.taobao.weex.ui.view.gesture.WXGestureType {
								public static class: java.lang.Class<com.taobao.weex.ui.view.gesture.WXGestureType.LowLevelGesture>;
								public static ACTION_DOWN: com.taobao.weex.ui.view.gesture.WXGestureType.LowLevelGesture;
								public static ACTION_MOVE: com.taobao.weex.ui.view.gesture.WXGestureType.LowLevelGesture;
								public static ACTION_UP: com.taobao.weex.ui.view.gesture.WXGestureType.LowLevelGesture;
								public static ACTION_CANCEL: com.taobao.weex.ui.view.gesture.WXGestureType.LowLevelGesture;
								public toString(): string;
								public static valueOf(param0: string): com.taobao.weex.ui.view.gesture.WXGestureType.LowLevelGesture;
								public static values(): androidNative.Array<com.taobao.weex.ui.view.gesture.WXGestureType.LowLevelGesture>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module listview {
						export class ExtendedLinearLayoutManager {
							public static class: java.lang.Class<com.taobao.weex.ui.view.listview.ExtendedLinearLayoutManager>;
							public scrollVerticallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
							public setOnScrollEndListener(param0: com.taobao.weex.ui.view.listview.ExtendedLinearLayoutManager.OnSmoothScrollEndListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: number, param2: boolean);
							public onLayoutChildren(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): void;
							public smoothScrollToPosition(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number): void;
							public supportsPredictiveItemAnimations(): boolean;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module ExtendedLinearLayoutManager {
							export class OnSmoothScrollEndListener {
								public static class: java.lang.Class<com.taobao.weex.ui.view.listview.ExtendedLinearLayoutManager.OnSmoothScrollEndListener>;
								/**
								 * Constructs a new instance of the com.taobao.weex.ui.view.listview.ExtendedLinearLayoutManager$OnSmoothScrollEndListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onStop(): void;
								});
								public constructor();
								public onStop(): void;
							}
							export class TopSnappedSmoothScroller {
								public static class: java.lang.Class<com.taobao.weex.ui.view.listview.ExtendedLinearLayoutManager.TopSnappedSmoothScroller>;
								public constructor(param0: com.taobao.weex.ui.view.listview.ExtendedLinearLayoutManager, param1: globalAndroid.content.Context);
								public getVerticalSnapPreference(): number;
								public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
								public onStop(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module listview {
						export class ExtendedStaggeredGridLayoutManager {
							public static class: java.lang.Class<com.taobao.weex.ui.view.listview.ExtendedStaggeredGridLayoutManager>;
							public onItemsRemoved(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
							public constructor(param0: number, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module listview {
						export class WXRecyclerView implements com.taobao.weex.ui.view.gesture.WXGestureObservable {
							public static class: java.lang.Class<com.taobao.weex.ui.view.listview.WXRecyclerView>;
							public static TYPE_LINEAR_LAYOUT: number;
							public static TYPE_GRID_LAYOUT: number;
							public static TYPE_STAGGERED_GRID_LAYOUT: number;
							public isNestParent: boolean;
							public isScrollTop(): boolean;
							public initView(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: number): void;
							public setOnSmoothScrollEndListener(param0: com.taobao.weex.ui.view.listview.ExtendedLinearLayoutManager.OnSmoothScrollEndListener): void;
							public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
							public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public pointInView(param0: number, param1: number, param2: number): boolean;
							public getDCWXSliderComponent(param0: com.taobao.weex.ui.component.WXComponent<any>): io.dcloud.feature.weex.extend.DCWXSlider;
							public scrollTo(param0: number, param1: number, param2: number): void;
							public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
							public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
							public getListComponent(param0: com.taobao.weex.ui.component.WXComponent<any>): com.taobao.weex.ui.component.list.WXListComponent;
							public setNestInfo(param0: com.alibaba.fastjson.JSONObject): void;
							public isScrollable(): boolean;
							public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
							public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
							public scrollTo(param0: boolean, param1: number, param2: number, param3: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setScrollable(param0: boolean): void;
							public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
							public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
							public isNestScroll(): boolean;
							public callBackNestParent(param0: string, param1: string, param2: number): void;
							public fling(param0: number, param1: number): boolean;
							public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public scrollToPosition(param0: number): void;
							public initView(param0: globalAndroid.content.Context, param1: number, param2: number): void;
							public getCurrentDy(): number;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module listview {
						export module adapter {
							export class IOnLoadMoreListener {
								public static class: java.lang.Class<com.taobao.weex.ui.view.listview.adapter.IOnLoadMoreListener>;
								/**
								 * Constructs a new instance of the com.taobao.weex.ui.view.listview.adapter.IOnLoadMoreListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onLoadMore(param0: number): void;
									notifyAppearStateChange(param0: number, param1: number, param2: number, param3: number): void;
									onBeforeScroll(param0: number, param1: number): void;
								});
								public constructor();
								public onBeforeScroll(param0: number, param1: number): void;
								public onLoadMore(param0: number): void;
								public notifyAppearStateChange(param0: number, param1: number, param2: number, param3: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module listview {
						export module adapter {
							export class IRecyclerAdapterListener<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.taobao.weex.ui.view.listview.adapter.IRecyclerAdapterListener<any>>;
								/**
								 * Constructs a new instance of the com.taobao.weex.ui.view.listview.adapter.IRecyclerAdapterListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onViewRecycled(param0: T): void;
									onBindViewHolder(param0: T, param1: number): void;
									onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): T;
									getItemViewType(param0: number): number;
									getItemCount(): number;
									onFailedToRecycleView(param0: T): boolean;
									getItemId(param0: number): number;
								});
								public constructor();
								public onBindViewHolder(param0: T, param1: number): void;
								public onViewRecycled(param0: T): void;
								public getItemCount(): number;
								public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): T;
								public getItemViewType(param0: number): number;
								public onFailedToRecycleView(param0: T): boolean;
								public getItemId(param0: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module listview {
						export module adapter {
							export class ListBaseViewHolder {
								public static class: java.lang.Class<com.taobao.weex.ui.view.listview.adapter.ListBaseViewHolder>;
								public isRecycled(): boolean;
								public bindData(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public getViewType(): number;
								public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number, param2: boolean);
								public recycled(): void;
								public getView(): globalAndroid.view.View;
								public constructor(param0: globalAndroid.view.View, param1: number);
								public isFullSpan(): boolean;
								public canRecycled(): boolean;
								public getComponent(): com.taobao.weex.ui.component.WXComponent<any>;
								public setComponentUsing(param0: boolean): void;
								public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module listview {
						export module adapter {
							export class RecyclerViewBaseAdapter<T>  extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
								public static class: java.lang.Class<com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter<any>>;
								public onBindViewHolder(param0: any, param1: number): void;
								public onFailedToRecycleView(param0: any): boolean;
								public onViewRecycled(param0: any): void;
								public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
								public onViewAttachedToWindow(param0: any): void;
								public getItemCount(): number;
								public getItemViewType(param0: number): number;
								public constructor(param0: com.taobao.weex.ui.view.listview.adapter.IRecyclerAdapterListener<any>);
								public getItemId(param0: number): number;
								public onViewDetachedFromWindow(param0: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module listview {
						export module adapter {
							export class TransformItemDecoration {
								public static class: java.lang.Class<com.taobao.weex.ui.view.listview.adapter.TransformItemDecoration>;
								public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
								public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module listview {
						export module adapter {
							export class WXRecyclerViewOnScrollListener {
								public static class: java.lang.Class<com.taobao.weex.ui.view.listview.adapter.WXRecyclerViewOnScrollListener>;
								public layoutManagerType: com.taobao.weex.ui.view.listview.adapter.WXRecyclerViewOnScrollListener.LAYOUT_MANAGER_TYPE;
								public onScrolled(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
								public setLayoutRTL(param0: boolean): void;
								public onScrollStateChanged(param0: androidx.recyclerview.widget.RecyclerView, param1: number): void;
								public constructor(param0: com.taobao.weex.ui.view.listview.adapter.IOnLoadMoreListener);
							}
							export module WXRecyclerViewOnScrollListener {
								export class LAYOUT_MANAGER_TYPE {
									public static class: java.lang.Class<com.taobao.weex.ui.view.listview.adapter.WXRecyclerViewOnScrollListener.LAYOUT_MANAGER_TYPE>;
									public static LINEAR: com.taobao.weex.ui.view.listview.adapter.WXRecyclerViewOnScrollListener.LAYOUT_MANAGER_TYPE;
									public static GRID: com.taobao.weex.ui.view.listview.adapter.WXRecyclerViewOnScrollListener.LAYOUT_MANAGER_TYPE;
									public static STAGGERED_GRID: com.taobao.weex.ui.view.listview.adapter.WXRecyclerViewOnScrollListener.LAYOUT_MANAGER_TYPE;
									public static valueOf(param0: string): com.taobao.weex.ui.view.listview.adapter.WXRecyclerViewOnScrollListener.LAYOUT_MANAGER_TYPE;
									public static values(): androidNative.Array<com.taobao.weex.ui.view.listview.adapter.WXRecyclerViewOnScrollListener.LAYOUT_MANAGER_TYPE>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module refresh {
						export module circlebar {
							export class CircleProgressBar {
								public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.circlebar.CircleProgressBar>;
								public static DEFAULT_CIRCLE_BG_LIGHT: number;
								public static DEFAULT_CIRCLE_COLOR: number;
								public mProgressDrawable: com.taobao.weex.ui.view.refresh.circlebar.MaterialProgressDrawable;
								public setStartEndTrim(param0: number, param1: number): void;
								public circleBackgroundEnabled(): boolean;
								public setProgressRotation(param0: number): void;
								public destory(): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
								public setColorSchemeColors(param0: androidNative.Array<number>): void;
								public setCircleBackgroundEnabled(param0: boolean): void;
								public getProgress(): number;
								public setBackgroundColor(param0: number): void;
								public onAnimationStart(): void;
								public getMax(): number;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public setMax(param0: number): void;
								public setBackgroundColorResource(param0: number): void;
								public setShowArrow(param0: boolean): void;
								public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
								public onAnimationEnd(): void;
								public getProgressStokeWidth(): number;
								public onDetachedFromWindow(): void;
								public setAnimationListener(param0: globalAndroid.view.animation.Animation.AnimationListener): void;
								public setProgressBackGroundColor(param0: number): void;
								public setProgressStokeWidth(param0: number): void;
								public onAttachedToWindow(): void;
								public stop(): void;
								public constructor(param0: globalAndroid.content.Context);
								public setProgress(param0: number): void;
								public onMeasure(param0: number, param1: number): void;
								public isShowArrow(): boolean;
								public start(): void;
							}
							export module CircleProgressBar {
								export class OvalShadow {
									public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.circlebar.CircleProgressBar.OvalShadow>;
									public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint): void;
									public constructor(param0: com.taobao.weex.ui.view.refresh.circlebar.CircleProgressBar, param1: number, param2: number);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module refresh {
						export module circlebar {
							export class MaterialProgressDrawable {
								public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.circlebar.MaterialProgressDrawable>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View);
								public setStartEndTrim(param0: number, param1: number): void;
								public getIntrinsicHeight(): number;
								public setProgressRotation(param0: number): void;
								public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
								public getIntrinsicWidth(): number;
								public draw(param0: globalAndroid.graphics.Canvas): void;
								public setAlpha(param0: number): void;
								public updateSizes(param0: number): void;
								public setColorSchemeColors(param0: androidNative.Array<number>): void;
								public getOpacity(): number;
								public isRunning(): boolean;
								public showArrow(param0: boolean): void;
								public getAlpha(): number;
								public setArrowScale(param0: number): void;
								public stop(): void;
								public setBackgroundColor(param0: number): void;
								public start(): void;
							}
							export module MaterialProgressDrawable {
								export class ProgressDrawableSize {
									public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.circlebar.MaterialProgressDrawable.ProgressDrawableSize>;
									/**
									 * Constructs a new instance of the com.taobao.weex.ui.view.refresh.circlebar.MaterialProgressDrawable$ProgressDrawableSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class Ring {
									public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.circlebar.MaterialProgressDrawable.Ring>;
									public getStrokeWidth(): number;
									public setArrowScale(param0: number): void;
									public getStartingColor(): number;
									public getNextColor(): number;
									public setRotation(param0: number): void;
									public constructor(param0: globalAndroid.graphics.drawable.Drawable.Callback);
									public setColorIndex(param0: number): void;
									public setAlpha(param0: number): void;
									public getCenterRadius(): number;
									public setColor(param0: number): void;
									public setStartTrim(param0: number): void;
									public setColors(param0: androidNative.Array<number>): void;
									public setBackgroundColor(param0: number): void;
									public getRotation(): number;
									public getStartingRotation(): number;
									public getStartTrim(): number;
									public goToNextColor(): void;
									public storeOriginals(): void;
									public getEndTrim(): number;
									public setCenterRadius(param0: number): void;
									public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Rect): void;
									public getStartingStartTrim(): number;
									public setInsets(param0: number, param1: number): void;
									public resetOriginals(): void;
									public getAlpha(): number;
									public setEndTrim(param0: number): void;
									public setArrowDimensions(param0: number, param1: number): void;
									public getStartingEndTrim(): number;
									public getInsets(): number;
									public setShowArrow(param0: boolean): void;
									public setStrokeWidth(param0: number): void;
									public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module refresh {
						export module core {
							export class WXRefreshView {
								public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.core.WXRefreshView>;
								public setProgressColor(param0: number): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public setStartEndTrim(param0: number, param1: number): void;
								public setContentGravity(param0: number): void;
								public setRefreshView(param0: globalAndroid.view.View): void;
								public setProgressBgColor(param0: number): void;
								public setProgressRotation(param0: number): void;
								public stopAnimation(): void;
								public constructor(param0: globalAndroid.content.Context);
								public startAnimation(): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module refresh {
						export module core {
							export class WXSwipeLayout {
								public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.core.WXSwipeLayout>;
								public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
								public removeOnRefreshOffsetChangedListener(param0: com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.OnRefreshOffsetChangedListener): boolean;
								public setRefreshHeight(param0: number): void;
								public canChildScrollDown(): boolean;
								public addTargetView(param0: globalAndroid.view.View): void;
								public getFooterView(): com.taobao.weex.ui.view.refresh.core.WXRefreshView;
								public setNestedScrollingEnabled(param0: boolean): void;
								public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): boolean;
								public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
								public setPullLoadEnable(param0: boolean): void;
								public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
								public finishPullLoad(): void;
								public setLoadingBgColor(param0: number): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
								public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
								public finishPullRefresh(): void;
								public stopNestedScroll(): void;
								public setOnRefreshListener(param0: com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.WXOnRefreshListener): void;
								public addOnRefreshOffsetChangedListener(param0: com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.OnRefreshOffsetChangedListener): void;
								public getHeaderView(): com.taobao.weex.ui.view.refresh.core.WXRefreshView;
								public setRefreshBgColor(param0: number): void;
								public startNestedScroll(param0: number): boolean;
								public dipToPx(param0: globalAndroid.content.Context, param1: number): number;
								public setOnLoadingListener(param0: com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.WXOnLoadingListener): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public onStopNestedScroll(param0: globalAndroid.view.View): void;
								public hasNestedScrollingParent(): boolean;
								public dispatchNestedPreScroll(param0: number, param1: number, param2: androidNative.Array<number>, param3: androidNative.Array<number>): boolean;
								public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
								public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
								public isNestedScrollingEnabled(): boolean;
								public dispatchNestedPreFling(param0: number, param1: number): boolean;
								public isRefreshing(): boolean;
								public setLoadingHeight(param0: number): void;
								public canChildScrollUp(): boolean;
								public getNestedScrollAxes(): number;
								public isPullLoadEnable(): boolean;
								public onAttachedToWindow(): void;
								public setPullRefreshEnable(param0: boolean): void;
								public isPullRefreshEnable(): boolean;
								public constructor(param0: globalAndroid.content.Context);
								public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
								public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
							}
							export module WXSwipeLayout {
								export class OnRefreshOffsetChangedListener {
									public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.OnRefreshOffsetChangedListener>;
									/**
									 * Constructs a new instance of the com.taobao.weex.ui.view.refresh.core.WXSwipeLayout$OnRefreshOffsetChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onOffsetChanged(param0: number): void;
									});
									public constructor();
									public onOffsetChanged(param0: number): void;
								}
								export class WXOnLoadingListener {
									public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.WXOnLoadingListener>;
									/**
									 * Constructs a new instance of the com.taobao.weex.ui.view.refresh.core.WXSwipeLayout$WXOnLoadingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onLoading(): void;
										onPullingUp(param0: number, param1: number, param2: number): void;
									});
									public constructor();
									public onLoading(): void;
									public onPullingUp(param0: number, param1: number, param2: number): void;
								}
								export class WXOnRefreshListener {
									public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.WXOnRefreshListener>;
									/**
									 * Constructs a new instance of the com.taobao.weex.ui.view.refresh.core.WXSwipeLayout$WXOnRefreshListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onRefresh(): void;
										onPullingDown(param0: number, param1: number, param2: number): void;
									});
									public constructor();
									public onRefresh(): void;
									public onPullingDown(param0: number, param1: number, param2: number): void;
								}
								export class WXRefreshAnimatorListener {
									public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.WXRefreshAnimatorListener>;
									public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
									public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
									public onAnimationStart(param0: globalAndroid.animation.Animator): void;
									public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module refresh {
						export module wrapper {
							export abstract class BaseBounceView<T>  extends globalAndroid.widget.FrameLayout {
								public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.wrapper.BaseBounceView<any>>;
								public swipeLayout: com.taobao.weex.ui.view.refresh.core.WXSwipeLayout;
								public setOnLoadingListener(param0: com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.WXOnLoadingListener): void;
								public getOrientation(): number;
								public init(param0: globalAndroid.content.Context): void;
								public onLoadmoreComplete(): void;
								public setRefreshEnable(param0: boolean): void;
								public removeView(param0: globalAndroid.view.View): void;
								public getInnerView(): any;
								public setFooterView(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public removeHeaderView(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public finishPullLoad(): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
								public finishPullRefresh(): void;
								public setInnerView(param0: globalAndroid.content.Context): any;
								public setOnRefreshListener(param0: com.taobao.weex.ui.view.refresh.core.WXSwipeLayout.WXOnRefreshListener): void;
								public onRefreshingComplete(): void;
								public removeFooterView(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public setLoadmoreEnable(param0: boolean): void;
								public setHeaderView(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
								public constructor(param0: globalAndroid.content.Context, param1: number);
								public getSwipeLayout(): com.taobao.weex.ui.view.refresh.core.WXSwipeLayout;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module refresh {
						export module wrapper {
							export class BounceRecyclerView extends com.taobao.weex.ui.view.refresh.wrapper.BaseBounceView<com.taobao.weex.ui.view.listview.WXRecyclerView> {
								public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.wrapper.BounceRecyclerView>;
								public static DEFAULT_COLUMN_COUNT: number;
								public static DEFAULT_COLUMN_GAP: number;
								public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: number);
								public onLoadmoreComplete(): void;
								public getInnerView(): com.taobao.weex.ui.view.listview.WXRecyclerView;
								public getInnerView(): any;
								public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
								public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
								public setInnerView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.listview.WXRecyclerView;
								public notifyStickyRemove(param0: com.taobao.weex.ui.component.list.WXCell): void;
								public setRecyclerViewBaseAdapter(param0: com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter<any>): void;
								public notifyStickyShow(param0: com.taobao.weex.ui.component.list.WXCell): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
								public updateStickyView(param0: number): void;
								public getRecyclerViewBaseAdapter(): com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter<any>;
								public setInnerView(param0: globalAndroid.content.Context): any;
								public onRefreshingComplete(): void;
								public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
								public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
								public constructor(param0: globalAndroid.content.Context, param1: number);
								public getStickyHeaderHelper(): com.taobao.weex.ui.component.list.StickyHeaderHelper;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module ui {
				export module view {
					export module refresh {
						export module wrapper {
							export class BounceScrollerView extends com.taobao.weex.ui.view.refresh.wrapper.BaseBounceView<com.taobao.weex.ui.view.WXScrollView> {
								public static class: java.lang.Class<com.taobao.weex.ui.view.refresh.wrapper.BounceScrollerView>;
								public onLoadmoreComplete(): void;
								public setInnerView(param0: globalAndroid.content.Context): any;
								public setInnerView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXScrollView;
								public onRefreshingComplete(): void;
								public constructor(param0: globalAndroid.content.Context, param1: number, param2: com.taobao.weex.ui.component.WXBaseScroller);
								public constructor(param0: globalAndroid.content.Context, param1: number);
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class ATagUtil {
					public static class: java.lang.Class<com.taobao.weex.utils.ATagUtil>;
					public constructor();
					public static onClick(param0: globalAndroid.view.View, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class BoxShadowUtil {
					public static class: java.lang.Class<com.taobao.weex.utils.BoxShadowUtil>;
					public static isBoxShadowEnabled(): boolean;
					public static setBoxShadow(param0: globalAndroid.view.View, param1: string, param2: androidNative.Array<number>, param3: number, param4: number): void;
					public constructor();
					public static parseBoxShadows(param0: string, param1: number): androidNative.Array<com.taobao.weex.utils.BoxShadowUtil.BoxShadowOptions>;
					public static setBoxShadowEnabled(param0: boolean): void;
				}
				export module BoxShadowUtil {
					export class BoxShadowOptions {
						public static class: java.lang.Class<com.taobao.weex.utils.BoxShadowUtil.BoxShadowOptions>;
						public hShadow: number;
						public vShadow: number;
						public blur: number;
						public spread: number;
						public radii: androidNative.Array<number>;
						public color: number;
						public isInset: boolean;
						public viewWidth: number;
						public viewHeight: number;
						public topLeft: globalAndroid.graphics.PointF;
						public scale(param0: number): com.taobao.weex.utils.BoxShadowUtil.BoxShadowOptions;
						public toString(): string;
						public getTargetCanvasRect(): globalAndroid.graphics.Rect;
					}
					export module BoxShadowOptions {
						export class IParser {
							public static class: java.lang.Class<com.taobao.weex.utils.BoxShadowUtil.BoxShadowOptions.IParser>;
							/**
							 * Constructs a new instance of the com.taobao.weex.utils.BoxShadowUtil$BoxShadowOptions$IParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								parse(param0: string): void;
							});
							public constructor();
							public parse(param0: string): void;
						}
					}
					export class InsetShadowDrawable {
						public static class: java.lang.Class<com.taobao.weex.utils.BoxShadowUtil.InsetShadowDrawable>;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
					}
					export class OverflowBitmapDrawable {
						public static class: java.lang.Class<com.taobao.weex.utils.BoxShadowUtil.OverflowBitmapDrawable>;
						public draw(param0: globalAndroid.graphics.Canvas): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class FontDO {
					public static class: java.lang.Class<com.taobao.weex.utils.FontDO>;
					public static STATE_INVALID: number;
					public static STATE_INIT: number;
					public static STATE_LOADING: number;
					public static STATE_SUCCESS: number;
					public static STATE_FAILED: number;
					public static TYPE_UNKNOWN: number;
					public static TYPE_NETWORK: number;
					public static TYPE_FILE: number;
					public static TYPE_LOCAL: number;
					public static TYPE_NATIVE: number;
					public static TYPE_BASE64: number;
					public getType(): number;
					public getFontFamilyName(): string;
					public constructor(param0: string, param1: globalAndroid.graphics.Typeface);
					public getUrl(): string;
					public setTypeface(param0: globalAndroid.graphics.Typeface): void;
					public setState(param0: number): void;
					public constructor(param0: string, param1: string, param2: com.taobao.weex.WXSDKInstance);
					public getFilePath(): string;
					public setFilePath(param0: string): void;
					public getTypeface(): globalAndroid.graphics.Typeface;
					public getState(): number;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class FunctionParser<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.taobao.weex.utils.FunctionParser<any,any>>;
					public static SPACE: string;
					public constructor(param0: string, param1: com.taobao.weex.utils.FunctionParser.Mapper<K,V>);
					public parse(): java.util.LinkedHashMap<K,V>;
				}
				export module FunctionParser {
					export class Lexer {
						public static class: java.lang.Class<com.taobao.weex.utils.FunctionParser.Lexer>;
					}
					export class Mapper<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.taobao.weex.utils.FunctionParser.Mapper<any,any>>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.FunctionParser$Mapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							map(param0: string, param1: java.util.List<string>): java.util.Map<K,V>;
						});
						public constructor();
						public map(param0: string, param1: java.util.List<string>): java.util.Map<K,V>;
					}
					export class Token {
						public static class: java.lang.Class<com.taobao.weex.utils.FunctionParser.Token>;
						public static FUNC_NAME: com.taobao.weex.utils.FunctionParser.Token;
						public static PARAM_VALUE: com.taobao.weex.utils.FunctionParser.Token;
						public static LEFT_PARENT: com.taobao.weex.utils.FunctionParser.Token;
						public static RIGHT_PARENT: com.taobao.weex.utils.FunctionParser.Token;
						public static COMMA: com.taobao.weex.utils.FunctionParser.Token;
						public static valueOf(param0: string): com.taobao.weex.utils.FunctionParser.Token;
						public static values(): androidNative.Array<com.taobao.weex.utils.FunctionParser.Token>;
					}
					export class WXInterpretationException {
						public static class: java.lang.Class<com.taobao.weex.utils.FunctionParser.WXInterpretationException>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class ImageDrawable {
					public static class: java.lang.Class<com.taobao.weex.utils.ImageDrawable>;
					public getCornerRadii(): androidNative.Array<number>;
					public getBitmapWidth(): number;
					public setCornerRadii(param0: androidNative.Array<number>): void;
					public getBitmapHeight(): number;
					public static createImageDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.widget.ImageView.ScaleType, param2: androidNative.Array<number>, param3: number, param4: number, param5: boolean): globalAndroid.graphics.drawable.Drawable;
					public onDraw(param0: globalAndroid.graphics.drawable.shapes.Shape, param1: globalAndroid.graphics.Canvas, param2: globalAndroid.graphics.Paint): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class ImgURIUtil {
					public static class: java.lang.Class<com.taobao.weex.utils.ImgURIUtil>;
					public constructor();
					public static getDrawableFromLoaclSrc(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class LogLevel extends io.dcloud.feature.uniapp.utils.AbsLogLevel {
					public static class: java.lang.Class<com.taobao.weex.utils.LogLevel>;
					public static OFF: com.taobao.weex.utils.LogLevel;
					public static WTF: com.taobao.weex.utils.LogLevel;
					public static TLOG: com.taobao.weex.utils.LogLevel;
					public static ERROR: com.taobao.weex.utils.LogLevel;
					public static WARN: com.taobao.weex.utils.LogLevel;
					public static INFO: com.taobao.weex.utils.LogLevel;
					public static DEBUG: com.taobao.weex.utils.LogLevel;
					public static VERBOSE: com.taobao.weex.utils.LogLevel;
					public static ALL: com.taobao.weex.utils.LogLevel;
					public getPriority(): number;
					public static valueOf(param0: string): com.taobao.weex.utils.LogLevel;
					public getName(): string;
					public getValue(): number;
					public compare(param0: io.dcloud.feature.uniapp.utils.AbsLogLevel): number;
					public static values(): androidNative.Array<com.taobao.weex.utils.LogLevel>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class OsVersion {
					public static class: java.lang.Class<com.taobao.weex.utils.OsVersion>;
					public constructor();
					public static isAtLeastJB_MR2(): boolean;
					public static getApiVersion(): number;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class SingleFunctionParser<V>  extends com.taobao.weex.utils.FunctionParser<string,java.util.List<any>> {
					public static class: java.lang.Class<com.taobao.weex.utils.SingleFunctionParser<any>>;
					public parse(): java.util.LinkedHashMap<any,any>;
					public constructor(param0: string, param1: com.taobao.weex.utils.SingleFunctionParser.FlatMapper<any>);
					public constructor(param0: string, param1: com.taobao.weex.utils.SingleFunctionParser.NonUniformMapper<any>);
					public parse(param0: string): java.util.List<any>;
					public constructor(param0: string, param1: com.taobao.weex.utils.FunctionParser.Mapper<any,any>);
				}
				export module SingleFunctionParser {
					export class FlatMapper<V>  extends java.lang.Object {
						public static class: java.lang.Class<com.taobao.weex.utils.SingleFunctionParser.FlatMapper<any>>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.SingleFunctionParser$FlatMapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							map(param0: string): V;
						});
						public constructor();
						public map(param0: string): V;
					}
					export class NonUniformMapper<V>  extends java.lang.Object {
						public static class: java.lang.Class<com.taobao.weex.utils.SingleFunctionParser.NonUniformMapper<any>>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.SingleFunctionParser$NonUniformMapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							map(param0: java.util.List<string>): java.util.List<V>;
						});
						public constructor();
						public map(param0: java.util.List<string>): java.util.List<V>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class StaticLayoutProxy {
					public static class: java.lang.Class<com.taobao.weex.utils.StaticLayoutProxy>;
					public constructor();
					public static create(param0: string, param1: globalAndroid.text.TextPaint, param2: number, param3: globalAndroid.text.Layout.Alignment, param4: number, param5: number, param6: boolean, param7: boolean): globalAndroid.text.StaticLayout;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class Trace {
					public static class: java.lang.Class<com.taobao.weex.utils.Trace>;
					public static endSection(): void;
					public static getTraceEnabled(): boolean;
					public constructor();
					public static beginSection(param0: string): void;
				}
				export module Trace {
					export abstract class AbstractTrace {
						public static class: java.lang.Class<com.taobao.weex.utils.Trace.AbstractTrace>;
					}
					export class TraceDummy extends com.taobao.weex.utils.Trace.AbstractTrace {
						public static class: java.lang.Class<com.taobao.weex.utils.Trace.TraceDummy>;
					}
					export class TraceJBMR2 extends com.taobao.weex.utils.Trace.AbstractTrace {
						public static class: java.lang.Class<com.taobao.weex.utils.Trace.TraceJBMR2>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class TypefaceUtil {
					public static class: java.lang.Class<com.taobao.weex.utils.TypefaceUtil>;
					public static FONT_CACHE_DIR_NAME: string;
					public static ACTION_TYPE_FACE_AVAILABLE: string;
					public static getFontDO(param0: string): com.taobao.weex.utils.FontDO;
					public static removeFontDO(param0: string): void;
					public static putFontDO(param0: com.taobao.weex.utils.FontDO): void;
					public static registerNativeFont(param0: java.util.Map<string,globalAndroid.graphics.Typeface>): void;
					public constructor();
					public static getOrCreateTypeface(param0: string, param1: number): globalAndroid.graphics.Typeface;
					public static loadTypeface(param0: com.taobao.weex.utils.FontDO, param1: boolean): void;
					public static applyFontStyle(param0: globalAndroid.graphics.Paint, param1: number, param2: number, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXDataStructureUtil {
					public static class: java.lang.Class<com.taobao.weex.utils.WXDataStructureUtil>;
					public constructor();
					public static newHashMapWithExpectedSize(param0: number): java.util.HashMap<any,any>;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXDeviceUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXDeviceUtils>;
					public static isGalaxyFold(param0: globalAndroid.content.Context): boolean;
					public constructor();
					public static isAutoResize(param0: globalAndroid.content.Context): boolean;
					public static isMateX(param0: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXDomUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXDomUtils>;
					public static getContentWidth(param0: com.taobao.weex.dom.CSSShorthand<any>, param1: com.taobao.weex.dom.CSSShorthand<any>, param2: number): number;
					public constructor();
					public static getContentWidth(param0: com.taobao.weex.ui.component.WXComponent<any>): number;
					public static getContentHeight(param0: com.taobao.weex.ui.component.WXComponent<any>): number;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXExceptionUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXExceptionUtils>;
					public static degradeUrl: string;
					public static commitCriticalExceptionRT(param0: string, param1: com.taobao.weex.common.WXErrorCode, param2: string, param3: string, param4: java.util.Map<string,string>): void;
					public static commitCriticalExceptionWithDefaultUrl(param0: string, param1: string, param2: com.taobao.weex.common.WXErrorCode, param3: string, param4: string, param5: java.util.Map<string,string>): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXFileUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXFileUtils>;
					public static readBytesFromAssets(param0: string, param1: globalAndroid.content.Context): androidNative.Array<number>;
					public static extractSo(param0: string, param1: string): boolean;
					public static md5(param0: androidNative.Array<number>): string;
					public static md5(param0: string): string;
					public static saveFile(param0: string, param1: androidNative.Array<number>, param2: globalAndroid.content.Context): boolean;
					public static base64Md5(param0: androidNative.Array<number>): string;
					public static base64Md5(param0: string): string;
					public static closeIo(param0: java.io.Closeable): void;
					public constructor();
					public static loadFileOrAsset(param0: string, param1: globalAndroid.content.Context): string;
					public static copyFile(param0: java.io.File, param1: java.io.File): void;
					public static copyFileWithException(param0: java.io.File, param1: java.io.File): void;
					public static loadAsset(param0: string, param1: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXInterception {
					public static class: java.lang.Class<com.taobao.weex.utils.WXInterception>;
					public static proxy(param0: any, param1: com.taobao.weex.utils.WXInterception.InterceptionHandler<any>, param2: androidNative.Array<java.lang.Class<any>>): any;
					public static proxy(param0: any, param1: java.lang.Class<any>, param2: com.taobao.weex.utils.WXInterception.InterceptionHandler<any>): any;
				}
				export module WXInterception {
					export class Intercepted {
						public static class: java.lang.Class<com.taobao.weex.utils.WXInterception.Intercepted>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.WXInterception$Intercepted interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export abstract class InterceptionHandler<T>  extends java.lang.reflect.InvocationHandler {
						public static class: java.lang.Class<com.taobao.weex.utils.WXInterception.InterceptionHandler<any>>;
						public delegate(): any;
						public constructor();
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: androidNative.Array<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXJsonUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXJsonUtils>;
					public static fromObjectToJSONString(param0: any): string;
					public constructor();
					public static getList(param0: string, param1: java.lang.Class<any>): java.util.List<any>;
					public static putAll(param0: java.util.Map<string,any>, param1: com.alibaba.fastjson.JSONObject): void;
					public static fromObjectToJSONString(param0: any, param1: boolean): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXLogUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXLogUtils>;
					public static WEEX_TAG: string;
					public static WEEX_PERF_TAG: string;
					public static e(param0: string): void;
					public static p(param0: string): void;
					public static i(param0: string, param1: string): void;
					public static i(param0: string, param1: java.lang.Throwable): void;
					public static e(param0: string, param1: string): void;
					public static wtf(param0: string, param1: java.lang.Throwable): void;
					public static info(param0: string): void;
					public static w(param0: string, param1: java.lang.Throwable): void;
					public static performance(param0: string, param1: androidNative.Array<number>): void;
					public constructor();
					public static setLogWatcher(param0: com.taobao.weex.utils.WXLogUtils.LogWatcher): void;
					public static d(param0: string, param1: string): void;
					public static v(param0: string, param1: string): void;
					public static eTag(param0: string, param1: java.lang.Throwable): void;
					public static w(param0: string, param1: string): void;
					public static v(param0: string, param1: java.lang.Throwable): void;
					public static e(param0: string, param1: androidNative.Array<number>): void;
					public static wtf(param0: string, param1: string): void;
					public static v(param0: string): void;
					public static d(param0: string): void;
					public static e(param0: string, param1: java.lang.Throwable): void;
					public static renderPerformanceLog(param0: string, param1: number): void;
					public static wtf(param0: string): void;
					public static d(param0: string, param1: androidNative.Array<number>): void;
					public static setJsLogWatcher(param0: com.taobao.weex.utils.WXLogUtils.JsLogWatcher): void;
					public static d(param0: string, param1: java.lang.Throwable): void;
					public static w(param0: string): void;
					public static i(param0: string, param1: androidNative.Array<number>): void;
					public static i(param0: string): void;
					public static setIsDebug(param0: boolean): void;
					public static w(param0: string, param1: androidNative.Array<number>): void;
					public static getStackTrace(param0: java.lang.Throwable): string;
					public static p(param0: string, param1: java.lang.Throwable): void;
				}
				export module WXLogUtils {
					export class JsLogWatcher {
						public static class: java.lang.Class<com.taobao.weex.utils.WXLogUtils.JsLogWatcher>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.WXLogUtils$JsLogWatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onJsLog(param0: number, param1: string): void;
						});
						public constructor();
						public onJsLog(param0: number, param1: string): void;
					}
					export class LogWatcher {
						public static class: java.lang.Class<com.taobao.weex.utils.WXLogUtils.LogWatcher>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.WXLogUtils$LogWatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLog(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onLog(param0: string, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXMap extends java.util.HashMap<string,string> implements java.io.Serializable  {
					public static class: java.lang.Class<com.taobao.weex.utils.WXMap>;
					public constructor();
					public put(param0: string, param1: androidNative.Array<number>): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXReflectionUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXReflectionUtils>;
					public static getDeclaredField(param0: any, param1: string): java.lang.reflect.Field;
					public constructor();
					public static setValue(param0: any, param1: string, param2: any): void;
					public static setProperty(param0: any, param1: java.lang.reflect.Field, param2: any): void;
					public static parseArgument(param0: java.lang.reflect.Type, param1: any): any;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXResourceUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXResourceUtils>;
					public static getColor(param0: string): number;
					public static getColor(param0: string, param1: number): number;
					public constructor();
					public static isNamedColor(param0: string): boolean;
					public static getShader(param0: string, param1: number, param2: number): globalAndroid.graphics.Shader;
				}
				export module WXResourceUtils {
					export abstract class ColorConvertHandler {
						public static class: java.lang.Class<com.taobao.weex.utils.WXResourceUtils.ColorConvertHandler>;
						public static NAMED_COLOR_HANDLER: com.taobao.weex.utils.WXResourceUtils.ColorConvertHandler;
						public static RGB_HANDLER: com.taobao.weex.utils.WXResourceUtils.ColorConvertHandler;
						public static FUNCTIONAL_RGB_HANDLER: com.taobao.weex.utils.WXResourceUtils.ColorConvertHandler;
						public static FUNCTIONAL_RGBA_HANDLER: com.taobao.weex.utils.WXResourceUtils.ColorConvertHandler;
						public static values(): androidNative.Array<com.taobao.weex.utils.WXResourceUtils.ColorConvertHandler>;
						public static valueOf(param0: string): com.taobao.weex.utils.WXResourceUtils.ColorConvertHandler;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXSoInstallMgrSdk {
					public static class: java.lang.Class<com.taobao.weex.utils.WXSoInstallMgrSdk>;
					public static copyJssRuntimeSo(): void;
					public static init(param0: globalAndroid.app.Application, param1: com.taobao.weex.adapter.IWXSoLoaderAdapter, param2: com.taobao.weex.IWXStatisticsListener): void;
					public constructor();
					public static isCPUSupport(): boolean;
					public static copyStartUpSo(): void;
					public static isX86(): boolean;
					public static initSo(param0: string, param1: number, param2: com.taobao.weex.adapter.IWXUserTrackAdapter): boolean;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXUtils>;
					public static PERCENT: string;
					public static getFloat(param0: any): number;
					public static fastGetFloat(param0: string): number;
					public static parseFloat(param0: any): number;
					public static fastGetFloat(param0: string, param1: number): number;
					public static getFixUnixTime(): number;
					public static getCache(): androidx.collection.LruCache;
					/** @deprecated */
					public static getDouble(param0: any): number;
					public constructor();
					/** @deprecated */
					public static isTabletDevice(): boolean;
					public static getBundleBanner(param0: string): string;
					public static parseFloat(param0: string): number;
					public static getInt(param0: any): number;
					public static getInteger(param0: any, param1: java.lang.Integer): java.lang.Integer;
					public static getAvailMemory(param0: globalAndroid.content.Context): number;
					public static checkGreyConfig(param0: string, param1: string, param2: string): boolean;
					public static isUndefined(param0: number): boolean;
					public static isUiThread(): boolean;
					public static getNumberInt(param0: any, param1: number): number;
					public static parseInt(param0: string): number;
					public static getFloatByViewport(param0: any, param1: number): number;
					public static parseInt(param0: any): number;
					public static getString(param0: any, param1: string): string;
					public static getFloat(param0: any, param1: java.lang.Float): java.lang.Float;
					public static getBoolean(param0: any, param1: java.lang.Boolean): java.lang.Boolean;
					/** @deprecated */
					public static getLong(param0: any): number;
					public static parseUnitOrPercent(param0: string, param1: number): number;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXViewToImageUtil {
					public static class: java.lang.Class<com.taobao.weex.utils.WXViewToImageUtil>;
					public static mBackgroundColor: number;
					public constructor();
					public static saveBitmapToGallery(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.Bitmap, param2: com.taobao.weex.utils.WXViewToImageUtil.OnImageSavedCallback): string;
					public static getBitmapFromImageView(param0: globalAndroid.view.View, param1: number): globalAndroid.graphics.Bitmap;
					public static generateImage(param0: globalAndroid.view.View, param1: number, param2: number, param3: com.taobao.weex.utils.WXViewToImageUtil.OnImageSavedCallback): void;
				}
				export module WXViewToImageUtil {
					export class OnImageSavedCallback {
						public static class: java.lang.Class<com.taobao.weex.utils.WXViewToImageUtil.OnImageSavedCallback>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.WXViewToImageUtil$OnImageSavedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSaveSucceed(param0: string): void;
							onSaveFailed(param0: string): void;
						});
						public constructor();
						public onSaveFailed(param0: string): void;
						public onSaveSucceed(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXViewUtils {
					public static class: java.lang.Class<com.taobao.weex.utils.WXViewUtils>;
					public static TRANSLUCENT: number;
					public static TRANSPARENT: number;
					public static OPAQUE: number;
					public static DIMENSION_UNSET: number;
					public static getScreenHeight(param0: globalAndroid.content.Context): number;
					public static setBackGround(param0: globalAndroid.view.View, param1: globalAndroid.graphics.drawable.Drawable, param2: com.taobao.weex.ui.component.WXComponent<any>): void;
					/** @deprecated */
					public static getRealPxByWidth(param0: number): number;
					/** @deprecated */
					public static getRealPxByWidth2(param0: number): number;
					public static clipCanvasWithinBorderBox(param0: com.taobao.weex.ui.flat.widget.Widget, param1: globalAndroid.graphics.Canvas): void;
					/** @deprecated */
					public static getRealSubPxByWidth(param0: number): number;
					/** @deprecated */
					public static getWeexPxByReal(param0: number): number;
					public static getStatusBarHeight(param0: globalAndroid.content.Context): number;
					public static getScreenDensity(param0: globalAndroid.content.Context): number;
					public static getWebPxByWidth(param0: number, param1: number): number;
					public static updateApplicationScreen(param0: globalAndroid.content.Context): void;
					public constructor();
					public static onScreenArea(param0: globalAndroid.view.View): boolean;
					public static getWeexWidth(param0: string): number;
					public static generateViewId(): number;
					/** @deprecated */
					public static getScreenWidth(): number;
					public static getScreenHeight(param0: string): number;
					public static clipCanvasWithinBorderBox(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Canvas): void;
					public static getWeexHeight(param0: string): number;
					public static getRealPxByWidth(param0: number, param1: number): number;
					public static getRealPxByWidth2(param0: number, param1: number): number;
					public static getFullScreenHeight(param0: globalAndroid.content.Context): number;
					/** @deprecated */
					public static getWebPxByWidth(param0: number): number;
					public static getScreenWidth(param0: globalAndroid.content.Context): number;
					public static getOpacityFromColor(param0: number): number;
					public static getBorderDrawable(param0: globalAndroid.view.View): com.taobao.weex.ui.view.border.BorderDrawable;
					public static multiplyColorAlpha(param0: number, param1: number): number;
					public static getWeexPxByReal(param0: number, param1: number): number;
					public static dip2px(param0: number): number;
					/** @deprecated */
					public static setScreenWidth(param0: number): number;
					public static getRealSubPxByWidth(param0: number, param1: number): number;
					/** @deprecated */
					public static getScreenHeight(): number;
				}
				export module WXViewUtils {
					export class Opacity {
						public static class: java.lang.Class<com.taobao.weex.utils.WXViewUtils.Opacity>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.WXViewUtils$Opacity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export class WXWsonJSONSwitch {
					public static class: java.lang.Class<com.taobao.weex.utils.WXWsonJSONSwitch>;
					public static USE_WSON: boolean;
					public static WSON_OFF: string;
					public static convertWXJSObjectDataToJSON(param0: com.taobao.weex.bridge.WXJSObject): any;
					public static parseWsonOrJSON(param0: androidNative.Array<number>): any;
					public constructor();
					public static toWsonOrJsonWXJSObject(param0: any): com.taobao.weex.bridge.WXJSObject;
					public static convertJSONToWsonIfUseWson(param0: androidNative.Array<number>): androidNative.Array<number>;
					public static fromObjectToJSONString(param0: com.taobao.weex.bridge.WXJSObject): string;
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module batch {
					export class BactchExecutor {
						public static class: java.lang.Class<com.taobao.weex.utils.batch.BactchExecutor>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.batch.BactchExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							post(param0: java.lang.Runnable): void;
							setInterceptor(param0: com.taobao.weex.utils.batch.Interceptor): void;
						});
						public constructor();
						public setInterceptor(param0: com.taobao.weex.utils.batch.Interceptor): void;
						public post(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module batch {
					export class BatchOperationHelper extends com.taobao.weex.utils.batch.Interceptor {
						public static class: java.lang.Class<com.taobao.weex.utils.batch.BatchOperationHelper>;
						public flush(): void;
						public constructor(param0: com.taobao.weex.utils.batch.BactchExecutor);
						public take(param0: java.lang.Runnable): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module batch {
					export class Interceptor {
						public static class: java.lang.Class<com.taobao.weex.utils.batch.Interceptor>;
						/**
						 * Constructs a new instance of the com.taobao.weex.utils.batch.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							take(param0: java.lang.Runnable): boolean;
						});
						public constructor();
						public take(param0: java.lang.Runnable): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module cache {
					export class RegisterCache {
						public static class: java.lang.Class<com.taobao.weex.utils.cache.RegisterCache>;
						public setEnableAutoScan(param0: boolean): void;
						public cacheComponent(param0: string, param1: com.taobao.weex.ui.IFComponentHolder, param2: java.util.Map<string,any>): boolean;
						public static getInstance(): com.taobao.weex.utils.cache.RegisterCache;
						public idle(param0: boolean): boolean;
						public cacheModule(param0: string, param1: com.taobao.weex.bridge.ModuleFactory<any>, param2: boolean): boolean;
						public enableAutoScan(): boolean;
						public setEnable(param0: boolean): void;
						public setDoNotCacheSize(param0: number): void;
					}
					export module RegisterCache {
						export class ComponentCache {
							public static class: java.lang.Class<com.taobao.weex.utils.cache.RegisterCache.ComponentCache>;
							public type: string;
							public holder: com.taobao.weex.ui.IFComponentHolder;
							public componentInfo: java.util.Map<string,any>;
						}
						export class ModuleCache {
							public static class: java.lang.Class<com.taobao.weex.utils.cache.RegisterCache.ModuleCache>;
							public name: string;
							public factory: com.taobao.weex.bridge.ModuleFactory<any>;
							public global: boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module tools {
					export class Info {
						public static class: java.lang.Class<com.taobao.weex.utils.tools.Info>;
						public instanceId: string;
						public taskName: string;
						public taskInfo: com.taobao.weex.utils.tools.TaskInfo;
						public platform: string;
						public taskId: number;
						public constructor();
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module tools {
					export class LogDetail {
						public static class: java.lang.Class<com.taobao.weex.utils.tools.LogDetail>;
						public static KeyWrod_Init: string;
						public static KeyWords_Render: string;
						public time: com.taobao.weex.utils.tools.Time;
						public info: com.taobao.weex.utils.tools.Info;
						public keyWords: string;
						public constructor();
						public name(param0: string): void;
						public taskEnd(): void;
						public println(): void;
						public keyWorkds(param0: string): void;
						public taskStart(): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module tools {
					export class LogSwitch {
						public static class: java.lang.Class<com.taobao.weex.utils.tools.LogSwitch>;
						public constructor();
						public getLog_switch(): number;
						public setLog_switch(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module tools {
					export class TaskInfo {
						public static class: java.lang.Class<com.taobao.weex.utils.tools.TaskInfo>;
						public args: string;
						public relateTaskId: number;
						public constructor();
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module tools {
					export class Time {
						public static class: java.lang.Class<com.taobao.weex.utils.tools.Time>;
						public destructor: number;
						public constructor();
						public constructor(): void;
						public waitTime(): void;
						public taskEnd(): void;
						public execTime(): void;
						public taskStart(): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module utils {
				export module tools {
					export class TimeCalculator {
						public static class: java.lang.Class<com.taobao.weex.utils.tools.TimeCalculator>;
						public static TIMELINE_TAG: string;
						public static PLATFORM_ANDROID: string;
						public addLog(param0: com.taobao.weex.utils.tools.LogDetail): void;
						public println(): void;
						public createLogDetail(param0: string): com.taobao.weex.utils.tools.LogDetail;
						public constructor(param0: com.taobao.weex.WXSDKInstance);
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module wson {
				export class Wson {
					public static class: java.lang.Class<com.taobao.weex.wson.Wson>;
					public static WriteMapNullValue: boolean;
					public static parse(param0: androidNative.Array<number>): any;
					public constructor();
					public static toWson(param0: any): androidNative.Array<number>;
				}
				export module Wson {
					export class Builder {
						public static class: java.lang.Class<com.taobao.weex.wson.Wson.Builder>;
					}
					export class Parser {
						public static class: java.lang.Class<com.taobao.weex.wson.Wson.Parser>;
					}
				}
			}
		}
	}
}

declare module com {
	export module taobao {
		export module weex {
			export module wson {
				export class WsonUtils {
					public static class: java.lang.Class<com.taobao.weex.wson.WsonUtils>;
					public constructor();
					public static toWson(param0: any): androidNative.Array<number>;
					public static parseWson(param0: androidNative.Array<number>): any;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module common {
			export module cs {
				export class DA {
					public static class: java.lang.Class<io.dcloud.common.cs.DA>;
					public sc(): void;
					public constructor();
					public act(param0: string, param1: any): void;
					public static getInstance(): io.dcloud.common.DHInterface.DAI;
					public ar(param0: string, param1: any): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export abstract class AbsSDKEngine {
					public static class: java.lang.Class<io.dcloud.feature.uniapp.AbsSDKEngine>;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export class AbsSDKInstance extends com.taobao.weex.IWXActivityStateListener {
					public static class: java.lang.Class<io.dcloud.feature.uniapp.AbsSDKInstance>;
					/**
					 * Constructs a new instance of the io.dcloud.feature.uniapp.AbsSDKInstance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getBundleUrl(): string;
						getContext(): globalAndroid.content.Context;
						getInstanceId(): string;
						isFrameViewShow(): boolean;
						onShowAnimationEnd(): void;
						isImmersive(): boolean;
						setImmersive(param0: boolean): void;
						getDefaultFontSize(): number;
						setDefaultFontSize(param0: number): void;
						setRenderType(param0: string): void;
						getRenderType(): string;
						fireModuleEvent(param0: string, param1: com.taobao.weex.common.WXModule, param2: java.util.Map<string,any>): void;
						fireGlobalEventCallback(param0: string, param1: java.util.Map<string,any>): void;
						fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>, param4: java.util.List<any>): void;
						fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>, param4: java.util.List<any>, param5: com.taobao.weex.bridge.EventResult): void;
						fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>): void;
						fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
						fireEvent(param0: string, param1: string): void;
						addEventListener(param0: string, param1: string): void;
						removeEventListener(param0: string, param1: string): void;
						removeEventListener(param0: string): void;
						setSize(param0: number, param1: number): void;
						setBundleUrl(param0: string): void;
						getRootView(): globalAndroid.view.View;
						getParentInstance(): com.taobao.weex.WXSDKInstance;
						isDestroy(): boolean;
						runOnUiThread(param0: java.lang.Runnable): void;
						onCreateFinish(): void;
						onBackPressed(): boolean;
						onSupportNavigateUp(): boolean;
						onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
						registerRenderListener(param0: com.taobao.weex.IWXRenderListener): void;
						reloadImages(): void;
						getURIAdapter(): com.taobao.weex.adapter.URIAdapter;
						rewriteUri(param0: globalAndroid.net.Uri, param1: string): globalAndroid.net.Uri;
						getDrawableLoader(): com.taobao.weex.adapter.IDrawableLoader;
						getImgLoaderAdapter(): com.taobao.weex.adapter.IWXImgLoaderAdapter;
						getWeexHeight(): number;
						getWeexWidth(): number;
						reloadPage(param0: boolean): void;
						getInstanceViewPortWidth(): number;
						getInstanceViewPortWidthWithFloat(): number;
						isCompilerWithUniapp(): boolean;
						getOriginalContext(): globalAndroid.content.Context;
						onActivityCreate(): void;
						onActivityStart(): void;
						onActivityPause(): void;
						onActivityResume(): void;
						onActivityStop(): void;
						onActivityDestroy(): void;
						onActivityBack(): boolean;
					});
					public constructor();
					public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>, param4: java.util.List<any>, param5: com.taobao.weex.bridge.EventResult): void;
					public onSupportNavigateUp(): boolean;
					public addEventListener(param0: string, param1: string): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public getImgLoaderAdapter(): com.taobao.weex.adapter.IWXImgLoaderAdapter;
					public onActivityStop(): void;
					public runOnUiThread(param0: java.lang.Runnable): void;
					public onActivityStart(): void;
					public getInstanceViewPortWidth(): number;
					public getInstanceViewPortWidthWithFloat(): number;
					public getContext(): globalAndroid.content.Context;
					public setDefaultFontSize(param0: number): void;
					public onBackPressed(): boolean;
					public getDrawableLoader(): com.taobao.weex.adapter.IDrawableLoader;
					public getURIAdapter(): com.taobao.weex.adapter.URIAdapter;
					public rewriteUri(param0: globalAndroid.net.Uri, param1: string): globalAndroid.net.Uri;
					public onActivityDestroy(): void;
					public isDestroy(): boolean;
					public onActivityPause(): void;
					public getBundleUrl(): string;
					public getRootView(): globalAndroid.view.View;
					public isImmersive(): boolean;
					public setSize(param0: number, param1: number): void;
					public removeEventListener(param0: string): void;
					public onActivityResume(): void;
					public setBundleUrl(param0: string): void;
					public getWeexWidth(): number;
					public getOriginalContext(): globalAndroid.content.Context;
					public setImmersive(param0: boolean): void;
					public reloadPage(param0: boolean): void;
					public fireEvent(param0: string, param1: string): void;
					public isCompilerWithUniapp(): boolean;
					public getRenderType(): string;
					public reloadImages(): void;
					public onActivityCreate(): void;
					public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>): void;
					public removeEventListener(param0: string, param1: string): void;
					public isFrameViewShow(): boolean;
					public onActivityBack(): boolean;
					public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public getDefaultFontSize(): number;
					public getParentInstance(): com.taobao.weex.WXSDKInstance;
					public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>, param4: java.util.List<any>): void;
					public onShowAnimationEnd(): void;
					public setRenderType(param0: string): void;
					public registerRenderListener(param0: com.taobao.weex.IWXRenderListener): void;
					public fireGlobalEventCallback(param0: string, param1: java.util.Map<string,any>): void;
					public fireModuleEvent(param0: string, param1: com.taobao.weex.common.WXModule, param2: java.util.Map<string,any>): void;
					public getInstanceId(): string;
					public onCreateFinish(): void;
					public getWeexHeight(): number;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export class UniAppHookProxy extends io.dcloud.weex.AppHookProxy {
					public static class: java.lang.Class<io.dcloud.feature.uniapp.UniAppHookProxy>;
					/**
					 * Constructs a new instance of the io.dcloud.feature.uniapp.UniAppHookProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSubProcessCreate(param0: globalAndroid.app.Application): void;
						onCreate(param0: globalAndroid.app.Application): void;
					});
					public constructor();
					public onSubProcessCreate(param0: globalAndroid.app.Application): void;
					public onCreate(param0: globalAndroid.app.Application): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export class UniMoudlesLoader extends io.dcloud.weex.MoudlesLoader {
					public static class: java.lang.Class<io.dcloud.feature.uniapp.UniMoudlesLoader>;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export class UniSDKEngine extends com.taobao.weex.WXSDKEngine {
					public static class: java.lang.Class<io.dcloud.feature.uniapp.UniSDKEngine>;
					public static registerUniComponent(param0: java.lang.Class<any>, param1: boolean, param2: androidNative.Array<string>): boolean;
					public static registerUniModule(param0: string, param1: io.dcloud.feature.uniapp.bridge.UniModuleFactory<any>, param2: boolean): boolean;
					public static registerModuleWithFactory(param0: string, param1: com.taobao.weex.ui.IExternalModuleGetter, param2: boolean): boolean;
					public static registerUniComponent(param0: string, param1: io.dcloud.feature.uniapp.ui.IExternalUniComponentGetter, param2: boolean): boolean;
					public static registerUniModuleWithFactory(param0: string, param1: io.dcloud.feature.uniapp.UniSDKEngine.DestroyableUniModuleFactory<any>, param2: boolean): boolean;
					public static registerModuleWithFactory(param0: string, param1: io.dcloud.feature.uniapp.ui.IExternalUniModuleGetter, param2: boolean): boolean;
					public static registerUniModule(param0: string, param1: java.lang.Class<any>, param2: boolean): boolean;
					public static registerUniModule(param0: string, param1: java.lang.Class<any>): boolean;
					public static registerUniComponent(param0: io.dcloud.feature.uniapp.ui.IFUniComponentHolder, param1: boolean, param2: androidNative.Array<string>): boolean;
					public static registerUniVContainer(param0: string, param1: java.lang.Class<any>): boolean;
					public constructor();
					public static registerModuleWithFactory(param0: string, param1: com.taobao.weex.WXSDKEngine.DestroyableModuleFactory<any>, param2: boolean): boolean;
					public static registerUniComponent(param0: string, param1: java.lang.Class<any>): boolean;
					public static registerUniComponent(param0: string, param1: java.lang.Class<any>, param2: boolean): boolean;
				}
				export module UniSDKEngine {
					export abstract class DestroyableUniModule extends io.dcloud.feature.uniapp.common.UniModule implements com.taobao.weex.common.Destroyable {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.UniSDKEngine.DestroyableUniModule>;
						public constructor();
						public destroy(): void;
					}
					export abstract class DestroyableUniModuleFactory<T>  extends io.dcloud.feature.uniapp.common.TypeUniModuleFactory<any> {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.UniSDKEngine.DestroyableUniModuleFactory<any>>;
						public constructor(param0: java.lang.Class<any>);
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export class UniSDKInstance extends com.taobao.weex.WXSDKInstance {
					public static class: java.lang.Class<io.dcloud.feature.uniapp.UniSDKInstance>;
					public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>, param4: java.util.List<any>, param5: com.taobao.weex.bridge.EventResult): void;
					public onSupportNavigateUp(): boolean;
					public addEventListener(param0: string, param1: string): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public getImgLoaderAdapter(): com.taobao.weex.adapter.IWXImgLoaderAdapter;
					public runOnUiThread(param0: java.lang.Runnable): void;
					public constructor();
					public getInstanceViewPortWidth(): number;
					/** @deprecated */
					public reloadImages(): void;
					public getInstanceViewPortWidthWithFloat(): number;
					public getContext(): globalAndroid.content.Context;
					public setDefaultFontSize(param0: number): void;
					public setCompilerWithUniapp(param0: boolean): void;
					public onBackPressed(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: string);
					public getDrawableLoader(): com.taobao.weex.adapter.IDrawableLoader;
					public getURIAdapter(): com.taobao.weex.adapter.URIAdapter;
					public rewriteUri(param0: globalAndroid.net.Uri, param1: string): globalAndroid.net.Uri;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.Context);
					public isDestroy(): boolean;
					public getBundleUrl(): string;
					public getRootView(): globalAndroid.view.View;
					/** @deprecated */
					public setBundleUrl(param0: string): void;
					public isImmersive(): boolean;
					public setSize(param0: number, param1: number): void;
					public removeEventListener(param0: string): void;
					public setBundleUrl(param0: string): void;
					public getWeexWidth(): number;
					public getOriginalContext(): globalAndroid.content.Context;
					public setImmersive(param0: boolean): void;
					public reloadPage(param0: boolean): void;
					public isCompilerWithUniapp(): boolean;
					public fireEvent(param0: string, param1: string): void;
					public getRenderType(): string;
					public newNestedInstance(): io.dcloud.feature.uniapp.UniSDKInstance;
					public reloadImages(): void;
					public newNestedInstance(): com.taobao.weex.WXSDKInstance;
					public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>): void;
					public removeEventListener(param0: string, param1: string): void;
					public isFrameViewShow(): boolean;
					public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>): void;
					public getDefaultFontSize(): number;
					public getParentInstance(): com.taobao.weex.WXSDKInstance;
					public constructor(param0: globalAndroid.content.Context);
					public fireEvent(param0: string, param1: string, param2: java.util.Map<string,any>, param3: java.util.Map<string,any>, param4: java.util.List<any>): void;
					public onShowAnimationEnd(): void;
					public setRenderType(param0: string): void;
					public registerRenderListener(param0: com.taobao.weex.IWXRenderListener): void;
					public fireGlobalEventCallback(param0: string, param1: java.util.Map<string,any>): void;
					public fireModuleEvent(param0: string, param1: com.taobao.weex.common.WXModule, param2: java.util.Map<string,any>): void;
					public getInstanceId(): string;
					public onCreateFinish(): void;
					public getWeexHeight(): number;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module adapter {
					export class AbsURIAdapter {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.adapter.AbsURIAdapter>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.adapter.AbsURIAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							rewrite(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
							rewrite(param0: string, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
						});
						public constructor();
						public static BUNDLE: string;
						public static IMAGE: string;
						public static OTHERS: string;
						public static REQUEST: string;
						public static VIDEO: string;
						public static WEB: string;
						public static LINK: string;
						public static FILE: string;
						public static FONT: string;
						public rewrite(param0: string, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
						public rewrite(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module adapter {
					export class UniImageLoadAdapter {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.adapter.UniImageLoadAdapter>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.adapter.UniImageLoadAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							loadImageBitmap(param0: globalAndroid.content.Context, param1: string, param2: io.dcloud.feature.uniapp.utils.bitmap.BitmapLoadCallback<globalAndroid.graphics.Bitmap>): void;
							loadImageBitmap(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: io.dcloud.feature.uniapp.utils.bitmap.BitmapLoadCallback<globalAndroid.graphics.Bitmap>): void;
						});
						public constructor();
						public loadImageBitmap(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: io.dcloud.feature.uniapp.utils.bitmap.BitmapLoadCallback<globalAndroid.graphics.Bitmap>): void;
						public loadImageBitmap(param0: globalAndroid.content.Context, param1: string, param2: io.dcloud.feature.uniapp.utils.bitmap.BitmapLoadCallback<globalAndroid.graphics.Bitmap>): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module adapter {
					export class UniURIAdapter extends io.dcloud.feature.uniapp.adapter.AbsURIAdapter {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.adapter.UniURIAdapter>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.adapter.UniURIAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							rewrite(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
							rewrite(param0: string, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
						});
						public constructor();
						public static BUNDLE: string;
						public static IMAGE: string;
						public static OTHERS: string;
						public static REQUEST: string;
						public static VIDEO: string;
						public static WEB: string;
						public static LINK: string;
						public static FILE: string;
						public static FONT: string;
						public rewrite(param0: string, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
						public rewrite(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module annotation {
					export class UniJSMethod {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.annotation.UniJSMethod>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.annotation.UniJSMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							uiThread(): boolean;
							alias(): string;
						});
						public constructor();
						public static NOT_SET: string;
						public uiThread(): boolean;
						public alias(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module bridge {
					export class UniJSCallback extends com.taobao.weex.bridge.JSCallback {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.bridge.UniJSCallback>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.bridge.UniJSCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							invoke(param0: any): void;
							invokeAndKeepAlive(param0: any): void;
						});
						public constructor();
						public invokeAndKeepAlive(param0: any): void;
						public invoke(param0: any): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module bridge {
					export class UniModuleFactory<T>  extends com.taobao.weex.bridge.ModuleFactory<any> {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.bridge.UniModuleFactory<any>>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.bridge.UniModuleFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buildInstance(): any;
							getMethods(): androidNative.Array<string>;
							getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
						});
						public constructor();
						public buildInstance(): any;
						public getMethods(): androidNative.Array<string>;
						public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module common {
					export class TypeUniModuleFactory<T>  extends io.dcloud.feature.uniapp.bridge.UniModuleFactory<any> {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.common.TypeUniModuleFactory<any>>;
						public static TAG: string;
						public buildInstance(): any;
						public constructor(param0: java.lang.Class<any>);
						public getMethods(): androidNative.Array<string>;
						public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module common {
					export class UniConstants extends com.taobao.weex.common.Constants {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.common.UniConstants>;
						public constructor();
					}
					export module UniConstants {
						export class Name extends com.taobao.weex.common.Constants.Name {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.common.UniConstants.Name>;
							/**
							 * Constructs a new instance of the io.dcloud.feature.uniapp.common.UniConstants$Name interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static RETURN_KEY_TYPE: string;
							public static COLUMN_GAP: string;
							public static MIN: string;
							public static SCROLL_TOP: string;
							public static OVERFLOW: string;
							public static MARGIN_RIGHT: string;
							public static TOP: string;
							public static ELLIPSIS: string;
							public static ORIENTATION: string;
							public static SOURCE: string;
							public static PAGE_SIZE: string;
							public static RECYCLE_IMAGE: string;
							public static INSERT_CELL_ANIMATION: string;
							public static LAYER_LIMIT: string;
							public static SUFFIX: string;
							public static RECYCLE: string;
							public static PADDING_RIGHT: string;
							public static LEFT: string;
							public static OFFSET_X_RATIO: string;
							public static POSITION: string;
							public static AUTOPLAY: string;
							public static MARGIN_LEFT: string;
							public static AUTOFOCUS: string;
							public static PADDING_TOP: string;
							public static SCROLL_LEFT: string;
							public static ARIA_HIDDEN: string;
							public static AUTO_PLAY: string;
							public static BORDER_LEFT_WIDTH: string;
							public static TYPE: string;
							public static RIPPLE_ENABLED: string;
							public static BORDER_RIGHT_COLOR: string;
							public static TEXT_ALIGN: string;
							public static IMAGE_QUALITY: string;
							public static MAX_WIDTH: string;
							public static BORDER_RADIUS: string;
							public static BORDER_COLOR: string;
							public static BORDER_LEFT_STYLE: string;
							public static BORDER_TOP_COLOR: string;
							public static UNDEFINED: string;
							public static BOTTOM: string;
							public static PLACEHOLDER_COLOR: string;
							public static HREF: string;
							public static DEFAULT_WIDTH: string;
							public static MARGIN_BOTTOM: string;
							public static BORDER_BOTTOM_LEFT_RADIUS: string;
							public static SELECTION_START: string;
							public static JUSTIFY_CONTENT: string;
							public static SHADOW_QUALITY: string;
							public static PLACE_HOLDER: string;
							public static DELETE_CELL_ANIMATION: string;
							public static NORMAL: string;
							public static INTERVAL: string;
							public static HAS_FIXED_SIZE: string;
							public static DISTANCE_Y: string;
							public static PADDING_BOTTOM: string;
							public static CONTROLS: string;
							public static STICKY_OFFSET: string;
							public static BORDER_RIGHT_STYLE: string;
							public static SHOULD_STOP_PROPAGATION_INIT_RESULT: string;
							public static CONTENT_SIZE: string;
							public static CONTENT_OFFSET: string;
							public static ROLE: string;
							public static LOADMORERETRY: string;
							public static SINGLELINE: string;
							public static ENABLE_COPY: string;
							public static RESIZE: string;
							public static RIGHT_GAP: string;
							public static RIGHT: string;
							public static Y: string;
							public static OFFSET: string;
							public static FLAT: string;
							public static BORDER_TOP_RIGHT_RADIUS: string;
							public static LEFT_GAP: string;
							public static X: string;
							public static BACKGROUND_IMAGE: string;
							public static STABLE: string;
							public static ROTATE_FIX: string;
							public static MARGIN_TOP: string;
							public static BORDER_WIDTH: string;
							public static BORDER_BOTTOM_WIDTH: string;
							public static ITEM_COLOR: string;
							public static QUALITY: string;
							public static NAV_BAR_VISIBILITY: string;
							public static MAX: string;
							public static SHOW_INDICATORS: string;
							public static SCROLLABLE: string;
							public static LAYOUT: string;
							public static FONT_FACE: string;
							public static STRATEGY: string;
							public static INCLUDE_FONT_PADDING: string;
							public static RTL: string;
							public static WIDTH: string;
							public static PADDING: string;
							public static LINE_HEIGHT: string;
							public static MARGIN: string;
							public static AUTO: string;
							public static BORDER_TOP_WIDTH: string;
							public static DISABLED: string;
							public static PADDING_LEFT: string;
							public static VISIBILITY: string;
							public static DEFAULT_HEIGHT: string;
							public static PREFIX: string;
							public static ARIA_LABEL: string;
							public static CURSOR_SPACING: string;
							public static SCROLL_DIRECTION: string;
							public static PAGE_ENABLED: string;
							public static MIN_WIDTH: string;
							public static MIN_HEIGHT: string;
							public static OFFSET_ACCURACY: string;
							public static PERSPECTIVE: string;
							public static KEEP_INDEX: string;
							public static OPACITY: string;
							public static BOX_SHADOW: string;
							public static PREVENT_MOVE_EVENT: string;
							public static BOUNCE: string;
							public static FONT_WEIGHT: string;
							public static MAXLENGTH: string;
							public static COLUMN_COUNT: string;
							public static BACKGROUND_COLOR: string;
							public static PLACEHOLDER: string;
							public static MAX_LENGTH: string;
							public static SELECTION_END: string;
							public static TEXT_DECORATION: string;
							public static KEEP_SELECTION_INDEX: string;
							public static COLOR: string;
							public static ITEM_SIZE: string;
							public static IMAGE_SHARPEN: string;
							public static MAX_HEIGHT: string;
							public static SHOW_LOADING: string;
							public static BORDER_LEFT_COLOR: string;
							public static INDEX: string;
							public static FLEX_DIRECTION: string;
							public static TRANSFORM: string;
							public static DRAGGABLE: string;
							public static ALIGN_ITEMS: string;
							public static SCOPE: string;
							public static NEST_SCROLLING_ENABLED: string;
							public static OVERFLOW_HIDDEN_WIDTH: string;
							public static MODE: string;
							public static KEEP_SCROLL_POSITION: string;
							public static PULLING_DISTANCE: string;
							public static VALUE: string;
							public static SPAN_OFFSETS: string;
							public static VIF_FALSE: string;
							public static PRIORITY: string;
							public static CHECKED: string;
							public static FONT_STYLE: string;
							public static LINES: string;
							public static BORDER_TOP_STYLE: string;
							public static VIEW_HEIGHT: string;
							public static FLEX_WRAP: string;
							public static ANIMATING: string;
							public static COLUMN_WIDTH: string;
							public static ROWS: string;
							public static BORDER_BOTTOM_COLOR: string;
							public static BORDER_TOP_LEFT_RADIUS: string;
							public static FONT_SIZE: string;
							public static FILTER: string;
							public static PLAY_STATUS: string;
							public static ANIMATED: string;
							public static ALIGN_SELF: string;
							public static KEEP_POSITION_LAYOUT_DELAY: string;
							public static BORDER_STYLE: string;
							public static TEXT_OVERFLOW: string;
							public static DIRECTION: string;
							public static ZORDERTOP: string;
							public static ELEVATION: string;
							public static HEIGHT: string;
							public static ALLOW_COPY_PASTE: string;
							public static ITEM_SELECTED_COLOR: string;
							public static DISPLAY: string;
							public static BORDER_BOTTOM_STYLE: string;
							public static FLEX: string;
							public static BORDER_RIGHT_WIDTH: string;
							public static ISDRAGGING: string;
							public static FONT_FAMILY: string;
							public static LOADMOREOFFSET: string;
							public static SHOULD_STOP_PROPAGATION_INTERVAL: string;
							public static SRC: string;
							public static OFFSET_X_ACCURACY: string;
							public static OVERFLOW_HIDDEN_HEIGHT: string;
							public static SHOW_SCROLLBAR: string;
							public static LAYERLIMIT: string;
							public static AUTO_RECYCLE: string;
							public static BORDER_BOTTOM_RIGHT_RADIUS: string;
							public static SHARPEN: string;
							public static RESIZE_MODE: string;
							public static TRANSFORM_ORIGIN: string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module common {
					export abstract class UniDestroyableModule extends io.dcloud.feature.uniapp.UniSDKEngine.DestroyableUniModule {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.common.UniDestroyableModule>;
						public constructor();
						public destroy(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module common {
					export class UniException {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.common.UniException>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module common {
					export class UniModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.common.UniModule>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module common {
					export class UniModuleAnno {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.common.UniModuleAnno>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.common.UniModuleAnno interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							moduleMethod(): boolean;
							runOnUIThread(): boolean;
						});
						public constructor();
						public runOnUIThread(): boolean;
						/** @deprecated */
						public moduleMethod(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module dom {
					export abstract class AbsAttr extends java.lang.Object {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.AbsAttr>;
						public parseStatements(): void;
						public remove(param0: any): any;
						public getBindingAttrs(): androidx.collection.ArrayMap<string,any>;
						public getImageSharpen(): com.taobao.weex.common.WXImageSharpen;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public setStatement(param0: com.taobao.weex.dom.binding.WXStatement): void;
						public values(): java.util.Collection<any>;
						public getImageSrc(): string;
						public putAll(param0: java.util.Map<any,any>): void;
						public getIsRecycleImage(): boolean;
						public constructor(param0: java.util.Map<string,any>);
						public isEmpty(): boolean;
						public static getSuffix(param0: java.util.Map<string,any>): string;
						public getColumnGap(): number;
						public mergeAttr(): void;
						public size(): number;
						public getAttr(): java.util.Map<string,any>;
						public getElevation(param0: number): number;
						public canRecycled(): boolean;
						public getOrientation(): number;
						public setBindingAttrs(param0: androidx.collection.ArrayMap<string,any>): void;
						public constructor();
						public getLayoutType(): number;
						public get(param0: any): any;
						public constructor(param0: java.util.Map<string,any>, param1: number);
						public optString(param0: string): string;
						public getScope(): string;
						public keySet(): java.util.Set<string>;
						public containsValue(param0: any): boolean;
						public containsKey(param0: any): boolean;
						public getColumnCount(): number;
						public clone(): io.dcloud.feature.uniapp.dom.AbsAttr;
						public toString(): string;
						public static getValue(param0: java.util.Map<string,any>): string;
						public autoPlay(): boolean;
						public static getPrefix(param0: java.util.Map<string,any>): string;
						public getStatement(): com.taobao.weex.dom.binding.WXStatement;
						public showIndicators(): boolean;
						public getLoadMoreRetry(): string;
						public entrySet(): java.util.Set<java.util.Map.Entry<string,any>>;
						public getLoadMoreOffset(): string;
						public getScrollDirection(): string;
						public clear(): void;
						public put(param0: string, param1: any): any;
						public getColumnWidth(): number;
						public getImageQuality(): com.taobao.weex.dom.WXImageQuality;
						public skipFilterPutAll(param0: java.util.Map<string,any>): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module dom {
					export abstract class AbsCSSShorthand<T>  extends java.lang.Cloneable {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>>;
						public constructor(param0: androidNative.Array<number>);
						public constructor();
						public replace(param0: androidNative.Array<number>): void;
						public set(param0: java.lang.Enum<any>, param1: number): void;
						public get(param0: java.lang.Enum<any>): number;
						public set(param0: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER, param1: number): void;
						public clone(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
						public get(param0: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER): number;
						public toString(): string;
					}
					export module AbsCSSShorthand {
						export class CORNER extends io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CSSProperty {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER>;
							public static BORDER_TOP_LEFT: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER;
							public static BORDER_TOP_RIGHT: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER;
							public static BORDER_BOTTOM_RIGHT: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER;
							public static BORDER_BOTTOM_LEFT: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER;
							public static ALL: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER;
							public static valueOf(param0: string): io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER;
							public static values(): androidNative.Array<io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CORNER>;
						}
						export class CSSProperty {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CSSProperty>;
							/**
							 * Constructs a new instance of the io.dcloud.feature.uniapp.dom.AbsCSSShorthand$CSSProperty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
						export class EDGE extends io.dcloud.feature.uniapp.dom.AbsCSSShorthand.CSSProperty {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.AbsCSSShorthand.EDGE>;
							public static TOP: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.EDGE;
							public static BOTTOM: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.EDGE;
							public static LEFT: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.EDGE;
							public static RIGHT: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.EDGE;
							public static ALL: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.EDGE;
							public static valueOf(param0: string): io.dcloud.feature.uniapp.dom.AbsCSSShorthand.EDGE;
							public static values(): androidNative.Array<io.dcloud.feature.uniapp.dom.AbsCSSShorthand.EDGE>;
						}
						export class TYPE {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.AbsCSSShorthand.TYPE>;
							public static MARGIN: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.TYPE;
							public static PADDING: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.TYPE;
							public static BORDER: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.TYPE;
							public static valueOf(param0: string): io.dcloud.feature.uniapp.dom.AbsCSSShorthand.TYPE;
							public static values(): androidNative.Array<io.dcloud.feature.uniapp.dom.AbsCSSShorthand.TYPE>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module dom {
					export abstract class AbsEvent extends java.util.ArrayList<string> {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.AbsEvent>;
						public static EVENT_KEY_TYPE: string;
						public static EVENT_KEY_ARGS: string;
						public parseStatements(): void;
						public constructor();
						public setEventBindingArgsValues(param0: androidx.collection.ArrayMap<string,java.util.List<any>>): void;
						public getEventBindingArgs(): androidx.collection.ArrayMap;
						public static getEventName(param0: any): string;
						public getEventBindingArgsValues(): androidx.collection.ArrayMap<string,java.util.List<any>>;
						public putEventBindingArgsValue(param0: string, param1: java.util.List<any>): void;
						public clone(): io.dcloud.feature.uniapp.dom.AbsEvent;
						public clear(): void;
						public remove(param0: string): boolean;
						public setEventBindingArgs(param0: androidx.collection.ArrayMap): void;
						public addEvent(param0: any): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module dom {
					export abstract class AbsStyle extends java.lang.Object {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.AbsStyle>;
						public static UNSET: number;
						public mStyles: java.util.Map<string,any>;
						public mPesudoStyleMap: java.util.Map<string,java.util.Map<string,any>>;
						public mPesudoResetStyleMap: java.util.Map<string,any>;
						public mBindingStyle: androidx.collection.ArrayMap<string,any>;
						public static getLines(param0: java.util.Map<string,any>): number;
						public static getFontStyle(param0: java.util.Map<string,any>): number;
						public getPesudoResetStyles(): java.util.Map<string,any>;
						public equals(param0: any): boolean;
						public getTimeFontSize(param0: number): number;
						public getBlur(): string;
						public getBottom(): number;
						public putAll(param0: java.util.Map<any,any>): void;
						public static getFontFamily(param0: java.util.Map<string,any>): string;
						public static getTextDecoration(param0: java.util.Map<string,any>): com.taobao.weex.ui.component.WXTextDecoration;
						public static getTextAlignment(param0: java.util.Map<string,any>, param1: boolean): globalAndroid.text.Layout.Alignment;
						public getPesudoStyles(): java.util.Map<string,java.util.Map<string,any>>;
						public updateStyle(param0: java.util.Map<any,any>, param1: boolean): void;
						public size(): number;
						public constructor();
						public keySet(): java.util.Set<string>;
						public getBorderStyle(): string;
						public containsKey(param0: any): boolean;
						public toString(): string;
						public isFixed(): boolean;
						public getTop(): number;
						public getLeft(): number;
						public static getFontSize(param0: java.util.Map<string,any>, param1: number, param2: number): number;
						public clear(): void;
						public getBorderColor(): string;
						public parseStatements(): void;
						public static getTextColor(param0: java.util.Map<string,any>): string;
						public remove(param0: any): any;
						public getBackgroundColor(): string;
						public static getTextOverflow(param0: java.util.Map<string,any>): globalAndroid.text.TextUtils.TruncateAt;
						public hashCode(): number;
						public getRight(): number;
						public values(): java.util.Collection<any>;
						public constructor(param0: java.util.Map<string,any>, param1: boolean);
						public isSticky(): boolean;
						public clone(): io.dcloud.feature.uniapp.dom.AbsStyle;
						public constructor(param0: java.util.Map<string,any>);
						public isEmpty(): boolean;
						public static getLineHeight(param0: java.util.Map<string,any>, param1: number): number;
						public get(param0: any): any;
						public static getFontWeight(param0: java.util.Map<string,any>): number;
						public getOpacity(): number;
						public containsValue(param0: any): boolean;
						public static getTextAlignment(param0: java.util.Map<string,any>): globalAndroid.text.Layout.Alignment;
						public getBorderRadius(): number;
						public putAll(param0: java.util.Map<any,any>, param1: boolean): void;
						public entrySet(): java.util.Set<java.util.Map.Entry<string,any>>;
						public getOverflow(): string;
						public put(param0: string, param1: any): any;
						public getBindingStyle(): androidx.collection.ArrayMap<string,any>;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module dom {
					export class UniCSSConstants extends com.taobao.weex.dom.CSSConstants {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.UniCSSConstants>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module dom {
					export class UniStyle extends com.taobao.weex.dom.WXStyle {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.dom.UniStyle>;
						public constructor();
						public constructor(param0: java.util.Map<string,any>);
						public constructor(param0: java.util.Map<string,any>, param1: boolean);
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module layout {
					export abstract class UniContentBoxMeasurement extends com.taobao.weex.layout.ContentBoxMeasurement {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.layout.UniContentBoxMeasurement>;
						public constructor();
						public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>);
						public destroy(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export class AbsAnimationHolder {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.AbsAnimationHolder>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.ui.AbsAnimationHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							execute(param0: io.dcloud.feature.uniapp.AbsSDKInstance, param1: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
						});
						public constructor();
						public execute(param0: io.dcloud.feature.uniapp.AbsSDKInstance, param1: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export class AbsIComponentHolder implements com.taobao.weex.ui.ComponentCreator, com.taobao.weex.bridge.JavascriptInvokable {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.AbsIComponentHolder>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.ui.AbsIComponentHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							loadIfNonLazy(): void;
							getPropertyInvoker(param0: string): com.taobao.weex.bridge.Invoker;
							createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
							getMethods(): androidNative.Array<string>;
							getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
						});
						public constructor();
						public loadIfNonLazy(): void;
						public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						public getPropertyInvoker(param0: string): com.taobao.weex.bridge.Invoker;
						public getMethods(): androidNative.Array<string>;
						public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export class IExternalUniComponentGetter extends com.taobao.weex.ui.IExternalComponentGetter {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.IExternalUniComponentGetter>;
						public getExternalComponentClass(param0: string, param1: com.taobao.weex.WXSDKInstance): java.lang.Class<any>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export class IExternalUniModuleGetter extends com.taobao.weex.ui.IExternalModuleGetter {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.IExternalUniModuleGetter>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.ui.IExternalUniModuleGetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getExternalModuleClass(param0: string, param1: globalAndroid.content.Context): java.lang.Class<any>;
						});
						public constructor();
						public getExternalModuleClass(param0: string, param1: globalAndroid.content.Context): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export class IFUniComponentHolder extends com.taobao.weex.ui.IFComponentHolder {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.IFUniComponentHolder>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.ui.IFUniComponentHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							loadIfNonLazy(): void;
							getPropertyInvoker(param0: string): com.taobao.weex.bridge.Invoker;
							createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
							getMethods(): androidNative.Array<string>;
							getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
						});
						public constructor();
						public loadIfNonLazy(): void;
						public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						public getPropertyInvoker(param0: string): com.taobao.weex.bridge.Invoker;
						public getMethods(): androidNative.Array<string>;
						public getMethodInvoker(param0: string): com.taobao.weex.bridge.Invoker;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module action {
						export abstract class AbsComponentData<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>>;
							public mRef: string;
							public mComponentType: string;
							public mParentRef: string;
							public mStyles: io.dcloud.feature.uniapp.dom.AbsStyle;
							public mAttributes: io.dcloud.feature.uniapp.dom.AbsAttr;
							public mEvents: io.dcloud.feature.uniapp.dom.AbsEvent;
							public renderObjectPr: number;
							public getRenderObjectPr(): number;
							public isRenderPtrEmpty(): boolean;
							public setRenderObjectPr(param0: number): void;
							public addShorthand(param0: java.util.Map<string,string>): void;
							public getStyles(): io.dcloud.feature.uniapp.dom.AbsStyle;
							public getMargin(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
							public setPaddings(param0: com.taobao.weex.dom.CSSShorthand<any>): void;
							public addStyle(param0: java.util.Map<string,any>, param1: boolean): void;
							public setBorders(param0: com.taobao.weex.dom.CSSShorthand<any>): void;
							public addAttr(param0: java.util.Map<string,any>): void;
							public addShorthand(param0: androidNative.Array<number>, param1: io.dcloud.feature.uniapp.dom.AbsCSSShorthand.TYPE): void;
							public getEvents(): io.dcloud.feature.uniapp.dom.AbsEvent;
							public setMargins(param0: com.taobao.weex.dom.CSSShorthand<any>): void;
							public getPadding(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
							public constructor(param0: string, param1: string, param2: string);
							public clone(): io.dcloud.feature.uniapp.ui.action.AbsComponentData<T>;
							public addStyle(param0: java.util.Map<string,any>): void;
							public getBorder(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
							public addEvent(param0: java.util.Set<string>): void;
							public getAttrs(): io.dcloud.feature.uniapp.dom.AbsAttr;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module action {
						export class UniMethodData {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.action.UniMethodData>;
							public getMethod(): string;
							public getArgs(): com.alibaba.fastjson.JSONArray;
							public constructor(param0: string, param1: com.alibaba.fastjson.JSONArray);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module animation {
						export class UniAnimationBean extends com.taobao.weex.ui.animation.WXAnimationBean {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.animation.UniAnimationBean>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module component {
						export abstract class AbsBasicComponent<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>>;
							public updateStyle(param0: java.util.Map<string,any>, param1: boolean): void;
							public getCSSLayoutTop(): number;
							public bindComponent(param0: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
							public getRef(): string;
							public getCSSLayoutLeft(): number;
							public getComponentType(): string;
							public setLayoutSize(param0: com.taobao.weex.ui.action.GraphicSize): void;
							public setPaddings(param0: com.taobao.weex.dom.CSSShorthand<any>): void;
							public setBorders(param0: com.taobao.weex.dom.CSSShorthand<any>): void;
							public getLayoutSize(): com.taobao.weex.ui.action.GraphicSize;
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public getLayoutPosition(): com.taobao.weex.ui.action.GraphicPosition;
							public isLayoutRTL(): boolean;
							public addShorthand(param0: java.util.Map<string,string>): void;
							public getStyles(): io.dcloud.feature.uniapp.dom.AbsStyle;
							public getBasicComponentData(): io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>;
							public getLayoutHeight(): number;
							public getExtra(): any;
							public getViewPortWidthForFloat(): number;
							public getCSSLayoutRight(): number;
							public getMargin(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
							public getCSSLayoutBottom(): number;
							public getViewPortWidth(): number;
							public getLayoutWidth(): number;
							public setIsLayoutRTL(param0: boolean): void;
							public setViewPortWidth(param0: number): void;
							public addStyle(param0: java.util.Map<string,any>, param1: boolean): void;
							public getEvents(): io.dcloud.feature.uniapp.dom.AbsEvent;
							public setMargins(param0: com.taobao.weex.dom.CSSShorthand<any>): void;
							public addAttr(param0: java.util.Map<string,any>): void;
							public setLayoutPosition(param0: com.taobao.weex.ui.action.GraphicPosition): void;
							public getPadding(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
							public getBorder(): io.dcloud.feature.uniapp.dom.AbsCSSShorthand<any>;
							public addStyle(param0: java.util.Map<string,any>): void;
							public getAttrs(): io.dcloud.feature.uniapp.dom.AbsAttr;
							public addEvent(param0: java.util.Set<string>): void;
							public updateExtra(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module component {
						export abstract class AbsVContainer<T>  extends com.taobao.weex.ui.component.WXComponent<any> {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.component.AbsVContainer<any>>;
							public mChildren: java.util.ArrayList<com.taobao.weex.ui.component.WXComponent<any>>;
							public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public recycled(): void;
							public detachViewAndClearPreInfo(): globalAndroid.view.View;
							public indexOf(param0: com.taobao.weex.ui.component.WXComponent<any>): number;
							public destroy(): void;
							public getBoxShadowHost(param0: boolean): globalAndroid.view.View;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public updateActivePseudo(param0: boolean): void;
							public removeBoxShadowHost(): void;
							public recoverImageList(param0: string): void;
							public rearrangeIndexAndGetChild(param0: number): globalAndroid.util.Pair<com.taobao.weex.ui.component.WXComponent<any>,java.lang.Integer>;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onActivityPause(): void;
							public getFirstScroller(): com.taobao.weex.ui.component.Scrollable;
							public getChildLayoutParams(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: globalAndroid.view.View, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): globalAndroid.view.ViewGroup.LayoutParams;
							public onActivityCreate(): void;
							public onActivityBack(): boolean;
							public createChildViewAt(param0: number): void;
							public bindComponentData(param0: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
							public addSubView(param0: globalAndroid.view.View, param1: number): void;
							public requestDisallowInterceptTouchEvent(param0: boolean): void;
							public applyLayoutAndEvent(param0: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
							/** @deprecated */
							public getView(): globalAndroid.view.ViewGroup;
							public notifyAppearStateChange(param0: string, param1: string): void;
							public releaseImageList(param0: string): void;
							public getChild(param0: number): com.taobao.weex.ui.component.WXComponent<any>;
							public onActivityStop(): void;
							public getRealView(): globalAndroid.view.View;
							public getChildCount(): number;
							public ignoreFocus(): void;
							public getRealView(): globalAndroid.view.ViewGroup;
							public appendTreeCreateFinish(): void;
							public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
							public getChildrenLayoutTopOffset(): number;
							public interceptFocus(): void;
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public onActivityStart(): void;
							public onActivityDestroy(): void;
							public createViewImpl(): void;
							public onActivityResume(): void;
							public refreshData(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
							public remove(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
							public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
							public childCount(): number;
							public onRenderFinish(param0: number): void;
							/** @deprecated */
							public getView(): globalAndroid.view.View;
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module component {
						export class UniAnimationHolder extends io.dcloud.feature.uniapp.ui.AbsAnimationHolder {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.component.UniAnimationHolder>;
							public constructor(param0: io.dcloud.feature.uniapp.ui.animation.UniAnimationBean, param1: string);
							public execute(param0: io.dcloud.feature.uniapp.AbsSDKInstance, param1: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module component {
						export class UniComponent<T>  extends com.taobao.weex.ui.component.WXComponent<any> {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.component.UniComponent<any>>;
							public mUniSDKInstance: io.dcloud.feature.uniapp.UniSDKInstance;
							public bindHolder(param0: io.dcloud.feature.uniapp.ui.AbsIComponentHolder): void;
							public updateStyles(param0: io.dcloud.feature.uniapp.ui.component.UniComponent<any>): void;
							public constructor(param0: io.dcloud.feature.uniapp.UniSDKInstance, param1: io.dcloud.feature.uniapp.ui.component.AbsVContainer<any>, param2: number, param3: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public addFocusChangeListener(param0: io.dcloud.feature.uniapp.ui.component.UniComponent.OnFocusChangeListener): void;
							public onActivityStop(): void;
							public getUniInstance(): io.dcloud.feature.uniapp.UniSDKInstance;
							public updateStyles(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public destroy(): void;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public updateActivePseudo(param0: boolean): void;
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public postAnimation(param0: io.dcloud.feature.uniapp.ui.AbsAnimationHolder): void;
							public onActivityStart(): void;
							public onActivityDestroy(): void;
							public onActivityPause(): void;
							public updateStyles(param0: java.util.Map<string,any>): void;
							public bindData(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
							public onActivityResume(): void;
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public onActivityCreate(): void;
							public onActivityBack(): boolean;
							public postAnimation(param0: io.dcloud.feature.uniapp.ui.component.UniAnimationHolder): void;
							public addClickListener(param0: com.taobao.weex.ui.component.WXComponent.OnClickListener): void;
							public addClickListener(param0: io.dcloud.feature.uniapp.ui.component.UniComponent.OnClickListener): void;
							public bindHolder(param0: com.taobao.weex.ui.IFComponentHolder): void;
							public findUniComponent(param0: string): io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>;
							public addFocusChangeListener(param0: com.taobao.weex.ui.component.WXComponent.OnFocusChangeListener): void;
							public constructor(param0: io.dcloud.feature.uniapp.UniSDKInstance, param1: io.dcloud.feature.uniapp.ui.component.AbsVContainer<any>, param2: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						}
						export module UniComponent {
							export class OnClickListener extends com.taobao.weex.ui.component.WXComponent.OnClickListener {
								public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.component.UniComponent.OnClickListener>;
								/**
								 * Constructs a new instance of the io.dcloud.feature.uniapp.ui.component.UniComponent$OnClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onHostViewClick(): void;
								});
								public constructor();
								public onHostViewClick(): void;
							}
							export class OnFocusChangeListener extends com.taobao.weex.ui.component.WXComponent.OnFocusChangeListener {
								public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.component.UniComponent.OnFocusChangeListener>;
								/**
								 * Constructs a new instance of the io.dcloud.feature.uniapp.ui.component.UniComponent$OnFocusChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFocusChange(param0: boolean): void;
								});
								public constructor();
								public onFocusChange(param0: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module component {
						export class UniComponentProp {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.component.UniComponentProp>;
							/**
							 * Constructs a new instance of the io.dcloud.feature.uniapp.ui.component.UniComponentProp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								name(): string;
							});
							public constructor();
							public name(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module component {
						export class UniVContainer<T>  extends com.taobao.weex.ui.component.WXVContainer<any> {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.component.UniVContainer<any>>;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: io.dcloud.feature.uniapp.UniSDKInstance, param1: io.dcloud.feature.uniapp.ui.component.AbsVContainer<any>, param2: string, param3: boolean, param4: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public onActivityStart(): void;
							public onActivityDestroy(): void;
							public onActivityPause(): void;
							public onActivityStop(): void;
							public onActivityResume(): void;
							public onActivityCreate(): void;
							public onActivityBack(): boolean;
							public getInstance(): io.dcloud.feature.uniapp.UniSDKInstance;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: io.dcloud.feature.uniapp.UniSDKInstance, param1: io.dcloud.feature.uniapp.ui.component.AbsVContainer<any>, param2: boolean, param3: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public updateActivePseudo(param0: boolean): void;
							public constructor(param0: io.dcloud.feature.uniapp.UniSDKInstance, param1: io.dcloud.feature.uniapp.ui.component.AbsVContainer<any>, param2: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
							public getInstance(): com.taobao.weex.WXSDKInstance;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module shadow {
						export class UniBoxShadowData {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowData>;
							public getNormalShadows(): java.util.List<io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions>;
							public setNormalMaxHeight(param0: number): void;
							public setContentHeight(param0: number): void;
							public setNormalMaxWidth(param0: number): void;
							public constructor(param0: java.util.List<io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions>, param1: java.util.List<io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions>, param2: androidNative.Array<number>, param3: number);
							public getCanvasHeight(): number;
							public getQuality(): number;
							public getNormalMaxWidth(): number;
							public getNormalTop(): number;
							public getContentWidth(): number;
							public getRadii(): androidNative.Array<number>;
							public getNormalLeft(): number;
							public getStyle(): string;
							public getNormalMaxHeight(): number;
							public setStyle(param0: string): void;
							public setNormalTop(param0: number): void;
							public setNormalLeft(param0: number): void;
							public equalsUniBoxShadowData(param0: string, param1: number, param2: number, param3: androidNative.Array<number>): boolean;
							public getContentHeight(): number;
							public setContentWidth(param0: number): void;
							public getCanvasWidth(): number;
							public getInsetShadows(): java.util.List<io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module shadow {
						export class UniBoxShadowOptions {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions>;
							public optionParamParsers: java.util.List<io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions.IParser>;
							public hShadow: number;
							public vShadow: number;
							public blur: number;
							public spread: number;
							public radii: androidNative.Array<number>;
							public color: number;
							public isInset: boolean;
							public viewWidth: number;
							public viewHeight: number;
							public topLeft: globalAndroid.graphics.PointF;
							public scale(param0: number): io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions;
							public getTargetCanvasRect(): globalAndroid.graphics.Rect;
							public toString(): string;
							public constructor(param0: number);
						}
						export module UniBoxShadowOptions {
							export class IParser {
								public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions.IParser>;
								/**
								 * Constructs a new instance of the io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions$IParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									parse(param0: string): void;
								});
								public constructor();
								public parse(param0: string): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module shadow {
						export class UniInsetBoxShadowDrawable {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.shadow.UniInsetBoxShadowDrawable>;
							public setAlpha(param0: number): void;
							public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: androidNative.Array<number>);
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public getOpacity(): number;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module shadow {
						export class UniInsetBoxShadowLayer {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.shadow.UniInsetBoxShadowLayer>;
							public constructor(param0: androidNative.Array<globalAndroid.graphics.drawable.Drawable>);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module ui {
					export module shadow {
						export class UniNormalBoxShadowDrawable {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.ui.shadow.UniNormalBoxShadowDrawable>;
							public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.Bitmap);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module utils {
					export class AbsLogLevel {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.utils.AbsLogLevel>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.uniapp.utils.AbsLogLevel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getName(): string;
							getValue(): number;
							getPriority(): number;
							compare(param0: io.dcloud.feature.uniapp.utils.AbsLogLevel): number;
						});
						public constructor();
						public compare(param0: io.dcloud.feature.uniapp.utils.AbsLogLevel): number;
						public getPriority(): number;
						public getName(): string;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module utils {
					export class UniBoxShadowUtil {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.utils.UniBoxShadowUtil>;
						public constructor();
						public static isBoxShadowEnabled(): boolean;
						public static setBoxShadowEnabled(param0: boolean): void;
						public static getInsetBoxShadowDrawable(param0: io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowData): io.dcloud.feature.uniapp.ui.shadow.UniInsetBoxShadowLayer;
						public static parseBoxShadows(param0: string, param1: number): androidNative.Array<io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowOptions>;
						public static parseBoxShadow(param0: number, param1: number, param2: string, param3: androidNative.Array<number>, param4: number, param5: number): io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowData;
						public static getNormalBoxShadowDrawable(param0: io.dcloud.feature.uniapp.ui.shadow.UniBoxShadowData, param1: globalAndroid.content.res.Resources): io.dcloud.feature.uniapp.ui.shadow.UniNormalBoxShadowDrawable;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module utils {
					export class UniLogLevel extends io.dcloud.feature.uniapp.utils.AbsLogLevel {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.utils.UniLogLevel>;
						public static OFF: io.dcloud.feature.uniapp.utils.UniLogLevel;
						public static WTF: io.dcloud.feature.uniapp.utils.UniLogLevel;
						public static TLOG: io.dcloud.feature.uniapp.utils.UniLogLevel;
						public static ERROR: io.dcloud.feature.uniapp.utils.UniLogLevel;
						public static WARN: io.dcloud.feature.uniapp.utils.UniLogLevel;
						public static INFO: io.dcloud.feature.uniapp.utils.UniLogLevel;
						public static DEBUG: io.dcloud.feature.uniapp.utils.UniLogLevel;
						public static VERBOSE: io.dcloud.feature.uniapp.utils.UniLogLevel;
						public static ALL: io.dcloud.feature.uniapp.utils.UniLogLevel;
						public compare(param0: io.dcloud.feature.uniapp.utils.AbsLogLevel): number;
						public getPriority(): number;
						public static valueOf(param0: string): io.dcloud.feature.uniapp.utils.UniLogLevel;
						public getName(): string;
						public static values(): androidNative.Array<io.dcloud.feature.uniapp.utils.UniLogLevel>;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module utils {
					export class UniLogUtils extends com.taobao.weex.utils.WXLogUtils {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.utils.UniLogUtils>;
						public static UNI_TAG: string;
						public static UNI_PERF_TAG: string;
						public static v(param0: string, param1: string): void;
						public static w(param0: string, param1: string): void;
						public constructor();
						public static d(param0: string, param1: androidNative.Array<number>): void;
						public static i(param0: string, param1: androidNative.Array<number>): void;
						public static i(param0: string, param1: java.lang.Throwable): void;
						public static v(param0: string, param1: java.lang.Throwable): void;
						public static e(param0: string, param1: androidNative.Array<number>): void;
						public static e(param0: string, param1: string): void;
						public static w(param0: string, param1: java.lang.Throwable): void;
						public static i(param0: string, param1: string): void;
						public static d(param0: string, param1: string): void;
						public static d(param0: string): void;
						public static d(param0: string, param1: java.lang.Throwable): void;
						public static w(param0: string): void;
						public static w(param0: string, param1: androidNative.Array<number>): void;
						public static v(param0: string): void;
						public static info(param0: string): void;
						public static e(param0: string): void;
						public static i(param0: string): void;
						public static e(param0: string, param1: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module utils {
					export class UniResourceUtils extends com.taobao.weex.utils.WXResourceUtils {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.utils.UniResourceUtils>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module utils {
					export class UniUtils extends com.taobao.weex.utils.WXUtils {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.utils.UniUtils>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module utils {
					export class UniViewUtils extends com.taobao.weex.utils.WXViewUtils {
						public static class: java.lang.Class<io.dcloud.feature.uniapp.utils.UniViewUtils>;
						public constructor();
						public static getUniHeight(param0: string): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module uniapp {
				export module utils {
					export module bitmap {
						export class BitmapLoadCallback<T>  extends java.lang.Object {
							public static class: java.lang.Class<io.dcloud.feature.uniapp.utils.bitmap.BitmapLoadCallback<any>>;
							/**
							 * Constructs a new instance of the io.dcloud.feature.uniapp.utils.bitmap.BitmapLoadCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: string, param1: T): void;
								onFailure(param0: string, param1: java.lang.Throwable): void;
							});
							public constructor();
							public onSuccess(param0: string, param1: T): void;
							public onFailure(param0: string, param1: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export class EnumStateCode {
					public static class: java.lang.Class<io.dcloud.feature.weex.EnumStateCode>;
					public static SUCCESS_NO_BODY: io.dcloud.feature.weex.EnumStateCode;
					public static FAIL_BY_INVALID_PARAMETER: io.dcloud.feature.weex.EnumStateCode;
					public static FAIL_BY_NO_PERMISSION: io.dcloud.feature.weex.EnumStateCode;
					public static FAIL_BY_NO_MESSAGE_LISTENER_RECEIVED: io.dcloud.feature.weex.EnumStateCode;
					public static FAIL_BY_NO_INIT: io.dcloud.feature.weex.EnumStateCode;
					public static FAIL_BY_RELEASE_WGT_ERROR: io.dcloud.feature.weex.EnumStateCode;
					public static FAIL_BY_UNKNOWN_ERROR: io.dcloud.feature.weex.EnumStateCode;
					public static FAIL_BY_NO_RESOURCE_EXIST: io.dcloud.feature.weex.EnumStateCode;
					public static FAIL_BY_NO_WGT_EXIST: io.dcloud.feature.weex.EnumStateCode;
					public static FAIL_BY_MP_IS_NOT_RUNNING: io.dcloud.feature.weex.EnumStateCode;
					public getResult(): string;
					public getDesc(): string;
					public static obtainMap(param0: io.dcloud.feature.weex.EnumStateCode): java.util.Map<string,any>;
					public static values(): androidNative.Array<io.dcloud.feature.weex.EnumStateCode>;
					public static valueOf(param0: string): io.dcloud.feature.weex.EnumStateCode;
					public getCode(): number;
					public static obtainMap(param0: io.dcloud.feature.weex.EnumStateCode, param1: string, param2: any): java.util.Map<string,any>;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export class WXAnalyzerDelegate {
					public static class: java.lang.Class<io.dcloud.feature.weex.WXAnalyzerDelegate>;
					public constructor(param0: globalAndroid.content.Context);
					public onStart(): void;
					public onException(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string): void;
					public onCreate(): void;
					public onWeexViewCreated(param0: com.taobao.weex.WXSDKInstance, param1: globalAndroid.view.View): globalAndroid.view.View;
					public onPause(): void;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public onStop(): void;
					public onDestroy(): void;
					public onWeexRenderSuccess(param0: com.taobao.weex.WXSDKInstance): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export class WXBaseWrapper extends io.dcloud.feature.weex.adapter.widget.refresh.WeexDcRefreshLayout {
					public static class: java.lang.Class<io.dcloud.feature.weex.WXBaseWrapper>;
					public mWxId: string;
					public mWXSDKInstance: com.taobao.weex.WXSDKInstance;
					public mWebview: io.dcloud.common.DHInterface.IWebview;
					public mPath: string;
					public mSrcPath: string;
					public static DE_INDEX: number;
					public mWXAnaly: io.dcloud.feature.weex.WXAnalyzerDelegate;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public onRefresh(): void;
					public loadTemplate(param0: org.json.JSONObject): void;
					public evalJs(param0: string, param1: number): string;
					public endPullToRefresh(): void;
					public onDestroy(): void;
					public reload(): void;
					public recoveryInstance(): void;
					public beginPullRefresh(): void;
					public obtainMainView(): globalAndroid.view.ViewGroup;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public destroy(): void;
					public fireGlobalEvent(param0: string, param1: java.util.Map<string,any>): boolean;
					public onActivityPause(): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onReady(): void;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public onActivityResume(): void;
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public initRefresh(param0: org.json.JSONObject): void;
					public getType(): string;
					public titleNViewRefresh(): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export class WXServiceWrapper extends io.dcloud.feature.weex.WXBaseWrapper implements com.taobao.weex.IWXRenderListener {
					public static class: java.lang.Class<io.dcloud.feature.weex.WXServiceWrapper>;
					public getOptions(): java.util.Map<string,any>;
					public evalJs(param0: string, param1: number): string;
					public onRenderSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
					public onDestroy(): void;
					public reload(): void;
					public constructor(param0: io.dcloud.common.DHInterface.IApp, param1: globalAndroid.view.ViewGroup, param2: string, param3: org.json.JSONObject);
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onException(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string): void;
					public onRefreshSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
					public findWebViewToLoadUrL(param0: string, param1: string): void;
					public onViewCreated(param0: com.taobao.weex.WXSDKInstance, param1: globalAndroid.view.View): void;
					public getType(): string;
					public obtanApp(): io.dcloud.common.DHInterface.IApp;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export class WXViewWrapper extends io.dcloud.feature.weex.WXBaseWrapper implements com.taobao.weex.IWXRenderListener, io.dcloud.feature.weex.WeexInstanceMgr.IWXStatisticsCallBack {
					public static class: java.lang.Class<io.dcloud.feature.weex.WXViewWrapper>;
					public initSrcPath(param0: string): string;
					public getSrcPath(): string;
					public onDestroy(): void;
					public onException(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: string): void;
					public onRefreshSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
					public runDelayedRenderCaches(param0: java.util.List<globalAndroid.os.Message>): void;
					public onReady(): void;
					public getWaitServiceRenderList(): java.util.List<globalAndroid.os.Message>;
					public getType(): string;
					public onCallBack(param0: string, param1: any): any;
					public onRefresh(): void;
					public loadTemplate(param0: org.json.JSONObject): void;
					public evalJs(param0: string, param1: number): string;
					public onRenderSuccess(param0: com.taobao.weex.WXSDKInstance, param1: number, param2: number): void;
					public addScrollListener(param0: com.taobao.weex.WXSDKInstance.OnInstanceVisibleListener): void;
					public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
					public setFocusableInTouchMode(param0: boolean): void;
					public reload(): void;
					public recoveryInstance(): void;
					public onJsFrameworkReady(): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public fireGlobalEvent(param0: string, param1: java.util.Map<string,any>): boolean;
					public getWxId(): string;
					public setFocusable(param0: number): void;
					public onViewCreated(param0: com.taobao.weex.WXSDKInstance, param1: globalAndroid.view.View): void;
					public titleNViewRefresh(): void;
				}
				export module WXViewWrapper {
					export class FireEvent {
						public static class: java.lang.Class<io.dcloud.feature.weex.WXViewWrapper.FireEvent>;
						public constructor(param0: string, param1: java.util.Map<string,any>);
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export class WeexFeature {
					public static class: java.lang.Class<io.dcloud.feature.weex.WeexFeature>;
					public init(param0: io.dcloud.common.DHInterface.AbsMgr, param1: string): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public doForFeature(param0: string, param1: any): any;
					public dispose(param0: string): void;
					public constructor();
					public onStart(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle, param2: androidNative.Array<string>): void;
					public onPause(): void;
					public onDestroy(): void;
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public callNativeModule(param0: string, param1: com.alibaba.fastjson.JSONObject): string;
					public registerAllEvent(param0: io.dcloud.common.DHInterface.IApp): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export class WeexInstanceMgr extends com.taobao.weex.IWXStatisticsListener {
					public static class: java.lang.Class<io.dcloud.feature.weex.WeexInstanceMgr>;
					public initAppForPath(param0: globalAndroid.content.Context, param1: string): void;
					public weexDebugReload(): void;
					public isJSFKFileNotFound(): boolean;
					public findWXBaseWrapper(param0: com.taobao.weex.WXSDKInstance): io.dcloud.feature.weex.WXBaseWrapper;
					public setWXStatisticsCallBack(param0: io.dcloud.feature.weex.WeexInstanceMgr.IWXStatisticsCallBack): void;
					public setUniNViewModules(param0: string): void;
					public loadWeexToAppid(param0: globalAndroid.content.Context, param1: string, param2: boolean): void;
					public unWXStatisticsCallBack(param0: io.dcloud.feature.weex.WeexInstanceMgr.IWXStatisticsCallBack): void;
					public findWebview(param0: io.dcloud.common.DHInterface.IWebview, param1: io.dcloud.common.DHInterface.IApp, param2: string, param3: string): io.dcloud.common.DHInterface.IWebview;
					public isWeexInitEnd(): boolean;
					public constructor();
					public createWeexView(param0: io.dcloud.common.DHInterface.IWebview, param1: globalAndroid.view.ViewGroup, param2: org.json.JSONObject, param3: string, param4: number): io.dcloud.feature.weex.WXViewWrapper;
					public setApplication(param0: globalAndroid.app.Application): void;
					public initWeexEnv(param0: globalAndroid.app.Application): void;
					public registerUniappService(param0: globalAndroid.content.Context, param1: string): void;
					public initStatisticsListener(): void;
					public onException(param0: string, param1: string, param2: string): void;
					public onJsFrameworkReady(): void;
					public findWXServiceWrapper(param0: com.taobao.weex.WXSDKInstance): io.dcloud.feature.weex.WXServiceWrapper;
					public getControl(): string;
					public doForFeature(param0: io.dcloud.common.DHInterface.IMgr.MgrType, param1: number, param2: androidNative.Array<any>): any;
					public onHttpFinish(): void;
					public initUniappPlugin(param0: globalAndroid.app.Application): void;
					public addComponentByName(param0: string, param1: java.lang.Class<any>): void;
					public getUniNViewModules(): string;
					public setUniNViewModuleReladyCallBack(param0: io.dcloud.common.DHInterface.ICallBack): void;
					public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public onHeadersReceived(): void;
					public createWeexService(param0: io.dcloud.common.DHInterface.IApp, param1: globalAndroid.view.ViewGroup, param2: string, param3: org.json.JSONObject): io.dcloud.feature.weex.WXServiceWrapper;
					public findWebviewByInstanceId(param0: string): io.dcloud.common.DHInterface.IWebview;
					public onSubProcess(param0: globalAndroid.app.Application): void;
					public onFirstView(): void;
					public setWeexInitEnd(param0: boolean): void;
					public isUniAppAssetsRes(): boolean;
					public onFirstScreen(): void;
					public getPreUniMPCallBack(param0: string): io.dcloud.common.DHInterface.ICallBack;
					public getVueVersion(): number;
					public setJsFrameworkReady(param0: boolean): void;
					public setJSFKFileNotFound(param0: boolean): void;
					public getPreUniAppid(): string;
					public isJsFrameworkReady(): boolean;
					public getComplier(): string;
					public onJsFrameworkStart(): void;
					public findWebview(param0: com.taobao.weex.WXSDKInstance): io.dcloud.common.DHInterface.IWebview;
					public setUniServiceCreated(param0: boolean, param1: io.dcloud.common.DHInterface.IApp): void;
					public reloadWXServiceWrapper(): void;
					public removeWeexView(param0: string): void;
					public restartWeex(param0: globalAndroid.app.Application, param1: io.dcloud.common.DHInterface.ICallBack, param2: string): void;
					public initWeexEnv(param0: io.dcloud.common.DHInterface.INativeAppInfo): void;
					public getUniMPFeature(): string;
					public getPreInstanceId(): string;
					public onHttpStart(): void;
					public findWXSDKInstance(param0: string): com.taobao.weex.WXSDKInstance;
					public static self(): io.dcloud.feature.weex.WeexInstanceMgr;
					public preUniMP(param0: globalAndroid.app.Application, param1: string, param2: io.dcloud.common.DHInterface.ICallBack): void;
					public findPathByWrapper(param0: string): io.dcloud.feature.weex.WXViewWrapper;
					public onSDKEngineInitialize(): void;
					public isUniServiceCreated(param0: io.dcloud.common.DHInterface.IApp): boolean;
				}
				export module WeexInstanceMgr {
					export class EachListener<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.dcloud.feature.weex.WeexInstanceMgr.EachListener<any>>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.weex.WeexInstanceMgr$EachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEach(param0: T): void;
						});
						public constructor();
						public onEach(param0: T): void;
					}
					export class IWXStatisticsCallBack {
						public static class: java.lang.Class<io.dcloud.feature.weex.WeexInstanceMgr.IWXStatisticsCallBack>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.weex.WeexInstanceMgr$IWXStatisticsCallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onJsFrameworkReady(): void;
						});
						public constructor();
						public onJsFrameworkReady(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class DCDefaultConfigAdapter extends com.taobao.weex.adapter.IWXConfigAdapter {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.DCDefaultConfigAdapter>;
						public constructor();
						public getConfigWhenInit(param0: string, param1: string, param2: string): string;
						public getConfig(param0: string, param1: string, param2: string): string;
						public checkMode(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class DCWXHttpAdapter extends com.taobao.weex.adapter.IWXHttpAdapter {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.DCWXHttpAdapter>;
						public sendRequest(param0: com.taobao.weex.common.WXRequest, param1: com.taobao.weex.adapter.IWXHttpAdapter.OnHttpListener): void;
						public constructor();
						public getHostnameVerifier(param0: boolean): org.apache.http.conn.ssl.X509HostnameVerifier;
						public getOKRequest(param0: dc.squareup.okhttp3.OkHttpClient.Builder, param1: com.taobao.weex.common.WXRequest, param2: com.taobao.weex.adapter.IWXHttpAdapter.OnHttpListener): dc.squareup.okhttp3.Request;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class DefaultWebSocketAdapter extends com.taobao.weex.appfram.websocket.IWebSocketAdapter {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.DefaultWebSocketAdapter>;
						public send(param0: com.alibaba.fastjson.JSONObject): void;
						public constructor();
						public connect(param0: string, param1: string, param2: com.taobao.weex.appfram.websocket.IWebSocketAdapter.EventListener): void;
						public connect(param0: string, param1: string, param2: string, param3: com.taobao.weex.appfram.websocket.IWebSocketAdapter.EventListener): void;
						public destroy(): void;
						public close(param0: number, param1: string): void;
						public send(param0: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class DefaultWebSocketAdapterFactory extends com.taobao.weex.appfram.websocket.IWebSocketAdapterFactory {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.DefaultWebSocketAdapterFactory>;
						public constructor();
						public createWebSocketAdapter(): com.taobao.weex.appfram.websocket.IWebSocketAdapter;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module Fresco {
						export class DCGenericDraweeHierarchy {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchy>;
							public setFailure(param0: java.lang.Throwable): void;
							public setFadeDuration(param0: number): void;
							public getRoundingParams(): com.facebook.drawee.generic.RoundingParams;
							public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable): void;
							public setPlaceholderImageFocusPoint(param0: globalAndroid.graphics.PointF): void;
							public setFailureImage(param0: number): void;
							public reset(): void;
							public setRetry(param0: java.lang.Throwable): void;
							public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable): void;
							public setProgressBarImage(param0: number): void;
							public setProgressBarImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
							public setActualImageColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
							public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
							public setPlaceholderImage(param0: number): void;
							public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable): void;
							public setOverlayImage(param0: globalAndroid.graphics.drawable.Drawable): void;
							public setActualImageFocusPoint(param0: globalAndroid.graphics.PointF): void;
							public getTopLevelDrawable(): io.dcloud.feature.weex.adapter.Fresco.DCRootDrawable;
							public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
							public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
							public setOverlayImage(param0: number, param1: globalAndroid.graphics.drawable.Drawable): void;
							public setRetryImage(param0: number): void;
							public hasPlaceholderImage(): boolean;
							public setBackgroundImage(param0: globalAndroid.graphics.drawable.Drawable): void;
							public getActualImageBounds(param0: globalAndroid.graphics.RectF): void;
							public hasImage(): boolean;
							public setFailureImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
							public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
							public setActualImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
							public setRoundingParams(param0: com.facebook.drawee.generic.RoundingParams): void;
							public getActualImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
							public setProgress(param0: number, param1: boolean): void;
							public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable): void;
							public setRetryImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
							public getBounds(): globalAndroid.graphics.Rect;
							public setImage(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean): void;
							public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
							public setPlaceholderImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
							public getFadeDuration(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module Fresco {
						export class DCGenericDraweeHierarchyBuilder {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder>;
							public static DEFAULT_FADE_DURATION: number;
							public static DEFAULT_SCALE_TYPE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
							public static DEFAULT_ACTUAL_IMAGE_SCALE_TYPE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
							public setActualImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getActualImageFocusPoint(): globalAndroid.graphics.PointF;
							public setRetryImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getRetryImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
							public getRoundingParams(): com.facebook.drawee.generic.RoundingParams;
							public getFailureImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
							public getActualImageColorFilter(): globalAndroid.graphics.ColorFilter;
							public getFailureImage(): globalAndroid.graphics.drawable.Drawable;
							public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setActualImageFocusPoint(param0: globalAndroid.graphics.PointF): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setOverlays(param0: java.util.List<globalAndroid.graphics.drawable.Drawable>): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setActualImageColorFilter(param0: globalAndroid.graphics.ColorFilter): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setPressedStateOverlay(param0: globalAndroid.graphics.drawable.Drawable): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setFailureImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getDesiredAspectRatio(): number;
							public getProgressBarImage(): globalAndroid.graphics.drawable.Drawable;
							public setPlaceholderImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getPlaceholderImage(): globalAndroid.graphics.drawable.Drawable;
							public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getPlaceholderImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
							public setOverlay(param0: globalAndroid.graphics.drawable.Drawable): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setDesiredAspectRatio(param0: number): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getRetryImage(): globalAndroid.graphics.drawable.Drawable;
							public getFadeDuration(): number;
							public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getResources(): globalAndroid.content.res.Resources;
							public setPlaceholderImage(param0: number): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setFailureImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setRoundingParams(param0: com.facebook.drawee.generic.RoundingParams): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public build(): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchy;
							public getBackground(): globalAndroid.graphics.drawable.Drawable;
							public setFailureImage(param0: number): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setProgressBarImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setProgressBarImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public constructor(param0: globalAndroid.content.res.Resources);
							public reset(): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getPressedStateOverlay(): globalAndroid.graphics.drawable.Drawable;
							public static newInstance(param0: globalAndroid.content.res.Resources): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setBackground(param0: globalAndroid.graphics.drawable.Drawable): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setPlaceholderImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getProgressBarImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
							public setRetryImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setRetryImage(param0: number): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setProgressBarImage(param0: number): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getActualImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
							public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public setFadeDuration(param0: number): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public getOverlays(): java.util.List<globalAndroid.graphics.drawable.Drawable>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module Fresco {
						export class DCGenericDraweeHierarchyInflater {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyInflater>;
							public constructor();
							public static inflateHierarchy(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchy;
							public static inflateBuilder(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
							public static updateBuilder(param0: io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchyBuilder;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module Fresco {
						export class DCGenericDraweeView extends com.facebook.drawee.view.DraweeView<io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchy> {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeView>;
							public setImageURI(param0: globalAndroid.net.Uri, param1: any): void;
							public constructor(param0: globalAndroid.content.Context, param1: io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchy);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
							public setImageResource(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setImageRequest(param0: com.facebook.imagepipeline.request.ImageRequest): void;
							public setImageURI(param0: string, param1: any): void;
							public static initialize(param0: com.facebook.common.internal.Supplier<any>): void;
							public static shutDown(): void;
							public setActualImageResource(param0: number): void;
							public setImageURI(param0: globalAndroid.net.Uri): void;
							public getControllerBuilder(): com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setImageURI(param0: string): void;
							public setActualImageResource(param0: number, param1: any): void;
							public constructor(param0: globalAndroid.content.Context);
							public inflateHierarchy(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module Fresco {
						export class DCRootDrawable {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.Fresco.DCRootDrawable>;
							public setRefresh(param0: boolean): void;
							public setVisibilityCallback(param0: com.facebook.drawee.drawable.VisibilityCallback): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.graphics.drawable.Drawable);
							public setVisible(param0: boolean, param1: boolean): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module Fresco {
						export class DCWrappingUtils {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.Fresco.DCWrappingUtils>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class FrescoDrawableLoader extends com.taobao.weex.adapter.IDrawableLoader {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.FrescoDrawableLoader>;
						public setDrawable(param0: string, param1: com.taobao.weex.adapter.IDrawableLoader.DrawableTarget, param2: com.taobao.weex.adapter.DrawableStrategy): void;
						public constructor(param0: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class FrescoImageAdapter extends com.taobao.weex.adapter.IWXImgLoaderAdapter {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.FrescoImageAdapter>;
						public constructor();
						public setImage(param0: string, param1: globalAndroid.widget.ImageView, param2: com.taobao.weex.dom.WXImageQuality, param3: com.taobao.weex.common.WXImageStrategy): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class FrescoImageComponent extends com.taobao.weex.ui.component.WXImage {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.FrescoImageComponent>;
						public onImageFinish(param0: boolean, param1: java.util.Map<any,any>): void;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setResizeMode(param0: string): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public setFadeAnim(param0: string): void;
						public setProperty(param0: string, param1: any): boolean;
						public updateProperties(param0: java.util.Map<string,any>): void;
						public initComponentHostView(param0: globalAndroid.content.Context): globalAndroid.widget.ImageView;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
					}
					export module FrescoImageComponent {
						export class CustomScaleType {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.FrescoImageComponent.CustomScaleType>;
							public constructor(param0: io.dcloud.feature.weex.adapter.FrescoImageComponent, param1: number, param2: number);
							public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class FrescoImageComponentU extends io.dcloud.feature.weex.adapter.FrescoImageComponent {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.FrescoImageComponentU>;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class FrescoImageView extends io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeView implements com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.FrescoImageView>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public constructor(param0: globalAndroid.content.Context, param1: io.dcloud.feature.weex.adapter.Fresco.DCGenericDraweeHierarchy);
						public setFadeShow(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class FrescoLoadUtil extends io.dcloud.feature.uniapp.adapter.UniImageLoadAdapter {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.FrescoLoadUtil>;
						public static getInstance(): io.dcloud.feature.uniapp.adapter.UniImageLoadAdapter;
						public constructor();
						public loadImageBitmap(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number, param4: io.dcloud.feature.uniapp.utils.bitmap.BitmapLoadCallback<globalAndroid.graphics.Bitmap>): void;
						public loadImageBitmap(param0: globalAndroid.content.Context, param1: string, param2: io.dcloud.feature.uniapp.utils.bitmap.BitmapLoadCallback<globalAndroid.graphics.Bitmap>): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class GlideImageAdapter {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.GlideImageAdapter>;
						public constructor();
						public static setImage(param0: string, param1: globalAndroid.widget.ImageView, param2: com.taobao.weex.dom.WXImageQuality, param3: com.taobao.weex.common.WXImageStrategy): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class JSExceptionAdapter extends com.taobao.weex.adapter.IWXJSExceptionAdapter {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.JSExceptionAdapter>;
						public constructor();
						public onJSException(param0: com.taobao.weex.common.WXJSExceptionInfo): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class PlusUriAdapter extends com.taobao.weex.adapter.URIAdapter {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.PlusUriAdapter>;
						public constructor();
						public rewrite(param0: string, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
						public rewrite(param0: com.taobao.weex.WXSDKInstance, param1: string, param2: globalAndroid.net.Uri): globalAndroid.net.Uri;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class ScalableView extends com.taobao.weex.ui.view.WXFrameLayout {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.ScalableView>;
						public holdComponent(param0: com.taobao.weex.ui.component.WXDiv): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public holdComponent(param0: any): void;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public getComponent(): any;
						public getComponent(): com.taobao.weex.ui.component.WXDiv;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export class ScalableViewComponent extends com.taobao.weex.ui.component.WXDiv {
						public static class: java.lang.Class<io.dcloud.feature.weex.adapter.ScalableViewComponent>;
						public setScalable(param0: boolean): void;
						public setHostLayoutParams(param0: any, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public promoteToView(param0: boolean): boolean;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public getOrCreateFlatWidget(): com.taobao.weex.ui.flat.widget.WidgetGroup;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXFrameLayout;
						public isScalable(): boolean;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public setHostLayoutParams(param0: com.taobao.weex.ui.view.WXFrameLayout, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public onActivityStart(): void;
						public getOrCreateFlatWidget(): any;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
					export module ScalableViewComponent {
						export class Ceator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.ScalableViewComponent.Ceator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module webview {
						export class DCWXWebView extends io.dcloud.feature.weex.adapter.webview.IDCWebView {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.webview.DCWXWebView>;
							public mProgress: number;
							public setShowLoading(param0: boolean): void;
							public postMessage(param0: any): void;
							public loadDataWithBaseURL(param0: string): void;
							public reload(): void;
							public goForward(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public loadUrl(param0: string): void;
							public setOnErrorListener(param0: com.taobao.weex.ui.view.IWebView.OnErrorListener): void;
							public setOnDCMessageListener(param0: io.dcloud.feature.weex.adapter.webview.WXDCWeb.OnDCMessageListener): void;
							public getWebView(): globalAndroid.view.View;
							public setUserAgent(param0: string, param1: boolean): void;
							public goBack(): void;
							public setOnMessageListener(param0: com.taobao.weex.ui.view.IWebView.OnMessageListener): void;
							public getWebView(): globalAndroid.webkit.WebView;
							public destroy(): void;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: io.dcloud.feature.weex.adapter.webview.WXDCWeb);
							public getView(): globalAndroid.view.View;
							public setOnPageListener(param0: com.taobao.weex.ui.view.IWebView.OnPageListener): void;
						}
						export module DCWXWebView {
							export class DCWXChromeClient {
								public static class: java.lang.Class<io.dcloud.feature.weex.adapter.webview.DCWXWebView.DCWXChromeClient>;
								public onResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
								public onShowCustomView(param0: globalAndroid.view.View, param1: globalAndroid.webkit.WebChromeClient.CustomViewCallback): void;
								public onShowFileChooser(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.ValueCallback<androidNative.Array<globalAndroid.net.Uri>>, param2: globalAndroid.webkit.WebChromeClient.FileChooserParams): boolean;
								public onHideCustomView(): void;
								public onGeolocationPermissionsShowPrompt(param0: string, param1: globalAndroid.webkit.GeolocationPermissions.Callback): void;
								public onJsPrompt(param0: globalAndroid.webkit.WebView, param1: string, param2: string, param3: string, param4: globalAndroid.webkit.JsPromptResult): boolean;
								public onReceivedTitle(param0: globalAndroid.webkit.WebView, param1: string): void;
								public onProgressChanged(param0: globalAndroid.webkit.WebView, param1: number): void;
							}
							export class MessageHandler {
								public static class: java.lang.Class<io.dcloud.feature.weex.adapter.webview.DCWXWebView.MessageHandler>;
								public handleMessage(param0: globalAndroid.os.Message): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module webview {
						export class IDCWebView extends com.taobao.weex.ui.view.IWebView {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.webview.IDCWebView>;
							/**
							 * Constructs a new instance of the io.dcloud.feature.weex.adapter.webview.IDCWebView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getWebView(): globalAndroid.view.View;
								setUserAgent(param0: string, param1: boolean): void;
								getView(): globalAndroid.view.View;
								destroy(): void;
								loadUrl(param0: string): void;
								loadDataWithBaseURL(param0: string): void;
								reload(): void;
								goBack(): void;
								goForward(): void;
								postMessage(param0: any): void;
								setShowLoading(param0: boolean): void;
								setOnErrorListener(param0: com.taobao.weex.ui.view.IWebView.OnErrorListener): void;
								setOnPageListener(param0: com.taobao.weex.ui.view.IWebView.OnPageListener): void;
								setOnMessageListener(param0: com.taobao.weex.ui.view.IWebView.OnMessageListener): void;
								onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							});
							public constructor();
							public setShowLoading(param0: boolean): void;
							public postMessage(param0: any): void;
							public loadDataWithBaseURL(param0: string): void;
							public reload(): void;
							public goForward(): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public loadUrl(param0: string): void;
							public setOnErrorListener(param0: com.taobao.weex.ui.view.IWebView.OnErrorListener): void;
							public getWebView(): globalAndroid.view.View;
							public setUserAgent(param0: string, param1: boolean): void;
							public goBack(): void;
							public setOnMessageListener(param0: com.taobao.weex.ui.view.IWebView.OnMessageListener): void;
							public destroy(): void;
							public getView(): globalAndroid.view.View;
							public setOnPageListener(param0: com.taobao.weex.ui.view.IWebView.OnPageListener): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module webview {
						export class WXDCWeb extends com.taobao.weex.ui.component.WXWeb {
							public static class: java.lang.Class<io.dcloud.feature.weex.adapter.webview.WXDCWeb>;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
							public setBackgroundColor(param0: string): void;
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onActivityStart(): void;
							public onActivityDestroy(): void;
							public onActivityPause(): void;
							public loadUrl(param0: string): void;
							public onActivityStop(): void;
							public getWebStyles(): com.alibaba.fastjson.JSONObject;
							public onActivityResume(): void;
							public evalJs(param0: string): void;
							public evalJS(param0: string): void;
							public onActivityCreate(): void;
							public onActivityBack(): boolean;
							public webviewStyles(param0: string): void;
							public destroy(): void;
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
							public initComponentHostView(param0: globalAndroid.content.Context): globalAndroid.view.View;
							public updateActivePseudo(param0: boolean): void;
							/** @deprecated */
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
							public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
							public createWebView(): void;
						}
						export module WXDCWeb {
							export class OnDCMessageListener {
								public static class: java.lang.Class<io.dcloud.feature.weex.adapter.webview.WXDCWeb.OnDCMessageListener>;
								/**
								 * Constructs a new instance of the io.dcloud.feature.weex.adapter.webview.WXDCWeb$OnDCMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onMessage(param0: java.util.Map<string,any>, param1: number): void;
								});
								public constructor();
								public onMessage(param0: java.util.Map<string,any>, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module webview {
						export module video {
							export class FullscreenHolder {
								public static class: java.lang.Class<io.dcloud.feature.weex.adapter.webview.video.FullscreenHolder>;
								public constructor(param0: globalAndroid.content.Context);
								public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module widget {
						export module refresh {
							export class CircleLayout {
								public static class: java.lang.Class<io.dcloud.feature.weex.adapter.widget.refresh.CircleLayout>;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module widget {
						export module refresh {
							export class DCWeexBaseRefreshLayout {
								public static class: java.lang.Class<io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout>;
								public static LARGE: number;
								public static DEFAULT: number;
								public mTotalDragDistance: number;
								public mFrom: number;
								public mOriginalOffsetTop: number;
								public mSpinnerFinalOffset: number;
								public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
								public clearTarget(): void;
								public setOnRefreshListener(param0: io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout.OnRefreshListener): void;
								public setNestedScrollingEnabled(param0: boolean): void;
								public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): boolean;
								public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
								/** @deprecated */
								public setProgressBackgroundColor(param0: number): void;
								public setProgressBackgroundColorSchemeColor(param0: number): void;
								public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
								public requestDisallowInterceptTouchEvent(param0: boolean): void;
								public setColorSchemeResources(param0: androidNative.Array<number>): void;
								public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
								public setColorSchemeColors(param0: androidNative.Array<number>): void;
								public setProgressViewOffset(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
								public stopNestedScroll(): void;
								public getProgressCircleDiameter(): number;
								public startNestedScroll(param0: number): boolean;
								public setSize(param0: number): void;
								public getChildDrawingOrder(param0: number, param1: number): number;
								public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
								public setProgressViewEndTarget(param0: boolean, param1: number): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public setRefreshing(param0: boolean): void;
								/** @deprecated */
								public setColorScheme(param0: androidNative.Array<number>): void;
								public onStopNestedScroll(param0: globalAndroid.view.View): void;
								public beginRefresh(): void;
								public hasNestedScrollingParent(): boolean;
								public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
								public dispatchNestedPreScroll(param0: number, param1: number, param2: androidNative.Array<number>, param3: androidNative.Array<number>): boolean;
								public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
								public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
								public setDistanceToTriggerSync(param0: number): void;
								public isNestedScrollingEnabled(): boolean;
								public onDetachedFromWindow(): void;
								public isRefreshing(): boolean;
								public dispatchNestedPreFling(param0: number, param1: number): boolean;
								public canChildScrollUp(): boolean;
								public setOnChildScrollUpCallback(param0: io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout.OnChildScrollUpCallback): void;
								public getNestedScrollAxes(): number;
								public setProgressBackgroundColorSchemeResource(param0: number): void;
								public constructor(param0: globalAndroid.content.Context);
								public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
								public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
								public setEnabled(param0: boolean): void;
								public onMeasure(param0: number, param1: number): void;
							}
							export module DCWeexBaseRefreshLayout {
								export class OnChildScrollUpCallback {
									public static class: java.lang.Class<io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout.OnChildScrollUpCallback>;
									/**
									 * Constructs a new instance of the io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout$OnChildScrollUpCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										canChildScrollUp(param0: io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout, param1: globalAndroid.view.View): boolean;
									});
									public constructor();
									public canChildScrollUp(param0: io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout, param1: globalAndroid.view.View): boolean;
								}
								export class OnRefreshListener {
									public static class: java.lang.Class<io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout.OnRefreshListener>;
									/**
									 * Constructs a new instance of the io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout$OnRefreshListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onRefresh(): void;
									});
									public constructor();
									public onRefresh(): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module widget {
						export module refresh {
							export class DCWeexCircleImageView {
								public static class: java.lang.Class<io.dcloud.feature.weex.adapter.widget.refresh.DCWeexCircleImageView>;
								public setBackgroundColorRes(param0: number): void;
								public onAnimationEnd(): void;
								public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
								public setBackgroundColor(param0: number): void;
								public onMeasure(param0: number, param1: number): void;
								public onAnimationStart(): void;
								public setAnimationListener(param0: globalAndroid.view.animation.Animation.AnimationListener): void;
							}
							export module DCWeexCircleImageView {
								export class OvalShadow {
									public static class: java.lang.Class<io.dcloud.feature.weex.adapter.widget.refresh.DCWeexCircleImageView.OvalShadow>;
									public constructor(param0: io.dcloud.feature.weex.adapter.widget.refresh.DCWeexCircleImageView, param1: number, param2: number);
									public draw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module adapter {
					export module widget {
						export module refresh {
							export class WeexDcRefreshLayout extends io.dcloud.feature.weex.adapter.widget.refresh.DCWeexBaseRefreshLayout {
								public static class: java.lang.Class<io.dcloud.feature.weex.adapter.widget.refresh.WeexDcRefreshLayout>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module config {
					export class AndroidTlsConfig {
						public static class: java.lang.Class<io.dcloud.feature.weex.config.AndroidTlsConfig>;
						public setKeystore(param0: string): void;
						public constructor();
						public setStorePass(param0: string): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getCa(): androidNative.Array<string>;
						public setCa(param0: androidNative.Array<string>): void;
						public getStorePass(): string;
						public getKeystore(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module config {
					export class MimeInfoParser {
						public static class: java.lang.Class<io.dcloud.feature.weex.config.MimeInfoParser>;
						public obtainMimeInfo(param0: string): io.dcloud.feature.weex.config.MimeInfoParser.MimeInfo;
						public static getInstance(): io.dcloud.feature.weex.config.MimeInfoParser;
						public static getFilePathStream(param0: com.taobao.weex.WXSDKInstance, param1: string): java.io.InputStream;
					}
					export module MimeInfoParser {
						export class MimeInfo {
							public static class: java.lang.Class<io.dcloud.feature.weex.config.MimeInfoParser.MimeInfo>;
							public constructor();
							public setFileType(param0: string): void;
							public setFileFormat(param0: string): void;
							public getFileType(): string;
							public getFileFormat(): string;
							public getDataBytes(param0: com.taobao.weex.WXSDKInstance): java.io.InputStream;
							public getEncodeFormat(): string;
							public getDataContent(): string;
							public setDataContent(param0: string): void;
							public setEncodeFormat(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module config {
					export class UniPathParser {
						public static class: java.lang.Class<io.dcloud.feature.weex.config.UniPathParser>;
						public constructor();
						public static getAndroidPath(param0: string): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module config {
					export class UserCustomTrustManager {
						public static class: java.lang.Class<io.dcloud.feature.weex.config.UserCustomTrustManager>;
						public constructor();
						public static getSSLSocketFactory(param0: io.dcloud.feature.weex.config.AndroidTlsConfig, param1: com.taobao.weex.WXSDKInstance): javax.net.ssl.SSLSocketFactory;
						public static getSSLSocketFactory(param0: com.taobao.weex.http.CertDTO, param1: com.taobao.weex.WXSDKInstance): javax.net.ssl.SSLSocketFactory;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class DCCoverImageComponent extends com.taobao.weex.ui.component.WXImage {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCCoverImageComponent>;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setImage(param0: string, param1: com.taobao.weex.common.WXImageStrategy): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class DCCoverViewComponent extends com.taobao.weex.ui.component.WXVContainer<globalAndroid.view.ViewGroup> {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCCoverViewComponent>;
						public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: number): void;
						public getRealView(): globalAndroid.view.View;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public remove(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): globalAndroid.view.ViewGroup;
						public getRealView(): globalAndroid.view.ViewGroup;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public addChild(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public onActivityBack(): boolean;
						public getCalloutMarkerIds(): java.util.HashMap<string,string>;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class DCTabBarModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCTabBarModule>;
						public constructor();
						public setMask(param0: com.alibaba.fastjson.JSONObject): void;
						public setTabBarItem(param0: com.alibaba.fastjson.JSONObject): void;
						public isTabBarVisible(): boolean;
						public hideTabBar(param0: com.alibaba.fastjson.JSONObject): void;
						public append(param0: com.alibaba.fastjson.JSONObject, param1: com.taobao.weex.bridge.JSCallback): void;
						public hideTabBarRedDot(param0: com.alibaba.fastjson.JSONObject): void;
						public setTabBarItems(param0: com.alibaba.fastjson.JSONObject): void;
						public onClick(param0: com.taobao.weex.bridge.JSCallback): void;
						public isValid(): boolean;
						public showTabBarRedDot(param0: com.alibaba.fastjson.JSONObject): void;
						public setTabBarBadge(param0: com.alibaba.fastjson.JSONObject): void;
						public onDoubleClick(param0: com.taobao.weex.bridge.JSCallback): void;
						public showTabBar(param0: com.alibaba.fastjson.JSONObject): void;
						public setTabBarStyle(param0: com.alibaba.fastjson.JSONObject): void;
						public getTabBarHeight(): string;
						public onMidButtonClick(param0: com.taobao.weex.bridge.JSCallback): void;
						public removeTabBarBadge(param0: com.alibaba.fastjson.JSONObject): void;
						public switchSelect(param0: com.alibaba.fastjson.JSONObject): void;
						public onMaskClick(param0: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class DCUniMPModule extends io.dcloud.feature.uniapp.common.UniModule {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCUniMPModule>;
						public constructor();
						public showUniMP(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public sendUniMPEvent(param0: string, param1: string, param2: string, param3: com.taobao.weex.bridge.JSCallback): void;
						public getUniMPVersion(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public onUniMPEventReceive(param0: com.taobao.weex.bridge.JSCallback): void;
						public installUniMP(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public setDefaultMenuItems(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public hideUniMP(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public closeUniMP(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public openUniMP(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class DCWXCircleViewPager extends com.taobao.weex.ui.view.WXCircleViewPager {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCWXCircleViewPager>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public isVertical(): boolean;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getPointCounr(): number;
						public setVertical(param0: boolean): void;
						public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class DCWXSlider extends com.taobao.weex.ui.component.WXVContainer<globalAndroid.widget.FrameLayout> {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCWXSlider>;
						public static INDEX: string;
						public static SOURCE: string;
						public static INFINITE: string;
						public mIndicator: com.taobao.weex.ui.component.WXIndicator;
						public mAdapter: com.taobao.weex.ui.view.WXCirclePageAdapter;
						public mShowIndicators: boolean;
						public mPageChangeListener: androidx.viewpager.widget.ViewPager.OnPageChangeListener;
						public isDrag: boolean;
						public setShowIndicators(param0: string): void;
						public getRealView(): globalAndroid.view.View;
						public addIndicator(param0: com.taobao.weex.ui.component.WXIndicator): void;
						public destroy(): void;
						public setAutoPlay(param0: string): void;
						public setVertical(param0: boolean): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						/** @deprecated */
						public setValue(param0: string): void;
						public containsGesture(param0: com.taobao.weex.ui.view.gesture.WXGestureType): boolean;
						public onActivityCreate(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.BaseFrameLayout;
						public addSubView(param0: globalAndroid.view.View, param1: number): void;
						public getRealView(): globalAndroid.view.ViewGroup;
						public onActivityPause(): void;
						public onActivityStart(): void;
						public initComponentHostView(param0: globalAndroid.content.Context): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public addEvent(param0: string): void;
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public setOffsetXAccuracy(param0: number): void;
						public setInterval(param0: number): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public remove(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: boolean): void;
						public setIndex(param0: number): void;
						public setLayout(param0: com.taobao.weex.ui.component.WXComponent<any>): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setProperty(param0: string, param1: any): boolean;
						public addEvent(param0: java.util.Set<string>): void;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public getCurrentIndex(): number;
						public getChildLayoutParams(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: globalAndroid.view.View, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): globalAndroid.view.ViewGroup.LayoutParams;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public setScrollable(param0: boolean): void;
					}
					export module DCWXSlider {
						export class Creator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCWXSlider.Creator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
						export class FlingGestureListener {
							public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCWXSlider.FlingGestureListener>;
							public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
						}
						export class SliderOnScrollListener {
							public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCWXSlider.SliderOnScrollListener>;
							public constructor(param0: io.dcloud.feature.weex.extend.DCWXSlider);
							public onPageScrollStateChanged(param0: number): void;
							public onPageScrolled(param0: number, param1: number, param2: number): void;
							public onPageSelected(param0: number): void;
						}
						export class SliderPageChangeListener {
							public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCWXSlider.SliderPageChangeListener>;
							public constructor(param0: io.dcloud.feature.weex.extend.DCWXSlider);
							public onPageScrollStateChanged(param0: number): void;
							public onPageScrolled(param0: number, param1: number, param2: number): void;
							public onPageSelected(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class DCWXView extends com.taobao.weex.ui.component.WXDiv {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCWXView>;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
						public promoteToView(param0: boolean): boolean;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityCreate(): void;
						public getOrCreateFlatWidget(): com.taobao.weex.ui.flat.widget.WidgetGroup;
						public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
						public onActivityPause(): void;
						public onActivityStart(): void;
						public getOrCreateFlatWidget(): any;
						public onActivityBack(): boolean;
						/** @deprecated */
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
						public onActivityStop(): void;
						public updateActivePseudo(param0: boolean): void;
						public onActivityResume(): void;
						public onActivityDestroy(): void;
						public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					}
					export module DCWXView {
						export class Ceator extends com.taobao.weex.ui.ComponentCreator {
							public static class: java.lang.Class<io.dcloud.feature.weex.extend.DCWXView.Ceator>;
							public constructor();
							public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class PlusModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.PlusModule>;
						public getHostInfo(param0: com.taobao.weex.bridge.JSCallback): void;
						public getSystemInfo(param0: io.dcloud.feature.uniapp.bridge.UniJSCallback): void;
						public constructor();
						public setDefaultFontSize(param0: string): void;
						public preloadReady(param0: string): void;
						public getValue(param0: string): string;
						public uniReady(): void;
						public getAppState(): number;
						public pushDebugData(param0: any): com.alibaba.fastjson.JSONObject;
						public getRedirectInfo(): any;
						public exec(param0: string, param1: string): void;
						public execSync(param0: string, param1: string): string;
						public setLanguage(param0: string): void;
						public log(param0: string): void;
						public postMessage(param0: string, param1: string): void;
						public evalJSFiles(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public getSystemInfoSync(): com.alibaba.fastjson.JSONObject;
						public getConfigInfo(): any;
						public getLanguage(): string;
						public getDotData(): com.alibaba.fastjson.JSONObject;
						public sendNativeEvent(param0: string, param1: any, param2: com.taobao.weex.bridge.JSCallback): void;
					}
					export module PlusModule {
						export class JsData {
							public static class: java.lang.Class<io.dcloud.feature.weex.extend.PlusModule.JsData>;
							public data: string;
							public value: string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class PlusStorageModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.PlusStorageModule>;
						public getAllKeys(param0: com.taobao.weex.bridge.JSCallback): void;
						public constructor();
						public getItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public setItem(param0: string, param1: string, param2: com.taobao.weex.bridge.JSCallback): void;
						public removeItem(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
						public length(param0: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class RandomBytesModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.RandomBytesModule>;
						public constructor();
						public getRandomValues(param0: number): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex {
				export module extend {
					export class WXEventModule extends com.taobao.weex.common.WXModule {
						public static class: java.lang.Class<io.dcloud.feature.weex.extend.WXEventModule>;
						public constructor();
						public onRequestPermissionsResult(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
						public openURL(param0: string): void;
						public fireNativeGlobalEvent(param0: string, param1: com.taobao.weex.bridge.JSCallback): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_barcode {
				export class BarcodeComponent extends com.taobao.weex.ui.component.WXComponent<io.dcloud.feature.weex_barcode.BarcodeView> {
					public static class: java.lang.Class<io.dcloud.feature.weex_barcode.BarcodeComponent>;
					public onActivityStop(): void;
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public updateProperties(param0: java.util.Map<string,any>): void;
					public destroy(): void;
					public onActivityStart(): void;
					public setScanbarColor(param0: string): void;
					public setSutoStart(param0: boolean): void;
					public initComponentHostView(param0: globalAndroid.content.Context): any;
					public close(): void;
					public setBackground(param0: string): void;
					public updateActivePseudo(param0: boolean): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
					public setHostLayoutParams(param0: any, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
					public setAutoDecodeCharset(param0: boolean): void;
					public onActivityCreate(): void;
					public setFlash(param0: boolean): void;
					public cancel(): void;
					public initComponentHostView(param0: globalAndroid.content.Context): io.dcloud.feature.weex_barcode.BarcodeView;
					public onActivityBack(): boolean;
					public setFrameColor(param0: string): void;
					public onActivityDestroy(): void;
					/** @deprecated */
					public updateProperties(param0: java.util.Map<string,any>): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public onActivityPause(): void;
					public setHostLayoutParams(param0: io.dcloud.feature.weex_barcode.BarcodeView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): void;
					public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
					public setFilters(param0: com.alibaba.fastjson.JSONArray): void;
					public onActivityResume(): void;
					public start(param0: com.alibaba.fastjson.JSONObject): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_barcode {
				export class BarcodeModule extends com.taobao.weex.common.WXModule {
					public static class: java.lang.Class<io.dcloud.feature.weex_barcode.BarcodeModule>;
					public constructor();
					public scan(param0: string, param1: com.taobao.weex.bridge.JSCallback, param2: com.alibaba.fastjson.JSONArray, param3: boolean): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_barcode {
				export class BarcodePlugin {
					public static class: java.lang.Class<io.dcloud.feature.weex_barcode.BarcodePlugin>;
					public constructor();
					public static initPlugin(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_barcode {
				export class BarcodeView {
					public static class: java.lang.Class<io.dcloud.feature.weex_barcode.BarcodeView>;
					public errorMsg: string;
					public autoDecodeCharset: boolean;
					public cancelScan(): void;
					public setBackground(param0: number): void;
					public onDestory(): void;
					public start(): void;
					public closeScan(): void;
					public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
					public setFrameColor(param0: number): void;
					public drawViewfinder(): void;
					public autoFocus(): void;
					public updateStyles(param0: number, param1: number): void;
					public initDecodeFormats(param0: com.alibaba.fastjson.JSONArray): void;
					public setAutoDecodeCharset(param0: boolean): void;
					public handleDecode(param0: com.dcloud.zxing2.Result, param1: globalAndroid.graphics.Bitmap): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public setConserve(param0: boolean): void;
					public setFlash(param0: boolean): void;
					public setVibrate(param0: boolean): void;
					public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
					public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
					public setFilename(param0: string): void;
					public setScanBarColor(param0: number): void;
					public onResume(param0: boolean): void;
					public onPause(): void;
					public isRunning(): boolean;
					public getHandler(): globalAndroid.os.Handler;
					public constructor(param0: globalAndroid.content.Context, param1: com.taobao.weex.ui.component.WXComponent<any>, param2: com.taobao.weex.WXSDKInstance);
					public initBarcodeView(param0: number, param1: number): void;
					public setPlayBeep(param0: boolean): void;
					public getViewfinderView(): io.dcloud.feature.barcode2.view.ViewfinderView;
					public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_input {
				export class DCWXInputRegister {
					public static class: java.lang.Class<io.dcloud.feature.weex_input.DCWXInputRegister>;
					public constructor();
					public static initPlugin(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_scroller {
				export class DCScrollerPluginImpl {
					public static class: java.lang.Class<io.dcloud.feature.weex_scroller.DCScrollerPluginImpl>;
					public constructor();
					public static initPlugin(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_scroller {
				export module helper {
					export class DCScrollStartEndHelper {
						public static class: java.lang.Class<io.dcloud.feature.weex_scroller.helper.DCScrollStartEndHelper>;
						public constructor();
						public static isScrollEvent(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_scroller {
				export module view {
					export class DCBounceScrollerView extends com.taobao.weex.ui.view.refresh.wrapper.BaseBounceView<io.dcloud.feature.weex_scroller.view.DCWXScrollView> {
						public static class: java.lang.Class<io.dcloud.feature.weex_scroller.view.DCBounceScrollerView>;
						public onLoadmoreComplete(): void;
						public setInnerView(param0: globalAndroid.content.Context): io.dcloud.feature.weex_scroller.view.DCWXScrollView;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onRefreshingComplete(): void;
						public constructor(param0: globalAndroid.content.Context, param1: number);
						public setInnerView(param0: globalAndroid.content.Context): any;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: com.taobao.weex.ui.component.DCWXScroller);
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_scroller {
				export module view {
					export class DCWXHorizontalScrollView implements com.taobao.weex.ui.view.IWXScroller, com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<io.dcloud.feature.weex_scroller.view.DCWXHorizontalScrollView>;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public isScrollable(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getContentFrame(): globalAndroid.graphics.Rect;
						public stopScroll(): void;
						public destroy(): void;
						public setLowwerLength(param0: number): void;
						public addScrollViewListener(param0: io.dcloud.feature.weex_scroller.view.DCWXHorizontalScrollView.ScrollViewListener): void;
						public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public setUpperLength(param0: number): void;
						public removeScrollViewListener(param0: io.dcloud.feature.weex_scroller.view.DCWXHorizontalScrollView.ScrollViewListener): void;
						public setWAScroller(param0: com.taobao.weex.ui.component.DCWXScroller): void;
						public setScrollViewListener(param0: io.dcloud.feature.weex_scroller.view.DCWXHorizontalScrollView.ScrollViewListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public setScrollable(param0: boolean): void;
					}
					export module DCWXHorizontalScrollView {
						export class ScrollViewListener {
							public static class: java.lang.Class<io.dcloud.feature.weex_scroller.view.DCWXHorizontalScrollView.ScrollViewListener>;
							/**
							 * Constructs a new instance of the io.dcloud.feature.weex_scroller.view.DCWXHorizontalScrollView$ScrollViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onScrollChanged(param0: io.dcloud.feature.weex_scroller.view.DCWXHorizontalScrollView, param1: number, param2: number, param3: number, param4: number): void;
								onScrolltoTop(): void;
								onScrollToBottom(): void;
							});
							public constructor();
							public onScrolltoTop(): void;
							public onScrollChanged(param0: io.dcloud.feature.weex_scroller.view.DCWXHorizontalScrollView, param1: number, param2: number, param3: number, param4: number): void;
							public onScrollToBottom(): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_scroller {
				export module view {
					export class DCWXScrollView implements com.taobao.weex.ui.view.IWXScroller, com.taobao.weex.ui.view.gesture.WXGestureObservable {
						public static class: java.lang.Class<io.dcloud.feature.weex_scroller.view.DCWXScrollView>;
						public constructor(param0: globalAndroid.content.Context);
						public stopScroll(): void;
						public handleMessage(param0: globalAndroid.os.Message): boolean;
						public destroy(): void;
						public setLowwerLength(param0: number): void;
						public fling(param0: number): void;
						public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
						public setRate(param0: number): void;
						public onScrollToBottom(param0: number, param1: number): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public dispatchNestedPreFling(param0: number, param1: number): boolean;
						public startScrollerTask(): void;
						public setWAScroller(param0: com.taobao.weex.ui.component.DCWXScroller): void;
						public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: androidNative.Array<number>): boolean;
						public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
						public setNestedScrollingEnabled(param0: boolean): void;
						public removeScrollViewListener(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView.WXScrollViewListener): void;
						public hasNestedScrollingParent(): boolean;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public onScroll(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
						public stopNestedScroll(): void;
						public isScrollable(): boolean;
						public dispatchNestedPreScroll(param0: number, param1: number, param2: androidNative.Array<number>, param3: androidNative.Array<number>): boolean;
						public getGestureListener(): com.taobao.weex.ui.view.gesture.WXGesture;
						public getContentFrame(): globalAndroid.graphics.Rect;
						public isNestedScrollingEnabled(): boolean;
						public onScrollStopped(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
						public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
						public onScrollToTop(param0: number, param1: number): void;
						public addScrollViewListener(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView.WXScrollViewListener): void;
						public registerGestureListener(param0: com.taobao.weex.ui.view.gesture.WXGesture): void;
						public startNestedScroll(param0: number): boolean;
						public setUpperLength(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setScrollable(param0: boolean): void;
					}
					export module DCWXScrollView {
						export class WXScrollViewListener {
							public static class: java.lang.Class<io.dcloud.feature.weex_scroller.view.DCWXScrollView.WXScrollViewListener>;
							/**
							 * Constructs a new instance of the io.dcloud.feature.weex_scroller.view.DCWXScrollView$WXScrollViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onScrollChanged(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number, param3: number, param4: number): void;
								onScrollToBottom(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
								onScrollToTop(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
								onScrollStopped(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
								onScroll(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
							});
							public constructor();
							public onScrollToTop(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
							public onScroll(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
							public onScrollStopped(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
							public onScrollToBottom(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number): void;
							public onScrollChanged(param0: io.dcloud.feature.weex_scroller.view.DCWXScrollView, param1: number, param2: number, param3: number, param4: number): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_scroller {
				export module view {
					export class WXStickyHelper {
						public static class: java.lang.Class<io.dcloud.feature.weex_scroller.view.WXStickyHelper>;
						public constructor(param0: com.taobao.weex.ui.component.Scrollable);
						public bindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,java.util.Map<string,com.taobao.weex.ui.component.WXComponent<any>>>): void;
						public unbindStickStyle(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: java.util.Map<string,java.util.Map<string,com.taobao.weex.ui.component.WXComponent<any>>>): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_switch {
				export class DCWXSwitch extends com.taobao.weex.ui.component.WXComponent<io.dcloud.feature.weex_switch.SwitchButton> {
					public static class: java.lang.Class<io.dcloud.feature.weex_switch.DCWXSwitch>;
					public onActivityCreate(): void;
					public setDisabled(param0: boolean): void;
					public setColor(param0: string): void;
					public initComponentHostView(param0: globalAndroid.content.Context): io.dcloud.feature.weex_switch.SwitchButton;
					public onActivityStop(): void;
					public onActivityBack(): boolean;
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public onActivityDestroy(): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public addEvent(param0: string): void;
					public onActivityPause(): void;
					public onActivityStart(): void;
					public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
					public initComponentHostView(param0: globalAndroid.content.Context): any;
					public addEvent(param0: java.util.Set<string>): void;
					public removeEventFromView(param0: string): void;
					public onActivityResume(): void;
					public updateActivePseudo(param0: boolean): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
					public setChecked(param0: boolean): void;
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_switch {
				export class DCWXSwitchGroup extends com.taobao.weex.ui.component.WXComponent<io.dcloud.feature.weex_switch.SwitchGroup> {
					public static class: java.lang.Class<io.dcloud.feature.weex_switch.DCWXSwitchGroup>;
					public onActivityCreate(): void;
					public setDisabled(param0: boolean): void;
					public initComponentHostView(param0: globalAndroid.content.Context): io.dcloud.feature.weex_switch.SwitchGroup;
					public setColor(param0: string): void;
					public onActivityStop(): void;
					public onActivityBack(): boolean;
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public onActivityDestroy(): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public addEvent(param0: string): void;
					public onActivityPause(): void;
					public onActivityStart(): void;
					public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
					public initComponentHostView(param0: globalAndroid.content.Context): any;
					public addEvent(param0: java.util.Set<string>): void;
					public removeEventFromView(param0: string): void;
					public onActivityResume(): void;
					public updateActivePseudo(param0: boolean): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
					public setChecked(param0: boolean): void;
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_switch {
				export class DCWXSwitchPlugin {
					public static class: java.lang.Class<io.dcloud.feature.weex_switch.DCWXSwitchPlugin>;
					public constructor();
					public static initPlugin(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_switch {
				export class SwitchButton {
					public static class: java.lang.Class<io.dcloud.feature.weex_switch.SwitchButton>;
					public setOnCheckedChangeListener(param0: io.dcloud.feature.weex_switch.SwitchButton.OnCheckedChangeListener): void;
					public onMeasure(param0: number, param1: number): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public getShadowBottomSize(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public toggle(): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setShadowEffect(param0: boolean): void;
					public setEnableEffect(param0: boolean): void;
					public drawCheckedIndicator(param0: globalAndroid.graphics.Canvas): void;
					public setOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
					public toggle(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setPadding(param0: number, param1: number, param2: number, param3: number): void;
					public drawUncheckIndicator(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Paint): void;
					public getShadowLeftSize(): number;
					public setChecked(param0: boolean): void;
					public drawCheckedIndicator(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: globalAndroid.graphics.Paint): void;
					public setCheckedColor(param0: number): void;
					public isChecked(): boolean;
				}
				export module SwitchButton {
					export class OnCheckedChangeListener {
						public static class: java.lang.Class<io.dcloud.feature.weex_switch.SwitchButton.OnCheckedChangeListener>;
						/**
						 * Constructs a new instance of the io.dcloud.feature.weex_switch.SwitchButton$OnCheckedChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCheckedChanged(param0: io.dcloud.feature.weex_switch.SwitchButton, param1: boolean): void;
						});
						public constructor();
						public onCheckedChanged(param0: io.dcloud.feature.weex_switch.SwitchButton, param1: boolean): void;
					}
					export class ViewState {
						public static class: java.lang.Class<io.dcloud.feature.weex_switch.SwitchButton.ViewState>;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_switch {
				export class SwitchGroup {
					public static class: java.lang.Class<io.dcloud.feature.weex_switch.SwitchGroup>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onMeasure(param0: number, param1: number): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public disableClipOnParents(param0: globalAndroid.view.View): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_text {
				export class DCTextContentBoxMeasurement extends com.taobao.weex.layout.measurefunc.TextContentBoxMeasurement {
					public static class: java.lang.Class<io.dcloud.feature.weex_text.DCTextContentBoxMeasurement>;
					public layoutBefore(): void;
					public destroy(): void;
					public constructor();
					public createSpanned(param0: string): globalAndroid.text.Spanned;
					public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>);
					public updateSpannable(param0: globalAndroid.text.Spannable, param1: number): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_text {
				export class DCWXRichText extends com.taobao.weex.ui.component.WXText {
					public static class: java.lang.Class<io.dcloud.feature.weex_text.DCWXRichText>;
					public onActivityCreate(): void;
					public promoteToView(param0: boolean): boolean;
					public updateAttrs(param0: java.util.Map<string,any>): void;
					public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.component.richtext.WXRichTextView;
					public onActivityStop(): void;
					public onActivityBack(): boolean;
					public getOrCreateFlatWidget(): any;
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public onActivityDestroy(): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public onActivityPause(): void;
					public updateAttrs(param0: io.dcloud.feature.uniapp.ui.component.AbsBasicComponent<any>): void;
					public onActivityStart(): void;
					public updateExtra(param0: any): void;
					public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
					public initComponentHostView(param0: globalAndroid.content.Context): com.taobao.weex.ui.view.WXTextView;
					public initComponentHostView(param0: globalAndroid.content.Context): any;
					public getOrCreateFlatWidget(): com.taobao.weex.ui.flat.widget.TextWidget;
					public onActivityResume(): void;
					public updateActivePseudo(param0: boolean): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
				}
				export module DCWXRichText {
					export class Creator extends com.taobao.weex.ui.ComponentCreator {
						public static class: java.lang.Class<io.dcloud.feature.weex_text.DCWXRichText.Creator>;
						public constructor();
						public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
					}
					export class RichTextContentBoxMeasurement extends io.dcloud.feature.weex_text.DCTextContentBoxMeasurement {
						public static class: java.lang.Class<io.dcloud.feature.weex_text.DCWXRichText.RichTextContentBoxMeasurement>;
						public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>);
						public constructor();
						public destroy(): void;
						public createSpanned(param0: string): globalAndroid.text.Spanned;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_text {
				export class DCWXText extends com.taobao.weex.ui.component.WXText {
					public static class: java.lang.Class<io.dcloud.feature.weex_text.DCWXText>;
					public onActivityCreate(): void;
					public promoteToView(param0: boolean): boolean;
					public onActivityStop(): void;
					public onActivityBack(): boolean;
					public getOrCreateFlatWidget(): any;
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: number, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public onActivityDestroy(): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: boolean, param3: com.taobao.weex.ui.action.BasicComponentData<any>);
					public setSelectable(param0: boolean): void;
					public onActivityPause(): void;
					public onActivityStart(): void;
					public constructor(param0: io.dcloud.feature.uniapp.ui.action.AbsComponentData<any>);
					public getOrCreateFlatWidget(): com.taobao.weex.ui.flat.widget.TextWidget;
					public onActivityResume(): void;
					public updateActivePseudo(param0: boolean): void;
					/** @deprecated */
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: string, param3: boolean, param4: com.taobao.weex.ui.action.BasicComponentData<any>);
					public constructor(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>);
				}
				export module DCWXText {
					export class Creator extends com.taobao.weex.ui.ComponentCreator {
						public static class: java.lang.Class<io.dcloud.feature.weex_text.DCWXText.Creator>;
						public constructor();
						public createInstance(param0: com.taobao.weex.WXSDKInstance, param1: com.taobao.weex.ui.component.WXVContainer<any>, param2: com.taobao.weex.ui.action.BasicComponentData<any>): com.taobao.weex.ui.component.WXComponent<any>;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_text {
				export class DCWXTextPlugin {
					public static class: java.lang.Class<io.dcloud.feature.weex_text.DCWXTextPlugin>;
					public constructor();
					public static initPlugin(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module feature {
			export module weex_websocket {
				export class UniWebSocketModule extends com.taobao.weex.WXSDKEngine.DestroyableModule {
					public static class: java.lang.Class<io.dcloud.feature.weex_websocket.UniWebSocketModule>;
					public onmessage(param0: com.taobao.weex.bridge.JSCallback): void;
					public onclose(param0: com.taobao.weex.bridge.JSCallback): void;
					public destroy(): void;
					public send(param0: string): void;
					public constructor();
					public close(param0: string): void;
					public WebSocket(param0: string): void;
					public onopen(param0: com.taobao.weex.bridge.JSCallback): void;
					public onerror(param0: com.taobao.weex.bridge.JSCallback): void;
				}
				export module UniWebSocketModule {
					export class WebSocketEventListener extends com.taobao.weex.appfram.websocket.IWebSocketAdapter.EventListener {
						public static class: java.lang.Class<io.dcloud.feature.weex_websocket.UniWebSocketModule.WebSocketEventListener>;
						public onOpen(): void;
						public constructor(param0: io.dcloud.feature.weex_websocket.UniWebSocketModule, param1: string);
						public onClose(param0: number, param1: string, param2: boolean): void;
						public onMessage(param0: string): void;
						public onError(param0: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module weex {
			export class AppHookProxy {
				public static class: java.lang.Class<io.dcloud.weex.AppHookProxy>;
				/**
				 * Constructs a new instance of the io.dcloud.weex.AppHookProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreate(param0: globalAndroid.app.Application): void;
				});
				public constructor();
				public onCreate(param0: globalAndroid.app.Application): void;
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module weex {
			export class ConsoleLogUtils {
				public static class: java.lang.Class<io.dcloud.weex.ConsoleLogUtils>;
				public static consoleLog(param0: string, param1: string, param2: io.dcloud.feature.uniapp.utils.AbsLogLevel): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module weex {
			export class DCFileUtils {
				public static class: java.lang.Class<io.dcloud.weex.DCFileUtils>;
				public static loadWeexAsset(param0: string, param1: globalAndroid.content.Context): java.io.InputStream;
				public static getAssetPath(param0: string): string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module weex {
			export class FlingHelper {
				public static class: java.lang.Class<io.dcloud.weex.FlingHelper>;
				public getVelocityByDistance(param0: number): number;
				public constructor(param0: globalAndroid.content.Context);
				public getSplineFlingDistance(param0: number): number;
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module weex {
			export class MoudlesLoader {
				public static class: java.lang.Class<io.dcloud.weex.MoudlesLoader>;
				public onCreate(param0: globalAndroid.app.Application): void;
				public onSubProcess(param0: globalAndroid.app.Application): void;
				public static getInstance(): io.dcloud.weex.MoudlesLoader;
				public constructor();
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module weex {
			export class ViewHover {
				public static class: java.lang.Class<io.dcloud.weex.ViewHover>;
				public static VIEW_HOVER_EVENT: string;
				public touchStartRunnable: java.lang.Runnable;
				public touchEndRunnable: java.lang.Runnable;
				public updateStatusAndGetUpdateStyles(param0: boolean): java.util.Map<string,any>;
				public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>, param1: com.alibaba.fastjson.JSONObject);
				public setHoverStartTime(param0: number): void;
				public getHoverStayTime(): number;
				public setHoverStayTime(param0: number): void;
				public constructor(param0: com.taobao.weex.ui.component.WXComponent<any>);
				public update(param0: com.alibaba.fastjson.JSONObject): void;
				public getHoverStartTime(): number;
				public setHoverStopPropagation(param0: boolean): void;
				public destroy(): void;
				public setReceiveTouch(param0: boolean): void;
				public isHoverStopPropagation(): boolean;
				public handleMotionEvent(param0: com.taobao.weex.ui.view.gesture.WXGestureType, param1: globalAndroid.view.MotionEvent): void;
			}
		}
	}
}

declare module io {
	export module dcloud {
		export module weex {
			export class WXDotDataUtil {
				public static class: java.lang.Class<io.dcloud.weex.WXDotDataUtil>;
				public static getDeviceInfo(): com.alibaba.fastjson.JSONObject;
				public static setValue(param0: string, param1: any): void;
				public constructor();
			}
		}
	}
}

//Generics information:
//com.taobao.weex.WXSDKEngine.DestroyableModuleFactory:1
//com.taobao.weex.bridge.ModuleFactory:1
//com.taobao.weex.bridge.ResultCallback:1
//com.taobao.weex.bridge.WXHashMap:2
//com.taobao.weex.common.TypeModuleFactory:1
//com.taobao.weex.dom.CSSShorthand:1
//com.taobao.weex.el.parse.ArrayStack:1
//com.taobao.weex.performance.WXStateRecord.RecordList:1
//com.taobao.weex.ui.action.BasicComponentData:1
//com.taobao.weex.ui.component.WXComponent:1
//com.taobao.weex.ui.component.WXVContainer:1
//com.taobao.weex.ui.component.basic.WXBasicComponent:1
//com.taobao.weex.ui.component.richtext.node.RichTextNodeCreator:1
//com.taobao.weex.ui.config.ConfigModuleFactory:1
//com.taobao.weex.ui.flat.FlatComponent:1
//com.taobao.weex.ui.flat.WidgetContainer:1
//com.taobao.weex.ui.view.IRenderResult:1
//com.taobao.weex.ui.view.IRenderStatus:1
//com.taobao.weex.ui.view.listview.adapter.IRecyclerAdapterListener:1
//com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter:1
//com.taobao.weex.ui.view.refresh.wrapper.BaseBounceView:1
//com.taobao.weex.utils.FunctionParser:2
//com.taobao.weex.utils.FunctionParser.Mapper:2
//com.taobao.weex.utils.SingleFunctionParser:1
//com.taobao.weex.utils.SingleFunctionParser.FlatMapper:1
//com.taobao.weex.utils.SingleFunctionParser.NonUniformMapper:1
//com.taobao.weex.utils.WXInterception.InterceptionHandler:1
//io.dcloud.feature.uniapp.UniSDKEngine.DestroyableUniModuleFactory:1
//io.dcloud.feature.uniapp.bridge.UniModuleFactory:1
//io.dcloud.feature.uniapp.common.TypeUniModuleFactory:1
//io.dcloud.feature.uniapp.dom.AbsCSSShorthand:1
//io.dcloud.feature.uniapp.ui.action.AbsComponentData:1
//io.dcloud.feature.uniapp.ui.component.AbsBasicComponent:1
//io.dcloud.feature.uniapp.ui.component.AbsVContainer:1
//io.dcloud.feature.uniapp.ui.component.UniComponent:1
//io.dcloud.feature.uniapp.ui.component.UniVContainer:1
//io.dcloud.feature.uniapp.utils.bitmap.BitmapLoadCallback:1
//io.dcloud.feature.weex.WeexInstanceMgr.EachListener:1

