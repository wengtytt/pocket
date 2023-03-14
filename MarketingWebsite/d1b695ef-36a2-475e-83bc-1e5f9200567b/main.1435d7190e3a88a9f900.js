"use strict";(self.webpackChunkbuilder=self.webpackChunkbuilder||[]).push([[432],{432:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(966),l=r.n(n),a=r(995),o=r(678),i=r(357);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,o,i=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e){var t=e.main,r=e.documentId,c=e.activeLang,u=e.theme,b=e.siteId,y=e.ga,p=(null==t?void 0:t.header)||{},d=(null==t?void 0:t.body)||{},v=p.subheading,h=p.title,g=p.description,w=d.imgs,x=d.links,j=d.properties,E=null==w?void 0:w[0],O=m((0,i.Z)(),2)[1],S=x.map((function(e,t){var r=e.label,n=e.href;return l().createElement("a",{key:t,className:"relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm hover:bg-[color:var(--secondary,#eee)]",href:n,onClick:function(e){e.preventDefault(),O(n)}},l().createElement("span",{className:"relative z-10"},r))}));console.log(j);var N=j||{},k=N.placeholder,A=N.submitBtn,P=N.type,C=m((0,n.useState)({}),2),I=C[0],D=C[1];return l().createElement("footer",{className:"".concat(u," border-t border-gray-200")},l().createElement(o.Z,null,l().createElement("div",{className:"flex flex-col items-start justify-between pt-16 pb-6 lg:py-16"},l().createElement("div",{className:"flex items-center"},l().createElement(a.Z,{className:"h-10 w-10",contentId:r,value:null==E?void 0:E.value,alt:null==E?void 0:E.alt,activeLang:c}),l().createElement("div",{className:"ml-4"},l().createElement("h3",{className:"text-base font-semibold"},v),l().createElement("p",{className:"mt-1 text-sm"},h))),l().createElement("div",{className:"flex flex-col lg:flex-row lg:justify-between w-full lg:items-center mt-11 "},l().createElement("nav",{className:"flex gap-8"},S))),l().createElement("div",{className:"flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6"},l().createElement("form",{className:"flex w-full justify-center md:w-auto",onSubmit:function(e){e.preventDefault(),null!=I&&I[P]&&uniweb.submitWebsiteForm(b,"newsletter",I).then((function(e){D({}),y&&y.event({category:"Newsletter",action:"register",email:null==I?void 0:I[P],label:"Email",value:1})}))}},l().createElement("div",{className:"w-60 min-w-0 shrink"},l().createElement("input",{type:P,"aria-label":k,placeholder:k,autoComplete:P,required:"",value:(null==I?void 0:I[P])||"",onChange:function(e){D(s(s({},I),{},f({},P,e.target.value)))},className:"block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"})),l().createElement("button",{className:"inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors ml-4 flex-none",type:"submit"},l().createElement("span",{className:"lg:inline !text-white"},A))),l().createElement("p",{className:"mt-6 text-sm text-gray-500 md:mt-0"},"© ",g))))}},357:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(966),l=r.n(n);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const o=function(){var e,t,r=(e=l().useState((function(){return window.location.hash})),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,o,i=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],o=r[1],i=l().useCallback((function(){o(window.location.hash)}),[]);l().useEffect((function(){return window.addEventListener("hashchange",i),function(){window.removeEventListener("hashchange",i)}}),[]);var c=l().useCallback((function(e){e!==n&&(window.location.hash=e)}),[n]);return[n,c]}}}]);