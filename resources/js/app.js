import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Ziggy } from './ziggy';
import NProgress from 'nprogress';
import { router } from '@inertiajs/vue3'

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  progress: false,
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(Ziggy)
      .mount(el)
  },
});

router.on('start', () => {
  NProgress.start()
})

router.on('finish', () =>{
  NProgress.done()
})