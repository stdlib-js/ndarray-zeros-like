"use strict";var q=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var y=q(function(F,g){
var h=require('@stdlib/assert-is-number/dist').isPrimitive,b=require('@stdlib/assert-is-ndarray-like/dist'),w=require('@stdlib/assert-is-plain-object/dist'),c=require('@stdlib/assert-is-nonnegative-integer-array/dist').primitives,E=require('@stdlib/assert-is-empty-collection/dist'),t=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/ndarray-base-shape2strides/dist'),T=require('@stdlib/ndarray-base-strides2offset/dist'),j=require('@stdlib/ndarray-base-buffer/dist'),k=require('@stdlib/ndarray-base-numel/dist'),l=require('@stdlib/ndarray-dtype/dist'),p=require('@stdlib/ndarray-shape/dist'),f=require('@stdlib/ndarray-order/dist'),N=require('@stdlib/ndarray-ctor/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function P(i){var e,a,n,m,s,v,d,o,r;if(!b(i))throw new TypeError(u('0kH5t',i));if(s={},arguments.length>1){if(e=arguments[1],!w(e))throw new TypeError(u('0kH2V',e));if(t(e,"dtype")?a=e.dtype:a=l(i),t(e,"shape")){if(r=e.shape,h(r)&&(r=[r]),!c(r)&&!E(r))throw new TypeError(u('0kHDs',"shape",r))}else r=p(i);t(e,"order")?n=e.order:n=f(i),t(e,"mode")&&(s.mode=e.mode),t(e,"submode")&&(s.submode=e.submode),t(e,"readonly")&&(s.readonly=e.readonly)}else a=l(i),r=p(i),n=f(i);if(m=r.length,m>0?(d=k(r),o=O(r,n)):(d=1,o=[0]),v=j(a,d),v===null)throw new TypeError(u('0kH5L',a));return new N(a,v,r,o,T(r,o),n,s)}g.exports=P
});var V=y();module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
