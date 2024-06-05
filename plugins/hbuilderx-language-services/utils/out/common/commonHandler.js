"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseUniModuleSchema=exports.parseSchema=exports.getFieldType=exports.getCollection=void 0;const fs=require("fs"),path=require("path"),jsonc_1=require("jsonc"),clientDBStruct_1=require("./clientDBStruct"),uniCloudPath_1=require("./uniCloudPath");function getCollection(e,t,r){if(fs.existsSync(t)){let o=new clientDBStruct_1.ClientDBCollection(e),n=fs.readFileSync(t).toString();const[i,s]=jsonc_1.jsonc.safe.parse(n);if(!i&&s.properties)for(let t of Object.keys(s.properties)){let n=t,i=getFieldType(e,s.properties[t],r);o.addProperty(n,i)}return o}return null}function getFieldType(e,t,r){let o={};if(o.children=new Map,t.hasOwnProperty("description")&&(o.desc=t.description),t.hasOwnProperty("bsonType")&&(o.typeName=t.bsonType),t.hasOwnProperty("enum")&&(o.enums=t.enum),t.hasOwnProperty("foreignKey")){let e=t.foreignKey;if(e.length>0){let t=e.split(".")[0];o.refCollection=parseSchema(t,r)}}if(t.hasOwnProperty("properties")){o.children.clear();let n=t.properties;for(let t of Object.keys(n)){let i=getFieldType(e,n[t],r);o.children.set(t,i)}}return o.owningCollection=e,o}function parseSchema(e,t){for(let r of uniCloudPath_1.providers){let o=path.join(t,(0,uniCloudPath_1.getCloudDatabaseRoot)(r),e+".schema.json");if(fs.existsSync(o))return getCollection(e,o,t);{let r=parseUniModuleSchema(e,t);if(r)return r}}return null}function parseUniModuleSchema(e,t){let r=path.join(t,(0,uniCloudPath_1.getUniModulesDir)());if(!fs.existsSync(r))return null;if(!fs.statSync(r).isDirectory())return null;let o=fs.readdirSync(r);for(let n of o){let o=path.join(r,n);if(fs.statSync(o).isDirectory())for(let r of uniCloudPath_1.providers){let o=path.join(t,(0,uniCloudPath_1.getUniModuleDatabase)(n,r)),i=path.join(o,e,".schema.json");if(fs.existsSync(i))return getCollection(e,i,t)}}return null}exports.getCollection=getCollection,exports.getFieldType=getFieldType,exports.parseSchema=parseSchema,exports.parseUniModuleSchema=parseUniModuleSchema;