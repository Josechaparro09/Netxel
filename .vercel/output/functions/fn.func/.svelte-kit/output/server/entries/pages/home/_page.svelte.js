import { c as create_ssr_component, a as compute_rest_props, k as getContext, b as spread, d as escape_object, e as escape_attribute_value, f as add_attribute, h as compute_slots, v as validate_component, m as missing_component, j as escape, l as each, i as createEventDispatcher, g as subscribe } from "../../../chunks/ssr.js";
import { a as authLogin } from "../../../chunks/client.js";
import { S as Section, B as Button } from "../../../chunks/Button.js";
import { twMerge } from "tailwind-merge";
import { L as Label, I as Input } from "../../../chunks/Input.js";
import { F as Frame } from "../../../chunks/Frame.js";
import { W as Wrapper } from "../../../chunks/Wrapper.js";
const ArrowRightSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "arrow right solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 14 12" }
    ],
    {}
  )}><path fill="currentColor" d="M13.923 6.382a1 1 0 0 0-.217-1.09l-4-4a1 1 0 1 0-1.414 1.414L10.586 5H1a1 1 0 0 0 0 2h9.586L8.293 9.293a1 1 0 1 0 1.414 1.414l4-4a.999.999 0 0 0 .216-.325Z"></path></svg> `;
});
const BriefcaseSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "briefcase solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 20 20" }
    ],
    {}
  )}><g fill="currentColor"><path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z"></path><path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z"></path></g></svg> `;
});
const ChartSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "chart solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 18 16" }
    ],
    {}
  )}><g fill="currentColor"><path d="M17 14H2V1a1 1 0 0 0-2 0v14a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2Z"></path><path d="M5 12a.999.999 0 0 0 .8-.4l2.432-3.244 2.213 1.476a1 1 0 0 0 1.412-.317l2.461-4.1 2.127 1.418a1 1 0 0 0 1.11-1.664l-3-2a1 1 0 0 0-1.412.317l-2.461 4.1-2.127-1.418A1 1 0 0 0 7.2 6.4l-3 4A1 1 0 0 0 5 12Z"></path></g></svg> `;
});
const ChevronRightSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "chevron right solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 6 10" }
    ],
    {}
  )}><path fill="currentColor" d="M1.01 10a.997.997 0 0 1-.705-1.705L3.59 5.006.305 1.717A.999.999 0 1 1 1.715.305L5.709 4.3a1 1 0 0 1 0 1.412L1.716 9.707A.998.998 0 0 1 1.01 10Z"></path></svg> `;
});
const CogOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "cog outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 20 20" }
    ],
    {}
  )}><g stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)}><path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z"></path><path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path></g></svg> `;
});
const DollarSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "dollar solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 11 20" }
    ],
    {}
  )}><path fill="currentColor" d="M7.146 4.688c.808.18 1.54.608 2.093 1.224a1 1 0 0 0 1.522-1.3A5.991 5.991 0 0 0 7.62 2.744c-.208-.05-.413-.068-.62-.1V1.417a1 1 0 1 0-2 0v1.257a4.5 4.5 0 0 0-3.735 3.02A3.6 3.6 0 0 0 1.7 8.526 6.322 6.322 0 0 0 5.648 11.3c1.105.24 2.073.9 2.7 1.841a1.687 1.687 0 0 1 .235 1.284c-.352 1.273-2.16 1.978-3.954 1.542a3.962 3.962 0 0 1-2.108-1.243 1 1 0 1 0-1.535 1.283 5.964 5.964 0 0 0 3.169 1.9c.28.067.563.116.849.145v.864a1 1 0 1 0 2 0v-.976a4.456 4.456 0 0 0 3.507-2.984 3.607 3.607 0 0 0-.438-2.83 6.334 6.334 0 0 0-3.946-2.773 4.357 4.357 0 0 1-2.7-1.84 1.692 1.692 0 0 1-.235-1.285c.353-1.271 2.164-1.976 3.954-1.54Z"></path></svg> `;
});
const LandmarkSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "landmark solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 20 20" }
    ],
    {}
  )}><path fill="currentColor" d="M2 15a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2h-1V9h1a1 1 0 0 0 1-1V7a.999.999 0 0 0-.4-.8l-8-6a1 1 0 0 0-1.2 0l-8 6A1 1 0 0 0 1 7v1a1 1 0 0 0 1 1h1v6H2Zm7 0V9h2v6H9Zm6 0h-2V9h2v6ZM5 9h2v6H5V9Zm14 9H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"></path></svg> `;
});
const RocketSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "rocket solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 20 20" }
    ],
    {}
  )}><path fill="currentColor" d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.115 1.115 0 0 0 1.89.63l2.361-2.362.38-4.475-5.103 3.067Zm8.617-14.283A1.614 1.614 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.631 2.631 0 1 1-3.72-3.722 2.631 2.631 0 0 1 3.72 3.722Z"></path></svg> `;
});
const FeatureDefault = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass = "space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${add_attribute("class", twMerge(divClass, $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const FeatureItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { divClass = "flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900" } = $$props;
  let { h3Class = "mb-2 text-xl font-bold dark:text-white" } = $$props;
  let { pClass = "text-gray-500 dark:text-gray-400" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.h3Class === void 0 && $$bindings.h3Class && h3Class !== void 0)
    $$bindings.h3Class(h3Class);
  if ($$props.pClass === void 0 && $$bindings.pClass && pClass !== void 0)
    $$bindings.pClass(pClass);
  return `<div>${$$slots.icon ? `<div${add_attribute("class", twMerge(divClass, $$props.class), 0)}>${slots.icon ? slots.icon({}) : ``}</div>` : ``} ${$$slots.h3 ? `<h3${add_attribute("class", twMerge(h3Class, $$props.classh3), 0)}>${slots.h3 ? slots.h3({}) : ``}</h3>` : ``} ${$$slots.paragraph ? `<p${add_attribute("class", twMerge(pClass, $$props.classp), 0)}>${slots.paragraph ? slots.paragraph({}) : ``}</p>` : ``}</div> `;
});
const HeroHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["h1Class", "h2Class", "pClass"]);
  let $$slots = compute_slots(slots);
  let { h1Class = "mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white" } = $$props;
  let { h2Class = "mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl" } = $$props;
  let { pClass = "mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" } = $$props;
  if ($$props.h1Class === void 0 && $$bindings.h1Class && h1Class !== void 0)
    $$bindings.h1Class(h1Class);
  if ($$props.h2Class === void 0 && $$bindings.h2Class && h2Class !== void 0)
    $$bindings.h2Class(h2Class);
  if ($$props.pClass === void 0 && $$bindings.pClass && pClass !== void 0)
    $$bindings.pClass(pClass);
  return `<div${add_attribute("class", $$props.class, 0)}>${$$slots.h1 ? `<h1${spread(
    [
      {
        class: escape_attribute_value(twMerge(h1Class, $$props.classH1))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.h1 ? slots.h1({}) : ``}</h1>` : ``} ${$$slots.h2 ? `<h2${add_attribute("class", twMerge(h2Class, $$props.classH2), 0)}>${slots.h2 ? slots.h2({}) : ``}</h2>` : ``} ${$$slots.paragraph ? `<p${add_attribute("class", twMerge(pClass, $$props.classP), 0)}>${slots.paragraph ? slots.paragraph({}) : ``}</p>` : ``} ${slots.default ? slots.default({}) : ``}</div> `;
});
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "classA"]);
  let { href = "/" } = $$props;
  let { classA = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.classA === void 0 && $$bindings.classA && classA !== void 0)
    $$bindings.classA(classA);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700", classA))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``} ${validate_component(ChevronRightSolid || missing_component, "svelte:component").$$render(
    $$result,
    {
      size: "xs",
      class: twMerge("ml-2", $$props.class)
    },
    {},
    {}
  )}</a> `;
});
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ms-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value = void 0 } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0)
    $$bindings.underlineClass(underlineClass);
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$props.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}>${placeholder ? `<option disabled selected value="">${escape(placeholder)}</option>` : ``}${items.length ? each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  }) : `${slots.default ? slots.default({}) : ``}`}</select> `;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "wrappedClass", "unWrappedClass", "innerWrappedClass"]);
  let $$slots = compute_slots(slots);
  const background = getContext("background");
  let { value = void 0 } = $$props;
  let { wrappedClass = "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0" } = $$props;
  let { unWrappedClass = "p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { innerWrappedClass = "py-2 px-4 bg-white dark:bg-gray-800" } = $$props;
  let wrapped;
  let wrapperClass;
  let textareaClass;
  const headerClass = (header) => twMerge(header ? "border-b" : "border-t", "py-2 px-3 border-gray-200 dark:border-gray-600");
  let innerWrapperClass;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.wrappedClass === void 0 && $$bindings.wrappedClass && wrappedClass !== void 0)
    $$bindings.wrappedClass(wrappedClass);
  if ($$props.unWrappedClass === void 0 && $$bindings.unWrappedClass && unWrappedClass !== void 0)
    $$bindings.unWrappedClass(unWrappedClass);
  if ($$props.innerWrappedClass === void 0 && $$bindings.innerWrappedClass && innerWrappedClass !== void 0)
    $$bindings.innerWrappedClass(innerWrappedClass);
  wrapped = $$slots.header || $$slots.footer;
  wrapperClass = twMerge(
    "w-full rounded-lg",
    background ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700",
    "text-gray-900 dark:placeholder-gray-400 dark:text-white ",
    "border border-gray-200 dark:border-gray-600",
    $$props.class
  );
  textareaClass = wrapped ? wrappedClass : twMerge(wrapperClass, unWrappedClass);
  innerWrapperClass = twMerge(innerWrappedClass, $$slots.footer ? "" : "rounded-b-lg", $$slots.header ? "" : "rounded-t-lg");
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: wrapperClass }, {}, {
    default: () => {
      return `${$$slots.header ? `<div${add_attribute("class", headerClass(true), 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} ${validate_component(Wrapper, "Wrapper").$$render($$result, { show: wrapped, class: innerWrapperClass }, {}, {
        default: () => {
          return `<textarea${spread(
            [
              escape_object($$restProps),
              {
                class: escape_attribute_value(textareaClass)
              }
            ],
            {}
          )}>${escape(value || "")}</textarea>`;
        }
      })} ${$$slots.footer ? `<div${add_attribute("class", headerClass(false), 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
    }
  })} `;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "dismissable",
    "backdropClass",
    "defaultClass",
    "outsideclose",
    "dialogClass"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { dismissable = true } = $$props;
  let { backdropClass = "fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { outsideclose = false } = $$props;
  let { dialogClass = "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex" } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  let backdropCls = twMerge(backdropClass, $$props.classBackdrop);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0)
    $$bindings.backdropClass(backdropClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0)
    $$bindings.outsideclose(outsideclose);
  if ($$props.dialogClass === void 0 && $$bindings.dialogClass && dialogClass !== void 0)
    $$bindings.dialogClass(dialogClass);
  {
    dispatch(open ? "open" : "close");
  }
  frameClass = twMerge(defaultClass, "w-full divide-y", $$props.class);
  return `${open ? ` <div${add_attribute("class", backdropCls, 0)}></div>   <div${add_attribute("class", twMerge(dialogClass, $$props.classDialog, ...getPlacementClasses()), 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return ` ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t-lg"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3> `} ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : ``}  <div${add_attribute("class", twMerge("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain", $$props.bodyClass), 0)} role="document">${dismissable && !$$slots.header && !title ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 end-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``} ${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rtl:space-x-reverse rounded-b-lg"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { classSection: "h-96" }, {}, {
      default: () => {
        return `<div class="flex justify-center m-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Nueva categoria`;
          }
        })}</div> ${validate_component(Modal, "Modal").$$render(
          $$result,
          {
            title: "Nueva categoria",
            autoclose: true,
            class: "min-w-full",
            open: defaultModal
          },
          {
            open: ($$value) => {
              defaultModal = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<form><div class="grid gap-4 mb-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "Nombre", class: "mb-2" }, {}, {
                default: () => {
                  return `Name`;
                }
              })} ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "name", required: true }, {}, {})}</div> <div class="justify-center bottom-0 right-0 flex items-end">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-52 h-50 " }, {}, {
                default: () => {
                  return `<svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                Agregar categoria`;
                }
              })}</div></div></form>`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const UnitOfMesures = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { classSection: "h-96" }, {}, {
      default: () => {
        return `<div class="flex justify-center m-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Nueva medida`;
          }
        })}</div> ${validate_component(Modal, "Modal").$$render(
          $$result,
          {
            title: "Nueva medida",
            autoclose: true,
            class: "min-w-full",
            open: defaultModal
          },
          {
            open: ($$value) => {
              defaultModal = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<form><div class="grid gap-4 mb-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "Nombre corto", class: "mb-2" }, {}, {
                default: () => {
                  return `Nombre corto`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  id: "short-name",
                  required: true
                },
                {},
                {}
              )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "Nombre largo", class: "mb-2" }, {}, {
                default: () => {
                  return `Nombre largo`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  id: "large-name",
                  required: true
                },
                {},
                {}
              )}</div></div> <div class="justify-center bottom-0 right-0 flex items-end">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-52 h-50 " }, {}, {
                default: () => {
                  return `<svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Agregar medida`;
                }
              })}</div></form>`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Providers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { classSection: "h-96" }, {}, {
      default: () => {
        return `<div class="flex justify-center m-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Nuevo proveedor`;
          }
        })}</div> ${validate_component(Modal, "Modal").$$render(
          $$result,
          {
            title: "Nuevo proveedor",
            autoclose: true,
            class: "min-w-full",
            open: defaultModal
          },
          {
            open: ($$value) => {
              defaultModal = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<form><div class="grid gap-4 mb-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "Nombre", class: "mb-2" }, {}, {
                default: () => {
                  return `Nombre`;
                }
              })} ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "name", required: true }, {}, {})}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "telefono", class: "mb-2" }, {}, {
                default: () => {
                  return `Telefono`;
                }
              })} ${validate_component(Input, "Input").$$render($$result, { type: "tel", id: "phone", required: true }, {}, {})}</div></div> <div class="justify-center bottom-0 right-0 flex items-end">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-52 h-50 " }, {}, {
                default: () => {
                  return `<svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Agregar proveedor`;
                }
              })}</div></form>`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Employees = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { classSection: "h-96" }, {}, {
      default: () => {
        return `<div class="flex justify-center m-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Nuevo empleado`;
          }
        })}</div> ${validate_component(Modal, "Modal").$$render(
          $$result,
          {
            title: "Nuevo empleado",
            autoclose: true,
            class: "min-w-full",
            open: defaultModal
          },
          {
            open: ($$value) => {
              defaultModal = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<form><div class="grid gap-4 mb-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "Cedula", class: "mb-2" }, {}, {
                default: () => {
                  return `Cedula`;
                }
              })} ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "id", required: true }, {}, {})}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "Nombre", class: "mb-2" }, {}, {
                default: () => {
                  return `Nombre`;
                }
              })} ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "name", required: true }, {}, {})}</div></div> <div class="pb-5">${validate_component(Label, "Label").$$render($$result, { for: "Apellido", class: "mb-2" }, {}, {
                default: () => {
                  return `Apellido`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  id: "lastname",
                  required: true
                },
                {},
                {}
              )}</div> <div class="justify-center bottom-0 right-0 flex items-end">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-52 h-50 " }, {}, {
                default: () => {
                  return `<svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Agregar empleado`;
                }
              })}</div></form>`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  let measureSelected;
  let categorySelected;
  let measures = [
    { value: "cc", name: "Centimetro cubico" },
    { value: "ml", name: "Mililitro" },
    { value: "L", name: "Litro" }
  ];
  let categories = [
    { value: "Vinagre", name: "Vinagre" },
    { value: "Salsa", name: "Salsa" },
    { value: "Esencia", name: "Esencia" }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { classSection: "h-96" }, {}, {
      default: () => {
        return `<div class="flex justify-center m-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Nuevo producto`;
          }
        })}</div> ${validate_component(Modal, "Modal").$$render(
          $$result,
          {
            title: "Nuevo producto",
            autoclose: true,
            class: "min-w-full",
            open: defaultModal
          },
          {
            open: ($$value) => {
              defaultModal = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<form><div class="grid gap-4 mb-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2" }, {}, {
                default: () => {
                  return `Name`;
                }
              })} ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "name", required: true }, {}, {})}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "presentation", class: "mb-2" }, {}, {
                default: () => {
                  return `Presentacion`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  id: "presentation",
                  required: true
                },
                {},
                {}
              )}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Medida
                  ${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      class: "mt-2",
                      items: measures,
                      required: true,
                      value: measureSelected
                    },
                    {
                      value: ($$value) => {
                        measureSelected = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Categoria
                  ${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      class: "mt-2",
                      items: categories,
                      required: true,
                      value: categorySelected
                    },
                    {
                      value: ($$value) => {
                        categorySelected = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "price", class: "mb-2" }, {}, {
                default: () => {
                  return `Costo fabricación`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  id: "price",
                  required: true
                },
                {},
                {}
              )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "sell-price", class: "mb-2" }, {}, {
                default: () => {
                  return `Precio de venta`;
                }
              })} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  id: "sell-price",
                  required: true
                },
                {},
                {}
              )}</div> <div class="sm:col-span-2">${validate_component(Label, "Label").$$render($$result, { for: "description", class: "mb-2" }, {}, {
                default: () => {
                  return `Descripción`;
                }
              })} ${validate_component(Textarea, "Textarea").$$render(
                $$result,
                {
                  id: "description",
                  placeholder: "Describe el producto",
                  rows: "4",
                  name: "description"
                },
                {},
                {}
              )}</div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-52" }, {}, {
                default: () => {
                  return `<svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Agregar producto`;
                }
              })}</div></form>`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const RawMaterials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let defaultModal = false;
  let measureSelected;
  let providerSelected;
  let measures = [
    { value: "cc", name: "Centimetro cubico" },
    { value: "ml", name: "Mililitro" },
    { value: "L", name: "Litro" }
  ];
  let providers = [
    { value: "cc", name: "Centimetro cubico" },
    { value: "ml", name: "Mililitro" },
    { value: "L", name: "Litro" }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Section, "Section").$$render($$result, { classSection: "h-96" }, {}, {
      default: () => {
        return `<div class="flex justify-center m-5">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Nuevo insumo`;
          }
        })}</div> ${validate_component(Modal, "Modal").$$render(
          $$result,
          {
            title: "Nuevo insumo",
            autoclose: true,
            class: "min-w-full",
            open: defaultModal
          },
          {
            open: ($$value) => {
              defaultModal = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `<form><div class="grid gap-4 mb-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "Nombre", class: "mb-2" }, {}, {
                default: () => {
                  return `Nombre`;
                }
              })} ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "name", required: true }, {}, {})}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Medida
                  ${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      class: "mt-2",
                      items: measures,
                      required: true,
                      value: measureSelected
                    },
                    {
                      value: ($$value) => {
                        measureSelected = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}</div></div> <div class="justify-center ">${validate_component(Label, "Label").$$render($$result, {}, {}, {
                default: () => {
                  return `Proveedor
              ${validate_component(Select, "Select").$$render(
                    $$result,
                    {
                      class: "mt-2",
                      items: providers,
                      required: true,
                      value: providerSelected
                    },
                    {
                      value: ($$value) => {
                        providerSelected = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}`;
                }
              })}</div> <div class="justify-center bottom-0 right-0 flex items-end m-5">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-52 h-50 " }, {}, {
                default: () => {
                  return `<svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
              Agregar insumo`;
                }
              })}</div></form>`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid place-items-center">${validate_component(Section, "Section").$$render($$result, { name: "heroDefault" }, {}, {
    default: () => {
      return `${validate_component(News, "News").$$render($$result, {}, {}, {
        default: () => {
          return `<a href="/login" data-svelte-h="svelte-1y9my44"><span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Ingresa</span> <span class="text-sm font-medium">Explora todas las opciones</span></a>`;
        }
      })} ${validate_component(HeroHeader, "HeroHeader").$$render($$result, {}, {}, {
        paragraph: () => {
          return `Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.`;
        },
        h1: () => {
          return `Bienvenido a Netxel`;
        }
      })} <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"><a href="/login">${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "bg-primary-50 text-white ",
          size: "lg"
        },
        {},
        {
          default: () => {
            return `Iniciar sesion ${validate_component(ArrowRightSolid, "ArrowRightSolid").$$render(
              $$result,
              {
                size: "md",
                class: "ml-2 -mr-1 to-primary-900"
              },
              {},
              {}
            )}`;
          }
        }
      )}</a></div>`;
    }
  })}</div> ${validate_component(Section, "Section").$$render($$result, { name: "feature" }, {}, {
    default: () => {
      return `${validate_component(HeroHeader, "HeroHeader").$$render(
        $$result,
        {
          class: "max-w-screen-md mb-8 lg:mb-16",
          h2Class: "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white",
          pClass: "text-gray-500 sm:text-xl dark:text-gray-400"
        },
        {},
        {
          paragraph: () => {
            return `Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.`;
          },
          h2: () => {
            return `Designed for business teams like yours`;
          }
        }
      )} ${validate_component(FeatureDefault, "FeatureDefault").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(FeatureItem, "FeatureItem").$$render($$result, {}, {}, {
            paragraph: () => {
              return `Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.`;
            },
            h3: () => {
              return `Marketing`;
            },
            icon: () => {
              return `${validate_component(ChartSolid, "ChartSolid").$$render(
                $$result,
                {
                  class: "text-primary-600 dark:text-primary-300"
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(FeatureItem, "FeatureItem").$$render($$result, {}, {}, {
            paragraph: () => {
              return `Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.`;
            },
            h3: () => {
              return `Legal`;
            },
            icon: () => {
              return `${validate_component(LandmarkSolid, "LandmarkSolid").$$render(
                $$result,
                {
                  class: "text-primary-600 dark:text-primary-300"
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(FeatureItem, "FeatureItem").$$render($$result, {}, {}, {
            paragraph: () => {
              return `Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.`;
            },
            h3: () => {
              return `Business Automation`;
            },
            icon: () => {
              return `${validate_component(BriefcaseSolid, "BriefcaseSolid").$$render(
                $$result,
                {
                  class: "text-primary-600 dark:text-primary-300"
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(FeatureItem, "FeatureItem").$$render($$result, {}, {}, {
            paragraph: () => {
              return `Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.`;
            },
            h3: () => {
              return `Finance`;
            },
            icon: () => {
              return `${validate_component(DollarSolid, "DollarSolid").$$render(
                $$result,
                {
                  class: "text-primary-600 dark:text-primary-300"
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(FeatureItem, "FeatureItem").$$render($$result, {}, {}, {
            paragraph: () => {
              return `Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.`;
            },
            h3: () => {
              return `Enterprise Design`;
            },
            icon: () => {
              return `${validate_component(RocketSolid, "RocketSolid").$$render(
                $$result,
                {
                  class: "text-primary-600 dark:text-primary-300"
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(FeatureItem, "FeatureItem").$$render($$result, {}, {}, {
            paragraph: () => {
              return `Keep your company&#39;s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.`;
            },
            h3: () => {
              return `Operations`;
            },
            icon: () => {
              return `${validate_component(CogOutline, "CogOutline").$$render(
                $$result,
                {
                  class: "text-primary-600 dark:text-primary-300"
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      })}`;
    }
  })} <div class="flex items-center justify-center">${validate_component(Categories, "Categories").$$render($$result, {}, {}, {})} ${validate_component(UnitOfMesures, "UnitOfMesures").$$render($$result, {}, {}, {})} ${validate_component(Providers, "Providers").$$render($$result, {}, {}, {})} ${validate_component(Employees, "Employees").$$render($$result, {}, {}, {})} ${validate_component(Products, "Products").$$render($$result, {}, {}, {})} ${validate_component(RawMaterials, "RawMaterials").$$render($$result, {}, {}, {})} <a href="/dashboard" data-svelte-h="svelte-13yqw9x"><button class="bg-primary-300">dashboard</button></a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let user = authLogin.user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<main>${!$user ? `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}` : ``}</main>`;
});
export {
  Page as default
};
