// index.js

import Vue from 'vue';
import App from './App.vue';

new Vue({ render: createElement => createElement(App) }).$mount('#app');
/*
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App.vue';

const CustomElement = wrap(Vue, App);

window.customElements.define('custom-calendar', CustomElement);
*/
