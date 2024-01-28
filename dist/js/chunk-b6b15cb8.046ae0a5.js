(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6b15cb8"],{"111e":function(e,t,a){"use strict";a("5dc0")},3440:function(e,t,a){"use strict";a("7bb4")},5531:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("WrapComponent",{attrs:{tableTitle:"全部用户"}},[t("el-button",{staticClass:"pri-add-btn",attrs:{slot:"operate",type:"primary",icon:"el-icon-circle-plus"},on:{click:function(t){return e.onOperate("new")}},slot:"operate"},[e._v(" 新增用户 ")]),t("el-form",{ref:"searchForm",staticClass:"search-form",attrs:{slot:"form",model:e.searchForm,inline:!0},slot:"form"},[t("el-form-item",{attrs:{label:"用户名 / 昵称",prop:"keyword"}},[t("el-input",{attrs:{placeholder:"用户名 / 昵称"},model:{value:e.searchForm.keyword,callback:function(t){e.$set(e.searchForm,"keyword",t)},expression:"searchForm.keyword"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getUserList}},[e._v("搜索")]),t("el-button",{attrs:{icon:"el-icon-refresh-left"},on:{click:e.resetForm}},[e._v("重置")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{slot:"table",data:e.tableData,"header-cell-style":{background:"rgba(144, 147, 153, 0.06)",color:"rgba(0, 0, 0, 0.65)",fontSize:"14px"}},slot:"table"},[t("el-table-column",{attrs:{prop:"username",label:"用户名","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"nickname",label:"昵称","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{prop:"roleName",label:"角色"}}),t("el-table-column",{attrs:{label:"操作",width:"320px"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",[t("el-button",{attrs:{type:"info",size:"mini",plain:""},on:{click:function(t){return e.resetPWD(a.row.id)}}},[e._v("重置密码")]),t("el-button",{attrs:{type:"info",size:"mini",plain:""},on:{click:function(t){return e.onOperate("edit",a.row.id)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger",size:"mini",plain:""},on:{click:function(t){return e.onDel("删除",a.row)}}},[e._v("删除")])],1)]}}])})],1),t("div",{staticClass:"content-footer clear",attrs:{slot:"footer"},slot:"footer"},[t("div",{staticClass:"block page-list self-right"},[t("vue-pagination",e._b({on:{sizeChange:e.changeSize,currentPageChange:e.changeCurrentPage}},"vue-pagination",e.pageParams,!1))],1)])],1),t("AddUserDialog",{attrs:{dialogFormVisible:e.dialogFormVisible,dialogTitle:e.dialogTitle,id:e.curId},on:{"update:dialogFormVisible":function(t){e.dialogFormVisible=t},"update:dialog-form-visible":function(t){e.dialogFormVisible=t},success:e.resetForm}})],1)},i=[],r=a("e523"),o=a("925a"),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-wrap"},[t("el-dialog",{attrs:{title:e.dialogTitle,visible:e.visible,width:"600px","close-on-click-modal":!1},on:{close:e.onResetForm}},[t("el-form",{ref:"userFormRef",staticClass:"form-common",attrs:{model:e.userForm,"label-width":"100px",rules:e.rules}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{staticClass:"input-380",attrs:{placeholder:"请输入用户名"},model:{value:e.userForm.username,callback:function(t){e.$set(e.userForm,"username",t)},expression:"userForm.username"}})],1),t("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[t("el-input",{staticClass:"input-380",attrs:{placeholder:"请输入昵称"},model:{value:e.userForm.nickname,callback:function(t){e.$set(e.userForm,"nickname",t)},expression:"userForm.nickname"}})],1),e.id?e._e():[t("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"设置密码",prop:"isDefault"}},[t("el-radio-group",{model:{value:e.userForm.isDefault,callback:function(t){e.$set(e.userForm,"isDefault",t)},expression:"userForm.isDefault"}},[t("el-radio",{attrs:{label:!0}},[e._v("默认")]),t("el-radio",{attrs:{label:!1}},[e._v("自定义密码")])],1)],1),e.userForm.isDefault?e._e():[t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{staticClass:"input-380",attrs:{"show-password":!0,placeholder:"请输入密码"},on:{input:function(t){return e.clearChinese(t,"password")}},model:{value:e.userForm.password,callback:function(t){e.$set(e.userForm,"password","string"===typeof t?t.trim():t)},expression:"userForm.password"}})],1),t("el-form-item",{attrs:{prop:"confirmPWD"}},[t("el-input",{staticClass:"input-380",attrs:{"show-password":!0,placeholder:"请再次输入密码"},model:{value:e.userForm.confirmPWD,callback:function(t){e.$set(e.userForm,"confirmPWD","string"===typeof t?t.trim():t)},expression:"userForm.confirmPWD"}})],1)]],t("el-form-item",{staticClass:"has-avatar",attrs:{label:"关联角色",prop:"roleNames"}},[e.userForm.roleNames.length?t("div",{staticClass:"role-list"},e._l(e.userForm.roleNames,(function(a,s){return t("el-tag",{key:s,attrs:{closable:"","disable-transitions":!1},on:{close:function(t){return e.delRole(e.userForm.roleNames,s)}}},[t("span",{staticClass:"tag-name"},[e._v(e._s(a.name))])])})),1):e._e(),t("el-button",{attrs:{icon:"el-icon-plus"},on:{click:function(t){e.rolePanelVisible=!0}}},[e._v("选择角色")])],1)],2),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.onResetForm}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary",loading:e.isLoading},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1),t("selection-panel",e._b({attrs:{title:"选择关联角色",show:e.rolePanelVisible,selectedItem:e.userForm.roleNames,"single-choice":!0,dialogWidth:"600px"},on:{confirm:e.confirmSelection,dataChange:e.changeRoleParams}},"selection-panel",e.rolePanelParams,!1))],1)},n=[],c=a("37b6"),u=function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{staticStyle:{"margin-top":"-80px"},attrs:{title:e.title,visible:e.dialogVisible,"destroy-on-close":!0,width:e.dialogWidth,"close-on-click-modal":!1},on:{close:function(t){return e.onCancel(e.selectedItem)}}},[t("div",{staticClass:"select-panel-list-box",attrs:{loading:e.loading}},[t("div",{staticClass:"search-box clear"},[t("span",{staticClass:"self-left select-panel-num"},[e._v(e._s(e.total)+"项")]),t("el-input",{staticClass:"self-right select-panel-info-input",attrs:{size:"small",placeholder:e.placeholder,"prefix-icon":"el-icon-search"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.emitDataChange("search")}},model:{value:e.searchInfo,callback:function(t){e.searchInfo=t},expression:"searchInfo"}})],1),t("el-table",{ref:"table",staticClass:"has-checkbox select-panel-list-table",attrs:{height:"305px",data:e.tableData,"row-key":e.rowKey},on:{"selection-change":e.selectionChange}},[e.singleChoice?t("el-table-column",{attrs:{width:"48"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-radio",{attrs:{label:a.row[e.rowKey]},nativeOn:{change:function(t){return e.getTemplateRow(a.row[e.rowKey],a.row)}},model:{value:e.templateRadio,callback:function(t){e.templateRadio=t},expression:"templateRadio"}},[e._v("   ")])]}}],null,!1,915172273)}):t("el-table-column",{attrs:{type:"selection",width:"48","reserve-selection":!0}}),e._l(e.columns,(function(a){return t("el-table-column",{key:a.prop,attrs:{label:a.label,"show-overflow-tooltip":"",width:a.width,align:a.align},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(s.row[a.prop]?s.row[a.prop]:"-"))])]}}],null,!0)})}))],2),e.total&&1e4!==e.pageSize?t("div",{staticClass:"page-box clear"},[e.otherOperation?t("el-button",{staticClass:"self-left add-btn",attrs:{type:"text",icon:e.otherOperation.icon},on:{click:e.doOperation}},[e._v(" "+e._s(e.otherOperation.text)+" ")]):e._e(),t("el-pagination",{staticClass:"self-right",attrs:{small:"","page-size":e.pageSize,layout:"prev, pager, next",total:e.total,"current-page":e.page},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"current-change":e.pageChange}})],1):e._e(),!e.total&&e.otherOperation?t("div",{staticClass:"page-box clear"},[t("el-button",{staticClass:"self-left add-btn",attrs:{type:"text",icon:e.otherOperation.icon},on:{click:e.doOperation}},[e._v(" "+e._s(e.otherOperation.text)+" ")])],1):e._e()],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){return e.onCancel(e.selectedItem)}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v(" 确定 ")])],1)])],1)},m=[],p={data(){return{isLoading:!1,templateRadio:"",searchInfo:"",page:1,selections:[]}},props:{dialogWidth:{type:String,default:"800px"},pageSize:{type:Number,default:10},title:{type:String,default:""},columns:{type:Array,default:()=>[]},placeholder:{type:String,default:""},selectedItem:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},tableData:{type:Array,default:()=>[]},total:{type:Number,default:0},loading:{type:Boolean,default:!1},singleChoice:{type:Boolean,default:!1},dataChange:{type:Function},rowKey:{type:String,default:"id"},otherOperation:{type:Object},otherOperationFunction:{type:Function,default:()=>{}}},methods:{onConfirm(){this.onCancel(this.selections)},onCancel(e){this.searchInfo="",this.pageChange(1),this.$emit("confirm",e)},initData(){this.selectedItem&&this.selectedItem.length?this.initSelection(this.selectedItem):this.templateRadio=""},initSelection(e){e.forEach(e=>{const t=this.tableData.find(t=>{if(t[this.rowKey]===e[this.rowKey])return t});t&&(this.singleChoice?(this.templateRadio=t[this.rowKey],this.selections[0]=t):this.$refs.table.toggleRowSelection(t,!0))})},selectionChange(e){this.selections=e},pageChange(e){this.page=e,this.emitDataChange()},emitDataChange(e=null){e&&(this.page=1),this.$emit("dataChange",{page:this.page,searchInfo:this.searchInfo})},getTemplateRow(e,t){this.selections[0]=t},doOperation(){this.$emit("otherOperationFunction")}},computed:{dialogVisible(){return this.show}},watch:{dialogVisible(e){e||(this.searchInfo="")}},updated(){this.dialogVisible&&this.initData()}},d=p,h=(a("111e"),a("2877")),g=Object(h["a"])(d,u,m,!1,null,"19041147",null),f=g.exports,b={name:"AddAccount",props:{dialogTitle:{type:String,default:"新增"},dialogFormVisible:{type:Boolean,default:!1},id:{type:String,default:""}},computed:{visible(){return this.dialogFormVisible}},watch:{rolePanelVisible(e){e&&this.getRoleList(1)},dialogFormVisible(e){e&&this.id&&this.getDetail()}},components:{SelectionPanel:f},data(){return{isLoading:!1,rolePanelVisible:!1,rolePanelParams:{columns:[{prop:"name",label:"角色名称"}],tableData:[],total:0},userForm:{username:"",nickname:"",password:"",confirmPWD:"",roleNames:[],isDefault:!0},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:c["e"],trigger:"blur"}],nickname:[{required:!0,message:"请输入昵称",trigger:"blur"},{validator:c["e"],trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:c["g"],trigger:"blur"}],confirmPWD:[{required:!0,message:"请输入确认密码",trigger:"blur"},{validator:(e,t,a)=>{t!==this.userForm.password&&a("两次输入密码不一致"),a()},trigger:"blur"}],roleNames:[{type:"array",required:!0,message:"请选择关联角色",trigger:"change"}]}}},methods:{getDetail(){this.$http.get("/users/"+this.id).then(({data:e})=>{const{username:t,nickname:a,roleNames:s}=e;this.userForm.username=t,this.userForm.nickname=a,this.userForm.roleNames=s||[]})},onResetForm(){this.$refs.userFormRef.resetFields(),this.isLoading=!1,this.userForm.roleNames=[],this.id&&(this.userForm.username="",this.userForm.password="",this.userForm.confirmPWD=""),this.$emit("update:dialogFormVisible",!1)},onSubmit(){this.$refs.userFormRef.validate(e=>{e&&(this.userForm.username=this.userForm.username.trim(),this.userForm.nickname=this.userForm.nickname.trim(),this.isLoading=!0,this.onRequest())})},onRequest(){const{username:e,nickname:t,password:a,roleNames:s,isDefault:i}=this.userForm;let r={username:e,nickname:t,roleNames:s.map(e=>e.name)};this.id||i||(r.password=a);let o="post",l="/users/";this.id&&(o="put",l="/users/"+this.id),this.$http[o](l,r).then(()=>{this.$notifyMessage("保存成功",{type:"success"}),this.onResetForm(),this.$emit("success")}).finally(()=>{this.isLoading=!1})},changeRoleParams({page:e,searchInfo:t}){this.getRoleList(e,t)},getRoleList(e,t=""){let a={page:e,keyword:t,perPage:10};this.$http.get("/users/roles",{params:Object(o["b"])(a)}).then(({data:e})=>{const{totalNum:t,items:a}=e;let s=[];this.rolePanelParams.total=t,a&&a.length&&(s=a.map(e=>({id:e.id,name:e.name}))),this.rolePanelParams.tableData=s})},confirmSelection(e){e&&(this.userForm.roleNames=e),this.rolePanelVisible=!1},delRole(e,t){e.splice(t,1)},clearChinese(e,t){this.userForm[t]=e.replace(c["b"],"").replace(c["a"],"")}}},y=b,v=(a("3440"),Object(h["a"])(y,l,n,!1,null,"364c3bd4",null)),w=v.exports,F={name:"accountMgt",components:{WrapComponent:r["a"],AddUserDialog:w},data(){return{loading:!1,dialogFormVisible:!1,dialogTitle:"新增用户",curId:"",searchForm:{keyword:"",roleNames:"",status:""},tableData:[],pageParams:{currentPage:1,pageSize:10,totalNum:0}}},created(){this.getUserList()},methods:{onOperate(e,t=""){const a={new:"新增用户",edit:"编辑用户"};this.dialogTitle=a[e],this.dialogFormVisible=!0,this.curId=t},resetPWD(e){Object(o["a"])("确认重置此用户的密码？",()=>{this.$http.put(`/users/${e}/passwords/reset`).then(({data:e})=>{e&&Object(o["a"])(`登录密码已重置为默认密码“${e}”，请联系相关人员尽快修改。`,null,{confirmButtonText:"我已知晓",showCancelButton:!1,confirmButtonClass:"el-button--primary",type:"success"}),this.getUserList()})},{confirmButtonText:"重置"})},onDel(e,t){"启用"!==e?Object(o["a"])(`是否${e}此账号？`,()=>{this.operateRow(e,t)},{confirmButtonText:e}):this.operateRow(e,t)},operateRow(e,{id:t}){let a,s,i={};"删除"===e&&(a="/users/"+t,s="delete"),this.$http[s](a,i).then(()=>{this.$notifyMessage(e+"成功",{type:"success"}),this.getUserList()})},getUserList(){this.loading=!0;let e={...this.searchForm,page:this.pageParams.currentPage,perPage:this.pageParams.pageSize,sortField:"id"};this.$http.get("/users",{params:Object(o["b"])(e)}).then(({data:{items:e,totalNum:t}})=>{this.pageParams.totalNum=t,e?this.tableData=e.map(e=>{let t="-";return e.roleNames&&(t=e.roleNames.map(e=>e.name).join("、")),{id:e.id,username:e.username,nickname:e.nickname,roleName:t}}):(t>0&&this.pageParams.currentPage>1&&(this.pageParams.currentPage--,this.getUserList()),this.tableData=[])}).finally(()=>{this.loading=!1})},resetForm(){this.$refs.searchForm.resetFields(),this.getUserList()},changeSize(e){this.pageParams.pageSize=e,this.pageParams.currentPage=1,this.getUserList()},changeCurrentPage(e){this.pageParams.currentPage=e,this.getUserList()}}},C=F,k=Object(h["a"])(C,s,i,!1,null,null,null);t["default"]=k.exports},"5dc0":function(e,t,a){},"7bb4":function(e,t,a){},e523:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-wrap"},[t("div",{staticStyle:{float:"left","margin-right":"10px"}},[e._t("productVersion")],2),e.showOperateCont?t("div",{staticClass:"control-list",staticStyle:{float:"left"}},[e._t("operate")],2):e._e(),t("div",{staticClass:"content-info",staticStyle:{clear:"both"}},[2===e.searchLayout?[t("div",{staticClass:"content-header"},[t("div",{staticClass:"info-name"},[e._v(e._s(e.tableTitle))])]),e._t("form")]:t("div",{staticClass:"content-header clear"},[t("div",{staticClass:"self-left info-name"},[e._v(e._s(e.tableTitle))]),t("div",{staticClass:"self-right"},[e._t("form")],2)]),t("div",{staticClass:"content-table"},[e._t("table")],2),e._t("footer")],2)])},i=[],r={name:"WrapComponent",props:{tableTitle:{type:String,default:"全部内容"},searchLayout:{type:Number,default:2},showOperateCont:{type:Boolean,default:!0}}},o=r,l=a("2877"),n=Object(l["a"])(o,s,i,!1,null,null,null);t["a"]=n.exports}}]);
//# sourceMappingURL=chunk-b6b15cb8.046ae0a5.js.map