(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{194:function(t,e,a){var n=a(201);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(9)("62b8cedc",n,!0,{})},195:function(t,e,a){var n=a(207);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(9)("1ecd6960",n,!0,{})},196:function(t,e,a){var n=a(72),i=a(40),o=a(28),s=a(69),c=a(21),r=a(70),l=Object.getOwnPropertyDescriptor;e.f=a(4)?l:function(t,e){if(t=o(t),e=s(e,!0),r)try{return l(t,e)}catch(t){}if(c(t,e))return i(!n.f.call(t,e),t[e])}},197:function(t,e,a){var n=a(16),i=a(203).set;t.exports=function(t,e,a){var o,s=e.constructor;return s!==a&&"function"==typeof s&&(o=s.prototype)!==a.prototype&&n(o)&&i&&i(t,o),t}},198:function(t,e,a){var n=a(71),i=a(41).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},199:function(t,e,a){var n=a(16),i=a(22),o=a(1)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},200:function(t,e,a){"use strict";var n=a(194);a.n(n).a},201:function(t,e,a){(t.exports=a(0)(!1)).push([t.i,".table-head-left[data-v-16a18136]{text-align:left}",""])},202:function(t,e,a){"use strict";var n=a(3),i=a(21),o=a(22),s=a(197),c=a(69),r=a(15),l=a(198).f,d=a(196).f,u=a(11).f,p=a(204).trim,h=n.Number,f=h,m=h.prototype,g="Number"==o(a(73)(m)),v="trim"in String.prototype,y=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var a,n,i,o=(e=v?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var s,r=e.slice(2),l=0,d=r.length;l<d;l++)if((s=r.charCodeAt(l))<48||s>i)return NaN;return parseInt(r,n)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof h&&(g?r((function(){m.valueOf.call(a)})):"Number"!=o(a))?s(new f(y(e)),a,h):y(e)};for(var b,_=a(4)?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)i(f,b=_[x])&&!i(h,b)&&u(h,b,d(f,b));h.prototype=m,m.constructor=h,a(10)(n,"Number",h)}},203:function(t,e,a){var n=a(16),i=a(5),o=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=a(23)(Function.call,a(196).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,a){return o(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:o}},204:function(t,e,a){var n=a(20),i=a(39),o=a(15),s=a(205),c="["+s+"]",r=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(t,e,a){var i={},c=o((function(){return!!s[t]()||"​"!="​"[t]()})),r=i[t]=c?e(u):s[t];a&&(i[a]=r),n(n.P+n.F*c,"String",i)},u=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(r,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},205:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},206:function(t,e,a){"use strict";var n=a(195);a.n(n).a},207:function(t,e,a){(t.exports=a(0)(!1)).push([t.i,".modal-padding[data-v-576f446c]{padding-right:17px;display:block}@media (max-width:991px){.modal-dialog[data-v-576f446c]{max-width:unset;margin:1.75rem}}",""])},208:function(t,e,a){"use strict";var n={name:"DataTable",components:{},props:{titles:{type:[Array,Object],default:function(){return[]}},pagination:{type:[Object],default:function(){return{Page:1,PageLimit:10,TotalNumber:0,TotalPage:1}}}},data:function(){return{}},computed:{pageInfo:function(){var t=this.pagination,e=t.Page,a=t.PageLimit,n=t.TotalNumber;return"顯示第 "+((e-1)*a+1)+" 至 "+(e>=t.TotalPage?n:(e+0)*a)+" 項結果，共 "+n+" 項"}},created:function(){},methods:{}},i=(a(200),a(6)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("div",{staticClass:"table table-striped table-bordered dataTable no-footer",attrs:{id:"zero_config_wrapper"}},[a("div",{staticClass:"toolbar"}),t._v(" "),a("div",{staticClass:"dataTables_info",attrs:{id:"zero_config_info",role:"status","aria-live":"polite"},domProps:{textContent:t._s(t.pageInfo)}}),t._v(" "),a("table",{staticClass:"table table-striped table-bordered bg-white",attrs:{id:"zero_config"}},[a("thead",[a("tr",[a("th",{staticClass:"pb-4",staticStyle:{width:"10px"}},[a("label",{staticClass:"customcheckbox mb-3"},[a("input",{attrs:{id:"mainCheckbox",type:"checkbox"},on:{input:function(e){return t.$emit("check",e.target.checked)}}}),t._v(" "),a("span",{staticClass:"checkmark"})])]),t._v(" "),t._t("head",t._l(t.titles,(function(e){return a("th",{key:e,staticClass:"table-head-left",domProps:{textContent:t._s(e)}})})))],2)]),t._v(" "),a("tbody",[t._t("default")],2)]),t._v(" "),a("div",{staticClass:"dataTables_paginate paging_simple_numbers"},[a("ul",{staticClass:"pagination"},[a("li",{class:["paginate_button","page-item","previous"," ml-auto",{disabled:1==+t.pagination.Page}]},[a("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("onPage",t.pagination.Page-1)}}},[t._v("上一頁")])]),t._v(" "),t._l(t.pagination.TotalPage,(function(e){return a("li",{key:e,class:["paginate_button","page-item",{active:e===t.pagination.Page}]},[a("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)","aria-controls":"zero_config"},domProps:{textContent:t._s(e)},on:{click:function(a){return t.$emit("onPage",e)}}})])})),t._v(" "),a("li",{class:["paginate_button","page-item","previous"," mr-auto",{disabled:+t.pagination.Page>=+t.pagination.TotalPage}]},[a("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("onPage",t.pagination.Page+1)}}},[t._v("下一頁")])])],2)])])])])])])])}),[],!1,null,"16a18136",null);e.a=o.exports},209:function(t,e,a){"use strict";a(202);var n={name:"DropdownMenu",components:{},props:{title:{type:[String,Number],default:"title"},items:{type:[Array,Object],default:function(){return[]}},type:{type:[String,Number],default:"0"},noDot:{default:!1}},data:function(){return{show:!1}},computed:{buttonType:function(){var t;return null!=(t=["btn-outline-secondary","btn-danger"][this.type])?t:"btn-outline-secondary"}},created:function(){},methods:{toggleMenu:function(){var t=this;this.show=!this.show;var e=document.body;this.show?setTimeout((function(){e.addEventListener("click",t.toggleMenu)}),0):e.removeEventListener("click",this.toggleMenu)},onMenu:function(t){var e=t.text,a=t.type,n=t.index,i=t.action;this.$emit("onMenu",{text:e,type:a,index:n,action:i}),setTimeout(this.toggleMenu,0)}}},i=a(6),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["dropdown",{show:t.show}]},[a("a",{class:["btn","dropdown-toggle",t.buttonType],attrs:{href:"javascript:void(0)",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":t.show},on:{click:t.toggleMenu}},[t.noDot?t._e():a("i",{staticClass:"m-r-10 mdi mdi-dots-horizontal"}),t._v(" "),a("span",{domProps:{textContent:t._s(t.title)}})]),t._v(" "),a("div",{class:["dropdown-menu",{show:t.show}],attrs:{"aria-labelledby":"dropdownMenuLink"},on:{click:function(t){t.stopPropagation()}}},[t._l(t.items,(function(e,n){var i=e.text,o=e.type,s=e.action;return[i?a("a",{key:n,class:"dropdown-"+(o||"c"),attrs:{href:"javascript:void(0)"},domProps:{textContent:t._s(i)},on:{click:function(e){return e.stopPropagation(),t.onMenu({text:i,type:o,index:n,action:s})}}}):a("div",{key:n,staticClass:"dropdown-divider"})]}))],2)])}),[],!1,null,null,null);e.a=o.exports},210:function(t,e,a){"use strict";var n={name:"modal",props:{popup:{type:Boolean,default:function(){return!1}},title:{type:String,default:function(){return"系統提示"}},buttonC:{type:String,default:function(){return"確定"}},classBody:{type:Object,default:function(){return this.classOrig}},cancel:{type:Boolean,default:function(){return!0}}},data:function(){return{show:!1,style:!1,classOrig:{"modal-dialog":!0,"modal-mid":!0,"modal-dialog-centered":!0}}},components:{},methods:{closeIt:function(){this.$emit("finish")},confirm:function(){this.$emit("confirm")}},watch:{popup:function(t){var e=this;this.style=t,setTimeout((function(){e.show=t}),1)}},created:function(){},computed:{}},i=(a(206),a(6)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.style,expression:"style"}],class:{modal:!0,fade:!0,show:t.show,"modal-padding":t.style},attrs:{"aria-hidden":!t.show}},[a("div",{class:t.classBody,attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.closeIt()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("div",{staticClass:"modal-body",staticStyle:{"text-align":"center","font-size":"16px"}},[t._t("default")],2),t._v(" "),a("div",{staticClass:"modal-footer"},[t.cancel?a("button",{staticClass:"btn btn-outline-secondary",staticStyle:{width:"85px"},attrs:{type:"button"},on:{click:function(e){return t.closeIt()}}},[t._v("取消")]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.confirm()}}},[t._v(t._s(t.buttonC))])])])])])}),[],!1,null,"576f446c",null);e.a=o.exports},211:function(t,e,a){"use strict";var n=a(20),i=a(74)(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(75)("includes")},212:function(t,e,a){"use strict";var n=a(20),i=a(213);n(n.P+n.F*a(214)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},213:function(t,e,a){var n=a(199),i=a(39);t.exports=function(t,e,a){if(n(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}},214:function(t,e,a){var n=a(1)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},215:function(t,e,a){"use strict";var n={color:{1:"btn-outline-danger",2:"btn-outline-secondary",3:"btn-outline-warning",4:"btn-outline-success"},mdi:{1:"mdi-plus",2:"mdi-arrow-up-bold-circle",3:"mdi-arrow-down-bold-circle-outline",4:"mdi-delete",5:"mdi-playlist-plus"},message:{1:"",2:"是否將所選項目改為「正常使用」？",3:"是否將所選項目改為「停止使用」？",4:"是否刪除所選的項目？"}},i={name:"ButtonTop",components:{},props:{forBut:{type:Object},forMod:{type:Object}},data:function(){return{}},computed:{switchStyle:function(){return{color:n.color[this.forBut.color],mdi:n.mdi[this.forBut.mdi],text:this.forBut.text}||{}}},created:function(){},methods:{onButton:function(){var t={title:this.forMod.title,type:this.forMod.type,message:n.message[this.forMod.message],action:this.forMod.action};this.$emit("onButton",t)}}},o=a(6),s={name:"ButtonCont",components:{buttonTop:Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:["btn",t.switchStyle.color],staticStyle:{"margin-right":"3px"},attrs:{type:"button"},on:{click:function(e){return t.onButton()}}},[a("i",{class:["mdi",t.switchStyle.mdi],staticStyle:{"font-style":"normal"}},[t._v("\n    "+t._s(t.switchStyle.text)+"\n  ")])])}),[],!1,null,null,null).exports},props:{styleData:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},created:function(){},methods:{onButton:function(t){this.$emit("onButton",t)}}},c=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card border-bottom",staticStyle:{"overflow-x":"scroll"}},[a("div",{staticClass:"card-body",staticStyle:{"min-width":"max-content"}},[a("div",{staticClass:"row mb-3",attrs:{id:"ShipTypeDiv"}},[a("div",{staticClass:"col-md-12",staticStyle:{padding:"8px 0px 0px 0px"}},[a("div",{attrs:{id:"NormalMode"}},t._l(t.styleData,(function(e,n){return a("buttonTop",{key:n,attrs:{"for-but":e.forBut,"for-mod":e.forMod},on:{onButton:function(e){return t.onButton(e)}}})})),1)])]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.a=c.exports},244:function(t,e,a){"use strict";a.r(e);a(42),a(29),a(211),a(212),a(7);var n=a(208),i=a(209),o=a(210),s=a(215),c=a(17),r={name:"Currencysetting",components:{dataTable:n.a,dropdown:i.a,modal:o.a,buttonCont:s.a},data:function(){return{modifyingId:"",showModal:!1,modalTitle:"",modalMessage:"",modalType:0,alertMessage:"",classBody:{"modal-dialog":!0,"modal-900":!0},checkedList:[],inputList:[{title:"*貨幣名稱",placeholder:"請輸入貨幣中文名稱",value:"",type:"input"},{title:"*貨幣代碼",placeholder:"請輸入貨幣代碼，例如 RMB或NTD",value:"",type:"input"},{title:"*匯率",placeholder:"該貨幣1元換算成台幣數量",value:"",type:"input"},{title:"備註",placeholder:"",value:"",type:"textarea"}],styleData:[{forBut:{color:1,mdi:1,text:"新增貨幣"},forMod:{title:"新增貨幣",type:"2",message:"1",action:"onCreate"}},{forBut:{color:2,mdi:2,text:"正常使用"},forMod:{title:"",type:"",message:2,action:"onEnableAll"}},{forBut:{color:2,mdi:3,text:"停止使用"},forMod:{title:"",type:"",message:3,action:"onStopAll"}},{forBut:{color:3,mdi:4,text:"刪除"},forMod:{title:"",type:"",message:4,action:"onDeleteAll"}}]}},computed:Object.assign({},Object(c.c)({list:"ExchangeRate/list",pagination:"ExchangeRate/pagination"})),created:function(){},mounted:function(){this.getList(Object.assign({},this.pagination,{page:1,PageLimit:10}))},methods:Object.assign({},Object(c.b)({getList:"ExchangeRate/read",addCurrency:"ExchangeRate/create",changeSetting:"ExchangeRate/modify",changeStatus:"ExchangeRate/update",deleteCurrency:"ExchangeRate/deleted"}),{callModal:function(t){var e=t.title,a=t.type,n=t.message,i=t.action;document.body.classList.add("modal-open"),document.body.style.paddingRight="17px",this.showModal=!0,this.modalTitle=e||"提示訊息",this.modalMessage=n||"",this.modalType=a||0,this.action=i||"closeMod",this.alertMessage=""},onConfirm:function(){var t=this[this.action];"function"==typeof t&&t()},closeMod:function(){document.body.classList.remove("modal-open"),document.body.style.paddingRight=null,this.showModal=!1,this.modalMessage="",this.alertMessage="",this.inputList.forEach((function(t){t.value=""}))},onCreate:function(){var t=this,e=this.inputList,a=e[0].value,n=e[1].value,i=e[2].value,o=e[3].value;a&&n&&i?this.addCurrency({CurrencyNo:n,CurrencyName:a,Rate:i,Status:!0,Remark:o}).then((function(e){t.closeMod(),t.callModal({message:"新增成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.alertMessage=e.message||"不明錯誤"})):this.alertMessage="所有星號(*)必填"},onEdit:function(){var t=this,e=this.inputList,a=e[0].value,n=e[1].value,i=e[2].value,o=e[3].value;a&&n&&i?this.changeSetting({Id:this.modifyingId,data:{CurrencyNo:n,CurrencyName:a,Rate:i,Remark:o}}).then((function(e){t.closeMod(),t.callModal({message:"修改成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.alertMessage=e.message||"不明錯誤"})):this.alertMessage="所有星號(*)必填"},onMenu:function(t){var e=this,a=(t.text,t.type,t.index,t.action),n=t.Id,i=t.Status,o=t.key;if("edit"===a){var s=this.list[o],c=s.CurrencyName,r=s.CurrencyNo,l=s.Rate,d=s.Remark;this.inputList[0].value=c,this.inputList[1].value=r,this.inputList[2].value=l,this.inputList[3].value=d,this.callModal({message:"",title:"修改貨幣",action:"onEdit",type:2}),this.modifyingId=n}else"delete"===a?this.deleteCurrency(n).then((function(t){e.callModal({message:"刪除成功",type:1}),e.getList(Object.assign({},e.pagination))})).catch((function(t){e.callModal({message:t.message||"不明錯誤",type:1})})):"toggle"===a&&this.changeStatus({Id:n,Status:!i}).then((function(t){e.callModal({message:"修改成功",type:1}),e.getList(Object.assign({},e.pagination))})).catch((function(t){e.callModal({message:t.message||"不明錯誤",type:1})}))},onCheck:function(t){var e=t.$event,a=t.Id,n=(t.key,e.target.checked);if(n&&!this.checkedList.includes(a)&&this.checkedList.push(a),!n&&this.checkedList.includes(a)){var i=this.checkedList.indexOf(a);i>-1&&this.checkedList.splice(i,1)}},onAllCheck:function(t){var e=this;if(t){var a=this.$refs.checkbox;(Array.isArray(a)?a:[a]).forEach((function(t){t.checked=!0})),this.checkedList.splice(0),this.list.forEach((function(t){var a=t.Id;e.checkedList.push(a)}))}else this.clearAllchecked()},clearAllchecked:function(){var t=this.$refs.checkbox;(Array.isArray(t)?t:[t]).forEach((function(t){t.checked=!1})),this.checkedList.splice(0)},onEnableAll:function(){var t=this;if(this.checkedList.length){var e=[];this.checkedList.forEach((function(a){e.push(t.changeStatus({Id:a,Status:!0}))})),Promise.allSettled(e).then((function(e){t.callModal({message:"修改成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.callModal({message:e.message||"不明錯誤",type:1})}))}},onStopAll:function(){var t=this;if(this.checkedList.length){var e=[];this.checkedList.forEach((function(a){e.push(t.changeStatus({Id:a,Status:!1}))})),Promise.allSettled(e).then((function(e){t.callModal({message:"修改成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.callModal({message:e.message||"不明錯誤",type:1})}))}},onDeleteAll:function(){var t=this;if(this.checkedList.length){var e=[];this.checkedList.forEach((function(a){e.push(t.deleteCurrency(a))})),Promise.allSettled(e).then((function(e){t.clearAllchecked(),t.callModal({message:"刪除成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.clearAllchecked(),t.callModal({message:e.message||"不明錯誤",type:1})}))}},onPage:function(t){+t!=+this.pagination.Page&&(this.getList(Object.assign({},this.pagination,{Page:t})),this.clearAllchecked())}})},l=a(6),d=Object(l.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",t._b({attrs:{popup:t.showModal,title:t.modalTitle,cancel:1!=+t.modalType,"button-c":2==+t.modalType?"儲存":"確定"},on:{finish:function(e){return t.closeMod()},confirm:t.onConfirm}},"modal",Object.assign({},2==+t.modalType?{classBody:t.classBody}:{}),!1),[+t.modalType<2?a("p",{domProps:{textContent:t._s(t.modalMessage)}}):a("div",{staticClass:"modal-body"},[t._l(t.inputList,(function(e){return a("div",{key:e.title,staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"},domProps:{textContent:t._s(e.title)}}),t._v(" "),a("div",{staticClass:"col-sm-10"},["input"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}}):a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",staticStyle:{height:"100px"},attrs:{placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])])})),t._v(" "),t.alertMessage?a("li",{staticStyle:{color:"#F00"},domProps:{textContent:t._s(t.alertMessage)}}):t._e()],2)]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"page-wrapper"},[t._m(1),t._v(" "),a("div",{staticClass:"container-fluid"},[a("buttonCont",{attrs:{"style-data":t.styleData},on:{onButton:function(e){return t.callModal(e)}}}),t._v(" "),a("data-table",{attrs:{titles:["貨幣名稱","代碼","匯率","其他資訊"],pagination:t.pagination},on:{onPage:t.onPage,check:t.onAllCheck}},t._l(t.list,(function(e,n){var i=e.CurrencyName,o=e.CurrencyNo,s=e.Rate,c=e.Status,r=e.Remark,l=e.Id;return a("tr",{key:n},[a("td",[a("label",{staticClass:"customcheckbox m-b-20"},[a("input",{ref:"checkbox",refInFor:!0,attrs:{type:"checkbox"},on:{input:function(e){return t.onCheck({$event:e,Id:l,key:n})}}}),t._v(" "),a("span",{staticClass:"checkmark"})])]),t._v(" "),a("td",[a("li",[a("a",{staticClass:"product-spec",attrs:{href:"javascript:void(0)"},domProps:{textContent:t._s(i)}})]),t._v(" "),c?a("li",{staticStyle:{color:"#009688"}},[t._v("\n              正常使用 "),a("i",{staticClass:"m-r-10 mdi mdi-check"})]):a("li",{staticStyle:{color:"#acacac"}},[t._v("\n              停用\n            ")])]),t._v(" "),a("td",{domProps:{textContent:t._s(o)}}),t._v(" "),a("td",{domProps:{textContent:t._s(s)}}),t._v(" "),a("td",[a("dropdown",{attrs:{title:"操作",items:[{text:"修改",type:"item",action:"edit"},{type:"divider"},{text:c?"停止使用":"啟用",type:"item",action:"toggle"},{text:"刪除",type:"item",action:"delete"}]},on:{onMenu:function(e){return t.onMenu(Object.assign({},e,{Id:l,Status:c,key:n}))}}}),t._v(" "),a("hr"),t._v("\n            備註："),a("br"),t._v(t._s(r||"(無備註)")+"\n          ")],1)])})),0)],1)]),t._v(" "),t.showModal?a("div",{staticClass:"modal-backdrop fade show"}):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal fade",attrs:{id:"MessageModal",tabindex:"-1","data-keyboard":"false","data-backdrop":"static",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-mid modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"MessageModalLabel"}},[this._v("\n            系統提示\n          ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])]),this._v(" "),e("div",{staticClass:"modal-body",staticStyle:{"text-align":"center","font-size":"16px"}}),this._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"}},[this._v("\n            確定\n          ")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-breadcrumb"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 d-flex no-block align-items-center"},[e("h4",{staticClass:"page-title"},[this._v("\n            幣別匯率設定\n          ")])])])])}],!1,null,null,null);e.default=d.exports}}]);
//# sourceMappingURL=currencysetting.js.map