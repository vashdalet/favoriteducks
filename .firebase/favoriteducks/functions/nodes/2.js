import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.VZIyo9Ww.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.dsD1ntpQ.js","_app/immutable/chunks/stores.D0llsTpk.js","_app/immutable/chunks/singletons.5H7OgA2i.js","_app/immutable/chunks/Collection.j2FBTavz.js"];
export const stylesheets = [];
export const fonts = [];
