(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(module,exports,__webpack_require__){var api=__webpack_require__(203),content=__webpack_require__(642);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},326:function(module,exports,__webpack_require__){__webpack_require__(327),__webpack_require__(482),__webpack_require__(483),__webpack_require__(656),module.exports=__webpack_require__(639)},393:function(module,exports){},44:function(module,exports,__webpack_require__){var api=__webpack_require__(203),content=__webpack_require__(649);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},483:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(257)},639:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(257).configure)([__webpack_require__(640)],module,!1)}).call(this,__webpack_require__(199)(module))},640:function(module,exports,__webpack_require__){var map={"./Button/Button.stories.tsx":641,"./Dialog/Dialog.stories.tsx":657,"./index.stories.tsx":650};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=640},641:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled}));__webpack_require__(5);var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9);__webpack_exports__.default={title:"Button"};var Default=function Default(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{children:"click me"})};Default.displayName="Default";var Disabled=function Disabled(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{disabled:!0,children:"disabled"})};Disabled.displayName="Disabled"},642:function(module,exports,__webpack_require__){(exports=__webpack_require__(204)(!1)).push([module.i,"* {\n  font-family: 'Countach Italic';\n}\n.buttonContainer_MgZicl {\n  width: max-content;\n  position: relative;\n  transition: opacity ease 0.3s;\n  clip-path: polygon(6px 0, calc(100% - 6px) 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 calc(100% - 6px), 0 6px);\n  background-color: #1583d8;\n  background-repeat: no-repeat;\n  padding: 2px;\n  filter: drop-shadow(-5px 0px 3px #000);\n}\n.buttonContainer_MgZicl:hover {\n  cursor: pointer;\n}\n.clickable_1GWN-a.buttonContainer_MgZicl:active {\n  opacity: 0.8;\n}\n.buttonContent_1gHwYY {\n  position: relative;\n  color: #fff;\n  text-shadow: 2px 0rem 2px #000, -2px 0rem 2px #000, 0rem 2px 2px #000, 0rem -2px 2px #000;\n  border: 2px solid #000;\n  clip-path: polygon(6px 0, calc(100% - 6px) 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 calc(100% - 6px), 0 6px);\n  background: linear-gradient(-45deg, #000 4px, #004d89 0) bottom right, linear-gradient(45deg, #000 0, #004d89 0) bottom left, linear-gradient(135deg, #000 4px, #004d89 0) top left, linear-gradient(-135deg, #000 0, #004d89 0) top right;\n  background-size: 51% 51%;\n  background-repeat: no-repeat;\n  padding: 5px 60px;\n  box-sizing: border-box;\n}\n.disabled_PZ2yAN {\n  opacity: 0.5;\n}\n.buttonContainer_MgZicl.disabled_PZ2yAN:hover {\n  cursor: not-allowed;\n}\n",""]),exports.locals={buttonContainer:"buttonContainer_MgZicl",clickable:"clickable_1GWN-a",buttonContent:"buttonContent_1gHwYY",disabled:"disabled_PZ2yAN"},module.exports=exports},649:function(module,exports,__webpack_require__){(exports=__webpack_require__(204)(!1)).push([module.i,"* {\n  font-family: 'Countach Italic';\n}\n.dialogContainer_1kKv_o {\n  width: 100%;\n  box-sizing: border-box;\n  clip-path: polygon(0px 0px, 44% 0px, 44.5% 5px, 54% 5px, 54.5% 0px, 100% 0px, 100% 100%, 0px 100%);\n  background-color: #1583d8;\n  background-repeat: no-repeat;\n  text-align: center;\n  padding: 2px 2px 15px;\n  position: fixed;\n  height: max-content;\n  top: 40%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.dialogMask_3U5xma {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: -1;\n}\n.dialogBackground_1k8NnD {\n  color: #fff;\n  clip-path: polygon(0px 0px, 44% 0px, 44.5% 5px, 54% 5px, 54.5% 0px, 100% 0px, 100% 100%, 0px 100%);\n  background: #000;\n  position: absolute;\n  top: 2px;\n  bottom: 2px;\n  left: 2px;\n  right: 2px;\n  z-index: -1;\n}\n.dialogBackground_1k8NnD:before {\n  width: calc(100% - 4px);\n  height: calc(100% - 4px);\n  clip-path: polygon(0px 0px, 44% 0px, 44.5% 5px, 54% 5px, 54.5% 0px, 100% 0px, 100% 100%, 0px 100%);\n  content: \"\";\n  display: block;\n  position: relative;\n  top: 2px;\n  left: 2px;\n  background-color: #091924;\n  opacity: 0.8;\n}\n.dialogHeader_li6ffU {\n  color: #9fd8f6;\n  font-size: 18px;\n}\n.dialogHeaderBg_2Jwx6Q {\n  background: #1d557c;\n  height: 20px;\n  box-sizing: border-box;\n  margin: 2px;\n  clip-path: polygon(0px 0px, 44% 0px, 44.5% 5px, 54% 5px, 54.5% 0px, 100% 0px, 100% 100%, 0px 100%);\n}\n.dialogHeaderLine_3kAp2K {\n  background: linear-gradient(to right, rgba(0, 0, 0, 0), #004d89, rgba(0, 0, 0, 0));\n  width: 30%;\n  height: 2px;\n  border-radius: 50%;\n  margin: 10px auto;\n}\n.dialogContent_1gDR6E {\n  color: #fff;\n}\n.dialogFooter_2UHBG5 {\n  display: flex;\n  justify-content: center;\n  margin: 20px auto 0;\n}\n.dialogFooterBtn_2N-NmJ {\n  margin: 0 10px;\n}\n",""]),exports.locals={dialogContainer:"dialogContainer_1kKv_o",dialogMask:"dialogMask_3U5xma",dialogBackground:"dialogBackground_1k8NnD",dialogHeader:"dialogHeader_li6ffU",dialogHeaderBg:"dialogHeaderBg_2Jwx6Q",dialogHeaderLine:"dialogHeaderLine_3kAp2K",dialogContent:"dialogContent_1gDR6E",dialogFooter:"dialogFooter_2UHBG5",dialogFooterBtn:"dialogFooterBtn_2N-NmJ"},module.exports=exports},650:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(651)},651:function(module,exports,__webpack_require__){var api=__webpack_require__(203),content=__webpack_require__(652);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},652:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(204),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(653),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(654),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__(655);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);exports.push([module.i,"@font-face {\n  font-family: 'Countach Italic';\n  src: url("+___CSS_LOADER_URL_REPLACEMENT_0___+");\n}\n@font-face {\n  font-family: 'Countach BlodItalic';\n  src: url("+___CSS_LOADER_URL_REPLACEMENT_1___+");\n}\n",""]),module.exports=exports},654:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Countach-Italic.7a601c02.otf"},655:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Countach-BoldItalic.0f5e1d32.otf"},656:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(43),__webpack_require__(22),__webpack_require__(75),__webpack_require__(634),__webpack_require__(635),__webpack_require__(54),__webpack_require__(636),__webpack_require__(637),__webpack_require__(638);var client_api=__webpack_require__(660),esm=__webpack_require__(1);var parameters={themes:{Decorator:function Decorator(props){var children=props.children;function setStyles(_ref){var theme=_ref.theme,link=(_ref.themeName,function getOrCreate(id){var elementOnDom=document.getElementById(id);if(elementOnDom)return elementOnDom;var element=document.createElement("link");return element.setAttribute("id",id),element.setAttribute("rel","stylesheet"),element}("custom-stylesheet"));theme?(console.log(theme),link.href=theme.css,children.appendChild(link)):link.parentNode&&link.parentNode.removeChild(link)}return setStyles(props),[children,setStyles]}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},657:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Dialog_stories_Default}));var slicedToArray=__webpack_require__(324),slicedToArray_default=__webpack_require__.n(slicedToArray),react=__webpack_require__(5),Button=__webpack_require__(67),index_module=__webpack_require__(44),index_module_default=__webpack_require__.n(index_module),jsx_runtime=__webpack_require__(9),Dialog_Dialog=function Dialog(props){return props.visible&&Object(jsx_runtime.jsxs)("div",{className:"dialogWarp",children:[Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogMask}),Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.dialogContainer,children:[Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogBackground}),Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.dialogHeader,children:[Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogHeaderBg}),props.title,Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogHeaderLine})]}),Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogContent,children:props.children}),Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.dialogFooter,children:[Object(jsx_runtime.jsx)(Button.a,{containerClass:index_module_default.a.dialogFooterBtn,onClick:props.onConfirm,children:props.confirmText}),Object(jsx_runtime.jsx)(Button.a,{containerClass:index_module_default.a.dialogFooterBtn,onClick:props.onCancel,children:props.cancelText})]})]})]})};Dialog_Dialog.defaultProps={title:"",cancelText:"Cancel",confirmText:"Confirm",onCancel:function onCancel(){},onConfirm:function onConfirm(){}};try{Dialog_Dialog.displayName="Dialog",Dialog_Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},onCancel:{defaultValue:{value:"() => {}"},description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onConfirm:{defaultValue:{value:"() => {}"},description:"",name:"onConfirm",required:!1,type:{name:"() => void"}},cancelText:{defaultValue:{value:"Cancel"},description:"",name:"cancelText",required:!1,type:{name:"string"}},confirmText:{defaultValue:{value:"Confirm"},description:"",name:"confirmText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Dialog/index.tsx#Dialog"]={docgenInfo:Dialog_Dialog.__docgenInfo,name:"Dialog",path:"src/Dialog/index.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={component:Dialog_Dialog,title:"Dialog"};var Dialog_stories_Default=function Default(){var _useState=Object(react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),visible=_useState2[0],setVisible=_useState2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Button.a,{onClick:function openDialog(){return setVisible(!0)},children:"open dialog"}),Object(jsx_runtime.jsx)(Dialog_Dialog,{visible:visible,onCancel:function closeDialog(){return setVisible(!1)},title:"Quit Game?",children:Object(jsx_runtime.jsx)("p",{style:{fontFamily:"Posterama Text Regular",marginTop:"40px"},children:"Aue you sure you want to quit the game?"})})]})}},67:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button_Button}));__webpack_require__(5);var className=function className(name,when){var name2=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return when?name:name2},index_module=__webpack_require__(110),index_module_default=__webpack_require__.n(index_module),jsx_runtime=__webpack_require__(9),Button_Button=function Button(props){return Object(jsx_runtime.jsx)("div",{className:props.containerClass+" "+index_module_default.a.buttonContainer+" "+className(index_module_default.a.disabled,props.disabled,index_module_default.a.clickable),role:"button",tabIndex:0,onKeyDown:props.onKeyDown,onClick:props.disabled?function(){}:props.onClick,children:Object(jsx_runtime.jsx)("div",{className:index_module_default.a.buttonContent,children:props.children})})};Button_Button.displayName="Button",Button_Button.defaultProps={onClick:function onClick(){},onKeyDown:function onKeyDown(){},disabled:!1,containerClass:""};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onKeyDown:{defaultValue:{value:"() => {}"},description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},containerClass:{defaultValue:{value:""},description:"",name:"containerClass",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}},[[326,1,2]]]);