"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPagesSchemaUniAppx=void 0;const fs=require("fs"),path=require("path"),core_1=require("../../../core");function getPagesSchemaUniAppx(){let e;try{const r=(0,core_1.getExtensionRootPath)(),t=path.join(r,"jsservice/src/schemas/pagesSchemaUniAppx.json"),s=fs.readFileSync(t,"utf-8");e=JSON.parse(s)}catch(e){console.error(`[PluginHost] [PackageSchema] Error: ${e}!`)}return e}exports.getPagesSchemaUniAppx=getPagesSchemaUniAppx;