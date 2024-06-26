import '../css/app.css';
import { createSSRApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { ZiggyVue } from 'ziggy-js';
import { Ziggy } from './ziggy.js';
import  Toast  from "vue-toastification";
import AuthenticatedLayout from '../js/Layouts/AuthenticatedLayout.vue';
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import NProgress from 'nprogress'
import { router } from '@inertiajs/vue3'

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
        .mount(el)
  },
  progress: {
    // The delay after which the progress bar will appear, in milliseconds...
    delay: 1000,

    // The color of the progress bar...
    color: '#ec8d00',

    // Whether to include the default NProgress styles...
    includeCSS: true,

    // Whether the NProgress spinner will be shown...
    showSpinner: false,
  },
});

router.on('start', () => NProgress.start())

router.on('finish', () => NProgress.done())