(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cbb69518"],{"0a08":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{staticClass:"update-avatar",attrs:{title:e.$t("common.changeAvatar"),width:e.width,top:"50px","close-on-click-modal":!1,"close-on-press-escape":!1,visible:e.isVisible},on:{"update:visible":function(a){e.isVisible=a}}},[t("el-tabs",{staticClass:"avatar-tabs",model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:e.$t("common.hthz"),name:"first"}},[e._l(e.hthz,function(a,i){return[t("div",{key:i,staticClass:"avatar-wrapper"},[t("img",{attrs:{alt:e.$t("common.ctc"),src:e.resolveAvatar(a)},on:{click:function(t){return e.change(a)}}})])]})],2),e._v(" "),t("el-tab-pane",{attrs:{label:e.$t("common.al"),name:"second"}},[e._l(e.al,function(a,i){return[t("div",{key:i,staticClass:"avatar-wrapper"},[t("img",{attrs:{alt:e.$t("common.ctc"),src:e.resolveAvatar(a)},on:{click:function(t){return e.change(a)}}})])]})],2),e._v(" "),t("el-tab-pane",{attrs:{label:e.$t("common.lm"),name:"third"}},[e._l(e.lm,function(a,i){return[t("div",{key:i,staticClass:"avatar-wrapper"},[t("img",{attrs:{alt:e.$t("common.ctc"),src:e.resolveAvatar(a)},on:{click:function(t){return e.change(a)}}})])]})],2),e._v(" "),t("el-tab-pane",{attrs:{label:"自定义上传",name:"fourth"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.imagesUploadApi,headers:e.headers,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?t("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1)},c=[],s=t("cebc"),n=t("2f62"),r=t("ed08"),o=["default.jpg","1d22f3e41d284f50b2c8fc32e0788698.jpeg","2dd7a2d09fa94bf8b5c52e5318868b4d9.jpg","2dd7a2d09fa94bf8b5c52e5318868b4df.jpg","8f5b60ef00714a399ee544d331231820.jpeg","17e420c250804efe904a09a33796d5a10.jpg","17e420c250804efe904a09a33796d5a16.jpg","87d8194bc9834e9f8f0228e9e530beb1.jpeg","496b3ace787342f7954b7045b8b06804.jpeg","595ba7b05f2e485eb50565a50cb6cc3c.jpeg","964e40b005724165b8cf772355796c8c.jpeg","5997fedcc7bd4cffbd350b40d1b5b987.jpg","5997fedcc7bd4cffbd350b40d1b5b9824.jpg","a3b10296862e40edb811418d64455d00.jpeg","a43456282d684e0b9319cf332f8ac468.jpeg","bba284ac05b041a8b8b0d1927868d5c9x.jpg","c7c4ee7be3eb4e73a19887dc713505145.jpg","ff698bb2d25c4d218b3256b46c706ece.jpeg"],p=["cnrhVkzwxjPwAaCfPbdc.png","BiazfanxmamNRoxxVxka.png","gaOngJwsRYRaVAuXXcmB.png","WhxKECPNujWoWEFNdnJE.png","ubnKSIfAJTxIgXOKlciN.png","jZUIxmJycoymBprLOUbT.png"],d=["19034103295190235.jpg","20180414165920.jpg","20180414170003.jpg","20180414165927.jpg","20180414165754.jpg","20180414165815.jpg","20180414165821.jpg","20180414165827.jpg","20180414165834.jpg","20180414165840.jpg","20180414165846.jpg","20180414165855.jpg","20180414165909.jpg","20180414165914.jpg","20180414165936.jpg","20180414165942.jpg","20180414165947.jpg","20180414165955.jpg"],l={name:"Avatar",props:{dialogVisible:{type:Boolean,default:!1}},data:function(){return{activeName:"first",screenWidth:0,updating:!1,width:this.initWidth(),hthz:o,al:p,lm:d,headers:{Authorization:"bearer "+r["b"].auth.getToken()},imageUrl:""}},computed:Object(s["a"])({isVisible:{get:function(){return this.dialogVisible},set:function(){this.close()}}},Object(n["b"])(["imagesUploadApi"])),mounted:function(){var e=this;window.onresize=function(){return function(){e.width=e.initWidth()}()}},methods:{resolveAvatar:function(e){return t("a0fc")("./".concat(e))},change:function(e){var a=this;this.updating?this.$message({message:this.$t("tips.updating"),type:"warning"}):(this.updating=!0,this.$put("base/user/avatar",{avatar:e}).then(function(){a.$emit("success",e),a.updating=!1}).catch(function(e){console.error(e),a.$message({message:a.$t("tips.updateFailed"),type:"error"}),a.updating=!1}))},initWidth:function(){return this.screenWidth=document.body.clientWidth,this.screenWidth<991?"90%":this.screenWidth<1400?"55%":"820px"},close:function(){this.$emit("close")},handleAvatarSuccess:function(e,a){var t=this;this.updating?this.$message({message:this.$t("tips.updating"),type:"warning"}):(this.updating=!0,this.imageUrl=URL.createObjectURL(a.raw),this.$put("base/user/avatar",{avatar:e.data}).then(function(){t.$emit("success",e.data),t.updating=!1}).catch(function(e){console.error(e),t.$message({message:t.$t("tips.updateFailed"),type:"error"}),t.updating=!1}))},beforeAvatarUpload:function(e){var a="image/jpeg"===e.type||"image/gif"===e.type||"image/png"===e.type,t=e.size/1024/1024<2;return a||this.$message.error("上传头像图片只能是 JPG|GIF|PNG格式!"),t||this.$message.error("上传头像图片大小不能超过 2MB!"),a&&t}}},g=l,b=(t("b769"),t("0c7c")),u=Object(b["a"])(g,i,c,!1,null,"5956b128",null);a["default"]=u.exports},"19b0":function(e,a,t){},b769:function(e,a,t){"use strict";var i=t("19b0"),c=t.n(i);c.a}}]);