"use strict";var b=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var w=b(function(_,h){"use strict";var c=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,T=require("@stdlib/assert-is-ndarray-like"),E=require("@stdlib/assert-is-plain-object"),O=require("@stdlib/assert-is-nonnegative-integer-array").primitives,j=require("@stdlib/assert-is-empty-collection"),t=require("@stdlib/assert-has-own-property"),N=require("@stdlib/array-base-assert-contains").factory,P=require("@stdlib/ndarray-base-shape2strides"),k=require("@stdlib/ndarray-base-buffer"),D=require("@stdlib/ndarray-base-numel"),m=require("@stdlib/ndarray-dtype"),f=require("@stdlib/ndarray-shape"),g=require("@stdlib/ndarray-order"),V=require("@stdlib/ndarray-ctor"),F=require("@stdlib/ndarray-dtypes"),y=require("@stdlib/array-base-join"),s=require("@stdlib/string-format"),l=F("numeric_and_generic"),q=N(l);function I(i){var e,a,n,d,o,u,v,p,r;if(!T(i))throw new TypeError(s("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",i));if(v=!1,o={},arguments.length>1){if(e=arguments[1],!E(e))throw new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",e));if(t(e,"dtype")){if(a=e.dtype,!q(a))throw new TypeError(s('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",y(l,'", "'),a));v=!0}else a=m(i);if(t(e,"shape")){if(r=e.shape,c(r))r=[r];else if(!O(r)&&!j(r))throw new TypeError(s("invalid option. `%s` option must be a nonnegative integer or an array of nonnegative integers. Option: `%s`.","shape",r))}else r=f(i);t(e,"order")?n=e.order:n=g(i),t(e,"mode")&&(o.mode=e.mode),t(e,"submode")&&(o.submode=e.submode),t(e,"readonly")&&(o.readonly=e.readonly)}else a=m(i),r=f(i),n=g(i);if(!v&&!q(a))throw new TypeError(s('invalid argument. First argument must have one of the following data types: "%s". Value: `%s`.',y(l,'", "'),a));return d=r.length,d>0?(u=D(r),p=P(r,n)):(u=1,p=[0]),new V(a,k(a,u),r,p,0,n,o)}h.exports=I});var L=w();module.exports=L;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
