import { defineEventHandler } from 'h3';

const jsonPlaceholder = defineEventHandler((event) => {
  return { api: "works" };
});

export { jsonPlaceholder as default };
//# sourceMappingURL=json-placeholder.mjs.map
