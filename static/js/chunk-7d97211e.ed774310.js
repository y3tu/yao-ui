(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d97211e"],{5024:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{visible:e.dialog,"close-on-click-modal":!1,title:"七牛云配置","append-to-body":"",width:"580px"},on:{"update:visible":function(t){e.dialog=t}}},[o("el-form",{ref:"form",staticStyle:{"margin-top":"6px"},attrs:{model:e.form,rules:e.rules,size:"small","label-width":"110px"}},[o("el-form-item",{attrs:{label:"Access Key",prop:"accessKey"}},[o("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"accessKey，在安全中心，秘钥管理中查看"},model:{value:e.form.accessKey,callback:function(t){e.$set(e.form,"accessKey",t)},expression:"form.accessKey"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Secret Key",prop:"secretKey"}},[o("el-input",{staticStyle:{width:"95%"},attrs:{type:"password",placeholder:"secretKey，在安全中心，秘钥管理中查看"},model:{value:e.form.secretKey,callback:function(t){e.$set(e.form,"secretKey",t)},expression:"form.secretKey"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"空间名称",prop:"bucket"}},[o("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"存储空间名称作为唯一的 Bucket 识别符"},model:{value:e.form.bucket,callback:function(t){e.$set(e.form,"bucket",t)},expression:"form.bucket"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"外链域名",prop:"host"}},[o("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"外链域名，可自定义，需在七牛云绑定"},model:{value:e.form.host,callback:function(t){e.$set(e.form,"host",t)},expression:"form.host"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"存储区域"}},[o("el-select",{attrs:{placeholder:"请选择存储区域"},model:{value:e.form.zone,callback:function(t){e.$set(e.form,"zone",t)},expression:"form.zone"}},e._l(e.zones,function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),e._v(" "),o("el-form-item",{attrs:{label:"空间类型",prop:"type"}},[o("el-radio",{attrs:{label:"公开"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[e._v("公开")]),e._v(" "),o("el-radio",{attrs:{label:"私有"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[e._v("私有")])],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialog=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.doSubmit}},[e._v("确认")])],1)],1)},l=[],a=o("a4ba"),s={data:function(){return{zones:["华东","华北","华南","北美","东南亚"],dialog:!1,loading:!1,form:{accessKey:"",secretKey:"",bucket:"",host:"",zone:"",type:""},rules:{accessKey:[{required:!0,message:"请输入accessKey",trigger:"blur"}],secretKey:[{required:!0,message:"请输入secretKey",trigger:"blur"}],bucket:[{required:!0,message:"请输入空间名称",trigger:"blur"}],host:[{required:!0,message:"请输入外链域名",trigger:"blur"}],type:[{required:!0,message:"空间类型不能为空",trigger:"blur"}]}}},methods:{init:function(){var e=this;Object(a["b"])().then(function(t){e.form=t.data})},doSubmit:function(){var e=this;this.$refs["form"].validate(function(t){if(!t)return!1;e.loading=!0,Object(a["c"])(e.form).then(function(t){e.$notify({title:"修改成功",type:"success",duration:2500}),e.$parent.crud.toQuery(),e.loading=!1,e.dialog=!1}).catch(function(t){e.loading=!1,console.log(t.response.data.message)})})}}},i=s,n=o("0c7c"),c=Object(n["a"])(i,r,l,!1,null,"87f0ae40",null);t["default"]=c.exports},a4ba:function(e,t,o){"use strict";o.d(t,"b",function(){return i}),o.d(t,"c",function(){return n});var r=o("9bd2");function l(e){return r["a"].deleteData("support/file/qiniu/delete",e)}function a(e){return r["a"].get("support/file/qiniu/sync",e)}function s(e){return r["a"].get("support/file/qiniu/download/".concat(e))}function i(){return r["a"].get("support/file/qiniu/getConfig")}function n(e){return r["a"].putData("support/file/qiniu/updateConfig",e)}t["a"]={sync:a,del:l,download:s}}}]);