import { c as create_ssr_component, b as validate_store, d as subscribe, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { C as Collection } from "../../chunks/Collection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let href;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  href = `http://${$page.url.host}/${data.uid}`;
  $$unsubscribe_page();
  return `<main class="content-center"><h1 class="text-7xl text-purple-400 text-center mx-auto mt-8" data-svelte-h="svelte-7myi0b">Welcome to Dasha&#39;s webpage!</h1> <div class="text-xl my-8 text-center font-light"><p class="my-3" data-svelte-h="svelte-i4lgm3">Here you can save images of ducks and then share them with your friends</p> <p class="my-2">Link to share your collection: <a class="font-bold text-green-400"${add_attribute("href", href, 0)}>${escape(href)}</a></p> <button class="btn btn-accent mx-auto my-4" data-svelte-h="svelte-zqi0j6">Copy link</button></div> <div class="flex items-center justify-center"><img class="w-3/5 "${add_attribute("src", data.imgURL, 0)} alt="Duck image"></div> <form method="POST"><input name="imgURL" hidden${add_attribute("value", data.imgURL, 0)}> <button class="btn btn-outline btn-primary block mx-auto my-4" data-svelte-h="svelte-wdoy09">Add to your collection</button></form> <p class="text-xl mt-20 text-center font-bold" data-svelte-h="svelte-1oybtg4">Here&#39;s your collection:</p> ${validate_component(Collection, "Collection").$$render($$result, { ducks: data.ducks }, {}, {})}</main>`;
});
export {
  Page as default
};
