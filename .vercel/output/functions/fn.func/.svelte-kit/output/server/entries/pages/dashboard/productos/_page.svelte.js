import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object, e as escape_attribute_value, j as escape, k as each, f as add_attribute, i as getContext, v as validate_component, h as compute_slots } from "../../../../chunks/ssr.js";
import "../../../../chunks/authLogin.js";
import { S as Section, B as Button } from "../../../../chunks/Button.js";
import { T as TableSearch, B as ButtonGroup, C as ChevronLeftOutline, a as ChevronRightOutline, P as PlusSolid, M as Modal, E as ExclamationCircleOutline, b as ChevronDownSolid, D as Dropdown, c as DropdownItem, F as FilterSolid, d as TableHead, e as TableHeadCell, f as TableBody, g as TableBodyRow, h as TableBodyCell, i as EditOutline, j as TrashBinOutline } from "../../../../chunks/TableSearch.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { W as Wrapper, L as Label, I as Input } from "../../../../chunks/Input.js";
import { twMerge } from "tailwind-merge";
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
let divClass = "bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden";
let innerDivClass = "flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4";
let searchClass = "w-full md:w-1/2 relative";
let classInput = "text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  pl-10";
const itemsPerPage = 10;
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let startRange;
  let endRange;
  let currentPageItems;
  let filteredItems;
  let formModal = false;
  let searchTerm = "";
  let currentPosition = 0;
  let totalPages = 0;
  let pagesToShow = [];
  let endPage;
  let paginationData = [];
  let totalItems;
  let categoriesNames;
  let measuresNames;
  let popupModal;
  let productName = "", unitOfMeasureName = "", categoryName = "", salePrice = "", productionPrice = "", presentationQuantity = "", productDescription = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    startRange = currentPosition + 1;
    endRange = Math.min(currentPosition + itemsPerPage, totalItems);
    currentPageItems = paginationData.slice(currentPosition, currentPosition + itemsPerPage);
    filteredItems = paginationData.filter((item) => item.product_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    $$rendered = `<div class="flex-1 p-4">${validate_component(Section, "Section").$$render(
      $$result,
      {
        classSection: "bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"
      },
      {},
      {
        default: () => {
          return `${validate_component(TableSearch, "TableSearch").$$render(
            $$result,
            {
              placeholder: "Buscar",
              hoverable: true,
              divClass,
              innerDivClass,
              searchClass,
              classInput,
              inputValue: searchTerm
            },
            {
              inputValue: ($$value) => {
                searchTerm = $$value;
                $$settled = false;
              }
            },
            {
              footer: () => {
                return `<div slot="footer" class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation"><span class="text-sm font-normal text-gray-500 dark:text-gray-400">Mostrando
            <span class="font-semibold text-gray-900 dark:text-white">${escape(startRange)}-${escape(endRange)}</span>
            de
            <span class="font-semibold text-gray-900 dark:text-white">${escape(totalItems)}</span></span> ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "" }, {}, {
                  default: () => {
                    return `${validate_component(Button, "Button").$$render($$result, { enable: currentPosition === 0 }, {}, {
                      default: () => {
                        return `${validate_component(ChevronLeftOutline, "ChevronLeftOutline").$$render($$result, { size: "xs", class: "m-1.5" }, {}, {})}`;
                      }
                    })} ${each(pagesToShow, (pageNumber) => {
                      return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(pageNumber)}`;
                        }
                      })}`;
                    })} ${validate_component(Button, "Button").$$render($$result, { enable: totalPages === endPage }, {}, {
                      default: () => {
                        return `${validate_component(ChevronRightOutline, "ChevronRightOutline").$$render($$result, { size: "xs", class: "m-1.5" }, {}, {})}`;
                      }
                    })}`;
                  }
                })}</div>`;
              },
              header: () => {
                return `<div slot="header" class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">${validate_component(Button, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(PlusSolid, "PlusSolid").$$render($$result, { class: "h-3.5 w-3.5 mr-2" }, {}, {})}
            Nuevo producto`;
                  }
                })} ${validate_component(Modal, "Modal").$$render(
                  $$result,
                  {
                    title: "Nuevo producto",
                    size: "xs",
                    autoclose: false,
                    class: "w-full",
                    open: formModal
                  },
                  {
                    open: ($$value) => {
                      formModal = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `<form><div class="grid gap-4 mb-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2" }, {}, {
                        default: () => {
                          return `Nombre`;
                        }
                      })} ${validate_component(Input, "Input").$$render(
                        $$result,
                        {
                          type: "text",
                          id: "name",
                          required: true,
                          value: productName
                        },
                        {
                          value: ($$value) => {
                            productName = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</div> <div>${validate_component(Label, "Label").$$render(
                        $$result,
                        {
                          for: "presentation",
                          class: "mb-2 appearance-none"
                        },
                        {},
                        {
                          default: () => {
                            return `Presentacion`;
                          }
                        }
                      )} ${validate_component(Input, "Input").$$render(
                        $$result,
                        {
                          type: "number",
                          id: "presentation",
                          required: true,
                          value: presentationQuantity
                        },
                        {
                          value: ($$value) => {
                            presentationQuantity = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
                        default: () => {
                          return `Medida
                      ${validate_component(Select, "Select").$$render(
                            $$result,
                            {
                              class: "mt-2",
                              value: unitOfMeasureName,
                              required: true
                            },
                            {},
                            {
                              default: () => {
                                return `${each(measuresNames, (measure) => {
                                  return `<option${add_attribute("value", measure.large_name, 0)}>${escape(measure.large_name)}</option>`;
                                })}`;
                              }
                            }
                          )}`;
                        }
                      })}</div> <div>${validate_component(Label, "Label").$$render($$result, {}, {}, {
                        default: () => {
                          return `Categoria
                      ${validate_component(Select, "Select").$$render(
                            $$result,
                            {
                              class: "mt-2",
                              value: categoryName,
                              required: true
                            },
                            {},
                            {
                              default: () => {
                                return `${escape(console.log(categoriesNames))} ${each(categoriesNames, (category) => {
                                  return `<option${add_attribute("value", category.category_name, 0)}>${escape(category.category_name)}</option>`;
                                })}`;
                              }
                            }
                          )}`;
                        }
                      })}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "price", class: "mb-2" }, {}, {
                        default: () => {
                          return `Costo fabricación`;
                        }
                      })} ${validate_component(Input, "Input").$$render(
                        $$result,
                        {
                          type: "number",
                          id: "price",
                          required: true,
                          value: productionPrice
                        },
                        {
                          value: ($$value) => {
                            productionPrice = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "sell-price", class: "mb-2" }, {}, {
                        default: () => {
                          return `Precio de venta`;
                        }
                      })} ${validate_component(Input, "Input").$$render(
                        $$result,
                        {
                          type: "number",
                          id: "sell-price",
                          required: true,
                          value: salePrice
                        },
                        {
                          value: ($$value) => {
                            salePrice = $$value;
                            $$settled = false;
                          }
                        },
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
                          rows: "2",
                          name: "description",
                          value: productDescription
                        },
                        {
                          value: ($$value) => {
                            productDescription = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-52" }, {}, {
                        default: () => {
                          return `<svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> ${`Agregar producto`}`;
                        }
                      })}</div></form>`;
                    }
                  }
                )} ${validate_component(Modal, "Modal").$$render(
                  $$result,
                  {
                    size: "xs",
                    autoclose: true,
                    open: popupModal
                  },
                  {
                    open: ($$value) => {
                      popupModal = $$value;
                      $$settled = false;
                    }
                  },
                  {
                    default: () => {
                      return `<div class="text-center">${validate_component(ExclamationCircleOutline, "ExclamationCircleOutline").$$render(
                        $$result,
                        {
                          class: "mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                        },
                        {},
                        {}
                      )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-41z5no">¿Estas seguro que deseas eliminar este producto?</h3> ${validate_component(Button, "Button").$$render($$result, { color: "red", class: "me-2" }, {}, {
                        default: () => {
                          return `Si, estoy seguro`;
                        }
                      })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
                        default: () => {
                          return `No, cancelar`;
                        }
                      })}</div>`;
                    }
                  }
                )} ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
                  default: () => {
                    return `Acciones${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render($$result, { class: "w-3 h-3 ml-2 " }, {}, {})}`;
                  }
                })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-44 divide-y divide-gray-100" }, {}, {
                  default: () => {
                    return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `Editar`;
                      }
                    })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `Borrar todo`;
                      }
                    })}`;
                  }
                })} ${validate_component(Button, "Button").$$render($$result, { color: "alternative", class: "hidden" }, {}, {
                  default: () => {
                    return `Filtrad${validate_component(FilterSolid, "FilterSolid").$$render($$result, { class: "w-3 h-3 ml-2 " }, {}, {})}`;
                  }
                })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-48 p-3 space-y-2 text-sm" }, {}, {
                  default: () => {
                    return `<h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-o9efy5">Choose brand</h6> <li>${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
                      default: () => {
                        return `Apple (56)`;
                      }
                    })}</li> <li>${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
                      default: () => {
                        return `Microsoft (16)`;
                      }
                    })}</li> <li>${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
                      default: () => {
                        return `Razor (49)`;
                      }
                    })}</li> <li>${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
                      default: () => {
                        return `Nikon (12)`;
                      }
                    })}</li> <li>${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
                      default: () => {
                        return `BenQ (74)`;
                      }
                    })}</li>`;
                  }
                })}</div>`;
              },
              default: () => {
                return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-4 py-3", scope: "col" }, {}, {
                      default: () => {
                        return `Nombre`;
                      }
                    })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-4 py-3", scope: "col" }, {}, {
                      default: () => {
                        return `Categoria`;
                      }
                    })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-4 py-3", scope: "col" }, {}, {
                      default: () => {
                        return `Medida`;
                      }
                    })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-4 py-3", scope: "col" }, {}, {
                      default: () => {
                        return `Presentacion`;
                      }
                    })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-4 py-3", scope: "col" }, {}, {
                      default: () => {
                        return `Precio de produccion`;
                      }
                    })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-4 py-3", scope: "col" }, {}, {
                      default: () => {
                        return `Precio de venta`;
                      }
                    })} ${validate_component(TableHeadCell, "TableHeadCell").$$render(
                      $$result,
                      {
                        class: "justify-end flex",
                        padding: "px-4 py-3",
                        scope: "col"
                      },
                      {},
                      {
                        default: () => {
                          return `Acciones`;
                        }
                      }
                    )}`;
                  }
                })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
                  default: () => {
                    return `${searchTerm !== "" ? `${each(filteredItems, (item) => {
                      return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.product_name)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.products_categories.category_name)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.units_of_measures.large_name)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.presentation_quantity)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.production_price)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.sale_price)}`;
                            }
                          })} <div class="justify-end flex">productName=producto.product_name=productName
                      categoryId=producto.category_id=categoryId
                      unitOfMeasureId=producto.unit_of_measure_id=unitofmeasureid
                      salePrice=producto.sale_price=salePrice
                      productionPrice=producto.production_price=productionPrice
                      presentationQuantity=producto.presentation_quantity=presentationQuantity
                      productDescription=producto.description=description

                      ${validate_component(Button, "Button").$$render($$result, { class: "!p-2 m-2", color: "primary" }, {}, {
                            default: () => {
                              return `${validate_component(EditOutline, "EditOutline").$$render($$result, { class: "w-5 h-5" }, {}, {})}`;
                            }
                          })} ${validate_component(Button, "Button").$$render($$result, { class: "!p-2 m-2", color: "red" }, {}, {
                            default: () => {
                              return `${validate_component(TrashBinOutline, "TrashBinOutline").$$render($$result, { class: "w-5 h-5" }, {}, {})}`;
                            }
                          })}</div> `;
                        }
                      })}`;
                    })}` : `${each(currentPageItems, (item) => {
                      return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.product_name)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.products_categories.category_name)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.units_of_measures.large_name)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.presentation_quantity)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.production_price)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.sale_price)}`;
                            }
                          })} <div class="justify-end flex">${validate_component(Button, "Button").$$render($$result, { class: "!p-2 m-2", color: "primary" }, {}, {
                            default: () => {
                              return `${validate_component(EditOutline, "EditOutline").$$render($$result, { class: "w-5 h-5" }, {}, {})}`;
                            }
                          })} ${validate_component(Button, "Button").$$render($$result, { class: "!p-2 m-2", color: "red" }, {}, {
                            default: () => {
                              return `${validate_component(TrashBinOutline, "TrashBinOutline").$$render($$result, { class: "w-5 h-5" }, {}, {})}`;
                            }
                          })}</div> `;
                        }
                      })}`;
                    })}`}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Products, "Products").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
