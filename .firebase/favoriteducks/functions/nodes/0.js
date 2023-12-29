

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CPFQOgqV.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.dsD1ntpQ.js"];
export const stylesheets = ["_app/immutable/assets/0.F8HqK_d8.css"];
export const fonts = [];
