// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-order@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function h(h){var v,f,b,y,g,c,x,u;if(!e(h))throw new TypeError(l("0kH5t",h));if(y={},arguments.length>1){if(!s(v=arguments[1]))throw new TypeError(l("0kH2V",v));if(f=t(v,"dtype")?v.dtype:o(h),t(v,"shape")){if("number"==typeof(u=v.shape)&&(u=[u]),!r(u))throw new TypeError(l("0kHDs","shape",u))}else u=p(h);b=t(v,"order")?v.order:a(h),t(v,"mode")&&(y.mode=v.mode),t(v,"submode")&&(y.submode=v.submode),t(v,"readonly")&&(y.readonly=v.readonly)}else f=o(h),u=p(h),b=a(h);if(u.length>0?(c=m(u),x=d(u,b)):(c=1,x=[0]),null===(g=i(f,c)))throw new TypeError(l("0kH5L",f));return new j(f,g,u,x,n(u,x),b,y)}export{h as default};
//# sourceMappingURL=index.mjs.map
