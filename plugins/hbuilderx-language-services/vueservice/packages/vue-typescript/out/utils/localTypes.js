"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.genConstructorOverloads=exports.getTypesCode=exports.typesFileName=void 0;const vue_code_gen_1=require("../../../vue-code-gen");function getTypesCode(e){const n=(0,vue_code_gen_1.getVueLibraryName)(e);return`\nimport * as vue from '${n}';\nimport type {\n\tFunctionalComponent,\n\tEmitsOptions,\n\tDefineComponent,\n\tSetupContext,\n\tObjectDirective,\n\tFunctionDirective,\n} from '${n}';\n${e<2.7?`\nimport type { ExtractPropTypes,UnwrapNestedRefs,ShallowUnwrapRef } from '${n}';\nexport type ExtractPropTypes<O> = ExtractPropTypes<O>;\nexport type ExtractComputedReturns<T extends any> = {\n    [key in keyof T]: T[key] extends {\n        get: (...args: any[]) => infer TReturn;\n    } ? TReturn : T[key] extends (...args: any[]) => infer TReturn ? TReturn : never;\n};\n//unwrap setup return type\nexport type ShallowUnwrapRef<S> = ShallowUnwrapRef<S>;\n//unwrap data return type\nexport type UnwrapNestedRefs<D> = UnwrapNestedRefs<D>;\n`:""}\ntype IsAny<T> = 0 extends 1 & T ? true : false;\nexport type PickNotAny<A, B> = IsAny<A> extends true ? B : A;\ntype AnyArray<T = any> = T[] | readonly T[];\ntype ForableSource<T> = [\n\tT extends { [Symbol.iterator](): IterableIterator<infer T1> } ? T1 : T[keyof T], // item\n\ttypeof Symbol.iterator extends keyof T ? number : T extends T ? keyof T : never, // key\n\ttypeof Symbol.iterator extends keyof T ? undefined : number, // index\n][];\nexport type __VLS_CurrentPageType = {__VLS_type:boolean};\nexport type GlobalComponents =\n\tPickNotAny<import('vue').GlobalComponents, {}>\n\t& PickNotAny<import('@vue/runtime-core').GlobalComponents, {}>\n\t& PickNotAny<import('@vue/runtime-dom').GlobalComponents, {}>\n\t& Pick<typeof vue,\n\t\t'Transition'\n\t\t| 'TransitionGroup'\n\t\t| 'KeepAlive'\n\t\t| 'Suspense'\n\t\t| 'Teleport'\n\t>;\nexport declare function getVforSourceType<T>(source: T): ForableSource<NonNullable<T extends number ? number[] : T extends string ? string[] : T>>;\nexport declare function getNameOption<T>(t?: T): T extends { name: infer N } ? N : undefined;\nexport declare function directiveFunction<T>(dir: T):\n\tT extends ObjectDirective<infer E, infer V> ? undefined extends V ? (value?: V) => void : (value: V) => void\n\t: T extends FunctionDirective<infer E, infer V> ? undefined extends V ? (value?: V) => void : (value: V) => void\n\t: T;\nexport declare function withScope<T, K>(ctx: T, scope: K): ctx is T & K;\nexport declare function makeOptional<T>(t: T): { [K in keyof T]?: T[K] };\n\nexport type ExtractComponentSlots<T> =\n\tIsAny<T> extends true ? Record<string, any>\n\t: T extends { ${(0,vue_code_gen_1.getSlotsPropertyName)(e)}?: infer S } ? { [K in keyof S]-?: S[K] extends ((obj: infer O) => any) | undefined ? O : unknown }\n\t: Record<string, any>;\n\nexport type FillingEventArg_ParametersLength<E extends (...args: any) => any> = IsAny<Parameters<E>> extends true ? -1 : Parameters<E>['length'];\nexport type FillingEventArg<E> = E extends (...args: any) => any ? FillingEventArg_ParametersLength<E> extends 0 ? ($event?: undefined) => ReturnType<E> : E : E;\n\nexport type ExtractEmit2<T> =\n\tT extends FunctionalComponent<infer _, infer E> ? SetupContext<E>['emit']\n\t: T extends new (...args: any) => { $emit: infer Emit } ? Emit\n\t: unknown;\nexport type ReturnVoid<T> = T extends (...payload: infer P) => any ? (...payload: P) => void : (...args: any) => void;\nexport type EmitEvent2<F, E> =\n\tF extends {\n\t\t(event: E, ...payload: infer P): infer R\n\t} ? (...payload: P) => void\n\t: F extends {\n\t\t(event: E, ...payload: infer P): infer R\n\t\t(...args: any): any\n\t} ? (...payload: P) => void\n\t: F extends {\n\t\t(event: E, ...payload: infer P): infer R\n\t\t(...args: any): any\n\t\t(...args: any): any\n\t} ? (...payload: P) => void\n\t: F extends {\n\t\t(event: E, ...payload: infer P): infer R\n\t\t(...args: any): any\n\t\t(...args: any): any\n\t\t(...args: any): any\n\t} ? (...payload: P) => void\n\t: unknown;\nexport type EmitEvent<T, E> =\n\tT extends DefineComponent<infer _, any, any, any, any, any, any, infer E2> ? EmitEvent_3<E2, E>\n\t: T extends FunctionalComponent<infer _, infer E2> ? EmitEvent_3<E2, E>\n\t: T extends FunctionalComponent<infer _, infer E> ? EmitEvent2<SetupContext<E>['emit'], E>\n\t: unknown;\nexport type EmitEvent_3<E2, E> =\n\tEmitsOptions extends E2 ? unknown\n\t: E2 extends AnyArray<infer K> ? (E extends K ? (...args: any) => void : unknown) // emits: ['event-1', 'event-2']\n\t: E extends keyof E2 ? ReturnVoid<E2[E]> // emits: { 'event-1': () => true, 'event-2': () => true }\n\t: unknown\nexport type FirstFunction<F0 = void, F1 = void, F2 = void, F3 = void, F4 = void> =\n\tNonNullable<F0> extends (Function | AnyArray<Function>) ? F0 :\n\tNonNullable<F1> extends (Function | AnyArray<Function>) ? F1 :\n\tNonNullable<F2> extends (Function | AnyArray<Function>) ? F2 :\n\tNonNullable<F3> extends (Function | AnyArray<Function>) ? F3 :\n\tNonNullable<F4> extends (Function | AnyArray<Function>) ? F4 :\n\tunknown;\nexport type GlobalAttrs = JSX.IntrinsicElements['div'];\nexport type SelfComponent<N, C> = string extends N ? {} : N extends string ? { [P in N]: C } : {};\nexport type PickComponents<T> = ComponentKeys<T> extends keyof T ? Pick<T, ComponentKeys<T>> : T;\nexport type ConvertInvalidJsxElement<T> = IsComponent<T> extends true ? T : any;\n\ntype IsComponent<T> =\n\tT extends (...args: any) => JSX.Element ? true\n\t: T extends new (...args: any) => JSX.ElementClass ? true\n\t: false;\ntype ComponentKeys<T> = keyof { [K in keyof T as IsComponent<T[K]> extends true ? K : never]: any };\n`}function genConstructorOverloads(e="ConstructorOverloads",n){let t=`type ${e}<T> =\n`;if(void 0===n)for(let e=8;e>=1;e--)o(e);else o(n);return t+="// 0\n",t+="{};\n",t;function o(e){t+=`// ${e}\n`,t+="T extends {\n";for(let n=1;n<=e;n++)t+=`(event: infer E${n}, ...payload: infer P${n}): void;\n`;t+="} ? (\n";for(let n=1;n<=e;n++)n>1&&(t+="& "),t+=`(E${n} extends string ? { [K${n} in E${n}]: (...payload: P${n}) => void } : {})\n`;t+=") :\n"}}exports.typesFileName="__VLS_types.ts",exports.getTypesCode=getTypesCode,exports.genConstructorOverloads=genConstructorOverloads;