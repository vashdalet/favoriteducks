import { c as create_ssr_component, h as each, f as add_attribute } from "./ssr.js";
const Collection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ducks = [] } = $$props;
  if ($$props.ducks === void 0 && $$bindings.ducks && ducks !== void 0)
    $$bindings.ducks(ducks);
  return `<div class="grid space-y-12 flex-y grid-cols-3">${each(ducks, (item) => {
    return `<div class="flex items-center justify-center"><img class="w-4/5"${add_attribute("src", item, 0)}> </div>`;
  })}</div>`;
});
export {
  Collection as C
};
