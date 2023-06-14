"use strict";
(() => {
var exports = {};
exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Ftest_absolutePagePath_private_next_pages_2Ftest_2Findex_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ next_route_loaderpage_2Ftest_absolutePagePath_private_next_pages_2Ftest_2Findex_js_preferredRegion_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/test/index.js
var test_namespaceObject = {};
__webpack_require__.r(test_namespaceObject);
__webpack_require__.d(test_namespaceObject, {
  "default": () => (test),
  getServerSideProps: () => (getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: ./src/pages/test/index.js

const Index = (props)=>{
    console.log("testIndo Props ::: ", props);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: "testIndex"
    });
};
const getServerSideProps = async (context)=>{
    return {
        props: {
            headers: context.req.headers
        }
    };
};
/* harmony default export */ const test = (Index);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Ftest&absolutePagePath=private-next-pages%2Ftest%2Findex.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Ftest_absolutePagePath_private_next_pages_2Ftest_2Findex_js_preferredRegion_ = ((0,helpers/* hoist */.l)(test_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(test_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(test_namespaceObject, "getStaticPaths")
        const next_route_loaderpage_2Ftest_absolutePagePath_private_next_pages_2Ftest_2Findex_js_preferredRegion_getServerSideProps = (0,helpers/* hoist */.l)(test_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(test_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(test_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(test_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(test_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(test_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(test_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(test_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/test","pathname":"/test","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: test_namespaceObject })
        
        
    

/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812], () => (__webpack_exec__(285)));
module.exports = __webpack_exports__;

})();