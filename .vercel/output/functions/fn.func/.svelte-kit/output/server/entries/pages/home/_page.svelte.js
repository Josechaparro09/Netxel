import { c as create_ssr_component, a as compute_rest_props, i as getContext, b as spread, d as escape_object, e as escape_attribute_value, f as add_attribute, h as compute_slots, v as validate_component, m as missing_component, g as subscribe } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { a as authLogin } from "../../../chunks/authLogin.js";
import { S as Section, B as Button } from "../../../chunks/Button.js";
import { twMerge } from "tailwind-merge";
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
  })}`;
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
