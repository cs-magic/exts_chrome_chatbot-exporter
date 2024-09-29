"use strict";
(self["webpackChunk_cs_magic_exts_chrome_chatbot_exporter"] =
  self["webpackChunk_cs_magic_exts_chrome_chatbot_exporter"] || []).push([
  ["main"],
  {
    /***/ 288:
      /*!************************************!*\
  !*** ../../assets/styles/main.css ***!
  \************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ 682:
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _cs_magic_react_utils_mount_react_app__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @cs-magic/react/utils/mount-react-app */ 903);
        /* harmony import */ var _react_entry__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./react/entry */ 229);
        /* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../../assets/styles/main.css */ 288);
        // Check for dark mode preference

        const element = document.createElement("div");
        document.body.appendChild(element);
        (0,
        _cs_magic_react_utils_mount_react_app__WEBPACK_IMPORTED_MODULE_0__.mountReactApp)(
          element,
          _react_entry__WEBPACK_IMPORTED_MODULE_1__.Entry,
        );

        /***/
      },

    /***/ 229:
      /*!*****************************!*\
  !*** ./src/react/entry.tsx ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Entry: () => /* binding */ Entry,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react/jsx-runtime */ 85);
        /* harmony import */ var _cs_magic_react_hooks_use_dark_mode__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @cs-magic/react/hooks/use-dark-mode */ 829);
        /* harmony import */ var _cs_magic_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @cs-magic/shadcn/lib/utils */ 422);
        /* harmony import */ var _cs_magic_shadcn_ui_button__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @cs-magic/shadcn/ui/button */ 315);
        /* harmony import */ var _cs_magic_shadcn_ui_separator__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @cs-magic/shadcn/ui/separator */ 44);
        /* harmony import */ var _utils_exportChats__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ../utils/exportChats */ 376);

        const Entry = () => {
          const isDark = (0,
          _cs_magic_react_hooks_use_dark_mode__WEBPACK_IMPORTED_MODULE_1__.useDarkMode)();
          const theme = isDark
            ? "bg-gray-800 text-gray-200"
            : "bg-gray-200 text-gray-800";
          // console.log("matchMedia: ", window.matchMedia);
          const S = () =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _cs_magic_shadcn_ui_separator__WEBPACK_IMPORTED_MODULE_4__.Separator,
              {
                orientation: "horizontal",
                className: (0,
                _cs_magic_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  "grow w-auto bg-gray-900 ",
                  theme,
                ),
              },
            );
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _cs_magic_shadcn_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button,
            {
              onClick:
                _utils_exportChats__WEBPACK_IMPORTED_MODULE_5__.exportChats,
              className: "fixed bottom-1/2 right-2 sm:right-4",
              children: "Export",
            },
          );
        };

        /***/
      },

    /***/ 498:
      /*!****************************!*\
  !*** ./src/utils/const.ts ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CHATBOT_EXPORTER_APP_ID: () =>
            /* binding */ CHATBOT_EXPORTER_APP_ID,
          /* harmony export */ LlmPlatform: () => /* binding */ LlmPlatform,
          /* harmony export */
        });
        const CHATBOT_EXPORTER_APP_ID = "exts_chrome_chatbot-exporter";
        var LlmPlatform;
        (function (LlmPlatform) {
          LlmPlatform["default"] = "default";
          LlmPlatform["Claude"] = "Claude";
          LlmPlatform["ChatGPT"] = "ChatGPT";
          LlmPlatform["Perplexity"] = "Perplexity";
          LlmPlatform["Mita"] = "Mita";
          LlmPlatform["JieYue"] = "JieYue";
        })(LlmPlatform || (LlmPlatform = {}));

        /***/
      },

    /***/ 376:
      /*!**********************************!*\
  !*** ./src/utils/exportChats.ts ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ exportChats: () => /* binding */ exportChats,
          /* harmony export */
        });
        /* harmony import */ var _parse_document__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./parse-document */ 362);
        /* harmony import */ var _cs_magic_common_frontend_element2image__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @cs-magic/common-frontend/element2image */ 589,
          );
        /* harmony import */ var _cs_magic_common_datetime_format_today__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @cs-magic/common/datetime/format-today */ 273,
          );
        /* harmony import */ var _getConversationName__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./getConversationName */ 913);
        /* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./platform */ 698);

        const exportChats = () => {
          const element = (0,
          _parse_document__WEBPACK_IMPORTED_MODULE_0__.getScreenshotAreaElement)();
          if (!element) return alert("no content to be exported");
          console.log({ element });
          void (0,
          _cs_magic_common_frontend_element2image__WEBPACK_IMPORTED_MODULE_1__.element2image)(
            element,
            {
              approach: (0, _platform__WEBPACK_IMPORTED_MODULE_4__.isChatgpt)()
                ? "html2canvas"
                : "modern-screenshot",
              filename: `${(0, _cs_magic_common_datetime_format_today__WEBPACK_IMPORTED_MODULE_2__.formatToday)()} - chat - ${(0, _getConversationName__WEBPACK_IMPORTED_MODULE_3__.getConversationName)()}.jpeg`,
            },
          );
        };

        /***/
      },

    /***/ 913:
      /*!******************************************!*\
  !*** ./src/utils/getConversationName.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getConversationName: () =>
            /* binding */ getConversationName,
          /* harmony export */
        });
        const getConversationName = () => {
          return document.querySelector("title").textContent;
        };

        /***/
      },

    /***/ 362:
      /*!*************************************!*\
  !*** ./src/utils/parse-document.ts ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ checkLlmPlatform: () =>
            /* binding */ checkLlmPlatform,
          /* harmony export */ getScreenshotAreaElement: () =>
            /* binding */ getScreenshotAreaElement,
          /* harmony export */
        });
        /* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./const */ 498);

        const checkLlmPlatform = () => {
          const url = window.location.href.toLowerCase();
          console.log({ url });
          if (url.startsWith("https://chatgpt.com/c/"))
            return _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.ChatGPT;
          if (url.startsWith("https://claude.ai/chat/"))
            return _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.Claude;
          if (url.startsWith("https://www.perplexity.ai/search/"))
            return _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.Perplexity;
          if (url.startsWith("https://metaso.cn/search/"))
            return _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.Mita;
          if (url.startsWith("https://yuewen.cn/chats/"))
            return _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.JieYue;
          return _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.default;
        };
        const getScreenshotAreaElement = () => {
          const llmPlatform = checkLlmPlatform();
          console.log({ llmPlatform });
          switch (llmPlatform) {
            case _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.Perplexity:
              return document.querySelector(".col-span-8");
            case _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.ChatGPT:
              return document.querySelector(".composer-parent")
                .firstElementChild;
            case _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.Claude:
              return document.querySelector(".sticky.bottom-0")
                .previousElementSibling;
            case _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.Mita:
              return document.querySelector(
                "[class*='Search_search-result__']",
              );
            case _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.JieYue:
              return document.querySelector("[class*='message-list_inner__']");
            default:
              return null;
          }
        };

        /***/
      },

    /***/ 698:
      /*!*******************************!*\
  !*** ./src/utils/platform.ts ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ isChatgpt: () => /* binding */ isChatgpt,
          /* harmony export */ isClaude: () => /* binding */ isClaude,
          /* harmony export */ isPerplexityAI: () =>
            /* binding */ isPerplexityAI,
          /* harmony export */
        });
        const isChatgpt = () => window.origin.includes("chatgpt.com");
        const isClaude = () => window.origin.includes("claude.ai");
        const isPerplexityAI = () => window.origin.includes("perplexity.ai");

        /***/
      },

    /***/ 589:
      /*!************************************************************!*\
  !*** ../../packages_frontend/common/dist/element2image.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ element2image: () => /* binding */ element2image,
          /* harmony export */ svgElement2svgString: () =>
            /* binding */ svgElement2svgString,
          /* harmony export */
        });
        /* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! html2canvas */ 317);
        /* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            html2canvas__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var modern_screenshot__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! modern-screenshot */ 615);

        // Function to get the maximum width based on viewport
        const svgElement2svgString = (svg) =>
          new XMLSerializer().serializeToString(svg);
        // Function to get the maximum width based on viewport
        function getMaxWidth() {
          if (window.innerWidth >= 1280) {
            return 768; // xl:max-w-[48rem]
          } else if (window.innerWidth >= 1024) {
            return 640; // lg:max-w-[40rem]
          } else if (window.innerWidth >= 768) {
            return 768; // md:max-w-3xl
          }
          return window.innerWidth; // For smaller screens, use full width
        }
        const element2image = async (
          element,
          {
            approach = "modern-screenshot",
            filename = "screenshot",
            backgroundColor = "white",
            format = "jpeg",
          },
        ) => {
          console.log("-- element2png start");
          let data;
          const maxWidth = getMaxWidth();
          // 此时可以进行截图操作
          switch (approach) {
            case "html2canvas":
              const canvas =
                await html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(
                  element,
                  {
                    logging: true,
                    allowTaint: true,
                    useCORS: true, // scrollY: -window.scrollY,
                    height: element.scrollHeight,
                    windowHeight: element.scrollHeight,
                    backgroundColor: backgroundColor, // chatgpt (#171717)
                    scale: 2,
                  },
                );
              // Crop the canvas if necessary
              // todo: 剪切还有点问题
              // if (canvas.width > maxWidth) {
              //   const croppedCanvas = document.createElement("canvas");
              //   croppedCanvas.width = maxWidth;
              //   croppedCanvas.height = canvas.height;
              //   const ctx = croppedCanvas.getContext("2d");
              //   const centerShift = (canvas.width - maxWidth) / 2;
              //   ctx.drawImage(
              //     canvas,
              //     centerShift,
              //     0,
              //     maxWidth,
              //     canvas.height,
              //     0,
              //     0,
              //     maxWidth,
              //     canvas.height,
              //   );
              //   data = croppedCanvas.toDataURL("image/png");
              // } else
              data = canvas.toDataURL("image/jpeg");
              break;
            case "modern-screenshot":
              data = await (0,
              modern_screenshot__WEBPACK_IMPORTED_MODULE_1__.domToDataUrl)(
                element,
                {
                  scale: 2,
                  quality: 0.7,
                  backgroundColor: backgroundColor,
                },
              );
              break;
          }
          const link = document.createElement("a");
          link.download = filename;
          link.href = data;
          link.click();
          console.log("-- element2png end");
        };
        //# sourceMappingURL=element2image.js.map

        /***/
      },

    /***/ 829:
      /*!*****************************************************************!*\
  !*** ../../packages_frontend/react/dist/hooks/use-dark-mode.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ useDarkMode: () => /* binding */ useDarkMode,
          /* harmony export */
        });
        /* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react-responsive */ 231);

        const useDarkMode = () =>
          (0, react_responsive__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)({
            query: "(prefers-color-scheme: dark)",
          });
        //# sourceMappingURL=use-dark-mode.js.map

        /***/
      },

    /***/ 903:
      /*!*******************************************************************!*\
  !*** ../../packages_frontend/react/dist/utils/mount-react-app.js ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ mountReactApp: () => /* binding */ mountReactApp,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react/jsx-runtime */ 85);
        /* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react-dom/client */ 873);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! react */ 41);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__,
          );

        const mountReactApp = (container, ReactElement) => {
          const root =
            react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(container);
          root.render(
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react__WEBPACK_IMPORTED_MODULE_2___default().StrictMode,
              {
                children: (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  ReactElement,
                  {},
                ),
              },
            ),
          );
        };
        //# sourceMappingURL=mount-react-app.js.map

        /***/
      },

    /***/ 422:
      /*!********************************************************!*\
  !*** ../../packages_frontend/shadcn/dist/lib/utils.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ cn: () => /* binding */ cn,
          /* harmony export */
        });
        /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! clsx */ 357);
        /* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! tailwind-merge */ 73);

        function cn(...inputs) {
          return (0, tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)(
            (0, clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs),
          );
        }
        //# sourceMappingURL=utils.js.map

        /***/
      },

    /***/ 315:
      /*!********************************************************!*\
  !*** ../../packages_frontend/shadcn/dist/ui/button.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Button: () => /* binding */ Button,
          /* harmony export */ buttonVariants: () =>
            /* binding */ buttonVariants,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react/jsx-runtime */ 85);
        /* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @radix-ui/react-slot */ 45);
        /* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! class-variance-authority */ 699);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! react */ 41);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../lib/utils */ 422);

        const buttonVariants = (0,
        class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.cva)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: {
              variant: "default",
              size: "default",
            },
          },
        );
        const Button = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(
          ({ className, variant, size, asChild = false, ...props }, ref) => {
            const Comp = asChild
              ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot
              : "button";
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              Comp,
              {
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(
                  buttonVariants({ variant, size, className }),
                ),
                ref: ref,
                ...props,
              },
            );
          },
        );
        Button.displayName = "Button";

        //# sourceMappingURL=button.js.map

        /***/
      },

    /***/ 44:
      /*!***********************************************************!*\
  !*** ../../packages_frontend/shadcn/dist/ui/separator.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Separator: () => /* binding */ Separator,
          /* harmony export */
        });
        /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react/jsx-runtime */ 85);
        /* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @radix-ui/react-separator */ 464);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! react */ 41);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../lib/utils */ 422);
        ("use client");

        const Separator = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
          (
            {
              className,
              orientation = "horizontal",
              decorative = true,
              ...props
            },
            ref,
          ) =>
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__.Root,
              {
                ref: ref,
                decorative: decorative,
                orientation: orientation,
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(
                  "shrink-0 bg-border",
                  orientation === "horizontal"
                    ? "h-[1px] w-full"
                    : "h-full w-[1px]",
                  className,
                ),
                ...props,
              },
            ),
        );
        Separator.displayName =
          _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;

        //# sourceMappingURL=separator.js.map

        /***/
      },

    /***/ 273:
      /*!***********************************************************!*\
  !*** ../../packages/common/dist/datetime/format-today.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ formatToday: () => /* binding */ formatToday,
          /* harmony export */
        });
        const formatToday = (format = "YYYY-mm-dd") => {
          const today = new Date();
          return today.toISOString().split("T")[0];
        };
        //# sourceMappingURL=format-today.js.map

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ __webpack_require__.O(0, ["vendors"], () => __webpack_exec__(682));
    /******/ var __webpack_exports__ = __webpack_require__.O();
    /******/
  },
]);
//# sourceMappingURL=main.js.map
