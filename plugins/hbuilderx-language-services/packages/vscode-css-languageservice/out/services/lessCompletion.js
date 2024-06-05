"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,l,o,n){void 0===n&&(n=o);var t=Object.getOwnPropertyDescriptor(l,o);t&&!("get"in t?!l.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return l[o]}}),Object.defineProperty(e,n,t)}:function(e,l,o,n){void 0===n&&(n=o),e[n]=l[o]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,l){Object.defineProperty(e,"default",{enumerable:!0,value:l})}:function(e,l){e.default=l}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&__createBinding(l,e,o);return __setModuleDefault(l,e),l};Object.defineProperty(exports,"__esModule",{value:!0}),exports.LESSCompletion=void 0;const cssLanguageTypes_1=require("../cssLanguageTypes"),cssCompletion_1=require("./cssCompletion"),nls=__importStar(require("vscode-nls")),cssLanguageService_1=require("../cssLanguageService"),styleExtCompletion_1=require("../external/styleExtCompletion"),localize=nls.loadMessageBundle();class LESSCompletion extends cssCompletion_1.CSSCompletion{constructor(e,l){super("@",e,l),this.styleExtCompletion=new styleExtCompletion_1.StyleExtCompletion(new cssLanguageService_1.LESSScanner)}createFunctionProposals(e,l,o,n){for(const t of e){const e={label:t.name,detail:t.example,documentation:t.description,textEdit:cssLanguageTypes_1.TextEdit.replace(this.getCompletionRange(l),t.name+"($0)"),insertTextFormat:cssLanguageTypes_1.InsertTextFormat.Snippet,kind:cssLanguageTypes_1.CompletionItemKind.Function};o&&(e.sortText="z"),n.items.push(e)}return n}getTermProposals(e,l,o){let n=LESSCompletion.builtInProposals;return e&&(n=n.filter((l=>!l.type||!e.restrictions||-1!==e.restrictions.indexOf(l.type)))),this.createFunctionProposals(n,l,!0,o),super.getTermProposals(e,l,o)}getColorProposals(e,l,o){return this.createFunctionProposals(LESSCompletion.colorProposals,l,!1,o),super.getColorProposals(e,l,o)}getCompletionsForDeclarationProperty(e,l){return this.getCompletionsForSelector(null,!0,l),super.getCompletionsForDeclarationProperty(e,l)}}exports.LESSCompletion=LESSCompletion,LESSCompletion.builtInProposals=[{name:"if",example:"if(condition, trueValue [, falseValue]);",description:localize("less.builtin.if","returns one of two values depending on a condition.")},{name:"boolean",example:"boolean(condition);",description:localize("less.builtin.boolean",'"store" a boolean test for later evaluation in a guard or if().')},{name:"length",example:"length(@list);",description:localize("less.builtin.length","returns the number of elements in a value list")},{name:"extract",example:"extract(@list, index);",description:localize("less.builtin.extract","returns a value at the specified position in the list")},{name:"range",example:"range([start, ] end [, step]);",description:localize("less.builtin.range","generate a list spanning a range of values")},{name:"each",example:"each(@list, ruleset);",description:localize("less.builtin.each","bind the evaluation of a ruleset to each member of a list.")},{name:"escape",example:"escape(@string);",description:localize("less.builtin.escape","URL encodes a string")},{name:"e",example:"e(@string);",description:localize("less.builtin.e","escape string content")},{name:"replace",example:"replace(@string, @pattern, @replacement[, @flags]);",description:localize("less.builtin.replace","string replace")},{name:"unit",example:"unit(@dimension, [@unit: '']);",description:localize("less.builtin.unit","remove or change the unit of a dimension")},{name:"color",example:"color(@string);",description:localize("less.builtin.color","parses a string to a color"),type:"color"},{name:"convert",example:"convert(@value, unit);",description:localize("less.builtin.convert","converts numbers from one type into another")},{name:"data-uri",example:"data-uri([mimetype,] url);",description:localize("less.builtin.data-uri","inlines a resource and falls back to `url()`"),type:"url"},{name:"abs",description:localize("less.builtin.abs","absolute value of a number"),example:"abs(number);"},{name:"acos",description:localize("less.builtin.acos","arccosine - inverse of cosine function"),example:"acos(number);"},{name:"asin",description:localize("less.builtin.asin","arcsine - inverse of sine function"),example:"asin(number);"},{name:"ceil",example:"ceil(@number);",description:localize("less.builtin.ceil","rounds up to an integer")},{name:"cos",description:localize("less.builtin.cos","cosine function"),example:"cos(number);"},{name:"floor",description:localize("less.builtin.floor","rounds down to an integer"),example:"floor(@number);"},{name:"percentage",description:localize("less.builtin.percentage","converts to a %, e.g. 0.5 > 50%"),example:"percentage(@number);",type:"percentage"},{name:"round",description:localize("less.builtin.round","rounds a number to a number of places"),example:"round(number, [places: 0]);"},{name:"sqrt",description:localize("less.builtin.sqrt","calculates square root of a number"),example:"sqrt(number);"},{name:"sin",description:localize("less.builtin.sin","sine function"),example:"sin(number);"},{name:"tan",description:localize("less.builtin.tan","tangent function"),example:"tan(number);"},{name:"atan",description:localize("less.builtin.atan","arctangent - inverse of tangent function"),example:"atan(number);"},{name:"pi",description:localize("less.builtin.pi","returns pi"),example:"pi();"},{name:"pow",description:localize("less.builtin.pow","first argument raised to the power of the second argument"),example:"pow(@base, @exponent);"},{name:"mod",description:localize("less.builtin.mod","first argument modulus second argument"),example:"mod(number, number);"},{name:"min",description:localize("less.builtin.min","returns the lowest of one or more values"),example:"min(@x, @y);"},{name:"max",description:localize("less.builtin.max","returns the lowest of one or more values"),example:"max(@x, @y);"}],LESSCompletion.colorProposals=[{name:"argb",example:"argb(@color);",description:localize("less.builtin.argb","creates a #AARRGGBB")},{name:"hsl",example:"hsl(@hue, @saturation, @lightness);",description:localize("less.builtin.hsl","creates a color")},{name:"hsla",example:"hsla(@hue, @saturation, @lightness, @alpha);",description:localize("less.builtin.hsla","creates a color")},{name:"hsv",example:"hsv(@hue, @saturation, @value);",description:localize("less.builtin.hsv","creates a color")},{name:"hsva",example:"hsva(@hue, @saturation, @value, @alpha);",description:localize("less.builtin.hsva","creates a color")},{name:"hue",example:"hue(@color);",description:localize("less.builtin.hue","returns the `hue` channel of `@color` in the HSL space")},{name:"saturation",example:"saturation(@color);",description:localize("less.builtin.saturation","returns the `saturation` channel of `@color` in the HSL space")},{name:"lightness",example:"lightness(@color);",description:localize("less.builtin.lightness","returns the `lightness` channel of `@color` in the HSL space")},{name:"hsvhue",example:"hsvhue(@color);",description:localize("less.builtin.hsvhue","returns the `hue` channel of `@color` in the HSV space")},{name:"hsvsaturation",example:"hsvsaturation(@color);",description:localize("less.builtin.hsvsaturation","returns the `saturation` channel of `@color` in the HSV space")},{name:"hsvvalue",example:"hsvvalue(@color);",description:localize("less.builtin.hsvvalue","returns the `value` channel of `@color` in the HSV space")},{name:"red",example:"red(@color);",description:localize("less.builtin.red","returns the `red` channel of `@color`")},{name:"green",example:"green(@color);",description:localize("less.builtin.green","returns the `green` channel of `@color`")},{name:"blue",example:"blue(@color);",description:localize("less.builtin.blue","returns the `blue` channel of `@color`")},{name:"alpha",example:"alpha(@color);",description:localize("less.builtin.alpha","returns the `alpha` channel of `@color`")},{name:"luma",example:"luma(@color);",description:localize("less.builtin.luma","returns the `luma` value (perceptual brightness) of `@color`")},{name:"saturate",example:"saturate(@color, 10%);",description:localize("less.builtin.saturate","return `@color` 10% points more saturated")},{name:"desaturate",example:"desaturate(@color, 10%);",description:localize("less.builtin.desaturate","return `@color` 10% points less saturated")},{name:"lighten",example:"lighten(@color, 10%);",description:localize("less.builtin.lighten","return `@color` 10% points lighter")},{name:"darken",example:"darken(@color, 10%);",description:localize("less.builtin.darken","return `@color` 10% points darker")},{name:"fadein",example:"fadein(@color, 10%);",description:localize("less.builtin.fadein","return `@color` 10% points less transparent")},{name:"fadeout",example:"fadeout(@color, 10%);",description:localize("less.builtin.fadeout","return `@color` 10% points more transparent")},{name:"fade",example:"fade(@color, 50%);",description:localize("less.builtin.fade","return `@color` with 50% transparency")},{name:"spin",example:"spin(@color, 10);",description:localize("less.builtin.spin","return `@color` with a 10 degree larger in hue")},{name:"mix",example:"mix(@color1, @color2, [@weight: 50%]);",description:localize("less.builtin.mix","return a mix of `@color1` and `@color2`")},{name:"greyscale",example:"greyscale(@color);",description:localize("less.builtin.greyscale","returns a grey, 100% desaturated color")},{name:"contrast",example:"contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%]);",description:localize("less.builtin.contrast","return `@darkcolor` if `@color1 is> 43% luma` otherwise return `@lightcolor`, see notes")},{name:"multiply",example:"multiply(@color1, @color2);"},{name:"screen",example:"screen(@color1, @color2);"},{name:"overlay",example:"overlay(@color1, @color2);"},{name:"softlight",example:"softlight(@color1, @color2);"},{name:"hardlight",example:"hardlight(@color1, @color2);"},{name:"difference",example:"difference(@color1, @color2);"},{name:"exclusion",example:"exclusion(@color1, @color2);"},{name:"average",example:"average(@color1, @color2);"},{name:"negation",example:"negation(@color1, @color2);"}];