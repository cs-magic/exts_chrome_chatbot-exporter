"use strict";
(self["webpackChunk_cs_magic_exts_chrome_chatbot_exporter"] = self["webpackChunk_cs_magic_exts_chrome_chatbot_exporter"] || []).push([["main"],{

/***/ 288:
/*!************************************!*\
  !*** ../../assets/styles/main.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 682:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react/row */ 569);
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/styles/main.css */ 288);
/* harmony import */ var _utils_getContentAreaElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getContentAreaElement */ 673);
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/const */ 498);
/* harmony import */ var _cs_magic_exts_chrome_claude_artifact_enhancer_src_react_bridge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cs-magic/exts_chrome_claude-artifact-enhancer/src/react/bridge */ 559);





// Check for dark mode preference
if (localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
}
else {
    document.documentElement.classList.remove("dark");
}
const observer = new MutationObserver(async (mutations, observer) => {
    const contentAreaElement = (0,_utils_getContentAreaElement__WEBPACK_IMPORTED_MODULE_2__.getContentAreaElement)();
    if (!contentAreaElement)
        return;
    const app = document.querySelector(`#${_utils_const__WEBPACK_IMPORTED_MODULE_3__.APP_ID}`);
    if (app)
        return;
    console.log("-- mounting");
    const div = document.createElement("div");
    div.id = _utils_const__WEBPACK_IMPORTED_MODULE_3__.APP_ID;
    (0,_cs_magic_exts_chrome_claude_artifact_enhancer_src_react_bridge__WEBPACK_IMPORTED_MODULE_4__.mountReactApp)(div, _react_row__WEBPACK_IMPORTED_MODULE_0__.Row);
    contentAreaElement.parentElement.insertBefore(
    // why div is ok, but div.firstElementChild is null
    div, contentAreaElement.nextElementSibling);
});
observer.observe(document.body, { subtree: true, childList: true });


/***/ }),

/***/ 569:
/*!***************************!*\
  !*** ./src/react/row.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Row: () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 85);
/* harmony import */ var _cs_magic_shadcn_dist_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cs-magic/shadcn/dist/ui/button */ 315);
/* harmony import */ var _cs_magic_shadcn_dist_ui_separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cs-magic/shadcn/dist/ui/separator */ 44);
/* harmony import */ var _cs_magic_shadcn_dist_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cs-magic/shadcn/dist/lib/utils */ 422);
/* harmony import */ var _cs_magic_react_dist_hooks_use_dark_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cs-magic/react/dist/hooks/use-dark-mode */ 829);
/* harmony import */ var _utils_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/platform */ 698);
/* harmony import */ var _utils_exportChats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/exportChats */ 376);







const Row = () => {
    const isDark = (0,_cs_magic_react_dist_hooks_use_dark_mode__WEBPACK_IMPORTED_MODULE_4__.useDarkMode)();
    const theme = isDark
        ? "bg-gray-800 text-gray-200"
        : "bg-gray-200 text-gray-800";
    // console.log("matchMedia: ", window.matchMedia);
    const S = () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cs_magic_shadcn_dist_ui_separator__WEBPACK_IMPORTED_MODULE_2__.Separator, { orientation: "horizontal", className: (0,_cs_magic_shadcn_dist_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("grow w-auto bg-gray-900 ", theme) }));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_cs_magic_shadcn_dist_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex justify-center items-center w-full overflow-hidden gap-2", (0,_utils_platform__WEBPACK_IMPORTED_MODULE_5__.isChatgpt)() && "m-2"), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_cs_magic_shadcn_dist_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex justify-center items-center w-full", (0,_utils_platform__WEBPACK_IMPORTED_MODULE_5__.isChatgpt)() && "md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]"), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(S, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cs_magic_shadcn_dist_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, { className: (0,_cs_magic_shadcn_dist_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("shrink-0 hover:bg-gray-300 dark:hover:bg-gray-700", theme), onClick: () => {
                        (0,_utils_exportChats__WEBPACK_IMPORTED_MODULE_6__.exportChats)({ isDark });
                    }, children: "Export" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(S, {})] }) }));
};


/***/ }),

/***/ 498:
/*!****************************!*\
  !*** ./src/utils/const.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_ID: () => (/* binding */ APP_ID)
/* harmony export */ });
const APP_ID = "chatbot-exporter";


/***/ }),

/***/ 376:
/*!**********************************!*\
  !*** ./src/utils/exportChats.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportChats: () => (/* binding */ exportChats)
/* harmony export */ });
/* harmony import */ var _getContentAreaElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getContentAreaElement */ 673);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform */ 698);
/* harmony import */ var _cs_magic_common_dist_datetime_format_today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cs-magic/common/dist/datetime/format-today */ 273);
/* harmony import */ var _getConversationName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getConversationName */ 913);
/* harmony import */ var _cs_magic_exts_chrome_claude_artifact_enhancer_src_utils_element2png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cs-magic/exts_chrome_claude-artifact-enhancer/src/utils/element2png */ 685);





