"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateDocumentation=exports.HTMLDataProvider=void 0;const markup_1=require("../utils/markup");class HTMLDataProvider{isApplicable(){return!0}constructor(e,t){this.id=e,this._tags=[],this._tagMap={},this._valueSetMap={},this._tags=t.tags||[],this._globalAttributes=t.globalAttributes||[],this._tags.forEach((e=>{this._tagMap[e.name.toLowerCase()]=e})),t.valueSets&&t.valueSets.forEach((e=>{this._valueSetMap[e.name]=e.values}))}get globalAttributes(){return this._globalAttributes}getId(){return this.id}provideTags(){return this._tags}provideAttributes(e){const t=[],a=e=>{t.push(e)},r=this._tagMap[e.toLowerCase()];return r&&r.attributes.forEach(a),this._globalAttributes.forEach(a),t}getGlobalAttributes(){return this._globalAttributes}provideValues(e,t){const a=[];t=t.toLowerCase();const r=e=>{e.forEach((e=>{e.name.toLowerCase()===t&&(e.values&&e.values.forEach((e=>{a.push(e)})),e.valueSet&&this._valueSetMap[e.valueSet]&&this._valueSetMap[e.valueSet].forEach((e=>{a.push(e)})))}))},s=this._tagMap[e.toLowerCase()];return s&&r(s.attributes),r(this._globalAttributes),a}}function generateDocumentation(e,t={},a){const r={kind:a?"markdown":"plaintext",value:""};if(e.description&&!1!==t.documentation){const t=(0,markup_1.normalizeMarkupContent)(e.description);t&&(r.value+=t.value)}if(e.references&&e.references.length>0&&!1!==t.references&&(r.value.length&&(r.value+="\n\n"),r.value+=a?e.references.map((e=>`[${e.name}](${e.url})`)).join(" | "):e.references.map((e=>`${e.name}: ${e.url}`)).join("\n")),""!==r.value)return r}exports.HTMLDataProvider=HTMLDataProvider,exports.generateDocumentation=generateDocumentation;