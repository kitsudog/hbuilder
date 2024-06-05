export interface ComponentInstance {
    $el: any,
    $emit(event: string, params: any): void
}

export interface AndroidComponentInstance extends ComponentInstance {
    $androidContext: Context,
}

export interface IosComponentInstance extends ComponentInstance { }

export type WatchHandler<T> = string | ((val: T, oldVal: T) => void);
export interface WatchOptions {
    deep?: boolean;
    immediate?: boolean;
}
export interface WatchOptionsWithHandler<T> extends WatchOptions {
    handler: WatchHandler<T>;
}

export type Prop<T> = { (): T } | { new(...args: never[]): T & object } | { new(...args: string[]): Function }
export type PropType<T> = Prop<T> | Prop<T>[];
export interface PropOptions<T = any> {
    type?: PropType<T>;
    required?: boolean;
    default?: T | null | undefined | (() => T | null | undefined);
    validator?(value: T): boolean;
}
export type PropValidator<T> = PropOptions<T> | PropType<T>;
export type RecordPropsDefinition<T> = {
    [K in keyof T]: PropValidator<T[K]>
}
export type ArrayPropsDefinition<T> = (keyof T)[];
export type PropsDefinition<T> = ArrayPropsDefinition<T> | RecordPropsDefinition<T>;

export type DefaultData<V> = object | ((this: V) => object);
type DefaultProps = Record<string, any>;
type DefaultMethods<V> = { [key: string]: (this: V, ...args: any[]) => any };
type DefaultComputed = { [key: string]: any };

export interface ComponentOptions<
    V extends ComponentInstance,
    Data = DefaultData<V>,
    Methods = DefaultMethods<V>,
    // Computed = DefaultComputed,
    PropsDef = PropsDefinition<DefaultProps>,
    // Props = DefaultProps
    > {
    /**
     * 组件名称，也就是开发者使用的标签
     */
    name: string,
    /**
     * 组件涉及的事件声明，只有声明过的事件，才能被正常发送
     */
    emits: string[],
    /**
     * 属性声明，组件的使用者会传递这些属性值到组件
     */
    props: PropsDef,
    /**
     * 组件内部变量声明
     */
    data: Data;
    /**
     * 属性变化监听器实现
     */
    watch: Record<string, WatchOptionsWithHandler<any> | WatchHandler<any>>,
    /**
     * 规则：如果没有配置expose，则methods中的方法均对外暴露，如果配置了expose，则以expose的配置为准向外暴露
     * ['publicMethod'] 含义为：只有 `publicMethod` 在实例上可用
     */
    expose: string[],
    methods: Methods,
    /**
     * 内部使用的组件方法
     */
    privateMethod?(): void,

    /**
     * 组件被创建，组件第一个生命周期，
     * 在内存中被占用的时候被调用，开发者可以在这里执行一些需要提前执行的初始化逻辑
     * [可选实现]
     */
    created?(): void,
    /**
     * 对应平台的view载体即将被创建，对应前端beforeMount  
     * [可选实现]
     */
    NVBeforeLoad?(): void,
    /**
     * 创建原生View，必须定义返回值类型
     * 开发者需要重点实现这个函数，声明原生组件被创建出来的过程，以及最终生成的原生组件类型
     * （Android需要明确知道View类型，需特殊校验） 
     * todo 补充IOS平台限制
    * [必须实现]
     */
    NVLoad(): View,

    /**
     * 原生View已创建 
     * [可选实现]
     */
    NVLoaded?(): void,
    /**
     * 原生View布局完成  
     * [可选实现]
     */
    NVLayouted(): void,
    /**
     * 原生View将释放  
     * [可选实现]
     */
    NVBeforeUnload(): void,
    /**
     * 原生View已释放，这里可以做释放View之后的操作  
     * [可选实现]
     */
    NVUnloaded(): void,
    /**
     * 组件销毁  
     * [可选实现]
     */
    unmounted(): void,
    /**
     * 自定组件布局尺寸 
     * [可选实现]
     */
    doMeasure(size: UTSSize): UTSSize;
}

export function defineComponent(setup: ComponentOptions<any>);