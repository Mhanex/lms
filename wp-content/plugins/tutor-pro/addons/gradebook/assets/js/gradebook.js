(()=>{function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(){"use strict";k=function(){return i};var i={},t=Object.prototype,u=t.hasOwnProperty,s=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,a,i,c,e=e&&e.prototype instanceof d?e:d,e=Object.create(e.prototype),n=new x(n||[]);return s(e,"_invoke",{value:(o=t,a=r,i=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return _()}for(i.method=t,i.arg=e;;){var r=i.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;n=l(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,i);if(r){if(r===f)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if("suspendedStart"===c)throw c="completed",i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c="executing";r=l(o,a,i);if("normal"===r.type){if(c=i.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:i.done}}"throw"===r.type&&(c="completed",i.method="throw",i.arg=r.arg)}})}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=c;var f={};function d(){}function h(){}function p(){}var e={},v=(a(e,n,function(){return this}),Object.getPrototypeOf),v=v&&v(v(L([]))),y=(v&&v!==t&&u.call(v,n)&&(e=v),p.prototype=d.prototype=Object.create(e));function m(t){["next","throw","return"].forEach(function(e){a(t,e,function(t){return this._invoke(e,t)})})}function g(i,c){var e;s(this,"_invoke",{value:function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var a,t=l(i[t],i,r);if("throw"!==t.type)return(r=(a=t.arg).value)&&"object"==E(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:_}}function _(){return{value:void 0,done:!0}}return s(y,"constructor",{value:h.prototype=p,configurable:!0}),s(p,"constructor",{value:h,configurable:!0}),h.displayName=a(p,o,"GeneratorFunction"),i.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a(t,o,"GeneratorFunction")),t.prototype=Object.create(y),t},i.awrap=function(t){return{__await:t}},m(g.prototype),a(g.prototype,r,function(){return this}),i.AsyncIterator=g,i.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var a=new g(c(t,e,r,n),o);return i.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},m(y),a(y,o,"Generator"),a(y,n,function(){return this}),a(y,"toString",function(){return"[object Generator]"}),i.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return a.type="throw",a.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var a=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,b(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},i}function u(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(c){return function(){var t=this,i=arguments;return new Promise(function(e,r){var n=c.apply(t,i);function o(t){u(n,e,r,o,a,"next",t)}function a(t){u(n,e,r,o,a,"throw",t)}o(void 0)})}}jQuery(document).ready(function(s){"use strict";var t=wp.i18n,l=t.__,e=(t._x,t._n,t._nx,s(document).on("click",".tutor-gradebook-filter",function(t){var e,r="",n=window.location.href,o=s(".tutor-gradebook-filter-select option").filter(":selected").val(),r=n.includes("courseid")?((e=new URL(n)).searchParams.set("courseid",o),e.toString()):n+"&courseid="+o;window.location.href=r}),s(document).on("submit","#tutor-add-new-gradebook-form",function(){var e=n(k().mark(function t(e){var r,n,o,a,i,c,u;return k().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=s(this),o=new FormData(document.getElementById("tutor-add-new-gradebook-form")),n=s("#tutor-add-new-grad-form-response"),t.next=6,f(o,e.target);case 6:return o=t.sent,t.next=9,o.json();case 9:if((a=t.sent).success)r.trigger("reset"),tutor_toast(l("Success","tutor-pro"),l("New Grade Added","tutor-pro"),"success"),location.reload();else for(n.html(""),i=0,c=Object.values(a.data);i<c.length;i++)u=c[i],n.append("<div><li class='tutor-alert tutor-alert-warning'>".concat(u,"</li></div>"));case 11:case"end":return t.stop()}},t,this)}));return function(t){return e.apply(this,arguments)}}()),"#tutor-update-gradebook-form");function f(){return r.apply(this,arguments)}function r(){return(r=n(k().mark(function t(e,r){var n,o;return k().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(n=r.querySelector("[data-tutor-modal-submit]")).classList.add("is-loading"),t.next=5,fetch(window._tutorobject.ajaxurl,{method:"POST",body:e});case 5:return o=t.sent,n.classList.remove("is-loading"),t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),submitButton.classList.remove("is-loading"),tutor_toast(l("Operation failed","tutor"),t.t0,"error");case 14:case"end":return t.stop()}},t,null,[[0,10]])}))).apply(this,arguments)}s(document).on("click",".tutor-open-grade-update-modal",function(t){t=t.target;s("".concat(e," input[name=gradebook_id]")).val(t.dataset.id),s("".concat(e," input[name=grade_name]")).val(t.dataset.name),s("".concat(e," input[name=grade_point]")).val(t.dataset.point),s("".concat(e," input[name=percent_to]")).val(t.dataset.maximum),s("".concat(e," input[name=percent_from]")).val(t.dataset.minimum),document.getElementById("tutor-update-grade-color").value=t.dataset.color,s("".concat(e," .button.wp-color-result")).css("background-color",t.dataset.color)}),s(e).on("submit",function(){var e=n(k().mark(function t(e){var r,n,o,a,i,c;return k().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=new FormData(document.getElementById("tutor-update-gradebook-form")),r=document.getElementById("tutor-update-grade-form-response"),t.next=5,f(n,e.target);case 5:return n=t.sent,t.next=8,n.json();case 8:if((o=t.sent).success)tutor_toast(l("Success","tutor-pro"),l("Grade updated","tutor-pro"),"success"),location.reload();else for(a=0,i=Object.values(o.data);a<i.length;a++)c=i[a],r.innerHTML+="<div><li class='tutor-alert tutor-alert-warning'>".concat(c,"</li></div>");case 10:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}()),s("[data-delete_url]").click(function(t){var e=s(this).data("delete_url");s(this).prop("disabled",!0).addClass("is-loading"),window.location.href=e})})})();