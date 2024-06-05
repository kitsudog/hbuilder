"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AdditionalCompletion=void 0;const core_1=require("../../../../core"),specialStringPlugin_1=require("../../../../specialStringPlugin"),plugins_1=require("../../plugins");class AdditionalCompletion{constructor(t,i,e){this.ls=t,this.allInfo=i,this.dataProviders=e}async doExtraCompletion(t,i,e,n){let r=this.ls.getLocationInfoAtPosition(i,e,n);if(!r)return t;if(!r.activeAttribute)return t;if(r.kind===plugins_1.LocationInfoKind.AttributeValue)t=await this.addSpecialStringCompletion(t,i,e,r);return t}async addSpecialStringCompletion(t,i,e,n){if(!n)return t;if(!n.activeAttribute)return t;const r=n.activeTag;if(!r)return t;const o=n.activeAttribute,a=[];if(this.dataProviders.forEach((t=>{t.provideAttributes(r).forEach((t=>{t.name===o&&t.valueSet&&a.push(t.valueSet)}))})),0===a.length)return t;const s=(0,core_1.getContextData)(i,i.offsetAt(e)," \t\n\r'\":{[()]},*>+"),l=this.ls.parseHTMLDocument(i),c={range:s.contextRange,kind:specialStringPlugin_1.StringLocationInfoKind.IN_HTML_LIKE,ast:l,project:this.allInfo.project},u=new Map;u.set(specialStringPlugin_1.LanguageServiceType.HTML_LANGUAGE_SERVICE,this.ls);const p=specialStringPlugin_1.StringServicesContainer.create(u);return t=await(0,specialStringPlugin_1.specialStringDoCompleteAsync)(a,i,e,c,p,t.items)}}exports.AdditionalCompletion=AdditionalCompletion;