import { _ as __nuxt_component_0$1 } from '../server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5 d-flex flex-column" }, _attrs))}><div class="d-flex flex-row justify-content-center">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "btn btn-primary mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SSR`);
          } else {
            return [
              createTextVNode("SSR")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/no-ssr",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`NO SSR`);
          } else {
            return [
              createTextVNode("NO SSR")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.c353310f.mjs.map
