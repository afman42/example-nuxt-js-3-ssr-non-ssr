import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData.60cc2edd.mjs';
import { u as useHead } from './composables.47855756.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "json-placeholder",
      () => $fetch("https://jsonplaceholder.typicode.com/posts")
    )), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "My App",
      meta: [{ name: "description", content: "My amazing site." }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-2" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="card mb-2"><div class="card-body"><h3>${ssrInterpolate(item.title)}</h3><p>${ssrInterpolate(item.body)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.c9a834f8.mjs.map
