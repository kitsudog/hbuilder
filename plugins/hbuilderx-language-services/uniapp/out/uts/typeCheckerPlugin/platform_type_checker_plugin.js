"use strict";var PlatformTypeCheckerCommon;Object.defineProperty(exports,"__esModule",{value:!0}),exports.IosTypeChekerPlugin=exports.AndroidTypeChekerPlugin=void 0,function(e){e.platformDefinecomponentgGetContextualType=function(e,o,t,n,r,i,s){}}(PlatformTypeCheckerCommon||(PlatformTypeCheckerCommon={}));class AndroidTypeChekerPlugin{constructor(e,o){this._info=e,this._aLs=o}checkExpression(e,o,t,n,r,i){}getContextualType(e,o,t,n,r){return PlatformTypeCheckerCommon.platformDefinecomponentgGetContextualType(this._info.ts,this._aLs.getUtsLanguageService(),e,o,t,n,r)}}exports.AndroidTypeChekerPlugin=AndroidTypeChekerPlugin;class IosTypeChekerPlugin{constructor(e,o){this._info=e,this._iLs=o}checkExpression(e,o,t,n,r,i){}getContextualType(e,o,t,n,r){return PlatformTypeCheckerCommon.platformDefinecomponentgGetContextualType(this._info.ts,this._iLs.getUtsLanguageService(),e,o,t,n,r)}}exports.IosTypeChekerPlugin=IosTypeChekerPlugin;