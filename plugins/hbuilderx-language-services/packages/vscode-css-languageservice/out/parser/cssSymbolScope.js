"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&__createBinding(t,e,o);return __setModuleDefault(t,e),t};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Symbols=exports.ScopeBuilder=exports.Symbol=exports.GlobalScope=exports.Scope=void 0;const nodes=__importStar(require("./cssNodes")),arrays_1=require("../utils/arrays");class Scope{constructor(e,t){this.offset=e,this.length=t,this.symbols=[],this.parent=null,this.children=[]}addChild(e){this.children.push(e),e.setParent(this)}setParent(e){this.parent=e}findScope(e,t=0){return this.offset<=e&&this.offset+this.length>e+t||this.offset===e&&this.length===t?this.findInScope(e,t):null}findInScope(e,t=0){const o=e+t,n=(0,arrays_1.findFirst)(this.children,(e=>e.offset>o));if(0===n)return this;const r=this.children[n-1];return r.offset<=e&&r.offset+r.length>=e+t?r.findInScope(e,t):this}addSymbol(e){this.symbols.push(e)}getSymbol(e,t){for(let o=0;o<this.symbols.length;o++){const n=this.symbols[o];if(n.name===e&&n.type===t)return n}return null}getSymbols(){return this.symbols}}exports.Scope=Scope;class GlobalScope extends Scope{constructor(){super(0,Number.MAX_VALUE)}}exports.GlobalScope=GlobalScope;class Symbol{constructor(e,t,o,n){this.name=e,this.value=t,this.node=o,this.type=n}}exports.Symbol=Symbol;class ScopeBuilder{constructor(e){this.scope=e}addSymbol(e,t,o,n){if(-1!==e.offset){const r=this.scope.findScope(e.offset,e.length);r&&r.addSymbol(new Symbol(t,o,e,n))}}addScope(e){if(-1!==e.offset){const t=this.scope.findScope(e.offset,e.length);if(t&&(t.offset!==e.offset||t.length!==e.length)){const o=new Scope(e.offset,e.length);return t.addChild(o),o}return t}return null}addSymbolToChildScope(e,t,o,n,r){if(e&&-1!==e.offset){const s=this.addScope(e);s&&s.addSymbol(new Symbol(o,n,t,r))}}visitNode(e){switch(e.type){case nodes.NodeType.Keyframe:return this.addSymbol(e,e.getName(),void 0,nodes.ReferenceType.Keyframe),!0;case nodes.NodeType.CustomPropertyDeclaration:return this.visitCustomPropertyDeclarationNode(e);case nodes.NodeType.VariableDeclaration:return this.visitVariableDeclarationNode(e);case nodes.NodeType.Ruleset:return this.visitRuleSet(e);case nodes.NodeType.MixinDeclaration:return this.addSymbol(e,e.getName(),void 0,nodes.ReferenceType.Mixin),!0;case nodes.NodeType.FunctionDeclaration:return this.addSymbol(e,e.getName(),void 0,nodes.ReferenceType.Function),!0;case nodes.NodeType.FunctionParameter:return this.visitFunctionParameterNode(e);case nodes.NodeType.Declarations:return this.addScope(e),!0;case nodes.NodeType.For:const t=e,o=t.getDeclarations();return o&&t.variable&&this.addSymbolToChildScope(o,t.variable,t.variable.getName(),void 0,nodes.ReferenceType.Variable),!0;case nodes.NodeType.Each:{const t=e,o=t.getDeclarations();if(o){const e=t.getVariables().getChildren();for(const t of e)this.addSymbolToChildScope(o,t,t.getName(),void 0,nodes.ReferenceType.Variable)}return!0}}return!0}visitRuleSet(e){const t=this.scope.findScope(e.offset,e.length);if(t)for(const o of e.getSelectors().getChildren())o instanceof nodes.Selector&&1===o.getChildren().length&&t.addSymbol(new Symbol(o.getChild(0).getText(),void 0,o,nodes.ReferenceType.Rule));return!0}visitVariableDeclarationNode(e){const t=e.getValue()?e.getValue().getText():void 0;return this.addSymbol(e,e.getName(),t,nodes.ReferenceType.Variable),!0}visitFunctionParameterNode(e){const t=e.getParent().getDeclarations();if(t){const o=e.getDefaultValue(),n=o?o.getText():void 0;this.addSymbolToChildScope(t,e,e.getName(),n,nodes.ReferenceType.Variable)}return!0}visitCustomPropertyDeclarationNode(e){const t=e.getValue()?e.getValue().getText():"";return this.addCSSVariable(e.getProperty(),e.getProperty().getName(),t,nodes.ReferenceType.Variable),!0}addCSSVariable(e,t,o,n){-1!==e.offset&&this.scope.addSymbol(new Symbol(t,o,e,n))}}exports.ScopeBuilder=ScopeBuilder;class Symbols{constructor(e){this.global=new GlobalScope,e.acceptVisitor(new ScopeBuilder(this.global))}findSymbolsAtOffset(e,t){let o=this.global.findScope(e,0);const n=[],r={};for(;o;){const e=o.getSymbols();for(let o=0;o<e.length;o++){const s=e[o];s.type!==t||r[s.name]||(n.push(s),r[s.name]=!0)}o=o.parent}return n}internalFindSymbol(e,t){let o=e;if(e.parent instanceof nodes.FunctionParameter&&e.parent.getParent()instanceof nodes.BodyDeclaration&&(o=e.parent.getParent().getDeclarations()),e.parent instanceof nodes.FunctionArgument&&e.parent.getParent()instanceof nodes.Function){const t=e.parent.getParent().getIdentifier();if(t){const e=this.internalFindSymbol(t,[nodes.ReferenceType.Function]);e&&(o=e.node.getDeclarations())}}if(!o)return null;const n=e.getText();let r=this.global.findScope(o.offset,o.length);for(;r;){for(let e=0;e<t.length;e++){const o=t[e],s=r.getSymbol(n,o);if(s)return s}r=r.parent}return null}evaluateReferenceTypes(e){if(e instanceof nodes.Identifier){const t=e.referenceTypes;if(t)return t;{if(e.isCustomProperty)return[nodes.ReferenceType.Variable];const t=nodes.getParentDeclaration(e);if(t){const o=t.getNonPrefixedPropertyName();if(("animation"===o||"animation-name"===o)&&t.getValue()&&t.getValue().offset===e.offset)return[nodes.ReferenceType.Keyframe]}}}else if(e instanceof nodes.Variable)return[nodes.ReferenceType.Variable];return e.findAParent(nodes.NodeType.Selector,nodes.NodeType.ExtendsReference)?[nodes.ReferenceType.Rule]:null}findSymbolFromNode(e){if(!e)return null;for(;e.type===nodes.NodeType.Interpolation;)e=e.getParent();const t=this.evaluateReferenceTypes(e);return t?this.internalFindSymbol(e,t):null}matchesSymbol(e,t){if(!e)return!1;for(;e.type===nodes.NodeType.Interpolation;)e=e.getParent();if(!e.matches(t.name))return!1;const o=this.evaluateReferenceTypes(e);if(!o||-1===o.indexOf(t.type))return!1;return this.internalFindSymbol(e,o)===t}findSymbol(e,t,o){let n=this.global.findScope(o);for(;n;){const o=n.getSymbol(e,t);if(o)return o;n=n.parent}return null}}exports.Symbols=Symbols;