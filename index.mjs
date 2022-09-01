// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function h(h){var m,l,j,f,y;if(!e(h))throw new TypeError(a("0N367",h));if(l={},arguments.length>1){if(!s(m=arguments[1]))throw new TypeError(a("0N32h",m));if(t(m,"dtype")?l.dtype=m.dtype:l.dtype=h.dtype,t(m,"shape")){if(l.shape=m.shape,"number"==typeof l.shape&&(l.shape=[l.shape]),!r(l.shape))throw new TypeError(a("invalid option. `%s` option must be a nonnegative integer or an array of nonnegative integers. Option: `%s`.","shape",l.shape))}else l.shape=h.shape;t(m,"order")?l.order=m.order:l.order=h.order}else l.dtype=h.dtype,l.shape=h.shape,l.order=h.order;if(l.shape.length>0?((f=p(l.shape))<0&&(f=0),y=d(l.shape,l.order)):(f=1,y=[0]),null===(j=i(l.dtype,f)))throw new TypeError(a("0N35Z",l.dtype));return new o(l.dtype,j,l.shape,y,n(l.shape,y),l.order)}export{h as default};
//# sourceMappingURL=index.mjs.map