import Vue3 from '../uniapp@vue3/node_modules/vue';
import { Vue as Vue2 } from '../uniapp@vue2/node_modules/vue/types/vue';
// declare class Vue extends V.default {}
type Vue2And3 = typeof Vue3 & typeof Vue2;
declare var Vue: Vue2And3;
export = Vue;
export as namespace Vue;
