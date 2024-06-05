"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.copyObject=exports.getUnicloudObjectaMethodType=exports.getUTSJSONObject=void 0;const core_1=require("../../../core"),utsLanguageServiceInterface_1=require("../uts/utsLanguageServiceInterface");let utsJsonObjectTypeCache,typeCache;function getUTSJSONObject(){return utsJsonObjectTypeCache||(utsJsonObjectTypeCache=findTypeFromFile(utsLanguageServiceInterface_1.UtsPluginLanguageService.Constants.UTS_JSON_OBJECT_TYPE_FILE_PATH,"UTSJSONObject"),utsJsonObjectTypeCache)}function getUnicloudObjectaMethodType(){return typeCache||(typeCache=findTypeFromFile(utsLanguageServiceInterface_1.UtsPluginLanguageService.Constants.UNI_CLOUD_OBJECT_METHOD_HELPER_FILE_PATH,"UnicloudObjectMethod"),typeCache)}function findTypeFromFile(e,t,c){try{const c=core_1.ts.createProgram({rootNames:[e],options:{}}),o=c.getSourceFile(e);if(o){const e=c.getTypeChecker(),n=e.getSymbolsInScope(o,core_1.ts.SymbolFlags.All).find((e=>e.escapedName===t));if(n)return e.getTypeAtLocation(n.declarations[0])}return}catch(e){return void(c&&c("find type from file failed..."))}}function copyObject(e){const t=new Object;for(let c of Object.keys(e)){const o=e[c];t[c]="function"==typeof o?(...t)=>o.apply(e,t):o}let c=Object.getPrototypeOf(e);for(let o of Object.getOwnPropertyNames(c)){const c=e[o];t[o]="function"==typeof c?(...t)=>c.apply(e,t):c}return t}exports.getUTSJSONObject=getUTSJSONObject,exports.getUnicloudObjectaMethodType=getUnicloudObjectaMethodType,exports.copyObject=copyObject;