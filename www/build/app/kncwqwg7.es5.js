/*! Built with http://stenciljs.com */
App.loadBundle("kncwqwg7",["exports","./chunk2.js","./chunk3.js","./chunk1.js"],function(e,t,n,o){var i=window.App.h,r=function(){function e(){this.publicServerKey=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),o=new Uint8Array(n.length),i=0;i<n.length;++i)o[i]=n.charCodeAt(i);return o}("BBsb4au59pTKF4IKi-aJkEAGPXxtzs-lbtL58QxolsT2T-3dVQIXTUCCE1TSY8hyUvXLhJFEUmH7b5SJfSTcT-E")}return e.prototype.componentWillLoad=function(){"serviceWorker"in navigator&&"PushManager"in window?this.swSupport=!0:this.swSupport=!1},e.prototype.subscribeToNotify=function(e){console.log(e.detail.checked),!0===e.detail.checked&&this.handleSub()},e.prototype.handleSub=function(){var e=this;navigator.serviceWorker.getRegistration().then(function(t){t&&t.pushManager.getSubscription().then(function(n){null===n&&t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e.publicServerKey}).then(function(t){console.log("web push subscription: ",t),e.notify=!0})})})},e.prototype.render=function(){return i("ion-page",null,i("ion-header",null,i("ion-toolbar",{color:"primary"},i("ion-buttons",{slot:"start"},i("ion-back-button",{defaultHref:"/"})),i("ion-title",null,"Ionic PWA Toolkit"))),i("ion-content",null,i("p",null,"Hello! My name is ",this.name,". My name was passed in through a route param!"),this.swSupport?i("ion-item",null,i("ion-label",null,"Notifications"),i("ion-toggle",{checked:this.notify,disabled:this.notify})):null))},Object.defineProperty(e,"is",{get:function(){return"app-profile"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{name:{type:String,attr:"name"},notify:{state:!0},swSupport:{state:!0},toastCtrl:{connect:"ion-toast-controller"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"app-profile ion-scroll{padding:15px}"},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){}return e.prototype.onClick=function(e){var n=this.el.closest("ion-nav");n&&n.canGoBack()?(e.preventDefault(),n.pop()):this.defaultHref&&t.openURL(this.defaultHref,e,!0)},e.prototype.hostData=function(){return{class:{"show-back-button":!!this.defaultHref}}},e.prototype.render=function(){var e=this,t=this.icon||this.config.get("backButtonIcon","arrow-back"),n=this.text||this.config.get("backButtonText","ios"===this.mode?"Back":"");return i("button",{class:"back-button-inner",onClick:function(t){return e.onClick(t)}},t&&i("ion-icon",{name:t}),n&&i("span",{class:"button-text"},n),"md"===this.mode&&i("ion-ripple-effect",null))},Object.defineProperty(e,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"back-button"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:"Any",attr:"mode"},text:{type:"Any",attr:"text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".back-button{display:none}.back-button.show-back-button,.can-go-back>ion-header .back-button{display:inline-block}.back-button button{text-align:center;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:inline-block;border:0;outline:0;line-height:1;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;transition:background-color,opacity .1s linear;font-kerning:none;user-select:none;font-smoothing:antialiased;-webkit-font-smoothing:antialiased;display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center}.back-button .button-inner{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.back-button-text{display:flex;align-items:center}.back-button-md .back-button-inner{margin:2px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;font-size:14px;font-weight:500;text-transform:uppercase;color:var(--ion-toolbar-md-text-color,var(--ion-toolbar-text-color,#424242));background-color:transparent;box-shadow:none}.back-button-md .back-button-inner.activated{opacity:.4}.back-button-md ion-icon{padding-right:.3em;margin:0;padding:0 6px;text-align:left;text-align:start;font-size:24px;font-weight:400;line-height:.67;pointer-events:none}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){}return Object.defineProperty(e,"is",{get:function(){return"ion-buttons"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"bar-buttons"}},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){this.svgContent=null,this.ariaLabel="",this.ios="",this.md="",this.name=""}return Object.defineProperty(e.prototype,"iconName",{get:function(){var e=this.name.toLowerCase(),t=this.mode||"md";this.ios&&"ios"===t?e=this.ios.toLowerCase():this.md&&"md"===t?e=this.md.toLowerCase():e&&!/^md-|^ios-|^logo-/.test(e)&&(e=t+"-"+e);var n=e.replace(/[a-z]|-|\d/g,"");return""!==n?(console.error("invalid characters in ion-icon name: "+n),null):e},enumerable:!0,configurable:!0}),e.prototype.hostData=function(){var e={role:"img"};if(this.ariaLabel)e["aria-label"]=this.ariaLabel;else{var t=this.iconName;t&&(e["aria-label"]=t.replace("ios-","").replace("md-","").replace("-outline","").replace(/\-/g," "))}var n={};return this.size&&(n["icon-"+this.size]=!0),Object.assign({},e,{class:n})},e.prototype.render=function(){var e=this;if(this.isServer)return i("div",{class:"icon-inner"});var t=this.iconName;if(!t)return i("div",{class:"icon-inner"});var n=d[t];return n===this.svgContent?i("div",{class:"icon-inner",innerHTML:n}):(function(t,n,o){if((u[t]=u[t]||[]).push(function(t){e.svgContent=t}),!c[t]){c[t]=!0;var i=document.createElement("script");i.charset="utf-8",i.async=!0,i.src=n+"svg/"+t+".js";var r=setTimeout(a,12e4);i.onerror=i.onload=a,document.head.appendChild(i)}function a(){clearTimeout(r),i.onerror=i.onload=null,i.parentNode.removeChild(i),delete c[t]}}(t,this.publicPath),i("div",{class:"icon-inner"}))},Object.defineProperty(e,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"icon"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label"},color:{type:String,attr:"color"},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},md:{type:String,attr:"md"},mode:{context:"mode"},name:{type:String,attr:"name"},publicPath:{context:"publicPath"},size:{type:String,attr:"size"},svgContent:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-icon{display:inline-block;font-size:inherit}ion-icon .icon-inner{height:1em;width:1em}ion-icon svg{fill:currentColor;stroke:currentColor}.icon-small .icon-inner{font-size:18px}.icon-large .icon-inner{font-size:32px}.icon-ios-primary svg{fill:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));stroke:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.icon-ios-secondary svg{fill:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8));stroke:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.icon-ios-tertiary svg{fill:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942));stroke:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942))}.icon-ios-success svg{fill:var(--ion-color-ios-success,var(--ion-color-success,#10dc60));stroke:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.icon-ios-warning svg{fill:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00));stroke:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.icon-ios-danger svg{fill:var(--ion-color-ios-danger,var(--ion-color-danger,#f14141));stroke:var(--ion-color-ios-danger,var(--ion-color-danger,#f14141))}.icon-ios-light svg{fill:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8));stroke:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.icon-ios-medium svg{fill:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2));stroke:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.icon-ios-dark svg{fill:var(--ion-color-ios-dark,var(--ion-color-dark,#222428));stroke:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}.icon-md-primary svg{fill:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));stroke:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.icon-md-secondary svg{fill:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8));stroke:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.icon-md-tertiary svg{fill:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#f4a942));stroke:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#f4a942))}.icon-md-success svg{fill:var(--ion-color-md-success,var(--ion-color-success,#10dc60));stroke:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.icon-md-warning svg{fill:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00));stroke:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.icon-md-danger svg{fill:var(--ion-color-md-danger,var(--ion-color-danger,#f14141));stroke:var(--ion-color-md-danger,var(--ion-color-danger,#f14141))}.icon-md-light svg{fill:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8));stroke:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.icon-md-medium svg{fill:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2));stroke:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.icon-md-dark svg{fill:var(--ion-color-md-dark,var(--ion-color-dark,#222428));stroke:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"},enumerable:!0,configurable:!0}),e}(),c={},u=[],d={};window.loadIonicon=function(e,t){delete c[t],d[t]=e;var n=u[t];n&&(n.forEach(function(t){t(e)}),delete u[t])};var p=function(){function e(){this.itemStyles={},this.disabled=!1,this.tappable=!1}return e.prototype.itemStyle=function(e){e.stopPropagation();var t=!1,n=e.target.tagName,o=e.detail;for(var i in o)"item-"+i!==i&&(Object.defineProperty(o,"item-"+i,Object.getOwnPropertyDescriptor(o,i)),delete o[i],t=!0);this.itemStyles[n]=o,t&&(this.hasStyleChange=!0)},e.prototype.componentDidLoad=function(){for(var e=this.el.querySelectorAll("ion-button"),t=0;t<e.length;t++)e[t].size||(e[t].size="small")},e.prototype.render=function(){var e=this,n={};for(var o in this.itemStyles)n=Object.assign(n,this.itemStyles[o]);var r=!!(this.href||this.onclick||this.tappable),a=r?this.href?"a":"button":"div",l="button"===a?{type:"button"}:{href:this.href},s=null!=this.detail?this.detail:"ios"===this.mode&&r,c=Object.assign({},n,t.createThemedClasses(this.mode,this.color,"item"),t.getElementClassMap(this.el.classList),{"item-disabled":this.disabled,"item-detail-push":s});return this.hasStyleChange=!1,i(a,Object.assign({},l,{class:c,onClick:function(n){return t.openURL(e.href,n)}}),i("slot",{name:"start"}),i("div",{class:"item-inner"},i("div",{class:"input-wrapper"},i("slot",null)),i("slot",{name:"end"})),r&&"md"===this.mode&&i("ion-ripple-effect",null))},Object.defineProperty(e,"is",{get:function(){return"ion-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},hasStyleChange:{state:!0},href:{type:String,attr:"href"},mode:{type:"Any",attr:"mode"},onclick:{type:"Any",attr:"onclick"},tappable:{type:Boolean,attr:"tappable"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-item{display:block}.item{border-radius:0;margin:0;padding:0;text-align:initial;display:flex;overflow:hidden;align-items:center;justify-content:space-between;width:100%;min-height:44px;border:0;outline:0;font-weight:400;line-height:normal;text-decoration:none;color:inherit}.item-inner{margin:0;padding:0;display:flex;overflow:hidden;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border:0}.input-wrapper{display:flex;overflow:hidden;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis}.item.item[no-lines] .item-inner,.item[no-lines]{border:0}ion-item-group{display:block}.input.item,[vertical-align-top]{align-items:flex-start}.item-cover{left:0;top:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer}.item-inner>ion-icon,.item>ion-icon{font-size:1.6em}.item .button{margin:0}.item-disabled{cursor:default;opacity:.4;pointer-events:none}.item-md{padding-left:16px;padding-right:0;position:relative;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400;text-transform:none;color:var(--ion-item-md-text-color,var(--ion-item-text-color,var(--ion-text-color,#000)));background-color:var(--ion-item-md-background-color,var(--ion-item-background-color,var(--ion-background-color,#fff)));box-shadow:none;transition:background-color .3s cubic-bezier(.4,0,.2,1)}.item-md.activated{background-color:var(--ion-item-md-background-color-active,var(--ion-item-background-color-active,#f1f1f1))}.item-md[no-lines]{border-width:0}.item-md h1{margin:0 0 2px;font-size:24px;font-weight:400}.item-md h2{margin:2px 0;font-size:16px;font-weight:400}.item-md h3,.item-md h4,.item-md h5,.item-md h6{margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.item-md p{margin:0 0 2px;overflow:inherit;font-size:14px;line-height:normal;text-overflow:inherit;color:var(--ion-text-md-color-step-400,var(--ion-text-color-step-400,#666))}.item-md .item-inner{padding-right:8px;border-bottom:1px solid var(--ion-item-md-border-color,var(--ion-item-border-color,#dedede))}ion-list>ion-item-sliding:first-child .item-md,ion-list>ion-item:first-child .item-md,ion-reorder-group>ion-gesture>ion-item-sliding:first-child .item-md,ion-reorder-group>ion-gesture>ion-item:first-child .item-md{border-top:1px solid var(--ion-item-md-border-color,var(--ion-item-border-color,#dedede))}ion-list>ion-item-sliding:last-child .item-md,ion-list>ion-item:last-child .item-md,ion-reorder-group>ion-gesture>ion-item-sliding:last-child .item-md,ion-reorder-group>ion-gesture>ion-item:last-child .item-md{border-bottom:1px solid var(--ion-item-md-border-color,var(--ion-item-border-color,#dedede))}ion-list>ion-item-sliding:last-child .item-md .item-inner,ion-list>ion-item:last-child .item-md .item-inner,ion-reorder-group>ion-gesture>ion-item-sliding:last-child .item-md .item-inner,ion-reorder-group>ion-gesture>ion-item:last-child .item-md .item-inner{border-bottom:0}ion-item[no-lines],ion-item[no-lines] .item-inner{border-width:0}.item-md.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-item-md-border-color,%20var(--ion-item-border-color,%20%23dedede))'/></svg>\");padding-right:32px;background-position:right 14px center;background-repeat:no-repeat;background-size:14px 14px}.item-md [slot=end],.item-md [slot=start]{margin:0 8px 0 0}.item-md>ion-icon[slot=end],.item-md>ion-icon[slot=start]{margin-left:0;margin-top:11px;margin-bottom:10px}.item-md>ion-icon[slot=start]+.item-inner,.item-md>ion-icon[slot=start]+.item-input{margin-left:24px}.item-md ion-avatar[slot=start],.item-md ion-thumbnail[slot=start]{margin:8px 16px 8px 0}.item-md ion-avatar[slot=end],.item-md ion-thumbnail[slot=end]{margin:8px}.item-md.item-label-floating [slot=end],.item-md.item-label-stacked [slot=end]{margin-top:7px;margin-bottom:7px}.item-md .button-small-md{padding:0 .6em;height:25px;font-size:12px}.item-md .button-small-md ion-icon[slot=icon-only]{padding:0}.item-md ion-avatar{width:40px;height:40px}.item-md ion-thumbnail{width:80px;height:80px}.item-md-primary{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-md-primary .item-inner{border-bottom-color:var(--ion-color-md-primary-shade,var(--ion-color-primary-shade,#3171e0))}.item-md-primary p{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.item-md-primary.activated{background-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.item-md-primary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-primary-shade,%20var(--ion-color-primary-shade,%20%233171e0))'/></svg>\")}.item-md-secondary{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.item-md-secondary .item-inner{border-bottom-color:var(--ion-color-md-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc))}.item-md-secondary p{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.item-md-secondary.activated{background-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.item-md-secondary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-secondary-shade,%20var(--ion-color-secondary-shade,%20%230bb8cc))'/></svg>\")}.item-md-tertiary{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.item-md-tertiary .item-inner{border-bottom-color:var(--ion-color-md-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0))}.item-md-tertiary p{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.item-md-tertiary.activated{background-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.item-md-tertiary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-tertiary-shade,%20var(--ion-color-tertiary-shade,%20%23633ce0))'/></svg>\")}.item-md-success{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.item-md-success .item-inner{border-bottom-color:var(--ion-color-md-success-shade,var(--ion-color-success-shade,#0ec254))}.item-md-success p{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.item-md-success.activated{background-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070))}.item-md-success.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-success-shade,%20var(--ion-color-success-shade,%20%230ec254))'/></svg>\")}.item-md-warning{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.item-md-warning .item-inner{border-bottom-color:var(--ion-color-md-warning-shade,var(--ion-color-warning-shade,#e0b500))}.item-md-warning p{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#000))}.item-md-warning.activated{background-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.item-md-warning.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-warning-shade,%20var(--ion-color-warning-shade,%20%23e0b500))'/></svg>\")}.item-md-danger{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.item-md-danger .item-inner{border-bottom-color:var(--ion-color-md-danger-shade,var(--ion-color-danger-shade,#d33939))}.item-md-danger p{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.item-md-danger.activated{background-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454))}.item-md-danger.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-danger-shade,%20var(--ion-color-danger-shade,%20%23d33939))'/></svg>\")}.item-md-light{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.item-md-light .item-inner{border-bottom-color:var(--ion-color-md-light-shade,var(--ion-color-light-shade,#d7d8da))}.item-md-light p{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.item-md-light.activated{background-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9))}.item-md-light.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-light-shade,%20var(--ion-color-light-shade,%20%23d7d8da))'/></svg>\")}.item-md-medium{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.item-md-medium .item-inner{border-bottom-color:var(--ion-color-md-medium-shade,var(--ion-color-medium-shade,#86888f))}.item-md-medium p{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#000))}.item-md-medium.activated{background-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.item-md-medium.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-medium-shade,%20var(--ion-color-medium-shade,%20%2386888f))'/></svg>\")}.item-md-dark{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}.item-md-dark .item-inner{border-bottom-color:var(--ion-color-md-dark-shade,var(--ion-color-dark-shade,#1e2023))}.item-md-dark p{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}.item-md-dark.activated{background-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e))}.item-md-dark.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-dark-shade,%20var(--ion-color-dark-shade,%20%231e2023))'/></svg>\")}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),h=function(){function e(){this.fixed=!1,this.floating=!1,this.stacked=!1}return e.prototype.getText=function(){return this.el.textContent||""},e.prototype.componentDidLoad=function(){this.emitStyle()},e.prototype.emitStyle=function(){var e=this;clearTimeout(this.styleTmr);var t={"label-fixed":this.fixed,"label-floating":this.floating,"label-stacked":this.stacked};this.styleTmr=setTimeout(function(){e.ionStyle.emit(t)})},Object.defineProperty(e,"is",{get:function(){return"ion-label"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"label"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},fixed:{type:Boolean,attr:"fixed"},floating:{type:Boolean,attr:"floating"},getText:{method:!0},mode:{type:"Any",attr:"mode"},stacked:{type:Boolean,attr:"stacked"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-label{margin:0;display:block;overflow:hidden;flex:1;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-input ion-label{flex:initial;max-width:200px;pointer-events:none}[text-wrap] ion-label{white-space:normal}ion-label[fixed]{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.item-label-floating ion-label,.item-label-stacked ion-label{align-self:stretch;width:auto;max-width:100%}ion-label[floating],ion-label[stacked]{margin-bottom:0}.item-label-floating .input-wrapper,.item-label-stacked .input-wrapper{flex:1;flex-direction:column}.item-label-floating ion-select,.item-label-stacked ion-select{align-self:stretch;max-width:100%}.label-md{margin:13px 8px 13px 0;font-family:Roboto,\"Helvetica Neue\",sans-serif}[text-wrap] .label-md{font-size:14px;line-height:1.5}.item-datetime .label-md,.item-input .label-md,.item-select .label-md{color:var(--ion-text-md-color-step-600,var(--ion-text-color-step-600,#999))}.label-md[stacked]{font-size:12px}.label-md[floating]{transform:translate3d(0,27px,0);transform-origin:left top;transition:transform 150ms ease-in-out}.label-md[floating],.label-md[stacked]{margin-left:0;margin-bottom:0}.item-input-has-focus .label-md[floating],.item-input-has-focus .label-md[stacked]{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-input-has-focus .label-md[floating],.item-input-has-value .label-md[floating]{transform:translate3d(0,0,0) scale(.8)}.item-datetime .label-md-primary,.item-input .label-md-primary,.item-select .label-md-primary,.label-md-primary{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-datetime .label-md-secondary,.item-input .label-md-secondary,.item-select .label-md-secondary,.label-md-secondary{color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.item-datetime .label-md-tertiary,.item-input .label-md-tertiary,.item-select .label-md-tertiary,.label-md-tertiary{color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.item-datetime .label-md-success,.item-input .label-md-success,.item-select .label-md-success,.label-md-success{color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.item-datetime .label-md-warning,.item-input .label-md-warning,.item-select .label-md-warning,.label-md-warning{color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.item-datetime .label-md-danger,.item-input .label-md-danger,.item-select .label-md-danger,.label-md-danger{color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.item-datetime .label-md-light,.item-input .label-md-light,.item-select .label-md-light,.label-md-light{color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.item-datetime .label-md-medium,.item-input .label-md-medium,.item-select .label-md-medium,.label-md-medium{color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.item-datetime .label-md-dark,.item-input .label-md-dark,.item-select .label-md-dark,.label-md-dark{color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),f=function(){function e(){this.toasts=new Map}return e.prototype.toastWillPresent=function(e){this.toasts.set(e.target.overlayId,e.target)},e.prototype.toastWillDismiss=function(e){this.toasts.delete(e.target.overlayId)},e.prototype.escapeKeyUp=function(){n.removeLastOverlay(this.toasts)},e.prototype.create=function(e){return n.createOverlay(document.createElement("ion-toast"),e)},e.prototype.dismiss=function(e,t,o){return void 0===o&&(o=-1),n.dismissOverlay(e,t,this.toasts,o)},e.prototype.getTop=function(){return n.getTopOverlay(this.toasts)},Object.defineProperty(e,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}(),b=window.TapticEngine;function g(){b&&b.selection()}var y=function(){function e(){this.activated=!1,this.checked=!1,this.disabled=!1,this.value="on",this.gestureConfig={onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"toggle",passive:!1,gesturePriority:30,type:"pan",direction:"x",threshold:0,attachTo:"parent"}}return e.prototype.componentWillLoad=function(){this.ionStyle=o.deferEvent(this.ionStyle),this.inputId="ion-tg-"+v++,void 0===this.name&&(this.name=this.inputId),this.emitStyle()},e.prototype.componentDidLoad=function(){this.didLoad=!0;var e=this.nativeInput.closest("ion-item");if(e){var t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}},e.prototype.checkedChanged=function(e){this.didLoad&&this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"toggle-disabled":this.disabled,"toggle-checked":this.checked,"toggle-activated":this.activated})},e.prototype.onDragStart=function(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0},e.prototype.onDragMove=function(e){var t=e.currentX;m(this.checked,t-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=t,g())},e.prototype.onDragEnd=function(e){var t=e.currentX-this.pivotX;m(this.checked,t,4)&&(this.checked=!this.checked,g()),this.activated=!1,this.nativeInput.focus()},e.prototype.onChange=function(){this.checked=!this.checked},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:{"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus}}},e.prototype.render=function(){var e=this;return[i("ion-gesture",Object.assign({},this.gestureConfig,{disabled:this.disabled,tabIndex:-1}),i("div",{class:"toggle-icon"},i("div",{class:"toggle-inner"})),i("div",{class:"toggle-cover"})),i("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(t){return e.nativeInput=t}})]},Object.defineProperty(e,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"toggle"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["emitStyle"]},keyFocus:{state:!0},mode:{type:"Any",attr:"mode"},name:{type:String,attr:"name",mutable:!0},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-toggle{display:inline-block;contain:content;touch-action:none;user-select:none}ion-toggle ion-gesture{display:block;width:100%;height:100%;visibility:inherit}.toggle-cover{left:0;position:absolute;top:0;width:100%;height:100%;border:0;outline:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;background:0 0;cursor:pointer}ion-toggle input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer;border:0;pointer-events:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}ion-toggle :focus{outline:0}.toggle-key input{border:2px solid #5e9ed6}.toggle-md{padding:12px;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}.toggle-md .toggle-icon{border-radius:14px;position:relative;display:block;width:100%;height:100%;background-color:var(--ion-item-md-border-color,var(--ion-item-border-color,#dedede));transition:background-color .3s;pointer-events:none}.toggle-md .toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;background-color:var(--ion-background-md-color,var(--ion-background-color,#fff));box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);transition-duration:.3s;transition-property:transform,background-color;will-change:transform,background-color;contain:strict}.toggle-md.toggle-checked .toggle-icon{background-color:rgba(var(--ion-color-md-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),var(--ion-alpha-md-medium,var(--ion-alpha-medium,.5)))}.toggle-md.toggle-checked .toggle-inner{transform:translate3d(16px,0,0);background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-md.item-toggle-disabled ion-label,.toggle-md.toggle-disabled{opacity:.3;pointer-events:none}.toggle-md.toggle-disabled ion-radio{opacity:.3}.item-md .toggle-md[slot]{margin:0;padding:12px 8px 12px 16px;cursor:pointer}.item-md .toggle-md[slot=start]{padding:12px 18px 12px 2px}.item-md.item-toggle ion-label{margin-left:0}.toggle-md-primary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.toggle-md-primary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.toggle-md-secondary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.toggle-md-secondary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.toggle-md-tertiary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.toggle-md-tertiary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.toggle-md-success.toggle-checked .toggle-icon{background-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070))}.toggle-md-success.toggle-checked .toggle-inner{background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.toggle-md-warning.toggle-checked .toggle-icon{background-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.toggle-md-warning.toggle-checked .toggle-inner{background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.toggle-md-danger.toggle-checked .toggle-icon{background-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454))}.toggle-md-danger.toggle-checked .toggle-inner{background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.toggle-md-light.toggle-checked .toggle-icon{background-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9))}.toggle-md-light.toggle-checked .toggle-inner{background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.toggle-md-medium.toggle-checked .toggle-icon{background-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.toggle-md-medium.toggle-checked .toggle-inner{background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.toggle-md-dark.toggle-checked .toggle-icon{background-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e))}.toggle-md-dark.toggle-checked .toggle-inner{background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function m(e,t,n){var o="rtl"===document.dir;return e?!o&&n>t||o&&-n<t:!o&&-n<t||o&&n>t}var v=0;e.AppProfile=r,e.IonBackButton=a,e.IonButtons=l,e.IonIcon=s,e.IonItem=p,e.IonLabel=h,e.IonToastController=f,e.IonToggle=y,Object.defineProperty(e,"__esModule",{value:!0})});