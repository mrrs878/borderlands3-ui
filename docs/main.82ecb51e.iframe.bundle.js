(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(module,exports,__webpack_require__){var api=__webpack_require__(113),content=__webpack_require__(651);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},117:function(module,exports,__webpack_require__){var api=__webpack_require__(113),content=__webpack_require__(656);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},329:function(module,exports,__webpack_require__){__webpack_require__(330),__webpack_require__(485),__webpack_require__(486),__webpack_require__(663),module.exports=__webpack_require__(642)},34:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button_Button}));__webpack_require__(3);var className=function className(name,when){var name2=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return when?name:name2},index_module=__webpack_require__(116),index_module_default=__webpack_require__.n(index_module),jsx_runtime=__webpack_require__(0),Button_Button=function Button(props){return Object(jsx_runtime.jsx)("div",{className:props.containerClass+" "+className(index_module_default.a.buttonContainer,"default"===props.type)+" "+className(index_module_default.a.disabled,props.disabled,index_module_default.a.clickable),role:"button",tabIndex:0,onKeyDown:props.onKeyDown,onClick:props.disabled?function(){}:props.onClick,children:Object(jsx_runtime.jsx)("div",{className:index_module_default.a.buttonContent,children:props.children})})};Button_Button.displayName="Button",Button_Button.defaultProps={onClick:function onClick(){},onKeyDown:function onKeyDown(){},disabled:!1,containerClass:"",type:"default"};try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"confirm"'},{value:'"plain"'}]}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},onKeyDown:{defaultValue:{value:"() => {}"},description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},containerClass:{defaultValue:{value:""},description:"",name:"containerClass",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},396:function(module,exports){},45:function(module,exports,__webpack_require__){var api=__webpack_require__(113),content=__webpack_require__(653);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},486:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(261)},59:function(module,exports,__webpack_require__){var api=__webpack_require__(113),content=__webpack_require__(649);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},642:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(261).configure)([__webpack_require__(643)],module,!1)}).call(this,__webpack_require__(206)(module))},643:function(module,exports,__webpack_require__){var map={"./Blood/Blood.stories.tsx":664,"./Button/Button.stories.tsx":652,"./Dialog/Dialog.stories.tsx":665,"./Modal/Modal.stories.tsx":666,"./index.stories.tsx":657};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=643},649:function(module,exports,__webpack_require__){(exports=__webpack_require__(114)(!1)).push([module.i,"* {\n  font-family: 'Countach Italic';\n}\n.container_1Kbr1N {\n  transform: rotate3d(1, 1, 1, -5deg);\n  color: #c3f3f8;\n  width: 180px;\n  position: relative;\n}\n.svgGradient_sSDDnU {\n  transform: rotate3d(1, 1, 1, -5deg);\n  filter: blur(5px);\n}\n.bloodWrapper_3S6JBd,\n.shilterWrapper_AKQqxG {\n  filter: drop-shadow(-4px 4px 4px #135368);\n  height: 20px;\n  width: 140px;\n}\n.bloodWrapper_3S6JBd {\n  width: 180px;\n}\n.shilterContainer_3l1rO- {\n  width: 100%;\n  height: 100%;\n  content: '';\n  background: linear-gradient(to right, #0b808b, #07c6d2);\n  background-repeat: no-repeat;\n  position: relative;\n  top: 2px;\n  left: 2px;\n}\n.mask_38IMV- {\n  clip-path: polygon(0 0, 80px 0, 82px 5px, 135px 5px, 140px 15px, 5px 15px);\n  color: #fff;\n  background: rgba(0, 0, 0, 0);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  height: 20px;\n  width: 138px;\n}\n.shilter_1kg8Gi {\n  position: absolute;\n  top: -15px;\n  display: flex;\n  align-items: center;\n}\n.shilterIcon_37vvLy {\n  margin-right: 3px;\n}\n.bloodContainer_bopsVT {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, #810910, #c40f19);\n  background-repeat: no-repeat;\n}\n.blood_3D_cMJ {\n  position: absolute;\n  bottom: -10px;\n  display: flex;\n  align-items: center;\n  left: -15px;\n  font-size: 18px;\n}\n.profession_8Qirto {\n  position: absolute;\n  right: -10px;\n  bottom: -12px;\n  font-size: 18px;\n}\n",""]),exports.locals={container:"container_1Kbr1N",svgGradient:"svgGradient_sSDDnU",bloodWrapper:"bloodWrapper_3S6JBd",shilterWrapper:"shilterWrapper_AKQqxG",shilterContainer:"shilterContainer_3l1rO-",mask:"mask_38IMV-",shilter:"shilter_1kg8Gi",shilterIcon:"shilterIcon_37vvLy",bloodContainer:"bloodContainer_bopsVT",blood:"blood_3D_cMJ",profession:"profession_8Qirto"},module.exports=exports},651:function(module,exports,__webpack_require__){(exports=__webpack_require__(114)(!1)).push([module.i,"* {\n  font-family: 'Countach Italic';\n}\n.buttonContainer_MgZicl {\n  width: max-content;\n  position: relative;\n  transition: opacity ease 0.3s;\n  clip-path: polygon(6px 0, calc(100% - 6px) 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 calc(100% - 6px), 0 6px);\n  background-color: #1583d8;\n  background-repeat: no-repeat;\n  padding: 2px;\n  filter: drop-shadow(-5px 0px 3px #000);\n  user-select: none;\n}\n.buttonContainer_MgZicl:hover {\n  cursor: pointer;\n}\n.clickable_1GWN-a.buttonContainer_MgZicl:active {\n  opacity: 0.8;\n}\n.buttonContent_1gHwYY {\n  position: relative;\n  color: #fff;\n  text-shadow: 2px 0rem 2px #000, -2px 0rem 2px #000, 0rem 2px 2px #000, 0rem -2px 2px #000;\n  border: 2px solid #000;\n  clip-path: polygon(6px 0, calc(100% - 6px) 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 calc(100% - 6px), 0 6px);\n  background: linear-gradient(-45deg, #000 4px, #004d89 0) bottom right, linear-gradient(45deg, #000 0, #004d89 0) bottom left, linear-gradient(135deg, #000 4px, #004d89 0) top left, linear-gradient(-135deg, #000 0, #004d89 0) top right;\n  background-size: 51% 51%;\n  background-repeat: no-repeat;\n  padding: 5px 60px;\n  box-sizing: border-box;\n}\n.disabled_PZ2yAN {\n  opacity: 0.5;\n}\n.buttonContainer_MgZicl.disabled_PZ2yAN:hover {\n  cursor: not-allowed;\n}\n",""]),exports.locals={buttonContainer:"buttonContainer_MgZicl",clickable:"clickable_1GWN-a",buttonContent:"buttonContent_1gHwYY",disabled:"disabled_PZ2yAN"},module.exports=exports},652:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled}));__webpack_require__(3);var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(34),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0);__webpack_exports__.default={title:"Button"};var Default=function Default(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{children:"click me"})};Default.displayName="Default";var Disabled=function Disabled(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{disabled:!0,children:"disabled"})};Disabled.displayName="Disabled"},653:function(module,exports,__webpack_require__){(exports=__webpack_require__(114)(!1)).push([module.i,"* {\n  font-family: 'Countach Italic';\n}\n.dialogContainer_1kKv_o {\n  width: 100%;\n  box-sizing: border-box;\n  clip-path: polygon(0px 0px, 44% 0px, 44.5% 5px, 54% 5px, 54.5% 0px, 100% 0px, 100% 100%, 0px 100%);\n  background-color: #1583d8;\n  background-repeat: no-repeat;\n  text-align: center;\n  padding: 2px 2px 15px;\n  position: fixed;\n  height: max-content;\n  top: 40%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.dialogMask_3U5xma {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.dialogBackground_1k8NnD {\n  color: #fff;\n  clip-path: polygon(0px 0px, 44% 0px, 44.5% 5px, 54% 5px, 54.5% 0px, 100% 0px, 100% 100%, 0px 100%);\n  background: #000;\n  position: absolute;\n  top: 2px;\n  bottom: 2px;\n  left: 2px;\n  right: 2px;\n  z-index: -1;\n}\n.dialogBackground_1k8NnD:before {\n  width: calc(100% - 4px);\n  height: calc(100% - 4px);\n  clip-path: polygon(0px 0px, 44% 0px, 44.5% 5px, 54% 5px, 54.5% 0px, 100% 0px, 100% 100%, 0px 100%);\n  content: \"\";\n  display: block;\n  position: relative;\n  top: 2px;\n  left: 2px;\n  background-color: #091924;\n  opacity: 0.8;\n}\n.dialogHeader_li6ffU {\n  color: #9fd8f6;\n  font-size: 18px;\n}\n.dialogHeaderBg_2Jwx6Q {\n  background: #1d557c;\n  height: 20px;\n  box-sizing: border-box;\n  margin: 2px;\n  clip-path: polygon(0px 0px, 44% 0px, 44.5% 5px, 54% 5px, 54.5% 0px, 100% 0px, 100% 100%, 0px 100%);\n}\n.dialogHeaderLine_3kAp2K {\n  background: linear-gradient(to right, rgba(0, 0, 0, 0), #004d89, rgba(0, 0, 0, 0));\n  width: 30%;\n  height: 2px;\n  border-radius: 50%;\n  margin: 10px auto;\n}\n.dialogContent_1gDR6E {\n  color: #fff;\n}\n.dialogFooter_2UHBG5 {\n  display: flex;\n  justify-content: center;\n  margin: 20px auto 0;\n}\n.dialogFooterBtn_2N-NmJ {\n  margin: 0 10px;\n}\n",""]),exports.locals={dialogContainer:"dialogContainer_1kKv_o",dialogMask:"dialogMask_3U5xma",dialogBackground:"dialogBackground_1k8NnD",dialogHeader:"dialogHeader_li6ffU",dialogHeaderBg:"dialogHeaderBg_2Jwx6Q",dialogHeaderLine:"dialogHeaderLine_3kAp2K",dialogContent:"dialogContent_1gDR6E",dialogFooter:"dialogFooter_2UHBG5",dialogFooterBtn:"dialogFooterBtn_2N-NmJ"},module.exports=exports},656:function(module,exports,__webpack_require__){(exports=__webpack_require__(114)(!1)).push([module.i,"* {\n  font-family: 'Countach Italic';\n}\n.wapper_3WdG82 {\n  position: fixed;\n  top: 40%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n}\n.container_1zvz7q {\n  width: 400px;\n  height: 300px;\n  position: fixed;\n  top: 40%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  margin: 0 auto;\n}\n.background_3jvuuK {\n  position: absolute;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n}\n.mask_3kBB9j {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.backgroundSvg_3B-_h7 {\n  transition: border linear 0.2s, box-shadow linear 0.5s;\n  border-color: #1583d8;\n  filter: drop-shadow(0 0 10px #004d89);\n  background: rgba(0, 0, 0, 0);\n  height: 100%;\n  width: 100%;\n}\n",""]),exports.locals={wapper:"wapper_3WdG82",container:"container_1zvz7q",background:"background_3jvuuK",mask:"mask_3kBB9j",backgroundSvg:"backgroundSvg_3B-_h7"},module.exports=exports},657:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(658)},658:function(module,exports,__webpack_require__){var api=__webpack_require__(113),content=__webpack_require__(659);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},659:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(114),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(660),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(661),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__(662);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);exports.push([module.i,"@font-face {\n  font-family: 'Countach Italic';\n  src: url("+___CSS_LOADER_URL_REPLACEMENT_0___+");\n}\n@font-face {\n  font-family: 'Countach BlodItalic';\n  src: url("+___CSS_LOADER_URL_REPLACEMENT_1___+");\n}\n",""]),module.exports=exports},661:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Countach-Italic.7a601c02.otf"},662:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/Countach-BoldItalic.0f5e1d32.otf"},663:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(44),__webpack_require__(22),__webpack_require__(76),__webpack_require__(637),__webpack_require__(638),__webpack_require__(55),__webpack_require__(639),__webpack_require__(640),__webpack_require__(641);var client_api=__webpack_require__(669),esm=__webpack_require__(2);var parameters={themes:{Decorator:function Decorator(props){var children=props.children;function setStyles(_ref){var theme=_ref.theme,link=(_ref.themeName,function getOrCreate(id){var elementOnDom=document.getElementById(id);if(elementOnDom)return elementOnDom;var element=document.createElement("link");return element.setAttribute("id",id),element.setAttribute("rel","stylesheet"),element}("custom-stylesheet"));theme?(console.log(theme),link.href=theme.css,children.appendChild(link)):link.parentNode&&link.parentNode.removeChild(link)}return setStyles(props),[children,setStyles]}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},664:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Blood_stories_Default})),__webpack_require__.d(__webpack_exports__,"Anshin",(function(){return Blood_stories_Anshin})),__webpack_require__.d(__webpack_exports__,"Deathless",(function(){return Blood_stories_Deathless})),__webpack_require__.d(__webpack_exports__,"Dynamic",(function(){return Blood_stories_Dynamic}));var slicedToArray=__webpack_require__(89),slicedToArray_default=__webpack_require__.n(slicedToArray),react=__webpack_require__(3),svg_esm=__webpack_require__(90),index_module=__webpack_require__(59),index_module_default=__webpack_require__.n(index_module),jsx_runtime=__webpack_require__(0),Blood_ShilterIcon=function ShilterIcon(){return Object(jsx_runtime.jsx)("svg",{className:index_module_default.a.shilterIcon,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4066",width:"18",height:"18",children:Object(jsx_runtime.jsx)("path",{d:"M511.340544 986.185728c-1.88416 0-3.731456-0.21504-5.543936-0.651264-51.41504-12.976128-234.653696-136.50944-339.146752-399.872-48.187392-121.585664-60.489728-257.55648-62.373888-350.21824-0.503808-25.546752 14.67392-49.850368 37.685248-60.526592 109.78304-50.927616 311.156736-137.080832 369.696768-137.302016 58.710016 0.169984 259.19488 86.071296 368.39424 136.849408 20.41856 9.445376 37.900288 37.599232 37.443584 60.237824-1.91488 93.298688-14.352384 229.943296-62.521344 351.008768-98.308096 247.158784-279.072768 384.239616-337.885184 399.7696-1.86368 0.487424-3.833856 0.704512-5.748736 0.704512z","p-id":"4067",fill:"#7bcec9","data-spm-anchor-id":"a313x.7781069.0.i5",className:"selected"})})};Blood_ShilterIcon.displayName="ShilterIcon";var Blood_BloodIcon=function BloodIcon(){return Object(jsx_runtime.jsxs)("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8974",width:"24",height:"24",children:[Object(jsx_runtime.jsx)("path",{d:"M578.6 599.5c-2.7-1.7-5-4-6.9-6.9l6.9 6.9z",fill:"#ef8fb3","p-id":"8975"}),Object(jsx_runtime.jsx)("path",{d:"M670.8 378V173.5h-268V378H189v268h213.8v197.5h268V646H859V378H670.8zM819 606H630.8v197.5h-188V606H229V418h213.8V213.5h188V418H819v188z",fill:"#ef8fb3","p-id":"8976"})]})};Blood_BloodIcon.displayName="BloodIcon";var FULL_PATH_SHILTER=[[0,0],[80,0],[82,5],[135,5],[140,15],[5,15]],FULL_PATH_BLOOD=[[5,0],[175,0],[180,10],[80,10],[72,15],[10,15]],Blood_drawPolygon=function drawPolygon(config){if(config.container){var container=config.container,fullPath=config.fullPath,borderColor=config.borderColor,fillColor=config.fillColor,percent=config.percent;if(container.findOne("polygon")||container.polygon(fullPath).stroke(borderColor),!(percent<0)){var gradient=container.findOne("linearGradient");gradient instanceof svg_esm.a?gradient.to(percent/100,1):(gradient=container.gradient("linear",(function(add){add.stop(0,fillColor[0],1),add.stop(40,fillColor[1],1),add.stop(40,fillColor[0],0),add.stop(100,fillColor[1],0),add.from(0,1),add.to(percent/100,1)}))).addClass(index_module_default.a.svgGradient),container.attr({fill:gradient})}}},Blood_Blood=function Blood(props){var shilterSVGRef=Object(react.useRef)(null),bloodSVGRef=Object(react.useRef)(null);return Object(react.useEffect)((function(){shilterSVGRef.current=Object(svg_esm.b)().addTo("#shilterWrapper").size(140,15),bloodSVGRef.current=Object(svg_esm.b)().addTo("#bloodWrapper").size(180,15)}),[]),Object(react.useEffect)((function(){var bloodPercent=props.blood/props.totalBlood*100,bloodBorderColor=bloodPercent<20?"rgba(255, 0, 0, 0.3)":"rgba(125, 125, 125, 0.2)";Blood_drawPolygon({container:bloodSVGRef.current,fullPath:FULL_PATH_BLOOD,borderColor:bloodBorderColor,percent:bloodPercent,fillColor:["#810910","#c40f19"]})}),[props.blood,props.totalBlood]),Object(react.useEffect)((function(){var shilterPercent=props.shilter/props.totalShilter*100,shilterBorderColor=shilterPercent<20?"rgba(255, 0, 0, 0.3)":"rgba(125, 125, 125, 0.2)";Blood_drawPolygon({container:shilterSVGRef.current,fullPath:FULL_PATH_SHILTER,borderColor:shilterBorderColor,percent:shilterPercent,fillColor:["#0b808b","#10dae9"]})}),[props.shilter,props.totalShilter]),Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.container,children:[Object(jsx_runtime.jsx)("div",{id:"shilterWrapper",className:index_module_default.a.shilterWrapper,children:Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.shilter,children:[Object(jsx_runtime.jsx)(Blood_ShilterIcon,{}),Object(jsx_runtime.jsx)("span",{children:props.shilter})]})}),Object(jsx_runtime.jsxs)("div",{id:"bloodWrapper",className:index_module_default.a.bloodWrapper,children:[Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.blood,children:[Object(jsx_runtime.jsx)(Blood_BloodIcon,{}),Object(jsx_runtime.jsx)("span",{children:props.blood})]}),Object(jsx_runtime.jsx)("div",{className:index_module_default.a.profession,children:props.profession})]})]})};Blood_Blood.displayName="Blood";try{Blood_Blood.displayName="Blood",Blood_Blood.__docgenInfo={description:"",displayName:"Blood",props:{blood:{defaultValue:null,description:"",name:"blood",required:!0,type:{name:"number"}},totalBlood:{defaultValue:null,description:"",name:"totalBlood",required:!0,type:{name:"number"}},shilter:{defaultValue:null,description:"",name:"shilter",required:!0,type:{name:"number"}},totalShilter:{defaultValue:null,description:"",name:"totalShilter",required:!0,type:{name:"number"}},profession:{defaultValue:null,description:"",name:"profession",required:!0,type:{name:"enum",value:[{value:'"Amara"'},{value:'"Zane"'},{value:'"Moze"'},{value:'"FL4K"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Blood/index.tsx#Blood"]={docgenInfo:Blood_Blood.__docgenInfo,name:"Blood",path:"src/Blood/index.tsx#Blood"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__(34),Blood_stories_Default=(__webpack_exports__.default={component:Blood_Blood,title:"Blood"},function Default(){return Object(jsx_runtime.jsx)(Blood_Blood,{blood:77,totalBlood:180,shilter:95,totalShilter:140,profession:"Amara"})});Blood_stories_Default.displayName="Default";var Blood_stories_Anshin=function Anshin(){return Object(jsx_runtime.jsx)(Blood_Blood,{blood:77,totalBlood:180,shilter:0,totalShilter:140,profession:"FL4K"})};Blood_stories_Anshin.displayName="Anshin";var Blood_stories_Deathless=function Deathless(){return Object(jsx_runtime.jsx)(Blood_Blood,{blood:1,totalBlood:180,shilter:140,totalShilter:140,profession:"Moze"})};Blood_stories_Deathless.displayName="Deathless";var Blood_stories_Dynamic=function Dynamic(){var _useState=Object(react.useState)(20),_useState2=slicedToArray_default()(_useState,2),blood=_useState2[0],setBlood=_useState2[1];return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)(Blood_Blood,{blood:blood,totalBlood:180,shilter:140,totalShilter:140,profession:"Zane"}),Object(jsx_runtime.jsxs)("div",{style:{marginTop:30,width:400,display:"flex",justifyContent:"space-around"},children:[Object(jsx_runtime.jsx)(Button.a,{onClick:function onClick(){return setBlood((function(pre){return pre+10>180?180:pre+10}))},children:"increase"}),Object(jsx_runtime.jsx)(Button.a,{onClick:function onClick(){return setBlood((function(pre){return pre-10<0?0:pre-10}))},children:"decrease"})]})]})};Blood_stories_Dynamic.displayName="Dynamic"},665:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Dialog_stories_Default}));var slicedToArray=__webpack_require__(89),slicedToArray_default=__webpack_require__.n(slicedToArray),react=__webpack_require__(3),Button=__webpack_require__(34),index_module=__webpack_require__(45),index_module_default=__webpack_require__.n(index_module),jsx_runtime=__webpack_require__(0),Dialog_Dialog=function Dialog(props){return props.visible&&Object(jsx_runtime.jsxs)("div",{className:"dialogWarp",children:[Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogMask}),Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.dialogContainer,children:[Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogBackground}),Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.dialogHeader,children:[Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogHeaderBg}),props.title,Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogHeaderLine})]}),Object(jsx_runtime.jsx)("div",{className:index_module_default.a.dialogContent,children:props.children}),Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.dialogFooter,children:[Object(jsx_runtime.jsx)(Button.a,{containerClass:index_module_default.a.dialogFooterBtn,onClick:props.onConfirm,children:props.confirmText}),Object(jsx_runtime.jsx)(Button.a,{containerClass:index_module_default.a.dialogFooterBtn,onClick:props.onCancel,children:props.cancelText})]})]})]})};Dialog_Dialog.defaultProps={title:"",cancelText:"Cancel",confirmText:"Confirm",onCancel:function onCancel(){},onConfirm:function onConfirm(){}};try{Dialog_Dialog.displayName="Dialog",Dialog_Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},onCancel:{defaultValue:{value:"() => {}"},description:"",name:"onCancel",required:!1,type:{name:"() => void"}},onConfirm:{defaultValue:{value:"() => {}"},description:"",name:"onConfirm",required:!1,type:{name:"() => void"}},cancelText:{defaultValue:{value:"Cancel"},description:"",name:"cancelText",required:!1,type:{name:"string"}},confirmText:{defaultValue:{value:"Confirm"},description:"",name:"confirmText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Dialog/index.tsx#Dialog"]={docgenInfo:Dialog_Dialog.__docgenInfo,name:"Dialog",path:"src/Dialog/index.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={component:Dialog_Dialog,title:"Dialog"};var Dialog_stories_Default=function Default(){var _useState=Object(react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),visible=_useState2[0],setVisible=_useState2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Button.a,{onClick:function openDialog(){return setVisible(!0)},children:"Quit Game"}),Object(jsx_runtime.jsx)(Dialog_Dialog,{visible:visible,onCancel:function closeDialog(){return setVisible(!1)},title:"Quit Game?",children:Object(jsx_runtime.jsx)("p",{style:{fontFamily:"Posterama Text Regular",marginTop:"40px"},children:"Aue you sure you want to quit the game?"})})]})}},666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Modal_stories_Default}));var slicedToArray=__webpack_require__(89),slicedToArray_default=__webpack_require__.n(slicedToArray),react=__webpack_require__(3),svg_esm=(__webpack_require__(654),__webpack_require__(90)),index_module=__webpack_require__(117),index_module_default=__webpack_require__.n(index_module),jsx_runtime=__webpack_require__(0),Modal_Modal=function Modal(props){var backgroundSVGRef=Object(react.useRef)(null);return Object(react.useEffect)((function(){var container=document.querySelector("#backgroundSVGRef");props.visible&&container&&(backgroundSVGRef.current=Object(svg_esm.b)().addTo("#backgroundSVGRef").addClass(index_module_default.a.backgroundSvg))}),[props.visible]),Object(react.useEffect)((function(){if(props.visible&&backgroundSVGRef.current){var svgContainer=document.querySelector("#backgroundSVGRef"),clientWidth=svgContainer.clientWidth,clientHeight=svgContainer.clientHeight;backgroundSVGRef.current.polygon([[15,0],[clientWidth-15,0],[clientWidth,15],[clientWidth,clientHeight-15],[clientWidth-15,clientHeight],[15,clientHeight],[0,clientHeight-15],[0,15],[15,0]]).fill("#1583d8").stroke("#000"),backgroundSVGRef.current.polygon([[15,0],[clientWidth-15,0],[clientWidth,15],[clientWidth,clientHeight-15],[clientWidth-15,clientHeight],[15,clientHeight],[0,clientHeight-15],[0,15],[15,0]]).fill("#004d89").stroke("#000").scale(.98,.98)}}),[props.visible]),props.visible&&Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("div",{tabIndex:0,"data-testid":"mask",role:"button",className:index_module_default.a.mask,onKeyDown:props.onKeyDown,onClick:props.maskCloseable?props.onClose:function(){}}),Object(jsx_runtime.jsxs)("div",{className:index_module_default.a.container+" "+props.containerClass,style:props.style,children:[Object(jsx_runtime.jsx)("div",{className:index_module_default.a.background,id:"backgroundSVGRef"}),props.children]})]})};Modal_Modal.defaultProps={containerClass:"",style:{},maskCloseable:!1,onKeyDown:function onKeyDown(){}};try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},containerClass:{defaultValue:{value:""},description:"",name:"containerClass",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},maskCloseable:{defaultValue:{value:"false"},description:"",name:"maskCloseable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"MouseEventHandler<HTMLDivElement>"}},onKeyDown:{defaultValue:{value:"() => {}"},description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Modal/index.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/Modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__(34),Modal_stories_Default=(__webpack_exports__.default={title:"Modal",component:Modal_Modal},function Default(){var _useState=Object(react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),visible=_useState2[0],setVisible=_useState2[1];return Object(jsx_runtime.jsxs)("div",{style:{width:"100%",height:"100%"},children:[Object(jsx_runtime.jsx)(Button.a,{onClick:function openModal(){return setVisible(!0)},children:"open"}),Object(jsx_runtime.jsx)(Modal_Modal,{maskCloseable:!0,onClose:function closeModal(){return setVisible(!1)},visible:visible,style:{width:500,height:300},children:Object(jsx_runtime.jsxs)("div",{style:{textAlign:"center",paddingTop:5,width:492,height:292,display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",margin:"0 auto"},children:[Object(jsx_runtime.jsx)("div",{style:{fontSize:"26px",margin:5,color:"#19fcff"},children:"Action Skill Unlocked"}),Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)("img",{style:{width:492},src:"https://mrrsblog.oss-cn-shanghai.aliyuncs.com/actionSkillUnlocked.png",alt:"",srcSet:""})}),Object(jsx_runtime.jsx)("div",{style:{flex:1,width:"100%",color:"#9adbfb"},children:"Congratulations! You've leveled up. Leveling up permanently increases yourhealth. It also immediately gives you full health and shields. Most importantly, you've unlocked your action skills. You have three actionskills to choose from. View and equip your skills by pressing Tand navigating to the skills screen."}),Object(jsx_runtime.jsx)("div",{style:{height:30,width:"100%",color:"#fff",lineHeight:"30px"},children:"exit"})]})})]})});Modal_stories_Default.displayName="Default"}},[[329,1,2]]]);