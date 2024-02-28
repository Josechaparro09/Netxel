import { c as create_ssr_component, v as validate_component, j as escape, k as each } from "../../../../chunks/ssr.js";
import { S as Section, B as Button } from "../../../../chunks/Button.js";
import { T as TableSearch, B as ButtonGroup, C as ChevronLeftOutline, a as ChevronRightOutline, P as PlusSolid, M as Modal, E as ExclamationCircleOutline, b as ChevronDownSolid, D as Dropdown, c as DropdownItem, F as FilterSolid, d as TableHead, e as TableHeadCell, f as TableBody, g as TableBodyRow, h as TableBodyCell, i as EditOutline, j as TrashBinOutline } from "../../../../chunks/TableSearch.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { L as Label, I as Input } from "../../../../chunks/Input.js";
import "../../../../chunks/authLogin.js";
let divClass = "bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden";
let innerDivClass = "flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4";
let searchClass = "w-full md:w-1/2 relative";
let classInput = "text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  pl-10";
const itemsPerPage = 10;
const UnitOfMesures = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let startRange;
  let endRange;
  let currentPageItems;
  let filteredItems;
  let shortname;
  let largename;
  let formModal = false;
  let searchTerm = "";
  let currentPosition = 0;
  let totalPages = 0;
  let pagesToShow = [];
  let endPage;
  let paginationData = [];
  let totalItems;
  let popupModal;
  const medida = { id: null, short_name: "", large_name: "" };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    startRange = currentPosition + 1;
    endRange = Math.min(currentPosition + itemsPerPage, totalItems);
    currentPageItems = paginationData.slice(currentPosition, currentPosition + itemsPerPage);
    filteredItems = paginationData.filter((item) => item.large_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    $$rendered = `${validate_component(Section, "Section").$$render(
      $$result,
      {
        classSection: "bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 flex-1 p-4 "
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
        Nueva medida`;
                  }
                })} ${validate_component(Modal, "Modal").$$render(
                  $$result,
                  {
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
                      return `<form><div class="grid gap-4 mb-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "Nombre corto", class: "mb-2" }, {}, {
                        default: () => {
                          return `Nombre corto`;
                        }
                      })} ${validate_component(Input, "Input").$$render(
                        $$result,
                        {
                          type: "text",
                          id: "short-name",
                          required: true,
                          value: shortname
                        },
                        {
                          value: ($$value) => {
                            shortname = $$value;
                            $$settled = false;
                          }
                        },
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
                          required: true,
                          value: largename
                        },
                        {
                          value: ($$value) => {
                            largename = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</div></div> <div class="justify-center bottom-0 right-0 flex items-end">${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-52 h-50 " }, {}, {
                        default: () => {
                          return `<svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> ${`Agregar medida`}`;
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
                      )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-5pyi6y">¿Estas seguro que deseas eliminar esta medida?</h3> <h4 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"><b data-svelte-h="svelte-172nbna">Nombre corto:</b> ${escape(medida.short_name)}</h4> <h4 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"><b data-svelte-h="svelte-1152742">Nombre largo:</b> ${escape(medida.large_name)}</h4> ${validate_component(Button, "Button").$$render($$result, { color: "red", class: "me-2" }, {}, {
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
                    return `Filter${validate_component(FilterSolid, "FilterSolid").$$render($$result, { class: "w-3 h-3 ml-2 " }, {}, {})}`;
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
                        return `Nombre corto`;
                      }
                    })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-4 py-3", scope: "col" }, {}, {
                      default: () => {
                        return `Nombre largo`;
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
                              return `${escape(item.short_name)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.large_name)}`;
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
                    })}` : `${each(currentPageItems, (item) => {
                      return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.short_name)}`;
                            }
                          })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4 py-3" }, {}, {
                            default: () => {
                              return `${escape(item.large_name)}`;
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
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(UnitOfMesures, "UnitOfMesures").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
