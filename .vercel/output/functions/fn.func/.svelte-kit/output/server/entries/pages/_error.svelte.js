import { c as create_ssr_component, f as add_attribute, h as compute_slots, v as validate_component } from "../../chunks/ssr.js";
import { S as Section, B as Button } from "../../chunks/Button.js";
import { twMerge } from "tailwind-merge";
const Page404 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { divClass = "mx-auto max-w-screen-sm text-center" } = $$props;
  let { h1Class = "mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.h1Class === void 0 && $$bindings.h1Class && h1Class !== void 0)
    $$bindings.h1Class(h1Class);
  return `<div${add_attribute("class", twMerge(divClass, $$props.class), 0)}>${$$slots.h1 ? `<h1${add_attribute("class", twMerge(h1Class, $$props.classH1), 0)}>${slots.h1 ? slots.h1({}) : ``}</h1>` : ``} ${$$slots.paragraph ? `${slots.paragraph ? slots.paragraph({}) : ``}` : ``}</div> `;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, { name: "page404" }, {}, {
    default: () => {
      return `${validate_component(Page404, "Page404").$$render($$result, {}, {}, {
        paragraph: () => {
          return `<p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white" data-svelte-h="svelte-zlhil8">Something&#39;s missing.</p> <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400" data-svelte-h="svelte-iwmc9v">Sorry, we can&#39;t find that page. You&#39;ll find lots to explore on the home page.</p> ${validate_component(Button, "Button").$$render($$result, { href: "/", size: "lg", color: "red" }, {}, {
            default: () => {
              return `Back to Homepage`;
            }
          })} `;
        },
        h1: () => {
          return `404`;
        }
      })}`;
    }
  })}`;
});
export {
  Error as default
};
