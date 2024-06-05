"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ProjectManager=void 0;const projectHandler_1=require("./projectHandler");class ProjectManager{static instance(e){return void 0===this._instance&&(this._instance=new ProjectManager(e)),this._instance}constructor(e){this._projectMap=new Map,this._projectVersionMap=new Map,e.forEach((e=>{this._projectVersionMap.set(e.uri,0)})),this.startTimingSave()}startTimingSave(){setInterval((()=>{for(const e of this._projectMap.keys())this.getProjectHandler(e).fileData.saveIndexData()}),6e5)}forceSave(){for(const e of this._projectMap.keys())this.getProjectHandler(e).fileData.forceSaveIndexData()}getProjectHandler(e){this._projectMap.has(e)||this._projectMap.set(e,new projectHandler_1.ProjectHandler(e));return this._projectMap.get(e)}deleteProjectHandler(e){this.getProjectHandler(e).fileData.removeIndexData(),this._projectMap.delete(e),this._projectVersionMap.delete(e)}updateProjectVersion(e){if(this._projectVersionMap.has(e)){let t=this._projectVersionMap.get(e);if(void 0===t)return;t++,this._projectVersionMap.set(e,t)}else this._projectVersionMap.set(e,1);const t=this._projectVersionMap.get(e);this.getProjectHandler(e).fileVersion.setProjectVersion(t)}getProjectVersion(e){if(this._projectVersionMap.has(e))return this._projectVersionMap.get(e)}}exports.ProjectManager=ProjectManager;