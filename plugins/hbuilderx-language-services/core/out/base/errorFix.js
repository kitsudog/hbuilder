"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const fs=require("fs-extra"),path=require("path");function fixBigLog(){const e=function(){let e="";return e="darwin"===process.platform?path.join(process.env.HOME||".","Library","Application Support","HBuilder X","LanguageServerLogData"):path.join(process.env.APPDATA||".","HBuilder X","LanguageServerLogData"),e}();fs.remove(e)}try{fixBigLog()}catch(e){}