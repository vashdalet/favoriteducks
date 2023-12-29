import * as server from '../entries/pages/_username_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.Q3pFXnuz.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.dsD1ntpQ.js","_app/immutable/chunks/Collection.j2FBTavz.js"];
export const stylesheets = [];
export const fonts = [];
