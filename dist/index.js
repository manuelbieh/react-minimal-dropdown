!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.ReactMinimalDropdown=e(require("react")):t.ReactMinimalDropdown=e(t.React)}(this,function(t){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="./src/Dropdown.js")}({"./src/Content.js":function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},u=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),c=o(0),p=n(c),f=o("./src/Dropdown.css"),d=n(f),h=function(t){function e(){return r(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),u(e,[{key:"render",value:function(){var t=this,e=this.props,o=e.children,n=e.className,r=void 0===n?"":n,s=i(e,["children","className"]);return p.default.createElement("div",a({},s,{ref:function(e){t.node=e},className:"ReactMinimalDropdown__Content "+(d.default.content||"")+" "+r}),p.default.createElement("div",{className:d.default.inner},o))}},{key:"DOMNode",get:function(){return this.node}}]),e}(p.default.PureComponent);e.default=h},"./src/Dropdown.css":function(t,e){t.exports={wrapper:"zf3v5bFsvQKV1UXE0ByW2",open:"rzc6tibxcrDUVB8-e1iru",content:"_2st2ZnKryLnDKae-CjKfLb",closed:"_3L7bUwVGYUc9SDjLXC0um_",trigger:"_1tPuT-jHopu4EDuWKDfSnw",arrow:"lOhdVQPrvUhmcW-Bv6Yjd",inner:"_1tGz9fBQvw15Og6Yg37a58",beak:"_15GWx86rte8lff54UMs40f",top:"KTROY8c-qwsT55UDARClP",right:"_20W24YMBsue06xrxhfVdV0",bottom:"M5pYMnrqrzi5UcZ7lxeQe",left:"_2oRNzuRo_MHY93aKg-gUEB","edge--left":"_3nko7N4hNb38jTqUNUBU7E","edge--right":"_2RLux8c-jZjbewOWUFIiKt","edge--bottom":"_2ZUDO0qZ43dpZYJJd0DwcB","edge--top":"_30omCOSM7IEz1on2JYp768"}},"./src/Dropdown.js":function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Content=e.Trigger=e.Dropdown=void 0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},u=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),c=o(0),p=n(c),f=o("./src/Trigger.js"),d=n(f),h=o("./src/Content.js"),g=n(h),v=o("./src/Dropdown.css"),b=n(v),y=e.Dropdown=function(t){function e(t){r(this,e);var o=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.state={show:t.show,direction:t.direction},o.closeOnClick=o.closeOnClick.bind(o),o.closeOnEsc=o.closeOnEsc.bind(o),o.calculatePosition=o.calculatePosition.bind(o),o.show=o.show.bind(o),o.hide=o.hide.bind(o),o.toggle=o.toggle.bind(o),o.isOpen=o.isOpen.bind(o),o}return l(e,t),u(e,[{key:"componentDidMount",value:function(){this.addEvents(),this.calculatePosition()}},{key:"componentWillReceiveProps",value:function(t){t.gap===this.props.gap&&t.direction===this.props.direction||this.calculatePosition()}},{key:"componentWillUnmount",value:function(){this.removeEvents()}},{key:"addEvents",value:function(){window.addEventListener("click",this.closeOnClick),window.addEventListener("touchstart",this.closeOnClick),window.addEventListener("keydown",this.closeOnEsc),this.props.ignoreResize||window.addEventListener("resize",this.calculatePosition),this.props.ignoreScroll||window.addEventListener("scroll",this.calculatePosition)}},{key:"removeEvents",value:function(){window.removeEventListener("click",this.closeOnClick),window.removeEventListener("touchstart",this.closeOnClick),window.removeEventListener("keydown",this.closeOnEsc),window.removeEventListener("resize",this.calculatePosition),window.removeEventListener("scroll",this.calculatePosition)}},{key:"closeOnEsc",value:function(t){27===t.keyCode&&this.hide()}},{key:"closeOnClick",value:function(t){t.target!==this.wrapperEl&&!this.wrapperEl.contains(t.target)&&this.state.show&&this.hide()}},{key:"componentWillUpdate",value:function(t,e){return!0===e.show&&!1===this.state.show&&"function"==typeof this.props.onBeforeOpen?this.props.onBeforeOpen(this):!1===e.show&&!0===this.state.show&&"function"==typeof this.props.onBeforeClose?this.props.onBeforeClose(this):void 0}},{key:"componentDidUpdate",value:function(t,e){return!0===this.state.show&&!1===e.show&&"function"==typeof this.props.onAfterOpen?this.props.onAfterOpen(this):!1===this.state.show&&!0===e.show&&"function"==typeof this.props.onAfterClose?this.props.onAfterClose(this):void 0}},{key:"setContentPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.top,o=t.right,n=t.bottom,i=t.left;this.contentEl.DOMNode.style.top="number"==typeof e?e+"px":"auto",this.contentEl.DOMNode.style.right="number"==typeof o?o+"px":"auto",this.contentEl.DOMNode.style.bottom="number"==typeof n?n+"px":"auto",this.contentEl.DOMNode.style.left="number"==typeof i?i+"px":"auto"}},{key:"getWrapperBounds",value:function(){return this.wrapperEl.getBoundingClientRect()}},{key:"getTriggerBounds",value:function(){return this.triggerEl.DOMNode.getBoundingClientRect()}},{key:"getContentBounds",value:function(){this.contentEl.DOMNode.style.display="block";var t=this.contentEl.DOMNode.getBoundingClientRect();return this.contentEl.DOMNode.style.display=null,t}},{key:"getDirectionMode",value:function(){return["left","right"].includes(this.state.direction)?"horizontal":"vertical"}},{key:"getEdgePosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.edge,e=this.getTriggerBounds(),o=this.getWrapperBounds(),n=this.getContentBounds();return"horizontal"===this.getDirectionMode()?"top"===t?{top:e.top-o.top}:"bottom"===t?{top:e.bottom-o.top-n.height}:{top:e.top-o.top-n.height/2+e.height/2}:"left"===t?{left:e.left-o.left}:"right"===t?{left:e.right-o.left-n.width}:{left:e.left-o.left-n.width/2+e.width/2}}},{key:"getContentPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.direction,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.gap,o=this.getTriggerBounds(),n=this.getWrapperBounds();return"left"===t?{right:n.right-o.right+o.width+(e||0),left:null}:"right"===t?{left:o.right-n.left+(e||0),right:null}:"top"===t?{bottom:n.bottom-o.bottom+o.height+(e||0),top:null}:"bottom"===t?{top:o.top-n.top+o.height+(e||0),bottom:null}:void 0}},{key:"shouldContentBeAdjusted",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.direction,e=this.getContentBounds(),o=Math.max(document.documentElement.clientWidth,window.innerWidth||0);if("left"===t&&e.left<0&&e.right<o&&this.props.adjust)return!0;if("right"===t&&e.right>o&&e.left>=0&&this.props.adjust)return!0;var n=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return!!("top"===t&&e.top<0&&e.bottom<n&&this.props.adjust)||!!("bottom"===t&&e.bottom>n&&e.top<n&&this.props.adjust)}},{key:"adjustContentPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.direction;if(this.props.adjust&&this.shouldContentBeAdjusted()){var e={left:"right",right:"left",top:"bottom",bottom:"top"},o=e[t],n=Object.assign({},this.getContentPosition(o),this.getEdgePosition());if(this.setState({direction:o}),this.setContentPosition(n),this.shouldContentBeAdjusted(o)){var i=Object.assign({},this.getContentPosition(),this.getEdgePosition());this.setState({direction:t}),this.setContentPosition(i)}}}},{key:"calculatePosition",value:function(){var t=Object.assign({},this.getContentPosition(),this.getEdgePosition());this.setState({direction:this.props.direction}),this.setContentPosition(t),this.props.adjust&&this.adjustContentPosition()}},{key:"hide",value:function(){this.setState({show:!1}),this.setContentPosition(),this.removeEvents()}},{key:"show",value:function(){this.setState({show:!0}),this.calculatePosition(),this.addEvents()}},{key:"isOpen",value:function(){return this.state.show}},{key:"toggle",value:function(){this.isOpen()?this.hide():this.show()}},{key:"render",value:function(){var t=this,e=this.state,o=e.show,n=e.direction,r=void 0===n?"bottom":n,s=this.props,l=s.children,u=s.className,c=s.edge,f=void 0===c?"center":c,h=s.beak,v=["ReactMinimalDropdown","ReactMinimalDropdown--is"+(o?"Open":"Closed"),"ReactMinimalDropdown--"+r,b.default.wrapper,h&&b.default.beak,o&&b.default[r],b.default["edge--"+f],b.default[o?"open":"closed"],u,u+"--is"+(o?"Open":"Closed"),u+"--"+r].filter(function(t){return!1!==t&&void 0!==t}).join(" "),y=Math.random().toString(36).substring(2);return p.default.createElement("div",{ref:function(e){t.wrapperEl=e},className:v},p.default.Children.map(l,function(e){if(e.type===d.default)return e.props.id&&(y=e.props.id),p.default.cloneElement(e,a({},e.props,{ref:function(e){t.triggerEl=e},id:y,show:o,toggle:t.toggle.bind(t)}));if(e.type===g.default){var n;return p.default.cloneElement(e,a({},e.props,(n={ref:function(e){t.contentEl=e}},i(n,"aria-labelledby",e.props["aria-labelledby"]||y),i(n,"direction",r),n)))}return e}))}}]),e}(p.default.PureComponent);y.defaultProps={ignoreScroll:!0,ignoreResize:!1,adjust:!0,direction:"bottom",edge:"center",gap:0},y.Trigger=d.default,y.Content=g.default,e.default=y,e.Trigger=d.default,e.Content=g.default},"./src/Trigger.js":function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},u=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),c=o(0),p=n(c),f=o("./src/Dropdown.css"),d=n(f),h=function(t){function e(){return r(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),u(e,[{key:"render",value:function(){var t=this,e=this.props,o=e.children,n=e.className,r=void 0===n?"":n,s=e.toggle,l=e.show,u=e.arrow,c=i(e,["children","className","toggle","show","arrow"]);return p.default.createElement("div",a({},c,{ref:function(e){t.node=e},onClick:s,className:"ReactMinimalDropdown__Trigger "+(d.default.trigger||"")+" "+r+" "+(u&&d.default.arrow||""),"aria-expanded":l,"aria-haspopup":"true"}),o)}},{key:"DOMNode",get:function(){return this.node}}]),e}(p.default.PureComponent);e.default=h},0:function(e,o){e.exports=t}})});