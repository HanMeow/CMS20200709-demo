(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(t,a,s){var e=s(198);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(9)("5988a4f6",e,!0,{})},195:function(t,a,s){var e=s(206);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(9)("0956f473",e,!0,{})},196:function(t,a,s){var e=s(72),i=s(40),o=s(28),l=s(69),c=s(21),n=s(70),r=Object.getOwnPropertyDescriptor;a.f=s(4)?r:function(t,a){if(t=o(t),a=l(a,!0),n)try{return r(t,a)}catch(t){}if(c(t,a))return i(!e.f.call(t,a),t[a])}},197:function(t,a,s){"use strict";var e=s(194);s.n(e).a},198:function(t,a,s){(t.exports=s(0)(!1)).push([t.i,".table-head-left[data-v-6cb55282]{text-align:left}",""])},199:function(t,a,s){"use strict";var e=s(3),i=s(21),o=s(22),l=s(200),c=s(69),n=s(16),r=s(202).f,d=s(196).f,v=s(11).f,p=s(203).trim,u=e.Number,m=u,_=u.prototype,b="Number"==o(s(73)(_)),f="trim"in String.prototype,h=function(t){var a=c(t,!1);if("string"==typeof a&&a.length>2){var s,e,i,o=(a=f?a.trim():p(a,3)).charCodeAt(0);if(43===o||45===o){if(88===(s=a.charCodeAt(2))||120===s)return NaN}else if(48===o){switch(a.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+a}for(var l,n=a.slice(2),r=0,d=n.length;r<d;r++)if((l=n.charCodeAt(r))<48||l>i)return NaN;return parseInt(n,e)}}return+a};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var a=arguments.length<1?0:t,s=this;return s instanceof u&&(b?n((function(){_.valueOf.call(s)})):"Number"!=o(s))?l(new m(h(a)),s,u):h(a)};for(var C,g=s(4)?r(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;g.length>y;y++)i(m,C=g[y])&&!i(u,C)&&v(u,C,d(m,C));u.prototype=_,_.constructor=u,s(10)(e,"Number",u)}},200:function(t,a,s){var e=s(15),i=s(201).set;t.exports=function(t,a,s){var o,l=a.constructor;return l!==s&&"function"==typeof l&&(o=l.prototype)!==s.prototype&&e(o)&&i&&i(t,o),t}},201:function(t,a,s){var e=s(15),i=s(5),o=function(t,a){if(i(t),!e(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,e){try{(e=s(23)(Function.call,s(196).f(Object.prototype,"__proto__").set,2))(t,[]),a=!(t instanceof Array)}catch(t){a=!0}return function(t,s){return o(t,s),a?t.__proto__=s:e(t,s),t}}({},!1):void 0),check:o}},202:function(t,a,s){var e=s(71),i=s(41).concat("length","prototype");a.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},203:function(t,a,s){var e=s(20),i=s(39),o=s(16),l=s(204),c="["+l+"]",n=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),d=function(t,a,s){var i={},c=o((function(){return!!l[t]()||"​"!="​"[t]()})),n=i[t]=c?a(v):l[t];s&&(i[s]=n),e(e.P+e.F*c,"String",i)},v=d.trim=function(t,a){return t=String(i(t)),1&a&&(t=t.replace(n,"")),2&a&&(t=t.replace(r,"")),t};t.exports=d},204:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},205:function(t,a,s){"use strict";var e=s(195);s.n(e).a},206:function(t,a,s){(t.exports=s(0)(!1)).push([t.i,".modal-padding[data-v-79ecfdd2]{padding-right:17px;display:block}",""])},207:function(t,a,s){"use strict";var e={name:"DataTable",components:{},props:{titles:{type:[Array,Object],default:function(){return[]}},pagination:{type:[Object],default:function(){return{Page:1,PageLimit:10,TotalNumber:0,TotalPage:1}}}},data:function(){return{}},computed:{pageInfo:function(){var t=this.pagination,a=t.Page,s=t.PageLimit,e=t.TotalNumber;return"顯示第 "+((a-1)*s+1)+" 至 "+(a>=t.TotalPage?e:(a+0)*s)+" 項結果，共 "+e+" 項"}},created:function(){},methods:{}},i=(s(197),s(6)),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"table-responsive"},[s("div",{staticClass:"table table-striped table-bordered dataTable no-footer",attrs:{id:"zero_config_wrapper"}},[s("div",{staticClass:"toolbar"}),t._v(" "),s("div",{staticClass:"dataTables_info",attrs:{id:"zero_config_info",role:"status","aria-live":"polite"},domProps:{textContent:t._s(t.pageInfo)}}),t._v(" "),s("table",{staticClass:"table table-striped table-bordered bg-white",attrs:{id:"zero_config"}},[s("thead",[s("tr",[s("th",{staticClass:"pb-4",staticStyle:{width:"10px"}},[s("label",{staticClass:"customcheckbox mb-3"},[s("input",{attrs:{id:"mainCheckbox",type:"checkbox"},on:{input:function(a){return t.$emit("check",a.target.checked)}}}),t._v(" "),s("span",{staticClass:"checkmark"})])]),t._v(" "),t._t("head",t._l(t.titles,(function(a){return s("th",{key:a,staticClass:"table-head-left",domProps:{textContent:t._s(a)}})})))],2)]),t._v(" "),s("tbody",[t._t("default")],2)]),t._v(" "),s("div",{staticClass:"dataTables_paginate paging_simple_numbers",attrs:{id:"zero_config_paginate"}},[s("ul",{staticClass:"pagination"},[s("li",{class:["paginate_button","page-item","previous",{disabled:1==+t.pagination.Page}],attrs:{id:"zero_config_previous"}},[s("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.$emit("onPage",t.pagination.Page-1)}}},[t._v("上一頁")])]),t._v(" "),t._l(t.pagination.TotalPage,(function(a){return s("li",{key:a,class:["paginate_button","page-item",{active:a===t.pagination.Page}]},[s("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)","aria-controls":"zero_config"},domProps:{textContent:t._s(a)},on:{click:function(s){return t.$emit("onPage",a)}}})])})),t._v(" "),s("li",{class:["paginate_button","page-item","previous",{disabled:+t.pagination.Page>=+t.pagination.TotalPage}],attrs:{id:"zero_config_next"},on:{click:function(a){return t.$emit("onPage",t.pagination.Page+1)}}},[s("a",{staticClass:"page-link",attrs:{href:"javascript:void(0)"}},[t._v("下一頁")])])],2)])])])])])])])}),[],!1,null,"6cb55282",null);a.a=o.exports},208:function(t,a,s){"use strict";s(199);var e={name:"dropdown-menu",props:{title:{type:[String,Number],default:"title"},items:{type:[Array,Object],default:function(){return[]}},noDot:{default:!1}},data:function(){return{show:!1}},components:{},methods:{toggleMenu:function(){var t=this;this.show=!this.show;var a=document.body;this.show?setTimeout((function(){a.addEventListener("click",t.toggleMenu)}),0):a.removeEventListener("click",this.toggleMenu)}},created:function(){},computed:{}},i=s(6),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{class:["dropdown",{show:t.show}]},[s("a",{staticClass:"btn btn-outline-secondary dropdown-toggle",attrs:{href:"javascript:void(0)",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":t.show},on:{click:t.toggleMenu}},[t.noDot?t._e():s("i",{staticClass:"m-r-10 mdi mdi-dots-horizontal"}),t._v(" "),s("span",{domProps:{textContent:t._s(t.title)}})]),t._v(" "),s("div",{class:["dropdown-menu",{show:t.show}],attrs:{"aria-labelledby":"dropdownMenuLink"},on:{click:function(t){t.stopPropagation()}}},[t._l(t.items,(function(a,e){var i=a.text,o=a.type,l=a.action;return[i?s("a",{key:e,class:"dropdown-"+(o||"c"),attrs:{href:"javascript:void(0)"},domProps:{textContent:t._s(i)},on:{click:function(a){return a.stopPropagation(),t.$emit("onMenu",{text:i,type:o,index:e,action:l})}}}):s("div",{key:e,staticClass:"dropdown-divider"})]}))],2)])}),[],!1,null,null,null);a.a=o.exports},209:function(t,a,s){"use strict";var e={name:"modal",props:{popup:{type:Boolean,default:function(){return!1}},title:{type:String,default:function(){return"系統提示"}},buttonC:{type:String,default:function(){return"確定"}},classBody:{type:Object,default:function(){return this.classOrig}},cancel:{type:Boolean,default:function(){return!0}}},data:function(){return{show:!1,style:!1,classOrig:{"modal-dialog":!0,"modal-mid":!0,"modal-dialog-centered":!0}}},components:{},methods:{closeIt:function(){this.$emit("finish")},confirm:function(){this.$emit("confirm")}},watch:{popup:function(t){var a=this;this.style=t,setTimeout((function(){a.show=t}),1)}},created:function(){},computed:{}},i=(s(205),s(6)),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.style,expression:"style"}],class:{modal:!0,fade:!0,show:t.show,"modal-padding":t.style},attrs:{"aria-hidden":!t.show,id:"MessageModal",tabindex:"-1","data-keyboard":"false","data-backdrop":"static",role:"dialog","aria-labelledby":"exampleModalLabel"}},[s("div",{class:t.classBody,attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(a){return t.closeIt()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body",staticStyle:{"text-align":"center","font-size":"16px"}},[t._t("default")],2),t._v(" "),s("div",{staticClass:"modal-footer"},[t.cancel?s("button",{staticClass:"btn btn-outline-secondary",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){return t.closeIt()}}},[t._v("取消")]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){return t.confirm()}}},[t._v(t._s(t.buttonC))])])])])])}),[],!1,null,"79ecfdd2",null);a.a=o.exports},225:function(t,a,s){t.exports=s.p+"assets/img/sample-73f39ecae92b2f4d6d01bfafab9681f6.jpg"},244:function(t,a,s){"use strict";s.r(a);var e=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"AddPurchaseModal",tabindex:"-1","data-keyboard":"false","data-backdrop":"static",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-900",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("新增採購單")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("商品總金額")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"7585"}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("折扣")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"20"}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("中轉運費")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"120"}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("集運運費")]),t._v(" "),e("div",{staticClass:"col-sm-2"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"350"}})]),t._v(" "),e("label",{staticClass:"col-sm-8 text-left control-label col-form-label",attrs:{for:"lname"}},[t._v("義烏空運普貨 每公斤12元 總重量8230g")])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("總金額")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"7980"}})])]),t._v(" "),e("ul",{staticClass:"nav nav-pills",staticStyle:{"border-bottom":"1px solid #eaecef"}},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#product",role:"tab"}},[e("span",{staticClass:"hidden-sm-up"}),t._v(" "),e("span",{staticClass:"hidden-xs-down"},[t._v("商品內容")])])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#desc",role:"tab"}},[e("span",{staticClass:"hidden-sm-up"}),t._v(" "),e("span",{staticClass:"hidden-xs-down"},[t._v("物流資訊")])])])]),t._v(" "),e("div",{staticClass:"tab-content tabcontent-border"},[e("div",{staticClass:"tab-pane p-20 active",attrs:{id:"product",role:"tabpanel"}},[e("div",{staticClass:"form-group row",staticStyle:{"text-align":"left"}},[e("div",{staticClass:"col-sm-3"},[e("select",{staticClass:"form-control"},[e("option",[t._v("商品名稱")]),t._v(" "),e("option",[t._v("商品主貨號")])])]),t._v(" "),e("input",{staticClass:"form-control col-md-3 basicAutoComplete",staticStyle:{"margin-left":"5px"},attrs:{type:"text",placeholder:"請輸入"}})]),t._v(" "),e("div",{staticClass:"form-group row"},[e("table",{staticClass:"table spec"},[e("thead",{staticClass:"thead-light"},[e("tr",[e("th",{staticStyle:{width:"36%"},attrs:{scope:"col"}},[t._v("商品內容")]),t._v(" "),e("th",{staticStyle:{width:"11%"},attrs:{scope:"col"}},[t._v("數量")]),t._v(" "),e("th",{staticStyle:{width:"11%"},attrs:{scope:"col"}},[t._v("單價")]),t._v(" "),e("th",{staticStyle:{width:"14%"},attrs:{scope:"col"}},[t._v("幣別")]),t._v(" "),e("th",{staticStyle:{width:"7%"},attrs:{scope:"col"}},[t._v("小計")]),t._v(" "),e("th",{staticStyle:{width:"17%"},attrs:{scope:"col"}},[t._v("備註")]),t._v(" "),e("th",{staticStyle:{width:"4%"},attrs:{scope:"col"}},[t._v("操作")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"vertical-align"},[e("div",{staticClass:"d-flex flex-row comment-row"},[e("div",{staticClass:"p-2"},[e("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:s(225)}})]),t._v(" "),e("div",{staticClass:"comment-text w-100"},[e("li",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t加大加長滑鼠墊 80*30cm\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("大尺寸,彩色六小喵")]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("選項貨號：00023123")]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("重量：350g")])])])]),t._v(" "),e("td",[e("input",{staticClass:"form-control",attrs:{type:"text",value:"12"}})]),t._v(" "),e("td",[e("input",{staticClass:"form-control",attrs:{type:"text",value:"8.45"}})]),t._v(" "),e("td",{staticClass:"vertical-align"},[e("li",[t._v("人民幣")]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("匯率：4.29")])]),t._v(" "),e("td",{staticClass:"vertical-align"},[e("li",[t._v("1550")]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("18245g")])]),t._v(" "),e("td",[e("input",{staticClass:"form-control",attrs:{type:"text"}})]),t._v(" "),e("td",[e("div",{staticClass:"dropdown"},[e("a",{staticClass:"btn btn-outline-danger btn-sm dropdown-toggle",attrs:{href:"javascript:void(0)",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("i",{staticClass:"m-r-10 mdi mdi-dots-horizontal"}),t._v("操作\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuLink"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"}},[t._v("入庫")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"}},[t._v("刪除")])])])])])])])])]),t._v(" "),e("div",{staticClass:"tab-pane p-20",attrs:{id:"desc",role:"tabpanel"}},[e("div",{staticClass:"form-group row",staticStyle:{"margin-top":"20px"}},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("採購平台")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("select",{staticClass:"form-control",staticStyle:{width:"300px"}},[e("option",[t._v("--請選擇採購平台")]),t._v(" "),e("option",[t._v("阿里巴巴")]),t._v(" "),e("option",[t._v("淘宝")]),t._v(" "),e("option",[t._v("其他")])])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("訂單編號")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"1082978944313745859"}})])]),t._v(" "),e("div",{staticClass:"form-group row",staticStyle:{"margin-top":"20px"}},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("物流公司")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("select",{staticClass:"form-control",staticStyle:{width:"300px"}},[e("option",[t._v("--請選擇物流公司")]),t._v(" "),e("option",[t._v("申通快递")]),t._v(" "),e("option",[t._v("順豐")]),t._v(" "),e("option",[t._v("其他")])])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("物流號碼")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"773043660095835"}})])]),t._v(" "),e("div",{staticClass:"form-group row",staticStyle:{"margin-top":"20px"}},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("集運地點及運費")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("select",{staticClass:"form-control",staticStyle:{width:"300px"}},[e("option",[t._v("--請選擇集運方式")]),t._v(" "),e("option",[t._v("大洋 義烏空運普貨 每公斤12元")]),t._v(" "),e("option",[t._v("大洋 義烏空運特貨 每公斤13元")]),t._v(" "),e("option",[t._v("大洋 義烏海快普貨 每公斤9元")]),t._v(" "),e("option",[t._v("大洋 義烏海快特貨 每公斤10元")]),t._v(" "),e("option",[t._v("大洋 深圳空運普貨 每公斤13元")]),t._v(" "),e("option",[t._v("大洋 深圳空運特貨 每公斤15元")])])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"lname"}},[t._v("集運單號")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"",value:"773043660095835"}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 text-right control-label col-form-label",attrs:{for:"cono1"}},[t._v("備註")]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("textarea",{staticClass:"form-control",staticStyle:{height:"100px"}})])])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")]),t._v(" "),e("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button",id:"SavePurchaseBtn","data-dismiss":"modal"}},[t._v("儲存")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"GetProductModal",tabindex:"-1","data-keyboard":"false","data-backdrop":"static",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("加大加長滑鼠墊 80*30cm")]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-group row"},[s("table",{staticClass:"table spec"},[s("thead",{staticClass:"thead-light"},[s("tr",[s("th",{staticStyle:{width:"150px"},attrs:{scope:"col"}},[t._v("商品選項貨號")]),t._v(" "),s("th",{staticStyle:{width:"150px"},attrs:{scope:"col"}},[t._v("規格")]),t._v(" "),s("th",{staticStyle:{width:"150px"},attrs:{scope:"col"}},[t._v("採購中")]),t._v(" "),s("th",{staticStyle:{width:"150px"},attrs:{scope:"col"}},[t._v("未配貨")]),t._v(" "),s("th",{staticStyle:{width:"150px"},attrs:{scope:"col"}},[t._v("可用庫存")]),t._v(" "),s("th",{staticStyle:{width:"150px"},attrs:{scope:"col"}},[t._v("數量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"vertical-align"},[t._v("0478601")]),t._v(" "),s("td",{staticClass:"vertical-align"},[t._v("大尺寸,紅色")]),t._v(" "),s("td",{staticClass:"vertical-align"},[t._v("1280")]),t._v(" "),s("td",{staticClass:"vertical-align"},[t._v("90")]),t._v(" "),s("td",{staticClass:"vertical-align"},[t._v("200")]),t._v(" "),s("td",{staticClass:"vertical-align"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:""}})])])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-outline-secondary",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")]),t._v(" "),s("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button",id:"SavePurchaseBtn","data-dismiss":"modal"}},[t._v("加入")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"EnableProductModal",tabindex:"-1","data-keyboard":"false","data-backdrop":"static",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-mid modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("系統提示")]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body",staticStyle:{"text-align":"center","font-size":"16px"}},[s("p",[t._v("是否將所選商品改為「正常銷售」？")])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-outline-secondary",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),s("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("確定")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"DisableProductModal",tabindex:"-1","data-keyboard":"false","data-backdrop":"static",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-mid modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("系統提示")]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body",staticStyle:{"text-align":"center","font-size":"16px"}},[s("p",[t._v("是否將所選商品改為「停止銷售」？")])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-outline-secondary",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),s("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"}},[t._v("確定")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:"MessageModal",tabindex:"-1","data-keyboard":"false","data-backdrop":"static",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-mid modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"MessageModalLabel"}},[this._v("系統提示")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])]),this._v(" "),a("div",{staticClass:"modal-body",staticStyle:{"text-align":"center","font-size":"16px"}}),this._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-success",staticStyle:{width:"85px"},attrs:{type:"button","data-dismiss":"modal"}},[this._v("確定")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-breadcrumb"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 d-flex no-block align-items-center"},[a("h4",{staticClass:"page-title"},[this._v("採購單")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row mb-3"},[s("div",{staticStyle:{width:"60px","margin-left":"20px"}},[s("label",{staticClass:"text-left control-label col-form-label",attrs:{for:"email1"}},[t._v("商品狀態")])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox filter",staticStyle:{"margin-left":"10px","margin-top":"5px","padding-top":"2px"}},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customControlAutosizing1"}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"customControlAutosizing1"}},[t._v("全部")])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox filter"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customControlAutosizing2"}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"customControlAutosizing2"}},[t._v("未完成")])]),t._v(" "),s("div",{staticClass:"custom-control custom-checkbox filter"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customControlAutosizing3"}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"customControlAutosizing3"}},[t._v("已完成")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row mb-2"},[s("div",[s("select",{staticClass:"form-control",staticStyle:{width:"150px"}},[s("option",[t._v("廣泛搜尋")]),t._v(" "),s("option",[t._v("採購單號")]),t._v(" "),s("option",[t._v("商品名稱")]),t._v(" "),s("option",[t._v("採購平台單號")]),t._v(" "),s("option",[t._v("物流號碼")]),t._v(" "),s("option",[t._v("集運單號")])])]),t._v(" "),s("div",{staticStyle:{"padding-left":"10px"}},[s("input",{staticClass:"form-control",staticStyle:{width:"265px"},attrs:{type:"text",placeholder:"請輸入"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row mb-3"},[a("div",[a("button",{staticClass:"btn btn-secondary",staticStyle:{width:"80px"},attrs:{type:"button"}},[this._v("重設")])]),this._v(" "),a("div",{staticStyle:{"padding-left":"10px"}},[a("button",{staticClass:"btn btn-danger",staticStyle:{width:"80px"},attrs:{type:"button"}},[this._v("查詢")])])])}],i=s(207),o=s(208),l=s(209),c={name:"purchase",data:function(){return{state:{show:!1,showDel:!1,showConst:!1}}},components:{dataTable:i.a,dropdown:o.a,modal:l.a},methods:{showConst:function(){document.body.classList.add("modal-open"),document.body.style.paddingRight="17px",this.state.show=!this.state.show,this.state.showConst=!0},showDel:function(){document.body.classList.add("modal-open"),document.body.style.paddingRight="17px",this.state.show=!this.state.show,this.state.showDel=!0},closeMod:function(){this.state={show:!1,showDel:!1,showConst:!1}}},created:function(){},computed:{}},n=s(6),r=Object(n.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("modal",{attrs:{popup:t.state.showDel},on:{finish:function(a){return t.closeMod()}}},[e("p",[t._v("是否刪除所選的項目？")])]),t._v(" "),t._m(4),t._v(" "),e("modal",{attrs:{popup:t.state.showConst,cancel:!1},on:{finish:function(a){return t.closeMod()}}},[e("p",[t._v("本按鈕功能建構中")])]),t._v(" "),e("div",{staticClass:"page-wrapper"},[t._m(5),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"card border-bottom"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row mb-3",attrs:{id:"ShipTypeDiv"}},[e("div",{staticClass:"col-md-12",staticStyle:{padding:"8px 0px 0px 0px"}},[e("div",{attrs:{id:"NormalMode"}},[e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button",id:"AddPurchaseBtn"},on:{click:function(a){return t.showConst()}}},[e("i",{staticClass:"mdi mdi-plus",staticStyle:{"font-style":"normal"}},[t._v(" 新增採購單")])]),t._v(" "),e("button",{staticClass:"btn btn-outline-success",attrs:{type:"button",id:""},on:{click:function(a){return t.showConst()}}},[e("i",{staticClass:"mdi mdi-plus",staticStyle:{"font-style":"normal"}},[t._v(" 採購完成")])]),t._v(" "),e("button",{staticClass:"btn btn-outline-warning",attrs:{type:"button",id:"DeleteBtn"},on:{click:function(a){return t.showDel()}}},[e("i",{staticClass:"mdi mdi-delete",staticStyle:{"font-style":"normal"}},[t._v(" 刪除")])])])])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])]),t._v(" "),e("data-table",[e("template",{slot:"head"},[e("th",{staticStyle:{"text-align":"center","padding-bottom":"20px","min-width":"275px"}},[t._v("採購單號")]),t._v(" "),e("th",{staticClass:"head-th",staticStyle:{padding:"0px"}},[e("table",{staticStyle:{"min-width":"750px",width:"100%"}},[e("tr",[e("td",{staticStyle:{width:"32%","padding-top":"25px"}},[t._v("商品名稱及規格")]),t._v(" "),e("td",{staticStyle:{width:"10%","padding-top":"25px"}},[t._v("採購數量")]),t._v(" "),e("td",{staticStyle:{width:"10%","padding-top":"25px"}},[t._v("到貨數量")]),t._v(" "),e("td",{staticStyle:{width:"16%","padding-top":"25px"}},[t._v("備註")])])])]),t._v(" "),e("th",{staticStyle:{"text-align":"center","padding-bottom":"20px","min-width":"200px"}},[t._v("其他資訊")])]),t._v(" "),t._l(5,(function(a){return e("tr",{key:a},[e("td",[e("label",{staticClass:"customcheckbox m-b-20"},[e("input",{attrs:{type:"checkbox",id:"mainCheckbox"}}),t._v(" "),e("span",{staticClass:"checkmark"})])]),t._v(" "),e("td",[e("li",[e("a",{staticClass:"product-spec",attrs:{href:"javascript:void(0)"}},[t._v("2020070300001")])]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("阿里巴巴：1082978944313745859")]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("申通快遞：1082978944313745859")]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("集運方式：大洋 義烏空運普貨")]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("集運單號：885766354767")])]),t._v(" "),e("td",{staticStyle:{padding:"0px"}},[e("table",{staticClass:"table-spec",staticStyle:{"min-width":"750px !important",width:"100%"}},[e("tbody",t._l(5,(function(a){return e("tr",{key:a},[e("td",{staticStyle:{width:"32%"}},[e("div",{staticClass:"d-flex flex-row comment-row"},[e("div",{staticClass:"p-2"},[e("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:s(225)}})]),t._v(" "),e("div",{staticClass:"comment-text w-100"},[e("li",[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t加大加長滑鼠墊 80*30cm\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("li",[t._v("大尺寸,彩色六小喵")]),t._v(" "),e("li",{staticStyle:{color:"#acacac"}},[t._v("選項貨號： 0478601")])])])]),t._v(" "),e("td",{staticStyle:{width:"10%"}},[e("li",[t._v("15")])]),t._v(" "),e("td",{staticStyle:{width:"10%"}},[e("li",[t._v("15")]),t._v(" "),e("li",[t._v("未到貨")])]),t._v(" "),e("td",{staticStyle:{width:"16%"}},[e("li",[t._v("少5個，補在下一次")])])])})),0)])]),t._v(" "),e("td",[e("dropdown",{attrs:{title:"操作",items:[{text:"修改及個別入庫",type:"item"},{text:"整批入庫",type:"item"},{text:"採購完成",type:"item"},{type:"divider"},{text:"刪除",type:"item"}]}}),t._v(" "),e("hr"),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\t\t備註："),e("br"),t._v("紅色實際顏色偏粉色\n\t\t\t\t\t\t")])],1)])}))],2)],1)]),t._v(" "),t.state.show?e("div",{staticClass:"modal-backdrop fade show"}):t._e()],1)}),e,!1,null,null,null);a.default=r.exports}}]);
//# sourceMappingURL=purchase.js.map