(self.webpackChunkmantine_docs=self.webpackChunkmantine_docs||[]).push([[821],{3154:function(t,e,n){"use strict";n.d(e,{Z:function(){return Tt}});var r,i,u,o,c=n(7378),a=n(5697),M=n.n(a),y=n(8412),s=n.n(y),L=n(1275),l=n.n(L),f=n(1209),j=n.n(f),T="bodyAttributes",p="htmlAttributes",g="titleAttributes",N={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},d=(Object.keys(N).map((function(t){return N[t]})),"charset"),I="cssText",A="href",D="http-equiv",h="innerHTML",m="itemprop",S="name",C="property",z="rel",b="src",O="target",w={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},E="defaultTitle",v="defer",x="encodeSpecialCharacters",k="onChangeClientState",Y="titleTemplate",Q=Object.keys(w).reduce((function(t,e){return t[w[e]]=e,t}),{}),P=[N.NOSCRIPT,N.SCRIPT,N.STYLE],U="data-react-helmet",R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Z=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},B=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},G=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},_=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(t){var e=X(t,N.TITLE),n=X(t,Y);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=X(t,E);return e||r||void 0},W=function(t){return X(t,k)||function(){}},V=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return J({},t,e)}),{})},q=function(t,e){return e.filter((function(t){return void 0!==t[N.BASE]})).map((function(t){return t[N.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var u=r[i].toLowerCase();if(-1!==t.indexOf(u)&&n[u])return e.concat(n)}return e}),[])},K=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+R(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,u=Object.keys(t),o=0;o<u.length;o++){var c=u[o],a=c.toLowerCase();-1===e.indexOf(a)||n===z&&"canonical"===t[n].toLowerCase()||a===z&&"stylesheet"===t[a].toLowerCase()||(n=a),-1===e.indexOf(c)||c!==h&&c!==I&&c!==m||(n=c)}if(!n||!t[n])return!1;var M=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][M]&&(i[n][M]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var u=Object.keys(i),o=0;o<u.length;o++){var c=u[o],a=j()({},r[c],i[c]);r[c]=a}return t}),[]).reverse()},X=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,ut=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,u=t.linkTags,o=t.metaTags,c=t.noscriptTags,a=t.onChangeClientState,M=t.scriptTags,y=t.styleTags,s=t.title,L=t.titleAttributes;at(N.BODY,r),at(N.HTML,i),ct(s,L);var l={baseTag:Mt(N.BASE,n),linkTags:Mt(N.LINK,u),metaTags:Mt(N.META,o),noscriptTags:Mt(N.NOSCRIPT,c),scriptTags:Mt(N.SCRIPT,M),styleTags:Mt(N.STYLE,y)},f={},j={};Object.keys(l).forEach((function(t){var e=l[t],n=e.newTags,r=e.oldTags;n.length&&(f[t]=n),r.length&&(j[t]=l[t].oldTags)})),e&&e(),a(t,f,j)},ot=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=ot(t)),at(N.TITLE,e)},at=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(U),i=r?r.split(","):[],u=[].concat(i),o=Object.keys(e),c=0;c<o.length;c++){var a=o[c],M=e[a]||"";n.getAttribute(a)!==M&&n.setAttribute(a,M),-1===i.indexOf(a)&&i.push(a);var y=u.indexOf(a);-1!==y&&u.splice(y,1)}for(var s=u.length-1;s>=0;s--)n.removeAttribute(u[s]);i.length===u.length?n.removeAttribute(U):n.getAttribute(U)!==o.join(",")&&n.setAttribute(U,o.join(","))}},Mt=function(t,e){var n=document.head||document.querySelector(N.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),u=[],o=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===h)n.innerHTML=e.innerHTML;else if(r===I)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),i.some((function(t,e){return o=e,n.isEqualNode(t)}))?i.splice(o,1):u.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),u.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:u}},yt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},st=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[w[n]||n]=t[n],e}),e)},Lt=function(t,e,n){switch(t){case N.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[U]=!0,i=st(n,r),[c.createElement(N.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=yt(n),u=ot(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+_(u,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+_(u,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case T:case p:return{toComponent:function(){return st(e)},toString:function(){return yt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[U]=!0,r);return Object.keys(e).forEach((function(t){var n=w[t]||t;if(n===h||n===I){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),c.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===h||t===I)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+_(r[e],n)+'"';return t?t+" "+i:i}),""),u=r.innerHTML||r.cssText||"",o=-1===P.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(o?"/>":">"+u+"</"+t+">")}),"")}(t,e,n)}}}},lt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,u=t.linkTags,o=t.metaTags,c=t.noscriptTags,a=t.scriptTags,M=t.styleTags,y=t.title,s=void 0===y?"":y,L=t.titleAttributes;return{base:Lt(N.BASE,e,r),bodyAttributes:Lt(T,n,r),htmlAttributes:Lt(p,i,r),link:Lt(N.LINK,u,r),meta:Lt(N.META,o,r),noscript:Lt(N.NOSCRIPT,c,r),script:Lt(N.SCRIPT,a,r),style:Lt(N.STYLE,M,r),title:Lt(N.TITLE,{title:s,titleAttributes:L},r)}},ft=s()((function(t){return{baseTag:q([A,O],t),bodyAttributes:V(T,t),defer:X(t,v),encode:X(t,x),htmlAttributes:V(p,t),linkTags:K(N.LINK,[z,A],t),metaTags:K(N.META,[S,d,D,C,m],t),noscriptTags:K(N.NOSCRIPT,[h],t),onChangeClientState:W(t),scriptTags:K(N.SCRIPT,[b,h],t),styleTags:K(N.STYLE,[I],t),title:F(t),titleAttributes:V(g,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){ut(t,(function(){it=null}))})):(ut(t),it=null)}),lt)((function(){return null})),jt=(i=ft,o=u=function(t){function e(){return H(this,e),G(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!l()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case N.SCRIPT:case N.NOSCRIPT:return{innerHTML:e};case N.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,u=t.nestedChildren;return J({},r,((e={})[n.type]=[].concat(r[n.type]||[],[J({},i,this.mapNestedChildrenToProps(n,u))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,u=t.newChildProps,o=t.nestedChildren;switch(r.type){case N.TITLE:return J({},i,((e={})[r.type]=o,e.titleAttributes=J({},u),e));case N.BODY:return J({},i,{bodyAttributes:J({},u)});case N.HTML:return J({},i,{htmlAttributes:J({},u)})}return J({},i,((n={})[r.type]=J({},u),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=J({},e);return Object.keys(t).forEach((function(e){var r;n=J({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return c.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,u=i.children,o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[Q[n]||n]=t[n],e}),e)}(B(i,["children"]));switch(n.warnOnInvalidChildren(t,u),t.type){case N.LINK:case N.META:case N.NOSCRIPT:case N.SCRIPT:case N.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:o,nestedChildren:u});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:o,nestedChildren:u})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=B(t,["children"]),r=J({},n);return e&&(r=this.mapChildrenToProps(e,r)),c.createElement(i,r)},Z(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(c.Component),u.propTypes={base:M().object,bodyAttributes:M().object,children:M().oneOfType([M().arrayOf(M().node),M().node]),defaultTitle:M().string,defer:M().bool,encodeSpecialCharacters:M().bool,htmlAttributes:M().object,link:M().arrayOf(M().object),meta:M().arrayOf(M().object),noscript:M().arrayOf(M().object),onChangeClientState:M().func,script:M().arrayOf(M().object),style:M().arrayOf(M().object),title:M().string,titleAttributes:M().object,titleTemplate:M().string},u.defaultProps={defer:!0,encodeSpecialCharacters:!0},u.peek=i.peek,u.rewind=function(){var t=i.rewind();return t||(t=lt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},o);jt.renderStatic=jt.rewind;function Tt(t){var e=t.title,n=t.description,r=t.disableTitleTemplate,i=n||"Customizable component library with focus on accessibility and developer experience.";return c.createElement(jt,{defer:!1,htmlAttributes:{lang:"en"},title:e,titleTemplate:r?void 0:"%s | Mantine",meta:[{name:"description",content:i},{property:"og:title",content:e},{property:"og:image",content:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMzM5QUYwIiBkPSJNMCAwaDEwMDB2NTAwSDB6Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ2IDIyMCkiPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI0ZGRiIgcng9IjMwIi8+PGcgZmlsbD0iIzIyOEJFNiIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDMyLjc2MyAxMi42MzIpIj48cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yOC44MzcgMy43NGEyLjIyIDIuMjIgMCAwMC0zLjE0Ny40NzZjLTIuNTU1IDMuNTEzLTYuNDYyIDUuNTI4LTEwLjcyIDUuNTI4LTQuMjU4IDAtOC4xNjYtMi4wMTUtMTAuNzItNS41MjhhMi4yMiAyLjIyIDAgMDAtMy4xNDctLjQ3NiAyLjMyNSAyLjMyNSAwIDAwLS40NjYgMy4yMWMuOCAxLjEgMS43MDMgMi4wODYgMi42ODQgMi45NTd2Ni41MDZjMCAxLjI2OCAxLjAwOCAyLjI5NSAyLjI1IDIuMjk1czIuMjUtMS4wMjcgMi4yNS0yLjI5NVYxMi44MmExNy40OSAxNy40OSAwIDAwNy4xNDkgMS41MTUgMTcuNDkgMTcuNDkgMCAwMDcuMTUtMS41MTV2My41OTRjMCAxLjI2OCAxLjAwNyAyLjI5NSAyLjI1IDIuMjk1IDEuMjQxIDAgMi4yNDktMS4wMjcgMi4yNDktMi4yOTVWOS45MDdhMTguNDcyIDE4LjQ3MiAwIDAwMi42ODQtMi45NTcgMi4zMjYgMi4zMjYgMCAwMC0uNDY2LTMuMjF6Ii8+PHJlY3Qgd2lkdGg9IjYuNzE2IiBoZWlnaHQ9IjYuODAzIiB4PSIxMi4yODMiIHk9Ii4xMTMiIHJ4PSIzLjM1OCIvPjwvZz48L2c+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDQyLjc2IDI2NXYtMTIuNDRsLS4zMi03LjhoLjM2bDUuMiAxNC4zNiA1LjItMTQuMzZoLjM2bC0uMzIgNy44VjI2NWg1LjJ2LTI3LjkyaC02LjZsLTMuNDQgOS40aC0uMzJsLTMuNDQtOS40aC03LjA4VjI2NWg1LjJ6bTI1Ljk2LjQ4YzEuNiAwIDIuOTUzLS4zNDcgNC4wNi0xLjA0IDEuMTA3LS42OTMgMS44NDctMS43MiAyLjIyLTMuMDhoLjJjLjEzMyAxLjE3My41NzMgMi4wNzMgMS4zMiAyLjcuNzQ3LjYyNyAxLjczMy45NCAyLjk2Ljk0aDMuNHYtNC4yOGgtMi4yOHYtOS4wNGMwLTIuNjEzLS43OTMtNC41NjctMi4zOC01Ljg2LTEuNTg3LTEuMjkzLTMuNzkzLTEuOTQtNi42Mi0xLjk0LTIuMzIgMC00LjIyLjM4LTUuNyAxLjE0LTEuNDguNzYtMi41NjcgMS43MjctMy4yNiAyLjlsMy4yNCAyLjg4YTcuMDQ2IDcuMDQ2IDAgMDEyLTEuODhjLjc3My0uNDggMS43ODctLjcyIDMuMDQtLjcyIDEuMzYgMCAyLjMyNy4zMTMgMi45Ljk0cy44NiAxLjU1My44NiAyLjc4djEuMDRoLTMuMzJjLTMuMDQgMC01LjM0Ny41Mi02LjkyIDEuNTYtMS41NzMgMS4wNC0yLjM2IDIuNjQtMi4zNiA0LjggMCAxLjk0Ny42MDcgMy40NiAxLjgyIDQuNTRzMi44MiAxLjYyIDQuODIgMS42MnptMi4yNC0zLjg4Yy0uOTMzIDAtMS42OC0uMTg3LTIuMjQtLjU2LS41Ni0uMzczLS44NC0uOTItLjg0LTEuNjR2LS44YzAtMS42MjcgMS4yMTMtMi40NCAzLjY0LTIuNDRoMy4xNnYyLjQ4YzAgLjk2LS4zNiAxLjY5My0xLjA4IDIuMi0uNzIuNTA3LTEuNi43Ni0yLjY0Ljc2em0yMS41NiAzLjR2LTEzLjU2YzAtLjUwNy4xLS45NDcuMy0xLjMyLjItLjM3My40NzMtLjY4Ny44Mi0uOTQuMzQ3LS4yNTMuNzQtLjQ0IDEuMTgtLjU2LjQ0LS4xMi44ODctLjE4IDEuMzQtLjE4IDIuMzIgMCAzLjQ4IDEuMzMzIDMuNDggNFYyNjVoNS45MnYtMTMuMzZjMC0xLjI1My0uMTY3LTIuMzYtLjUtMy4zMi0uMzMzLS45Ni0uNzkzLTEuNzczLTEuMzgtMi40NGE1LjU1IDUuNTUgMCAwMC0yLjEyLTEuNWMtLjgyNy0uMzMzLTEuNzMzLS41LTIuNzItLjUtLjgyNyAwLTEuNTY3LjExMy0yLjIyLjM0YTUuODk0IDUuODk0IDAgMDAtMS43Mi45MiA2IDYgMCAwMC0xLjI2IDEuMzQgOC43ODQgOC43ODQgMCAwMC0uODggMS42NGgtLjI0di0zLjc2aC01LjkyVjI2NWg1Ljkyem0zNi43MiAwdi00LjZoLTguMDR2LTExLjQ0aDguMDR2LTQuNmgtOC4wNHYtNy4yOGgtNS40NHY0Ljg0YzAgLjkzMy0uMTg3IDEuNTczLS41NiAxLjkyLS4zNzMuMzQ3LTEgLjUyLTEuODguNTJoLTMuNjR2NC42aDUuNnYxMC4wOGMwIDEuNzMzLjUyIDMuMTYgMS41NiA0LjI4czIuNjI3IDEuNjggNC43NiAxLjY4aDcuNjR6bTE2LjA0LTIzLjI4YzEuMzMzIDAgMi4yNi0uMjczIDIuNzgtLjgyLjUyLS41NDcuNzgtMS4yMDcuNzgtMS45OHYtMS4xNmMwLS44LS4yNi0xLjQ2Ny0uNzgtMi0uNTItLjUzMy0xLjQ0Ny0uOC0yLjc4LS44LTEuMzMzIDAtMi4yNi4yNjctMi43OC44cy0uNzggMS4yLS43OCAydjEuMTZjMCAuNzczLjI2IDEuNDMzLjc4IDEuOTguNTIuNTQ3IDEuNDQ3LjgyIDIuNzguODJ6bTkuMDQgMjMuMjh2LTQuNmgtNi4wOHYtMTYuMDRoLTEyLjQ4djQuNmg2LjU2djExLjQ0aC02LjU2djQuNmgxOC41NnptMTAuMiAwdi0xMy41NmMwLS41MDcuMS0uOTQ3LjMtMS4zMi4yLS4zNzMuNDczLS42ODcuODItLjk0LjM0Ny0uMjUzLjc0LS40NCAxLjE4LS41Ni40NC0uMTIuODg3LS4xOCAxLjM0LS4xOCAyLjMyIDAgMy40OCAxLjMzMyAzLjQ4IDRWMjY1aDUuOTJ2LTEzLjM2YzAtMS4yNTMtLjE2Ny0yLjM2LS41LTMuMzItLjMzMy0uOTYtLjc5My0xLjc3My0xLjM4LTIuNDRhNS41NSA1LjU1IDAgMDAtMi4xMi0xLjVjLS44MjctLjMzMy0xLjczMy0uNS0yLjcyLS41LS44MjcgMC0xLjU2Ny4xMTMtMi4yMi4zNGE1Ljg5NCA1Ljg5NCAwIDAwLTEuNzIuOTIgNiA2IDAgMDAtMS4yNiAxLjM0IDguNzg0IDguNzg0IDAgMDAtLjg4IDEuNjRoLS4yNHYtMy43NmgtNS45MlYyNjVoNS45MnptMjguMDQuNDhjMi4yMTMgMCA0LjA0LS4zNiA1LjQ4LTEuMDggMS40NC0uNzIgMi41Ni0xLjU3MyAzLjM2LTIuNTZsLTMuMi0zLjQ4YTcuNDg2IDcuNDg2IDAgMDEtMi4yOCAxLjg2Yy0uODguNDY3LTEuOTMzLjctMy4xNi43LTEuNiAwLTIuODEzLS40MDctMy42NC0xLjIycy0xLjI0LTEuODg3LTEuMjQtMy4yMnYtLjM2SDYwMnYtMS43NmMwLTEuNi0uMjMzLTMuMDQ3LS43LTQuMzQtLjQ2Ny0xLjI5My0xLjEyNy0yLjM5My0xLjk4LTMuM3MtMS44OTMtMS42MDctMy4xMi0yLjFjLTEuMjI3LS40OTMtMi42MTMtLjc0LTQuMTYtLjc0LTEuNTQ3IDAtMi45NC4yNDctNC4xOC43NGE4LjQ1OCA4LjQ1OCAwIDAwLTMuMTYgMi4xNmMtLjg2Ny45NDctMS41MzMgMi4wOTMtMiAzLjQ0LS40NjcgMS4zNDctLjcgMi44Ni0uNyA0LjU0IDAgMy4zMDcuODkzIDUuOTIgMi42OCA3Ljg0IDEuNzg3IDEuOTIgNC40MTMgMi44OCA3Ljg4IDIuODh6bTMuNjQtMTIuNjhoLTguMzJ2LS4zMmMwLTEuMzMzLjM4LTIuMzkzIDEuMTQtMy4xOC43Ni0uNzg3IDEuNzgtMS4xOCAzLjA2LTEuMThzMi4yODcuMzg3IDMuMDIgMS4xNmMuNzMzLjc3MyAxLjEgMS44NCAxLjEgMy4ydi4zMnoiLz48L2c+PC9zdmc+"},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:title",content:e},{name:"twitter:description",content:i}]})}},1275:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function u(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,a,M,y;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(a=c;0!=a--;)if(!u(t[a],o[a]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(y=t.entries();!(a=y.next()).done;)if(!o.has(a.value[0]))return!1;for(y=t.entries();!(a=y.next()).done;)if(!u(a.value[1],o.get(a.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(y=t.entries();!(a=y.next()).done;)if(!o.has(a.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(a=c;0!=a--;)if(t[a]!==o[a])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(M=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(a=c;0!=a--;)if(!Object.prototype.hasOwnProperty.call(o,M[a]))return!1;if(e&&t instanceof Element)return!1;for(a=c;0!=a--;)if(("_owner"!==M[a]&&"__v"!==M[a]&&"__o"!==M[a]||!t.$$typeof)&&!u(t[M[a]],o[M[a]]))return!1;return!0}return t!=t&&o!=o}t.exports=function(t,e){try{return u(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},8412:function(t,e,n){"use strict";var r,i=n(7378),u=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var a,M=[];function y(){a=t(M.map((function(t){return t.props}))),s.canUseDOM?e(a):n&&(a=n(a))}var s=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return a},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=a;return a=void 0,M=[],t};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){M.push(this),y()},o.componentDidUpdate=function(){y()},o.componentWillUnmount=function(){var t=M.indexOf(this);M.splice(t,1),y()},o.render=function(){return u.createElement(r,this.props)},i}(i.PureComponent);return o(s,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),o(s,"canUseDOM",c),s}}}}]);
//# sourceMappingURL=5934d26371b939c8c9adb52b0586c4997dae9a3d-eca1651d39630e1ba63b.js.map