(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{197:function(t,e,a){var n=a(204);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("62b8cedc",n,!0,{})},198:function(t,e,a){var n=a(210);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("7a98e4c7",n,!0,{})},199:function(t,e,a){var n=a(73),i=a(41),o=a(29),s=a(70),l=a(20),r=a(71),c=Object.getOwnPropertyDescriptor;e.f=a(4)?c:function(t,e){if(t=o(t),e=s(e,!0),r)try{return c(t,e)}catch(t){}if(l(t,e))return i(!n.f.call(t,e),t[e])}},200:function(t,e,a){var n=a(15),i=a(206).set;t.exports=function(t,e,a){var o,s=e.constructor;return s!==a&&"function"==typeof s&&(o=s.prototype)!==a.prototype&&n(o)&&i&&i(t,o),t}},201:function(t,e,a){var n=a(72),i=a(42).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},202:function(t,e,a){var n=a(15),i=a(21),o=a(1)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},203:function(t,e,a){"use strict";var n=a(197);a.n(n).a},204:function(t,e,a){(t.exports=a(0)(!1)).push([t.i,".table-head-left[data-v-16a18136]{text-align:left}",""])},205:function(t,e,a){"use strict";var n=a(3),i=a(20),o=a(21),s=a(200),l=a(70),r=a(14),c=a(201).f,u=a(199).f,d=a(10).f,p=a(207).trim,h=n.Number,m=h,f=h.prototype,v="Number"==o(a(74)(f)),g="trim"in String.prototype,y=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var a,n,i,o=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var s,r=e.slice(2),c=0,u=r.length;c<u;c++)if((s=r.charCodeAt(c))<48||s>i)return NaN;return parseInt(r,n)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof h&&(v?r((function(){f.valueOf.call(a)})):"Number"!=o(a))?s(new m(y(e)),a,h):y(e)};for(var b,_=a(4)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)i(m,b=_[x])&&!i(h,b)&&d(h,b,u(m,b));h.prototype=f,f.constructor=h,a(9)(n,"Number",h)}},206:function(t,e,a){var n=a(15),i=a(5),o=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=a(22)(Function.call,a(199).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,a){return o(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:o}},207:function(t,e,a){var n=a(19),i=a(40),o=a(14),s=a(208),l="["+s+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),u=function(t,e,a){var i={},l=o((function(){return!!s[t]()||"​"!="​"[t]()})),r=i[t]=l?e(d):s[t];a&&(i[a]=r),n(n.P+n.F*l,"String",i)},d=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(r,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},208:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},209:function(t,e,a){"use strict";var n=a(198);a.n(n).a},210:function(t,e,a){(t.exports=a(0)(!1)).push([t.i,".modal-padding[data-v-1f09052c]{padding-right:17px;display:block}@media (max-width:991px){.modal-dialog[data-v-1f09052c]{max-width:unset;margin:1.75rem}}",""])},211:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n={name:"Modal",components:{},props:{popup:{type:Boolean,default:function(){return!1}},title:{type:String,default:function(){return"系統提示"}},buttonC:{type:String,default:function(){return"確定"}},classBody:{type:Object,default:function(){return this.classOrig}},cancel:{type:Boolean,default:function(){return!0}}},data:function(){return{show:!1,style:!1,classOrig:{"modal-dialog":!0,"modal-mid":!0,"modal-dialog-centered":!0}}},computed:{},watch:{popup:function(t){var e=this;this.style=t,setTimeout((function(){e.show=t}),1)}},created:function(){},methods:{closeIt:function(){this.$emit("finish")},confirm:function(){this.$emit("confirm")}}},i=(a(209),a(6)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.style,expression:"style"}],class:{modal:!0,fade:!0,show:t.show,"modal-padding":t.style},attrs:{"aria-hidden":!t.show}},[a("div",{class:t.classBody,attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.closeIt()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("div",{staticClass:"modal-body",staticStyle:{"text-align":"center","font-size":"16px"}},[t._t("default")],2),t._v(" "),a("div",{staticClass:"modal-footer"},[t.cancel?a("button",{staticClass:"btn btn-outline-secondary",staticStyle:{width:"85px"},attrs:{type:"button"},on:{click:function(e){return t.closeIt()}}},[t._v("\n          取消\n        ")]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.confirm()}}},[t._v("\n          "+t._s(t.buttonC)+"\n        ")])])])])])}),[],!1,null,"1f09052c",null).exports},212:function(t,e,a){"use strict";var n={name:"DataTable",components:{},props:{titles:{type:[Array,Object],default:function(){return[]}},pagination:{type:[Object],default:function(){return{Page:1,PageLimit:10,TotalNumber:0,TotalPage:1}}}},data:function(){return{}},computed:{pageInfo:function(){var t=this.pagination,e=t.Page,a=t.PageLimit,n=t.TotalNumber;return"顯示第 "+((e-1)*a+1)+" 至 "+(e>=t.TotalPage?n:(e+0)*a)+" 項結果，共 "+n+" 項"}},created:function(){},methods:{}},i=(a(203),a(6)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("div",{staticClass:"table table-striped table-bordered dataTable no-footer",attrs:{id:"zero_config_wrapper"}},[a("div",{staticClass:"toolbar"}),t._v(" "),a("div",{staticClass:"dataTables_info",attrs:{id:"zero_config_info",role:"status","aria-live":"polite"},domProps:{textContent:t._s(t.pageInfo)}}),t._v(" "),a("table",{staticClass:"table table-striped table-bordered bg-white",attrs:{id:"zero_config"}},[a("thead",[a("tr",[a("th",{staticClass:"pb-4",staticStyle:{width:"10px"}},[a("label",{staticClass:"customcheckbox mb-3"},[a("input",{attrs:{id:"mainCheckbox",type:"checkbox"},on:{input:function(e){return t.$emit("check",e.target.checked)}}}),t._v(" "),a("span",{staticClass:"checkmark"})])]),t._v(" "),t._t("head",t._l(t.titles,(function(e){return a("th",{key:e,staticClass:"table-head-left",domProps:{textContent:t._s(e)}})})))],2)]),t._v(" "),a("tbody",[t._t("default")],2)]),t._v(" "),a("div",{staticClass:"dataTables_paginate paging_simple_numbers"},[a("ul",{staticClass:"pagination"},[a("li",{class:["paginate_button","page-item","previous"," ml-auto",{disabled:1==+t.pagination.Page}]},[a("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("onPage",t.pagination.Page-1)}}},[t._v("上一頁")])]),t._v(" "),t._l(t.pagination.TotalPage,(function(e){return a("li",{key:e,class:["paginate_button","page-item",{active:e===t.pagination.Page}]},[a("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)","aria-controls":"zero_config"},domProps:{textContent:t._s(e)},on:{click:function(a){return t.$emit("onPage",e)}}})])})),t._v(" "),a("li",{class:["paginate_button","page-item","previous"," mr-auto",{disabled:+t.pagination.Page>=+t.pagination.TotalPage}]},[a("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("onPage",t.pagination.Page+1)}}},[t._v("下一頁")])])],2)])])])])])])])}),[],!1,null,"16a18136",null);e.a=o.exports},213:function(t,e,a){"use strict";a(205);var n={name:"DropdownMenu",components:{},props:{title:{type:[String,Number],default:"title"},items:{type:[Array,Object],default:function(){return[]}},type:{type:[String,Number],default:"0"},noDot:{default:!1}},data:function(){return{show:!1}},computed:{buttonType:function(){var t;return null!=(t=["btn-outline-secondary","btn-danger"][this.type])?t:"btn-outline-secondary"}},created:function(){},methods:{toggleMenu:function(){var t=this;this.show=!this.show;var e=document.body;this.show?setTimeout((function(){e.addEventListener("click",t.toggleMenu)}),0):e.removeEventListener("click",this.toggleMenu)},onMenu:function(t){var e=t.text,a=t.type,n=t.index,i=t.action;this.$emit("onMenu",{text:e,type:a,index:n,action:i}),setTimeout(this.toggleMenu,0)}}},i=a(6),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["dropdown",{show:t.show}]},[a("a",{class:["btn","dropdown-toggle",t.buttonType],attrs:{href:"javascript:void(0)",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":t.show},on:{click:t.toggleMenu}},[t.noDot?t._e():a("i",{staticClass:"m-r-10 mdi mdi-dots-horizontal"}),t._v(" "),a("span",{domProps:{textContent:t._s(t.title)}})]),t._v(" "),a("div",{class:["dropdown-menu",{show:t.show}],attrs:{"aria-labelledby":"dropdownMenuLink"},on:{click:function(t){t.stopPropagation()}}},[t._l(t.items,(function(e,n){var i=e.text,o=e.type,s=e.action;return[i?a("a",{key:n,class:"dropdown-"+(o||"c"),attrs:{href:"javascript:void(0)"},domProps:{textContent:t._s(i)},on:{click:function(e){return e.stopPropagation(),t.onMenu({text:i,type:o,index:n,action:s})}}}):a("div",{key:n,staticClass:"dropdown-divider"})]}))],2)])}),[],!1,null,null,null);e.a=o.exports},214:function(t,e,a){"use strict";var n=a(19),i=a(75)(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(76)("includes")},215:function(t,e,a){"use strict";var n=a(19),i=a(216);n(n.P+n.F*a(217)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},216:function(t,e,a){var n=a(202),i=a(40);t.exports=function(t,e,a){if(n(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}},217:function(t,e,a){var n=a(1)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},218:function(t,e,a){"use strict";var n={color:{1:"btn-outline-danger",2:"btn-outline-secondary",3:"btn-outline-warning",4:"btn-outline-success"},mdi:{1:"mdi-plus",2:"mdi-arrow-up-bold-circle",3:"mdi-arrow-down-bold-circle-outline",4:"mdi-delete",5:"mdi-playlist-plus"},message:{1:"",2:"是否將所選項目改為「正常使用」？",3:"是否將所選項目改為「停止使用」？",4:"是否刪除所選的項目？"}},i={name:"ButtonTop",components:{},props:{forBut:{type:Object},forMod:{type:Object}},data:function(){return{}},computed:{switchStyle:function(){return{color:n.color[this.forBut.color],mdi:n.mdi[this.forBut.mdi],text:this.forBut.text}||{}}},created:function(){},methods:{onButton:function(){var t={title:this.forMod.title,type:this.forMod.type,message:n.message[this.forMod.message],action:this.forMod.action};this.$emit("onButton",t)}}},o=a(6),s={name:"ButtonCont",components:{buttonTop:Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:["btn",t.switchStyle.color],staticStyle:{"margin-right":"3px"},attrs:{type:"button"},on:{click:function(e){return t.onButton()}}},[a("i",{class:["mdi",t.switchStyle.mdi],staticStyle:{"font-style":"normal"}},[t._v("\n    "+t._s(t.switchStyle.text)+"\n  ")])])}),[],!1,null,null,null).exports},props:{styleData:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},created:function(){},methods:{onButton:function(t){this.$emit("onButton",t)}}},l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card border-bottom",staticStyle:{"overflow-x":"scroll"}},[a("div",{staticClass:"card-body",staticStyle:{"min-width":"max-content"}},[a("div",{staticClass:"row mb-3",attrs:{id:"ShipTypeDiv"}},[a("div",{staticClass:"col-md-12",staticStyle:{padding:"8px 0px 0px 0px"}},[a("div",{attrs:{id:"NormalMode"}},t._l(t.styleData,(function(e,n){return a("buttonTop",{key:n,attrs:{"for-but":e.forBut,"for-mod":e.forMod},on:{onButton:function(e){return t.onButton(e)}}})})),1)])]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.a=l.exports},227:function(t,e,a){"use strict";a(228)("sub",(function(t){return function(){return t(this,"sub","","")}}))},228:function(t,e,a){var n=a(19),i=a(14),o=a(40),s=/"/g,l=function(t,e,a,n){var i=String(o(t)),l="<"+e;return""!==a&&(l+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),l+">"+i+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(l),n(n.P+n.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",a)}},247:function(t,e,a){"use strict";a.r(e);a(43),a(214),a(215),a(79),a(47),a(30),a(80),a(227),a(23);var n=a(212),i=a(213),o=a(211),s=a(218),l=a(16),r={name:"Translocation",components:{dataTable:n.a,dropdown:i.a,modal:o.a,buttonCont:s.a},data:function(){return{modifyingId:"",showModal:!1,modalTitle:"",modalMessage:"",modalType:0,alertMessage:"",classBody:{"modal-dialog":!0,"modal-900":!0},checkedList:[],inputList:{basic:[{title:"*集運商名稱",placeholder:"請輸入",value:"",type:"input"},{title:"發貨地點及方式",placeholder:"例如：義烏海快普貨 或 深圳空運特貨",value:"",type:"input"},{title:"收貨連絡人",placeholder:"請輸入",value:"",type:"input"},{title:"收貨電話",placeholder:"請輸入",value:"",type:"input"},{title:"收貨地址",placeholder:"請輸入",value:"",type:"input"}],weight:[{title:"首重公斤數",placeholder:"請輸入",value:"",type:"number"},{title:"首重費",placeholder:"請輸入",value:"",type:"number"}],weightSub:[{title:"",placeholder:"*公斤",value:"",type:"number"},{title:"～",placeholder:"*公斤",value:"",type:""},{title:"",placeholder:"*公斤",value:"",type:"number"},{title:"運費",placeholder:"*運費",value:"",type:"number"}],remark:[{title:"備註",placeholder:"",value:"",type:"textarea"}]},selectedRate:{main:0,sub:0},modalFeeList:[],styleData:[{forBut:{color:1,mdi:1,text:"新增集運地點"},forMod:{title:"新增集運地點",type:"2",message:"1",action:"onCreate"}},{forBut:{color:2,mdi:2,text:"正常使用"},forMod:{title:"",type:"",message:2,action:"onEnableAll"}},{forBut:{color:2,mdi:3,text:"停止使用"},forMod:{title:"",type:"",message:3,action:"onStopAll"}},{forBut:{color:3,mdi:4,text:"刪除"},forMod:{title:"",type:"",message:4,action:"onDeleteAll"}}]}},computed:Object.assign({},Object(l.c)({exchangeList:"ExchangeRate/list",list:"TransLocation/list",pagination:"TransLocation/pagination"})),created:function(){},mounted:function(){this.getList(Object.assign({},this.pagination,{page:1,PageLimit:10})),this.getExchangeList({page:1,PageLimit:50})},methods:Object.assign({},Object(l.b)({getExchangeList:"ExchangeRate/read",getList:"TransLocation/read",addLocation:"TransLocation/create",changeSetting:"TransLocation/modify",changeStatus:"TransLocation/update",deleteLocation:"TransLocation/deleted"}),{callModal:function(t){var e=t.title,a=t.type,n=t.message,i=t.action;document.body.classList.add("modal-open"),document.body.style.paddingRight="17px",this.showModal=!0,this.modalTitle=e||"提示訊息",this.modalMessage=n||"",this.modalType=a||0,this.action=i||"closeMod",this.alertMessage=""},onModalAdd:function(){for(var t=this.modalFeeList,e=t[t.length-1],a=this.inputList.weightSub,n=a[0].value,i=a[2].value,o=a[3].value,s=this.selectedRate.sub,l=this.exchangeList.filter((function(t){return t.Id===s}))[0]||{},r=l.CurrencyName,c=l.Rate,u=!0,d=0,p=[[!n&&0!==n,"請輸入最低重量"],[!i,"請輸入最高重量"],[i<n,"最高重量不可小於最低重量"],[!o&&0!==o,"請輸入運費"],[!s||!r||!c,"請選擇匯率"],[e&&+e.endWeight!=+n,"需接續上一筆資料重量"]];d<p.length;d++){var h=p[d];if(h[0]){this.alertMessage=h[1],u=!1;break}}u&&t.push({beginWeight:n,endWeight:i,fee:o,name:r,rate:c,rateId:s})},onConfirm:function(){var t=this[this.action];"function"==typeof t&&t()},closeMod:function(){var t=this;document.body.classList.remove("modal-open"),document.body.style.paddingRight=null,this.showModal=!1,this.modalMessage="",this.alertMessage="",Object.keys(this.inputList).forEach((function(e){t.inputList[e].forEach((function(t){t.value=""}))})),this.modalFeeList.splice(0)},onCreate:function(){var t=this,e=this.inputList,a=this.selectedRate,n=this.modalFeeList,i=e.basic,o=e.weight,s=e.remark,l=i[0].value,r=i[1].value,c=i[2].value,u=i[3].value,d=i[4].value,p=o[0].value,h=o[1].value,m=s[0].value,f=a.main,v=n.map((function(t){var e=t.beginWeight,a=t.endWeight,n=t.fee,i=t.rate,o=t.rateId;return{Id:o,BeginWeight:e,EndWeight:a,Price:n,NTPrice:n*i,ExchangeRateId:o}}));l&&f?this.addLocation({Name:l,DeliveryLocation:r,ContactPerson:c,PhoneNumber:u,Address:d,FirstKG:p,FirstFee:h,ExchangeRateId:f,TransFeeData:v,Status:!0,Remark:m}).then((function(e){t.closeMod(),t.callModal({message:"新增成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.alertMessage=e.message||"不明錯誤"})):this.alertMessage="所有星號(*)及匯率必填"},onEdit:function(){var t=this,e=this.inputList,a=this.selectedRate,n=this.modalFeeList,i=e.basic,o=e.weight,s=e.remark,l=i[0].value,r=i[1].value,c=i[2].value,u=i[3].value,d=i[4].value,p=o[0].value,h=o[1].value,m=s[0].value,f=a.main,v=n.map((function(t){var e=t.beginWeight,a=t.endWeight,n=t.fee;return{BeginWeight:e,EndWeight:a,Price:n,NTPrice:n*t.rate,ExchangeRateId:t.rateId}}));l&&f?this.changeSetting({Id:this.modifyingId,data:{Name:l,DeliveryLocation:r,ContactPerson:c,PhoneNumber:u,Address:d,FirstKG:p,FirstFee:h,ExchangeRateId:f,TransFeeData:v,Status:!0,Remark:m}}).then((function(e){t.closeMod(),t.callModal({message:"修改成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.alertMessage=e.message||"不明錯誤"})):this.alertMessage="所有星號(*)必填"},onMenu:function(t){var e=this,a=(t.text,t.type,t.index,t.action),n=t.Id,i=t.Status,o=t.key;if("edit"===a){var s=this.list[o],l=s.Id,r=s.Name,c=s.DeliveryLocation,u=s.ContactPerson,d=s.PhoneNumber,p=s.Address,h=s.FirstKG,m=s.FirstFee,f=s.ExchangeRateId,v=s.Remark,g=(s.Status,s.TransFeeData),y=this.inputList,b=this.selectedRate,_=this.modalFeeList,x=y.basic,C=y.weight,k=y.remark;[r,c,u,d,p].forEach((function(t,e){x[e].value=t})),[h,m].forEach((function(t,e){C[e].value=t})),k[0].value=v,b.main=f,_.splice(0),g.forEach((function(t){var a=t.BeginWeight,n=t.EndWeight,i=t.Price,o=(t.NTPrice,t.ExchangeRateId),s=e.exchangeList.filter((function(t){return t.Id===o}))[0]||{},l=s.CurrencyName,r=s.Rate;_.push({beginWeight:a,endWeight:n,rate:r,name:l,fee:i,rateId:o})})),this.callModal({message:"",title:"修改集運地點資料",action:"onEdit",type:2}),this.modifyingId=l}else"delete"===a?this.deleteLocation(n).then((function(t){e.callModal({message:"刪除成功",type:1}),e.getList(Object.assign({},e.pagination))})).catch((function(t){e.callModal({message:t.message||"不明錯誤",type:1})})):"toggle"===a&&this.changeStatus({Id:n,Status:!i}).then((function(t){e.callModal({message:"修改成功",type:1}),e.getList(Object.assign({},e.pagination))})).catch((function(t){e.callModal({message:t.message||"不明錯誤",type:1})}))},onCheck:function(t){var e=t.$event,a=t.Id,n=(t.key,e.target.checked);if(n&&!this.checkedList.includes(a)&&this.checkedList.push(a),!n&&this.checkedList.includes(a)){var i=this.checkedList.indexOf(a);i>-1&&this.checkedList.splice(i,1)}},onAllCheck:function(t){var e=this;if(t){var a=this.$refs.checkbox;(Array.isArray(a)?a:[a]).forEach((function(t){t.checked=!0})),this.checkedList.splice(0),this.list.forEach((function(t){var a=t.Id;e.checkedList.push(a)}))}else this.clearAllchecked()},clearAllchecked:function(){var t=this.$refs.checkbox;(Array.isArray(t)?t:[t]).forEach((function(t){t.checked=!1})),this.checkedList.splice(0)},onEnableAll:function(){var t=this;if(this.checkedList.length){var e=[];this.checkedList.forEach((function(a){e.push(t.changeStatus({Id:a,Status:!0}))})),Promise.allSettled(e).then((function(e){t.callModal({message:"修改成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.callModal({message:e.message||"不明錯誤",type:1})}))}},onStopAll:function(){var t=this;if(this.checkedList.length){var e=[];this.checkedList.forEach((function(a){e.push(t.changeStatus({Id:a,Status:!1}))})),Promise.allSettled(e).then((function(e){t.callModal({message:"修改成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.callModal({message:e.message||"不明錯誤",type:1})}))}},onDeleteAll:function(){var t=this;if(this.checkedList.length){var e=[];this.checkedList.forEach((function(a){e.push(t.deleteLocation(a))})),Promise.allSettled(e).then((function(e){t.clearAllchecked(),t.callModal({message:"刪除成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.clearAllchecked(),t.callModal({message:e.message||"不明錯誤",type:1})}))}},onPage:function(t){+t!=+this.pagination.Page&&(this.getList(Object.assign({},this.pagination,{Page:t})),this.clearAllchecked())}})},c=a(6),u=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",t._b({attrs:{popup:t.showModal,title:t.modalTitle,cancel:1!=+t.modalType,"button-c":2==+t.modalType?"儲存":"確定"},on:{finish:function(e){return t.closeMod()},confirm:t.onConfirm}},"modal",Object.assign({},2==+t.modalType?{classBody:t.classBody}:{}),!1),[+t.modalType<2?a("p",{domProps:{textContent:t._s(t.modalMessage)}}):a("div",{staticClass:"modal-body"},[t._l(t.inputList.basic,(function(e){return a("div",{key:e.title,staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"},domProps:{textContent:t._s(e.title)}}),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])])})),t._v(" "),a("div",{staticClass:"form-group row"},[t._l(t.inputList.weight,(function(e,n){return[a("label",{key:e.title,class:[0===n?"col-sm-2":"col-sm-1","text-right","control-label","col-form-label"],domProps:{textContent:t._s(e.title)}}),t._v(" "),a("div",{key:e.title+n,staticClass:"col-sm-2"},["checkbox"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{placeholder:e.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?t._i(e.value,null)>-1:e.value},on:{change:function(a){var n=e.value,i=a.target,o=!!i.checked;if(Array.isArray(n)){var s=t._i(n,null);i.checked?s<0&&t.$set(e,"value",n.concat([null])):s>-1&&t.$set(e,"value",n.slice(0,s).concat(n.slice(s+1)))}else t.$set(e,"value",o)}}}):"radio"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{placeholder:e.placeholder,type:"radio"},domProps:{checked:t._q(e.value,null)},on:{change:function(a){return t.$set(e,"value",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{placeholder:e.placeholder,type:e.type},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])]})),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedRate.main,expression:"selectedRate.main"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.selectedRate,"main",e.target.multiple?a:a[0])}}},t._l(t.exchangeList,(function(e,n){var i=e.CurrencyName,o=e.Rate,s=e.Id;return a("option",{key:n,domProps:{value:s,textContent:t._s(i+" (匯率 "+o+")")}})})),0)])],2),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",domProps:{textContent:t._s(t.inputList.remark[0].title)}}),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputList.remark[0].value,expression:"inputList.remark[0].value"}],staticClass:"form-control",staticStyle:{height:"100px"},attrs:{placeholder:t.inputList.remark[0].placeholder},domProps:{value:t.inputList.remark[0].value},on:{input:function(e){e.target.composing||t.$set(t.inputList.remark[0],"value",e.target.value)}}})])]),t._v(" "),t.alertMessage?a("li",{staticStyle:{color:"#F00"},domProps:{textContent:t._s(t.alertMessage)}}):t._e(),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"form-group row",staticStyle:{"text-align":"left"}},[t._l(t.inputList.weightSub,(function(e,n){return[e.title?a("label",{key:e.title,staticClass:"col-sm-1 text-right control-label col-form-label",domProps:{textContent:t._s(e.title)}}):t._e(),t._v(" "),"checkbox"===e.type&&e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],key:n,class:["form-control","col-md-2",0!==n?"ml-1":""],attrs:{placeholder:e.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?t._i(e.value,null)>-1:e.value},on:{change:function(a){var n=e.value,i=a.target,o=!!i.checked;if(Array.isArray(n)){var s=t._i(n,null);i.checked?s<0&&t.$set(e,"value",n.concat([null])):s>-1&&t.$set(e,"value",n.slice(0,s).concat(n.slice(s+1)))}else t.$set(e,"value",o)}}}):"radio"===e.type&&e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],key:n,class:["form-control","col-md-2",0!==n?"ml-1":""],attrs:{placeholder:e.placeholder,type:"radio"},domProps:{checked:t._q(e.value,null)},on:{change:function(a){return t.$set(e,"value",null)}}}):e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],key:n,class:["form-control","col-md-2",0!==n?"ml-1":""],attrs:{placeholder:e.placeholder,type:e.type},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}}):t._e()]})),t._v(" "),a("div",{staticClass:"col-sm-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedRate.sub,expression:"selectedRate.sub"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.selectedRate,"sub",e.target.multiple?a:a[0])}}},t._l(t.exchangeList,(function(e,n){var i=e.CurrencyName,o=e.Rate,s=e.Id;return a("option",{key:n,domProps:{value:s,textContent:t._s(i+" (匯率 "+o+")")}})})),0)]),t._v(" "),a("button",{staticClass:"btn btn-outline-danger col-md-1 align-self-end ml-1",domProps:{textContent:t._s("加入")},on:{click:t.onModalAdd}})],2),t._v(" "),a("div",{staticClass:"form-group row"},[a("table",{staticClass:"table spec"},[a("thead",{staticClass:"thead-light"},t._l(["重量","運費","運費匯率","台幣運費","操作"],(function(e,n){return a("th",{key:e+n,staticStyle:{width:"180px"},attrs:{scope:"col"},domProps:{textContent:t._s(e)}})})),0),t._v(" "),a("tbody",t._l(t.modalFeeList,(function(e,n){var i=e.beginWeight,o=e.endWeight,s=e.fee,l=e.name,r=e.rate;return a("tr",{key:n},[a("td",{staticClass:"vertical-align",domProps:{textContent:t._s(i+" ~ "+o+" 公斤")}}),t._v(" "),a("td",{staticClass:"vertical-align",domProps:{textContent:t._s(s)}}),t._v(" "),a("td",{staticClass:"vertical-align",domProps:{textContent:t._s(l+" ("+r+")")}}),t._v(" "),a("td",{staticClass:"vertical-align",domProps:{textContent:t._s(s*r)}}),t._v(" "),a("td",[n+1>=t.modalFeeList.length?a("button",{staticClass:"btn btn-danger",staticStyle:{width:"85px"},domProps:{textContent:t._s("刪除")},on:{click:function(e){return t.modalFeeList.splice(n,1)}}}):t._e()])])})),0)])])],2)]),t._v(" "),a("div",{staticClass:"page-wrapper"},[t._m(0),t._v(" "),a("div",{staticClass:"container-fluid"},[a("buttonCont",{attrs:{"style-data":t.styleData},on:{onButton:function(e){return t.callModal(e)}}}),t._v(" "),a("data-table",{attrs:{pagination:t.pagination},on:{onPage:t.onPage,check:t.onAllCheck}},[a("template",{slot:"head"},[t._l(["集運商名稱","發貨方式及地點","首重"],(function(e,n){return a("th",{key:e+n,staticClass:"text-center py-4",staticStyle:{"min-width":"150px"},domProps:{textContent:t._s(e)}})})),t._v(" "),a("th",{staticClass:"head-th p-0"},[a("table",{staticClass:"text-center w-100",staticStyle:{"min-width":"550px"}},[a("tr",t._l(["重量","運費","運費匯率","台幣運費"],(function(e,n){return a("td",{key:e+n,staticClass:"py-4",staticStyle:{width:"25%"},domProps:{textContent:t._s(e)}})})),0)])]),t._v(" "),a("th",{staticClass:"text-center py-4",staticStyle:{"min-width":"200px"},domProps:{textContent:t._s("其他資訊")}})],2),t._v(" "),t._l(t.list,(function(e,n){var i=e.Id,o=e.Name,s=e.DeliveryLocation,l=(e.ContactPerson,e.PhoneNumber,e.Address,e.FirstKG),r=e.FirstFee,c=e.ExchangeRateId,u=e.Remark,d=e.Status,p=e.TransFeeData;return a("tr",{key:n},[a("td",[a("label",{staticClass:"customcheckbox m-b-20"},[a("input",{ref:"checkbox",refInFor:!0,attrs:{type:"checkbox"},on:{input:function(e){return t.onCheck({$event:e,Id:i,key:n})}}}),t._v(" "),a("span",{staticClass:"checkmark"})])]),t._v(" "),a("td",[a("li",[a("a",{staticClass:"product-spec",attrs:{href:"javascript:void(0)"},domProps:{textContent:t._s(o)}})]),t._v(" "),d?a("li",{staticStyle:{color:"#009688"}},[t._v("\n              正常使用 "),a("i",{staticClass:"m-r-10 mdi mdi-check"})]):a("li",{staticStyle:{color:"#acacac"}},[t._v("\n              停用\n            ")])]),t._v(" "),a("td",{domProps:{textContent:t._s(s)}}),t._v(" "),a("td",[a("li",{domProps:{textContent:t._s("首重 "+ +l+" 公斤")}}),t._v(" "),a("li",{domProps:{textContent:t._s("首重費： "+ +r)}}),t._v(" "),t._l(t.exchangeList.filter((function(t){return t.Id===c})),(function(e){var n=e.CurrencyName,i=e.Rate,o=e.Id;return a("li",{key:o,domProps:{textContent:t._s("幣別："+n+"("+i+")")}})}))],2),t._v(" "),a("td",{staticClass:"p-0"},[a("table",{staticClass:"table-spec",staticStyle:{"min-width":"550px !important",width:"100%"}},[a("tbody",t._l(p,(function(e,n){var i=e.BeginWeight,o=e.EndWeight,s=e.ExchangeRateId,l=(e.Id,e.NTPrice),r=e.Price;return a("tr",{key:n},[a("td",{staticStyle:{width:"25%"},domProps:{textContent:t._s(i+" ~ "+o+"公斤")}}),t._v(" "),a("td",{staticStyle:{width:"25%"},domProps:{textContent:t._s(+r)}}),t._v(" "),a("td",{staticStyle:{width:"25%"}},t._l(t.exchangeList.filter((function(t){return t.Id===s})),(function(e){var n=e.CurrencyName,i=e.Rate,o=e.Id;return a("span",{key:o,domProps:{textContent:t._s(n+"("+i+")")}})})),0),t._v(" "),a("td",{staticStyle:{width:"25%"},domProps:{textContent:t._s(+l)}})])})),0)])]),t._v(" "),a("td",[a("dropdown",{attrs:{title:"操作",items:[{text:"修改",type:"item",action:"edit"},{type:"divider"},{text:d?"停止使用":"啟用",type:"item",action:"toggle"},{text:"刪除",type:"item",action:"delete"}]},on:{onMenu:function(e){return t.onMenu(Object.assign({},e,{Id:i,Status:d,key:n}))}}}),t._v(" "),a("hr"),t._v("\n            備註："),a("br"),t._v(t._s(u||"(無備註)")+"\n          ")],1)])}))],2)],1)]),t._v(" "),t.showModal?a("div",{staticClass:"modal-backdrop fade show"}):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-breadcrumb"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 d-flex no-block align-items-center"},[e("h4",{staticClass:"page-title"},[this._v("\n            集運地點及運費\n          ")])])])])}],!1,null,null,null);e.default=u.exports}}]);
//# sourceMappingURL=translocation.js.map