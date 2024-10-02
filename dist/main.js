"use strict";
(self["webpackChunk_cs_magic_exts_chrome_chatbot_exporter"] = self["webpackChunk_cs_magic_exts_chrome_chatbot_exporter"] || []).push([["main"],{

/***/ 3960:
/*!*************************!*\
  !*** ./assets/logo.svg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 4041);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _circle, _circle2, _circle3;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 6,
    d: "M32 48h64a16 16 0 0 1 0 32H32a16 16 0 0 1 0-32"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 6,
    d: "M64 80v24l8-8"
  })), _circle || (_circle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 48,
    cy: 64,
    r: 4,
    fill: "currentColor"
  })), _circle2 || (_circle2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 64,
    cy: 64,
    r: 4,
    fill: "currentColor"
  })), _circle3 || (_circle3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 80,
    cy: 64,
    r: 4,
    fill: "currentColor"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgLogo);

/***/ }),

/***/ 4288:
/*!************************************!*\
  !*** ../../assets/styles/main.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 3461:
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ID: () => (/* binding */ APP_ID)
/* harmony export */ });
const APP_ID = "chatbot-exporter";


/***/ }),

/***/ 8682:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ 3461);
/* harmony import */ var _cs_magic_react_utils_mount_react_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cs-magic/react/utils/mount-react-app */ 3687);
/* harmony import */ var _react_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react/entry */ 8229);
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/styles/main.css */ 4288);

 // Check for dark mode preference


console.log(_config__WEBPACK_IMPORTED_MODULE_0__.APP_ID, "init...");
const element = document.createElement("div");
document.body.appendChild(element);
(0,_cs_magic_react_utils_mount_react_app__WEBPACK_IMPORTED_MODULE_1__.mountReactApp)(element, _react_entry__WEBPACK_IMPORTED_MODULE_2__.Entry);


/***/ }),

/***/ 8229:
/*!*****************************!*\
  !*** ./src/react/entry.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Entry: () => (/* binding */ Entry)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 1085);
/* harmony import */ var _utils_use_export_chats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/use-export-chats */ 4615);
/* harmony import */ var _cs_magic_shadcn_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cs-magic/shadcn/ui/button */ 7953);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 4041);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-draggable */ 9463);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/logo.svg */ 3960);






const Entry = () => {
    const [dragging, setDragging] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const exportChats = (0,_utils_use_export_chats__WEBPACK_IMPORTED_MODULE_1__.useExportChats)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_draggable__WEBPACK_IMPORTED_MODULE_4___default()), { axis: "y", onDrag: () => {
            // console.log("== drag");
            setDragging(true);
        }, onStop: () => {
            if (!dragging) {
                // onClick
                exportChats();
            }
            setDragging(false);
            // console.log("== drag end");
        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cs_magic_shadcn_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", className: "fixed top-1/3 right-0 z-[9999] !rounded-l-full bg-indigo-500/50 hover:bg-indigo-500 text-white !w-12 !h-8", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__["default"], { width: 32 }) }) }));
};


/***/ }),

/***/ 6498:
/*!****************************!*\
  !*** ./src/utils/const.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHATBOT_EXPORTER_APP_ID: () => (/* binding */ CHATBOT_EXPORTER_APP_ID),
/* harmony export */   LlmPlatform: () => (/* binding */ LlmPlatform)
/* harmony export */ });
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


/***/ }),

/***/ 3913:
/*!******************************************!*\
  !*** ./src/utils/getConversationName.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getConversationName: () => (/* binding */ getConversationName)
/* harmony export */ });
const getConversationName = () => {
    return document.querySelector("title").textContent;
};


/***/ }),

/***/ 2362:
/*!*************************************!*\
  !*** ./src/utils/parse-document.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkLlmPlatform: () => (/* binding */ checkLlmPlatform),
/* harmony export */   getScreenshotAreaElement: () => (/* binding */ getScreenshotAreaElement)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ 6498);

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
            return document.querySelector(".composer-parent").firstElementChild;
        case _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.Claude:
            return document.querySelector(".sticky.bottom-0").previousElementSibling;
        case _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.Mita:
            return document.querySelector("[class*='Search_search-result__']");
        case _const__WEBPACK_IMPORTED_MODULE_0__.LlmPlatform.JieYue:
            return document.querySelector("[class*='message-list_inner__']");
        default:
            return null;
    }
};


/***/ }),

/***/ 6698:
/*!*******************************!*\
  !*** ./src/utils/platform.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isChatgpt: () => (/* binding */ isChatgpt),
/* harmony export */   isClaude: () => (/* binding */ isClaude),
/* harmony export */   isPerplexityAI: () => (/* binding */ isPerplexityAI)
/* harmony export */ });
const isChatgpt = () => window.origin.includes("chatgpt.com");
const isClaude = () => window.origin.includes("claude.ai");
const isPerplexityAI = () => window.origin.includes("perplexity.ai");


/***/ }),

/***/ 4615:
/*!***************************************!*\
  !*** ./src/utils/use-export-chats.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExportChats: () => (/* binding */ useExportChats)