const exportChats = ({ isDark }) => {
    let targetElement = (0,_getContentAreaElement__WEBPACK_IMPORTED_MODULE_0__.getContentAreaElement)();
    if ((0,_platform__WEBPACK_IMPORTED_MODULE_1__.isChatgpt)())
        targetElement = targetElement.querySelector(
        // 4个不行，5 个缺头部，6 个比较完整
        ":first-child > :first-child > :first-child > :first-child > :first-child > :first-child");
    void (0,_cs_magic_exts_chrome_claude_artifact_enhancer_src_utils_element2png__WEBPACK_IMPORTED_MODULE_4__.element2png)(targetElement, {
        approach: (0,_platform__WEBPACK_IMPORTED_MODULE_1__.isChatgpt)() ? "html2canvas" : "modern-screenshot",
        filename: `${(0,_cs_magic_common_dist_datetime_format_today__WEBPACK_IMPORTED_MODULE_2__.formatToday)()} - chat - ${(0,_getConversationName__WEBPACK_IMPORTED_MODULE_3__.getConversationName)()}.jpeg`,
        backgroundColor: isDark
            ? "#171717"
            : // "rgb(249, 249, 249)",
                "white",
    });
};


/***/ }),

/***/ 673:
/*!********************************************!*\
  !*** ./src/utils/getContentAreaElement.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContentAreaElement: () => (/* binding */ getContentAreaElement)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ 698);

const getContentAreaElement = () => {
    if ((0,_platform__WEBPACK_IMPORTED_MODULE_0__.isClaude)())
        return document.querySelector(".sticky.bottom-0")?.parentElement
            .firstElementChild;
    if ((0,_platform__WEBPACK_IMPORTED_MODULE_0__.isChatgpt)())
        return document.querySelector(".composer-parent > :nth-child(1)");
};


/***/ }),

/***/ 913:
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

/***/ 698:
/*!*******************************!*\
  !*** ./src/utils/platform.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isChatgpt: () => (/* binding */ isChatgpt),
/* harmony export */   isClaude: () => (/* binding */ isClaude)
/* harmony export */ });
const isChatgpt = () => window.origin.includes("chatgpt.com");
const isClaude = () => window.origin.includes("claude.ai");


/***/ }),

/***/ 559:
/*!********************************************************!*\
  !*** ../claude-artifact-enhancer/src/react/bridge.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mountReactApp: () => (/* binding */ mountReactApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 85);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ 873);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 41);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const mountReactApp = (container, ReactElement) => {
    const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(container);
    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_2___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ReactElement, {}) }));
};


/***/ }),

/***/ 685:
/*!************************************************************!*\
  !*** ../claude-artifact-enhancer/src/utils/element2png.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   element2png: () => (/* binding */ element2png)
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ 317);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modern_screenshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modern-screenshot */ 615);


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
const element2png = async (element, { approach = "modern-screenshot", filename = "screenshot", backgroundColor = "white", }) => {
    console.log("-- element2png start");
    let data;
    const maxWidth = getMaxWidth();
    // 此时可以进行截图操作
    switch (approach) {
        case "html2canvas":
            const canvas = await html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(element, {
                logging: true,
                allowTaint: true,
                useCORS: true,
                // scrollY: -window.scrollY,
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
            data = await (0,modern_screenshot__WEBPACK_IMPORTED_MODULE_1__.domToJpeg)(element, {
                scale: 1,
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


/***/ }),

/***/ 829:
/*!*****************************************************************!*\
  !*** ../../packages_frontend/react/dist/hooks/use-dark-mode.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDarkMode: () => (/* binding */ useDarkMode)
/* harmony export */ });
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-responsive */ 231);

const useDarkMode = () => (0,react_responsive__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)({
    query: "(prefers-color-scheme: dark)",
});
//# sourceMappingURL=use-dark-mode.js.map

/***/ }),

/***/ 422:
/*!********************************************************!*\
  !*** ../../packages_frontend/shadcn/dist/lib/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ 357);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ 73);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 315:
/*!********************************************************!*\
  !*** ../../packages_frontend/shadcn/dist/ui/button.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 85);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ 45);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-variance-authority */ 699);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 41);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utils */ 422);





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

/***/ 44:
/*!***********************************************************!*\
  !*** ../../packages_frontend/shadcn/dist/ui/separator.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 85);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-separator */ 464);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 41);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ 422);
"use client";




const Separator = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__.Root, { ref: ref, decorative: decorative, orientation: orientation, className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props })));
Separator.displayName = _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;

//# sourceMappingURL=separator.js.map

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
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(682)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map