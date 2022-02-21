(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1082:function(e,t,n){var o=n(1083);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(596)(o,r);o.locals&&(e.exports=o.locals)},1083:function(e,t,n){(e.exports=n(595)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.code-snippet {\n  position: relative;\n  margin: 8px 0;\n  background: #404040;\n  color: #f0f0f0;\n  border-radius: 3px;\n}\n\n.code-snippet pre {\n  padding: 16px;\n  overflow: auto;\n}\n\n.code-snippet button {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  line-height: 18px;\n  border: 1px solid #fff;\n  color: #fff;\n  font-size: 11px;\n  font-weight: normal;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.code-snippet button:hover,\n.code-snippet button:focus,\n.code-snippet button:active {\n  background-color: #fff;\n  color: #404040;\n}\n\n.code-snippet-oneline pre {\n  padding-bottom: 40px;\n}\n\n.code-snippet-oneline button {\n  top: auto;\n  top: 40px;\n}\n",""])},1092:function(e,t,n){"use strict";var o,r=n(591),a=n(592),i=n(743),l=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hoveringInner:!1},t.handleClick=function(){t.props.onClick(t.props.data)},t.onDetailEnter=function(){t.setState({hoveringInner:!0})},t.onDetailLeave=function(){t.setState({hoveringInner:!1})},t}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.open,o=e.renderHeader,l=e.title;return r.createElement("div",{className:a("boxed-group boxed-group-accordion",t,{"no-hover":this.state.hoveringInner})},r.createElement("div",{className:"boxed-group-header",onClick:this.handleClick,role:"listitem"},r.createElement("span",{className:"boxed-group-accordion-title"},r.createElement(i.a,{className:"little-spacer-right",open:n}),l),o&&o()),n&&r.createElement("div",{className:"boxed-group-inner",onMouseEnter:this.onDetailEnter,onMouseLeave:this.onDetailLeave},this.props.children))},t}(r.PureComponent);t.a=c},1865:function(e,t,n){"use strict";n.r(t);var o,r=n(591),a=n(607),i=n(813),l=n(605),c=n(1821),s=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.handleSubmit=function(e,n){var o=n.setSubmitting,r=t.props.onSubmit(e),a=function(){t.mounted&&o(!1)};r?r.then(a,a):a()},t}return s(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this;return r.createElement(c.a,{initialValues:this.props.initialValues,isInitialValid:this.props.isInitialValid,onSubmit:this.handleSubmit,validate:this.props.validate},function(t){var n=t.handleSubmit,o=u(t,["handleSubmit"]);return r.createElement("form",{onSubmit:n},e.props.children(o))})},t}(r.Component),d=n(604),m=n(593),h=n(17),f=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){return t.props.onSubmit(e).then(function(){t.props.onClose()})},t}return f(t,e),t.prototype.render=function(){var e=this;return r.createElement(l.a,{contentLabel:this.props.header,onRequestClose:this.props.onClose},r.createElement(p,{initialValues:this.props.initialValues,isInitialValid:this.props.isInitialValid,onSubmit:this.handleSubmit,validate:this.props.validate},function(t){return r.createElement(r.Fragment,null,r.createElement("header",{className:"modal-head"},r.createElement("h2",null,e.props.header)),r.createElement("div",{className:"modal-body"},e.props.children(t)),r.createElement("footer",{className:"modal-foot"},r.createElement(d.a,{className:"spacer-right",loading:t.isSubmitting}),r.createElement(m.f,{disabled:t.isSubmitting||!t.isValid||!t.dirty},e.props.confirmButtonText),r.createElement(m.e,{disabled:t.isSubmitting,onClick:e.props.onClose},Object(h.l)("cancel"))))}))},t}(r.PureComponent),y=n(592),v=n(769),g=n(732);function O(e){var t=e.description,n=e.dirty,o=e.error,a=n&&e.touched&&void 0===o,i=n&&e.touched&&void 0!==o;return r.createElement("div",{className:"modal-validation-field"},e.label,e.children({className:y({"is-invalid":i,"is-valid":a})}),i&&r.createElement(v.a,{className:"little-spacer-top"}),a&&r.createElement(g.a,{className:"little-spacer-top"}),i&&r.createElement("p",{className:"text-danger"},o),t&&r.createElement("div",{className:"modal-field-description"},t))}var C=function(){return(C=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},w=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n};function E(e){var t=e.className,n=w(e,["className"]),o=n.description,a=n.dirty,i=n.error,l=n.label,c=n.touched,s=w(n,["description","dirty","error","label","touched"]),u={description:o,dirty:a,error:i,label:l,touched:c};return r.createElement(O,C({},u),function(e){var n=e.className;return r.createElement("input",C({className:y(t,n)},s))})}var _=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleCancelClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClose()},t.handleValidate=function(e){var t=e.name,n=e.url,o={};return t.trim()||(o.name=Object(h.l)("webhooks.name.required")),n.trim()?n.startsWith("http://")||n.startsWith("https://")?Object(i.isWebUri)(n)||(o.url=Object(h.l)("webhooks.url.bad_format")):o.url=Object(h.l)("webhooks.url.bad_protocol"):o.url=Object(h.l)("webhooks.url.required"),o},t}return _(t,e),t.prototype.render=function(){var e=this.props.webhook,t=!!e,n=t?Object(h.l)("webhooks.update"):Object(h.l)("webhooks.create"),o=t?Object(h.l)("update_verb"):Object(h.l)("create");return r.createElement(b,{confirmButtonText:o,header:n,initialValues:{name:e?e.name:"",url:e?e.url:""},isInitialValid:t,onClose:this.props.onClose,onSubmit:this.props.onDone,validate:this.handleValidate},function(e){var t=e.dirty,n=e.errors,o=e.handleBlur,a=e.handleChange,i=e.isSubmitting,l=e.touched,c=e.values;return r.createElement(r.Fragment,null,r.createElement(E,{autoFocus:!0,dirty:t,disabled:i,error:n.name,id:"webhook-name",label:r.createElement("label",{htmlFor:"webhook-name"},Object(h.l)("webhooks.name"),r.createElement("em",{className:"mandatory"},"*")),name:"name",onBlur:o,onChange:a,touched:l.name,type:"text",value:c.name}),r.createElement(E,{description:Object(h.l)("webhooks.url.description"),dirty:t,disabled:i,error:n.url,id:"webhook-url",label:r.createElement("label",{htmlFor:"webhook-url"},Object(h.l)("webhooks.url"),r.createElement("em",{className:"mandatory"},"*")),name:"url",onBlur:o,onChange:a,touched:l.url,type:"text",value:c.url}))})},t}(r.PureComponent),j=n(601),S=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),N=10,P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={openCreate:!1},t.handleCreateClose=function(){t.mounted&&t.setState({openCreate:!1})},t.handleCreateOpen=function(){t.setState({openCreate:!0})},t.renderCreate=function(){return t.props.webhooksCount>=N?r.createElement(j.a,{overlay:Object(h.m)("webhooks.maximum_reached",N)},r.createElement(m.a,{className:"js-webhook-create disabled"},Object(h.l)("create"))):r.createElement(r.Fragment,null,r.createElement(m.a,{className:"js-webhook-create",onClick:t.handleCreateOpen},Object(h.l)("create")),t.state.openCreate&&r.createElement(k,{onClose:t.handleCreateClose,onDone:t.props.onCreate}))},t}return S(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return this.props.loading?null:r.createElement("div",{className:"page-actions"},this.renderCreate())},t}(r.PureComponent),D=n(586),x=n(597);function L(e){var t=e.children,n=e.loading;return r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(h.l)("webhooks.page")),n&&r.createElement("i",{className:"spinner"}),t,r.createElement("p",{className:"page-description"},r.createElement(D.FormattedMessage,{defaultMessage:Object(h.l)("webhooks.description"),id:"webhooks.description",values:{url:r.createElement(x.Link,{to:"/documentation/project-administration/webhooks/"},Object(h.l)("webhooks.documentation_link"))}})))}var M=n(608),q=n.n(M),U=n(804),A=n(602);function z(e){var t=e.className,n=e.delivery,o=e.loading,a=e.payload;return r.createElement("div",{className:t},r.createElement("p",{className:"spacer-bottom"},Object(h.m)("webhooks.delivery.response_x",n.httpStatus||Object(h.l)("webhooks.delivery.server_unreachable"))),r.createElement("p",{className:"spacer-bottom"},Object(h.m)("webhooks.delivery.duration_x",Object(A.formatMeasure)(n.durationMs,"MILLISEC"))),r.createElement("p",{className:"spacer-bottom"},Object(h.l)("webhooks.delivery.payload")),r.createElement(d.a,{className:"spacer-left spacer-top",loading:o},a&&r.createElement(U.a,{noCopy:!0,snippet:F(a)})))}function F(e){try{return JSON.stringify(JSON.parse(e),void 0,2)}catch(t){return e}}var T=n(30),I=n(609);function W(e){return Object(T.getJSON)("/api/webhooks/deliveries",e).catch(I.a)}function V(e){return Object(T.getJSON)("/api/webhooks/delivery",e).catch(I.a)}var B=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),J=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t.fetchPayload=function(e){return V({deliveryId:(void 0===e?t.props:e).delivery.id}).then(function(e){var n=e.delivery;t.mounted&&t.setState({payload:n.payload,loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},t.formatPayload=function(e){try{return JSON.stringify(JSON.parse(e),void 0,2)}catch(t){return e}},t}return B(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchPayload()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.delivery,n=e.webhook,o=this.state,a=o.loading,i=o.payload,c=Object(h.m)("webhooks.latest_delivery_for_x",n.name);return r.createElement(l.a,{contentLabel:c,onRequestClose:this.props.onClose},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,c)),r.createElement(z,{className:"modal-body modal-container",delivery:t,loading:a,payload:i}),r.createElement("footer",{className:"modal-foot"},r.createElement(m.a,{className:"button-link js-modal-close",onClick:this.props.onClose},Object(h.l)("close"))))},t}(r.PureComponent),R=n(873),H=n(639),G=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),Y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleClick=function(){t.setState({modal:!0})},t.handleModalClose=function(){t.mounted&&t.setState({modal:!1})},t}return G(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.webhook;if(!e.latestDelivery)return r.createElement("span",null,Object(h.l)("webhooks.last_execution.none"));var t=this.state.modal;return r.createElement(r.Fragment,null,e.latestDelivery.success?r.createElement(g.a,{className:"text-text-top"}):r.createElement(v.a,{className:"text-text-top"}),r.createElement("span",{className:"spacer-left display-inline-flex-center"},r.createElement(H.a,{date:e.latestDelivery.at}),r.createElement(m.b,{className:"button-small little-spacer-left",onClick:this.handleClick},r.createElement(R.a,null))),t&&r.createElement(J,{delivery:e.latestDelivery,onClose:this.handleModalClose,webhook:e}))},t}(r.PureComponent),Z=n(620);function Q(e){var t=e.onClose,n=e.onSubmit,o=e.webhook,a=Object(h.l)("webhooks.delete");return r.createElement(Z.a,{header:a,onClose:t,onSubmit:n},function(e){var t=e.onCloseClick,n=e.onFormSubmit,i=e.submitting;return r.createElement("form",{onSubmit:n},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,a)),r.createElement("div",{className:"modal-body"},Object(h.m)("webhooks.delete.confirm",o.name)),r.createElement("footer",{className:"modal-foot"},r.createElement(d.a,{className:"spacer-right",loading:i}),r.createElement(m.f,{className:"button-red",disabled:i},Object(h.l)("delete")),r.createElement(m.e,{disabled:i,onClick:t},Object(h.l)("cancel"))))})}var K=n(1092),X=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),$=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,open:!1},t.fetchPayload=function(e){var n=(void 0===e?t.props:e).delivery;return t.setState({loading:!0}),V({deliveryId:n.id}).then(function(e){var n=e.delivery;t.mounted&&t.setState({payload:n.payload,loading:!1})},function(){t.mounted&&t.setState({loading:!1})})},t.formatPayload=function(e){try{return JSON.stringify(JSON.parse(e),void 0,2)}catch(t){return e}},t.handleClick=function(){t.state.payload||t.fetchPayload(),t.setState(function(e){return{open:!e.open}})},t}return X(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.delivery,t=this.state,n=t.loading,o=t.open,a=t.payload;return r.createElement(K.a,{onClick:this.handleClick,open:o,renderHeader:function(){return e.success?r.createElement(g.a,{className:"pull-right js-success"}):r.createElement(v.a,{className:"pull-right js-error"})},title:r.createElement(H.a,{date:e.at})},r.createElement(z,{className:"big-spacer-left",delivery:e,loading:n,payload:a}))},t}(r.PureComponent),ee=n(635),te=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ne=10,oe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={deliveries:[],loading:!0},t.fetchDeliveries=function(e){W({webhook:(void 0===e?t.props:e).webhook.key,ps:ne}).then(function(e){var n=e.deliveries,o=e.paging;t.mounted&&t.setState({deliveries:n,loading:!1,paging:o})},t.stopLoading)},t.fetchMoreDeliveries=function(e){var n=(void 0===e?t.props:e).webhook,o=t.state.paging;o&&(t.setState({loading:!0}),W({webhook:n.key,p:o.pageIndex+1,ps:ne}).then(function(e){var n=e.deliveries,o=e.paging;t.mounted&&t.setState(function(e){return{deliveries:e.deliveries.concat(n),loading:!1,paging:o}})},t.stopLoading))},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t}return te(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchDeliveries()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.webhook,t=this.state,n=t.deliveries,o=t.loading,a=t.paging,i=Object(h.m)("webhooks.deliveries_for_x",e.name);return r.createElement(l.a,{contentLabel:i,onRequestClose:this.props.onClose},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,i)),r.createElement("div",{className:"modal-body modal-container"},n.map(function(e){return r.createElement($,{delivery:e,key:e.id})}),r.createElement("div",{className:"text-center"},r.createElement(d.a,{loading:o})),void 0!==a&&r.createElement(ee.a,{className:"little-spacer-bottom",count:n.length,loadMore:this.fetchMoreDeliveries,ready:!o,total:a.total})),r.createElement("footer",{className:"modal-foot"},r.createElement(m.a,{className:"button-link js-modal-close",onClick:this.props.onClose},Object(h.l)("close"))))},t}(r.PureComponent),re=n(648),ae=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ie=function(){return(ie=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},le=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={deleting:!1,deliveries:!1,updating:!1},t.handleDelete=function(){return t.props.onDelete(t.props.webhook.key)},t.handleDeleteClick=function(){t.setState({deleting:!0})},t.handleDeletingStop=function(){t.mounted&&t.setState({deleting:!1})},t.handleDeliveriesClick=function(){t.setState({deliveries:!0})},t.handleDeliveriesStop=function(){t.setState({deliveries:!1})},t.handleUpdate=function(e){return t.props.onUpdate(ie({},e,{webhook:t.props.webhook.key}))},t.handleUpdateClick=function(){t.setState({updating:!0})},t.handleUpdatingStop=function(){t.setState({updating:!1})},t}return ae(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.webhook;return r.createElement(r.Fragment,null,r.createElement(re.c,{className:"big-spacer-left"},r.createElement(re.b,{className:"js-webhook-update",onClick:this.handleUpdateClick},Object(h.l)("update_verb")),e.latestDelivery&&r.createElement(re.b,{className:"js-webhook-deliveries",onClick:this.handleDeliveriesClick},Object(h.l)("webhooks.deliveries.show")),r.createElement(re.a,null),r.createElement(re.b,{className:"js-webhook-delete",destructive:!0,onClick:this.handleDeleteClick},Object(h.l)("delete"))),this.state.deliveries&&r.createElement(oe,{onClose:this.handleDeliveriesStop,webhook:e}),this.state.updating&&r.createElement(k,{onClose:this.handleUpdatingStop,onDone:this.handleUpdate,webhook:e}),this.state.deleting&&r.createElement(Q,{onClose:this.handleDeletingStop,onSubmit:this.handleDelete,webhook:e}))},t}(r.PureComponent);function ce(e){var t=e.onDelete,n=e.onUpdate,o=e.webhook;return r.createElement("tr",null,r.createElement("td",null,o.name),r.createElement("td",null,o.url),r.createElement("td",null,r.createElement(Y,{webhook:o})),r.createElement("td",{className:"thin nowrap text-right"},r.createElement(le,{onDelete:t,onUpdate:n,webhook:o})))}var se=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ue=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderHeader=function(){return r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,Object(h.l)("name")),r.createElement("th",null,Object(h.l)("webhooks.url")),r.createElement("th",null,Object(h.l)("webhooks.last_execution")),r.createElement("th",null)))},t}return se(t,e),t.prototype.render=function(){var e=this,t=this.props.webhooks;return t.length<1?r.createElement("p",null,Object(h.l)("webhooks.no_result")):r.createElement("table",{className:"data zebra"},this.renderHeader(),r.createElement("tbody",null,q()(t,function(e){return e.name.toLowerCase()}).map(function(t){return r.createElement(ce,{key:t.key,onDelete:e.props.onDelete,onUpdate:e.props.onUpdate,webhook:t})})))},t}(r.PureComponent),pe=n(614),de=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),me=function(){return(me=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},he=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0,webhooks:[]},t.fetchWebhooks=function(){return(e=t.getScopeParams(),Object(T.getJSON)("/api/webhooks/list",e).catch(I.a)).then(function(e){var n=e.webhooks;t.mounted&&t.setState({loading:!1,webhooks:n})},function(){t.mounted&&t.setState({loading:!1})});var e},t.getScopeParams=function(e){var n=void 0===e?t.props:e,o=n.organization,r=n.component,a=o&&o.key;return{organization:r?r.organization:a,project:r&&r.key}},t.handleCreate=function(e){return function(e){return Object(T.postJSON)("/api/webhooks/create",e).catch(I.a)}(me({},e,t.getScopeParams())).then(function(e){var n=e.webhook;t.mounted&&t.setState(function(e){return{webhooks:e.webhooks.concat([n])}})})},t.handleDelete=function(e){return(n={webhook:e},Object(T.post)("/api/webhooks/delete",n).catch(I.a)).then(function(){t.mounted&&t.setState(function(t){return{webhooks:t.webhooks.filter(function(t){return t.key!==e})}})});var n},t.handleUpdate=function(e){return function(e){return Object(T.post)("/api/webhooks/update",e).catch(I.a)}(e).then(function(){t.mounted&&t.setState(function(t){return{webhooks:t.webhooks.map(function(t){return t.key===e.webhook?me({},t,{name:e.name,url:e.url}):t})}})})},t}return de(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchWebhooks()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.state,t=e.loading,n=e.webhooks;return r.createElement(r.Fragment,null,r.createElement(pe.a,{suggestions:"webhooks"}),r.createElement(a.Helmet,{title:Object(h.l)("webhooks.page")}),r.createElement("div",{className:"page page-limited"},r.createElement(L,{loading:t},r.createElement(P,{loading:t,onCreate:this.handleCreate,webhooksCount:n.length})),!t&&r.createElement("div",{className:"boxed-group boxed-group-inner"},r.createElement(ue,{onDelete:this.handleDelete,onUpdate:this.handleUpdate,webhooks:n}))))},t}(r.PureComponent);t.default=he},605:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(591),r=n(636),a=n(592),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function l(e){return o.createElement(r,i({className:a("modal",{"modal-medium":e.medium,"modal-large":e.large,"modal-simple":e.simple}),isOpen:!0,overlayClassName:a("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}r.setAppElement("#content")},614:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o,r=n(591),a=n(641),i=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function l(e){var t=e.suggestions;return r.createElement(a.a.Consumer,null,function(e){var n=e.addSuggestions,o=e.removeSuggestions;return r.createElement(c,{addSuggestions:n,removeSuggestions:o,suggestions:t})})}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(r.PureComponent)},620:function(e,t,n){"use strict";var o,r=n(591),a=n(605),i=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return i(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return r.createElement(a.a,{contentLabel:this.props.header,onRequestClose:this.props.onClose},this.props.children({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(r.Component);t.a=l},635:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(591),r=n(592),a=n(604),i=n(17),l=n(602),c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n};function s(e){var t=e.ready,n=void 0===t||t,s=c(e,["ready"]),u=s.total&&s.total>s.count,p=o.createElement("a",{className:"spacer-left",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),s.loadMore&&s.loadMore()}},Object(i.l)("show_more")),d=r("spacer-top note text-center",{"new-loading":!n},s.className);return o.createElement("footer",{className:d},Object(i.m)("x_of_y_shown",Object(l.formatMeasure)(s.count,"INT",null),Object(l.formatMeasure)(s.total,"INT",null)),null!=s.loadMore&&u?p:null,s.loading&&o.createElement(a.a,{className:"vertical-bottom spacer-left position-absolute"}))}},639:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n(591),r=n(586),a=n(87),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function c(e){var t=e.children,n=e.date;return o.createElement(r.FormattedDate,i({value:Object(a.f)(n)},l),t)}},648:function(e,t,n){"use strict";var o=n(591),r=n(592),a=n(597),i=n(613),l=n(618),c=n(594);function s(e){var t=e.className,n=e.fill,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?14:a;return o.createElement(c.a,{className:t,size:i,viewBox:"0 0 14 14"},o.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},o.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:r}})))}var u=n(593);n.d(t,"c",function(){return m}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return f});var p,d=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function m(e){return o.createElement(i.b,{className:e.className,onOpen:e.onOpen,overlay:o.createElement("ul",{className:"menu"},e.children)},o.createElement(u.a,{className:r("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},o.createElement(s,{size:e.small?12:14}),o.createElement(l.a,{className:"little-spacer-left"})))}var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return d(t,e),t.prototype.render=function(){var e=r(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?o.createElement("li",null,o.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?o.createElement("li",null,o.createElement(a.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):o.createElement("li",null,o.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(o.PureComponent);function f(){return o.createElement("li",{className:"divider"})}},675:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(591),r=n(594);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,i=e.size;return o.createElement(r.a,{className:t,size:i},o.createElement("path",{d:"M11.596 8.28l-4.604 4.602a.382.382 0 0 1-.279.118.382.382 0 0 1-.279-.118l-1.03-1.03a.382.382 0 0 1-.117-.278c0-.108.04-.201.117-.28L8.7 8 5.404 4.706a.382.382 0 0 1-.117-.28c0-.108.04-.2.117-.279l1.03-1.03A.382.382 0 0 1 6.714 3c.107 0 .2.04.278.118l4.604 4.603a.382.382 0 0 1 .117.279c0 .108-.04.201-.117.28z",style:{fill:a}}))}},739:function(e,t,n){"use strict";var o,r=n(591),a=n(592),i=n(796),l=n(601),c=n(593),s=n(17),u=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={tooltipShown:!1},t.showTooltip=function(){t.mounted&&(t.setState({tooltipShown:!0}),setTimeout(function(){t.mounted&&t.setState({tooltipShown:!1})},1e3))},t}return u(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.copyButton&&(this.clipboard=new i(this.copyButton),this.clipboard.on("success",this.showTooltip))},t.prototype.componentDidUpdate=function(){this.clipboard&&this.clipboard.destroy(),this.copyButton&&(this.clipboard=new i(this.copyButton),this.clipboard.on("success",this.showTooltip))},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.clipboard&&this.clipboard.destroy()},t.prototype.render=function(){var e=this;return r.createElement(l.a,{overlay:Object(s.l)("copied_action"),visible:this.state.tooltipShown},r.createElement(c.a,{className:a("js-copy-to-clipboard no-select",this.props.className),"data-clipboard-text":this.props.copyValue,innerRef:function(t){return e.copyButton=t}},Object(s.l)("copy")))},t}(r.PureComponent);t.a=p},743:function(e,t,n){"use strict";var o=n(591),r=n(594);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,i=e.size;return o.createElement(r.a,{className:t,size:i},o.createElement("path",{d:"M7.72 11.596L3.119 6.992A.382.382 0 0 1 3 6.713c0-.108.04-.2.118-.279l1.03-1.03a.382.382 0 0 1 .278-.117c.108 0 .201.04.28.117L8 8.7l3.294-3.295a.382.382 0 0 1 .28-.117c.108 0 .2.04.279.117l1.03 1.03a.382.382 0 0 1 .117.28c0 .107-.04.2-.118.278L8.28 11.596a.382.382 0 0 1-.279.117.382.382 0 0 1-.28-.117z",style:{fill:a}}))}var i=n(675);n.d(t,"a",function(){return s});var l=function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n};function s(e){var t=e.open,n=c(e,["open"]);return t?o.createElement(a,l({},n)):o.createElement(i.a,l({},n))}},804:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n(591),r=n(592),a=n(739),i=(n(1082)," \\\n  ");function l(e){var t=e.className,n=e.isOneLine,l=e.noCopy,c=e.snippet,s=Array.isArray(c)?c.filter(function(e){return void 0!==e}):[c],u=n?s.join(" "):s.join(i);return o.createElement("div",{className:r("code-snippet",{"code-snippet-oneline":n},t)},o.createElement("pre",null,u),!l&&o.createElement(a.a,{copyValue:u}))}},873:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(591),r=n(594);function a(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,i=e.size;return o.createElement(r.a,{className:t,size:i},o.createElement("path",{d:"M2.968 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM2.968 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177z",style:{fill:a}}))}}}]);
//# sourceMappingURL=294.1548064679481.chunk.js.map