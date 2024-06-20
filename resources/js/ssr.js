import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { ZiggyVue } from 'ziggy-js';
import { Ziggy } from './ziggy.js';
import AuthenticatedLayout from './Layouts/AuthenticatedLayout.vue';

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      let page = pages[`./Pages/${name}.vue`]
      page.default.layout = AuthenticatedLayout
      return page
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      }).use(plugin)
        .use(ZiggyVue, Ziggy)
    },
  }),
)