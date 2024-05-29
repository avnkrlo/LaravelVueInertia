import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from 'ziggy-js';
import NProgress from 'nprogress';
import { router } from '@inertiajs/vue3'
import  Toast  from "vue-toastification";
import AuthenticatedLayout from '../js/Layouts/AuthenticatedLayout.vue';
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = AuthenticatedLayout
    return page
  },
  progress: false,
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(Toast)
      .use(ZiggyVue)
      .mount(el)
  },
});

router.on('start', () => {
  NProgress.start()
})

router.on('finish', () =>{
  NProgress.done()
})