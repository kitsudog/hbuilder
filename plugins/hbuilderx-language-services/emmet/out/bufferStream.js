"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DocumentStreamReader=void 0;class DocumentStreamReader{constructor(t,e,s){this.document=t,this.start=this.pos=e||0,this._sof=s?s[0]:0,this._eof=s?s[1]:t.getText().length}sof(){return this.pos<=this._sof}eof(){return this.pos>=this._eof}limit(t,e){return new DocumentStreamReader(this.document,t,[t,e])}peek(){return this.eof()?NaN:this.document.getText().charCodeAt(this.pos)}next(){if(this.eof())return NaN;const t=this.document.getText().charCodeAt(this.pos);return this.pos++,this.eof()&&(this.pos=this._eof),t}backUp(t){return this.pos-=t,this.pos<0&&(this.pos=0),this.peek()}current(){return this.substring(this.start,this.pos)}substring(t,e){return this.document.getText().substring(t,e)}error(t){return new Error(`${t} at offset ${this.pos}`)}eat(t){const e=this.peek(),s="function"==typeof t?t(e):e===t;return s&&this.next(),s}eatWhile(t){const e=this.pos;for(;!this.eof()&&this.eat(t););return this.pos!==e}}exports.DocumentStreamReader=DocumentStreamReader;