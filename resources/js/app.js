import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from 'ziggy-js';
import NProgress from 'nprogress';
import { router } from '@inertiajs/vue3'
import  Toast  from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/Users/*.vue')),
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