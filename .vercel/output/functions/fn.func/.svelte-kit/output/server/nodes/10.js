

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/Providers/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.fMChQqon.js","_app/immutable/chunks/scheduler.lHPrymrU.js","_app/immutable/chunks/index.B-dY1sAa.js"];
export const stylesheets = [];
export const fonts = [];
