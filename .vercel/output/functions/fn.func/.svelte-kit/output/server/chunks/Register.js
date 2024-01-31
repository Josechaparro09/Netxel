import { c as create_ssr_component, f as add_attribute, h as compute_slots } from "./ssr.js";
import { twMerge } from "tailwind-merge";
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { href = "" } = $$props;
  let { aClass = "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white" } = $$props;
  let { divClass = "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `${$$slots.top ? `<a${add_attribute("href", href, 0)}${add_attribute("class", twMerge(aClass, $$props.class), 0)}>${slots.top ? slots.top({}) : ``}</a>` : ``} <div${add_attribute("class", twMerge(divClass, $$props.classDiv), 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
export {
  Register as R
};
