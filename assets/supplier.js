(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{197:function(t,e,a){var o=a(204);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(7)("62b8cedc",o,!0,{})},198:function(t,e,a){var o=a(210);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(7)("7a98e4c7",o,!0,{})},199:function(t,e,a){var o=a(73),i=a(41),n=a(29),s=a(70),l=a(20),r=a(71),c=Object.getOwnPropertyDescriptor;e.f=a(4)?c:function(t,e){if(t=n(t),e=s(e,!0),r)try{return c(t,e)}catch(t){}if(l(t,e))return i(!o.f.call(t,e),t[e])}},200:function(t,e,a){var o=a(15),i=a(206).set;t.exports=function(t,e,a){var n,s=e.constructor;return s!==a&&"function"==typeof s&&(n=s.prototype)!==a.prototype&&o(n)&&i&&i(t,n),t}},201:function(t,e,a){var o=a(72),i=a(42).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,i)}},202:function(t,e,a){var o=a(15),i=a(21),n=a(1)("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==i(t))}},203:function(t,e,a){"use strict";var o=a(197);a.n(o).a},204:function(t,e,a){(t.exports=a(0)(!1)).push([t.i,".table-head-left[data-v-16a18136]{text-align:left}",""])},205:function(t,e,a){"use strict";var o=a(3),i=a(20),n=a(21),s=a(200),l=a(70),r=a(14),c=a(201).f,d=a(199).f,u=a(10).f,p=a(207).trim,m=o.Number,f=m,h=m.prototype,v="Number"==n(a(74)(h)),g="trim"in String.prototype,b=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var a,o,i,n=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===n||45===n){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+e}for(var s,r=e.slice(2),c=0,d=r.length;c<d;c++)if((s=r.charCodeAt(c))<48||s>i)return NaN;return parseInt(r,o)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(v?r((function(){h.valueOf.call(a)})):"Number"!=n(a))?s(new f(b(e)),a,m):b(e)};for(var y,_=a(4)?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)i(f,y=_[x])&&!i(m,y)&&u(m,y,d(f,y));m.prototype=h,h.constructor=m,a(9)(o,"Number",m)}},206:function(t,e,a){var o=a(15),i=a(5),n=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=a(22)(Function.call,a(199).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:o(t,a),t}}({},!1):void 0),check:n}},207:function(t,e,a){var o=a(19),i=a(40),n=a(14),s=a(208),l="["+s+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t,e,a){var i={},l=n((function(){return!!s[t]()||"​"!="​"[t]()})),r=i[t]=l?e(u):s[t];a&&(i[a]=r),o(o.P+o.F*l,"String",i)},u=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(r,"")),2&e&&(t=t.replace(c,"")),t};t.exports=d},208:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},209:function(t,e,a){"use strict";var o=a(198);a.n(o).a},210:function(t,e,a){(t.exports=a(0)(!1)).push([t.i,".modal-padding[data-v-1f09052c]{padding-right:17px;display:block}@media (max-width:991px){.modal-dialog[data-v-1f09052c]{max-width:unset;margin:1.75rem}}",""])},211:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o={name:"Modal",components:{},props:{popup:{type:Boolean,default:function(){return!1}},title:{type:String,default:function(){return"系統提示"}},buttonC:{type:String,default:function(){return"確定"}},classBody:{type:Object,default:function(){return this.classOrig}},cancel:{type:Boolean,default:function(){return!0}}},data:function(){return{show:!1,style:!1,classOrig:{"modal-dialog":!0,"modal-mid":!0,"modal-dialog-centered":!0}}},computed:{},watch:{popup:function(t){var e=this;this.style=t,setTimeout((function(){e.show=t}),1)}},created:function(){},methods:{closeIt:function(){this.$emit("finish")},confirm:function(){this.$emit("confirm")}}},i=(a(209),a(6)),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.style,expression:"style"}],class:{modal:!0,fade:!0,show:t.show,"modal-padding":t.style},attrs:{"aria-hidden":!t.show}},[a("div",{class:t.classBody,attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.closeIt()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),a("div",{staticClass:"modal-body",staticStyle:{"text-align":"center","font-size":"16px"}},[t._t("default")],2),t._v(" "),a("div",{staticClass:"modal-footer"},[t.cancel?a("button",{staticClass:"btn btn-outline-secondary",staticStyle:{width:"85px"},attrs:{type:"button"},on:{click:function(e){return t.closeIt()}}},[t._v("\n          取消\n        ")]):t._e(),t._v(" "),a("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.confirm()}}},[t._v("\n          "+t._s(t.buttonC)+"\n        ")])])])])])}),[],!1,null,"1f09052c",null).exports},212:function(t,e,a){"use strict";var o={name:"DataTable",components:{},props:{titles:{type:[Array,Object],default:function(){return[]}},pagination:{type:[Object],default:function(){return{Page:1,PageLimit:10,TotalNumber:0,TotalPage:1}}}},data:function(){return{}},computed:{pageInfo:function(){var t=this.pagination,e=t.Page,a=t.PageLimit,o=t.TotalNumber;return"顯示第 "+((e-1)*a+1)+" 至 "+(e>=t.TotalPage?o:(e+0)*a)+" 項結果，共 "+o+" 項"}},created:function(){},methods:{}},i=(a(203),a(6)),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("div",{staticClass:"table table-striped table-bordered dataTable no-footer",attrs:{id:"zero_config_wrapper"}},[a("div",{staticClass:"toolbar"}),t._v(" "),a("div",{staticClass:"dataTables_info",attrs:{id:"zero_config_info",role:"status","aria-live":"polite"},domProps:{textContent:t._s(t.pageInfo)}}),t._v(" "),a("table",{staticClass:"table table-striped table-bordered bg-white",attrs:{id:"zero_config"}},[a("thead",[a("tr",[a("th",{staticClass:"pb-4",staticStyle:{width:"10px"}},[a("label",{staticClass:"customcheckbox mb-3"},[a("input",{attrs:{id:"mainCheckbox",type:"checkbox"},on:{input:function(e){return t.$emit("check",e.target.checked)}}}),t._v(" "),a("span",{staticClass:"checkmark"})])]),t._v(" "),t._t("head",t._l(t.titles,(function(e){return a("th",{key:e,staticClass:"table-head-left",domProps:{textContent:t._s(e)}})})))],2)]),t._v(" "),a("tbody",[t._t("default")],2)]),t._v(" "),a("div",{staticClass:"dataTables_paginate paging_simple_numbers"},[a("ul",{staticClass:"pagination"},[a("li",{class:["paginate_button","page-item","previous"," ml-auto",{disabled:1==+t.pagination.Page}]},[a("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("onPage",t.pagination.Page-1)}}},[t._v("上一頁")])]),t._v(" "),t._l(t.pagination.TotalPage,(function(e){return a("li",{key:e,class:["paginate_button","page-item",{active:e===t.pagination.Page}]},[a("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)","aria-controls":"zero_config"},domProps:{textContent:t._s(e)},on:{click:function(a){return t.$emit("onPage",e)}}})])})),t._v(" "),a("li",{class:["paginate_button","page-item","previous"," mr-auto",{disabled:+t.pagination.Page>=+t.pagination.TotalPage}]},[a("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("onPage",t.pagination.Page+1)}}},[t._v("下一頁")])])],2)])])])])])])])}),[],!1,null,"16a18136",null);e.a=n.exports},213:function(t,e,a){"use strict";a(205);var o={name:"DropdownMenu",components:{},props:{title:{type:[String,Number],default:"title"},items:{type:[Array,Object],default:function(){return[]}},type:{type:[String,Number],default:"0"},noDot:{default:!1}},data:function(){return{show:!1}},computed:{buttonType:function(){var t;return null!=(t=["btn-outline-secondary","btn-danger"][this.type])?t:"btn-outline-secondary"}},created:function(){},methods:{toggleMenu:function(){var t=this;this.show=!this.show;var e=document.body;this.show?setTimeout((function(){e.addEventListener("click",t.toggleMenu)}),0):e.removeEventListener("click",this.toggleMenu)},onMenu:function(t){var e=t.text,a=t.type,o=t.index,i=t.action;this.$emit("onMenu",{text:e,type:a,index:o,action:i}),setTimeout(this.toggleMenu,0)}}},i=a(6),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["dropdown",{show:t.show}]},[a("a",{class:["btn","dropdown-toggle",t.buttonType],attrs:{href:"javascript:void(0)",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":t.show},on:{click:t.toggleMenu}},[t.noDot?t._e():a("i",{staticClass:"m-r-10 mdi mdi-dots-horizontal"}),t._v(" "),a("span",{domProps:{textContent:t._s(t.title)}})]),t._v(" "),a("div",{class:["dropdown-menu",{show:t.show}],attrs:{"aria-labelledby":"dropdownMenuLink"},on:{click:function(t){t.stopPropagation()}}},[t._l(t.items,(function(e,o){var i=e.text,n=e.type,s=e.action;return[i?a("a",{key:o,class:"dropdown-"+(n||"c"),attrs:{href:"javascript:void(0)"},domProps:{textContent:t._s(i)},on:{click:function(e){return e.stopPropagation(),t.onMenu({text:i,type:n,index:o,action:s})}}}):a("div",{key:o,staticClass:"dropdown-divider"})]}))],2)])}),[],!1,null,null,null);e.a=n.exports},214:function(t,e,a){"use strict";var o=a(19),i=a(75)(!0);o(o.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(76)("includes")},215:function(t,e,a){"use strict";var o=a(19),i=a(216);o(o.P+o.F*a(217)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},216:function(t,e,a){var o=a(202),i=a(40);t.exports=function(t,e,a){if(o(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}},217:function(t,e,a){var o=a(1)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[o]=!1,!"/./"[t](e)}catch(t){}}return!0}},218:function(t,e,a){"use strict";var o={color:{1:"btn-outline-danger",2:"btn-outline-secondary",3:"btn-outline-warning",4:"btn-outline-success"},mdi:{1:"mdi-plus",2:"mdi-arrow-up-bold-circle",3:"mdi-arrow-down-bold-circle-outline",4:"mdi-delete",5:"mdi-playlist-plus"},message:{1:"",2:"是否將所選項目改為「正常使用」？",3:"是否將所選項目改為「停止使用」？",4:"是否刪除所選的項目？"}},i={name:"ButtonTop",components:{},props:{forBut:{type:Object},forMod:{type:Object}},data:function(){return{}},computed:{switchStyle:function(){return{color:o.color[this.forBut.color],mdi:o.mdi[this.forBut.mdi],text:this.forBut.text}||{}}},created:function(){},methods:{onButton:function(){var t={title:this.forMod.title,type:this.forMod.type,message:o.message[this.forMod.message],action:this.forMod.action};this.$emit("onButton",t)}}},n=a(6),s={name:"ButtonCont",components:{buttonTop:Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:["btn",t.switchStyle.color],staticStyle:{"margin-right":"3px"},attrs:{type:"button"},on:{click:function(e){return t.onButton()}}},[a("i",{class:["mdi",t.switchStyle.mdi],staticStyle:{"font-style":"normal"}},[t._v("\n    "+t._s(t.switchStyle.text)+"\n  ")])])}),[],!1,null,null,null).exports},props:{styleData:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},created:function(){},methods:{onButton:function(t){this.$emit("onButton",t)}}},l=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card border-bottom",staticStyle:{"overflow-x":"scroll"}},[a("div",{staticClass:"card-body",staticStyle:{"min-width":"max-content"}},[a("div",{staticClass:"row mb-3",attrs:{id:"ShipTypeDiv"}},[a("div",{staticClass:"col-md-12",staticStyle:{padding:"8px 0px 0px 0px"}},[a("div",{attrs:{id:"NormalMode"}},t._l(t.styleData,(function(e,o){return a("buttonTop",{key:o,attrs:{"for-but":e.forBut,"for-mod":e.forMod},on:{onButton:function(e){return t.onButton(e)}}})})),1)])]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.a=l.exports},226:function(t,e,a){var o=a(235);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(7)("c1260cd0",o,!0,{})},234:function(t,e,a){"use strict";var o=a(226);a.n(o).a},235:function(t,e,a){(e=t.exports=a(0)(!1)).i(a(236),""),e.push([t.i,"",""])},236:function(t,e,a){(t.exports=a(0)(!1)).push([t.i,".custom-checkbox.filter{margin:5px 40px 0 0;padding-top:2px}.input-group.inline{display:inline}.product-spec,.product-stock{color:#435567}.product-spec:hover,.product-stock:hover{color:#3d7dcd}.el-card-item{margin:0;padding:0}#EditStockModal .modal-body .row .vertical-align{margin-top:10px}#EditStockModal .modal-body .row{height:40px}.table-spec td{background-color:none;border:0 solid #ccc}.table-spec th{background-color:#fff}.head-th{padding:0}.head-th td{border-top:none;border-bottom:none}.head-th td,.td-spec{background-color:#fff}.td-spec{padding:0}li{list-style:none;padding:3px 0}.bootstrap-tagsinput{width:100%!important}#purchase .vertical-align,#spec .vertical-align{padding-top:25px}#AddProductModal a.nav-link.active{background-color:transparent!important;border-bottom:3px solid #db593b;color:#db593b!important}#AddProductModal a.nav-link{color:#000!important}#AddProductModal a.nav-link:hover{color:#db593b!important}#AddPurchaseModal a.nav-link.active{background-color:transparent!important;border-bottom:3px solid #db593b;color:#db593b!important}#AddPurchaseModal a.nav-link{color:#000!important}#AddPurchaseModal a.nav-link:hover{color:#db593b!important}",""])},243:function(t,e,a){"use strict";a.r(e);a(43),a(30),a(214),a(215),a(23);var o=a(212),i=a(213),n=a(211),s={name:"AddSupplier",components:{},props:{},data:function(){return{}},computed:{},created:function(){},methods:{}},l=a(6),r=Object(l.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("*廠商名稱")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入"}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("統一編號")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入"}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("連絡人")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入"}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("室內電話")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入"}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("手機")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入"}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("地址")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入"}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("Email")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入"}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("網址")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入"}})])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"cono1"}},[t._v("備註")]),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("textarea",{staticClass:"form-control",staticStyle:{height:"100px"}})])])])}],!1,null,null,null).exports,c=a(218),d=a(16),u={name:"Supplier",components:{dataTable:o.a,dropdown:i.a,modal:n.a,addSupplier:r,buttonCont:c.a},data:function(){return{state:{showAdd:!1,showSuccess:!1},showModal:!1,modalTitle:"",modalMessage:"",modalType:0,alertMessage:"",classBody:{"modal-dialog":!0,"modal-900":!0},checkedList:[],inputList:[{title:"*廠商名稱",placeholder:"請輸入",value:"",type:"input"},{title:"統一編號",placeholder:"請輸入",value:"",type:"input"},{title:"連絡人",placeholder:"請輸入",value:"",type:"input"},{title:"室內電話",placeholder:"請輸入",value:"",type:"input"},{title:"手機",placeholder:"請輸入",value:"",type:"input"},{title:"地址",placeholder:"請輸入",value:"",type:"input"},{title:"Email",placeholder:"請輸入",value:"",type:"input"},{title:"網址",placeholder:"請輸入",value:"",type:"input"},{title:"備註",placeholder:"",value:"",type:"textarea"}],styleData:[{forBut:{color:1,mdi:1,text:"新增供應商"},forMod:{title:"新增供應商",type:"2",message:"1",action:"onCreate"}},{forBut:{color:2,mdi:2,text:"正常使用"},forMod:{title:"",type:"",message:2,action:"onEnableAll"}},{forBut:{color:2,mdi:3,text:"停止使用"},forMod:{title:"",type:"",message:3,action:"onStopAll"}},{forBut:{color:3,mdi:4,text:"刪除"},forMod:{title:"",type:"",message:4,action:"onDeleteAll"}}]}},computed:Object.assign({},Object(d.c)({list:"Supplier/list",pagination:"Supplier/pagination"})),created:function(){},mounted:function(){this.getList(Object.assign({},this.pagination,{page:1,PageLimit:10}))},methods:Object.assign({},Object(d.b)({getList:"Supplier/read",addSupplier:"Supplier/create",changeSetting:"Supplier/modify",deleteSupplier:"Supplier/deleted",changeStatus:"Supplier/update"}),{callModal:function(t){var e=t.title,a=t.type,o=t.message,i=t.action;document.body.classList.add("modal-open"),document.body.style.paddingRight="17px",this.showModal=!0,this.modalTitle=e||"系統提示",this.modalMessage=o||"",this.modalType=a||0,this.action=i||"closeMod",this.alertMessage=""},closeMod:function(){document.body.classList.remove("modal-open"),document.body.style.paddingRight=null,this.showModal=!1,this.modalMessage="",this.alertMessage=""},onConfirm:function(){var t=this[this.action];"function"==typeof t&&t()},onCreate:function(){var t=this,e=this.inputList,a=e[0].value,o=e[1].value,i=e[2].value,n=e[3].value,s=e[4].value,l=e[5].value,r=e[6].value,c=e[7].value,d=e[8].value;a?this.addSupplier({Name:a,TaxID:o,ContactPerson:i,Tel:n,PhoneNumber:s,Address:l,Email:r,WebUrl:c,Status:!0,Remark:d}).then((function(e){t.closeMod(),t.callModal({message:"新增成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.alertMessage=e.message||"不明錯誤"})):this.alertMessage="所有星號(*)必填"},onEdit:function(){var t=this,e=this.inputList,a=e[0].value,o=e[1].value,i=e[2].value,n=e[3].value,s=e[4].value,l=e[5].value,r=e[6].value,c=e[7].value,d=e[8].value;a?this.changeSetting({Id:this.modifyingId,data:{Name:a,TaxID:o,ContactPerson:i,Tel:n,PhoneNumber:s,Address:l,Email:r,WebUrl:c,Status:!0,Remark:d}}).then((function(e){t.closeMod(),t.callModal({message:"修改成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.alertMessage=e.message||"不明錯誤"})):this.alertMessage="所有星號(*)必填"},onMenu:function(t){var e=this,a=(t.text,t.type,t.index,t.action),o=t.Id,i=t.Status,n=t.key;if("edit"===a){var s=this.list[n],l=s.Name,r=s.TaxID,c=s.ContactPerson,d=s.Tel,u=s.PhoneNumber,p=s.Address,m=s.Email,f=s.WebUrl,h=s.Remark;this.inputList[0].value=l,this.inputList[1].value=r,this.inputList[2].value=c,this.inputList[3].value=d,this.inputList[4].value=u,this.inputList[5].value=p,this.inputList[6].value=m,this.inputList[7].value=f,this.inputList[8].value=h,this.callModal({message:"",title:"修改供應商資料",action:"onEdit",type:2}),this.modifyingId=o}else"delete"===a?this.deleteSupplier(o).then((function(t){e.callModal({message:"刪除成功",type:1}),e.getList(Object.assign({},e.pagination))})).catch((function(t){e.callModal({message:t.message||"不明錯誤",type:1})})):"toggle"===a&&this.changeStatus({Id:o,Status:!i}).then((function(t){e.callModal({message:"修改成功",type:1}),e.getList(Object.assign({},e.pagination))})).catch((function(t){e.callModal({message:t.message||"不明錯誤",type:1})}))},onCheck:function(t){var e=t.$event,a=t.Id,o=(t.key,e.target.checked);if(o&&!this.checkedList.includes(a)&&this.checkedList.push(a),!o&&this.checkedList.includes(a)){var i=this.checkedList.indexOf(a);i>-1&&this.checkedList.splice(i,1)}},onAllCheck:function(t){var e=this;if(t){var a=this.$refs.checkbox;(Array.isArray(a)?a:[a]).forEach((function(t){t.checked=!0})),this.checkedList.splice(0),this.list.forEach((function(t){var a=t.Id;e.checkedList.push(a)}))}else this.clearAllchecked()},clearAllchecked:function(){var t=this.$refs.checkbox;(Array.isArray(t)?t:[t]).forEach((function(t){t.checked=!1})),this.checkedList.splice(0)},onEnableAll:function(){var t=this;if(this.checkedList.length){var e=[];this.checkedList.forEach((function(a){e.push(t.changeStatus({Id:a,Status:!0}))})),Promise.allSettled(e).then((function(e){t.callModal({message:"修改成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.callModal({message:e.message||"不明錯誤",type:1})}))}},onStopAll:function(){var t=this;if(this.checkedList.length){var e=[];this.checkedList.forEach((function(a){e.push(t.changeStatus({Id:a,Status:!1}))})),Promise.allSettled(e).then((function(e){t.callModal({message:"修改成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.callModal({message:e.message||"不明錯誤",type:1})}))}},onDeleteAll:function(){var t=this;if(this.checkedList.length){var e=[];this.checkedList.forEach((function(a){e.push(t.deleteSupplier(a))})),Promise.allSettled(e).then((function(e){t.clearAllchecked(),t.callModal({message:"刪除成功",type:1}),t.getList(Object.assign({},t.pagination))})).catch((function(e){t.clearAllchecked(),t.callModal({message:e.message||"不明錯誤",type:1})}))}},onPage:function(t){+t!=+this.pagination.Page&&(this.getList(Object.assign({},this.pagination,{Page:t})),this.clearAllchecked())}})},p=(a(234),Object(l.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("modal",t._b({attrs:{popup:t.showModal,title:t.modalTitle,cancel:1!=+t.modalType,"button-c":2==+t.modalType?"儲存":"確定"},on:{finish:function(e){return t.closeMod()},confirm:t.onConfirm}},"modal",Object.assign({},2==+t.modalType?{classBody:t.classBody}:{}),!1),[+t.modalType<2?a("p",{domProps:{textContent:t._s(t.modalMessage)}}):a("div",{staticClass:"modal-body"},[t._l(t.inputList,(function(e){return a("div",{key:e.title,staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"},domProps:{textContent:t._s(e.title)}}),t._v(" "),a("div",{staticClass:"col-sm-10"},["input"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}}):a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"form-control",staticStyle:{height:"100px"},attrs:{placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])])})),t._v(" "),t.alertMessage?a("li",{staticStyle:{color:"#F00"},domProps:{textContent:t._s(t.alertMessage)}}):t._e()],2)]),t._v(" "),a("div",{staticClass:"page-wrapper"},[t._m(0),t._v(" "),a("div",{staticClass:"container-fluid"},[a("buttonCont",{attrs:{"style-data":t.styleData},on:{onButton:function(e){return t.callModal(e)}}}),t._v(" "),a("data-table",{attrs:{titles:["廠商名稱","連絡人","室內電話","手機","網址","其他資訊"],pagination:t.pagination},on:{onPage:t.onPage,check:t.onAllCheck}},t._l(t.list,(function(e,o){var i=e.Name,n=e.TaxID,s=e.ContactPerson,l=e.Tel,r=e.PhoneNumber,c=e.WebUrl,d=e.Status,u=e.Remark,p=e.Id;return a("tr",{key:o},[a("td",[a("label",{staticClass:"customcheckbox m-b-20"},[a("input",{ref:"checkbox",refInFor:!0,attrs:{type:"checkbox"},on:{input:function(e){return t.onCheck({$event:e,Id:p,key:o})}}}),t._v(" "),a("span",{staticClass:"checkmark"})])]),t._v(" "),a("td",[a("li",[a("a",{staticClass:"product-spec",attrs:{href:"javascript:void(0)"},domProps:{textContent:t._s(i)}})]),t._v(" "),a("li",{staticStyle:{color:"#acacac"}},[t._v("\n              統一編號："),a("br"),t._v(t._s(n||"無資料")+"\n            ")]),t._v(" "),d?a("li",{staticStyle:{color:"#009688"}},[t._v("\n              正常使用 "),a("i",{staticClass:"m-r-10 mdi mdi-check"})]):a("li",{staticStyle:{color:"#acacac"}},[t._v("\n              停用\n            ")])]),t._v(" "),a("td",{domProps:{textContent:t._s(s)}}),t._v(" "),a("td",{domProps:{textContent:t._s(l)}}),t._v(" "),a("td",{domProps:{textContent:t._s(r)}}),t._v(" "),a("td",{domProps:{textContent:t._s(c)}}),t._v(" "),a("td",[a("dropdown",{attrs:{title:"操作",items:[{text:"修改",type:"item",action:"edit"},{type:"divider"},{text:d?"停止使用":"啟用",type:"item",action:"toggle"},{text:"刪除",type:"item",action:"delete"}]},on:{onMenu:function(e){return t.onMenu(Object.assign({},e,{Id:p,Status:d,key:o}))}}}),t._v(" "),a("hr"),t._v("\n            備註："),a("br"),t._v(t._s(u||"(無備註)")+"\n          ")],1)])})),0)],1)]),t._v(" "),t.showModal?a("div",{staticClass:"modal-backdrop fade show"}):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-breadcrumb"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 d-flex no-block align-items-center"},[e("h4",{staticClass:"page-title"},[this._v("\n            供應商\n          ")])])])])}],!1,null,null,null));e.default=p.exports}}]);
//# sourceMappingURL=supplier.js.map