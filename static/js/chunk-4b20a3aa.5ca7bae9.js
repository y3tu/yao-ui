(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b20a3aa","chunk-60de00c0"],{"15fc":function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"b",function(){return r}),a.d(t,"e",function(){return o}),a.d(t,"d",function(){return l}),a.d(t,"a",function(){return s}),a.d(t,"f",function(){return c});var n=a("9bd2");function i(e){return n["a"].get("base/generator/getTables",e)}function r(e){return n["a"].postData("base/generator/getGenConfig",e)}function o(e){return n["a"].postData("base/generator/saveGenConfig",e)}function l(e){return n["a"].postData("base/generator/saveColumnConfig",e)}function s(e){return n["a"].postData("base/generator/genPreview",e)}function c(e){return n["a"].postData("base/generator/sync",e)}},"4d98":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-autocomplete",{staticClass:"filter-item search-item",attrs:{clearable:"","fetch-suggestions":e.queryDataSource,placeholder:"请选择数据源"},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[a("div",[e._v(e._s(n.name))])]}}]),model:{value:e.dataSourceName,callback:function(t){e.dataSourceName=t},expression:"dataSourceName"}}),e._v(" "),a("el-input",{staticClass:"filter-item search-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入表名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.tableName,callback:function(t){e.tableName=t},expression:"tableName"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"success",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.pageLoading,expression:"pageLoading"}],staticStyle:{width:"100%"},attrs:{border:"",data:e.tableData,size:"small"}},[a("el-table-column",{attrs:{label:"序号",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.$index+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,align:"center",prop:"name",label:"表名"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,align:"center",prop:"remarks",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"edit-input",staticStyle:{width:"300px"},model:{value:e.tableData[t.$index].remarks,callback:function(a){e.$set(e.tableData[t.$index],"remarks",a)},expression:"tableData[scope.$index].remarks"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300px",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",{attrs:{gutter:3}},[a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{type:"primary",size:"mini",round:""}},[a("router-link",{attrs:{to:"/tool/generator/preview?tableName="+t.row.name+"&dsId="+e.dsId}},[e._v("\n                                预览"),a("i",{staticClass:"el-icon-view el-icon--right"})])],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{type:"warning",size:"mini",round:""}},[a("router-link",{attrs:{to:"/tool/generator/config?tableName="+t.row.name+"&dsId="+e.dsId}},[e._v("\n                                编辑"),a("i",{staticClass:"el-icon-edit el-icon--right"})])],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{type:"success",size:"mini",round:""},on:{click:function(a){return e.toDownload(t.row.name,e.dsId)}}},[e._v("\n                            下载"),a("i",{staticClass:"el-icon-download el-icon--right"})])],1)],1)]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:e.total,layout:"total, prev, pager, next, sizes","current-page":e.currentPage,"page-size":e.pageSize},on:{"size-change":e.sizeChange,"current-change":e.pageChange}})],1)},i=[],r=(a("57e7"),a("96cf"),a("3b8d")),o=(a("386d"),a("7f7f"),a("6762"),a("2fdb"),a("d25f"),a("c6e7")),l=a("15fc"),s=a("5c96"),c=a("9efd"),u={name:"generator",mixins:[o["a"]],components:{Config:c["default"]},dicts:["DATA_SOURCE"],data:function(){return{tableName:"",tableData:[],pageLoading:!1,currentPage:1,total:20,pageSize:10,dataSourceName:"",dsId:""}},created:function(){var e=this;this.$nextTick(function(){e.init()})},methods:{init:function(){},search:function(){var e=this;this.$isEmpty(this.dsId)?Object(s["Message"])({message:"请选择数据源",type:"warning",duration:5e3}):(this.pageLoading=!0,Object(l["c"])({dsId:this.dsId}).then(function(t){e.tableData=t.data;var a=e.tableData.filter(function(t,a){return t.name.includes(e.tableName)});e.list=a.filter(function(t,a){return a<e.currentPage*e.pageSize&&a>=e.pageSize*(e.currentPage-1)}),e.total=a.length,e.tableData=e.list,e.pageLoading=!1}).catch(function(t){e.pageLoading=!1}))},sizeChange:function(e){this.currentPage=1,this.pageSize=e,this.search()},pageChange:function(e){this.currentPage=e,this.search()},queryDataSource:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,a){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=this.dict["DATA_SOURCE"],i=t?n.filter(this.createFilter(t)):n,a(i);case 3:case"end":return e.stop()}},e,this)}));function t(t,a){return e.apply(this,arguments)}return t}(),createFilter:function(e){return function(t){return 0===t.name.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e){this.dsId=e.value,this.dataSourceName=e.name},toDownload:function(e,t){var a={tableName:e,dsId:t};this.$download("base/generator/genZip",a,"代码.zip"),this.$message("正在处理，请稍等！")}}},d=u,p=a("0c7c"),m=Object(p["a"])(d,n,i,!1,null,null,null);t["default"]=m.exports},"9efd":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:15}},[a("el-col",{staticStyle:{"margin-bottom":"10px"}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("字段配置："+e._s(e.tableName))]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"6px 9px"},attrs:{loading:e.saveColumnLoading,icon:"el-icon-s-promotion",size:"mini",type:"success"},on:{click:e.saveColumn}},[e._v("保存\n                    ")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"6px 9px","margin-right":"9px"},attrs:{icon:"el-icon-check",size:"mini",type:"primary"}},[a("router-link",{attrs:{to:"/tool/generator/preview?tableName="+e.tableName+"&dsId="+e.dsId}},[e._v("\n                            预览\n                        ")])],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"数据库中表字段变动时使用该功能",placement:"top-start"}},[a("el-button",{staticStyle:{float:"right",padding:"6px 9px"},attrs:{loading:e.syncLoading,icon:"el-icon-refresh",size:"mini",type:"info"},on:{click:e.sync}},[e._v("同步\n                        ")])],1)],1),e._v(" "),a("el-form",{attrs:{size:"small","label-width":"90px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.columnLoading,expression:"columnLoading"}],staticStyle:{width:"100%","margin-bottom":"15px"},attrs:{data:e.columnConfigList,"max-height":e.tableHeight,size:"small"}},[a("el-table-column",{attrs:{prop:"columnName",label:"字段名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"columnType",label:"字段类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"字段描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"edit-input",attrs:{size:"mini"},model:{value:t.row.remark,callback:function(a){e.$set(t.row,"remark",a)},expression:"scope.row.remark"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"必填",width:"70px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{model:{value:t.row.notNull,callback:function(a){e.$set(t.row,"notNull",a)},expression:"scope.row.notNull"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"列表",width:"70px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{model:{value:t.row.listShow,callback:function(a){e.$set(t.row,"listShow",a)},expression:"scope.row.listShow"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"表单",width:"70px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{model:{value:t.row.formShow,callback:function(a){e.$set(t.row,"formShow",a)},expression:"scope.row.formShow"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"表单类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticClass:"edit-input",attrs:{filterable:"",clearable:"",size:"mini",placeholder:"请选择"},model:{value:t.row.formType,callback:function(a){e.$set(t.row,"formType",a)},expression:"scope.row.formType"}},[a("el-option",{attrs:{label:"文本框",value:"Input"}}),e._v(" "),a("el-option",{attrs:{label:"文本域",value:"Textarea"}}),e._v(" "),a("el-option",{attrs:{label:"单选框",value:"Radio"}}),e._v(" "),a("el-option",{attrs:{label:"下拉框",value:"Select"}}),e._v(" "),a("el-option",{attrs:{label:"日期框",value:"Date"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"查询方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticClass:"edit-input",attrs:{filterable:"",clearable:"",size:"mini",placeholder:"请选择"},model:{value:t.row.queryType,callback:function(a){e.$set(t.row,"queryType",a)},expression:"scope.row.queryType"}},[a("el-option",{attrs:{label:"=",value:"="}}),e._v(" "),a("el-option",{attrs:{label:"!=",value:"!="}}),e._v(" "),a("el-option",{attrs:{label:">=",value:">="}}),e._v(" "),a("el-option",{attrs:{label:"<=",value:"<="}}),e._v(" "),a("el-option",{attrs:{label:"Like",value:"Like"}}),e._v(" "),a("el-option",{attrs:{label:"NotNull",value:"NotNull"}}),e._v(" "),a("el-option",{attrs:{label:"BetWeen",value:"BetWeen"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"关联字典"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticClass:"edit-input",attrs:{filterable:"",clearable:"",size:"mini",placeholder:"请选择"},model:{value:t.row.dictName,callback:function(a){e.$set(t.row,"dictName",a)},expression:"scope.row.dictName"}},e._l(e.dicts,function(e){return a("el-option",{key:e.id,attrs:{label:""===e.remark?e.name:e.remark,value:e.name}})}),1)]}}])})],1)],1)],1)],1),e._v(" "),a("el-col",[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"role-span"},[e._v("生成配置")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"6px 9px"},attrs:{loading:e.saveGenLoading,icon:"el-icon-check",size:"mini",type:"primary"},on:{click:e.saveGen}},[e._v("保存\n                    ")])],1),e._v(" "),a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":"120px"}},[a("el-form-item",{attrs:{label:"作者名称",prop:"author"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("类上面的作者名称")])],1),e._v(" "),a("el-form-item",{attrs:{label:"模块名称",prop:"moduleName"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.form.moduleName,callback:function(t){e.$set(e.form,"moduleName",t)},expression:"form.moduleName"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("模块的名称，请选择项目中已存在的模块")])],1),e._v(" "),a("el-form-item",{attrs:{label:"至于包下",prop:"pack"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.form.pack,callback:function(t){e.$set(e.form,"pack",t)},expression:"form.pack"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("项目包的名称，生成的代码放到哪个包里面")])],1),e._v(" "),a("el-form-item",{attrs:{label:"服务请求路径",prop:"apiPath"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.form.apiPath,callback:function(t){e.$set(e.form,"apiPath",t)},expression:"form.apiPath"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("服务的请求路径")])],1),e._v(" "),a("el-form-item",{attrs:{label:"去表前缀",prop:"prefix"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"默认不去除表前缀"},model:{value:e.form.prefix,callback:function(t){e.$set(e.form,"prefix",t)},expression:"form.prefix"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("默认不去除表前缀，可自定义")])],1)],1)],1)],1)],1)],1)},i=[],r=(a("ac6a"),a("f3e2"),a("15fc")),o={name:"GeneratorConfig",data:function(){return{tableName:"",dsId:"",columnLoading:!1,saveColumnLoading:!1,saveGenLoading:!1,syncLoading:!1,tableHeight:550,dicts:[],columnConfigList:[],form:{id:null,tableName:"",author:"",pack:"",moduleName:"",apiPath:"",prefix:""},rules:{author:[{required:!0,message:"作者不能为空",trigger:"blur"}],pack:[{required:!0,message:"包路径不能为空",trigger:"blur"}],moduleName:[{required:!0,message:"模块不能为空",trigger:"blur"}],apiPath:[{required:!0,message:"服务请求路径不能为空",trigger:"blur"}]}}},created:function(){this.initData()},methods:{initData:function(){var e=this;this.tableHeight=document.documentElement.clientHeight-385,this.tableName=this.$route.query.tableName,this.dsId=this.$route.query.dsId,this.$nextTick(function(){e.columnLoading=!0,Object(r["b"])({dsId:e.dsId,tableName:e.tableName}).then(function(t){e.$isNotEmpty(t.data.genConfig)&&(e.form=t.data.genConfig),e.columnConfigList=t.data.columnConfigList,e.columnLoading=!1}).catch(function(t){e.columnLoading=!1})})},saveColumn:function(){var e=this;this.saveColumnLoading=!0,this.columnConfigList.forEach(function(t){t.tableName=e.tableName,t.dsId=e.dsId}),Object(r["d"])(this.columnConfigList).then(function(t){e.$message({message:"保存成功",type:"success"}),e.saveColumnLoading=!1,e.initData()}).catch(function(t){e.saveColumnLoading=!1})},saveGen:function(){var e=this;this.saveGenLoading=!0,this.form.tableName=this.tableName,this.form.dsId=this.dsId,Object(r["e"])(this.form).then(function(t){e.$message({message:"保存成功",type:"success"}),e.saveGenLoading=!1,e.initData()}).catch(function(t){e.saveGenLoading=!1})},sync:function(){var e=this;this.syncLoading=!0,Object(r["f"])({dsId:this.dsId,tableName:this.tableName}).then(function(){e.initData(),e.$message({message:"同步成功",type:"success"}),e.syncLoading=!1}).then(function(){e.syncLoading=!1})}}},l=o,s=a("0c7c"),c=Object(s["a"])(l,n,i,!1,null,null,null);t["default"]=c.exports},c6e7:function(e,t,a){"use strict";a("456d"),a("ac6a"),a("f3e2"),a("96cf");var n=a("3b8d");t["a"]={data:function(){return{pageUrl:"",pageLoading:!1,page:{records:[],total:0,current:1,size:10,orders:[],entity:{},params:{}},time:100}},methods:{findPage:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this,e.next=3,t.findPageInit();case 3:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",new Promise(function(e,a){t.pageLoading=!0,Object.keys(t.page.entity).forEach(function(e){null!=t.page.entity[e]&&""!==t.page.entity[e]||delete t.page.entity[e]}),Object.keys(t.page.params).forEach(function(e){null!=t.page.params[e]&&""!==t.page.params[e]||delete t.page.params[e]}),t.page.records=[],t.$page(t.pageUrl,t.page).then(function(a){t.page=a.data,setTimeout(function(){t.pageLoading=!1},t.time),e(a)}).catch(function(e){t.pageLoading=!1,a(e)})}));case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),findPageInit:function(){return!0},pageChange:function(e){this.page.current=e,this.findPage()},sizeChange:function(e){this.page.current=0,this.page.size=e,this.findPage()},sortChange:function(e){var t=e.prop,a=e.order;this.page.orders=[],this.page.orders=[{column:t,asc:"ascending"===a}],this.findPage()},resetPage:function(){this.page.entity={},this.page.params={},this.page.orders=[]}}}}}]);