/* harmony export */ });
/* harmony import */ var _parse_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-document */ 2362);
/* harmony import */ var _cs_magic_common_frontend_element2image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cs-magic/common-frontend/element2image */ 2275);
/* harmony import */ var _cs_magic_common_datetime_format_today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cs-magic/common/datetime/format-today */ 273);
/* harmony import */ var _cs_magic_react_hooks_use_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cs-magic/react/hooks/use-dark-mode */ 4805);
/* harmony import */ var _getConversationName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getConversationName */ 3913);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./platform */ 6698);






const useExportChats = () => {
    const backgroundColor = (0,_cs_magic_react_hooks_use_dark_mode__WEBPACK_IMPORTED_MODULE_3__.useDarkMode)() ? "#21211E" : "white";
    return () => {
        const element = (0,_parse_document__WEBPACK_IMPORTED_MODULE_0__.getScreenshotAreaElement)();
        if (!element)
            return alert("no content to be exported");
        console.log({ element });
        void (0,_cs_magic_common_frontend_element2image__WEBPACK_IMPORTED_MODULE_1__.element2image)(element, {
            approach: (0,_platform__WEBPACK_IMPORTED_MODULE_5__.isChatgpt)() ? "html2canvas" : "modern-screenshot",
            filename: `${(0,_cs_magic_common_datetime_format_today__WEBPACK_IMPORTED_MODULE_2__.formatToday)()} - chat - ${(0,_getConversationName__WEBPACK_IMPORTED_MODULE_4__.getConversationName)()}.jpeg`,
            backgroundColor: backgroundColor,
        });
    };
};


/***/ }),

/***/ 2275:
/*!************************************************************!*\
  !*** ../../packages/frontend-common/dist/element2image.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   element2image: () => (/* binding */ element2image),
/* harmony export */   svgElement2svgString: () => (/* binding */ svgElement2svgString)
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ 8317);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modern_screenshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modern-screenshot */ 7615);

 // Function to get the maximum width based on viewport
const svgElement2svgString = (svg) => new XMLSerializer().serializeToString(svg);
// Function to get the maximum width based on viewport
function getMaxWidth() {
    if (window.innerWidth >= 1280) {
        return 768; // xl:max-w-[48rem]
    }
    else if (window.innerWidth >= 1024) {
        return 640; // lg:max-w-[40rem]
    }
    else if (window.innerWidth >= 768) {
        return 768; // md:max-w-3xl
    }
    return window.innerWidth; // For smaller screens, use full width
}
const element2image = async (element, { approach = "modern-screenshot", filename = "screenshot", backgroundColor = "white", format = "jpeg", }) => {
    console.log("-- element2png start");
    let data;
    const maxWidth = getMaxWidth();
    // 此时可以进行截图操作
    switch (approach) {
        case "html2canvas":
            const canvas = await html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(element, {
                logging: true,
                allowTaint: true,
                useCORS: true, // scrollY: -window.scrollY,
                height: element.scrollHeight,
                windowHeight: element.scrollHeight,
                backgroundColor: backgroundColor, // chatgpt (#171717)
                scale: 2,
            });
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
            data = await (0,modern_screenshot__WEBPACK_IMPORTED_MODULE_1__.domToDataUrl)(element, {
                scale: 2,
                quality: 0.7,
                backgroundColor: backgroundColor,
            });
            break;
    }
    const link = document.createElement("a");
    link.download = filename;
    link.href = data;
    link.click();
    console.log("-- element2png end");
};
//# sourceMappingURL=element2image.js.map

/***/ }),

/***/ 8419:
/*!********************************************************!*\
  !*** ../../packages/frontend-shadcn/dist/lib/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ 4357);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ 9073);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 7953:
/*!********************************************************!*\
  !*** ../../packages/frontend-shadcn/dist/ui/button.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 1085);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ 45);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-variance-authority */ 5699);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 4041);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utils */ 8419);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
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
});
const Button = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot : "button";
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp, { className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({ variant, size, className })), ref: ref, ...props });
});
Button.displayName = "Button";

//# sourceMappingURL=button.js.map

/***/ }),

/***/ 4805:
/*!***********************************************************!*\
  !*** ../../packages/frontend/dist/hooks/use-dark-mode.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDarkMode: () => (/* binding */ useDarkMode)
/* harmony export */ });
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-responsive */ 5231);

const useDarkMode = () => (0,react_responsive__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)({
    query: "(prefers-color-scheme: dark)",
});
//# sourceMappingURL=use-dark-mode.js.map

/***/ }),

/***/ 3687:
/*!*************************************************************!*\
  !*** ../../packages/frontend/dist/utils/mount-react-app.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mountReactApp: () => (/* binding */ mountReactApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 1085);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ 5873);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 4041);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const mountReactApp = (container, ReactElement) => {
    const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(container);
    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_2___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReactElement, {}) }));
};
//# sourceMappingURL=mount-react-app.js.map

/***/ }),

/***/ 273:
/*!***********************************************************!*\
  !*** ../../packages/common/dist/datetime/format-today.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatToday: () => (/* binding */ formatToday)
/* harmony export */ });
const formatToday = (format = "YYYY-mm-dd") => {
    const today = new Date();
    return today.toISOString().split("T")[0];
};
//# sourceMappingURL=format-today.js.map

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(8682)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map