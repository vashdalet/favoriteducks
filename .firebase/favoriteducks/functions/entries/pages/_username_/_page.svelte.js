import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Collection } from "../../../chunks/Collection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="content-center">${validate_component(Collection, "Collection").$$render($$result, { ducks: data.ducks }, {}, {})}</main>`;
});
export {
  Page as default
};
