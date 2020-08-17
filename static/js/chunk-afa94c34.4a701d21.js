(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afa94c34","chunk-2d0a5532"],{"09e8":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:e.title,width:e.width,top:"50px","close-on-click-modal":!1,"close-on-press-escape":!1,visible:e.isVisible},on:{"update:visible":function(t){e.isVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.client,rules:e.rules,"label-position":"right","label-width":"165px"}},[i("el-form-item",{attrs:{label:"clientId",prop:"clientId"}},[i("el-input",{attrs:{readonly:"add"!==e.type&&"readonly"},model:{value:e.client.clientId,callback:function(t){e.$set(e.client,"clientId",t)},expression:"client.clientId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"clientSecret",prop:"clientSecret"}},[i("el-input",{attrs:{readonly:"add"!==e.type&&"readonly"},model:{value:e.client.clientSecret,callback:function(t){e.$set(e.client,"clientSecret",t)},expression:"client.clientSecret"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"scope",prop:"scope"}},[i("el-input",{model:{value:e.client.scope,callback:function(t){e.$set(e.client,"scope",t)},expression:"client.scope"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"authorizedGrantTypes",prop:"authorizedGrantTypes"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",value:"",placeholder:""},model:{value:e.client.authorizedGrantTypes,callback:function(t){e.$set(e.client,"authorizedGrantTypes",t)},expression:"client.authorizedGrantTypes"}},e._l(e.grantTypes,function(e){return i("el-option",{key:e.type,attrs:{label:e.type,value:e.type}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"webServerRedirectUri",prop:"webServerRedirectUri"}},[i("el-input",{model:{value:e.client.webServerRedirectUri,callback:function(t){e.$set(e.client,"webServerRedirectUri",t)},expression:"client.webServerRedirectUri"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"accessTokenValidity",prop:"accessTokenValidity"}},[i("el-input",{model:{value:e.client.accessTokenValidity,callback:function(t){e.$set(e.client,"accessTokenValidity",t)},expression:"client.accessTokenValidity"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"refreshTokenValidity",prop:"refreshTokenValidity"}},[i("el-input",{model:{value:e.client.refreshTokenValidity,callback:function(t){e.$set(e.client,"refreshTokenValidity",t)},expression:"client.refreshTokenValidity"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"autoapprove",prop:"autoapprove"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"",value:""},model:{value:e.client.autoapprove,callback:function(t){e.$set(e.client,"autoapprove",t)},expression:"client.autoapprove"}},[i("el-option",{attrs:{label:"true",value:"1"}}),e._v(" "),i("el-option",{attrs:{label:"false",value:"0"}})],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"warning",plain:"",loading:e.buttonLoading},on:{click:function(t){e.isVisible=!1}}},[e._v("\n      "+e._s(e.$t("common.cancel"))+"\n    ")]),e._v(" "),i("el-button",{attrs:{type:"primary",plain:"",loading:e.buttonLoading},on:{click:e.submitForm}},[e._v("\n      "+e._s(e.$t("common.confirm"))+"\n    ")])],1)],1)},a=[],r=(i("28a5"),i("cebc")),s=(i("6b54"),i("87b3"),i("ed08")),l={name:"ClientEdit",props:{dialogVisible:{type:Boolean,default:!1},title:{type:String,default:""},type:{type:String,default:""}},data:function(){var e=this;return{screenWidth:0,buttonLoading:!1,width:this.initWidth(),client:this.initClient(),rules:{clientId:[{required:!0,message:this.$t("rules.require"),trigger:"blur"},{min:3,max:20,message:this.$t("rules.range3to20"),trigger:"blur"},{validator:function(t,i,n){"add"===e.type?e.$get("auth/client/check/".concat(i)).then(function(t){t.data?n():n(e.$t("rules.clientIdExist"))}):n()},trigger:"blur"}],scope:[{max:100,message:this.$t("rules.noMoreThan100"),trigger:"blur"},{required:!0,message:this.$t("rules.require"),trigger:"blur"}],webServerRedirectUri:{validator:function(t,i,n){""===i||null==i||s["b"].validate.isURL(i)?n():n(new Error(e.$t("rules.invalidURL")))},trigger:"blur"},clientSecret:[{required:!0,message:this.$t("rules.require"),trigger:"blur"},{min:6,max:20,message:this.$t("rules.range6to20"),trigger:"blur"}],accessTokenValidity:[{required:!0,message:this.$t("rules.require"),trigger:"blur"},{validator:function(t,i,n){validate.isIntegerGreaterThanZero(i)?i.toString().length>11?n(new Error(e.$t("rules.noMoreThan11"))):n():n(new Error(e.$t("rules.invalidInteger")))},trigger:"blur"}],refreshTokenValidity:[{validator:function(t,i,n){null===i||""===i?n():isIntegerGreaterThanZero(i)?i.toString().length>11?n(new Error(e.$t("rules.noMoreThan11"))):n():n(new Error(e.$t("rules.invalidInteger")))},trigger:"blur"}],authorizedGrantTypes:{required:!0,message:this.$t("rules.require"),trigger:"blur"}},grantTypes:[{type:"refresh_token"},{type:"authorization_code"},{type:"client_credentials"},{type:"password"},{type:"implicit"}]}},computed:{isVisible:{get:function(){return this.dialogVisible},set:function(){this.close(),this.reset()}}},mounted:function(){var e=this;window.onresize=function(){return function(){e.width=e.initWidth()}()}},methods:{initWidth:function(){return this.screenWidth=document.body.clientWidth,this.screenWidth<991?"90%":this.screenWidth<1400?"45%":"800px"},initClient:function(){return{clientId:"",resourceIds:"",clientSecret:"",scope:"",authorizedGrantTypes:"",webServerRedirectUri:"",accessTokenValidity:null,refreshTokenValidity:null,autoapprove:""}},setClient:function(e){this.client=Object(r["a"])({},e);var t=[];this.client.authorizedGrantTypes&&"string"===typeof this.client.authorizedGrantTypes&&(t=this.client.authorizedGrantTypes.split(","),this.client.authorizedGrantTypes=t),this.client.clientSecret="******",this.client.autoapprove=null!==this.client.autoapprove?this.client.autoapprove+"":""},submitForm:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.buttonLoading=!0,"add"===e.type?(e.client.authorizedGrantTypes=e.client.authorizedGrantTypes.join(","),e.$post("auth/client",Object(r["a"])({},e.client)).then(function(){e.buttonLoading=!1,e.isVisible=!1,e.$message({message:e.$t("tips.createSuccess"),type:"success"}),e.$emit("success")})):(e.client.authorizedGrantTypes=e.client.authorizedGrantTypes.join(","),e.$put("auth/client",Object(r["a"])({},e.client)).then(function(){e.buttonLoading=!1,e.isVisible=!1,e.$message({message:e.$t("tips.updateSuccess"),type:"success"}),e.$emit("success")}))})},close:function(){this.$emit("close")},reset:function(){this.$refs.form.clearValidate(),this.$refs.form.resetFields(),this.client=this.initClient()}}},o=l,c=i("0c7c"),u=Object(c["a"])(o,n,a,!1,null,null,null);t["default"]=u.exports},"3eed":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item search-item",attrs:{placeholder:"clientId"},model:{value:e.page.entity.clientId,callback:function(t){e.$set(e.page.entity,"clientId",t)},expression:"page.entity.clientId"}}),e._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",plain:""},on:{click:e.search}},[e._v("\n            "+e._s(e.$t("table.search"))+"\n        ")]),e._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"warning",plain:""},on:{click:e.reset}},[e._v("\n            "+e._s(e.$t("table.reset"))+"\n        ")]),e._v(" "),i("el-dropdown",{directives:[{name:"has-any-permission",rawName:"v-has-any-permission",value:["client:add","client:delete"],expression:"['client:add','client:delete']"}],staticClass:"filter-item",attrs:{trigger:"click"}},[i("el-button",[e._v("\n                "+e._s(e.$t("table.more"))),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["client:add"],expression:"['client:add']"}],nativeOn:{click:function(t){return e.add(t)}}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),i("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["client:delete"],expression:"['client:delete']"}],nativeOn:{click:function(t){return e.batchDelete(t)}}},[e._v(e._s(e.$t("table.delete")))])],1)],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.pageLoading,expression:"pageLoading"}],key:e.tableKey,ref:"table",staticStyle:{width:"100%"},attrs:{data:e.page.records,border:"",fit:"","highlight-current-row":!0},on:{"selection-change":e.onSelectChange}},[i("el-table-column",{attrs:{type:"selection",align:"center",width:"40px"}}),e._v(" "),i("el-table-column",{attrs:{label:"clientId",prop:"clientId","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.clientId))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"clientSecret",prop:"clientSecret","show-overflow-tooltip":!0,align:"center","min-width":"100px"}},[[i("span",[e._v("******")])]],2),e._v(" "),i("el-table-column",{attrs:{label:"scope",prop:"scope","show-overflow-tooltip":!0,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.scope))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"authorizedGrantTypes",prop:"authorizedGrantTypes","show-overflow-tooltip":!0,align:"center","min-width":"170px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.authorizedGrantTypes))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"accessTokenValidity",prop:"accessTokenValidity","show-overflow-tooltip":!0,align:"center","min-width":"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.accessTokenValidity)+" s")])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"refreshTokenValidity",prop:"refreshTokenValidity","show-overflow-tooltip":!0,align:"center","min-width":"160px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.refreshTokenValidity?t.row.refreshTokenValidity+"s":""))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"webServerRedirectUri",prop:"webServerRedirectUri","show-overflow-tooltip":!0,align:"center","min-width":"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.webServerRedirectUri))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"autoapprove",prop:"autoapprove","show-overflow-tooltip":!0,align:"center","min-width":"140px"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[null!==n.autoapprove?i("el-tag",{attrs:{type:e._f("approveFilter")(n.autoapprove)}},[e._v("\n                    "+e._s(e.transApprove(n.autoapprove))+"\n                ")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("table.operation"),align:"center","min-width":"150px","class-name":"small-padding fixed-width",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("i",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["client:decrypt"],expression:"['client:decrypt']"}],staticClass:"el-icon-unlock table-operation",staticStyle:{color:"#87d068"},on:{click:function(t){return e.unlock(n)}}}),e._v(" "),i("i",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["client:update"],expression:"['client:update']"}],staticClass:"el-icon-setting table-operation",staticStyle:{color:"#2db7f5"},on:{click:function(t){return e.edit(n)}}}),e._v(" "),i("i",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["client:delete"],expression:"['client:delete']"}],staticClass:"el-icon-delete table-operation",staticStyle:{color:"#f50"},on:{click:function(t){return e.singleDelete(n)}}}),e._v(" "),i("el-link",{directives:[{name:"has-no-permission",rawName:"v-has-no-permission",value:["client:decrypt","client:update","client:delete"],expression:"['client:decrypt','client:update','client:delete']"}],staticClass:"no-perm"},[e._v("\n                    "+e._s(e.$t("tips.noPermission"))+"\n                ")])]}}])})],1),e._v(" "),i("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:e.page.total,"current-page":e.page.current,layout:"total, prev, pager, next, sizes"},on:{"size-change":e.sizeChange,"current-change":e.pageChange}}),e._v(" "),i("client-edit",{ref:"edit",attrs:{"dialog-visible":e.dialog.isVisible,title:e.dialog.title,type:e.dialog.type},on:{close:e.editClose,success:e.editSuccess}})],1)},a=[],r=(i("ac6a"),i("f3e2"),i("386d"),i("c6e7")),s=i("09e8"),l={name:"ClientManage",mixins:[r["a"]],components:{ClientEdit:s["default"]},filters:{approveFilter:function(e){var t={1:"success",0:"danger"};return t[e]}},data:function(){return{dialog:{isVisible:!1,title:"",type:""},tableKey:0,loading:!1,list:null,total:0,selection:[]}},created:function(){var e=this;this.$nextTick(function(){e.init()})},methods:{init:function(){this.page.current=1,this.findPage()},findPageInit:function(){return this.pageUrl="auth/client/page",!0},transApprove:function(e){switch(e){case 0:return"false";case 1:return"true";default:return""}},editSuccess:function(){this.search()},editClose:function(){this.dialog.isVisible=!1},onSelectChange:function(e){this.selection=e},add:function(){this.dialog.title=this.$t("common.add"),this.dialog.isVisible=!0,this.dialog.type="add"},edit:function(e){this.$refs.edit.setClient(e),this.dialog.title=this.$t("common.edit"),this.dialog.isVisible=!0,this.dialog.type="edit"},unlock:function(e){var t=this;this.$get("auth/client/secret/".concat(e.clientId)).then(function(e){t.$message({showClose:!0,message:t.$t("tips.clientOriginSecret")+e.data.data,duration:0,type:"success"})})},batchDelete:function(){var e=this;this.selection.length?this.$confirm(this.$t("tips.confirmDelete"),this.$t("common.tips"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning"}).then(function(){var t=[];e.selection.forEach(function(e){t.push(e.clientId)}),e.delete(t)}).catch(function(){e.clearSelections()}):this.$message({message:this.$t("tips.noDataSelected"),type:"warning"})},singleDelete:function(e){this.$refs.table.toggleRowSelection(e,!0),this.batchDelete()},delete:function(e){var t=this;this.loading=!0,this.$delete("auth/client",{clientIds:e}).then(function(){t.$message({message:t.$t("tips.deleteSuccess"),type:"success"}),t.search()})},clearSelections:function(){this.$refs.table.clearSelection()},search:function(){},reset:function(){this.search()}}},o=l,c=i("0c7c"),u=Object(c["a"])(o,n,a,!1,null,"ea15fe3c",null);t["default"]=u.exports},c6e7:function(e,t,i){"use strict";i("456d"),i("ac6a"),i("f3e2"),i("96cf");var n=i("3b8d");t["a"]={data:function(){return{pageUrl:"",pageLoading:!1,page:{records:[],total:0,current:1,size:10,orders:[],entity:{},params:{}},time:100}},methods:{findPage:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this,e.next=3,t.findPageInit();case 3:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",new Promise(function(e,i){t.pageLoading=!0,Object.keys(t.page.entity).forEach(function(e){null!=t.page.entity[e]&&""!==t.page.entity[e]||delete t.page.entity[e]}),Object.keys(t.page.params).forEach(function(e){null!=t.page.params[e]&&""!==t.page.params[e]||delete t.page.params[e]}),t.page.records=[],t.$page(t.pageUrl,t.page).then(function(i){t.page=i.data,setTimeout(function(){t.pageLoading=!1},t.time),e(i)}).catch(function(e){t.pageLoading=!1,i(e)})}));case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),findPageInit:function(){return!0},pageChange:function(e){this.page.current=e,this.findPage()},sizeChange:function(e){this.page.current=0,this.page.size=e,this.findPage()},sortChange:function(e){var t=e.prop,i=e.order;this.page.orders=[],this.page.orders=[{column:t,asc:"ascending"===i}],this.findPage()},resetPage:function(){this.page.entity={},this.page.params={},this.page.orders=[]}}}}}]);