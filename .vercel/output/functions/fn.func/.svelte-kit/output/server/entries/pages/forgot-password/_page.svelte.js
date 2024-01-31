import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as Section, B as Button } from "../../../chunks/Button.js";
import { R as Register } from "../../../chunks/Register.js";
import { L as Label, I as Input } from "../../../chunks/Input.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid place-content-center place-items-center py-10">${validate_component(Section, "Section").$$render($$result, { name: "login" }, {}, {
    default: () => {
      return `${validate_component(Register, "Register").$$render($$result, { href: "/" }, {}, {
        top: () => {
          return `<img class="w-full h-full flex items-center text-primary-100 mb-3" src="src\\Images\\Logo.svg" alt="logo"> `;
        },
        default: () => {
          return `<div class="p-6 space-y-4 md:space-y-6 sm:p-8"><form class="grid gap-6 w-[560px] p-8 pl-9 pr-9" action="/"><h3 class="text-xl font-medium text-gray-900 dark:text-white p-0" data-svelte-h="svelte-1iov9x3">Recuperar contraseña</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "email",
                  name: "email",
                  required: true
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Button, "Button").$$render(
            $$result,
            {
              type: "submit",
              class: "w-full1 bg-primary-500"
            },
            {},
            {
              default: () => {
                return `Enviar`;
              }
            }
          )}</form></div>`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
