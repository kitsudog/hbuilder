"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AdditionalDefinition=void 0;const core_1=require("../../../../core"),specialStringPlugin_1=require("../../../../specialStringPlugin"),plugins_1=require("../../plugins");class AdditionalDefinition{constructor(i,t,e){this.ls=i,this.allInfo=t,this.dataProviders=e}async doExtraDefinition(i,t,e,n){let r=this.ls.getLocationInfoAtPosition(t,e,n);if(!r)return i;if(!r.activeAttribute)return i;if(i||(i=[]),r.kind===plugins_1.LocationInfoKind.AttributeValue)i=await this.getDefinitionFromPath(i,t,e,r);return i}async getDefinitionFromPath(i,t,e,n){if(!n)return i;if(!n.activeAttribute)return i;let r=n.activeTag;if(!r)return i;let o=n.activeAttribute,a=[];this.dataProviders.forEach((i=>{i.provideAttributes(r).forEach((i=>{i.name===o&&i.valueSet&&a.push(i.valueSet)}))}));let s={range:(0,core_1.getContextData)(t,t.offsetAt(e)," \t\n\r'\":{[()]},*>+").contextRange,kind:specialStringPlugin_1.StringLocationInfoKind.IN_HTML_LIKE,ast:void 0,project:this.allInfo.project},l=new Map,c=specialStringPlugin_1.StringServicesContainer.create(l),u=await(0,specialStringPlugin_1.specialStringDoDefinition)(a,t,e,s,c,[]);return u&&0!==u.length?u:i}}exports.AdditionalDefinition=AdditionalDefinition;