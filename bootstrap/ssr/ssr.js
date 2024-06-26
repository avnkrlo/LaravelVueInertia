import { ref, unref, withCtx, createVNode, createTextVNode, useSSRContext, onMounted, onUnmounted, mergeProps, createSSRApp, h as h$1 } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { Link, useForm, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$f = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isNavbarOpen = ref(false);
    const isServicesDropdownOpen = ref(false);
    const isQuoteDropdownOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="fixed top-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 start-0 dark:border-yellow-300"><div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("index"),
        class: "flex items-center space-x-3 rtl:space-x-reverse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="Images/cck.png" class="h-8"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "Images/cck.png",
                class: "h-8"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass(["w-full md:block md:w-auto", { "hidden": !isNavbarOpen.value }])}" id="navbar-dropdown"><ul class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("about.index"),
        class: "block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent",
        "aria-current": "page"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><div class="relative"><button class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> Services <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button><div style="${ssrRenderStyle(isServicesDropdownOpen.value ? null : { display: "none" })}" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"><ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" aria-labelledby="dropdownLargeButton"><li class="border-b border-gray-200 dark:border-gray-600">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("deservices.index"),
        class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Data Entry `);
          } else {
            return [
              createTextVNode(" Data Entry ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="border-b border-gray-200 dark:border-gray-600">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("mldservices.index"),
        class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Multi-Lingual `);
          } else {
            return [
              createTextVNode(" Multi-Lingual ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="border-b border-gray-200 dark:border-gray-600">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("sdservices.index"),
        class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Software Development `);
          } else {
            return [
              createTextVNode(" Software Development ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></li><li><div class="relative"><button class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> Request a Quote <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button><div style="${ssrRenderStyle(isQuoteDropdownOpen.value ? null : { display: "none" })}" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"><ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" aria-labelledby="dropdownLargeButton"><li class="border-b border-gray-200 dark:border-gray-600">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dequote.index"),
        class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Data Entry Service Quote `);
          } else {
            return [
              createTextVNode(" Data Entry Service Quote ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="border-b border-gray-200 dark:border-gray-600">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("sdquote.index"),
        class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Software Development Services Quote `);
          } else {
            return [
              createTextVNode(" Software Development Services Quote ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("career.index"),
        class: "block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Careers `);
          } else {
            return [
              createTextVNode(" Careers ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("recruitment.index"),
        class: "block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Recruitment `);
          } else {
            return [
              createTextVNode(" Recruitment ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("blog.index"),
        class: "block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blog `);
          } else {
            return [
              createTextVNode(" Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact.index"),
        class: "block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></nav>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><footer class="bg-white dark:bg-gray-900"><div class="w-full max-w-screen-xl px-2 py-6 mx-auto lg:py-8"><div class="md:flex md:justify-between"><div class="flex flex-row">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("index"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="Images/cck_logo.png" class="h-25 me-3"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "Images/cck_logo.png",
                class: "h-25 me-3"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col w-64"><div><p class="mb-3 text-2xl font-bold text-white"> CCK City Network, Inc. </p><p class="mb-3"> 3502 One San Miguel Avenue Condominium, San Miguel Avenue, Ortigas Center, Pasig City </p><p> +632-53100435 </p></div></div><p></p></div><div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1"><div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2><ul class="font-medium text-gray-500 dark:text-gray-400"><li class="mb-4"><button class="hover:underline">Privacy Policy</button></li><li><a href="#" class="hover:underline">Terms &amp; Conditions</a></li></ul></div></div></div><hr class="my-6 border-orange-600 sm:mx-auto dark:border-orange-600 lg:my-8"><div class="sm:flex sm:items-center sm:justify-between"><span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">All Rights Reserved</a>. </span><div class="flex mt-4 sm:justify-center sm:mt-0"><span class="mr-5 text-sm text-gray-500 sm:text-center dark:text-gray-400">CONNECT WITH US:</span><button class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path></svg><span class="sr-only">Facebook page</span></button><button class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg><span class="sr-only">Linkedin page</span></button><button class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path></svg><span class="sr-only">Instagram page</span></button><button class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"></path></svg><span class="sr-only">Youtube page</span></button></div></div></div></footer>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$f, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$d
}, {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      { src: "Images/img11.jpg", alt: "Slide 1" },
      { src: "Images/img12.jpg", alt: "Slide 2" }
    ];
    const currentIndex = ref(0);
    let interval = null;
    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % items.length;
    };
    const start = () => {
      if (!interval) {
        interval = setInterval(nextSlide, 3e3);
      }
    };
    const pause = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };
    onMounted(start);
    onUnmounted(pause);
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl mx-auto lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl"> The Japanese partner for your business needs - that&#39;s what we are! </h1></div></section><button type="button" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg" id="btn-back-to-top"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><div><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Our History</h1><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><h1 class="grid mb-5 text-5xl font-semibold text-center text-white place-content-center">We Provide Superior Quality of Service</h1><p class="flex max-w-screen-xl mx-auto text-xl text-justify text-white"> The company’s work values emphasize the importance of inspired problem-solving, strategic management of operations and production, and creative solutions. Furthermore, all the services that CCK offers are founded firmly on Japanese-standard quality. </p><p class="flex max-w-screen-xl mx-auto mt-5 text-xl text-justify text-white"> CCK City Network, Inc. is a BPO company located in Asia with 15 branches in four countries. As an industry specialist in data entry services, CCK also conducts and owns different enterprises for software development, language education, digital marketing, and customer support. Composed of talented data analysts and scientists, seasoned customer service advocates, inspired language experts, and creative technology engineers, the company is robust, exhibiting the diversity of its capacity to serve our clients sedulously. Furthermore, CCK is compliant to industry standard as a guarantee to our clients and to their customers. Ensuring that their business is safe with us is the primary composition of our dedication. </p></div><div class="flex flex-col items-center justify-center mt-10 bg-blue-800 shadow-2xl h-128"><div class="flex max-w-screen-xl mx-auto items-justify"><div class="ml-10 text-white bg-blue-800 card w-96"><div class="card-body"><h1 class="text-3xl text-orange-300 card-title">800 Global Employees</h1><p>We are made up of talented data scientists, league of customer service advocates, multi-lingual specialist, data analyst committed to upholding our values as well as what our clients value.</p></div></div><div class="ml-10 text-white bg-blue-800 border-white card w-96"><div class="card-body"><h1 class="text-3xl text-orange-300 card-title">￥30 Million Capital</h1><p>We have stable financial capability guaranteed by our Japanese partner banks including Sumitomi Mitsui, Resona, Mizuho Bank, Kiyo Bank, Tottori Bank and Hokkaido Bank.</p></div></div><div class="ml-10 text-white bg-blue-800 border-white card w-96"><div class="card-body"><h1 class="text-3xl text-orange-300 card-title">Multiple Languages</h1><p>We offer multi-language services in Japanese, English, Chinese, Filipino, and Bangladeshi.</p></div></div></div></div><div class="flex flex-col items-center justify-center bg-blue-800 shadow-2xl h-128"><div class="flex max-w-screen-xl mx-auto items-justify"><div class="ml-10 text-white bg-blue-800 card w-96"><div class="card-body"><h1 class="text-3xl text-orange-300 card-title">Compliant to Industry Standard</h1><p>CCK is compliant to industry standards as a guarantee to our clients and to their customers. We ensure that their businesss is safe with us.</p></div></div><div class="ml-10 text-white bg-blue-800 border-white card w-96"><div class="card-body"><h1 class="text-3xl text-orange-300 card-title">Diverse Location</h1><p>We are primarily located in Asia with the expansion in different locations such as North America and other continents in the future.</p></div></div></div></div><div><h1 class="grid mt-10 mb-5 text-5xl font-bold text-orange-300 uppercase place-content-center">CCK is an honest business.</h1><p class="flex max-w-screen-xl mx-auto mb-10 text-xl text-justify text-white"> We ensure that our clients most valued assets - their customers are protected and secured as we operate in a high standard of international service. We also guarantee that their business is protected against security risk while ensuring cost-effective business bringing confidence in our service delivery. </p></div><div class="flex flex-row justify-center mb-10"><div class="flex flex-col"><div class="pt-10 pr-10"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16"><path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"></path><path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"></path></svg></div><div class="pt-10 pr-10"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path></svg></div><div class="pt-10 pr-10"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"></path><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"></path><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path></svg></div></div><div class="flex flex-col"><h1 class="text-2xl">Our Mission</h1><p class="w-64 ml-2 text-white"> To create sustainable employment while providing superior quality service to our clients. </p><h1 class="text-2xl mt-5">Our Vision</h1><p class="w-64 ml-2 text-white"> Our vision is sustainable global business. We are committed and highly dedicated as vested partners of our clients and their business. </p><h1 class="text-2xl mt-5">Our Goal</h1><p class="w-64 ml-2 text-white font-bold"> Quality. </p><p class="w-64 ml-2 text-white"> We provide superior quality of services that our clients need to sustain and grow their business. </p><p class="w-64 ml-2 text-white font-bold"> Accuracy. </p><p class="w-64 ml-2 text-white"> We deliver high level of accuracy. We understand the impact of errors in our client&#39;s business and their success. </p><p class="w-64 ml-2 text-white font-bold"> Data Security. </p><p class="w-64 ml-2 text-white"> We protect our client&#39;s business like ours. We guarantee top of the industry security measures and compliance to industry standards. </p></div><div class="flex flex-col justify-center ml-5"><img src="Images/osma.jpg" class="p-50 pr-50"></div></div><div class="flex flex-col items-center justify-center h-64 pb-10 bg-blue-800"><h1 class="grid mt-10 mb-5 text-3xl font-bold text-white uppercase place-content-center">Our company will maximize the accomplishments and know-hows we have accumulated</h1><p class="max-w-screen-xl mx-auto text-2xl text-justify text-white"> to propose global division of work as your company&#39;s overseas base of operations, and we will strive for innovative technology in various fields to provide solutions for your future. </p></div><div class="pb-10"><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Certification</h1><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><div class="flex max-w-screen-lg mx-auto items-justify"><div class="mt-5 ml-5 w-96"><img src="Images/peza.png"></div><div class="mt-5 ml-5 w-96"><img src="Images/isms.png"></div><div class="pt-5 mt-10 ml-20 w-96"><img src="Images/cpg.jpg"></div></div></div><div><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Accreditation</h1><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><div class="flex max-w-screen-md mx-auto items-justify"><div class="pt-4 mt-5 ml-5 w-96"><img src="Images/chamber1.png" class="bg-gray-300"></div><div class="mt-5 ml-10 w-96"><img src="Images/jami1.png" class="bg-gray-300"></div></div></div><div class="mb-10"><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Verification</h1><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><div class="grid place-content-center items-justify"><div class="w-64 mt-5"><button><img src="Images/wad-badge.png"></button></div></div></div><div class="flex flex-col items-center justify-center h-64 pb-10 bg-blue-800"><h1 class="grid mt-10 mb-5 text-5xl font-bold text-white uppercase place-content-center">Our company is worthy to be trusted!</h1><p class="max-w-screen-xl mx-auto text-2xl text-justify text-white"> CCK ensures the future of every employee and aspires to be the company that customers bring new opportunities. </p></div><hr class="border-orange-300 sm:mx-auto dark:border-orange-300"><!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/About.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"> It takes more than interest, we have plans and strategies specifically for your business needs. </h1></div></section><button type="button" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg" id="btn-back-to-top"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Blog.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "Career",
  __ssrInlineRender: true,
  setup(__props) {
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl mx-auto lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl"> Come Join Our Team! </h1><p class="text-4xl text-white"> Great opportunity awaits you! </p></div></section><button type="button" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg" id="btn-back-to-top"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><div class="pt-5 pb-5"><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><h1 class="flex max-w-screen-xl mx-auto mb-5 text-4xl font-bold text-orange-300">Why CCK City Network, Inc.</h1><p class="flex max-w-screen-xl mx-auto text-xl text-justify"> There are growing opportunities here at CCK. It offers an exciting way to exercise one&#39;s skills and challenge weaknesses to be turned into assets. This company demonstrates innovation and invites development not only individually but as a team and family. Its top notch reputation built in the industry would make anyone part of it proud and create a culture that pursues excellence. </p><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Life at CCK</h1><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><p class="flex max-w-screen-xl mx-auto mb-5 text-xl text-justify"> Here at CCK we remind ourselves that we are greater than our problems and refuse to give up on difficult tasks despite the tenacity and use these struggles to grow better. We are determined to achieve our goals and ensure success in things being done. We foster an environment where relationships matter within our teammates to build our efficiency, innovate faster, and to learn from each other. We believe that being disciplined is critical to our success, not only for one’s self but also for everyone in the team. We carefully choose our decisions and consult one another to strengthen the culture of pursuing excellence here at CCK </p></div><div class="mb-10 bg-blue-600 shadow-2xl"><div class="flex max-w-screen-sm pt-5 pb-5 mx-auto"><figure class="relative max-w-sm cursor-pointer filter blur-sm hover:blur-none"><img class="h-64 w-128" src="Images/life1.jpg" alt="image description"><figcaption class="absolute px-4 text-lg text-white bottom-5"><p>Here at CCK we remind each other that we are greater than our problems and refuse to give up on difficult tasks despite the tenacity and use these struggles to grow better.</p></figcaption></figure><figure class="relative max-w-sm cursor-pointer filter blur-sm hover:blur-none"><img class="w-128" src="Images/life2.jpg" alt="image description"><figcaption class="absolute px-4 text-lg text-white bottom-20"><p>We foster an environment where relationships matter within our teammates to build our efficiency, innovate faster, and to learn from each other.</p></figcaption></figure></div><div class="flex max-w-screen-sm pb-5 mx-auto"><figure class="relative max-w-sm cursor-pointer filter blur-sm hover:blur-none"><img class="w-128" src="Images/life3.jpg" alt="image description"><figcaption class="absolute px-4 text-lg text-white bottom-20"><p>We believe that being disciplined is critical to our success, not only for one&#39;s self but also for everyone in the team.</p></figcaption></figure><figure class="relative max-w-sm cursor-pointer filter blur-sm hover:blur-none"><img class="h-64 w-128" src="Images/life4.jpg" alt="image description"><figcaption class="absolute px-4 text-lg text-white bottom-1"><p>We carefully choose our decisions and consult one another to strengthen the culture of pursuing excellence here at CCK. We are determined to achieve our goals and ensure success in things being done.</p></figcaption></figure></div></div><div><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><h1 class="grid text-3xl font-bold text-orange-300 uppercase place-content-center">Job Opportunities</h1><hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8"><h1 class="grid text-5xl font-bold text-white uppercase place-content-center">DREAM BIG. SOAR HIGH. BE QUALIFIED.</h1><p class="grid mt-5 text-3xl text-justify place-content-center"> We may have something what you&#39;re looking for! </p><div class="flex max-w-screen-lg mx-auto items-justify"><div class="mt-10 ml-20 shadow-xl card w-96 bg-base-300"><div class="text-justify card-body"><h2 class="text-orange-300 card-title">DATA ENCODER</h2><p class="grid text-white">Entering accurate data while following all regulations and maintaining confidentiality as agreed with the client.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="text-justify card-body"><h2 class="text-orange-300 card-title">ENGLISH TEST RATER</h2><p class="grid text-white place-content-center">Evaluates student responses to subject-related and open-ended questions according to a customer supplied scoring guide. Successfully internalizes training and customer scoring guide. Scorers will work in an office environment.</p></div></div></div><div class="flex max-w-screen-lg mx-auto items-justify"><div class="mt-10 ml-20 shadow-xl card w-96 bg-base-300"><div class="text-justify card-body"><h2 class="text-orange-300 card-title">SOFTWARE DEVELOPER</h2><p class="grid text-white place-content-center">Design and Develop web application using ASP.NET MVC. and WCF Web. Provide web development and support on product sites using the following environments: Ubuntu, Apache, mySQL and PHP (LAMP) and/or Windows+WAMPServer package, Subversion(SVN)/GIT, Zend Framework, jQuery, XDebug Services. Smartphone (Android and iPhone), Windows APP, Server (PHP, mySQL), Client (HTML, Java, CSS, AJAX)</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="text-justify card-body"><h2 class="text-orange-300 card-title">CALL CENTER AGENT</h2><p class="grid text-white">Be a person who handles incoming or outgoing customer calls for a business, handles account inquiries, customer complaints or support issues.</p></div></div></div></div><div class="flex flex-col items-center justify-center h-64 mt-10 bg-blue-800"><h1 class="text-5xl font-bold text-white">Be a part of our team!</h1><p class="max-w-screen-xl mx-auto mt-5 text-2xl text-justify text-white"> We will help you achieve your goals. We will help you build a career here in CCK. </p><div class="grid mt-5 place-content-end"><button class="inline-flex items-center justify-center px-10 py-3 text-3xl text-center text-white bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-orange-300"> Join Us! </button></div></div><hr class="border-orange-300 sm:mx-auto dark:border-orange-300"><!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Career.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const form = useForm({
      name: null,
      company: null,
      email: null,
      contact: null,
      service: null,
      file: null,
      note: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"> It takes more than interest, we have plans and strategies specifically for your business needs. </h1></div></section><button type="button" id="btn-back-to-top" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><div><h1 class="grid mt-10 mb-5 text-4xl font-bold text-white uppercase place-content-center">Get in touch with our amazing team, and let&#39;s talk strategy!</h1><h1 class="flex items-center justify-center mb-5 text-2xl text-white">Contact us for your Data Entry and Software Developement nees by filling the form below:</h1><div class="flex flex-row justify-center"><div class="pr-10"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30890.92697538384!2d121.05758400000002!3d14.578216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c86ab72ce775%3A0x89ad8bdd71dc8a8e!2sOne%20San%20Miguel%20Building!5e0!3m2!1sen!2sph!4v1718777000857!5m2!1sen!2sph" width="500" height="500" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><form class="flex flex-col justify-center"><label for="name" class="text-white">Full Name</label><input${ssrRenderAttr("value", unref(form).name)} type="text" name="name" id="name" autocomplete="given-name" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.name) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="company" class="text-white">Company Name</label><input${ssrRenderAttr("value", unref(form).company)} type="text" name="company" id="company" autocomplete="given-name" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.company) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.company)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="email" class="text-white">Business Email Address</label><input${ssrRenderAttr("value", unref(form).email)} type="text" name="email" id="email" autocomplete="email" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="contact" class="text-white">Primary Contact Number</label><input${ssrRenderAttr("value", unref(form).contact)} type="text" name="contact" id="contact" autocomplete="contact" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.contact) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.contact)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="service" class="text-white">Services Required</label><select id="service" name="service" autocomplete="service" class="block w-full rounded-md border-0 pl-1 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6"><option disabled selected>Select a Service</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).service) ? ssrLooseContain(unref(form).service, null) : ssrLooseEqual(unref(form).service, null)) ? " selected" : ""}>Data Entry</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).service) ? ssrLooseContain(unref(form).service, null) : ssrLooseEqual(unref(form).service, null)) ? " selected" : ""}>Software Development</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).service) ? ssrLooseContain(unref(form).service, null) : ssrLooseEqual(unref(form).service, null)) ? " selected" : ""}>Both</option></select>`);
      if (unref(form).errors.service) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.service)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="note" class="text-white">Send a Note</label><textarea id="note" name="note" rows="3" class="block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">${ssrInterpolate(unref(form).note)}</textarea>`);
      if (unref(form).errors.note) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.note)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="justify-center py-2 mt-5 text-xl text-center text-white uppercase bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 hover:bg-transparent focus:ring-4 focus:ring-orange-300"> Submit </button></form><div class="flex flex-col mt-5 ml-10"><h1 class="text-xl font-bold text-white uppercase">Contact Us:</h1><div class="flex flex-row mt-3"><svg class="mt-1" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 293.334 293.334" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M146.667,0C94.903,0,52.946,41.957,52.946,93.721c0,22.322,7.849,42.789,20.891,58.878 c4.204,5.178,11.237,13.331,14.903,18.906c21.109,32.069,48.19,78.643,56.082,116.864c1.354,6.527,2.986,6.641,4.743,0.212 c5.629-20.609,20.228-65.639,50.377-112.757c3.595-5.619,10.884-13.483,15.409-18.379c6.554-7.098,12.009-15.224,16.154-24.084 c5.651-12.086,8.882-25.466,8.882-39.629C240.387,41.962,198.43,0,146.667,0z M146.667,144.358 c-28.892,0-52.313-23.421-52.313-52.313c0-28.887,23.421-52.307,52.313-52.307s52.313,23.421,52.313,52.307 C198.98,120.938,175.559,144.358,146.667,144.358z"></path> <circle style="${ssrRenderStyle({ "fill": "#010002" })}" cx="146.667" cy="90.196" r="21.756"></circle></g></g></g></svg><p class="w-64 ml-2 text-white"> 3502 One San Miguel Avenue Condominium, San Miguel Avenue, Ortigas Center, Pasig City </p></div><div class="flex flex-row mt-3"><svg class="mt-1" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.806 473.806" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path> <path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path> <path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path></g></g></g></svg><p class="flex flex-col w-64 ml-2 text-white"> +632-53100435 </p></div></div></div></div><h1 class="grid mt-20 mb-5 text-5xl font-bold text-yellow-300 uppercase place-content-center">Office Headquarters</h1><div class="flex flex-col items-center justify-center mt-10 bg-blue-800 shadow-2xl h-128"><div class="flex max-w-screen-xl mx-auto items-justify"><div class="ml-10 text-white bg-blue-800"><figure class="pt-5 pl-8"><svg width="101px" height="101px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#006A4D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><circle fill="#F42A41" cx="16" cy="17.5" r="7"></circle></g></svg></figure><div class="card-body"><h1 class="text-3xl text-orange-300 card-title">Chittagong 4000 Tinpur</h1><p>28 Jubilee Road, Kader Tower 7F 13-14 Tin Pool Chittagong 4000</p></div><iframe class="pl-8 mb-10 pt-9" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230.64870722596132!2d91.828473!3d22.339302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a6edd82901%3A0x550eb12ded50c520!2s128%20Jubilee%20Rd%2C%20Chittagong%204000%2C%20Bangladesh!5e0!3m2!1sen!2sph!4v1718256125320!5m2!1sen!2sph" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><div class="ml-5 text-white bg-blue-800 border-white"><figure class="pt-5 pl-8"><svg height="101px" width="101px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 496" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path style="${ssrRenderStyle({ "fill": "#FFFFFF" })}" d="M496,369.6c0,27.2-21.6,46.4-48,46.4H48c-26.4,0-48-19.2-48-46.4V126.4C0,99.2,21.6,80,48,80h400 c26.4,0,48,19.2,48,46.4V369.6z"></path><path style="${ssrRenderStyle({ "fill": "#E9F3F4" })}" d="M48,80h400c26.4,0,48,19.2,48,46.4v243.2c0,27.2-25.6,46.4-52,46.4"></path><g><path style="${ssrRenderStyle({ "fill": "#D9ECED" })}" d="M496,368.8c0,27.2-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48"></path><path style="${ssrRenderStyle({ "fill": "#D9ECED" })}" d="M48,80h400c26.4,0,48,19.2,48,46.4V216"></path></g><circle style="${ssrRenderStyle({ "fill": "#EC1C24" })}" cx="248" cy="248" r="103.2"></circle><path style="${ssrRenderStyle({ "fill": "#CE0909" })}" d="M175.2,175.2c40-40,105.6-40,146.4,0c40,40,40,105.6,0,146.4"></path></g></svg></figure><div class="card-body"><h1 class="text-3xl text-orange-300 card-title">Wakayama Headquarters</h1><p>12-8 Kitadejima, Wakayama City</p><button class="text-xl text-white underline">www.cck-co.jp</button></div><iframe class="pt-0 pl-8 pb-9" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6597.985069804087!2d135.195089!3d34.223209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b32d37fcc853%3A0xef2ca88cc0b5a347!2zSmFwYW4sIOOAkjY0MC04MzE3IFdha2F5YW1hLCBLaXRhZGVqaW1hLCAxMi04IOOCt-ODhuOCo-ODk-ODqw!5e0!3m2!1sen!2sph!4v1718256257632!5m2!1sen!2sph" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div><h1 class="grid mt-10 mb-5 text-5xl font-bold text-yellow-300 uppercase place-content-center">Other Branches</h1><h1 class="grid mt-10 mb-5 text-2xl font-bold text-white uppercase place-content-center">Japan</h1><div><div class="flex max-w-screen-xl mx-auto items-justify"><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">Tokyo Head Office</h2><p class="text-xl">1-6-35 Shinsuna, Koto-ku, Tokyo East Square Tokyo 7F</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">Sapporo Office</h2><p>50 6F, Katsura Odori Building, 1-14-2 Odori Nishi, Chuo-ku, Sapporo</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">Tohoku Office</h2><p>1-3-3 Nakasato, Ishinomaki City, Miyagi Prefecture Nakasato Central Building 4F</p></div></div></div><div class="flex max-w-screen-xl mx-auto items-justify"><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">Niigata Office</h2><p class="text-xl">Kiyama No. 3 Building, 2-4-1 Yoneyama, Chuo-ku, Niigata, Niigata</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">C-Work (Tokyo)</h2><p class="text-xl">2-2-4 Kojimachi , Chiyoda-ku, Tokyo Kojimachi Central Building 4F</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">Shizuoka Office</h2><p class="text-xl">3-38 Kotobukicho, Mishima City, Shizuoka Prefecture Tanaka Building 2F</p></div></div></div><div class="flex max-w-screen-xl mx-auto items-justify"><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">Osaka Branch Office</h2><p class="text-xl">2-3-1, Ohiraki, Fukushima-ku, Osaka Panekyo Osaka Center Building 4F</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">Tottori Branch Office</h2><p class="text-xl">1-100 Chiyomi, Tottori-shi, Tottori Aisin Chiyomi Building 10F</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">Fukuoka Office</h2><p class="text-xl">2-14-35 Tenjin, Chuo-ku, Fukuoka-shi, Fukuoka Nomura Real Estate Tenjin Building 7F</p></div></div></div></div><h1 class="grid mt-10 mb-5 text-2xl font-bold text-white uppercase place-content-center">Philippines</h1><div class="pb-10"><div class="grid mx-auto text-justify place-content-center"><div class="mt-5 ml-10 shadow-xl card w-96 bg-base-300"><div class="card-body"><h2 class="card-title">City Computer BPO Philippines, Inc.</h2><p class="text-xl">2F J &amp; V Building, Brgy. Nancayasan, McArthur H-way, Urdaneta City Pangasinan 2428</p></div></div></div></div><div class="flex flex-col items-center justify-center h-64 bg-blue-800"><h1 class="text-5xl font-bold text-white">Join us Now!</h1><p class="max-w-screen-xl mx-auto mt-5 text-2xl text-justify text-white"> We&#39;ve got exciting offers just for you! </p></div><hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300"><!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Contact.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "DataEntryQuote",
  __ssrInlineRender: true,
  setup(__props) {
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const form = useForm({
      name: null,
      email: null,
      country: null,
      contact: null,
      file: null,
      note: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"> It takes more than interest, we have plans and strategies specifically for your business needs. </h1></div></section><button type="button" id="btn-back-to-top" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><div class="mb-5"><h1 class="grid mt-10 mb-5 text-3xl font-bold text-white uppercase place-content-center">Data Entry Quote - Data Entry Services Pricing</h1><h1 class="flex items-center justify-center mb-5 text-xl text-white">Kindly fill the form below to get quote for your data entry requirements. You will get the quote within 24 hours.</h1><div class="flex flex-row justify-center"><form class="flex flex-col justify-center"><label for="name" class="block text-sm font-medium leading-6 text-white">Full Name</label><input${ssrRenderAttr("value", unref(form).name)} type="text" name="first-name" id="first-name" autocomplete="given-name" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.name) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="email" class="block text-sm font-medium leading-6 text-white">Business Email Address</label><input${ssrRenderAttr("value", unref(form).email)} type="text" name="email" id="email" autocomplete="email" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="country" class="block text-sm font-medium leading-6 text-white">Country</label><div class="mt-2"><select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 pl-1 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6"><option disabled selected>Select a Country</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Afghanistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Albania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Algeria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Andorra</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Angola</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Antigua and Barbuda</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Argentina</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Armenia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Australia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Austria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Azerbaijan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bahamas</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bahrain</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bangladesh</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Barbados</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Belarus</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Belgium</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Belize</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Benin</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bhutan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bolivia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bosnia and Herzegovina</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Botswana</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Brazil</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Brunei</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bulgaria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Burkina Faso</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Burundi</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cabo Verde</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cambodia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cameroon</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Canada</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Central African Republic</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Chad</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Chile</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>China</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Colombia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Comoros</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Congo, Democratic Republic of the</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Congo, Republic of the</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Costa Rica</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Croatia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cuba</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cyprus</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Czech Republic</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Denmark</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Djibouti</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Dominica</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Dominican Republic</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>East Timor (Timor-Leste)</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ecuador</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Egypt</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>El Salvador</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Equatorial Guinea</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Eritrea</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Estonia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Eswatini</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ethiopia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Fiji</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Finland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>France</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Gabon</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>The Gambia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Georgia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Germany</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ghana</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Greece</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Grenada</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Guatemala</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Guinea</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Guinea-Bissau</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Guyana</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Haiti</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Honduras</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Hungary</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Iceland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>India</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Indonesia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Iran</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Iraq</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ireland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Israel</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Italy</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Jamaica</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Japan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Jordan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kazakhstan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kenya</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kiribati</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Korea, North</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Korea, South</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kosovo</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kuwait</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kyrgyzstan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Laos</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Latvia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Lebanon</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Lesotho</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Liberia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Libya</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Liechtenstein</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Lithuania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Luxembourg</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Madagascar</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Malawi</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Malaysia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Maldives</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mali</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Malta</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Marshall Islands</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mauritania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mauritius</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mexico</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Micronesia, Federated States of</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Moldova</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Monaco</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mongolia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Montenegro</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Morocco</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mozambique</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Myanmar (Burma)</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Namibia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Nauru</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Nepal</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Netherlands</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>New Zealand</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Nicaragua</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Niger</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Nigeria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>North Macedonia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Norway</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Oman</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Pakistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Palau</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Panama</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Papua New Guinea</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Paraguay</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Peru</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Philippines</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Poland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Portugal</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Qatar</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Romania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Russia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Rwanda</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Saint Kitts and Nevis</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Saint Lucia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Saint Vincent and the Grenadines</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Samoa</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>San Marino</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sao Tome and Principe</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Saudi Arabia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Senegal</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Serbia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Seychelles</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sierra Leone</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Singapore</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Slovakia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Slovenia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Solomon Islands</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Somalia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>South Africa</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Spain</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sri Lanka</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sudan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sudan, South</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Suriname</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sweden</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Switzerland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Syria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Taiwan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tajikistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tanzania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Thailand</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Togo</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tonga</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Trinidad and Tobago</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tunisia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Turkey</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Turkmenistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tuvalu</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Uganda</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ukraine</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>United Arab Emirates</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>United Kingdom</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>United States</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Uruguay</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Uzbekistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Vanuatu</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Vatican City</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Venezuela</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Vietnam</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Yemen</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Zambia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Zimbabwe</option></select></div>`);
      if (unref(form).errors.country) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.country)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="contact" class="block text-sm font-medium leading-6 text-white">Primary Contact Number</label><input${ssrRenderAttr("value", unref(form).contact)} type="text" name="contact" id="contact" autocomplete="contact" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.contact) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.contact)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="file" class="block text-sm font-medium leading-6 text-white">Upload a Sample File</label><input type="file" class="mb-3 rounded-md">`);
      if (unref(form).errors.file) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.file)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="note" class="block text-sm font-medium leading-6 text-white">Brief description about your need</label><textarea id="note" name="note" rows="3" class="block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">${ssrInterpolate(unref(form).note)}</textarea>`);
      if (unref(form).errors.note) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.note)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="justify-center py-2 mt-5 text-xl text-center text-white uppercase bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 hover:bg-transparent focus:ring-4 focus:ring-orange-600"> Submit </button> *All Fields are Mandatory </form></div></div><h1 class="grid mt-10 ml-20 text-3xl font-bold text-white uppercase">Data Entry Services Pricing - Frequently Asked Questions (FAQs)</h1><div class="grid pl-20 pr-20 mt-5 mb-5 place-content-center"><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3" checked="checked"><div class="text-xl font-semibold text-white collapse-title"> How much do you charge for data entry services? </div><div class="collapse-content"><p class="mb-2">For both online and offline data entry works, it costs $4 per hour and $700 per month (A Full Time Equivalent data entry operator).</p><p class="mb-2">Please fill in the ‘data entry quote’ form for both hourly and FTE requirements. For hourly rates, you will get the total number of hours and the total data entry services pricing for performing/executing your project.</p><p class="mb-2">For monthly rates, it will be easy for us to address you if we know about the nature of your data entry work.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> Are there any upfront costs? </div><div class="collapse-content"><p class="mb-2">No upfront cost is charged for anyone who represents a company.</p><p class="mb-2">If you prefer to outsource as an individual rather than a company&#39;s representative, you have to pay 50 percent of the total cost as an upfront cost. That too will be charged only for the first time. We will not charge for further projects.</p><p class="mb-2">If you represent a company, you don’t have to pay a penny before outsourcing.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> How do you calculate costs? </div><div class="collapse-content"><p class="mb-2">In the case of monthly works, the cost is fixed i.e., $700 per month.</p><p class="mb-2">For hourly works, the cost is just $4. We calculate costs based on the total number of hours required to complete your entire project.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> Tell me about the payment cycle for Hourly Works. </div><div class="collapse-content"><p class="mb-2">For hourly works, you have to make payment on the same day we deliver the output file as we stipulated in the quote.</p><p class="mb-2">After completing the project we will send you the output along with the invoice. If you can’t pay on that time, prior information should be sent accordingly.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> What about the payment cycle for monthly works? </div><div class="collapse-content"><p class="mb-2">In the case of monthly works, we prefer bi-weekly payment after the execution date. After making 2 bi-weekly payments, the payment has to be done monthly on the pre-determined date.</p><p class="mb-2">If you wish to have different payment cycle, you can (or) please feel free to hash over that.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> How do you accept payment? </div><div class="collapse-content"><p class="mb-2">We mostly work with the international clients. So we accept payments through PayPal or Wire Transfer.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> How abot the quality of work? </div><div class="collapse-content"><p class="mb-2">Premium quality in our work is our strength. We are keen in providing utmost quality in our output.</p><p class="mb-2">We will give a sample of our work through which you can come to an idea about our quality.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> What about the data protection? </div><div class="collapse-content"><p class="mb-2">All major files are transmitted only through secured FTP server. We are solely responsible for the security of the data throughout the project period.</p><p class="mb-2">We are also ready to sign SLAs or any other documents that support data protection.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> What about the turnaround time? </div><div class="collapse-content"><p class="mb-2">Turnaround time will be determined separately for hourly rate and monthly rate works.</p><p class="mb-2">For hourly rate works, we will work out a sample and impart you about the quantity of work done in an hour. From this sample work data, we will calculate the total number of hours required to complete the project. This will be apparently explained in our quote by stating the overall time assigned for the work.</p><p class="mb-2">In the case of monthly rate works, we will give you the performance of a day’s work i.e., 8 hours as a sample from which you can know about the turnaround time for the project.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> How can we know about the status of the project and how our queries are handled? </div><div class="collapse-content"><p class="mb-2">The status of the project will be reported within few hours upon your query via Email.</p><p class="mb-2">We respond immediately if there are any major issues or updates. Our account manager will reply as early as possible to emails in case of urgent queries.</p><p class="mb-2">Please remember, you are always welcome to contact us anytime via phone if there is any significant change in your project.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> Is there any agreement before outsourcing? </div><div class="collapse-content"><p class="mb-2">Yes. We make an agreement for monthly works. We prepare SLA before starting any outsourcing task on a monthly basis.</p><p class="mb-2">In the case of hourly work, instead of an agreement, we give you our quote along with all the terms and conditions associated with the project.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> Can I hire you on a trial period basis? </div><div class="collapse-content"><p class="mb-2">Of course, yes, you can hire us based on the working period.</p><p class="mb-2">You can hire us for a day’s period for quality as well as performance measurement and review our quote price.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> What is the eligibility of your data entry operators? </div><div class="collapse-content"><p class="mb-2">Our data entry operators are undergraduates and they are experts in touch typing.</p><p class="mb-2">We conduct various typing tests like 10 key tests, speed typing test, etc. and hire highly skilled data entry operators.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> I have a specialized data entry more of a Virtual Assistant work. Could you perform that? </div><div class="collapse-content"><p class="mb-2">Yes. We can perform web search or any other requested VA works.</p><p class="mb-2">Please explain your description/requirements clearly so that we can meet your expectations.</p></div></div><div class="border collapse collapse-plus"><input type="radio" name="my-accordion-3"><div class="text-xl font-semibold text-white collapse-title"> Why is our phone number to be given mandatory? </div><div class="collapse-content"><p class="mb-2">We use your phone number only to contact you in case of emergencies regarding your project on not getting your reply via e-mail. Otherwise, we never disturb you and never share or forward your phone number to other companies or anybody. </p></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/DataEntryQuote.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$d
}, {
  __name: "DataEntry_Services",
  __ssrInlineRender: true,
  setup(__props) {
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl px-4 py-24 mx-auto lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl"> It’s all about ACCURACY,QUALITY, and SECURITY </h1><p class="text-4xl text-white"> CCK&#39;s business is based on Transparency, Honesty, and Values Driven Partnership </p><div class="grid place-content-end"><button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border rounded-lg border-yellow hover:text-yellow-300 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"> GET QUOTE </button></div></div></section><button type="button" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg" id="btn-back-to-top"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><div class="pt-10 pb-10"><h1 class="flex max-w-screen-xl mx-auto text-4xl italic font-bold">What we do</h1><p class="flex max-w-screen-xl mx-auto text-justify"> At the center of critical operations of a business is the sets of recorded data that can determine important business decisions, and these are details produced by successful and accurate data entry activities. The diligence necessary to maintain and to update the information for business essentials like invoices or databases are quite consuming, and because of this CCK City Network, Inc. offers six data entry services that can help. </p><h1 class="flex max-w-screen-xl mx-auto mt-10 text-4xl italic font-bold">What we offer</h1><p class="flex max-w-screen-xl mx-auto text-justify"> Founded on the Japanese standards of accuracy, consistency, quality, and security, the data entry services we offer have guaranteed satisfaction and have built long-term business trust with our clients. Our impressive bands of highly skilled data entry professionals exhibit the expertise needed for these services: </p><div class="flex max-w-screen-xl mx-auto items-justify"><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16"><path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">Data Entry/Encoding</h2><p>We provide data encoding of scanned images and convert them into any format desired by the client.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16"><path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"></path><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">Image Scanning with Tagging</h2><p>We perform labeling or keyword tagging to images based on the figures within the images, allowing searchability and quick access.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16"><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"></path><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">File Indexing</h2><p>We design file categorizations according to name, subject, or caption, also allowing searchability and quick access.</p></div></div></div><div class="flex max-w-screen-xl mx-auto mt-5 items-justify"><div class="mt-5 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path><path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">Image Comparison</h2><p>We render image comparisons to examine and mark observed and unobserved changes in an image based on an old image.</p></div></div><div class="mt-5 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"></figure><div class="items-center text-justify card-body"><h2 class="card-title">Floor Plan Creation</h2><p>We purvey floor plans containing the necessary information of a property listing that include, but not limited to, the shape and the dimension of the area, the forms and the types of fixtures and joineries, and the relationships of levels or spaces.</p></div></div><div class="mt-5 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16"><path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"></path><path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">AI Annotation</h2><p>We offer tagging all forms of data that can be texts, audios, videos, and/or images using advanced AI annotation tools.</p></div></div></div></div><div class="flex flex-col items-center justify-center pb-5 mb-10 bg-blue-800 shadow-2xl h-128"><div class="flex max-w-screen-xl mx-auto items-justify"><div class="mt-5 ml-10 text-white bg-blue-800 card w-96"><div class="card-body"><h2 class="text-3xl text-orange-300 card-title">High Quality, High Security</h2><p>● Certified by international standards:ISO9001 (Quality) &amp; ISO27001 (Security).</p><p>● Presence of resident Japanese management.</p><p>● Various skill upgrade programs available including Japanese language.</p></div></div><div class="mt-5 ml-10 text-white bg-blue-800 border-white card w-96"><div class="card-body"><h2 class="text-3xl text-orange-300 card-title">High Reliability</h2><p>● Full back-up by in-the-building electric generator.</p><p>● All the terminals are UPS integrated.</p><p>● Multiple transmission lines (instant switch during system failure.)</p><p>● Integration of security cameras and room entry and exit management system.</p><p>● Private information protection management system.</p><p>● Internal rules conforming to JISQ15001:2006.</p></div></div><div class="mt-5 ml-10 text-white bg-blue-800 border-white card w-96"><div class="card-body"><h2 class="text-3xl text-orange-300 card-title">High Peformance</h2><p>● Data processing 24hrs/365 days/480 people.</p><p>● Data processing US/Europe and Asia regions.</p><p>● Processing of ledgers (fixed form) with Chinese characters.</p><p>● Verifying or comparing system available.</p></div></div></div></div><div class="flex items-center justify-center"><p class="mt-10 mb-10 text-4xl text-orange-300">It takes more than interest, we have plans and strategies specifically for your business needs.</p></div><div class="flex flex-col items-center justify-center h-64 mt-10 bg-blue-800"><h1 class="text-5xl font-bold text-white">Connect With Us!</h1><div class="grid mt-5 place-content-end"><button class="inline-flex items-center justify-center px-10 py-3 text-3xl text-center text-white bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-orange-300"> Connect </button></div></div><hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300"><!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/DataEntry_Services.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const imageUrl = "/Images/life3.jpg";
const _sfc_main$6 = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$d
}, {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const imageRef = ref(null);
    const handleImageScroll = () => {
      if (imageRef.value) {
        const image = imageRef.value;
        const scrollPosition = window.scrollY;
        image.style.transform = `translateY(-${scrollPosition * 0.3}px)`;
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleImageScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleImageScroll);
    });
    const items = [
      { src: "Images/img11.jpg", alt: "Slide 1" },
      { src: "Images/img12.jpg", alt: "Slide 2" }
    ];
    const currentIndex = ref(0);
    let interval = null;
    const startSlideshow = () => {
      if (!interval) {
        interval = setInterval(nextSlide, 3e3);
      }
    };
    const pauseSlideshow = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };
    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % items.length;
    };
    onMounted(startSlideshow);
    onUnmounted(pauseSlideshow);
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply" data-v-0934a2f2><div class="max-w-screen-xl mx-auto lg:py-56" data-v-0934a2f2><p class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl" data-v-0934a2f2> Our business is to guarantee the success of yours. </p><p class="mt-5 text-2xl text-white" data-v-0934a2f2> Every business is different; every business needs specific outsourcing services. And we can help you there. CCK City Network, Inc. has the keys to help you accelerate the growth of your business. </p></div></section><button type="button" id="btn-back-to-top" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg" data-v-0934a2f2><span class="[&amp;&gt;svg]:w-4" data-v-0934a2f2><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" data-v-0934a2f2><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" data-v-0934a2f2></path></svg></span></button><div data-v-0934a2f2><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" data-v-0934a2f2><h1 class="grid mx-auto text-4xl font-bold text-yellow-300 uppercase place-content-center" data-v-0934a2f2>OUR BUSINESS</h1><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" data-v-0934a2f2><h1 class="grid mb-5 text-4xl font-bold text-white place-content-center" data-v-0934a2f2>Made of Honesty and Experience</h1><p class="flex max-w-screen-xl mx-auto text-xl text-justify text-white" data-v-0934a2f2> Integrity is present in every level of interaction, simultaneously guaranteeing the security and protection of our clients’ valued assets. CCK also keeps its customers and businesses away from security risks, bringing confidence in service delivery. </p></div><div class="container" data-v-0934a2f2><div class="text-content" data-v-0934a2f2><h1 data-v-0934a2f2>Welcome to My Page</h1><p data-v-0934a2f2>This is some introductory text.</p></div><div class="fixed-image-container" data-v-0934a2f2><img${ssrRenderAttr("src", imageUrl)} alt="Fixed Image" class="fixed-image" data-v-0934a2f2></div><div class="content" data-v-0934a2f2><ul data-v-0934a2f2><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(`<li data-v-0934a2f2>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div data-v-0934a2f2><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" data-v-0934a2f2><h1 class="grid mx-auto text-4xl font-bold text-yellow-300 uppercase place-content-center" data-v-0934a2f2>INDUSTRIES WE SERVE</h1><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" data-v-0934a2f2><p class="flex max-w-screen-xl mx-auto text-xl text-justify text-white" data-v-0934a2f2> With over 30 years of experience in handling cost-effective and secure business process outsourcing services, sales and marketing, and programming and software development, CCK City Network, Inc. has been successful in engaging and innovating for an extensive variety of industries such as education, technology, real-estate, advertising, manufacturing, energy, government, healthcare, retail, telecommunication, and trading. So, whether your growth objectives demand business processes, marketing, or technology, with our industry experience and aptitude for innovation, we can make the best solutions for your business, big or small. </p></div><div data-v-0934a2f2><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" data-v-0934a2f2><h1 class="grid mx-auto text-4xl font-bold text-yellow-300 uppercase place-content-center" data-v-0934a2f2>BLOGS</h1><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" data-v-0934a2f2></div><div class="flex flex-col items-center justify-center h-64 pb-10 bg-blue-600" data-v-0934a2f2><h1 class="text-5xl font-bold text-white" data-v-0934a2f2>Stop there, we have something for you.</h1><p class="max-w-screen-xl mx-auto mt-5 text-2xl text-justify text-white" data-v-0934a2f2> Join our family and discover that working does not have to be stressful and demanding. We treat each other in ways that foster healthy personal and professional spaces that we are always excited to have and experience. </p></div><hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300" data-v-0934a2f2><!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0934a2f2"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"> It takes more than interest, we have plans and strategies specifically for your business needs. </h1><div class="grid place-content-end"><a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:text-gray-900 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"> GET QUOTE </a></div></div></section><h1>MLD Services</h1><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/MLD_Quote.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MLD_Quote = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MLD_Quote
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$d
}, {
  __name: "MLD_Services",
  __ssrInlineRender: true,
  setup(__props) {
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl px-4 py-24 mx-auto lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl"> It’s all about ACCURACY,QUALITY, and SECURITY </h1><p class="text-4xl text-white"> CCK&#39;s business is based on Transparency, Honesty, and Values Driven Partnership </p><div class="grid place-content-end"></div></div></section><button type="button" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg" id="btn-back-to-top"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><div class="pt-10 mb-10"><h1 class="flex max-w-screen-xl mx-auto text-4xl italic font-bold">What we do</h1><p class="flex max-w-screen-xl mx-auto text-justify"> CCK City Network, Inc. seeks to promote second language proficiency and academic excellence to culturally and linguistically diverse English language learners. Language acquisition theories translated into practice, the company develops various programs and services that amplify the use of the English language for casual conversations, school qualifications, and business requirements. </p><h1 class="flex max-w-screen-xl mx-auto mt-10 text-4xl italic font-bold">What we offer</h1><p class="flex max-w-screen-xl mx-auto text-justify"> Housing experienced teams of English language professionals, both teachers and researchers, to serve to the public’s growing demand to learn the English language and all its practical applications in school and in the business. The services offered are developed from extensive research and experience record: </p><div class="flex max-w-screen-md mx-auto items-justify"><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="100" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16"><path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"></path><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"></path><path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">Proofreading</h2><p class="text-justify">Text reformulation and reconstruction to attain the precise communication objective of any written material.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="50" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16"><path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">Online English Language Teaching</h2><p class="text-justify">Guided English language courses via video and/or phone classes for all ages, designed for business, casual, or academic type of communicative situation.</p></div></div></div><div class="flex max-w-screen-md mx-auto mb-10 items-justify"><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="110" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16"><path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"></path><path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">Translation Services</h2><p>Non-machine translations of technical documents by certified translators, covering the fields of law, marketing, and finance.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="90" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16"><path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"></path><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">Test Rating and Evaluation</h2><p>Extensive and regulated content analysis of different types of language test responses to determine language proficiency level.</p></div></div></div></div><div class="flex flex-col items-center justify-center mb-10 bg-blue-800 shadow-2xl h-128"><div class="flex max-w-screen-xl mx-auto items-justify"><div class="mt-5 ml-10 text-white bg-blue-800 card w-96"><div class="card-body"><h2 class="text-3xl text-orange-300 card-title">High Quality, High Security</h2><p>● Certified by international standards:ISO9001 (Quality) &amp; ISO27001 (Security).</p><p>● Presence of resident Japanese management.</p><p>● Various skill upgrade programs available including Japanese language.</p></div></div><div class="mt-5 ml-10 text-white bg-blue-800 border-white card w-96"><div class="card-body"><h2 class="text-3xl text-orange-300 card-title">High Reliability</h2><p>● Full back-up by in-the-building electric generator.</p><p>● All the terminals are UPS integrated.</p><p>● Multiple transmission lines (instant switch during system failure.)</p><p>● Integration of security cameras and room entry and exit management system.</p><p>● Private information protection management system.</p><p>● Internal rules conforming to JISQ15001:2006.</p></div></div><div class="mt-5 ml-10 text-white bg-blue-800 border-white card w-96"><div class="card-body"><h2 class="text-3xl text-orange-300 card-title">High Peformance</h2><p>● Data processing 24hrs/365 days/480 people.</p><p>● Data processing US/Europe and Asia regions.</p><p>● Processing of ledgers (fixed form) with Chinese characters.</p><p>● Verifying or comparing system available.</p></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/MLD_Services.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-5 pb-5" }, _attrs))}><h1 class="flex max-w-screen-xl mx-auto italic font-bold">Privacy Policy</h1><p class="flex max-w-screen-xl mx-auto text-justify"> CCK CITY NETWORK, INC. is hereby adapted in compliance with Republic Act No. 10173 or the Data Privacy Act of 2012 (DPA), its Implementing Rules and Regulations, and other relevant policies, including issuances of the National Privacy Commission. CCNI respects and values data privacy rights and makes sure that all personal data collected from you, our clients, and customers, are processed in adherence to the general principles of transparency, legitimate purpose, and proportionality. </p></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/PrivacyPolicy.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PrivacyPolicy
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Recruitment",
  __ssrInlineRender: true,
  setup(__props) {
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl mx-auto lg:py-56"><h1 class="mb-5 text-2xl leading-none tracking-tight text-white"> We have many job offers waiting for you. </h1><p class="text-6xl font-bold text-white uppercase"> Start your career here at CCK! </p><p class="mt-5 text-5xl text-white"> Your Dream Job Might Be Waiting For You. </p></div></section><button type="button" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg" id="btn-back-to-top"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8"><h1 class="grid mx-auto text-4xl font-bold text-yellow-300 uppercase place-content-center">CCK Recruitment</h1><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8"><div class="flex max-w-screen-xl mx-auto items-justify"><div class="ml-10 shadow-xl card w-96 bg-base-300"><figure><img src="Images/accounting.jpg" class="max-w-screen-sm"></figure><div class="items-center card-body"><h2 class="card-title">Accounting Department</h2><h2 class="underline card-title">Accounting Supervisor</h2><h3 class="font-bold">Job Duties and Responsibilities:</h3><p>● Complying with all company, local and national accounting and financial regulations.</p><p>● Maintaining accurate financial records while compiling, analyzing, and reporting financial data.</p><p>● Creating periodic reports, such as balance sheets and profit &amp; loss statements.</p><p>● Preparing revenue projections and forecasting expenditure to manage the company&#39;s budget.</p><p>● Assisting in the computation of any tax related concerns and provision of optimal tax strategies.</p><p>● Maintaining and reconciling balance sheet and general ledger accounts.</p><p>● Assisting in all audit preparation, investigation and resolution of audit findings, account discrepancies etc.</p><p>● Performing other accounting duties and supporting junior staff as required or assigned.</p><h3 class="mt-5 font-bold">Job Qualifications:</h3><p>● Bachelor&#39;s degree in Accountancy.</p><p>● Certified Public Accountant.</p><p>● With experience as an External Auditor.</p><div class="justify-end card-actions"><button class="btn btn-primary">Apply Now!</button></div></div></div><div class="ml-10 shadow-xl card w-96 bg-base-300"><figure><img src="Images/data-entry.jpg" class="max-w-screen-sm"></figure><div class="items-center text-justify card-body"><h2 class="card-title">Data Entry Department</h2><h2 class="underline card-title">Data Entry Operator</h2><h3 class="font-bold">Job Duties and Responsibilities:</h3><p>● Entering all the data in different computer databases and handling accurate transactional records with strict confidentiality.</p><h3 class="mt-5 font-bold">Job Qualifications:</h3><p>● Graduate/ Undergraduate of any bachelor&#39;s degree course.</p><p>● Proven data entry work experience.</p><p>● Good typing speed and accuracy.</p><p>● Basic computer literacy skills.</p><p>● Amenable to work in shifting schedule.</p><div class="justify-end card-actions"><button class="btn btn-primary">Apply Now!</button></div></div></div><div class="ml-10 shadow-lg card w-96 bg-base-300"><figure><img src="Images/nurse.jpg"></figure><div class="items-center text-justify card-body"><h2 class="card-title">HR &amp; Admin Department</h2><h2 class="underline card-title">Part-time Nurse</h2><h3 class="font-bold">Job Duties and Responsibilities:</h3><p>● Implementation of policies on HIV/AIDS, drug free workplace, Hepa B, and Anti TB.</p><h3 class="mt-5 font-bold">Job Qualifications:</h3><p>● Bachelor&#39;s Degree in Nursing.</p><p>● PRC Registered Nurse.</p><p>● Accreditation in OSH Practice is required.</p><p>● No Occupational Safety &amp; Health Committee (DOLE findings).</p><p>● With Certification in Basic Occupational Safety and Health (40 hours).</p><div class="justify-end card-actions"><button class="btn btn-primary">Apply Now!</button></div></div></div></div><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8"><h1 class="grid mx-auto text-2xl font-bold text-yellow-300 place-content-center">MULTILINGUAL PROCESSING DEPARTMENT</h1><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8"><div class="flex max-w-screen-xl mx-auto mb-5"><div class="ml-10 shadow-xl card w-96 bg-base-300"><figure><img src="Images/proofreader.jpg" class="max-w-screen-sm"></figure><div class="items-center card-body"><h2 class="underline card-title">Proofreader</h2><h3 class="font-bold">Job Duties and Responsibilities:</h3><p>● Responsible in detecting errors in written English examinations.</p><h3 class="mt-5 font-bold">Job Qualifications:</h3><p>● No work related experience required.</p><p>● Preferably with bachelor’s degree in broadcast, journalism, mass media communications, advertising or English but not necessary.</p><p>● Graduates of other courses, undergraduates and students are very welcome to apply.</p><div class="justify-end card-actions"><button class="btn btn-primary">Apply Now!</button></div></div></div><div class="ml-10 shadow-xl card w-96 h-90 bg-base-300"><figure><img src="Images/test-rater.jpg" class="max-w-screen-sm"></figure><div class="items-center card-body"><h2 class="underline card-title">Test Rater</h2><h3 class="font-bold">Job Duties and Responsibilities:</h3><p>● Evaluate recorded voice responses to English speaking skill test.</p><h3 class="mt-5 font-bold">Job Qualifications:</h3><p>● No work related experience required.</p><p>● Preferably with bachelor’s degree in broadcast, journalism, mass media communications, advertising or English but not necessary.</p><p>● Graduates of other courses, undergraduates and students are very welcome to apply.</p><div class="justify-end card-actions"><button class="btn btn-primary">Apply Now!</button></div></div></div><div class="ml-10 shadow-lg card w-96 bg-base-300"><figure><img src="Images/sales-manager.jfif"></figure><div class="items-center card-body"><h2 class="underline card-title">Sales Manager</h2><h3 class="font-bold">Job Duties and Responsibilities:</h3><p>● Develop and execute strategic business plans to expand the customer base and ensure a strong presence.</p><p>● Present, promote and sell products and services to new customers.</p><p>● Conduct cost-benefit and needs analysis of potential customers and meet the needs of new customers.</p><p>● Build, establish and maintain good business and customer relationships.</p><p>● Developing customer relationships through cold-calling.</p><p>● Resolve customer issues and complaints promptly to maximise satisfaction.</p><p>● Achieve agreed sales targets and results within timelines.</p><p>● Coordinate sales activities with team members and other departments.</p><p>● Manage sales team to achieve sales targets.</p><p>● Hire, set targets, coach and manage the performance of sales representatives.</p><p>● Report sales, revenue and expenses to management and present realistic forecasts.</p><p>● Keeping abreast of new products and competitors and identifying emerging markets and market changes.</p><p>● Continuous improvement through feedback.</p><h3 class="mt-5 font-bold">Job Qualifications:</h3><p>● Bachelor&#39;s degree in business or related field.</p><p>● Prioritization, time management and organizational skills.</p><p>● Excellent selling, negotiation, communication and influencing skills.</p><p>● Ability to create and deliver presentations tailored to the needs of the audience.</p><p>● Ability to drive the sales process from plan to close.</p><p>● Business acumen and industry expertise.</p><p>● Highly motivated and target driven with a proven track record of sales success.</p><p>● Experience of consistently meeting or exceeding targets as a sales representative or sales manager.</p><p>● Excellent mentoring, coaching and people management skills and an open attitude to feedback.</p><div class="justify-end card-actions"><button class="btn btn-primary">Apply Now!</button></div></div></div></div><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8"><h1 class="grid mx-auto text-2xl font-bold text-yellow-300 place-content-center">SOFTWARE DEVELOPMENT DEPARTMENT</h1><hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8"><div class="flex max-w-screen-md mx-auto mb-5 items-justify"><div class="ml-10 shadow-xl card w-96 bg-base-300"><figure><img src="Images/back-end.jpg" class="max-w-screen-sm"></figure><div class="items-center text-justify card-body"><h2 class="underline card-title">Back-End Engineer</h2><h3 class="font-bold">Job Duties and Responsibilities:</h3><p>● Complying with all company, local and national accounting and financial regulations.</p><p>● Maintaining accurate financial records while compiling, analyzing, and reporting financial data.</p><p>● Creating periodic reports, such as balance sheets and profit &amp; loss statements.</p><p>● Preparing revenue projections and forecasting expenditure to manage the company&#39;s budget.</p><p>● Assisting in the computation of any tax related concerns and provision of optimal tax strategies.</p><p>● Maintaining and reconciling balance sheet and general ledger accounts.</p><p>● Assisting in all audit preparation, investigation and resolution of audit findings, account discrepancies etc.</p><p>● Performing other accounting duties and supporting junior staff as required or assigned.</p><h3 class="mt-5 font-bold">Job Qualifications:</h3><p>● Bachelor&#39;s degree in Accountancy.</p><p>● Certified Public Accountant.</p><p>● With experience as an External Auditor.</p><div class="justify-end card-actions"><button class="btn btn-primary">Apply Now!</button></div></div></div><div class="ml-10 shadow-xl card w-96 h-90 bg-base-300"><figure><img src="Images/front-end.jpg" class="max-w-screen-sm"></figure><div class="items-center text-justify card-body"><h2 class="underline card-title">Front-End Engineer</h2><h3 class="font-bold">Job Duties and Responsibilities:</h3><p>● Entering all the data in different computer databases and handling accurate transactional records with strict confidentiality.</p><h3 class="mt-5 font-bold">Job Qualifications:</h3><p>● Graduate/ Undergraduate of any bachelor&#39;s degree course.</p><p>● Proven data entry work experience.</p><p>● Good typing speed and accuracy.</p><p>● Basic computer literacy skills.</p><p>● Amenable to work in shifting schedule.</p><div class="justify-end card-actions"><button class="btn btn-primary">Apply Now!</button></div></div></div></div><div class="flex flex-col items-center justify-center h-64 bg-blue-800"><h1 class="text-5xl font-bold text-white">Dream Big. Soar High. Make your dreams come true.</h1><p class="max-w-screen-xl mx-auto mt-5 text-2xl text-justify text-white"> Here are CCK, everything is possible. </p></div><hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300"><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Recruitment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "SD_Quote",
  __ssrInlineRender: true,
  setup(__props) {
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const form = useForm({
      name: null,
      email: null,
      country: null,
      contact: null,
      file: null,
      note: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"> It takes more than interest, we have plans and strategies specifically for your business needs. </h1></div></section><button type="button" id="btn-back-to-top" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><div class="mb-5"><h1 class="grid mt-10 mb-5 text-3xl font-bold text-white uppercase place-content-center">Software Development Quote - Software Development Services Pricing</h1><h1 class="flex items-center justify-center mb-5 text-xl text-white">Kindly fill the form below to get quote for your software development requirements. You will get the quote within 24 hours.</h1><div class="flex flex-row justify-center"><form class="flex flex-col justify-center"><label for="name" class="block text-sm font-medium leading-6 text-white">Full Name</label><input${ssrRenderAttr("value", unref(form).name)} type="text" name="first-name" id="first-name" autocomplete="given-name" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.name) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="email" class="block text-sm font-medium leading-6 text-white">Business Email Address</label><input${ssrRenderAttr("value", unref(form).email)} type="text" name="email" id="email" autocomplete="email" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="country" class="block text-sm font-medium leading-6 text-white">Country</label><div class="mt-2"><select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 pl-1 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6"><option disabled selected>Select a Country</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Afghanistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Albania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Algeria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Andorra</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Angola</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Antigua and Barbuda</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Argentina</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Armenia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Australia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Austria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Azerbaijan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bahamas</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bahrain</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bangladesh</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Barbados</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Belarus</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Belgium</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Belize</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Benin</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bhutan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bolivia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bosnia and Herzegovina</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Botswana</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Brazil</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Brunei</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Bulgaria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Burkina Faso</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Burundi</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cabo Verde</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cambodia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cameroon</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Canada</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Central African Republic</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Chad</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Chile</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>China</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Colombia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Comoros</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Congo, Democratic Republic of the</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Congo, Republic of the</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Costa Rica</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Croatia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cuba</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Cyprus</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Czech Republic</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Denmark</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Djibouti</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Dominica</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Dominican Republic</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>East Timor (Timor-Leste)</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ecuador</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Egypt</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>El Salvador</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Equatorial Guinea</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Eritrea</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Estonia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Eswatini</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ethiopia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Fiji</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Finland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>France</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Gabon</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>The Gambia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Georgia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Germany</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ghana</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Greece</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Grenada</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Guatemala</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Guinea</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Guinea-Bissau</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Guyana</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Haiti</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Honduras</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Hungary</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Iceland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>India</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Indonesia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Iran</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Iraq</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ireland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Israel</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Italy</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Jamaica</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Japan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Jordan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kazakhstan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kenya</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kiribati</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Korea, North</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Korea, South</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kosovo</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kuwait</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Kyrgyzstan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Laos</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Latvia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Lebanon</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Lesotho</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Liberia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Libya</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Liechtenstein</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Lithuania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Luxembourg</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Madagascar</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Malawi</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Malaysia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Maldives</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mali</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Malta</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Marshall Islands</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mauritania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mauritius</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mexico</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Micronesia, Federated States of</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Moldova</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Monaco</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mongolia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Montenegro</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Morocco</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Mozambique</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Myanmar (Burma)</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Namibia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Nauru</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Nepal</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Netherlands</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>New Zealand</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Nicaragua</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Niger</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Nigeria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>North Macedonia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Norway</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Oman</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Pakistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Palau</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Panama</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Papua New Guinea</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Paraguay</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Peru</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Philippines</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Poland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Portugal</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Qatar</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Romania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Russia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Rwanda</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Saint Kitts and Nevis</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Saint Lucia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Saint Vincent and the Grenadines</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Samoa</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>San Marino</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sao Tome and Principe</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Saudi Arabia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Senegal</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Serbia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Seychelles</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sierra Leone</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Singapore</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Slovakia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Slovenia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Solomon Islands</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Somalia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>South Africa</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Spain</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sri Lanka</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sudan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sudan, South</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Suriname</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Sweden</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Switzerland</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Syria</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Taiwan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tajikistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tanzania</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Thailand</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Togo</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tonga</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Trinidad and Tobago</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tunisia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Turkey</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Turkmenistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Tuvalu</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Uganda</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Ukraine</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>United Arab Emirates</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>United Kingdom</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>United States</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Uruguay</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Uzbekistan</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Vanuatu</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Vatican City</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Venezuela</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Vietnam</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Yemen</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Zambia</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, null) : ssrLooseEqual(unref(form).country, null)) ? " selected" : ""}>Zimbabwe</option></select></div>`);
      if (unref(form).errors.country) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.country)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="contact" class="block text-sm font-medium leading-6 text-white">Primary Contact Number</label><input${ssrRenderAttr("value", unref(form).contact)} type="text" name="contact" id="contact" autocomplete="contact" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">`);
      if (unref(form).errors.contact) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.contact)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="file" class="block text-sm font-medium leading-6 text-white">Upload a Sample File</label><input type="file" class="mb-3 rounded-md">`);
      if (unref(form).errors.file) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.file)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label for="note" class="block text-sm font-medium leading-6 text-white">Brief description about your need</label><textarea id="note" name="note" rows="3" class="block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">${ssrInterpolate(unref(form).note)}</textarea>`);
      if (unref(form).errors.note) {
        _push(`<div class="text-red-600">${ssrInterpolate(unref(form).errors.note)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="justify-center py-2 mt-5 text-xl text-center text-white uppercase bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 hover:bg-transparent focus:ring-4 focus:ring-orange-600"> Submit </button> *All Fields are Mandatory </form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/SD_Quote.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$d
}, {
  __name: "SoftDev_Services",
  __ssrInlineRender: true,
  setup(__props) {
    const btnBackToTop = ref(null);
    const handleScroll = () => {
      if (window.scrollY > 100) {
        btnBackToTop.value.classList.remove("hidden");
      } else {
        btnBackToTop.value.classList.add("hidden");
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-center bg-no-repeat bg-[url(&#39;https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg&#39;)] bg-gray-700 bg-blend-multiply"><div class="max-w-screen-xl px-4 py-24 mx-auto lg:py-56"><h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl"> It’s all about ACCURACY,QUALITY, and SECURITY </h1><p class="text-4xl text-white"> CCK&#39;s business is based on Transparency, Honesty, and Values Driven Partnership </p><div class="grid place-content-end"><button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border rounded-lg border-yellow hover:text-yellow-300 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"> GET QUOTE </button></div></div></section><button type="button" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg" id="btn-back-to-top"><span class="[&amp;&gt;svg]:w-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg></span></button><div class="pt-10"><h1 class="flex max-w-screen-xl mx-auto text-4xl italic font-bold">What we do</h1><p class="flex max-w-screen-xl mx-auto text-justify"> Choosing the best application software for a business can become a stressful activity, especially when what is available in the market does not match with what is needed and envisioned for the business. Compromises about the features will inevitably be made that can later on affect progress and productivity. This must not be the case! CCK City Network, Inc. has a wide range of innovative and substantial software solutions that can be customized according to your conditions, requirements, and needs. </p><h1 class="flex max-w-screen-xl mx-auto mt-10 text-4xl italic font-bold">What we offer</h1><p class="flex max-w-screen-xl mx-auto text-justify"> Composed of enthusiastic, goal-oriented, brilliant minds, our groups of software developers and engineers deliver precision and excellence in their work output. Particularly, these are the services of their expertise: </p><div class="flex max-w-screen-xl mx-auto items-justify"><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">Smartphone Development</h2><p class="text-justify">The development of any application software for any type of mobile device, both on iOS and Android platforms.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16"><path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"></path></svg></figure><div class="items-center card-body"><h2 class="card-title">WDA Development</h2><p class="text-justify">Our engineers are capable of developing desktop applications. Installing applications on desktop computers remains relevant because it can prevent acquisition of malware from the internet.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="65" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16"><path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"></path><path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"></path></svg></figure><div class="items-center card-body"><h2 class="card-title">Web System</h2><p class="text-justify">The designing and construction of attractive, recognizable, and user-friendly websites for businesses.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="65" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"></path><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path></svg></figure><div class="items-center card-body"><h2 class="card-title">Embedded System</h2><p class="text-justify">The programmed regulation of hardware-software combination to perform specific functions for large systems.</p></div></div></div><div class="flex max-w-screen-xl mx-auto mb-10 items-justify"><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="100" fill="currentColor" viewBox="0 0 128 128" version="1.1"><g id="surface1"><path d="M 26.027344 0.136719 C 25.824219 0.214844 20.085938 3.484375 13.28125 7.394531 C 5.035156 12.136719 0.800781 14.632812 0.574219 14.867188 C 0.394531 15.070312 0.191406 15.421875 0.128906 15.644531 C -0.0429688 16.21875 -0.0546875 100.347656 0.117188 100.953125 C 0.179688 101.1875 0.382812 101.53125 0.566406 101.722656 C 1.011719 102.191406 50.238281 130.496094 50.835938 130.632812 C 51.113281 130.699219 51.425781 130.6875 51.734375 130.601562 C 52.40625 130.433594 101.503906 102.191406 101.941406 101.730469 C 102.121094 101.53125 102.324219 101.1875 102.390625 100.953125 C 102.476562 100.675781 102.507812 96.277344 102.507812 87.015625 L 102.507812 73.480469 L 114.476562 66.605469 C 125.761719 60.117188 126.453125 59.710938 126.742188 59.265625 L 127.039062 58.785156 L 127.039062 44.207031 C 127.039062 28.335938 127.070312 29.230469 126.441406 28.65625 C 126.273438 28.507812 120.523438 25.152344 113.652344 21.195312 L 101.171875 14.015625 L 99.785156 14.015625 L 87.574219 21.027344 C 80.851562 24.894531 75.136719 28.199219 74.859375 28.378906 C 74.582031 28.5625 74.25 28.902344 74.113281 29.148438 L 73.867188 29.574219 L 73.8125 43.308594 L 73.761719 57.046875 L 63.679688 62.855469 C 58.132812 66.042969 53.515625 68.683594 53.417969 68.707031 C 53.238281 68.757812 53.226562 67.449219 53.226562 42.203125 L 53.226562 15.632812 L 52.960938 15.175781 C 52.628906 14.621094 54.121094 15.507812 39.136719 6.894531 C 26.570312 -0.332031 26.871094 -0.179688 26.027344 0.136719 Z M 37.578125 10.65625 C 42.835938 13.671875 47.136719 16.167969 47.136719 16.199219 C 47.136719 16.230469 42.527344 18.894531 36.894531 22.132812 L 26.644531 28.015625 L 16.414062 22.132812 C 10.792969 18.894531 6.1875 16.230469 6.1875 16.199219 C 6.1875 16.167969 10.785156 13.503906 16.40625 10.273438 L 26.613281 4.402344 L 27.316406 4.785156 C 27.710938 5 32.332031 7.640625 37.578125 10.65625 Z M 110.730469 24.191406 C 116.265625 27.378906 120.84375 30.011719 120.886719 30.054688 C 121.003906 30.160156 100.703125 41.828125 100.425781 41.816406 C 100.148438 41.808594 80.097656 30.246094 80.105469 30.105469 C 80.117188 29.945312 100.289062 18.339844 100.492188 18.371094 C 100.585938 18.394531 105.195312 21.015625 110.730469 24.191406 Z M 14.828125 25.875 L 24.585938 31.492188 L 24.640625 59.304688 L 24.691406 87.121094 L 24.929688 87.496094 C 25.054688 87.695312 25.289062 87.964844 25.460938 88.089844 C 25.621094 88.207031 31.050781 91.300781 37.523438 94.953125 L 49.28125 101.59375 L 49.28125 113.359375 C 49.28125 119.816406 49.238281 125.113281 49.183594 125.113281 C 49.140625 125.113281 38.976562 119.296875 26.601562 112.175781 L 4.105469 99.238281 L 4.074219 59.464844 L 4.054688 19.703125 L 4.554688 19.980469 C 4.84375 20.132812 9.460938 22.785156 14.828125 25.875 Z M 49.28125 45.453125 L 49.28125 71.082031 L 48.886719 71.339844 C 48.351562 71.679688 28.8125 82.910156 28.746094 82.910156 C 28.714844 82.910156 28.691406 71.339844 28.691406 57.195312 L 28.703125 31.492188 L 38.910156 25.621094 C 44.523438 22.390625 49.152344 19.769531 49.207031 19.789062 C 49.246094 19.8125 49.28125 31.363281 49.28125 45.453125 Z M 88.222656 39.558594 L 98.453125 45.441406 L 98.453125 57.101562 C 98.453125 68.164062 98.441406 68.757812 98.273438 68.695312 C 98.164062 68.652344 93.535156 66 87.980469 62.800781 L 77.867188 56.992188 L 77.867188 45.335938 C 77.867188 38.917969 77.898438 33.675781 77.929688 33.675781 C 77.972656 33.675781 82.601562 36.320312 88.222656 39.558594 Z M 123.09375 45.261719 C 123.09375 51.644531 123.050781 56.910156 123.007812 56.960938 C 122.933594 57.078125 102.699219 68.738281 102.570312 68.738281 C 102.539062 68.738281 102.507812 63.496094 102.507812 57.078125 L 102.507812 45.421875 L 112.714844 39.546875 C 118.335938 36.320312 122.964844 33.675781 123.007812 33.675781 C 123.0625 33.675781 123.09375 38.886719 123.09375 45.261719 Z M 86.230469 66.46875 C 94.835938 71.421875 96.320312 72.308594 96.171875 72.425781 C 96.074219 72.488281 92.8125 74.363281 88.929688 76.582031 C 85.046875 78.796875 74.988281 84.53125 66.570312 89.328125 L 51.273438 98.054688 L 50.785156 97.789062 C 47.863281 96.191406 30.910156 86.546875 30.910156 86.472656 C 30.902344 86.3125 75.765625 60.53125 75.945312 60.597656 C 76.03125 60.628906 80.660156 63.269531 86.230469 66.46875 Z M 98.433594 87.558594 L 98.398438 99.238281 L 75.914062 112.175781 C 63.542969 119.296875 53.375 125.113281 53.324219 125.113281 C 53.269531 125.113281 53.226562 120.359375 53.226562 113.359375 L 53.226562 101.59375 L 75.765625 88.742188 C 88.148438 81.675781 98.324219 75.890625 98.378906 75.878906 C 98.421875 75.878906 98.441406 81.132812 98.433594 87.558594 Z M 98.433594 87.558594 "></path></g></svg></figure><div class="items-center text-justify card-body"><h2 class="card-title">Backend Development</h2><p class="text-justify">The system formulation of efficient management of the server for a set of application software.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="75" fill="currentColor" viewBox="0 0 24 24"><path d="M 15.851562 2.0332031 C 15.454446 2.0917651 15.074935 2.2655063 14.767578 2.5449219 L 14.765625 2.5449219 C 13.277863 3.9005836 10.616498 6.3243944 8.1972656 8.5273438 L 5.84375 6.734375 L 5.8359375 6.7285156 C 5.1392465 6.2166177 4.2073179 6.2866386 3.5683594 6.7441406 C 3.3534247 6.8975345 3.179469 7.0602489 2.9960938 7.2246094 C 2.8123509 7.3892993 2.65625 7.5332031 2.65625 7.5332031 L 2.7128906 7.4863281 C 1.8204736 8.2023368 1.7705385 9.5910312 2.6132812 10.367188 L 2.6152344 10.369141 L 4.3964844 11.988281 C 3.5664818 12.744059 2.6171875 13.609375 2.6171875 13.609375 L 2.6132812 13.611328 L 2.6113281 13.613281 C 1.7701612 14.390063 1.8188576 15.778914 2.7128906 16.494141 L 2.65625 16.445312 C 2.65625 16.445312 2.8103543 16.588916 2.9941406 16.753906 C 3.1779269 16.918896 3.3539505 17.08207 3.5703125 17.236328 C 4.2099405 17.692377 5.1382701 17.762436 5.8359375 17.251953 L 5.84375 17.246094 L 8.2011719 15.451172 L 14.769531 21.425781 C 15.386532 21.986866 16.295571 22.122799 17.050781 21.757812 C 18.278625 21.166887 20.046146 20.315485 20.783203 19.960938 C 21.5262 19.604374 22.001953 18.845527 22.001953 18.023438 L 22.001953 5.9335938 C 22.001953 5.110945 21.525211 4.3516313 20.779297 3.9960938 L 20.777344 3.9941406 C 20.089585 3.6662272 18.39449 2.8576642 17.039062 2.2109375 C 16.663742 2.031938 16.24868 1.9746412 15.851562 2.0332031 z M 17 4.4082031 C 18.123459 4.9444456 19.380428 5.544512 19.917969 5.8007812 C 19.970569 5.8257663 20.001953 5.8731922 20.001953 5.9335938 L 20.001953 18.023438 C 20.001953 18.085348 19.970969 18.132767 19.917969 18.158203 C 19.340838 18.43582 18.085137 19.039955 17 19.5625 L 17 4.4082031 z M 15 5.0371094 L 15 7.7636719 L 11.09375 10.736328 L 9.8144531 9.7617188 C 11.735091 8.0128243 13.554462 6.3537546 15 5.0371094 z M 4.7128906 8.3867188 L 15 16.228516 L 15 18.931641 L 4.0507812 8.9707031 C 4.0752634 8.9480007 4.178441 8.850757 4.3300781 8.7148438 C 4.4912252 8.5704065 4.6942539 8.4020803 4.7128906 8.3867188 z M 15 10.277344 L 15 13.712891 L 12.744141 11.994141 L 15 10.277344 z M 5.8808594 13.339844 L 6.6972656 14.082031 L 4.7128906 15.591797 C 4.6939997 15.57613 4.4907783 15.40989 4.3300781 15.265625 C 4.178427 15.129484 4.0751918 15.03049 4.0507812 15.007812 C 4.1027294 14.960483 4.9781341 14.16179 5.8808594 13.339844 z"></path></svg></figure><div class="items-center card-body"><h2 class="card-title">Excel Macro Development</h2><p class="text-justify">The automation of tasks and expectations that can determine optimal productivity using Visual Basic for Applications.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"></figure><div class="items-center card-body"><h2 class="card-title">RPA Scenario Production</h2><p class="text-justify">The appropriation of basic business process tasks using Robotic Process Automation that can be employed across arrays of applications.</p></div></div><div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" width="55" height="70" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16"><path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"></path></svg></figure><div class="items-center card-body"><h2 class="card-title">Multimedia Production</h2><p class="text-justify">Creation of graphics design integrated in images, videos, or 3D animation for appealing visual representation.</p></div></div></div></div><div class="flex flex-col items-center justify-center mb-10 bg-blue-800 shadow-2xl h-128"><div class="flex max-w-screen-xl mx-auto items-justify"><div class="mt-5 ml-10 text-white bg-blue-800 card w-96"><div class="card-body"><h2 class="text-3xl text-orange-300 card-title">High Quality, High Security</h2><p>● Certified by international standards:ISO9001 (Quality) &amp; ISO27001 (Security).</p><p>● Presence of resident Japanese management.</p><p>● Various skill upgrade programs available including Japanese language.</p></div></div><div class="mt-5 ml-10 text-white bg-blue-800 border-white card w-96"><div class="card-body"><h2 class="text-3xl text-orange-300 card-title">High Reliability</h2><p>● Full back-up by in-the-building electric generator.</p><p>● All the terminals are UPS integrated.</p><p>● Multiple transmission lines (instant switch during system failure.)</p><p>● Integration of security cameras and room entry and exit management system.</p><p>● Private information protection management system.</p><p>● Internal rules conforming to JISQ15001:2006.</p></div></div><div class="mt-5 ml-10 text-white bg-blue-800 border-white card w-96"><div class="card-body"><h2 class="text-3xl text-orange-300 card-title">High Peformance</h2><p>● Data processing 24hrs/365 days/480 people.</p><p>● Data processing US/Europe and Asia regions.</p><p>● Processing of ledgers (fixed form) with Chinese characters.</p><p>● Verifying or comparing system available.</p></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/SoftDev_Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(this, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, b = Date.prototype.toISOString, g = o.default, v = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: g, formatter: o.formatters[g], indices: false, serializeDate: function(t4) {
  return b.call(t4);
}, skipNulls: false, strictNullHandling: false }, m = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, m2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !g2 ? u2(r2, v.encoder, m2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = g2 ? r2 : u2(r2, v.encoder, m2, "key", y2);
      if ("comma" === n2 && g2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2) E2 += (0 === S2 ? "" : ",") + b2(u2(O2[S2], v.encoder, m2, "value", y2));
        return [b2($2) + "=" + E2];
      }
      return [b2($2) + "=" + b2(u2(w2, v.encoder, m2, "value", y2))];
    }
    return [b2(r2) + "=" + b2(String(w2))];
  }
  var R2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) R2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) R2 = a2;
  else {
    var N2 = Object.keys(w2);
    R2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < R2.length; ++T2) {
    var k2 = R2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, m2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, S = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, R = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = S(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    if (!this.definition.methods.includes("GET")) return false;
    const e2 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i2 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i2})?` : `${e3}${i2}`;
    }).replace(/^\w+:\/\//, ""), [r2, n2] = t4.replace(/^\w+:\/\//, "").split("?"), o2 = new RegExp(`^${e2}/?$`).exec(decodeURI(r2));
    if (o2) {
      for (const t5 in o2.groups) o2.groups[t5] = "string" == typeof o2.groups[t5] ? decodeURIComponent(o2.groups[t5]) : o2.groups[t5];
      return { params: o2.groups, query: R(n2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return v;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || v.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = v.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : v.addQueryPrefix, allowDots: void 0 === t5.allowDots ? v.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : v.charsetSentinel, delimiter: void 0 === t5.delimiter ? v.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : v.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : v.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : v.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : v.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : v.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : v.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, m(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.v();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  v() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  has(t4) {
    return Object.keys(this.t.routes).includes(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.m(r2), this.j(e2, r2));
  }
  m(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
const Ziggy$1 = { "url": "http://laravue.test", "port": null, "defaults": {}, "routes": { "ignition.healthCheck": { "uri": "_ignition/health-check", "methods": ["GET", "HEAD"] }, "ignition.executeSolution": { "uri": "_ignition/execute-solution", "methods": ["POST"] }, "ignition.updateConfig": { "uri": "_ignition/update-config", "methods": ["POST"] }, "index": { "uri": "/", "methods": ["GET", "HEAD"] }, "about.index": { "uri": "about", "methods": ["GET", "HEAD"] }, "deservices.index": { "uri": "de-services", "methods": ["GET", "HEAD"] }, "mldservices.index": { "uri": "mld-services", "methods": ["GET", "HEAD"] }, "sdservices.index": { "uri": "sd-services", "methods": ["GET", "HEAD"] }, "dequote.index": { "uri": "de-quote", "methods": ["GET", "HEAD"] }, "sdquote.index": { "uri": "sd-quote", "methods": ["GET", "HEAD"] }, "blog.index": { "uri": "blog", "methods": ["GET", "HEAD"] }, "contact.index": { "uri": "contact", "methods": ["GET", "HEAD"] }, "privacy.index": { "uri": "privacy-policy", "methods": ["GET", "HEAD"] }, "recruitment.index": { "uri": "recruitment", "methods": ["GET", "HEAD"] }, "career.index": { "uri": "career", "methods": ["GET", "HEAD"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy$1.routes, window.Ziggy.routes);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Users/About.vue": __vite_glob_0_0, "./Pages/Users/Blog.vue": __vite_glob_0_1, "./Pages/Users/Career.vue": __vite_glob_0_2, "./Pages/Users/Contact.vue": __vite_glob_0_3, "./Pages/Users/DataEntryQuote.vue": __vite_glob_0_4, "./Pages/Users/DataEntry_Services.vue": __vite_glob_0_5, "./Pages/Users/Index.vue": __vite_glob_0_6, "./Pages/Users/MLD_Quote.vue": __vite_glob_0_7, "./Pages/Users/MLD_Services.vue": __vite_glob_0_8, "./Pages/Users/PrivacyPolicy.vue": __vite_glob_0_9, "./Pages/Users/Recruitment.vue": __vite_glob_0_10, "./Pages/Users/SD_Quote.vue": __vite_glob_0_11, "./Pages/Users/SoftDev_Services.vue": __vite_glob_0_12 });
      let page2 = pages[`./Pages/${name}.vue`];
      page2.default.layout = _sfc_main$d;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(k, Ziggy$1).component("Link", Link);
    }
  })
);
