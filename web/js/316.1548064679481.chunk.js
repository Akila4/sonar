(window.webpackJsonp=window.webpackJsonp||[]).push([[316,21,325,360],{1143:function(t,e,n){"use strict";n.r(e);var o=n(591),r=n(600),a=n(749),i=n(679),s=n(603);e.default=Object(r.connect)(function(t){return{globalPages:Object(s.getAppState)(t).globalPages}})(function(t){var e=t.params,n=e.extensionKey,r=e.pluginKey,s=(t.globalPages||[]).find(function(t){return t.key===r+"/"+n});return s?o.createElement(a.a,{extension:s}):o.createElement(i.default,{withContainer:!1})})},1825:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var o=n(591),r=n(1143);function a(){return o.createElement(r.default,{params:{pluginKey:"governance",extensionKey:"portfolios"}})}},615:function(t,e,n){var o=n(619),r=1/0,a=1.7976931348623157e308;t.exports=function(t){return t?(t=o(t))===r||t===-r?(t<0?-1:1)*a:t==t?t:0:0===t?t:0}},637:function(t,e){var n=Math.max,o=Math.min;t.exports=function(t,e,r){return t>=o(e,r)&&t<n(e,r)}},653:function(t,e,n){var o=n(637),r=n(615),a=n(619);t.exports=function(t,e,n){return e=r(e),void 0===n?(n=e,e=0):n=r(n),t=a(t),o(t,e,n)}},663:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var o=n(591),r=n(730),a=n(598),i=n(696);function s(t){var e=t.children;return o.createElement("div",{className:"global-container"},o.createElement("div",{className:"page-wrapper",id:"container"},o.createElement(i.a,{className:"navbar-global",height:a.globalNavHeightRaw}),e),o.createElement(r.a,null))}},679:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var o=n(591),r=n(607),a=n(597),i=n(663),s=n(17);function c(t){var e=t.withContainer,n=void 0===e||e?i.default:o.Fragment;return o.createElement(n,null,o.createElement(r.Helmet,{defaultTitle:Object(s.l)("404_not_found"),defer:!1}),o.createElement("div",{className:"page-wrapper-simple",id:"bd"},o.createElement("div",{className:"page-simple",id:"nonav"},o.createElement("h2",{className:"big-spacer-bottom"},Object(s.l)("page_not_found")),o.createElement("p",{className:"spacer-bottom"},Object(s.l)("address_mistyped_or_page_moved")),o.createElement("p",null,o.createElement(a.Link,{to:"/"},Object(s.l)("go_back_to_homepage"))))))}},749:function(t,e,n){"use strict";var o,r=n(591),a=n(607),i=n.n(a),s=n(597),c=n(586),l=n(600),u=n(763),p=n(17),f=n(667),m=n(658),d=n(603),h=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),v=function(){return(v=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={},e.handleStart=function(t){var n=Object(f.default)(),o=t(v({store:n,el:e.container,currentUser:e.props.currentUser,intl:e.props.intl,location:e.props.location,router:e.props.router},e.props.options));r.isValidElement(o)?e.setState({extensionElement:o}):e.stop=o},e.handleFailure=function(){e.props.onFail(Object(p.l)("page_extension_failed"))},e}return h(e,t),e.prototype.componentDidMount=function(){this.startExtension()},e.prototype.componentDidUpdate=function(t){t.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):t.location!==this.props.location&&this.startExtension()},e.prototype.componentWillUnmount=function(){this.stopExtension()},e.prototype.startExtension=function(){var t=this.props.extension;Object(u.a)(t.key).then(this.handleStart,this.handleFailure)},e.prototype.stopExtension=function(){this.stop&&(this.stop(),this.stop=void 0)},e.prototype.render=function(){var t=this;return r.createElement("div",null,r.createElement(i.a,{title:this.props.extension.name}),this.state.extensionElement?this.state.extensionElement:r.createElement("div",{ref:function(e){return t.container=e}}))},e}(r.PureComponent);var E={onFail:m.a};e.a=Object(c.injectIntl)(Object(s.withRouter)(Object(l.connect)(function(t){return{currentUser:Object(d.getCurrentUser)(t)}},E)(b)))}}]);
//# sourceMappingURL=316.1548064679481.chunk.js.map