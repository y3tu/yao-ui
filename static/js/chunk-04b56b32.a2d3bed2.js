(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04b56b32","chunk-08e0a377","chunk-2d0d6e75"],{"120f":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{staticClass:"user-view",attrs:{title:e.$t("common.view"),width:e.width,visible:e.isVisible},on:{"update:visible":function(t){e.isVisible=t}}},[s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{xs:24,sm:24}},[s("div",{staticClass:"img-wrapper"},[s("img",{attrs:{src:e.avatar}})])])],1),e._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{xs:24,sm:12}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-user"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.username")+"："))]),e._v(" "+e._s(e.user.username)+"\n            ")])]),e._v(" "),s("el-col",{attrs:{xs:24,sm:12}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-suitcase"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.department")+"："))]),e._v(" "+e._s(e.user.departmentName)+"\n            ")])])],1),e._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{xs:24,sm:12}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-trophy"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.role")+"："))]),e._v(" "+e._s(e.user.roleName)+"\n            ")])]),e._v(" "),s("el-col",{attrs:{xs:24,sm:12}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-phone-outline"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.mobile")+"："))]),e._v(" "+e._s(e.user.mobile)+"\n            ")])])],1),e._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{xs:24,sm:12}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-star-off"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.sex")+"："))]),e._v(" "+e._s(e.transSex(e.user.sex))+"\n            ")])]),e._v(" "),s("el-col",{attrs:{xs:24,sm:12}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-bangzhu"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.status")+"："))]),e._v(" "+e._s("1"===e.user.status?e.$t("common.status.valid"):e.$t("common.status.invalid"))+"\n            ")])])],1),e._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{xs:24,sm:12}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-time"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.createTime")+"："))]),e._v(" "+e._s(e._f("parseTime")(e.user.createTime,"{y}-{m}-{d} {h}:{i}:{s}"))+"\n            ")])]),e._v(" "),s("el-col",{attrs:{xs:24,sm:12}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-brush"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.modifyTime")+"："))]),e._v("\n                "+e._s(e.user.modifyTime)+"\n            ")])])],1),e._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{xs:24,sm:24}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-date"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.lastLoginTime")+"："))]),e._v("\n                "+e._s(e.user.lastLoginTime?e.user.lastLoginTime:e.$t("tips.neverLogin"))+"\n            ")])])],1),e._v(" "),s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{xs:24,sm:24}},[s("div",{staticClass:"view-item"},[s("i",{staticClass:"el-icon-document"}),e._v(" "),s("span",[e._v(e._s(e.$t("table.user.desc")+"："))]),e._v(" "+e._s(e.user.description?e.user.description:e.$t("tips.nothing"))+"\n            ")])])],1)],1)},a=[],r=s("cebc"),n=(s("4f37"),s("f559"),{name:"UserView",props:{dialogVisible:{type:Boolean,default:!1}},data:function(){return{screenWidth:0,width:this.initWidth(),user:{}}},computed:{isVisible:{get:function(){return this.dialogVisible},set:function(){this.close()}},avatar:function(){return this.user.avatar?this.user.avatar.trim().startsWith("http")?this.user.avatar:s("a0fc")("./".concat(this.user.avatar)):s("fd89")}},mounted:function(){var e=this;window.onresize=function(){return function(){e.width=e.initWidth()}()}},methods:{transSex:function(e){switch(e){case"0":return this.$t("common.sex.male");case"1":return this.$t("common.sex.female");default:return this.$t("common.sex.secret")}},initWidth:function(){return this.screenWidth=document.body.clientWidth,this.screenWidth<550?"95%":this.screenWidth<990?"580px":this.screenWidth<1400?"600px":"650px"},setUser:function(e){this.user=Object(r["a"])({},e)},close:function(){this.$emit("close")}}}),l=n,o=(s("19d1"),s("0c7c")),c=Object(o["a"])(l,i,a,!1,null,"476325f6",null);t["default"]=c.exports},"19d1":function(e,t,s){"use strict";var i=s("f7be"),a=s.n(i);a.a},"31be":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"filter-container"},[s("el-input",{staticClass:"filter-item search-item",attrs:{placeholder:e.$t("table.user.username")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.page.entity.username,callback:function(t){e.$set(e.page.entity,"username",t)},expression:"page.entity.username"}}),e._v(" "),s("el-input",{staticClass:"filter-item search-item",attrs:{placeholder:e.$t("table.user.department")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.page.entity.departmentName,callback:function(t){e.$set(e.page.entity,"departmentName",t)},expression:"page.entity.departmentName"}}),e._v(" "),s("el-select",{staticClass:"filter-item search-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:"状态"},on:{change:e.search},model:{value:e.page.entity.status,callback:function(t){e.$set(e.page.entity,"status",t)},expression:"page.entity.status"}},e._l(e.dict.user_status,function(e){return s("el-option",{key:e.key,attrs:{label:e.name,value:e.value}})}),1),e._v(" "),s("el-date-picker",{staticClass:"filter-item search-item date-range-item",attrs:{"range-separator":null,"start-placeholder":e.$t("table.user.createTime"),"value-format":"yyyy-MM-dd",type:"daterange"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.page.params.timeRange,callback:function(t){e.$set(e.page.params,"timeRange",t)},expression:"page.params.timeRange"}}),e._v(" "),s("el-button",{staticClass:"filter-item",attrs:{type:"primary",plain:""},on:{click:e.search}},[e._v("\n            "+e._s(e.$t("table.search"))+"\n        ")]),e._v(" "),s("el-button",{staticClass:"filter-item",attrs:{type:"warning",plain:""},on:{click:e.reset}},[e._v("\n            "+e._s(e.$t("table.reset"))+"\n        ")]),e._v(" "),s("el-dropdown",{directives:[{name:"has-any-permission",rawName:"v-has-any-permission",value:["user:create","user:delete","user:reset","user:export"],expression:"['user:create','user:delete','user:reset','user:export']"}],staticClass:"filter-item",attrs:{trigger:"click"}},[s("el-button",[e._v("\n                "+e._s(e.$t("table.more"))),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["user:create"],expression:"['user:create']"}],nativeOn:{click:function(t){return e.add(t)}}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),s("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["user:delete"],expression:"['user:delete']"}],nativeOn:{click:function(t){return e.batchDelete(t)}}},[e._v(e._s(e.$t("table.delete")))]),e._v(" "),s("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["user:reset"],expression:"['user:reset']"}],nativeOn:{click:function(t){return e.resetPassword(t)}}},[e._v(e._s(e.$t("table.resetPassword")))]),e._v(" "),s("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["user:export"],expression:"['user:export']"}],nativeOn:{click:function(t){return e.exportExcel(t)}}},[e._v(e._s(e.$t("table.export")))])],1)],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.pageLoading,expression:"pageLoading"}],key:e.tableKey,ref:"table",staticStyle:{width:"100%"},attrs:{data:e.page.records,border:"",fit:""},on:{"selection-change":e.onSelectChange,"sort-change":e.sortChange}},[s("el-table-column",{attrs:{type:"selection",align:"center",width:"40px"}}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("table.user.username"),prop:"username","show-overflow-tooltip":!0,align:"center","min-width":"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.username))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("table.user.sex"),filters:[{text:e.$t("common.sex.male"),value:"0"},{text:e.$t("common.sex.female"),value:"1"},{text:e.$t("common.sex.secret"),value:"2"}],"filter-method":e.filterSex,"class-name":"status-col"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[s("el-tag",{attrs:{type:e._f("sexFilter")(i.sex)}},[e._v("\n                    "+e._s(e.transSex(i.sex))+"\n                ")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("table.user.email"),"show-overflow-tooltip":!0,align:"center","min-width":"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.email))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("table.user.department"),align:"center","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.departmentName))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("table.user.status"),filters:[{text:e.$t("common.status.valid"),value:"1"},{text:e.$t("common.status.invalid"),value:"0"}],"filter-method":e.filterStatus,"class-name":"status-col"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[s("el-tag",{attrs:{type:e._f("statusFilter")(i.status)}},[e._v("\n                    "+e._s("1"===i.status?e.$t("common.status.valid"):e.$t("common.status.invalid"))+"\n                ")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("table.user.createTime"),prop:"createTime",align:"center","min-width":"180px",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.createTime))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("table.operation"),align:"center","min-width":"150px","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[s("i",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["user:view"],expression:"['user:view']"}],staticClass:"el-icon-view table-operation",staticStyle:{color:"#87d068"},on:{click:function(t){return e.view(i)}}}),e._v(" "),s("i",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["user:update"],expression:"['user:update']"}],staticClass:"el-icon-setting table-operation",staticStyle:{color:"#2db7f5"},on:{click:function(t){return e.edit(i)}}}),e._v(" "),s("i",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["user:delete"],expression:"['user:delete']"}],staticClass:"el-icon-delete table-operation",staticStyle:{color:"#f50"},on:{click:function(t){return e.singleDelete(i)}}}),e._v(" "),s("el-link",{directives:[{name:"has-no-permission",rawName:"v-has-no-permission",value:["user:view","user:update","user:delete"],expression:"['user:view','user:update','user:delete']"}],staticClass:"no-perm"},[e._v("\n                    "+e._s(e.$t("tips.noPermission"))+"\n                ")])]}}])})],1),e._v(" "),s("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:e.page.total,"current-page":e.page.current,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChange,"current-change":e.pageChange}}),e._v(" "),s("user-edit",{ref:"edit",attrs:{"dialog-visible":e.dialog.isVisible,title:e.dialog.title},on:{success:e.editSuccess,close:e.editClose}}),e._v(" "),s("user-view",{ref:"view",attrs:{"dialog-visible":e.userViewVisible},on:{close:e.viewClose}})],1)},a=[],r=(s("28a5"),s("ac6a"),s("f3e2"),s("386d"),s("c6e7")),n=s("7512"),l=s("120f"),o={name:"UserManage",mixins:[r["a"]],components:{UserEdit:n["default"],UserView:l["default"]},dicts:["user_status"],filters:{sexFilter:function(e){var t={0:"success",1:"danger",2:"info"};return t[e]},statusFilter:function(e){var t={0:"danger",1:"success"};return t[e]}},data:function(){return{dialog:{isVisible:!1,title:""},userViewVisible:!1,tableKey:0,loading:!1,list:null,total:0,sort:{},selection:[]}},computed:{currentUser:function(){return this.$store.state.account.user}},created:function(){var e=this;this.$nextTick(function(){e.init()})},mounted:function(){console.log(this)},methods:{transSex:function(e){switch(e){case"0":return this.$t("common.sex.male");case"1":return this.$t("common.sex.female");default:return this.$t("common.sex.secret")}},filterStatus:function(e,t){return t.status===e},filterSex:function(e,t){return t.sex===e},viewClose:function(){this.userViewVisible=!1},editClose:function(){this.dialog.isVisible=!1},editSuccess:function(){this.search()},onSelectChange:function(e){this.selection=e},init:function(){this.findPage()},findPageInit:function(){return this.pageUrl="base/user/page",!0},search:function(){this.page.params.timeRange&&(this.page.params.createTimeFrom=this.page.params.timeRange[0],this.page.params.createTimeTo=this.page.params.timeRange[1]),this.findPage()},reset:function(){this.resetPage(),this.$refs.table.clearSort(),this.$refs.table.clearFilter(),this.search()},exportExcel:function(){this.$download("base/user/export",{},"user_".concat((new Date).getTime(),".xlsx"))},add:function(){this.dialog.title=this.$t("common.add"),this.dialog.isVisible=!0},resetPassword:function(){var e=this;this.selection.length?this.$confirm(this.$t("tips.confirmRestPassword"),this.$t("common.tips"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning"}).then(function(){var t=[];e.selection.forEach(function(e){t.push(e.username)}),e.$put("base/user/password/reset",{usernames:t.join(",")}).then(function(){e.$message({message:e.$t("tips.resetPasswordSuccess"),type:"success"}),e.clearSelections()})}).catch(function(){e.clearSelections()}):this.$message({message:this.$t("tips.noDataSelected"),type:"warning"})},singleDelete:function(e){this.$refs.table.toggleRowSelection(e,!0),this.batchDelete()},batchDelete:function(){var e=this;if(this.selection.length){var t=!1;this.$confirm(this.$t("tips.confirmDelete"),this.$t("common.tips"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning"}).then(function(){var s=[];e.selection.forEach(function(i){i.userId!==e.currentUser.userId?s.push(i.userId):t=!0}),t?(e.$message({message:e.$t("tips.containCurrentUser"),type:"warning"}),e.clearSelections()):e.delete(s)}).catch(function(){e.clearSelections()})}else this.$message({message:this.$t("tips.noDataSelected"),type:"warning"})},clearSelections:function(){this.$refs.table.clearSelection()},delete:function(e){var t=this;this.loading=!0,this.$delete("base/user/delByIds/".concat(e)).then(function(){t.$message({message:t.$t("tips.deleteSuccess"),type:"success"}),t.search()})},view:function(e){this.$refs.view.setUser(e),this.userViewVisible=!0},edit:function(e){var t=[];e.roleId&&"string"===typeof e.roleId&&(t=e.roleId.split(","),e.roleId=t),this.$refs.edit.setUser(e),this.dialog.title=this.$t("common.edit"),this.dialog.isVisible=!0}}},c=o,u=s("0c7c"),m=Object(u["a"])(c,i,a,!1,null,"e22f1c6a",null);t["default"]=m.exports},7512:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{title:e.title,width:e.width,top:"50px","close-on-click-modal":!1,"close-on-press-escape":!1,visible:e.isVisible},on:{"update:visible":function(t){e.isVisible=t}}},[s("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-position":"right","label-width":"100px"}},[s("el-form-item",{attrs:{label:e.$t("table.user.username"),prop:"username"}},[s("el-input",{model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:""===e.user.userId,expression:"user.userId === ''"}],attrs:{label:e.$t("table.user.password"),prop:"password"}},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("tips.defaultPassword"),placement:"top-start"}},[s("el-input",{attrs:{value:"1234qwer",type:"password",readonly:""}})],1)],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("table.user.email"),prop:"email"}},[s("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("table.user.mobile"),prop:"mobile"}},[s("el-input",{model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}})],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("table.user.department"),prop:"departmentId"}},[s("treeselect",{staticStyle:{width:"100%"},attrs:{normalizer:e.treeSelectNormalizer,multiple:!1,options:e.departments,"clear-value-text":e.$t("common.clear"),placeholder:" "},model:{value:e.user.departmentId,callback:function(t){e.$set(e.user,"departmentId",t)},expression:"user.departmentId"}})],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("table.user.role"),prop:"roleId"}},[s("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",value:"",placeholder:""},model:{value:e.user.roleId,callback:function(t){e.$set(e.user,"roleId",t)},expression:"user.roleId"}},e._l(e.roles,function(e){return s("el-option",{key:e.roleId,attrs:{label:e.roleName,value:String(e.roleId)}})}),1)],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("table.user.sex"),prop:"sex"}},[s("el-select",{staticStyle:{width:"100%"},attrs:{value:"",placeholder:""},model:{value:e.user.sex,callback:function(t){e.$set(e.user,"sex",t)},expression:"user.sex"}},[s("el-option",{attrs:{value:"0",label:e.$t("common.sex.male")}}),e._v(" "),s("el-option",{attrs:{value:"1",label:e.$t("common.sex.female")}}),e._v(" "),s("el-option",{attrs:{value:"2",label:e.$t("common.sex.secret")}})],1)],1),e._v(" "),s("el-form-item",{attrs:{label:e.$t("table.user.status"),prop:"status"}},[s("el-radio-group",{model:{value:e.user.status,callback:function(t){e.$set(e.user,"status",t)},expression:"user.status"}},[s("el-radio",{attrs:{label:"1"}},[e._v(e._s(e.$t("common.status.valid")))]),e._v(" "),s("el-radio",{attrs:{label:"0"}},[e._v(e._s(e.$t("common.status.invalid")))])],1)],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"warning",plain:"",loading:e.buttonLoading},on:{click:function(t){e.isVisible=!1}}},[e._v("\n            "+e._s(e.$t("common.cancel"))+"\n        ")]),e._v(" "),s("el-button",{attrs:{type:"primary",plain:"",loading:e.buttonLoading},on:{click:e.submitForm}},[e._v("\n            "+e._s(e.$t("common.confirm"))+"\n        ")])],1)],1)},a=[],r=s("cebc"),n=(s("7f7f"),s("ed08")),l=s("7026"),o=s.n(l),c=(s("542c"),{name:"UserEdit",components:{Treeselect:o.a},props:{dialogVisible:{type:Boolean,default:!1},title:{type:String,default:""}},data:function(){var e=this;return{user:this.initUser(),buttonLoading:!1,screenWidth:0,width:this.initWidth(),departments:[],treeSelectNormalizer:function(e){return(null==e.children||e.children.length<1)&&delete e.children,{label:e.name}},roles:[],rules:{username:[{required:!0,message:this.$t("rules.require"),trigger:"blur"},{min:4,max:10,message:this.$t("rules.range4to10"),trigger:"blur"},{validator:function(t,s,i){e.user.userId?i():e.$get("base/user/checkUsername/".concat(s)).then(function(t){t.data?i():i(e.$t("rules.usernameExist"))})},trigger:"blur"}],email:{type:"email",message:this.$t("rules.email"),trigger:"blur"},mobile:[{required:!0,message:this.$t("rules.require"),trigger:"blur"},{validator:function(t,s,i){""===s||n["b"].validate.isMobile(s)||i(e.$t("rules.mobile")),e.user.userId?i():e.$get("base/user/checkMobile/".concat(s)).then(function(t){t.data?i():i(e.$t("rules.mobileExist"))})},trigger:"blur"}],roleId:{required:!0,message:this.$t("rules.require"),trigger:"change"},sex:{required:!0,message:this.$t("rules.require"),trigger:"change"},status:{required:!0,message:this.$t("rules.require"),trigger:"blur"}}}},computed:{isVisible:{get:function(){return this.dialogVisible},set:function(){this.close(),this.reset()}}},mounted:function(){var e=this;this.initDepartment(),this.initRoles(),window.onresize=function(){return function(){e.width=e.initWidth()}()}},methods:{initUser:function(){return{userId:"",username:"",password:"1234qwer",email:"",mobile:"",sex:"",status:"1",departmentId:null,roleId:[]}},initWidth:function(){return this.screenWidth=document.body.clientWidth,this.screenWidth<991?"90%":this.screenWidth<1400?"45%":"800px"},initDepartment:function(){var e=this;this.$get("base/department/tree").then(function(t){e.departments=t.data}).catch(function(t){console.error(t),e.$message({message:e.$t("tips.getDataFail"),type:"error"})})},initRoles:function(){var e=this;this.$get("base/role/options").then(function(t){e.roles=t.data}).catch(function(t){console.error(t),e.$message({message:e.$t("tips.getDataFail"),type:"error"})})},setUser:function(e){this.user=Object(r["a"])({},e)},close:function(){this.$emit("close")},submitForm:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;if(e.buttonLoading=!0,e.user.userId){var s=e.user.roleId;e.user.createTime=e.user.modifyTime=e.user.lastLoginTime=null,e.$put("base/user/update",Object(r["a"])({},e.user)).then(function(){e.buttonLoading=!1,e.isVisible=!1,e.$message({message:e.$t("tips.updateSuccess"),type:"success"}),e.$emit("success")}).catch(function(){e.buttonLoading=!1,e.user.roleId=s})}else{var i=e.user.roleId;e.user.roleId=e.user.roleId.join(","),e.$post("base/user/create",Object(r["a"])({},e.user)).then(function(){e.buttonLoading=!1,e.isVisible=!1,e.$message({message:e.$t("tips.createSuccess"),type:"success"}),e.$emit("success")}).catch(function(){e.buttonLoading=!1,e.user.roleId=i})}})},reset:function(){this.$refs.form.clearValidate(),this.$refs.form.resetFields(),this.user=this.initUser()}}}),u=c,m=s("0c7c"),d=Object(m["a"])(u,i,a,!1,null,"18603654",null);t["default"]=d.exports},c6e7:function(e,t,s){"use strict";s("456d"),s("ac6a"),s("f3e2"),s("96cf");var i=s("3b8d");t["a"]={data:function(){return{pageUrl:"",pageLoading:!1,page:{records:[],total:0,current:1,size:10,orders:[],entity:{},params:{}},time:100}},methods:{findPage:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this,e.next=3,t.findPageInit();case 3:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",new Promise(function(e,s){t.pageLoading=!0,Object.keys(t.page.entity).forEach(function(e){null!=t.page.entity[e]&&""!==t.page.entity[e]||delete t.page.entity[e]}),Object.keys(t.page.params).forEach(function(e){null!=t.page.params[e]&&""!==t.page.params[e]||delete t.page.params[e]}),t.page.records=[],t.$page(t.pageUrl,t.page).then(function(s){t.page=s.data,setTimeout(function(){t.pageLoading=!1},t.time),e(s)}).catch(function(e){t.pageLoading=!1,s(e)})}));case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),findPageInit:function(){return!0},pageChange:function(e){this.page.current=e,this.findPage()},sizeChange:function(e){this.page.current=0,this.page.size=e,this.findPage()},sortChange:function(e){var t=e.prop,s=e.order;this.page.orders=[],this.page.orders=[{column:t,asc:"ascending"===s}],this.findPage()},resetPage:function(){this.page.entity={},this.page.params={},this.page.orders=[]}}}},f7be:function(e,t,s){}}]);