/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{openURL as e,createThemedClasses as i,getElementClassMap as s}from"./chunk2.js";import{createOverlay as o,dismissOverlay as n,getTopOverlay as a,removeLastOverlay as r}from"./chunk3.js";import{deferEvent as l}from"./chunk1.js";class c{constructor(){this.publicServerKey=function(t){const e=(t+"=".repeat((4-t.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),i=window.atob(e),s=new Uint8Array(i.length);for(let t=0;t<i.length;++t)s[t]=i.charCodeAt(t);return s}("BBsb4au59pTKF4IKi-aJkEAGPXxtzs-lbtL58QxolsT2T-3dVQIXTUCCE1TSY8hyUvXLhJFEUmH7b5SJfSTcT-E")}componentWillLoad(){"serviceWorker"in navigator&&"PushManager"in window?this.swSupport=!0:this.swSupport=!1}subscribeToNotify(t){console.log(t.detail.checked),!0===t.detail.checked&&this.handleSub()}handleSub(){navigator.serviceWorker.getRegistration().then(t=>{t&&t.pushManager.getSubscription().then(e=>{null===e&&t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:this.publicServerKey}).then(t=>{console.log("web push subscription: ",t),this.notify=!0})})})}render(){return t("ion-page",null,t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-buttons",{slot:"start"},t("ion-back-button",{defaultHref:"/"})),t("ion-title",null,"Ionic PWA Toolkit"))),t("ion-content",null,t("p",null,"Hello! My name is ",this.name,". My name was passed in through a route param!"),this.swSupport?t("ion-item",null,t("ion-label",null,"Notifications"),t("ion-toggle",{checked:this.notify,disabled:this.notify})):null))}static get is(){return"app-profile"}static get properties(){return{name:{type:String,attr:"name"},notify:{state:!0},swSupport:{state:!0},toastCtrl:{connect:"ion-toast-controller"}}}static get style(){return"app-profile ion-scroll{padding:15px}"}}class h{onClick(t){const i=this.el.closest("ion-nav");i&&i.canGoBack()?(t.preventDefault(),i.pop()):this.defaultHref&&e(this.defaultHref,t,!0)}hostData(){return{class:{"show-back-button":!!this.defaultHref}}}render(){const e=this.icon||this.config.get("backButtonIcon","arrow-back"),i=this.text||this.config.get("backButtonText","ios"===this.mode?"Back":"");return t("button",{class:"back-button-inner",onClick:t=>this.onClick(t)},e&&t("ion-icon",{name:e}),i&&t("span",{class:"button-text"},i),"md"===this.mode&&t("ion-ripple-effect",null))}static get is(){return"ion-back-button"}static get host(){return{theme:"back-button"}}static get properties(){return{config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:"Any",attr:"mode"},text:{type:"Any",attr:"text"}}}static get style(){return".back-button{display:none}.back-button.show-back-button,.can-go-back>ion-header .back-button{display:inline-block}.back-button button{text-align:center;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:inline-block;border:0;outline:0;line-height:1;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;transition:background-color,opacity .1s linear;font-kerning:none;user-select:none;font-smoothing:antialiased;-webkit-font-smoothing:antialiased;display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center}.back-button .button-inner{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}.back-button-text{display:flex;align-items:center}.back-button-md .back-button-inner{margin:2px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;font-size:14px;font-weight:500;text-transform:uppercase;color:var(--ion-toolbar-md-text-color,var(--ion-toolbar-text-color,#424242));background-color:transparent;box-shadow:none}.back-button-md .back-button-inner.activated{opacity:.4}.back-button-md ion-icon{padding-right:.3em;margin:0;padding:0 6px;text-align:left;text-align:start;font-size:24px;font-weight:400;line-height:.67;pointer-events:none}"}static get styleMode(){return"md"}}class d{static get is(){return"ion-buttons"}static get host(){return{theme:"bar-buttons"}}}class u{constructor(){this.svgContent=null,this.ariaLabel="",this.ios="",this.md="",this.name=""}get iconName(){let t=this.name.toLowerCase();const e=this.mode||"md";this.ios&&"ios"===e?t=this.ios.toLowerCase():this.md&&"md"===e?t=this.md.toLowerCase():t&&!/^md-|^ios-|^logo-/.test(t)&&(t=e+"-"+t);const i=t.replace(/[a-z]|-|\d/g,"");return""!==i?(console.error(`invalid characters in ion-icon name: ${i}`),null):t}hostData(){const t={role:"img"};if(this.ariaLabel)t["aria-label"]=this.ariaLabel;else{const e=this.iconName;e&&(t["aria-label"]=e.replace("ios-","").replace("md-","").replace("-outline","").replace(/\-/g," "))}const e={};return this.size&&(e[`icon-${this.size}`]=!0),Object.assign({},t,{class:e})}render(){if(this.isServer)return t("div",{class:"icon-inner"});const e=this.iconName;if(!e)return t("div",{class:"icon-inner"});const i=m[e];return i===this.svgContent?t("div",{class:"icon-inner",innerHTML:i}):(function(t,e,i){if((g[t]=g[t]||[]).push(i),!p[t]){p[t]=!0;var s=document.createElement("script");s.charset="utf-8",s.async=!0,s.src=`${e}svg/${t}.js`;var o=setTimeout(n,12e4);s.onerror=s.onload=n,document.head.appendChild(s)}function n(){clearTimeout(o),s.onerror=s.onload=null,s.parentNode.removeChild(s),delete p[t]}}(e,this.publicPath,t=>{this.svgContent=t}),t("div",{class:"icon-inner"}))}static get is(){return"ion-icon"}static get host(){return{theme:"icon"}}static get properties(){return{ariaLabel:{type:String,attr:"aria-label"},color:{type:String,attr:"color"},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},md:{type:String,attr:"md"},mode:{context:"mode"},name:{type:String,attr:"name"},publicPath:{context:"publicPath"},size:{type:String,attr:"size"},svgContent:{state:!0}}}static get style(){return"ion-icon{display:inline-block;font-size:inherit}ion-icon .icon-inner{height:1em;width:1em}ion-icon svg{fill:currentColor;stroke:currentColor}.icon-small .icon-inner{font-size:18px}.icon-large .icon-inner{font-size:32px}.icon-ios-primary svg{fill:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));stroke:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.icon-ios-secondary svg{fill:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8));stroke:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.icon-ios-tertiary svg{fill:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942));stroke:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#f4a942))}.icon-ios-success svg{fill:var(--ion-color-ios-success,var(--ion-color-success,#10dc60));stroke:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.icon-ios-warning svg{fill:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00));stroke:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.icon-ios-danger svg{fill:var(--ion-color-ios-danger,var(--ion-color-danger,#f14141));stroke:var(--ion-color-ios-danger,var(--ion-color-danger,#f14141))}.icon-ios-light svg{fill:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8));stroke:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.icon-ios-medium svg{fill:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2));stroke:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.icon-ios-dark svg{fill:var(--ion-color-ios-dark,var(--ion-color-dark,#222428));stroke:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}.icon-md-primary svg{fill:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));stroke:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.icon-md-secondary svg{fill:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8));stroke:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.icon-md-tertiary svg{fill:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#f4a942));stroke:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#f4a942))}.icon-md-success svg{fill:var(--ion-color-md-success,var(--ion-color-success,#10dc60));stroke:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.icon-md-warning svg{fill:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00));stroke:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.icon-md-danger svg{fill:var(--ion-color-md-danger,var(--ion-color-danger,#f14141));stroke:var(--ion-color-md-danger,var(--ion-color-danger,#f14141))}.icon-md-light svg{fill:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8));stroke:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.icon-md-medium svg{fill:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2));stroke:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.icon-md-dark svg{fill:var(--ion-color-md-dark,var(--ion-color-dark,#222428));stroke:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"}}const p={},g=[],m={};window.loadIonicon=function(t,e){delete p[e],m[e]=t;const i=g[e];i&&(i.forEach(e=>{e(t)}),delete g[e])};class b{constructor(){this.itemStyles={},this.disabled=!1,this.tappable=!1}itemStyle(t){t.stopPropagation();let e=!1;const i=t.target.tagName,s=t.detail;for(const t in s)"item-"+t!==t&&(Object.defineProperty(s,"item-"+t,Object.getOwnPropertyDescriptor(s,t)),delete s[t],e=!0);this.itemStyles[i]=s,e&&(this.hasStyleChange=!0)}componentDidLoad(){const t=this.el.querySelectorAll("ion-button");for(let e=0;e<t.length;e++)t[e].size||(t[e].size="small")}render(){let o={};for(const t in this.itemStyles)o=Object.assign(o,this.itemStyles[t]);const n=!!(this.href||this.onclick||this.tappable),a=n?this.href?"a":"button":"div",r="button"===a?{type:"button"}:{href:this.href},l=null!=this.detail?this.detail:"ios"===this.mode&&n,c=Object.assign({},o,i(this.mode,this.color,"item"),s(this.el.classList),{"item-disabled":this.disabled,"item-detail-push":l});return this.hasStyleChange=!1,t(a,Object.assign({},r,{class:c,onClick:t=>e(this.href,t)}),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"})),n&&"md"===this.mode&&t("ion-ripple-effect",null))}static get is(){return"ion-item"}static get properties(){return{color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},hasStyleChange:{state:!0},href:{type:String,attr:"href"},mode:{type:"Any",attr:"mode"},onclick:{type:"Any",attr:"onclick"},tappable:{type:Boolean,attr:"tappable"}}}static get style(){return"ion-item{display:block}.item{border-radius:0;margin:0;padding:0;text-align:initial;display:flex;overflow:hidden;align-items:center;justify-content:space-between;width:100%;min-height:44px;border:0;outline:0;font-weight:400;line-height:normal;text-decoration:none;color:inherit}.item-inner{margin:0;padding:0;display:flex;overflow:hidden;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border:0}.input-wrapper{display:flex;overflow:hidden;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis}.item.item[no-lines] .item-inner,.item[no-lines]{border:0}ion-item-group{display:block}.input.item,[vertical-align-top]{align-items:flex-start}.item-cover{left:0;top:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer}.item-inner>ion-icon,.item>ion-icon{font-size:1.6em}.item .button{margin:0}.item-disabled{cursor:default;opacity:.4;pointer-events:none}.item-md{padding-left:16px;padding-right:0;position:relative;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400;text-transform:none;color:var(--ion-item-md-text-color,var(--ion-item-text-color,var(--ion-text-color,#000)));background-color:var(--ion-item-md-background-color,var(--ion-item-background-color,var(--ion-background-color,#fff)));box-shadow:none;transition:background-color .3s cubic-bezier(.4,0,.2,1)}.item-md.activated{background-color:var(--ion-item-md-background-color-active,var(--ion-item-background-color-active,#f1f1f1))}.item-md[no-lines]{border-width:0}.item-md h1{margin:0 0 2px;font-size:24px;font-weight:400}.item-md h2{margin:2px 0;font-size:16px;font-weight:400}.item-md h3,.item-md h4,.item-md h5,.item-md h6{margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.item-md p{margin:0 0 2px;overflow:inherit;font-size:14px;line-height:normal;text-overflow:inherit;color:var(--ion-text-md-color-step-400,var(--ion-text-color-step-400,#666))}.item-md .item-inner{padding-right:8px;border-bottom:1px solid var(--ion-item-md-border-color,var(--ion-item-border-color,#dedede))}ion-list>ion-item-sliding:first-child .item-md,ion-list>ion-item:first-child .item-md,ion-reorder-group>ion-gesture>ion-item-sliding:first-child .item-md,ion-reorder-group>ion-gesture>ion-item:first-child .item-md{border-top:1px solid var(--ion-item-md-border-color,var(--ion-item-border-color,#dedede))}ion-list>ion-item-sliding:last-child .item-md,ion-list>ion-item:last-child .item-md,ion-reorder-group>ion-gesture>ion-item-sliding:last-child .item-md,ion-reorder-group>ion-gesture>ion-item:last-child .item-md{border-bottom:1px solid var(--ion-item-md-border-color,var(--ion-item-border-color,#dedede))}ion-list>ion-item-sliding:last-child .item-md .item-inner,ion-list>ion-item:last-child .item-md .item-inner,ion-reorder-group>ion-gesture>ion-item-sliding:last-child .item-md .item-inner,ion-reorder-group>ion-gesture>ion-item:last-child .item-md .item-inner{border-bottom:0}ion-item[no-lines],ion-item[no-lines] .item-inner{border-width:0}.item-md.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-item-md-border-color,%20var(--ion-item-border-color,%20%23dedede))'/></svg>\");padding-right:32px;background-position:right 14px center;background-repeat:no-repeat;background-size:14px 14px}.item-md [slot=end],.item-md [slot=start]{margin:0 8px 0 0}.item-md>ion-icon[slot=end],.item-md>ion-icon[slot=start]{margin-left:0;margin-top:11px;margin-bottom:10px}.item-md>ion-icon[slot=start]+.item-inner,.item-md>ion-icon[slot=start]+.item-input{margin-left:24px}.item-md ion-avatar[slot=start],.item-md ion-thumbnail[slot=start]{margin:8px 16px 8px 0}.item-md ion-avatar[slot=end],.item-md ion-thumbnail[slot=end]{margin:8px}.item-md.item-label-floating [slot=end],.item-md.item-label-stacked [slot=end]{margin-top:7px;margin-bottom:7px}.item-md .button-small-md{padding:0 .6em;height:25px;font-size:12px}.item-md .button-small-md ion-icon[slot=icon-only]{padding:0}.item-md ion-avatar{width:40px;height:40px}.item-md ion-thumbnail{width:80px;height:80px}.item-md-primary{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-md-primary .item-inner{border-bottom-color:var(--ion-color-md-primary-shade,var(--ion-color-primary-shade,#3171e0))}.item-md-primary p{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.item-md-primary.activated{background-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.item-md-primary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-primary-shade,%20var(--ion-color-primary-shade,%20%233171e0))'/></svg>\")}.item-md-secondary{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.item-md-secondary .item-inner{border-bottom-color:var(--ion-color-md-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc))}.item-md-secondary p{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.item-md-secondary.activated{background-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.item-md-secondary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-secondary-shade,%20var(--ion-color-secondary-shade,%20%230bb8cc))'/></svg>\")}.item-md-tertiary{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.item-md-tertiary .item-inner{border-bottom-color:var(--ion-color-md-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0))}.item-md-tertiary p{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.item-md-tertiary.activated{background-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.item-md-tertiary.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-tertiary-shade,%20var(--ion-color-tertiary-shade,%20%23633ce0))'/></svg>\")}.item-md-success{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.item-md-success .item-inner{border-bottom-color:var(--ion-color-md-success-shade,var(--ion-color-success-shade,#0ec254))}.item-md-success p{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.item-md-success.activated{background-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070))}.item-md-success.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-success-shade,%20var(--ion-color-success-shade,%20%230ec254))'/></svg>\")}.item-md-warning{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#000));background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.item-md-warning .item-inner{border-bottom-color:var(--ion-color-md-warning-shade,var(--ion-color-warning-shade,#e0b500))}.item-md-warning p{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#000))}.item-md-warning.activated{background-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.item-md-warning.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-warning-shade,%20var(--ion-color-warning-shade,%20%23e0b500))'/></svg>\")}.item-md-danger{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.item-md-danger .item-inner{border-bottom-color:var(--ion-color-md-danger-shade,var(--ion-color-danger-shade,#d33939))}.item-md-danger p{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.item-md-danger.activated{background-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454))}.item-md-danger.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-danger-shade,%20var(--ion-color-danger-shade,%20%23d33939))'/></svg>\")}.item-md-light{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.item-md-light .item-inner{border-bottom-color:var(--ion-color-md-light-shade,var(--ion-color-light-shade,#d7d8da))}.item-md-light p{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.item-md-light.activated{background-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9))}.item-md-light.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-light-shade,%20var(--ion-color-light-shade,%20%23d7d8da))'/></svg>\")}.item-md-medium{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#000));background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.item-md-medium .item-inner{border-bottom-color:var(--ion-color-md-medium-shade,var(--ion-color-medium-shade,#86888f))}.item-md-medium p{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#000))}.item-md-medium.activated{background-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.item-md-medium.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-medium-shade,%20var(--ion-color-medium-shade,%20%2386888f))'/></svg>\")}.item-md-dark{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}.item-md-dark .item-inner{border-bottom-color:var(--ion-color-md-dark-shade,var(--ion-color-dark-shade,#1e2023))}.item-md-dark p{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}.item-md-dark.activated{background-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e))}.item-md-dark.item-detail-push .item-inner{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-dark-shade,%20var(--ion-color-dark-shade,%20%231e2023))'/></svg>\")}"}static get styleMode(){return"md"}}class y{constructor(){this.fixed=!1,this.floating=!1,this.stacked=!1}getText(){return this.el.textContent||""}componentDidLoad(){this.emitStyle()}emitStyle(){clearTimeout(this.styleTmr);const t={"label-fixed":this.fixed,"label-floating":this.floating,"label-stacked":this.stacked};this.styleTmr=setTimeout(()=>{this.ionStyle.emit(t)})}static get is(){return"ion-label"}static get host(){return{theme:"label"}}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0},fixed:{type:Boolean,attr:"fixed"},floating:{type:Boolean,attr:"floating"},getText:{method:!0},mode:{type:"Any",attr:"mode"},stacked:{type:Boolean,attr:"stacked"}}}static get events(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-label{margin:0;display:block;overflow:hidden;flex:1;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-input ion-label{flex:initial;max-width:200px;pointer-events:none}[text-wrap] ion-label{white-space:normal}ion-label[fixed]{flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.item-label-floating ion-label,.item-label-stacked ion-label{align-self:stretch;width:auto;max-width:100%}ion-label[floating],ion-label[stacked]{margin-bottom:0}.item-label-floating .input-wrapper,.item-label-stacked .input-wrapper{flex:1;flex-direction:column}.item-label-floating ion-select,.item-label-stacked ion-select{align-self:stretch;max-width:100%}.label-md{margin:13px 8px 13px 0;font-family:Roboto,\"Helvetica Neue\",sans-serif}[text-wrap] .label-md{font-size:14px;line-height:1.5}.item-datetime .label-md,.item-input .label-md,.item-select .label-md{color:var(--ion-text-md-color-step-600,var(--ion-text-color-step-600,#999))}.label-md[stacked]{font-size:12px}.label-md[floating]{transform:translate3d(0,27px,0);transform-origin:left top;transition:transform 150ms ease-in-out}.label-md[floating],.label-md[stacked]{margin-left:0;margin-bottom:0}.item-input-has-focus .label-md[floating],.item-input-has-focus .label-md[stacked]{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-input-has-focus .label-md[floating],.item-input-has-value .label-md[floating]{transform:translate3d(0,0,0) scale(.8)}.item-datetime .label-md-primary,.item-input .label-md-primary,.item-select .label-md-primary,.label-md-primary{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-datetime .label-md-secondary,.item-input .label-md-secondary,.item-select .label-md-secondary,.label-md-secondary{color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.item-datetime .label-md-tertiary,.item-input .label-md-tertiary,.item-select .label-md-tertiary,.label-md-tertiary{color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.item-datetime .label-md-success,.item-input .label-md-success,.item-select .label-md-success,.label-md-success{color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.item-datetime .label-md-warning,.item-input .label-md-warning,.item-select .label-md-warning,.label-md-warning{color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.item-datetime .label-md-danger,.item-input .label-md-danger,.item-select .label-md-danger,.label-md-danger{color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.item-datetime .label-md-light,.item-input .label-md-light,.item-select .label-md-light,.label-md-light{color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.item-datetime .label-md-medium,.item-input .label-md-medium,.item-select .label-md-medium,.label-md-medium{color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.item-datetime .label-md-dark,.item-input .label-md-dark,.item-select .label-md-dark,.label-md-dark{color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"}static get styleMode(){return"md"}}class f{constructor(){this.toasts=new Map}toastWillPresent(t){this.toasts.set(t.target.overlayId,t.target)}toastWillDismiss(t){this.toasts.delete(t.target.overlayId)}escapeKeyUp(){r(this.toasts)}create(t){return o(document.createElement("ion-toast"),t)}dismiss(t,e,i=-1){return n(t,e,this.toasts,i)}getTop(){return a(this.toasts)}static get is(){return"ion-toast-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}}}const v=window.TapticEngine;function k(){v&&v.selection()}class S{constructor(){this.activated=!1,this.checked=!1,this.disabled=!1,this.value="on",this.gestureConfig={onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"toggle",passive:!1,gesturePriority:30,type:"pan",direction:"x",threshold:0,attachTo:"parent"}}componentWillLoad(){this.ionStyle=l(this.ionStyle),this.inputId=`ion-tg-${w++}`,void 0===this.name&&(this.name=this.inputId),this.emitStyle()}componentDidLoad(){this.didLoad=!0;const t=this.nativeInput.closest("ion-item");if(t){const e=t.querySelector("ion-label");e&&(e.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",e.id))}}checkedChanged(t){this.didLoad&&this.ionChange.emit({checked:t,value:this.value}),this.emitStyle()}emitStyle(){this.ionStyle.emit({"toggle-disabled":this.disabled,"toggle-checked":this.checked,"toggle-activated":this.activated})}onDragStart(t){return this.pivotX=t.currentX,this.activated=!0,t.event.preventDefault(),!0}onDragMove(t){const e=t.currentX;C(this.checked,e-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=e,k())}onDragEnd(t){const e=t.currentX-this.pivotX;C(this.checked,e,4)&&(this.checked=!this.checked,k()),this.activated=!1,this.nativeInput.focus()}onChange(){this.checked=!this.checked}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}hostData(){return{class:{"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus}}}render(){return[t("ion-gesture",Object.assign({},this.gestureConfig,{disabled:this.disabled,tabIndex:-1}),t("div",{class:"toggle-icon"},t("div",{class:"toggle-inner"})),t("div",{class:"toggle-cover"})),t("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:t=>this.nativeInput=t})]}static get is(){return"ion-toggle"}static get host(){return{theme:"toggle"}}static get properties(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["emitStyle"]},keyFocus:{state:!0},mode:{type:"Any",attr:"mode"},name:{type:String,attr:"name",mutable:!0},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-toggle{display:inline-block;contain:content;touch-action:none;user-select:none}ion-toggle ion-gesture{display:block;width:100%;height:100%;visibility:inherit}.toggle-cover{left:0;position:absolute;top:0;width:100%;height:100%;border:0;outline:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;background:0 0;cursor:pointer}ion-toggle input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer;border:0;pointer-events:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}ion-toggle :focus{outline:0}.toggle-key input{border:2px solid #5e9ed6}.toggle-md{padding:12px;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}.toggle-md .toggle-icon{border-radius:14px;position:relative;display:block;width:100%;height:100%;background-color:var(--ion-item-md-border-color,var(--ion-item-border-color,#dedede));transition:background-color .3s;pointer-events:none}.toggle-md .toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;background-color:var(--ion-background-md-color,var(--ion-background-color,#fff));box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);transition-duration:.3s;transition-property:transform,background-color;will-change:transform,background-color;contain:strict}.toggle-md.toggle-checked .toggle-icon{background-color:rgba(var(--ion-color-md-primary-rgb,var(--ion-color-primary-rgb,56,128,255)),var(--ion-alpha-md-medium,var(--ion-alpha-medium,.5)))}.toggle-md.toggle-checked .toggle-inner{transform:translate3d(16px,0,0);background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.item-md.item-toggle-disabled ion-label,.toggle-md.toggle-disabled{opacity:.3;pointer-events:none}.toggle-md.toggle-disabled ion-radio{opacity:.3}.item-md .toggle-md[slot]{margin:0;padding:12px 8px 12px 16px;cursor:pointer}.item-md .toggle-md[slot=start]{padding:12px 18px 12px 2px}.item-md.item-toggle ion-label{margin-left:0}.toggle-md-primary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-primary-tint,var(--ion-color-primary-tint,#4c8dff))}.toggle-md-primary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.toggle-md-secondary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-secondary-tint,var(--ion-color-secondary-tint,#24d6ea))}.toggle-md-secondary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.toggle-md-tertiary.toggle-checked .toggle-icon{background-color:var(--ion-color-md-tertiary-tint,var(--ion-color-tertiary-tint,#7e57ff))}.toggle-md-tertiary.toggle-checked .toggle-inner{background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.toggle-md-success.toggle-checked .toggle-icon{background-color:var(--ion-color-md-success-tint,var(--ion-color-success-tint,#28e070))}.toggle-md-success.toggle-checked .toggle-inner{background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.toggle-md-warning.toggle-checked .toggle-icon{background-color:var(--ion-color-md-warning-tint,var(--ion-color-warning-tint,#ffd31a))}.toggle-md-warning.toggle-checked .toggle-inner{background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.toggle-md-danger.toggle-checked .toggle-icon{background-color:var(--ion-color-md-danger-tint,var(--ion-color-danger-tint,#f25454))}.toggle-md-danger.toggle-checked .toggle-inner{background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.toggle-md-light.toggle-checked .toggle-icon{background-color:var(--ion-color-md-light-tint,var(--ion-color-light-tint,#f5f6f9))}.toggle-md-light.toggle-checked .toggle-inner{background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.toggle-md-medium.toggle-checked .toggle-icon{background-color:var(--ion-color-md-medium-tint,var(--ion-color-medium-tint,#a2a4ab))}.toggle-md-medium.toggle-checked .toggle-inner{background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.toggle-md-dark.toggle-checked .toggle-icon{background-color:var(--ion-color-md-dark-tint,var(--ion-color-dark-tint,#383a3e))}.toggle-md-dark.toggle-checked .toggle-inner{background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"}static get styleMode(){return"md"}}function C(t,e,i){const s="rtl"===document.dir;return t?!s&&i>e||s&&-i<e:!s&&-i<e||s&&i>e}let w=0;export{c as AppProfile,h as IonBackButton,d as IonButtons,u as IonIcon,b as IonItem,y as IonLabel,f as IonToastController,S as IonToggle};