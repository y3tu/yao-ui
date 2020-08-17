(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bb1ea93"],{"54a7":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"head-container"},[e.crud.props.searchToggle?a("div",[a("label",{staticClass:"el-form-item-label"},[e._v("小说分类")]),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.crud.entity.catId,callback:function(t){e.$set(e.crud.entity,"catId",t)},expression:"crud.entity.catId"}},e._l(e.dict.BOOK_CATEGORY,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})}),1),e._v(" "),a("label",{staticClass:"el-form-item-label"},[e._v("小说名")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"185px"},attrs:{clearable:"",placeholder:"小说名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.crud.toQuery(t)}},model:{value:e.crud.entity.bookName,callback:function(t){e.$set(e.crud.entity,"bookName",t)},expression:"crud.entity.bookName"}}),e._v(" "),a("label",{staticClass:"el-form-item-label"},[e._v("作者名")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"185px"},attrs:{clearable:"",placeholder:"作者名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.crud.toQuery(t)}},model:{value:e.crud.entity.authorName,callback:function(t){e.$set(e.crud.entity,"authorName",t)},expression:"crud.entity.authorName"}}),e._v(" "),a("label",{staticClass:"el-form-item-label"},[e._v("状态")]),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.crud.entity.taskStatus,callback:function(t){e.$set(e.crud.entity,"taskStatus",t)},expression:"crud.entity.taskStatus"}},[a("el-option",{attrs:{label:"成功",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"待执行",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"执行中",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"失败",value:"0"}})],1),e._v(" "),a("rrOperation",{attrs:{crud:e.crud}})],1):e._e(),e._v(" "),a("crudOperation",{attrs:{permission:e.permission}})],1),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"before-close":e.crud.cancelCU,visible:e.crud.status.cu>0,title:e.crud.status.title,width:"600px"},on:{"update:visible":function(t){return e.$set(e.crud.status,"cu > 0",t)}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":"120px"}},[a("el-form-item",{attrs:{label:"爬虫源",prop:"sourceId"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.sourceChange},model:{value:e.form.sourceId,callback:function(t){e.$set(e.form,"sourceId",t)},expression:"form.sourceId"}},e._l(e.dict.crawl_source,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:parseInt(e.value)}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"源站小说ID",prop:"sourceBookId"}},[a("el-input",{staticStyle:{width:"370px"},model:{value:e.form.sourceBookId,callback:function(t){e.$set(e.form,"sourceBookId",t)},expression:"form.sourceBookId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"小说分类",prop:"catId"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.catId,callback:function(t){e.$set(e.form,"catId",t)},expression:"form.catId"}},e._l(e.dict.BOOK_CATEGORY,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:parseInt(e.value)}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"小说名",prop:"bookName"}},[a("el-input",{staticStyle:{width:"370px"},model:{value:e.form.bookName,callback:function(t){e.$set(e.form,"bookName",t)},expression:"form.bookName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"作者名",prop:"authorName"}},[a("el-input",{staticStyle:{width:"370px"},model:{value:e.form.authorName,callback:function(t){e.$set(e.form,"authorName",t)},expression:"form.authorName"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:e.crud.cancelCU}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{loading:2===e.crud.cu,type:"primary"},on:{click:e.crud.submitCU}},[e._v("确认")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.crud.loading,expression:"crud.loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.crud.data,size:"small","row-class-name":e.tableRowClassName},on:{"selection-change":e.crud.selectionChangeHandler}},[e._v(">\n        "),a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sourceId",label:"爬虫源ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sourceName",label:"爬虫源名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sourceBookId",label:"源站小说ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"catId",label:"小说分类"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.dict.name["BOOK_CATEGORY"][t.row.catId]))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"bookName",label:"爬取的小说名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"authorName",label:"爬取的小说作者名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"taskStatus",label:"任务状态"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[3===l.taskStatus?a("span",[a("i",{staticClass:"el-icon-loading"}),e._v(" 执行中")]):e._e(),e._v(" "),0===l.taskStatus?a("span",[e._v("失败")]):e._e(),e._v(" "),1===l.taskStatus?a("span",[e._v("成功")]):e._e(),e._v(" "),2===l.taskStatus?a("span",[e._v("待执行")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"excCount",label:"已经执行次数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),a("el-table-column",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["crawlSingleTask:update","crawlSingleTask:delete"],expression:"['crawlSingleTask:update','crawlSingleTask:delete']"}],attrs:{label:"操作",width:"200px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("udOperation",{attrs:{data:t.row,permission:e.permission}},[a("el-button",{attrs:{slot:"right",size:"mini",type:"primary",icon:"el-icon-refresh"},on:{click:function(a){return e.resetTask(t.row)}},slot:"right"})],1)]}}])})],1),e._v(" "),a("pagination")],1)},r=[],o=a("bd86"),s=(a("7f7f"),a("cebc")),n=a("9bd2");function i(e){return n["a"].postData("support/book/crawlSingleTask/create",e)}function c(e){return n["a"].deleteData("support/book/crawlSingleTask/delete",e)}function u(e){return n["a"].putData("support/book/crawlSingleTask/update",e)}function d(e,t){return n["a"].download("support/book/crawlSingleTask/export",e,t)}function p(e){return n["a"].post("support/book/crawlSingleTask/resetTask",e)}var m,b={add:i,edit:u,del:c,download:d},v=a("c6db"),f=a("4f59"),k=a("ab00"),_=a("8414"),h=a("55b8"),g={id:null,sourceId:null,sourceName:null,sourceBookId:null,catId:null,bookName:null,authorName:null,taskStatus:null,excCount:null,createTime:null},w={name:"CrawlSingleTask",components:{pagination:h["a"],crudOperation:k["a"],rrOperation:f["a"],udOperation:_["a"]},mixins:[Object(v["f"])(),Object(v["d"])(),Object(v["c"])(g),Object(v["a"])()],cruds:function(){return Object(v["b"])({title:"CrawlSingleTask",url:"support/book/crawlSingleTask/page",idField:"id",sort:"id,desc",crudMethod:Object(s["a"])({},b)})},dicts:["BOOK_CATEGORY","crawl_source"],data:function(){return{permission:{add:["crawlSingleTask:create"],edit:["crawlSingleTask:update"],del:["crawlSingleTask:delete"]},rules:{sourceId:[{required:!0,message:"爬虫源不能为空",trigger:"blur"}],sourceBookId:[{required:!0,message:"源站小说ID不能为空",trigger:"blur"}],catId:[{required:!0,message:"小说分类不能为空",trigger:"blur"}],bookName:[{required:!0,message:"小说名不能为空",trigger:"blur"}],authorName:[{required:!0,message:"作者名不能为空",trigger:"blur"}]}}},methods:(m={},Object(o["a"])(m,v["b"].HOOK.beforeRefresh,function(){return!0}),Object(o["a"])(m,"sourceChange",function(e){this.crud.form.sourceName=this.dict.name["crawl_source"][e]}),Object(o["a"])(m,"resetTask",function(e){var t=this;p({id:e.id}).then(function(e){t.crud.refresh(),t.$notify({title:"重置任务成功！",type:"success",duration:2500})})}),Object(o["a"])(m,"tableRowClassName",function(e){var t=e.row;e.rowIndex;return 0===t.taskStatus?"error-row":1===t.taskStatus?"success-row":3===t.taskStatus?"warning-row":2===t.taskStatus?"wait-row":""}),m)},y=w,O=(a("e594"),a("0c7c")),S=Object(O["a"])(y,l,r,!1,null,null,null);t["default"]=S.exports},8414:function(e,t,a){"use strict";var l,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{directives:[{name:"has-permission",rawName:"v-has-permission",value:e.permission.edit,expression:"permission.edit"}],attrs:{loading:2===e.crud.status.cu,disabled:e.disabledEdit,size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.crud.toEdit(e.data)}}}),e._v(" "),a("el-popover",{directives:[{name:"has-permission",rawName:"v-has-permission",value:e.permission.del,expression:"permission.del"}],attrs:{placement:"top",width:"180",trigger:"manual"},on:{show:e.onPopoverShow,hide:e.onPopoverHide},model:{value:e.pop,callback:function(t){e.pop=t},expression:"pop"}},[a("p",[e._v(e._s(e.msg))]),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:e.doCancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{loading:2===e.crud.dataStatus[e.crud.getDataId(e.data)].delete,type:"primary",size:"mini"},on:{click:function(t){return e.crud.doDelete(e.data)}}},[e._v("确定")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",disabled:e.disabledDle,type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:e.toDelete},slot:"reference"})],1),e._v(" "),e._t("right")],2)},o=[],s=a("bd86"),n=a("c6db"),i={mixins:[Object(n["a"])()],props:{data:{type:Object,required:!0},permission:{type:Object,required:!0},disabledEdit:{type:Boolean,default:!1},disabledDle:{type:Boolean,default:!1},msg:{type:String,default:"确定删除本条数据吗？"}},data:function(){return{pop:!1}},methods:(l={doCancel:function(){this.pop=!1,this.crud.cancelDelete(this.data)},toDelete:function(){this.pop=!0}},Object(s["a"])(l,n["b"].HOOK.afterDelete,function(e,t){t===this.data&&(this.pop=!1)}),Object(s["a"])(l,"onPopoverShow",function(){var e=this;setTimeout(function(){document.addEventListener("click",e.handleDocumentClick)},0)}),Object(s["a"])(l,"onPopoverHide",function(){document.removeEventListener("click",this.handleDocumentClick)}),Object(s["a"])(l,"handleDocumentClick",function(e){this.pop=!1}),l)},c=i,u=a("0c7c"),d=Object(u["a"])(c,r,o,!1,null,null,null);t["a"]=d.exports},a6b1:function(e,t,a){},e594:function(e,t,a){"use strict";var l=a("a6b1"),r=a.n(l);r.a}}]);