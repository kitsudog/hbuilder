/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module alibaba {
		export module fastjson {
			export abstract class JSON implements com.alibaba.fastjson.JSONStreamAware, com.alibaba.fastjson.JSONAware {
				public static class: java.lang.Class<com.alibaba.fastjson.JSON>;
				public static DEFAULT_TYPE_KEY: string;
				public static DEFAULT_PARSER_FEATURE: number;
				public static DUMP_CLASS: string;
				public static DEFFAULT_DATE_FORMAT: string;
				public static DEFAULT_GENERATE_FEATURE: number;
				public static VERSION: string;
				public static parseObject(param0: string, param1: java.lang.reflect.Type, param2: com.alibaba.fastjson.parser.ParserConfig, param3: com.alibaba.fastjson.parser.deserializer.ParseProcess, param4: number, param5: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static toJSONStringWithDateFormat(param0: any, param1: string, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public static parseObject(param0: string, param1: java.lang.Class<any>): any;
				public static parseArray(param0: string): com.alibaba.fastjson.JSONArray;
				public writeJSONString(param0: java.lang.Appendable): void;
				public static parseObject(param0: string, param1: com.alibaba.fastjson.TypeReference<any>, param2: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static toJSONString(param0: any): string;
				public constructor();
				public static parseObject(param0: string, param1: java.lang.Class<any>, param2: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static parseObject(param0: androidNative.Array<number>, param1: java.lang.reflect.Type, param2: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static toJSONString(param0: any, param1: androidNative.Array<com.alibaba.fastjson.serializer.SerializeFilter>, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public static parseArray(param0: string, param1: androidNative.Array<java.lang.reflect.Type>): java.util.List<any>;
				public static parseObject(param0: string, param1: java.lang.reflect.Type, param2: number, param3: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static parseObject(param0: string, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.parser.deserializer.ParseProcess, param3: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static parseObject(param0: string, param1: java.lang.reflect.Type, param2: com.alibaba.fastjson.parser.ParserConfig, param3: number, param4: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static toJavaObject(param0: com.alibaba.fastjson.JSON, param1: java.lang.Class<any>): any;
				public static parse(param0: string, param1: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static parseObject(param0: string, param1: androidNative.Array<com.alibaba.fastjson.parser.Feature>): com.alibaba.fastjson.JSONObject;
				public static parseObject(param0: string): com.alibaba.fastjson.JSONObject;
				public toJSONString(): string;
				public static writeJSONStringTo(param0: any, param1: java.io.Writer, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): void;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public static toJSON(param0: any): any;
				public static parse(param0: string, param1: number): any;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: com.alibaba.fastjson.serializer.SerializeFilter, param3: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public static parse(param0: androidNative.Array<number>, param1: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public toString(): string;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeFilter, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializeFilter>, param3: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public static toJSONString(param0: any, param1: boolean): string;
				public static parse(param0: string): any;
				public static parseArray(param0: string, param1: java.lang.Class<any>): java.util.List<any>;
				public static parseObject(param0: string, param1: java.lang.reflect.Type, param2: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static parseObject(param0: androidNative.Array<string>, param1: number, param2: java.lang.reflect.Type, param3: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static toJSONBytes(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): androidNative.Array<number>;
				public static toJSONStringZ(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public static toJSON(param0: any, param1: com.alibaba.fastjson.parser.ParserConfig): any;
				public static parseObject(param0: string, param1: java.lang.reflect.Type, param2: com.alibaba.fastjson.parser.deserializer.ParseProcess, param3: androidNative.Array<com.alibaba.fastjson.parser.Feature>): any;
				public static toJSONBytes(param0: any, param1: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): androidNative.Array<number>;
				public static toJSONString(param0: any, param1: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export class JSONArray extends com.alibaba.fastjson.JSON {
				public static class: java.lang.Class<com.alibaba.fastjson.JSONArray>;
				public relatedArray: any;
				public componentType: java.lang.reflect.Type;
				public getDouble(param0: number): java.lang.Double;
				public indexOf(param0: any): number;
				public getLongValue(param0: number): number;
				public addAll(param0: java.util.Collection<any>): boolean;
				public remove(param0: number): any;
				public writeJSONString(param0: java.lang.Appendable): void;
				public add(param0: number, param1: any): void;
				public constructor();
				public set(param0: number, param1: any): any;
				public getTimestamp(param0: number): java.sql.Timestamp;
				public static toJSONString(param0: any, param1: androidNative.Array<com.alibaba.fastjson.serializer.SerializeFilter>, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public add(param0: any): boolean;
				public hashCode(): number;
				public getByteValue(param0: number): number;
				public clone(): any;
				public equals(param0: any): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public lastIndexOf(param0: any): number;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public getIntValue(param0: number): number;
				public toJSONString(): string;
				public getBooleanValue(param0: number): boolean;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public getDoubleValue(param0: number): number;
				public contains(param0: any): boolean;
				public getRelatedArray(): any;
				public getJSONObject(param0: number): com.alibaba.fastjson.JSONObject;
				public getObject(param0: number, param1: java.lang.Class<any>): any;
				public iterator(): java.util.Iterator<any>;
				public getJSONArray(param0: number): com.alibaba.fastjson.JSONArray;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public getDate(param0: number): java.util.Date;
				public size(): number;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeFilter, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public getByte(param0: number): java.lang.Byte;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public getShortValue(param0: number): number;
				public static toJSONString(param0: any, param1: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public setRelatedArray(param0: any): void;
				public getString(param0: number): string;
				public setComponentType(param0: java.lang.reflect.Type): void;
				public listIterator(): java.util.ListIterator<any>;
				public static toJSONString(param0: any): string;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public getBigDecimal(param0: number): java.math.BigDecimal;
				public getFloat(param0: number): java.lang.Float;
				public getFloatValue(param0: number): number;
				public clear(): void;
				public getBoolean(param0: number): java.lang.Boolean;
				public remove(param0: any): boolean;
				public getLong(param0: number): java.lang.Long;
				public getInteger(param0: number): java.lang.Integer;
				public subList(param0: number, param1: number): java.util.List<any>;
				public getSqlDate(param0: number): java.sql.Date;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: com.alibaba.fastjson.serializer.SerializeFilter, param3: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public getBigInteger(param0: number): java.math.BigInteger;
				public get(param0: number): any;
				public toArray(): androidNative.Array<any>;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializeFilter>, param3: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public static toJSONString(param0: any, param1: boolean): string;
				public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
				public constructor(param0: number);
				public constructor(param0: java.util.List<any>);
				public getShort(param0: number): java.lang.Short;
				public getComponentType(): java.lang.reflect.Type;
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export class JSONAware {
				public static class: java.lang.Class<com.alibaba.fastjson.JSONAware>;
				/**
				 * Constructs a new instance of the com.alibaba.fastjson.JSONAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					toJSONString(): string;
				});
				public constructor();
				public toJSONString(): string;
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export class JSONException {
				public static class: java.lang.Class<com.alibaba.fastjson.JSONException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export class JSONObject extends com.alibaba.fastjson.JSON {
				public static class: java.lang.Class<com.alibaba.fastjson.JSONObject>;
				public getJSONArray(param0: string): com.alibaba.fastjson.JSONArray;
				public getSqlDate(param0: string): java.sql.Date;
				public putAll(param0: java.util.Map<any,any>): void;
				public keySet(): java.util.Set<string>;
				public getShort(param0: string): java.lang.Short;
				public writeJSONString(param0: java.lang.Appendable): void;
				public constructor(param0: boolean);
				public invoke(param0: any, param1: java.lang.reflect.Method, param2: androidNative.Array<any>): any;
				public getByteValue(param0: string): number;
				public constructor();
				public static toJSONString(param0: any, param1: androidNative.Array<com.alibaba.fastjson.serializer.SerializeFilter>, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public remove(param0: any): any;
				public getBigDecimal(param0: string): java.math.BigDecimal;
				public hashCode(): number;
				public getLongValue(param0: string): number;
				public clone(): any;
				public equals(param0: any): boolean;
				public getShortValue(param0: string): number;
				public isEmpty(): boolean;
				public getTimestamp(param0: string): java.sql.Timestamp;
				public containsValue(param0: any): boolean;
				public toJSONString(): string;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public getInteger(param0: string): java.lang.Integer;
				public getBooleanValue(param0: string): boolean;
				public size(): number;
				public entrySet(): java.util.Set<java.util.Map.Entry<string,any>>;
				public getIntValue(param0: string): number;
				public getBigInteger(param0: string): java.math.BigInteger;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeFilter, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public constructor(param0: java.util.Map<string,any>);
				public getFloat(param0: string): java.lang.Float;
				public put(param0: string, param1: any): any;
				public static toJSONString(param0: any, param1: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public get(param0: any): any;
				public containsKey(param0: any): boolean;
				public static toJSONString(param0: any): string;
				public getBytes(param0: string): androidNative.Array<number>;
				public clear(): void;
				public getString(param0: string): string;
				public getJSONObject(param0: string): com.alibaba.fastjson.JSONObject;
				public getLong(param0: string): java.lang.Long;
				public getFloatValue(param0: string): number;
				public values(): java.util.Collection<any>;
				public getObject(param0: string, param1: java.lang.Class<any>): any;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: com.alibaba.fastjson.serializer.SerializeFilter, param3: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public constructor(param0: number, param1: boolean);
				public getBoolean(param0: string): java.lang.Boolean;
				public getDoubleValue(param0: string): number;
				public static toJSONString(param0: any, param1: com.alibaba.fastjson.serializer.SerializeConfig, param2: androidNative.Array<com.alibaba.fastjson.serializer.SerializeFilter>, param3: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): string;
				public static toJSONString(param0: any, param1: boolean): string;
				public getDate(param0: string): java.util.Date;
				public constructor(param0: number);
				public getDouble(param0: string): java.lang.Double;
				public getByte(param0: string): java.lang.Byte;
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export class JSONReader {
				public static class: java.lang.Class<com.alibaba.fastjson.JSONReader>;
				public readObject(param0: com.alibaba.fastjson.TypeReference<any>): any;
				public readObject(param0: java.util.Map<any,any>): any;
				public constructor(param0: com.alibaba.fastjson.parser.DefaultJSONParser);
				public close(): void;
				public startArray(): void;
				public endArray(): void;
				public constructor(param0: java.io.Reader);
				public startObject(): void;
				public constructor(param0: com.alibaba.fastjson.parser.JSONLexer);
				public readLong(): java.lang.Long;
				public readObject(param0: java.lang.Class<any>): any;
				public endObject(): void;
				public hasNext(): boolean;
				public readObject(param0: java.lang.reflect.Type): any;
				public readObject(param0: any): void;
				public config(param0: com.alibaba.fastjson.parser.Feature, param1: boolean): void;
				public readString(): string;
				public readInteger(): java.lang.Integer;
				public readObject(): any;
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export class JSONStreamAware {
				public static class: java.lang.Class<com.alibaba.fastjson.JSONStreamAware>;
				/**
				 * Constructs a new instance of the com.alibaba.fastjson.JSONStreamAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					writeJSONString(param0: java.lang.Appendable): void;
				});
				public constructor();
				public writeJSONString(param0: java.lang.Appendable): void;
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export class JSONStreamContext {
				public static class: java.lang.Class<com.alibaba.fastjson.JSONStreamContext>;
				public setState(param0: number): void;
				public constructor(param0: com.alibaba.fastjson.JSONStreamContext, param1: number);
				public getState(): number;
				public getParent(): com.alibaba.fastjson.JSONStreamContext;
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export class JSONWriter {
				public static class: java.lang.Class<com.alibaba.fastjson.JSONWriter>;
				public endObject(): void;
				public close(): void;
				public writeKey(param0: string): void;
				public writeObject(param0: any): void;
				public writeObject(param0: string): void;
				public startArray(): void;
				public config(param0: com.alibaba.fastjson.serializer.SerializerFeature, param1: boolean): void;
				public endArray(): void;
				public writeValue(param0: any): void;
				public constructor(param0: java.io.Writer);
				public startObject(): void;
				public flush(): void;
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export class TypeReference<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.alibaba.fastjson.TypeReference<any>>;
				public static LIST_STRING: java.lang.reflect.Type;
				public getType(): java.lang.reflect.Type;
				public constructor();
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module annotation {
				export class JSONCreator {
					public static class: java.lang.Class<com.alibaba.fastjson.annotation.JSONCreator>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.annotation.JSONCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module annotation {
				export class JSONField {
					public static class: java.lang.Class<com.alibaba.fastjson.annotation.JSONField>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.annotation.JSONField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						ordinal(): number;
						name(): string;
						format(): string;
						serialize(): boolean;
						deserialize(): boolean;
						serialzeFeatures(): androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>;
						parseFeatures(): androidNative.Array<com.alibaba.fastjson.parser.Feature>;
					});
					public constructor();
					public format(): string;
					public name(): string;
					public parseFeatures(): androidNative.Array<com.alibaba.fastjson.parser.Feature>;
					public deserialize(): boolean;
					public ordinal(): number;
					public serialzeFeatures(): androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>;
					public serialize(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module annotation {
				export class JSONType {
					public static class: java.lang.Class<com.alibaba.fastjson.annotation.JSONType>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.annotation.JSONType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						asm(): boolean;
						orders(): androidNative.Array<string>;
						ignores(): androidNative.Array<string>;
						serialzeFeatures(): androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>;
						parseFeatures(): androidNative.Array<com.alibaba.fastjson.parser.Feature>;
						alphabetic(): boolean;
						mappingTo(): java.lang.Class<any>;
					});
					public constructor();
					public mappingTo(): java.lang.Class<any>;
					public asm(): boolean;
					public ignores(): androidNative.Array<string>;
					public parseFeatures(): androidNative.Array<com.alibaba.fastjson.parser.Feature>;
					public alphabetic(): boolean;
					public orders(): androidNative.Array<string>;
					public serialzeFeatures(): androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export abstract class AbstractJSONParser {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.AbstractJSONParser>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export class DefaultJSONParser extends com.alibaba.fastjson.parser.AbstractJSONParser {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.DefaultJSONParser>;
					public input: any;
					public symbolTable: com.alibaba.fastjson.parser.SymbolTable;
					public lexer: com.alibaba.fastjson.parser.JSONLexer;
					public context: com.alibaba.fastjson.parser.ParseContext;
					public static NONE: number;
					public static NeedToResolve: number;
					public static TypeNameRedirect: number;
					public getExtraTypeProvidersDirect(): java.util.List<com.alibaba.fastjson.parser.deserializer.ExtraTypeProvider>;
					public parse(param0: any): any;
					public getDateFomartPattern(): string;
					public parseObject(param0: any): void;
					public constructor(param0: string);
					public parseObject(param0: java.util.Map<any,any>): any;
					public config(param0: com.alibaba.fastjson.parser.Feature, param1: boolean): void;
					public getExtraTypeProviders(): java.util.List<com.alibaba.fastjson.parser.deserializer.ExtraTypeProvider>;
					public getExtraProcessorsDirect(): java.util.List<com.alibaba.fastjson.parser.deserializer.ExtraProcessor>;
					public constructor();
					public parseArray(param0: java.lang.Class<any>, param1: java.util.Collection<any>): void;
					public parseArray(param0: java.lang.reflect.Type, param1: java.util.Collection<any>): void;
					public close(): void;
					public setConfig(param0: com.alibaba.fastjson.parser.ParserConfig): void;
					public parseArray(param0: java.lang.Class<any>): java.util.List<any>;
					public parseObject(param0: java.lang.Class<any>): any;
					public popContext(): void;
					public parseArray(param0: java.util.Collection<any>): void;
					public parse(): any;
					public constructor(param0: any, param1: com.alibaba.fastjson.parser.JSONLexer, param2: com.alibaba.fastjson.parser.ParserConfig);
					public getContext(): com.alibaba.fastjson.parser.ParseContext;
					public setContext(param0: any, param1: any): com.alibaba.fastjson.parser.ParseContext;
					public getDateFormat(): java.text.DateFormat;
					public parseArray(param0: java.util.Collection<any>, param1: any): void;
					public parseObject(): com.alibaba.fastjson.JSONObject;
					public constructor(param0: string, param1: com.alibaba.fastjson.parser.ParserConfig);
					public setResolveStatus(param0: number): void;
					public getLexer(): com.alibaba.fastjson.parser.JSONLexer;
					public getConfig(): com.alibaba.fastjson.parser.ParserConfig;
					public getInput(): string;
					public parseObject(param0: java.util.Map<any,any>, param1: any): any;
					public setDateFormat(param0: string): void;
					public checkListResolve(param0: java.util.Collection<any>): void;
					public isEnabled(param0: com.alibaba.fastjson.parser.Feature): boolean;
					public parseArray(param0: java.lang.reflect.Type, param1: java.util.Collection<any>, param2: any): void;
					public setContext(param0: com.alibaba.fastjson.parser.ParseContext, param1: any, param2: any): com.alibaba.fastjson.parser.ParseContext;
					public setContext(param0: com.alibaba.fastjson.parser.ParseContext): void;
					public getExtraProcessors(): java.util.List<com.alibaba.fastjson.parser.deserializer.ExtraProcessor>;
					public constructor(param0: com.alibaba.fastjson.parser.JSONLexer, param1: com.alibaba.fastjson.parser.ParserConfig);
					public getSymbolTable(): com.alibaba.fastjson.parser.SymbolTable;
					public constructor(param0: androidNative.Array<string>, param1: number, param2: com.alibaba.fastjson.parser.ParserConfig, param3: number);
					public accept(param0: number, param1: number): void;
					public getLastResolveTask(): com.alibaba.fastjson.parser.DefaultJSONParser.ResolveTask;
					public accept(param0: number): void;
					public parseArray(param0: androidNative.Array<java.lang.reflect.Type>): androidNative.Array<any>;
					public parseKey(): any;
					public parseArrayWithType(param0: java.lang.reflect.Type): any;
					public constructor(param0: string, param1: com.alibaba.fastjson.parser.ParserConfig, param2: number);
					public parseObject(param0: java.lang.reflect.Type): any;
					public getObject(param0: string): any;
					public checkMapResolve(param0: java.util.Map<any,any>, param1: string): void;
					public addResolveTask(param0: com.alibaba.fastjson.parser.DefaultJSONParser.ResolveTask): void;
					public constructor(param0: com.alibaba.fastjson.parser.JSONLexer);
					public handleResovleTask(param0: any): void;
					public setDateFomrat(param0: java.text.DateFormat): void;
					public getResolveStatus(): number;
				}
				export module DefaultJSONParser {
					export class ResolveTask {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.DefaultJSONParser.ResolveTask>;
						public setOwnerContext(param0: com.alibaba.fastjson.parser.ParseContext): void;
						public setFieldDeserializer(param0: com.alibaba.fastjson.parser.deserializer.FieldDeserializer): void;
						public getFieldDeserializer(): com.alibaba.fastjson.parser.deserializer.FieldDeserializer;
						public getContext(): com.alibaba.fastjson.parser.ParseContext;
						public constructor(param0: com.alibaba.fastjson.parser.ParseContext, param1: string);
						public getReferenceValue(): string;
						public getOwnerContext(): com.alibaba.fastjson.parser.ParseContext;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export class Feature {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.Feature>;
					public static AutoCloseSource: com.alibaba.fastjson.parser.Feature;
					public static AllowComment: com.alibaba.fastjson.parser.Feature;
					public static AllowUnQuotedFieldNames: com.alibaba.fastjson.parser.Feature;
					public static AllowSingleQuotes: com.alibaba.fastjson.parser.Feature;
					public static InternFieldNames: com.alibaba.fastjson.parser.Feature;
					public static AllowISO8601DateFormat: com.alibaba.fastjson.parser.Feature;
					public static AllowArbitraryCommas: com.alibaba.fastjson.parser.Feature;
					public static UseBigDecimal: com.alibaba.fastjson.parser.Feature;
					public static IgnoreNotMatch: com.alibaba.fastjson.parser.Feature;
					public static SortFeidFastMatch: com.alibaba.fastjson.parser.Feature;
					public static DisableASM: com.alibaba.fastjson.parser.Feature;
					public static DisableCircularReferenceDetect: com.alibaba.fastjson.parser.Feature;
					public static InitStringFieldAsEmpty: com.alibaba.fastjson.parser.Feature;
					public static SupportArrayToBean: com.alibaba.fastjson.parser.Feature;
					public static config(param0: number, param1: com.alibaba.fastjson.parser.Feature, param2: boolean): number;
					public static isEnabled(param0: number, param1: com.alibaba.fastjson.parser.Feature): boolean;
					public static of(param0: androidNative.Array<com.alibaba.fastjson.parser.Feature>): number;
					public static values(): androidNative.Array<com.alibaba.fastjson.parser.Feature>;
					public getMask(): number;
					public static valueOf(param0: string): com.alibaba.fastjson.parser.Feature;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export class JSONLexer {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.JSONLexer>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.parser.JSONLexer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						token(): number;
						tokenName(): string;
						skipWhitespace(): void;
						nextToken(): void;
						nextToken(param0: number): void;
						getCurrent(): string;
						next(): string;
						scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable): string;
						scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
						resetStringPosition(): void;
						scanNumber(): void;
						pos(): number;
						integerValue(): java.lang.Number;
						decimalValue(): java.math.BigDecimal;
						decimalValue(param0: boolean): java.lang.Number;
						scanSymbolUnQuoted(param0: com.alibaba.fastjson.parser.SymbolTable): string;
						stringVal(): string;
						isEnabled(param0: com.alibaba.fastjson.parser.Feature): boolean;
						config(param0: com.alibaba.fastjson.parser.Feature, param1: boolean): void;
						scanString(): void;
						intValue(): number;
						nextTokenWithColon(): void;
						nextTokenWithColon(param0: number): void;
						isBlankInput(): boolean;
						getBufferPosition(): number;
						close(): void;
						longValue(): number;
						isRef(): boolean;
						numberString(): string;
						bytesValue(): androidNative.Array<number>;
						floatValue(): number;
						scanLong(param0: string): number;
						scanInt(param0: string): number;
						scanString(param0: string): string;
						scanEnum(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.parser.SymbolTable, param2: string): java.lang.Enum<any>;
						scanSymbolWithSeperator(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
					});
					public constructor();
					public static VALUE: number;
					public static END: number;
					public static OBJECT: number;
					public static UNKOWN: number;
					public static NOT_MATCH: number;
					public static NOT_MATCH_NAME: number;
					public static ARRAY: number;
					public static EOI: number;
					public bytesValue(): androidNative.Array<number>;
					public token(): number;
					public scanEnum(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.parser.SymbolTable, param2: string): java.lang.Enum<any>;
					public scanSymbolWithSeperator(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
					public nextToken(param0: number): void;
					public config(param0: com.alibaba.fastjson.parser.Feature, param1: boolean): void;
					public scanString(): void;
					public skipWhitespace(): void;
					public isBlankInput(): boolean;
					public isEnabled(param0: com.alibaba.fastjson.parser.Feature): boolean;
					public resetStringPosition(): void;
					public intValue(): number;
					public numberString(): string;
					public scanString(param0: string): string;
					public tokenName(): string;
					public close(): void;
					public isRef(): boolean;
					public scanNumber(): void;
					public scanInt(param0: string): number;
					public scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable): string;
					public decimalValue(): java.math.BigDecimal;
					public decimalValue(param0: boolean): java.lang.Number;
					public nextToken(): void;
					public nextTokenWithColon(): void;
					public pos(): number;
					public floatValue(): number;
					public next(): string;
					public stringVal(): string;
					public scanSymbolUnQuoted(param0: com.alibaba.fastjson.parser.SymbolTable): string;
					public integerValue(): java.lang.Number;
					public nextTokenWithColon(param0: number): void;
					public longValue(): number;
					public scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
					public getBufferPosition(): number;
					public getCurrent(): string;
					public scanLong(param0: string): number;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export abstract class JSONLexerBase extends com.alibaba.fastjson.parser.JSONLexer {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.JSONLexerBase>;
					public features: number;
					public ch: string;
					public bp: number;
					public eofPos: number;
					public sbuf: androidNative.Array<string>;
					public sp: number;
					public np: number;
					public hasSpecial: boolean;
					public calendar: java.util.Calendar;
					public matchStat: number;
					public keywods: java.util.Map<string,java.lang.Integer>;
					public static typeFieldName: androidNative.Array<string>;
					public static whitespaceFlags: androidNative.Array<boolean>;
					public static MULTMIN_RADIX_TEN: number;
					public static N_MULTMAX_RADIX_TEN: number;
					public static INT_MULTMIN_RADIX_TEN: number;
					public static INT_N_MULTMAX_RADIX_TEN: number;
					public static digits: androidNative.Array<number>;
					public bytesValue(): androidNative.Array<number>;
					public token(): number;
					public scanEnum(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.parser.SymbolTable, param2: string): java.lang.Enum<any>;
					public nextToken(param0: number): void;
					public config(param0: com.alibaba.fastjson.parser.Feature, param1: boolean): void;
					public getCalendar(): java.util.Calendar;
					public skipWhitespace(): void;
					public isBlankInput(): boolean;
					public resetStringPosition(): void;
					public indexOf(param0: string, param1: number): number;
					public numberString(): string;
					public isEOF(): boolean;
					public constructor();
					public getKeyword(param0: string): java.lang.Integer;
					public tokenName(): string;
					public close(): void;
					public isRef(): boolean;
					public stringDefaultValue(): string;
					public nextTokenWithChar(param0: string): void;
					public nextTokenWithColon(): void;
					public copyTo(param0: number, param1: number, param2: androidNative.Array<string>): void;
					public next(): string;
					public nextIdent(): void;
					public scanFalse(): void;
					public lexError(param0: string, param1: androidNative.Array<any>): void;
					public integerValue(): java.lang.Number;
					public nextTokenWithColon(param0: number): void;
					public longValue(): number;
					public scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
					public getBufferPosition(): number;
					public subString(param0: number, param1: number): string;
					public scanTrue(): void;
					public doubleValue(): number;
					public scanSymbolWithSeperator(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
					public scanSet(): void;
					public scanString(): void;
					public isEnabled(param0: com.alibaba.fastjson.parser.Feature): boolean;
					public putChar(param0: string): void;
					public intValue(): number;
					public scanString(param0: string): string;
					public scanNumber(): void;
					public scanUndefined(): void;
					public scanInt(param0: string): number;
					public scanNullOrNew(): void;
					public scanIdent(): void;
					public scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable): string;
					public decimalValue(): java.math.BigDecimal;
					public decimalValue(param0: boolean): java.lang.Number;
					public nextToken(): void;
					public arrayCopy(param0: number, param1: androidNative.Array<string>, param2: number, param3: number): void;
					public pos(): number;
					public floatValue(): number;
					public scanTreeSet(): void;
					public stringVal(): string;
					public charAt(param0: number): string;
					public scanSymbolUnQuoted(param0: com.alibaba.fastjson.parser.SymbolTable): string;
					public addSymbol(param0: number, param1: number, param2: number, param3: com.alibaba.fastjson.parser.SymbolTable): string;
					public getCurrent(): string;
					public scanLong(param0: string): number;
					public static isWhitespace(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export class JSONReaderScanner extends com.alibaba.fastjson.parser.JSONLexerBase {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.JSONReaderScanner>;
					public static BUF_INIT_LEN: number;
					public bytesValue(): androidNative.Array<number>;
					public constructor(param0: java.io.Reader, param1: number);
					public token(): number;
					public scanEnum(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.parser.SymbolTable, param2: string): java.lang.Enum<any>;
					public constructor(param0: string);
					public constructor(param0: java.io.Reader);
					public constructor(param0: androidNative.Array<string>, param1: number);
					public nextToken(param0: number): void;
					public config(param0: com.alibaba.fastjson.parser.Feature, param1: boolean): void;
					public skipWhitespace(): void;
					public isBlankInput(): boolean;
					public resetStringPosition(): void;
					public indexOf(param0: string, param1: number): number;
					public numberString(): string;
					public isEOF(): boolean;
					public constructor();
					public close(): void;
					public tokenName(): string;
					public isRef(): boolean;
					public nextTokenWithColon(): void;
					public copyTo(param0: number, param1: number, param2: androidNative.Array<string>): void;
					public next(): string;
					public integerValue(): java.lang.Number;
					public nextTokenWithColon(param0: number): void;
					public longValue(): number;
					public scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
					public getBufferPosition(): number;
					public subString(param0: number, param1: number): string;
					public scanSymbolWithSeperator(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
					public scanString(): void;
					public isEnabled(param0: com.alibaba.fastjson.parser.Feature): boolean;
					public intValue(): number;
					public scanString(param0: string): string;
					public constructor(param0: string, param1: number);
					public scanNumber(): void;
					public scanInt(param0: string): number;
					public constructor(param0: androidNative.Array<string>, param1: number, param2: number);
					public scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable): string;
					public decimalValue(): java.math.BigDecimal;
					public decimalValue(param0: boolean): java.lang.Number;
					public nextToken(): void;
					public arrayCopy(param0: number, param1: androidNative.Array<string>, param2: number, param3: number): void;
					public pos(): number;
					public floatValue(): number;
					public stringVal(): string;
					public charAt(param0: number): string;
					public scanSymbolUnQuoted(param0: com.alibaba.fastjson.parser.SymbolTable): string;
					public addSymbol(param0: number, param1: number, param2: number, param3: com.alibaba.fastjson.parser.SymbolTable): string;
					public getCurrent(): string;
					public scanLong(param0: string): number;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export class JSONScanner extends com.alibaba.fastjson.parser.JSONLexerBase {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.JSONScanner>;
					public static typeFieldName: androidNative.Array<string>;
					public ISO8601_LEN_0: number;
					public ISO8601_LEN_1: number;
					public ISO8601_LEN_2: number;
					public bytesValue(): androidNative.Array<number>;
					public scanISO8601DateIfMatch(param0: boolean): boolean;
					public token(): number;
					public scanEnum(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.parser.SymbolTable, param2: string): java.lang.Enum<any>;
					public constructor(param0: string);
					public constructor(param0: androidNative.Array<string>, param1: number);
					public nextToken(param0: number): void;
					public config(param0: com.alibaba.fastjson.parser.Feature, param1: boolean): void;
					public skipWhitespace(): void;
					public isBlankInput(): boolean;
					public resetStringPosition(): void;
					public indexOf(param0: string, param1: number): number;
					public numberString(): string;
					public isEOF(): boolean;
					public constructor();
					public tokenName(): string;
					public close(): void;
					public isRef(): boolean;
					public scanISO8601DateIfMatch(): boolean;
					public nextTokenWithColon(): void;
					public copyTo(param0: number, param1: number, param2: androidNative.Array<string>): void;
					public next(): string;
					public integerValue(): java.lang.Number;
					public nextTokenWithColon(param0: number): void;
					public longValue(): number;
					public scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
					public getBufferPosition(): number;
					public subString(param0: number, param1: number): string;
					public scanSymbolWithSeperator(param0: com.alibaba.fastjson.parser.SymbolTable, param1: string): string;
					public scanString(): void;
					public isEnabled(param0: com.alibaba.fastjson.parser.Feature): boolean;
					public intValue(): number;
					public scanString(param0: string): string;
					public constructor(param0: string, param1: number);
					public scanNumber(): void;
					public scanInt(param0: string): number;
					public constructor(param0: androidNative.Array<string>, param1: number, param2: number);
					public scanSymbol(param0: com.alibaba.fastjson.parser.SymbolTable): string;
					public decimalValue(): java.math.BigDecimal;
					public decimalValue(param0: boolean): java.lang.Number;
					public nextToken(): void;
					public arrayCopy(param0: number, param1: androidNative.Array<string>, param2: number, param3: number): void;
					public pos(): number;
					public floatValue(): number;
					public stringVal(): string;
					public charAt(param0: number): string;
					public scanSymbolUnQuoted(param0: com.alibaba.fastjson.parser.SymbolTable): string;
					public addSymbol(param0: number, param1: number, param2: number, param3: com.alibaba.fastjson.parser.SymbolTable): string;
					public getCurrent(): string;
					public scanLong(param0: string): number;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export class JSONToken {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.JSONToken>;
					public static ERROR: number;
					public static LITERAL_INT: number;
					public static LITERAL_FLOAT: number;
					public static LITERAL_STRING: number;
					public static LITERAL_ISO8601_DATE: number;
					public static TRUE: number;
					public static FALSE: number;
					public static NULL: number;
					public static NEW: number;
					public static LPAREN: number;
					public static RPAREN: number;
					public static LBRACE: number;
					public static RBRACE: number;
					public static LBRACKET: number;
					public static RBRACKET: number;
					public static COMMA: number;
					public static COLON: number;
					public static IDENTIFIER: number;
					public static FIELD_NAME: number;
					public static EOF: number;
					public static SET: number;
					public static TREE_SET: number;
					public static UNDEFINED: number;
					public constructor();
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export class ParseContext {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.ParseContext>;
					public getPath(): string;
					public toString(): string;
					public getType(): java.lang.reflect.Type;
					public setObject(param0: any): void;
					public getParentContext(): com.alibaba.fastjson.parser.ParseContext;
					public constructor(param0: com.alibaba.fastjson.parser.ParseContext, param1: any, param2: any);
					public getObject(): any;
					public setType(param0: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export class ParserConfig {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.ParserConfig>;
					public symbolTable: com.alibaba.fastjson.parser.SymbolTable;
					public getDeserializer(param0: java.lang.reflect.Type): com.alibaba.fastjson.parser.deserializer.ObjectDeserializer;
					public createFieldDeserializer(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.util.FieldInfo): com.alibaba.fastjson.parser.deserializer.FieldDeserializer;
					public getDeserializer(param0: com.alibaba.fastjson.util.FieldInfo): com.alibaba.fastjson.parser.deserializer.ObjectDeserializer;
					public getFieldDeserializers(param0: java.lang.Class<any>): java.util.Map<string,com.alibaba.fastjson.parser.deserializer.FieldDeserializer>;
					public createJavaBeanDeserializer(param0: java.lang.Class<any>, param1: java.lang.reflect.Type): com.alibaba.fastjson.parser.deserializer.ObjectDeserializer;
					public getDerializers(): com.alibaba.fastjson.util.IdentityHashMap<java.lang.reflect.Type,com.alibaba.fastjson.parser.deserializer.ObjectDeserializer>;
					public constructor();
					public putDeserializer(param0: java.lang.reflect.Type, param1: com.alibaba.fastjson.parser.deserializer.ObjectDeserializer): void;
					public static getGlobalInstance(): com.alibaba.fastjson.parser.ParserConfig;
					public getSymbolTable(): com.alibaba.fastjson.parser.SymbolTable;
					public getDeserializer(param0: java.lang.Class<any>, param1: java.lang.reflect.Type): com.alibaba.fastjson.parser.deserializer.ObjectDeserializer;
					public isPrimitive(param0: java.lang.Class<any>): boolean;
					public static getField(param0: java.lang.Class<any>, param1: string): java.lang.reflect.Field;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export class SymbolTable {
					public static class: java.lang.Class<com.alibaba.fastjson.parser.SymbolTable>;
					public static DEFAULT_TABLE_SIZE: number;
					public static MAX_BUCKET_LENTH: number;
					public static MAX_SIZE: number;
					public static hash(param0: androidNative.Array<string>, param1: number, param2: number): number;
					public constructor();
					public addSymbol(param0: string, param1: number, param2: number, param3: number): string;
					public addSymbol(param0: androidNative.Array<string>, param1: number, param2: number): string;
					public size(): number;
					public constructor(param0: number);
					public addSymbol(param0: androidNative.Array<string>, param1: number, param2: number, param3: number): string;
				}
				export module SymbolTable {
					export class Entry {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.SymbolTable.Entry>;
						public symbol: string;
						public hashCode: number;
						public characters: androidNative.Array<string>;
						public bytes: androidNative.Array<number>;
						public next: com.alibaba.fastjson.parser.SymbolTable.Entry;
						public constructor(param0: androidNative.Array<string>, param1: number, param2: number, param3: number, param4: com.alibaba.fastjson.parser.SymbolTable.Entry);
						public constructor(param0: string, param1: number, param2: number, param3: number, param4: com.alibaba.fastjson.parser.SymbolTable.Entry);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export abstract class AbstractDateDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.AbstractDateDeserializer>;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
						public cast(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any, param3: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class ArrayDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.ArrayDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.ArrayDeserializer;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class ArrayListTypeFieldDeserializer extends com.alibaba.fastjson.parser.deserializer.FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.ArrayListTypeFieldDeserializer>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public getFastMatchToken(): number;
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.util.FieldInfo);
						public parseArray(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: java.util.Collection<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class BooleanFieldDeserializer extends com.alibaba.fastjson.parser.deserializer.FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.BooleanFieldDeserializer>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public getFastMatchToken(): number;
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.util.FieldInfo);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class CharArrayDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.CharArrayDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.CharArrayDeserializer;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
						public static deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class ClassDerializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.ClassDerializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.ClassDerializer;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class CollectionDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.CollectionDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.CollectionDeserializer;
						public constructor();
						public getRawClass(param0: java.lang.reflect.Type): java.lang.Class<any>;
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class CollectionResolveFieldDeserializer extends com.alibaba.fastjson.parser.deserializer.FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.CollectionResolveFieldDeserializer>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public setValue(param0: any, param1: string): void;
						public setValue(param0: any, param1: any): void;
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public constructor(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.util.Collection<any>);
						public setValue(param0: any, param1: boolean): void;
						public setValue(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class DateDeserializer extends com.alibaba.fastjson.parser.deserializer.AbstractDateDeserializer implements com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.DateDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.DateDeserializer;
						public constructor();
						public getFastMatchToken(): number;
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public cast(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any, param3: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class DateFormatDeserializer extends com.alibaba.fastjson.parser.deserializer.AbstractDateDeserializer implements com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.DateFormatDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.DateFormatDeserializer;
						public constructor();
						public getFastMatchToken(): number;
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public cast(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any, param3: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class DefaultFieldDeserializer extends com.alibaba.fastjson.parser.deserializer.FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.DefaultFieldDeserializer>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public getFastMatchToken(): number;
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.util.FieldInfo);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class EnumDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.EnumDeserializer>;
						public constructor(param0: java.lang.Class<any>);
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class ExtraProcessor extends com.alibaba.fastjson.parser.deserializer.ParseProcess {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.ExtraProcessor>;
						/**
						 * Constructs a new instance of the com.alibaba.fastjson.parser.deserializer.ExtraProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							processExtra(param0: any, param1: string, param2: any): void;
						});
						public constructor();
						public processExtra(param0: any, param1: string, param2: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class ExtraTypeProvider extends com.alibaba.fastjson.parser.deserializer.ParseProcess {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.ExtraTypeProvider>;
						/**
						 * Constructs a new instance of the com.alibaba.fastjson.parser.deserializer.ExtraTypeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getExtraType(param0: any, param1: string): java.lang.reflect.Type;
						});
						public constructor();
						public getExtraType(param0: any, param1: string): java.lang.reflect.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export abstract class FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.FieldDeserializer>;
						public fieldInfo: com.alibaba.fastjson.util.FieldInfo;
						public clazz: java.lang.Class<any>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public getFastMatchToken(): number;
						public setValue(param0: any, param1: string): void;
						public setValue(param0: any, param1: any): void;
						public getField(): java.lang.reflect.Field;
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public getFieldType(): java.lang.reflect.Type;
						public getFieldClass(): java.lang.Class<any>;
						public getMethod(): java.lang.reflect.Method;
						public setValue(param0: any, param1: boolean): void;
						public setValue(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class IntegerFieldDeserializer extends com.alibaba.fastjson.parser.deserializer.FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.IntegerFieldDeserializer>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public getFastMatchToken(): number;
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.util.FieldInfo);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class JSONArrayDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.JSONArrayDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.JSONArrayDeserializer;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class JSONObjectDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.JSONObjectDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.JSONObjectDeserializer;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class JavaBeanDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.JavaBeanDeserializer>;
						public getFieldDeserializerMap(): java.util.Map<string,com.alibaba.fastjson.parser.deserializer.FieldDeserializer>;
						public createInstance(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type): any;
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
						public isSupportArrayToBean(param0: com.alibaba.fastjson.parser.JSONLexer): boolean;
						public createFieldDeserializer(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.util.FieldInfo): com.alibaba.fastjson.parser.deserializer.FieldDeserializer;
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>);
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any, param3: any): any;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: string, param2: any, param3: java.lang.reflect.Type, param4: java.util.Map<string,any>): boolean;
						public deserialzeArrayMapping(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any, param3: any): any;
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: java.lang.reflect.Type);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class JavaObjectDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.JavaObjectDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.JavaObjectDeserializer;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class ListResolveFieldDeserializer extends com.alibaba.fastjson.parser.deserializer.FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.ListResolveFieldDeserializer>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public setValue(param0: any, param1: string): void;
						public setValue(param0: any, param1: any): void;
						public constructor(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.util.List<any>, param2: number);
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public setValue(param0: any, param1: boolean): void;
						public setValue(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class LongFieldDeserializer extends com.alibaba.fastjson.parser.deserializer.FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.LongFieldDeserializer>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public getFastMatchToken(): number;
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.util.FieldInfo);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class MapDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.MapDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.MapDeserializer;
						public constructor();
						public createMap(param0: java.lang.reflect.Type): java.util.Map<any,any>;
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
						public static parseMap(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.util.Map<string,any>, param2: java.lang.reflect.Type, param3: any): java.util.Map<any,any>;
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any, param3: java.util.Map<any,any>): any;
						public static parseMap(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.util.Map<any,any>, param2: java.lang.reflect.Type, param3: java.lang.reflect.Type, param4: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class MapResolveFieldDeserializer extends com.alibaba.fastjson.parser.deserializer.FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.MapResolveFieldDeserializer>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public setValue(param0: any, param1: string): void;
						public setValue(param0: any, param1: any): void;
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public setValue(param0: any, param1: boolean): void;
						public setValue(param0: any, param1: number): void;
						public constructor(param0: java.util.Map<any,any>, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class NumberDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.NumberDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.NumberDeserializer;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.ObjectDeserializer>;
						/**
						 * Constructs a new instance of the com.alibaba.fastjson.parser.deserializer.ObjectDeserializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
							getFastMatchToken(): number;
						});
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class ParseProcess {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.ParseProcess>;
						/**
						 * Constructs a new instance of the com.alibaba.fastjson.parser.deserializer.ParseProcess interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class SqlDateDeserializer extends com.alibaba.fastjson.parser.deserializer.AbstractDateDeserializer implements com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.SqlDateDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.SqlDateDeserializer;
						public constructor();
						public getFastMatchToken(): number;
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public cast(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any, param3: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class StackTraceElementDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.StackTraceElementDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.StackTraceElementDeserializer;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class StringFieldDeserializer extends com.alibaba.fastjson.parser.deserializer.FieldDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.StringFieldDeserializer>;
						public parseField(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: java.lang.reflect.Type, param3: java.util.Map<string,any>): void;
						public getFastMatchToken(): number;
						public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.util.FieldInfo);
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.util.FieldInfo);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class ThrowableDeserializer extends com.alibaba.fastjson.parser.deserializer.JavaBeanDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.ThrowableDeserializer>;
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>);
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any, param3: any): any;
						public constructor(param0: com.alibaba.fastjson.parser.ParserConfig, param1: java.lang.Class<any>, param2: java.lang.reflect.Type);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class TimeDeserializer extends com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.TimeDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.TimeDeserializer;
						public constructor();
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public getFastMatchToken(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module parser {
				export module deserializer {
					export class TimestampDeserializer extends com.alibaba.fastjson.parser.deserializer.AbstractDateDeserializer implements com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
						public static class: java.lang.Class<com.alibaba.fastjson.parser.deserializer.TimestampDeserializer>;
						public static instance: com.alibaba.fastjson.parser.deserializer.TimestampDeserializer;
						public constructor();
						public getFastMatchToken(): number;
						public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
						public cast(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any, param3: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export abstract class AfterFilter extends com.alibaba.fastjson.serializer.SerializeFilter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.AfterFilter>;
					public constructor();
					public writeAfter(param0: any): void;
					public writeKeyValue(param0: string, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ArraySerializer>;
					public constructor(param0: java.lang.Class<any>, param1: com.alibaba.fastjson.serializer.ObjectSerializer);
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export abstract class BeforeFilter extends com.alibaba.fastjson.serializer.SerializeFilter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.BeforeFilter>;
					public constructor();
					public writeBefore(param0: any): void;
					public writeKeyValue(param0: string, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class BigDecimalCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.BigDecimalCodec>;
					public static instance: com.alibaba.fastjson.serializer.BigDecimalCodec;
					public constructor();
					public getFastMatchToken(): number;
					public static deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser): any;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class BigIntegerCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.BigIntegerCodec>;
					public static instance: com.alibaba.fastjson.serializer.BigIntegerCodec;
					public constructor();
					public getFastMatchToken(): number;
					public static deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser): any;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class BooleanArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.BooleanArraySerializer>;
					public static instance: com.alibaba.fastjson.serializer.BooleanArraySerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class BooleanCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.BooleanCodec>;
					public static instance: com.alibaba.fastjson.serializer.BooleanCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ByteArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ByteArraySerializer>;
					public static instance: com.alibaba.fastjson.serializer.ByteArraySerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class CalendarCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.CalendarCodec>;
					public static instance: com.alibaba.fastjson.serializer.CalendarCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class CharArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.CharArraySerializer>;
					public static instance: com.alibaba.fastjson.serializer.CharArraySerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class CharacterCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.CharacterCodec>;
					public static instance: com.alibaba.fastjson.serializer.CharacterCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class CharsetCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.CharsetCodec>;
					public static instance: com.alibaba.fastjson.serializer.CharsetCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ClassSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ClassSerializer>;
					public static instance: com.alibaba.fastjson.serializer.ClassSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class CollectionSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.CollectionSerializer>;
					public static instance: com.alibaba.fastjson.serializer.CollectionSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class CurrencyCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.CurrencyCodec>;
					public static instance: com.alibaba.fastjson.serializer.CurrencyCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class DateFormatSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.DateFormatSerializer>;
					public static instance: com.alibaba.fastjson.serializer.DateFormatSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class DateSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.DateSerializer>;
					public static instance: com.alibaba.fastjson.serializer.DateSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class DoubleArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.DoubleArraySerializer>;
					public static instance: com.alibaba.fastjson.serializer.DoubleArraySerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class DoubleSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.DoubleSerializer>;
					public static instance: com.alibaba.fastjson.serializer.DoubleSerializer;
					public constructor(param0: java.text.DecimalFormat);
					public constructor(param0: string);
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class EnumSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.EnumSerializer>;
					public static instance: com.alibaba.fastjson.serializer.EnumSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class EnumerationSeriliazer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.EnumerationSeriliazer>;
					public static instance: com.alibaba.fastjson.serializer.EnumerationSeriliazer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ExceptionSerializer extends com.alibaba.fastjson.serializer.JavaBeanSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ExceptionSerializer>;
					public constructor(param0: java.lang.Class<any>);
					public constructor(param0: java.lang.Class<any>, param1: androidNative.Array<string>);
					public isWriteClassName(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: java.lang.reflect.Type, param3: any): boolean;
					public constructor(param0: java.lang.Class<any>, param1: java.util.Map<string,string>);
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export abstract class FieldSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.FieldSerializer>;
					public fieldInfo: com.alibaba.fastjson.util.FieldInfo;
					public writeProperty(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any): void;
					public constructor(param0: com.alibaba.fastjson.util.FieldInfo);
					public isWriteNull(): boolean;
					public getName(): string;
					public getMethod(): java.lang.reflect.Method;
					public getPropertyValue(param0: any): any;
					public getField(): java.lang.reflect.Field;
					public writePrefix(param0: com.alibaba.fastjson.serializer.JSONSerializer): void;
					public writeValue(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class FilterUtils {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.FilterUtils>;
					public static writeBefore(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: string): string;
					public static processKey(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: string, param3: any): string;
					public constructor();
					public static writeAfter(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: string): string;
					public static processValue(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: string, param3: any): any;
					public static processExtra(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: string, param3: any): void;
					public static applyName(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: string): boolean;
					public static apply(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: string, param3: any): boolean;
					public static getExtratype(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: any, param2: string): java.lang.reflect.Type;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class FloatArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.FloatArraySerializer>;
					public static instance: com.alibaba.fastjson.serializer.FloatArraySerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class FloatCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.FloatCodec>;
					public static instance: com.alibaba.fastjson.serializer.FloatCodec;
					public constructor();
					public getFastMatchToken(): number;
					public static deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser): any;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class InetAddressCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.InetAddressCodec>;
					public static instance: com.alibaba.fastjson.serializer.InetAddressCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class InetSocketAddressCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.InetSocketAddressCodec>;
					public static instance: com.alibaba.fastjson.serializer.InetSocketAddressCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class IntArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.IntArraySerializer>;
					public static instance: com.alibaba.fastjson.serializer.IntArraySerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class IntegerCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.IntegerCodec>;
					public static instance: com.alibaba.fastjson.serializer.IntegerCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class JSONAwareSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.JSONAwareSerializer>;
					public static instance: com.alibaba.fastjson.serializer.JSONAwareSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class JSONLibDataFormatSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.JSONLibDataFormatSerializer>;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class JSONSerializable {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.JSONSerializable>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.serializer.JSONSerializable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: java.lang.reflect.Type): void;
					});
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class JSONSerializableSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.JSONSerializableSerializer>;
					public static instance: com.alibaba.fastjson.serializer.JSONSerializableSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class JSONSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.JSONSerializer>;
					public getAfterFilters(): java.util.List<com.alibaba.fastjson.serializer.AfterFilter>;
					public getSerialContext(param0: any): com.alibaba.fastjson.serializer.SerialContext;
					public getPropertyFiltersDirect(): java.util.List<com.alibaba.fastjson.serializer.PropertyFilter>;
					public getAfterFiltersDirect(): java.util.List<com.alibaba.fastjson.serializer.AfterFilter>;
					public setDateFormat(param0: string): void;
					public getValueFilters(): java.util.List<com.alibaba.fastjson.serializer.ValueFilter>;
					public write(param0: any): void;
					public setContext(param0: com.alibaba.fastjson.serializer.SerialContext): void;
					public static write(param0: com.alibaba.fastjson.serializer.SerializeWriter, param1: any): void;
					public getObjectWriter(param0: java.lang.Class<any>): com.alibaba.fastjson.serializer.ObjectSerializer;
					public writeNull(): void;
					public getWriter(): com.alibaba.fastjson.serializer.SerializeWriter;
					public constructor(param0: com.alibaba.fastjson.serializer.SerializeWriter, param1: com.alibaba.fastjson.serializer.SerializeConfig);
					public toString(): string;
					public write(param0: string): void;
					public config(param0: com.alibaba.fastjson.serializer.SerializerFeature, param1: boolean): void;
					public constructor();
					public writeWithFieldName(param0: any, param1: any): void;
					public getValueFiltersDirect(): java.util.List<com.alibaba.fastjson.serializer.ValueFilter>;
					public close(): void;
					public writeWithFormat(param0: any, param1: string): void;
					public containsReference(param0: any): boolean;
					public getNameFilters(): java.util.List<com.alibaba.fastjson.serializer.NameFilter>;
					public isWriteClassName(param0: java.lang.reflect.Type, param1: any): boolean;
					public constructor(param0: com.alibaba.fastjson.serializer.SerializeWriter);
					public incrementIndent(): void;
					public decrementIdent(): void;
					public static write(param0: java.io.Writer, param1: any): void;
					public getMapping(): com.alibaba.fastjson.serializer.SerializeConfig;
					public getContext(): com.alibaba.fastjson.serializer.SerialContext;
					public getPropertyPreFilters(): java.util.List<com.alibaba.fastjson.serializer.PropertyPreFilter>;
					public getIndentCount(): number;
					public getDateFormat(): java.text.DateFormat;
					public writeWithFieldName(param0: any, param1: any, param2: java.lang.reflect.Type, param3: number): void;
					public setDateFormat(param0: java.text.DateFormat): void;
					public println(): void;
					public setContext(param0: com.alibaba.fastjson.serializer.SerialContext, param1: any, param2: any, param3: number): void;
					public getBeforeFilters(): java.util.List<com.alibaba.fastjson.serializer.BeforeFilter>;
					public writeKeyValue(param0: string, param1: string, param2: any): void;
					public getDateFormatPattern(): string;
					public constructor(param0: com.alibaba.fastjson.serializer.SerializeConfig);
					public getBeforeFiltersDirect(): java.util.List<com.alibaba.fastjson.serializer.BeforeFilter>;
					public getNameFiltersDirect(): java.util.List<com.alibaba.fastjson.serializer.NameFilter>;
					public isEnabled(param0: com.alibaba.fastjson.serializer.SerializerFeature): boolean;
					public writeReference(param0: any): void;
					public getPropertyFilters(): java.util.List<com.alibaba.fastjson.serializer.PropertyFilter>;
					public getPropertyPreFiltersDirect(): java.util.List<com.alibaba.fastjson.serializer.PropertyPreFilter>;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class JSONSerializerContext {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.JSONSerializerContext>;
					public static DEFAULT_TABLE_SIZE: number;
					public constructor();
					public put(param0: any): boolean;
					public constructor(param0: number);
				}
				export module JSONSerializerContext {
					export class Entry {
						public static class: java.lang.Class<com.alibaba.fastjson.serializer.JSONSerializerContext.Entry>;
						public hashCode: number;
						public object: any;
						public next: com.alibaba.fastjson.serializer.JSONSerializerContext.Entry;
						public constructor(param0: any, param1: number, param2: com.alibaba.fastjson.serializer.JSONSerializerContext.Entry);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class JSONStreamAwareSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.JSONStreamAwareSerializer>;
					public static instance: com.alibaba.fastjson.serializer.JSONStreamAwareSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class JavaBeanSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.JavaBeanSerializer>;
					public isWriteAsArray(param0: com.alibaba.fastjson.serializer.JSONSerializer): boolean;
					public writeReference(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any): boolean;
					public constructor(param0: java.lang.Class<any>);
					public constructor(param0: java.lang.Class<any>, param1: androidNative.Array<string>);
					public createFieldSerializer(param0: com.alibaba.fastjson.util.FieldInfo): com.alibaba.fastjson.serializer.FieldSerializer;
					public isWriteClassName(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: java.lang.reflect.Type, param3: any): boolean;
					public getGetters(): androidNative.Array<com.alibaba.fastjson.serializer.FieldSerializer>;
					public constructor(param0: java.lang.Class<any>, param1: java.util.Map<string,string>);
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ListSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ListSerializer>;
					public static instance: com.alibaba.fastjson.serializer.ListSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class LocaleCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.LocaleCodec>;
					public static instance: com.alibaba.fastjson.serializer.LocaleCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class LongArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.LongArraySerializer>;
					public static instance: com.alibaba.fastjson.serializer.LongArraySerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class LongCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.LongCodec>;
					public static instance: com.alibaba.fastjson.serializer.LongCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class MapSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.MapSerializer>;
					public static instance: com.alibaba.fastjson.serializer.MapSerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class NameFilter extends com.alibaba.fastjson.serializer.SerializeFilter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.NameFilter>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.serializer.NameFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						process(param0: any, param1: string, param2: any): string;
					});
					public constructor();
					public process(param0: any, param1: string, param2: any): string;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class NumberFieldSerializer extends com.alibaba.fastjson.serializer.FieldSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.NumberFieldSerializer>;
					public writeProperty(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any): void;
					public constructor(param0: com.alibaba.fastjson.util.FieldInfo);
					public writeValue(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ObjectArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ObjectArraySerializer>;
					public static instance: com.alibaba.fastjson.serializer.ObjectArraySerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ObjectFieldSerializer extends com.alibaba.fastjson.serializer.FieldSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ObjectFieldSerializer>;
					public writeProperty(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any): void;
					public constructor(param0: com.alibaba.fastjson.util.FieldInfo);
					public writeValue(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any): void;
				}
				export module ObjectFieldSerializer {
					export class RuntimeSerializerInfo {
						public static class: java.lang.Class<com.alibaba.fastjson.serializer.ObjectFieldSerializer.RuntimeSerializerInfo>;
						public constructor(param0: com.alibaba.fastjson.serializer.ObjectSerializer, param1: java.lang.Class<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ObjectSerializer>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.serializer.ObjectSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
					});
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class PascalNameFilter extends com.alibaba.fastjson.serializer.NameFilter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.PascalNameFilter>;
					public process(param0: any, param1: string, param2: any): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class PatternCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.PatternCodec>;
					public static instance: com.alibaba.fastjson.serializer.PatternCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class PropertyFilter extends com.alibaba.fastjson.serializer.SerializeFilter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.PropertyFilter>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.serializer.PropertyFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: any, param1: string, param2: any): boolean;
					});
					public constructor();
					public apply(param0: any, param1: string, param2: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class PropertyPreFilter extends com.alibaba.fastjson.serializer.SerializeFilter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.PropertyPreFilter>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.serializer.PropertyPreFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: string): boolean;
					});
					public constructor();
					public apply(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class SerialContext {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.SerialContext>;
					public getPath(): string;
					public toString(): string;
					public getParent(): com.alibaba.fastjson.serializer.SerialContext;
					public getFieldName(): any;
					public constructor(param0: com.alibaba.fastjson.serializer.SerialContext, param1: any, param2: any, param3: number);
					public isEnabled(param0: com.alibaba.fastjson.serializer.SerializerFeature): boolean;
					public getObject(): any;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class SerializeConfig extends com.alibaba.fastjson.util.IdentityHashMap<java.lang.reflect.Type,com.alibaba.fastjson.serializer.ObjectSerializer> {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.SerializeConfig>;
					public getTypeKey(): string;
					public static getGlobalInstance(): com.alibaba.fastjson.serializer.SerializeConfig;
					public constructor();
					public createJavaBeanSerializer(param0: java.lang.Class<any>): com.alibaba.fastjson.serializer.ObjectSerializer;
					public setTypeKey(param0: string): void;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class SerializeFilter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.SerializeFilter>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.serializer.SerializeFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class SerializeWriter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.SerializeWriter>;
					public buf: androidNative.Array<string>;
					public count: number;
					public write(param0: boolean): void;
					public writeFieldValue(param0: string, param1: string, param2: string): void;
					public size(): number;
					public expandCapacity(param0: number): void;
					public write(param0: string, param1: number, param2: number): void;
					public writeNull(): void;
					public writeString(param0: string): void;
					public toString(): string;
					public write(param0: string): void;
					public config(param0: com.alibaba.fastjson.serializer.SerializerFeature, param1: boolean): void;
					public constructor();
					public toCharArray(): androidNative.Array<string>;
					public close(): void;
					public writeLong(param0: number): void;
					public append(param0: string): com.alibaba.fastjson.serializer.SerializeWriter;
					public toBytes(param0: string): androidNative.Array<number>;
					public writeLongAndChar(param0: number, param1: string): void;
					public constructor(param0: number);
					public write(param0: androidNative.Array<string>, param1: number, param2: number): void;
					public writeTo(param0: java.io.Writer): void;
					public reset(): void;
					public constructor(param0: java.io.Writer, param1: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>);
					public writeFieldValue(param0: string, param1: string, param2: number): void;
					public writeFieldName(param0: string): void;
					public append(param0: string, param1: number, param2: number): com.alibaba.fastjson.serializer.SerializeWriter;
					public constructor(param0: java.io.Writer, param1: number);
					public write(param0: number): void;
					public flush(): void;
					public constructor(param0: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>);
					public getBufferLength(): number;
					public writeFieldValue1(param0: string, param1: string, param2: number): void;
					public writeTo(param0: java.io.OutputStream, param1: string): void;
					public writeByteArray(param0: androidNative.Array<number>): void;
					public constructor(param0: java.io.Writer);
					public writeInt(param0: number): void;
					public isEnabled(param0: com.alibaba.fastjson.serializer.SerializerFeature): boolean;
					public writeTo(param0: java.io.OutputStream, param1: java.nio.charset.Charset): void;
					public writeFieldName(param0: string, param1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class SerializerFeature {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.SerializerFeature>;
					public static QuoteFieldNames: com.alibaba.fastjson.serializer.SerializerFeature;
					public static UseSingleQuotes: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteMapNullValue: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteEnumUsingToString: com.alibaba.fastjson.serializer.SerializerFeature;
					public static UseISO8601DateFormat: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteNullListAsEmpty: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteNullStringAsEmpty: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteNullNumberAsZero: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteNullBooleanAsFalse: com.alibaba.fastjson.serializer.SerializerFeature;
					public static SkipTransientField: com.alibaba.fastjson.serializer.SerializerFeature;
					public static SortField: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteTabAsSpecial: com.alibaba.fastjson.serializer.SerializerFeature;
					public static PrettyFormat: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteClassName: com.alibaba.fastjson.serializer.SerializerFeature;
					public static DisableCircularReferenceDetect: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteSlashAsSpecial: com.alibaba.fastjson.serializer.SerializerFeature;
					public static BrowserCompatible: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteDateUseDateFormat: com.alibaba.fastjson.serializer.SerializerFeature;
					public static NotWriteRootClassName: com.alibaba.fastjson.serializer.SerializerFeature;
					public static DisableCheckSpecialChar: com.alibaba.fastjson.serializer.SerializerFeature;
					public static BeanToArray: com.alibaba.fastjson.serializer.SerializerFeature;
					public static WriteNonStringKeyAsString: com.alibaba.fastjson.serializer.SerializerFeature;
					public static NotWriteDefaultValue: com.alibaba.fastjson.serializer.SerializerFeature;
					public getMask(): number;
					public static of(param0: androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>): number;
					public static values(): androidNative.Array<com.alibaba.fastjson.serializer.SerializerFeature>;
					public static isEnabled(param0: number, param1: com.alibaba.fastjson.serializer.SerializerFeature): boolean;
					public static valueOf(param0: string): com.alibaba.fastjson.serializer.SerializerFeature;
					public static config(param0: number, param1: com.alibaba.fastjson.serializer.SerializerFeature, param2: boolean): number;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ShortArraySerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ShortArraySerializer>;
					public static instance: com.alibaba.fastjson.serializer.ShortArraySerializer;
					public constructor();
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class SimpleDateFormatSerializer extends com.alibaba.fastjson.serializer.ObjectSerializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.SimpleDateFormatSerializer>;
					public constructor(param0: string);
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class SimplePropertyPreFilter extends com.alibaba.fastjson.serializer.PropertyPreFilter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.SimplePropertyPreFilter>;
					public constructor(param0: java.lang.Class<any>, param1: androidNative.Array<string>);
					public getIncludes(): java.util.Set<string>;
					public getExcludes(): java.util.Set<string>;
					public constructor(param0: androidNative.Array<string>);
					public apply(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: string): boolean;
					public getClazz(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class StringCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.StringCodec>;
					public static instance: com.alibaba.fastjson.serializer.StringCodec;
					public constructor();
					public getFastMatchToken(): number;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: string): void;
					public static deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser): any;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class TimeZoneCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.TimeZoneCodec>;
					public static instance: com.alibaba.fastjson.serializer.TimeZoneCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class URICodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.URICodec>;
					public static instance: com.alibaba.fastjson.serializer.URICodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class URLCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.URLCodec>;
					public static instance: com.alibaba.fastjson.serializer.URLCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class UUIDCodec implements com.alibaba.fastjson.serializer.ObjectSerializer, com.alibaba.fastjson.parser.deserializer.ObjectDeserializer {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.UUIDCodec>;
					public static instance: com.alibaba.fastjson.serializer.UUIDCodec;
					public constructor();
					public getFastMatchToken(): number;
					public deserialze(param0: com.alibaba.fastjson.parser.DefaultJSONParser, param1: java.lang.reflect.Type, param2: any): any;
					public write(param0: com.alibaba.fastjson.serializer.JSONSerializer, param1: any, param2: any, param3: java.lang.reflect.Type): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module serializer {
				export class ValueFilter extends com.alibaba.fastjson.serializer.SerializeFilter {
					public static class: java.lang.Class<com.alibaba.fastjson.serializer.ValueFilter>;
					/**
					 * Constructs a new instance of the com.alibaba.fastjson.serializer.ValueFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						process(param0: any, param1: string, param2: any): any;
					});
					public constructor();
					public process(param0: any, param1: string, param2: any): any;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module util {
				export class Base64 {
					public static class: java.lang.Class<com.alibaba.fastjson.util.Base64>;
					public static CA: androidNative.Array<string>;
					public static IA: androidNative.Array<number>;
					public constructor();
					public static decodeFast(param0: string): androidNative.Array<number>;
					public static decodeFast(param0: string, param1: number, param2: number): androidNative.Array<number>;
					public static decodeFast(param0: androidNative.Array<string>, param1: number, param2: number): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module util {
				export class DeserializeBeanInfo {
					public static class: java.lang.Class<com.alibaba.fastjson.util.DeserializeBeanInfo>;
					public static getFactoryMethod(param0: java.lang.Class<any>): java.lang.reflect.Method;
					public getSortedFieldList(): java.util.List<com.alibaba.fastjson.util.FieldInfo>;
					public constructor(param0: java.lang.Class<any>);
					public setFactoryMethod(param0: java.lang.reflect.Method): void;
					public getFactoryMethod(): java.lang.reflect.Method;
					public getParserFeatures(): number;
					public getCreatorConstructor(): java.lang.reflect.Constructor<any>;
					public setDefaultConstructor(param0: java.lang.reflect.Constructor<any>): void;
					public static computeSetters(param0: java.lang.Class<any>, param1: java.lang.reflect.Type): com.alibaba.fastjson.util.DeserializeBeanInfo;
					public getDefaultConstructor(): java.lang.reflect.Constructor<any>;
					public static getDefaultConstructor(param0: java.lang.Class<any>): java.lang.reflect.Constructor<any>;
					public add(param0: com.alibaba.fastjson.util.FieldInfo): boolean;
					public static getCreatorConstructor(param0: java.lang.Class<any>): java.lang.reflect.Constructor<any>;
					public getFieldList(): java.util.List<com.alibaba.fastjson.util.FieldInfo>;
					public setCreatorConstructor(param0: java.lang.reflect.Constructor<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module util {
				export class FieldInfo extends java.lang.Comparable<com.alibaba.fastjson.util.FieldInfo> {
					public static class: java.lang.Class<com.alibaba.fastjson.util.FieldInfo>;
					public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
					public getFieldClass(): java.lang.Class<any>;
					public gerQualifiedName(): string;
					public constructor(param0: string, param1: java.lang.reflect.Method, param2: java.lang.reflect.Field, param3: number, param4: number);
					public constructor(param0: string, param1: java.lang.Class<any>, param2: java.lang.Class<any>, param3: java.lang.reflect.Type, param4: java.lang.reflect.Field, param5: number, param6: number);
					public setAccessible(param0: boolean): void;
					public static getFieldType(param0: java.lang.Class<any>, param1: java.lang.reflect.Type, param2: java.lang.reflect.Type): java.lang.reflect.Type;
					public constructor(param0: string, param1: java.lang.reflect.Method, param2: java.lang.reflect.Field);
					public getDeclaringClass(): java.lang.Class<any>;
					public getMember(): java.lang.reflect.Member;
					public getFieldType(): java.lang.reflect.Type;
					public constructor(param0: string, param1: java.lang.reflect.Method, param2: java.lang.reflect.Field, param3: java.lang.Class<any>, param4: java.lang.reflect.Type);
					public toString(): string;
					public constructor(param0: string, param1: java.lang.reflect.Method, param2: java.lang.reflect.Field, param3: java.lang.Class<any>, param4: java.lang.reflect.Type, param5: number, param6: number);
					public getName(): string;
					public getMethod(): java.lang.reflect.Method;
					public compareTo(param0: com.alibaba.fastjson.util.FieldInfo): number;
					public getField(): java.lang.reflect.Field;
					public set(param0: any, param1: any): void;
					public static getInheritGenericType(param0: java.lang.Class<any>, param1: java.lang.reflect.TypeVariable<any>): java.lang.reflect.Type;
					public get(param0: any): any;
					public isGetOnly(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module util {
				export class IOUtils {
					public static class: java.lang.Class<com.alibaba.fastjson.util.IOUtils>;
					public static DIGITS: androidNative.Array<string>;
					public static firstIdentifierFlags: androidNative.Array<boolean>;
					public static identifierFlags: androidNative.Array<boolean>;
					public static specicalFlags_doubleQuotes: androidNative.Array<number>;
					public static specicalFlags_singleQuotes: androidNative.Array<number>;
					public static replaceChars: androidNative.Array<string>;
					public static ASCII_CHARS: androidNative.Array<string>;
					public static close(param0: java.io.Closeable): void;
					public constructor();
					public static stringSize(param0: number): number;
					public static getChars(param0: number, param1: number, param2: androidNative.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module util {
				export class IdentityHashMap<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.alibaba.fastjson.util.IdentityHashMap<any,any>>;
					public static DEFAULT_TABLE_SIZE: number;
					public constructor();
					public put(param0: K, param1: V): boolean;
					public size(): number;
					public constructor(param0: number);
					public get(param0: K): V;
				}
				export module IdentityHashMap {
					export class Entry<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.alibaba.fastjson.util.IdentityHashMap.Entry<any,any>>;
						public hashCode: number;
						public key: K;
						public value: V;
						public next: com.alibaba.fastjson.util.IdentityHashMap.Entry<K,V>;
						public constructor(param0: K, param1: V, param2: number, param3: com.alibaba.fastjson.util.IdentityHashMap.Entry<K,V>);
					}
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module util {
				export class ParameterizedTypeImpl {
					public static class: java.lang.Class<com.alibaba.fastjson.util.ParameterizedTypeImpl>;
					public getActualTypeArguments(): androidNative.Array<java.lang.reflect.Type>;
					public getOwnerType(): java.lang.reflect.Type;
					public constructor(param0: androidNative.Array<java.lang.reflect.Type>, param1: java.lang.reflect.Type, param2: java.lang.reflect.Type);
					public getRawType(): java.lang.reflect.Type;
				}
			}
		}
	}
}

declare module com {
	export module alibaba {
		export module fastjson {
			export module util {
				export class TypeUtils {
					public static class: java.lang.Class<com.alibaba.fastjson.util.TypeUtils>;
					public static compatibleWithJavaBean: boolean;
					public static castToShort(param0: any): java.lang.Short;
					public static castToTimestamp(param0: any): java.sql.Timestamp;
					public static castToJavaBean(param0: any, param1: java.lang.Class<any>): any;
					public static castToBoolean(param0: any): java.lang.Boolean;
					public static getSupperMethodAnnotation(param0: java.lang.Class<any>, param1: java.lang.reflect.Method): com.alibaba.fastjson.annotation.JSONField;
					public static cast(param0: any, param1: java.lang.reflect.ParameterizedType, param2: com.alibaba.fastjson.parser.ParserConfig): any;
					public static getParserFeatures(param0: java.lang.Class<any>): number;
					public static castToBigInteger(param0: any): java.math.BigInteger;
					public static castToJavaBean(param0: java.util.Map<any,any>, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.parser.ParserConfig): any;
					public static computeGetters(param0: java.lang.Class<any>, param1: java.util.Map<string,string>): java.util.List<com.alibaba.fastjson.util.FieldInfo>;
					public static unwrap(param0: java.lang.reflect.Type): java.lang.reflect.Type;
					public static addClassMapping(param0: string, param1: java.lang.Class<any>): void;
					public constructor();
					public static castToDouble(param0: any): java.lang.Double;
					public static clearClassMapping(): void;
					public static decapitalize(param0: string): string;
					public static castToInt(param0: any): java.lang.Integer;
					public static getSerializeFeatures(param0: java.lang.Class<any>): number;
					public static castToDate(param0: any): java.util.Date;
					public static castToSqlDate(param0: any): java.sql.Date;
					public static castToString(param0: any): string;
					public static castToFloat(param0: any): java.lang.Float;
					public static addBaseClassMappings(): void;
					public static loadClass(param0: string): java.lang.Class<any>;
					public static castToBigDecimal(param0: any): java.math.BigDecimal;
					public static isGenericParamType(param0: java.lang.reflect.Type): boolean;
					public static castToBytes(param0: any): androidNative.Array<number>;
					public static computeGetters(param0: java.lang.Class<any>, param1: java.util.Map<string,string>, param2: boolean): java.util.List<com.alibaba.fastjson.util.FieldInfo>;
					public static cast(param0: any, param1: java.lang.reflect.Type, param2: com.alibaba.fastjson.parser.ParserConfig): any;
					public static castToByte(param0: any): java.lang.Byte;
					public static getGenericParamType(param0: java.lang.reflect.Type): java.lang.reflect.Type;
					public static castToLong(param0: any): java.lang.Long;
					public static cast(param0: any, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.parser.ParserConfig): any;
					public static castToChar(param0: any): java.lang.Character;
					public static getClass(param0: java.lang.reflect.Type): java.lang.Class<any>;
					public static castToEnum(param0: any, param1: java.lang.Class<any>, param2: com.alibaba.fastjson.parser.ParserConfig): any;
					public static getField(param0: java.lang.Class<any>, param1: string): java.lang.reflect.Field;
				}
			}
		}
	}
}

//Generics information:
//com.alibaba.fastjson.TypeReference:1
//com.alibaba.fastjson.util.IdentityHashMap:2
//com.alibaba.fastjson.util.IdentityHashMap.Entry:2

