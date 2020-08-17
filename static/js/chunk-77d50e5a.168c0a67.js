(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77d50e5a"],{"274f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"head-container"},[e.crud.props.searchToggle?a("div",[a("label",{staticClass:"el-form-item-label"},[e._v("小说分类")]),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.crud.entity.catId,callback:function(t){e.$set(e.crud.entity,"catId",t)},expression:"crud.entity.catId"}},e._l(e.dict.BOOK_CATEGORY,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})}),1),e._v(" "),a("label",{staticClass:"el-form-item-label"},[e._v("小说名")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"185px"},attrs:{clearable:"",placeholder:"小说名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.crud.toQuery(t)}},model:{value:e.crud.entity.bookName,callback:function(t){e.$set(e.crud.entity,"bookName",t)},expression:"crud.entity.bookName"}}),e._v(" "),a("label",{staticClass:"el-form-item-label"},[e._v("作者名")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"185px"},attrs:{clearable:"",placeholder:"作者名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.crud.toQuery(t)}},model:{value:e.crud.entity.authorName,callback:function(t){e.$set(e.crud.entity,"authorName",t)},expression:"crud.entity.authorName"}}),e._v(" "),a("label",{staticClass:"el-form-item-label"},[e._v("状态")]),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.crud.entity.status,callback:function(t){e.$set(e.crud.entity,"status",t)},expression:"crud.entity.status"}},[a("el-option",{key:0,attrs:{label:"入库",value:0}}),e._v(" "),a("el-option",{key:1,attrs:{label:"上架",value:1}})],1),e._v(" "),a("label",{staticClass:"el-form-item-label"},[e._v("创建时间")]),e._v(" "),a("el-date-picker",{staticClass:"date-item",attrs:{"default-time":["00:00:00","23:59:59"],type:"daterange","range-separator":":",size:"small","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.crud.params.createTimeArr,callback:function(t){e.$set(e.crud.params,"createTimeArr",t)},expression:"crud.params.createTimeArr"}}),e._v(" "),a("rrOperation",{attrs:{crud:e.crud}})],1):e._e(),e._v(" "),a("crudOperation",{attrs:{permission:e.permission}})],1),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"before-close":e.crud.cancelCU,visible:e.crud.status.cu>0,title:e.crud.status.title,width:"500px"},on:{"update:visible":function(t){return e.$set(e.crud.status,"cu > 0",t)}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":"80px"}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:e.crud.cancelCU}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{loading:2===e.crud.cu,type:"primary"},on:{click:e.crud.submitCU}},[e._v("确认")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.crud.loading,expression:"crud.loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:e.crud.data,size:"small"},on:{"selection-change":e.crud.selectionChangeHandler}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"小说封面"}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{fit:"cover",lazy:"",src:t.row.picUrl,"preview-src-list":[t.row.picUrl]}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1),e._v(" "),a("el-form-item",{attrs:{label:"书籍描述"}},[a("span",{domProps:{innerHTML:e._s(t.row.bookDesc)}})]),e._v(" "),a("el-form-item",{attrs:{label:"点击量"}},[a("span",[e._v(e._s(t.row.visitCount))])]),e._v(" "),a("el-form-item",{attrs:{label:"总字数"}},[a("span",[e._v(e._s(t.row.wordCount))])]),e._v(" "),a("el-form-item",{attrs:{label:"评论数"}},[a("span",[e._v(e._s(t.row.commentCount))])]),e._v(" "),a("el-form-item",{attrs:{label:"最新目录名"}},[a("span",[e._v(e._s(t.row.lastIndexName))])]),e._v(" "),a("el-form-item",{attrs:{label:"最新目录更新时间"}},[a("span",[e._v(e._s(e.parseTime(t.row.lastIndexUpdateTime)))])]),e._v(" "),a("el-form-item",{attrs:{label:"书源ID"}},[a("span",[e._v(e._s(t.row.crawlSourceId))])]),e._v(" "),a("el-form-item",{attrs:{label:"源站小说ID"}},[a("span",[e._v(e._s(t.row.crawlBookId))])]),e._v(" "),a("el-form-item",{attrs:{label:"最后一次的抓取时间"}},[a("span",[e._v(e._s(e.parseTime(t.row.crawlLastTime)))])]),e._v(" "),a("el-form-item",{attrs:{label:"是否收费"}},[a("span",[e._v(e._s(0===t.row.isVip?"免费":"收费"))])]),e._v(" "),a("el-form-item",{attrs:{label:"预览最新章节"}},[a("router-link",{attrs:{to:"/book/front?bookId="+t.row.id+"&bookIndexId="+t.row.lastIndexId}},[a("el-button",{attrs:{type:"success",icon:"el-icon-view",circle:""}})],1)],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"workDirection",label:"作品方向"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(0===t.row.workDirection?"男频":"女频"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"catName",label:"分类名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bookName",label:"小说名",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"authorName",label:"作者名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"评分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bookStatus",label:"书籍状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(0===t.row.bookStatus?"连载中":"已完结"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(0===t.row.status?"入库":"上架"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.updateTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"crawlIsStop",label:"正在获取书籍内容",formatter:e.crawlIsStopFormatter}}),e._v(" "),a("el-table-column",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["book:update","book:delete"],expression:"['book:update','book:delete']"}],attrs:{fixed:"right",label:"操作",width:"300px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("udOperation",{attrs:{data:t.row,permission:e.permission}},[a("el-button",{directives:[{name:"has-permission",rawName:"v-has-permission",value:e.permission.edit,expression:"permission.edit"}],attrs:{slot:"right",size:"mini",type:"primary",icon:"el-icon-refresh"},on:{click:function(a){return e.resetCrawlIsStop(t.row)}},slot:"right"})],1)]}}])})],1),e._v(" "),a("pagination")],1)},l=[],o=a("bd86"),s=a("cebc"),i=a("9bd2");function n(e){return i["a"].postData("support/book/book/create",e)}function c(e){return i["a"].deleteData("support/book/book/delete",e)}function u(e){return i["a"].putData("support/book/book/update",e)}function d(e,t){return i["a"].download("support/book/book/export",e,t)}function p(e){return i["a"].get("support/book/book/resetCrawlIsStop/".concat(e))}var m,b={add:n,edit:u,del:c,download:d},v=a("c6db"),f=a("4f59"),_=a("ab00"),k=a("8414"),h=a("55b8"),w={id:null,workDirection:null,catId:null,catName:null,picUrl:null,bookName:null,authorId:null,authorName:null,bookDesc:null,score:null,bookStatus:null,visitCount:null,wordCount:null,commentCount:null,lastIndexId:null,lastIndexName:null,lastIndexUpdateTime:null,isVip:null,status:null,updateTime:null,createTime:null,crawlSourceId:null,crawlBookId:null,crawlLastTime:null,crawlIsStop:null},y={name:"Book",components:{pagination:h["a"],crudOperation:_["a"],rrOperation:f["a"],udOperation:k["a"]},mixins:[Object(v["f"])(),Object(v["d"])(),Object(v["c"])(w),Object(v["a"])()],cruds:function(){return Object(v["b"])({title:"Book",url:"support/book/book/page",idField:"id",sort:"id,desc",crudMethod:Object(s["a"])({},b)})},dicts:["BOOK_CATEGORY"],data:function(){return{permission:{add:["book:create"],edit:["book:update"],del:["book:delete"]},rules:{workDirection:[{required:!0,message:"作品方向不能为空",trigger:"blur"}],catId:[{required:!0,message:"分类ID不能为空",trigger:"blur"}],bookName:[{required:!0,message:"小说名不能为空",trigger:"blur"}],authorName:[{required:!0,message:"作者名不能为空",trigger:"blur"}]}}},methods:(m={},Object(o["a"])(m,v["b"].HOOK.beforeRefresh,function(){return!0}),Object(o["a"])(m,"crawlIsStopFormatter",function(e,t,a,r){return 0===a?"正在更新":1===a?"已停止":void 0}),Object(o["a"])(m,"resetCrawlIsStop",function(e){var t=this;p(e.id).then(function(e){t.$notify({title:"重置成功！",type:"success",duration:2500}),t.crud.refresh()})}),m)},g=y,x=(a("4bb2"),a("0c7c")),C=Object(x["a"])(g,r,l,!1,null,null,null);t["default"]=C.exports},"2fca":function(e,t,a){},"4bb2":function(e,t,a){"use strict";var r=a("2fca"),l=a.n(r);l.a},8414:function(e,t,a){"use strict";var r,l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{directives:[{name:"has-permission",rawName:"v-has-permission",value:e.permission.edit,expression:"permission.edit"}],attrs:{loading:2===e.crud.status.cu,disabled:e.disabledEdit,size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(t){return e.crud.toEdit(e.data)}}}),e._v(" "),a("el-popover",{directives:[{name:"has-permission",rawName:"v-has-permission",value:e.permission.del,expression:"permission.del"}],attrs:{placement:"top",width:"180",trigger:"manual"},on:{show:e.onPopoverShow,hide:e.onPopoverHide},model:{value:e.pop,callback:function(t){e.pop=t},expression:"pop"}},[a("p",[e._v(e._s(e.msg))]),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:e.doCancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{loading:2===e.crud.dataStatus[e.crud.getDataId(e.data)].delete,type:"primary",size:"mini"},on:{click:function(t){return e.crud.doDelete(e.data)}}},[e._v("确定")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",disabled:e.disabledDle,type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:e.toDelete},slot:"reference"})],1),e._v(" "),e._t("right")],2)},o=[],s=a("bd86"),i=a("c6db"),n={mixins:[Object(i["a"])()],props:{data:{type:Object,required:!0},permission:{type:Object,required:!0},disabledEdit:{type:Boolean,default:!1},disabledDle:{type:Boolean,default:!1},msg:{type:String,default:"确定删除本条数据吗？"}},data:function(){return{pop:!1}},methods:(r={doCancel:function(){this.pop=!1,this.crud.cancelDelete(this.data)},toDelete:function(){this.pop=!0}},Object(s["a"])(r,i["b"].HOOK.afterDelete,function(e,t){t===this.data&&(this.pop=!1)}),Object(s["a"])(r,"onPopoverShow",function(){var e=this;setTimeout(function(){document.addEventListener("click",e.handleDocumentClick)},0)}),Object(s["a"])(r,"onPopoverHide",function(){document.removeEventListener("click",this.handleDocumentClick)}),Object(s["a"])(r,"handleDocumentClick",function(e){this.pop=!1}),r)},c=n,u=a("0c7c"),d=Object(u["a"])(c,l,o,!1,null,null,null);t["a"]=d.exports}}]);