

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.fMChQqon.js","_app/immutable/chunks/scheduler.lHPrymrU.js","_app/immutable/chunks/index.B-dY1sAa.js"];
export const stylesheets = [];
export const fonts = [];
