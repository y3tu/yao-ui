(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60de00c0"],{"15fc":function(e,t,a){"use strict";a.d(t,"c",function(){return o}),a.d(t,"b",function(){return n}),a.d(t,"e",function(){return i}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return r}),a.d(t,"f",function(){return c});var l=a("9bd2");function o(e){return l["a"].get("base/generator/getTables",e)}function n(e){return l["a"].postData("base/generator/getGenConfig",e)}function i(e){return l["a"].postData("base/generator/saveGenConfig",e)}function s(e){return l["a"].postData("base/generator/saveColumnConfig",e)}function r(e){return l["a"].postData("base/generator/genPreview",e)}function c(e){return l["a"].postData("base/generator/sync",e)}},"9efd":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:15}},[a("el-col",{staticStyle:{"margin-bottom":"10px"}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("字段配置："+e._s(e.tableName))]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"6px 9px"},attrs:{loading:e.saveColumnLoading,icon:"el-icon-s-promotion",size:"mini",type:"success"},on:{click:e.saveColumn}},[e._v("保存\n                    ")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"6px 9px","margin-right":"9px"},attrs:{icon:"el-icon-check",size:"mini",type:"primary"}},[a("router-link",{attrs:{to:"/tool/generator/preview?tableName="+e.tableName+"&dsId="+e.dsId}},[e._v("\n                            预览\n                        ")])],1),e._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"数据库中表字段变动时使用该功能",placement:"top-start"}},[a("el-button",{staticStyle:{float:"right",padding:"6px 9px"},attrs:{loading:e.syncLoading,icon:"el-icon-refresh",size:"mini",type:"info"},on:{click:e.sync}},[e._v("同步\n                        ")])],1)],1),e._v(" "),a("el-form",{attrs:{size:"small","label-width":"90px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.columnLoading,expression:"columnLoading"}],staticStyle:{width:"100%","margin-bottom":"15px"},attrs:{data:e.columnConfigList,"max-height":e.tableHeight,size:"small"}},[a("el-table-column",{attrs:{prop:"columnName",label:"字段名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"columnType",label:"字段类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"字段描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"edit-input",attrs:{size:"mini"},model:{value:t.row.remark,callback:function(a){e.$set(t.row,"remark",a)},expression:"scope.row.remark"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"必填",width:"70px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{model:{value:t.row.notNull,callback:function(a){e.$set(t.row,"notNull",a)},expression:"scope.row.notNull"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"列表",width:"70px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{model:{value:t.row.listShow,callback:function(a){e.$set(t.row,"listShow",a)},expression:"scope.row.listShow"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"表单",width:"70px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{model:{value:t.row.formShow,callback:function(a){e.$set(t.row,"formShow",a)},expression:"scope.row.formShow"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"表单类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticClass:"edit-input",attrs:{filterable:"",clearable:"",size:"mini",placeholder:"请选择"},model:{value:t.row.formType,callback:function(a){e.$set(t.row,"formType",a)},expression:"scope.row.formType"}},[a("el-option",{attrs:{label:"文本框",value:"Input"}}),e._v(" "),a("el-option",{attrs:{label:"文本域",value:"Textarea"}}),e._v(" "),a("el-option",{attrs:{label:"单选框",value:"Radio"}}),e._v(" "),a("el-option",{attrs:{label:"下拉框",value:"Select"}}),e._v(" "),a("el-option",{attrs:{label:"日期框",value:"Date"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"查询方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticClass:"edit-input",attrs:{filterable:"",clearable:"",size:"mini",placeholder:"请选择"},model:{value:t.row.queryType,callback:function(a){e.$set(t.row,"queryType",a)},expression:"scope.row.queryType"}},[a("el-option",{attrs:{label:"=",value:"="}}),e._v(" "),a("el-option",{attrs:{label:"!=",value:"!="}}),e._v(" "),a("el-option",{attrs:{label:">=",value:">="}}),e._v(" "),a("el-option",{attrs:{label:"<=",value:"<="}}),e._v(" "),a("el-option",{attrs:{label:"Like",value:"Like"}}),e._v(" "),a("el-option",{attrs:{label:"NotNull",value:"NotNull"}}),e._v(" "),a("el-option",{attrs:{label:"BetWeen",value:"BetWeen"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"关联字典"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{staticClass:"edit-input",attrs:{filterable:"",clearable:"",size:"mini",placeholder:"请选择"},model:{value:t.row.dictName,callback:function(a){e.$set(t.row,"dictName",a)},expression:"scope.row.dictName"}},e._l(e.dicts,function(e){return a("el-option",{key:e.id,attrs:{label:""===e.remark?e.name:e.remark,value:e.name}})}),1)]}}])})],1)],1)],1)],1),e._v(" "),a("el-col",[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"role-span"},[e._v("生成配置")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"6px 9px"},attrs:{loading:e.saveGenLoading,icon:"el-icon-check",size:"mini",type:"primary"},on:{click:e.saveGen}},[e._v("保存\n                    ")])],1),e._v(" "),a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":"120px"}},[a("el-form-item",{attrs:{label:"作者名称",prop:"author"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("类上面的作者名称")])],1),e._v(" "),a("el-form-item",{attrs:{label:"模块名称",prop:"moduleName"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.form.moduleName,callback:function(t){e.$set(e.form,"moduleName",t)},expression:"form.moduleName"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("模块的名称，请选择项目中已存在的模块")])],1),e._v(" "),a("el-form-item",{attrs:{label:"至于包下",prop:"pack"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.form.pack,callback:function(t){e.$set(e.form,"pack",t)},expression:"form.pack"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("项目包的名称，生成的代码放到哪个包里面")])],1),e._v(" "),a("el-form-item",{attrs:{label:"服务请求路径",prop:"apiPath"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.form.apiPath,callback:function(t){e.$set(e.form,"apiPath",t)},expression:"form.apiPath"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("服务的请求路径")])],1),e._v(" "),a("el-form-item",{attrs:{label:"去表前缀",prop:"prefix"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"默认不去除表前缀"},model:{value:e.form.prefix,callback:function(t){e.$set(e.form,"prefix",t)},expression:"form.prefix"}}),e._v(" "),a("span",{staticStyle:{color:"#C0C0C0","margin-left":"10px"}},[e._v("默认不去除表前缀，可自定义")])],1)],1)],1)],1)],1)],1)},o=[],n=(a("ac6a"),a("f3e2"),a("15fc")),i={name:"GeneratorConfig",data:function(){return{tableName:"",dsId:"",columnLoading:!1,saveColumnLoading:!1,saveGenLoading:!1,syncLoading:!1,tableHeight:550,dicts:[],columnConfigList:[],form:{id:null,tableName:"",author:"",pack:"",moduleName:"",apiPath:"",prefix:""},rules:{author:[{required:!0,message:"作者不能为空",trigger:"blur"}],pack:[{required:!0,message:"包路径不能为空",trigger:"blur"}],moduleName:[{required:!0,message:"模块不能为空",trigger:"blur"}],apiPath:[{required:!0,message:"服务请求路径不能为空",trigger:"blur"}]}}},created:function(){this.initData()},methods:{initData:function(){var e=this;this.tableHeight=document.documentElement.clientHeight-385,this.tableName=this.$route.query.tableName,this.dsId=this.$route.query.dsId,this.$nextTick(function(){e.columnLoading=!0,Object(n["b"])({dsId:e.dsId,tableName:e.tableName}).then(function(t){e.$isNotEmpty(t.data.genConfig)&&(e.form=t.data.genConfig),e.columnConfigList=t.data.columnConfigList,e.columnLoading=!1}).catch(function(t){e.columnLoading=!1})})},saveColumn:function(){var e=this;this.saveColumnLoading=!0,this.columnConfigList.forEach(function(t){t.tableName=e.tableName,t.dsId=e.dsId}),Object(n["d"])(this.columnConfigList).then(function(t){e.$message({message:"保存成功",type:"success"}),e.saveColumnLoading=!1,e.initData()}).catch(function(t){e.saveColumnLoading=!1})},saveGen:function(){var e=this;this.saveGenLoading=!0,this.form.tableName=this.tableName,this.form.dsId=this.dsId,Object(n["e"])(this.form).then(function(t){e.$message({message:"保存成功",type:"success"}),e.saveGenLoading=!1,e.initData()}).catch(function(t){e.saveGenLoading=!1})},sync:function(){var e=this;this.syncLoading=!0,Object(n["f"])({dsId:this.dsId,tableName:this.tableName}).then(function(){e.initData(),e.$message({message:"同步成功",type:"success"}),e.syncLoading=!1}).then(function(){e.syncLoading=!1})}}},s=i,r=a("0c7c"),c=Object(r["a"])(s,l,o,!1,null,null,null);t["default"]=c.exports}}]);