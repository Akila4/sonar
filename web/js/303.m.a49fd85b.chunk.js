(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1653:function(e,t,n){"use strict";n.r(t);var r=n(352),i=n(358),l=n(373),o=n(0);class a extends r.PureComponent{constructor(){super(...arguments),this.handleChange=(e=>{this.props.onCompare(e.value)})}render(){const e=this.props,t=e.profile,n=e.profiles,i=e.withKey,a=n.filter(e=>e.language===t.language&&e!==t).map(e=>({value:e.key,label:e.name}));return r.createElement("div",{className:"display-inline-block"},r.createElement("label",{className:"spacer-right"},Object(o.l)("quality_profiles.compare_with")),r.createElement(l.c,{className:"input-large",clearable:!1,onChange:this.handleChange,options:a,placeholder:Object(o.l)("select_verb"),value:i}))}}function c(){return r.createElement("div",{className:"big-spacer-top"},Object(o.l)("quality_profile.empty_comparison"))}var s=n(367),u=n(354),p=n(365),d=n(442);const h=Object(s.a)(()=>Promise.all([n.e(0),n.e(344)]).then(n.bind(null,937)),"ActivationFormModal");class m extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={state:"closed"},this.handleButtonClick=(()=>{this.setState({state:"opening"}),Object(d.c)({key:this.props.ruleKey,organization:this.props.organization}).then(({rule:e})=>{this.mounted&&this.setState({rule:e,state:"open"})},()=>{this.mounted&&this.setState({state:"closed"})})}),this.handleCloseModal=(()=>{this.setState({state:"closed"})})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}isOpen(e){return"open"===e.state}render(){const e=this.props.profile;return!e.isBuiltIn&&e.actions&&e.actions.edit?r.createElement(p.a,{loading:"opening"===this.state.state},r.createElement(u.a,{disabled:"closed"!==this.state.state,onClick:this.handleButtonClick},this.props.children),this.isOpen(this.state)&&r.createElement(h,{modalHeader:Object(o.l)("coding_rules.activate_in_quality_profile"),onClose:this.handleCloseModal,onDone:this.props.onDone,organization:this.props.organization,profiles:[e],rule:this.state.rule})):null}}var f=n(499),b=n(360),g=n(434),S=n(672);class v extends r.PureComponent{renderRule(e,t){return r.createElement("div",null,r.createElement(f.a,{severity:t})," ",r.createElement(i.Link,{to:Object(b.C)({rule_key:e.key,open:e.key},this.props.organization)},e.name))}renderParameters(e){return e?r.createElement("ul",null,Object.keys(e).map(t=>r.createElement("li",{className:"spacer-top",key:t},r.createElement("code",null,t,": ",e[t])))):null}renderLeft(){return 0===this.props.inLeft.length?null:r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",null,r.createElement("h6",null,Object(o.m)("quality_profiles.x_rules_only_in",this.props.inLeft.length)," ",this.props.left.name)),r.createElement("td",null," ")),this.props.inLeft.map(e=>r.createElement("tr",{className:"js-comparison-in-left",key:`left-${e.key}`},r.createElement("td",null,this.renderRule(e,e.severity)),r.createElement("td",null,this.props.rightProfile&&r.createElement(m,{key:e.key,onDone:this.props.refresh,organization:this.props.organization||void 0,profile:this.props.rightProfile,ruleKey:e.key},r.createElement(g.a,null))))))}renderRight(){return 0===this.props.inRight.length?null:r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",null," "),r.createElement("td",null,r.createElement("h6",null,Object(o.m)("quality_profiles.x_rules_only_in",this.props.inRight.length)," ",this.props.right.name))),this.props.inRight.map(e=>r.createElement("tr",{className:"js-comparison-in-right",key:`right-${e.key}`},r.createElement("td",{className:"text-right"},r.createElement(m,{key:e.key,onDone:this.props.refresh,organization:this.props.organization||void 0,profile:this.props.leftProfile,ruleKey:e.key},r.createElement(S.a,null))),r.createElement("td",null,this.renderRule(e,e.severity)))))}renderModified(){return 0===this.props.modified.length?null:r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",{className:"text-center",colSpan:2},r.createElement("h6",null,Object(o.m)("quality_profiles.x_rules_have_different_configuration",this.props.modified.length)))),r.createElement("tr",null,r.createElement("td",null,r.createElement("h6",null,this.props.left.name)),r.createElement("td",null,r.createElement("h6",null,this.props.right.name))),this.props.modified.map(e=>r.createElement("tr",{className:"js-comparison-modified",key:`modified-${e.key}`},r.createElement("td",null,this.renderRule(e,e.left.severity),this.renderParameters(e.left.params)),r.createElement("td",null,this.renderRule(e,e.right.severity),this.renderParameters(e.right.params)))))}render(){return this.props.inLeft.length||this.props.inRight.length||this.props.modified.length?r.createElement("table",{className:"data zebra quality-profile-comparison-table"},r.createElement("tbody",null,this.renderLeft(),this.renderRight(),this.renderModified())):r.createElement(c,null)}}var y=n(395),x=n(455);t.default=Object(i.withRouter)(class extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.loadResults=(()=>{const e=this.props.location.query.withKey;return e?(this.setState({loading:!0}),Object(y.h)(this.props.profile.key,e).then(({left:e,right:t,inLeft:n,inRight:r,modified:i})=>{this.mounted&&this.setState({left:e,right:t,inLeft:n,inRight:r,modified:i,loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})):(this.setState({left:void 0,loading:!1}),Promise.resolve())}),this.handleCompare=(e=>{const t=Object(x.b)(this.props.profile.name,this.props.profile.language,this.props.organization,e);this.props.router.push(t)})}componentDidMount(){this.mounted=!0,this.loadResults()}componentDidUpdate(e){e.profile===this.props.profile&&e.location===this.props.location||this.loadResults()}componentWillUnmount(){this.mounted=!1}hasResults(e){return void 0!==e.left}render(){const e=this.props,t=e.profile,n=e.profiles,i=e.location.query.withKey;return r.createElement("div",{className:"boxed-group boxed-group-inner js-profile-comparison"},r.createElement("header",null,r.createElement(a,{onCompare:this.handleCompare,profile:t,profiles:n,withKey:i}),this.state.loading&&r.createElement("i",{className:"spinner spacer-left"})),this.hasResults(this.state)&&r.createElement("div",{className:"spacer-top"},r.createElement(v,{inLeft:this.state.inLeft,inRight:this.state.inRight,left:this.state.left,leftProfile:t,modified:this.state.modified,organization:this.props.organization,refresh:this.loadResults,right:this.state.right,rightProfile:n.find(e=>e.key===i)})))}})},373:function(e,t,n){"use strict";n.d(t,"c",function(){return m}),n.d(t,"b",function(){return f}),n.d(t,"a",function(){return b});var r=n(352),i=n(359),l=n(392),o=n(354),a=n(367),c=(n(383),function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n});const s=n.e(356).then(n.bind(null,427)),u=Object(a.a)(()=>s),p=Object(a.a)(()=>s.then(e=>({default:e.Creatable}))),d=Object(a.a)(()=>s.then(e=>({default:e.Async})));function h(){return r.createElement(o.b,{className:"button-tiny spacer-left text-middle",color:i.gray60},r.createElement(l.a,{size:12}))}function m(e){var t=e.innerRef,n=c(e,["innerRef"]);const i=u,l=!!n.clearable&&Boolean(n.value);return r.createElement(i,Object.assign({},n,{clearRenderer:h,clearable:l,ref:t}))}function f(e){const t=p;return r.createElement(t,Object.assign({},e,{clearRenderer:h}))}function b(e){return r.createElement(d,Object.assign({},e))}},383:function(e,t,n){var r=n(384);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(356)(r,i);r.locals&&(e.exports=r.locals)},384:function(e,t,n){(e.exports=n(355)(!1)).push([e.i,"/*\n * SonarQube\n * Copyright (C) 2009-2019 SonarSource SA\n * mailto:info AT sonarsource DOT com\n *\n * This program is free software; you can redistribute it and/or\n * modify it under the terms of the GNU Lesser General Public\n * License as published by the Free Software Foundation; either\n * version 3 of the License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public License\n * along with this program; if not, write to the Free Software Foundation,\n * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n */\n.Select {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n  text-align: left;\n}\n\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  box-sizing: border-box;\n}\n\n.Select.is-disabled > .Select-control {\n  background-color: #ebebeb !important;\n  border-color: #ddd !important;\n}\n\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none !important;\n}\n\n.Select.is-disabled .Select-arrow-zone {\n  cursor: not-allowed !important;\n  pointer-events: none !important;\n}\n\n.Select.is-disabled .Select-placeholder,\n.Select.is-disabled .Select-value {\n  color: #bbb !important;\n}\n\n.Select-control {\n  position: relative;\n  display: table;\n  width: 100%;\n  height: 24px;\n  line-height: 22px;\n  border: 1px solid #cdcdcd;\n  border-collapse: separate;\n  border-radius: 2px;\n  background-color: #fff;\n  color: #444;\n  cursor: default;\n  outline: none;\n  overflow: hidden;\n}\n\n.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n}\n\n.is-open > .Select-control > .Select-arrow {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n\n.is-focused:not(.is-open) > .Select-control {\n  border-color: #4b9fd5;\n}\n\n.Select-placeholder {\n  color: #777;\n}\n\n.Select-placeholder,\n:not(.Select--multi) > .Select-control .Select-value {\n  bottom: 0;\n  left: 0;\n  line-height: 23px;\n  padding-left: 8px;\n  padding-right: 24px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.Select-value [class^='icon-'] {\n  padding-top: 5px;\n}\n\n.Select-value svg,\n.Select-value img {\n  padding-top: 4px;\n}\n\n.Select-value .outline-badge,\n.Select-option .outline-badge {\n  height: 20px;\n  line-height: 19px;\n  margin-top: 1px;\n}\n\n.Select-option svg,\n.Select-option img,\n.Select-option [class^='icon-'] {\n  padding-top: 2px;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value .Select-value-label,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  .Select-value-label {\n  color: #444;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label:hover,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label:hover,\n.has-value:not(.Select--multi) > .Select-control > .Select-value a.Select-value-label:focus,\n.has-value.is-pseudo-focused:not(.Select--multi)\n  > .Select-control\n  > .Select-value\n  a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n\n.Select-input {\n  vertical-align: top;\n  height: 22px;\n  padding-left: 8px;\n  padding-right: 8px;\n  outline: none;\n}\n\n.Select-input > input {\n  background: none transparent;\n  border: 0 none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: 12px;\n  height: 22px;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n}\n\n.is-focused .Select-input > input {\n  cursor: text;\n}\n\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n\n.Select-loading {\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #444;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n\n.Select-clear-zone {\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n  height: 16px;\n  padding-right: 4px;\n}\n\n.Select-clear-zone:hover .Select-clear {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDIzMSwyMCw1Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+ICAgIDwvZz48L3N2Zz4=);\n}\n\n.Select-clear {\n  display: block;\n  width: 9px;\n  height: 9px;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxNCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4gICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjM0Mzc1LDAsMCwwLjAyMzQzNzUsLTUuMDE1NjIsLTUuMDE1NjIpIj4gICAgICAgIDxwYXRoIGQ9Ik04MTAsMjc0TDU3Miw1MTJMODEwLDc1MEw3NTAsODEwTDUxMiw1NzJMMjc0LDgxMEwyMTQsNzUwTDQ1Miw1MTJMMjE0LDI3NEwyNzQsMjE0TDUxMiw0NTJMNzUwLDIxNEw4MTAsMjc0WiIgc3R5bGU9ImZpbGw6cmdiKDE1MywxNTMsMTUzKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4gICAgPC9nPjwvc3ZnPg==);\n  background-size: 9px 9px;\n  text-indent: -9999px;\n}\n\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 20px;\n  padding-right: 5px;\n}\n\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 4px 4px 2px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n}\n\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 7500;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n\n.Select-menu {\n  max-height: 198px;\n  padding: 5px 0;\n  overflow-y: auto;\n}\n\n.Select-option {\n  display: block;\n  line-height: 20px;\n  padding: 0 8px;\n  box-sizing: border-box;\n  color: #444;\n  font-size: 12px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.Select-option:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n\n.Select-option.is-focused {\n  background-color: #f3f3f3;\n}\n\n.Select-option.is-disabled {\n  font-weight: 600;\n  cursor: default;\n}\n\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n\n.Select--multi .Select-value {\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #444;\n  display: inline-block;\n  font-size: 12px;\n  line-height: 14px;\n  margin: 1px 4px 1px 1px;\n  vertical-align: top;\n}\n\n.Select-value-label {\n  font-size: 12px;\n}\n\n.is-searchable.is-open .Select-value-label {\n  opacity: 0.5;\n}\n\n.Select-big .Select-control {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.Select-big .Select-placeholder {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n\n.Select-big .Select-value-label {\n  display: inline-block;\n  margin-top: 7px;\n  line-height: 16px;\n}\n\n.Select-big .Select-option {\n  padding: 7px 8px;\n  line-height: 16px;\n}\n\n.Select-big img,\n.Select-big svg {\n  padding-top: 0;\n}\n\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.Select--multi .Select-value-label {\n  display: inline-block;\n  max-width: 200px;\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px;\n}\n\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n\n.Select--multi .Select-value-icon:active {\n  background-color: rgba(0, 126, 255, 0.24);\n}\n\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #444;\n}\n\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n\n.Select-aria-only {\n  display: none;\n}\n\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n",""])},395:function(e,t,n){"use strict";n.d(t,"y",function(){return c}),n.d(t,"s",function(){return s}),n.d(t,"j",function(){return u}),n.d(t,"w",function(){return p}),n.d(t,"r",function(){return d}),n.d(t,"q",function(){return h}),n.d(t,"A",function(){return m}),n.d(t,"v",function(){return f}),n.d(t,"i",function(){return b}),n.d(t,"l",function(){return g}),n.d(t,"g",function(){return S}),n.d(t,"o",function(){return v}),n.d(t,"n",function(){return y}),n.d(t,"p",function(){return x}),n.d(t,"h",function(){return w}),n.d(t,"d",function(){return E}),n.d(t,"m",function(){return j}),n.d(t,"z",function(){return O}),n.d(t,"x",function(){return M}),n.d(t,"c",function(){return N}),n.d(t,"u",function(){return z}),n.d(t,"b",function(){return I}),n.d(t,"t",function(){return k}),n.d(t,"e",function(){return L}),n.d(t,"f",function(){return R}),n.d(t,"a",function(){return C}),n.d(t,"k",function(){return D});var r=n(396),i=n.n(r),l=n(473),o=n(4),a=n(370);function c(e){return Object(o.getJSON)("/api/qualityprofiles/search",e).catch(a.a)}function s(e){return Object(o.getJSON)("/api/qualityprofiles/show",e)}function u(e){return Object(o.request)("/api/qualityprofiles/create").setMethod("post").setData(e).submit().then(o.checkStatus).then(o.parseJSON).catch(a.a)}function p(e){return Object(o.request)("/api/qualityprofiles/restore").setMethod("post").setData(e).submit().then(o.checkStatus).then(o.parseJSON).catch(a.a)}function d(e){return Object(o.getJSON)("/api/qualityprofiles/projects",e).catch(a.a)}function h(e){return Object(o.getJSON)("/api/qualityprofiles/inheritance",{profileKey:e}).catch(a.a)}function m(e){return Object(o.post)("/api/qualityprofiles/set_default",{profileKey:e})}function f(e,t){return Object(o.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(a.a)}function b(e,t){return Object(o.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(a.a)}function g(e){return Object(o.post)("/api/qualityprofiles/delete",{profileKey:e}).catch(a.a)}function S(e,t){return Object(o.post)("/api/qualityprofiles/change_parent",{profileKey:e,parentKey:t}).catch(a.a)}function v(){return Object(o.getJSON)("/api/qualityprofiles/importers").then(e=>e.importers,a.a)}function y(){return Object(o.getJSON)("/api/qualityprofiles/exporters").then(e=>e.exporters)}function x(e){return Object(o.getJSON)("/api/qualityprofiles/changelog",e)}function w(e,t){return Object(o.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function E(e,t){return Object(o.post)("/api/qualityprofiles/add_project",{key:e,project:t}).catch(a.a)}function j(e,t){return Object(o.post)("/api/qualityprofiles/remove_project",{key:e,project:t}).catch(a.a)}function O(e){return Object(o.getJSON)("/api/qualityprofiles/search_users",e).catch(a.a)}function M(e){return Object(o.getJSON)("/api/qualityprofiles/search_groups",e).catch(a.a)}function N(e){return Object(o.post)("/api/qualityprofiles/add_user",e).catch(a.a)}function z(e){return Object(o.post)("/api/qualityprofiles/remove_user",e).catch(a.a)}function I(e){return Object(o.post)("/api/qualityprofiles/add_group",e).catch(a.a)}function k(e){return Object(o.post)("/api/qualityprofiles/remove_group",e).catch(a.a)}function L(e){return Object(o.postJSON)("/api/qualityprofiles/activate_rules",e)}function R(e){return Object(o.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function C(e){const t=e.params&&i()(e.params,(e,t)=>`${t}=${Object(l.a)(e)}`).join(";");return Object(o.post)("/api/qualityprofiles/activate_rule",Object.assign({},e,{params:t})).catch(a.a)}function D(e){return Object(o.post)("/api/qualityprofiles/deactivate_rule",e).catch(a.a)}},396:function(e,t,n){var r=n(48),i=n(12),l=n(449),o=n(6);e.exports=function(e,t){return(o(e)?r:l)(e,i(t,3))}},434:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(352),i=n(357);function l({className:e,fill:t="currentColor",size:n}){return r.createElement(i.a,{className:e,size:n},r.createElement("path",{d:"M11.596 8.28l-4.604 4.602a.382.382 0 0 1-.279.118.382.382 0 0 1-.279-.118l-1.03-1.03a.382.382 0 0 1-.117-.278c0-.108.04-.201.117-.28L8.7 8 5.404 4.706a.382.382 0 0 1-.117-.28c0-.108.04-.2.117-.279l1.03-1.03A.382.382 0 0 1 6.714 3c.107 0 .2.04.278.118l4.604 4.603a.382.382 0 0 1 .117.279c0 .108-.04.201-.117.28z",style:{fill:t}}))}},442:function(e,t,n){"use strict";n.d(t,"e",function(){return l}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"h",function(){return d});var r=n(4),i=n(370);function l(e){return Object(r.getJSON)("/api/rules/app",e).catch(i.a)}function o(e){return Object(r.getJSON)("/api/rules/search",e).catch(i.a)}function a(e,t){const n=e.facets.find(e=>e.property===t);return n?n.values:[]}function c(e){return Object(r.getJSON)("/api/rules/show",e).catch(i.a)}function s(e){return Object(r.getJSON)("/api/rules/tags",e).then(e=>e.tags,i.a)}function u(e){return Object(r.postJSON)("/api/rules/create",e).then(e=>e.rule,e=>e&&e.response&&409===e.response.status?Promise.reject(e.response):Object(i.a)(e))}function p(e){return Object(r.post)("/api/rules/delete",e).catch(i.a)}function d(e){return Object(r.postJSON)("/api/rules/update",e).then(e=>e.rule,i.a)}},473:function(e,t,n){"use strict";function r(e){return`"${e.replace(/"/g,'\\"')}"`}n.d(t,"a",function(){return r})},499:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(352),i=n(357),l=n(359);const o={blocker:function({className:e,size:t}){return r.createElement(i.a,{className:e,size:t},r.createElement("path",{d:"M8 14c-3.311 0-6-2.689-6-6s2.689-6 6-6 6 2.689 6 6-2.689 6-6 6zM7 9h2V4H7v5zm0 3h2v-2H7v2z",style:{fill:l.red,fillRule:"nonzero"}}))},critical:function({className:e,size:t}){return r.createElement(i.a,{className:e,size:t},r.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 10V7.414l1.893 1.893c.13.124.282.216.457.261a1.006 1.006 0 0 0 1.176-.591 1.01 1.01 0 0 0 .01-.729 1.052 1.052 0 0 0-.229-.355c-1.212-1.212-2.394-2.456-3.638-3.636a1.073 1.073 0 0 0-.169-.123 1.05 1.05 0 0 0-.448-.133h-.104a1.053 1.053 0 0 0-.493.16 1.212 1.212 0 0 0-.162.132C6.08 5.505 4.836 6.687 3.656 7.932a.994.994 0 0 0-.051 1.275c.208.271.548.42.888.389.198-.019.378-.098.535-.218.041-.035.04-.034.079-.071L7 7.414V12h2z",style:{fill:l.red,fillRule:"nonzero"}}))},major:function({className:e,size:t}){return r.createElement(i.a,{className:e,size:t},r.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm.08 2.903c.071.008.14.019.208.039.138.042.26.114.37.205 1.244 1.146 2.426 2.357 3.639 3.536.1.103.181.218.234.352a1.01 1.01 0 0 1 .001.728 1.002 1.002 0 0 1-1.169.609 1.042 1.042 0 0 1-.46-.255L8 7.295l-2.903 2.822c-.039.036-.039.036-.08.07a1.002 1.002 0 0 1-1.604-.947c.032-.196.122-.37.253-.519C4.847 7.51 6.09 6.362 7.303 5.183c.052-.048.106-.093.167-.131a1.041 1.041 0 0 1 .61-.149z",style:{fill:l.red}}))},minor:function({className:e,size:t}){return r.createElement(i.a,{className:e,size:t},r.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 6.586V4H7v4.586L5.107 6.693a1.178 1.178 0 0 0-.165-.134 1.041 1.041 0 0 0-.662-.152 1 1 0 0 0-.587 1.7c1.212 1.212 2.394 2.456 3.638 3.636.094.08.195.146.311.191a1.008 1.008 0 0 0 1.065-.227c1.213-1.212 2.457-2.394 3.637-3.639a.994.994 0 0 0 .051-1.275 1.012 1.012 0 0 0-.888-.389 1.041 1.041 0 0 0-.535.218c-.04.034-.04.034-.079.071L9 8.586z",style:{fill:l.lightGreen}}))},info:function({className:e,size:t}){return r.createElement(i.a,{className:e,size:t},r.createElement("path",{d:"M8 2c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm1 5H7v5h2V7zm0-3H7v2h2V4z",style:{fill:l.blue}}))}};function a(e){if(!e.severity)return null;const t=e.severity.toLowerCase(),n=o[t];return n?r.createElement(n,{className:e.className}):null}},672:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(352),i=n(357);function l({className:e,fill:t="currentColor",size:n}){return r.createElement(i.a,{className:e,size:n},r.createElement("path",{d:"M4.404 8.28l4.604 4.602a.382.382 0 0 0 .279.118c.108 0 .2-.04.279-.118l1.03-1.03a.382.382 0 0 0 .117-.278.382.382 0 0 0-.117-.28L7.3 8l3.295-3.294a.382.382 0 0 0 .117-.28.382.382 0 0 0-.117-.279l-1.03-1.03A.382.382 0 0 0 9.286 3a.382.382 0 0 0-.278.118L4.404 7.72A.382.382 0 0 0 4.287 8c0 .108.04.201.117.28z",style:{fill:t}}))}}}]);
//# sourceMappingURL=303.m.a49fd85b.chunk.js.map