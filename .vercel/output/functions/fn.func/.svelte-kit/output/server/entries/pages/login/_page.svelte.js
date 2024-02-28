import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as Section, B as Button } from "../../../chunks/Button.js";
import { R as Register } from "../../../chunks/Register.js";
import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { L as Label, I as Input } from "../../../chunks/Input.js";
import "../../../chunks/authLogin.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email, password;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="grid place-content-center py-10">${validate_component(Section, "Section").$$render($$result, { name: "login" }, {}, {
      default: () => {
        return `${validate_component(Register, "Register").$$render($$result, { href: "/dashboard" }, {}, {
          top: () => {
            return `<img class="w-full h-full flex items-center text-primary-100 mb-3" src="src\\Images\\Logo.svg" alt="logo"> `;
          },
          default: () => {
            return `<div class="p-6 space-y-4 md:space-y-6 sm:p-8"><form class="grid gap-6 w-[560px] p-8 pl-9 pr-9" action="/"><h3 class="text-xl font-medium text-gray-900 dark:text-white p-0" data-svelte-h="svelte-1g69ywr">Iniciar sesion</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
              default: () => {
                return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    type: "email",
                    name: "email",
                    required: true,
                    value: email
                  },
                  {
                    value: ($$value) => {
                      email = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
              default: () => {
                return `<span data-svelte-h="svelte-17ch52x">Contraseña</span> ${validate_component(Input, "Input").$$render(
                  $$result,
                  {
                    type: "password",
                    name: "password",
                    required: true,
                    value: password
                  },
                  {
                    value: ($$value) => {
                      password = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} <div class="flex items-start">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
              default: () => {
                return `Recordarme`;
              }
            })} <a href="/forgot-password" class="ml-auto text-sm text-primary-500 hover:underline dark:text-primary-50" data-svelte-h="svelte-5n9oc7">¿Olvidaste tu contraseña?</a></div> ${validate_component(Button, "Button").$$render(
              $$result,
              {
                type: "submit",
                class: "w-full1 bg-primary-500"
              },
              {},
              {
                default: () => {
                  return `Iniciar sesion`;
                }
              }
            )}</form></div>`;
          }
        })}`;
      }
    })}</div> <div>${``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
