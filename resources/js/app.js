import '../css/app.css';
import { createSSRApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { ZiggyVue } from 'ziggy-js';
import { Ziggy } from './ziggy.js';
import  Toast  from "vue-toastification";
import AuthenticatedLayout from '../js/Layouts/AuthenticatedLayout.vue';
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { createMetaManager, defaultConfig } from 'vue-meta';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = AuthenticatedLayout
    return page
  },
  setup({ el, App, props, plugin }) {
    return createSSRApp({ 
      render: () => h(App, props) 
      }).use(plugin)
        .use(Toast)
        .use(ZiggyVue, Ziggy)
        .use(createMetaManager(defaultConfig))
        .mount(el)
  },
});