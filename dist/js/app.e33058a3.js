(function(e){function t(t){for(var o,a,i=t[0],l=t[1],u=t[2],c=0,d=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},r={app:0},s=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1a123b50":"cf2b0dd1","chunk-261da536":"c2fcce66","chunk-36d74850":"b4190f86","chunk-a3038bb4":"46898ee5","chunk-b6b15cb8":"046ae0a5","chunk-becc9d96":"cb03c5c1"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-1a123b50":1,"chunk-261da536":1,"chunk-36d74850":1,"chunk-a3038bb4":1,"chunk-b6b15cb8":1,"chunk-becc9d96":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-1a123b50":"ee336c32","chunk-261da536":"1f77b814","chunk-36d74850":"1a46fd19","chunk-a3038bb4":"94ab3dc4","chunk-b6b15cb8":"0e5a13bf","chunk-becc9d96":"81410cba"}[e]+".css",r=l.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===o||c===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],c=u.getAttribute("data-href");if(c===o||c===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[e],m.parentNode.removeChild(m),n(s)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"25e8":function(e,t,n){},"37b6":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return p}));const o=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,30}$/,a="密码支持数字、字母、特殊字符，两种及以上类型组合，长度限制8-30之间",r=/\s+/,s=/[\u4e00-\u9fa5]+/,i=/[0-9]+/,l=/^[\u4E00-\u9FA5A-Za-z]+\([\u4E00-\u9FA5A-Za-z]+\)$/,u=new RegExp("[`~!@#$^&*()=|{}':;',\\[\\]<>/?~！@#￥……&*（）——|{}【】‘；：”“’。，、？]+"),c=(e,t,n)=>{t&&(t=t.trim(),t.length<2||t.length>30?n("名称长度限制在2~30之间"):u.test(t)&&n("名称不能包含特殊字符")),n()},d=(e,t,n)=>{t&&(t=t.trim(),t.length<2||t.length>30?n("名称长度限制在2~30之间"):l.test(t)||n("请输入正确的企业微信")),n()},m=(e,t,n)=>{t&&(t.length<2||t.length>30?n("名称长度限制在2~30之间"):i.test(t)||n("请输入全中文")),n()},f=(e,t,n)=>{t&&(t.length<8||t.length>30?n("密码长度限制8~30之间"):o.test(t)||n("你的密码复杂度太低, 请重新输入")),n()},p=(e,t,n)=>{t&&(t.trim().startsWith("git@github.com:")||n("请输入git@github.com:XXXX/XXX.git")),n()}},3863:function(e,t){e.exports="data:image/png;base64,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"},"3d39":function(e,t,n){},"46aa":function(e,t,n){"use strict";n("71e9")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],s={name:"App"},i=s,l=(n("8402"),n("2877")),u=Object(l["a"])(i,a,r,!1,null,null,null),c=u.exports,d=n("8c4f"),m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-body",style:`background-image: url(${n("64ac")})`},[t("div",{staticClass:"login-box"},[t("div",{staticClass:"login-title"},[t("img",{staticClass:"login-logo",attrs:{src:n("e4da"),alt:"logo"}}),t("p",[e._v("测试平台")])]),t("div",{staticClass:"login-info"},[t("el-form",{ref:"form",staticClass:"form-box",attrs:{model:e.form,rules:e.formRules}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{ref:"username-input",attrs:{placeholder:"请输入用户名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码",type:"password","show-password":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",[t("div",{staticClass:"clear"},[t("el-checkbox",{staticClass:"remember-checkbox",attrs:{value:!0,label:"记住密码",name:"type"},model:{value:e.form.rememberMe,callback:function(t){e.$set(e.form,"rememberMe",t)},expression:"form.rememberMe"}}),t("span",{staticClass:"self-right forgetPwd",on:{click:e.forgetPwd}},[e._v("忘记密码？")])],1)]),t("el-form-item",[t("el-button",{staticClass:"login-btn",attrs:{type:"primary",loading:e.isLoging},on:{click:e.login}},[e._v(" "+e._s("登录")+" ")])],1)],1)],1)])])},f=[],p=(n("14d9"),{data(){return{form:{username:"",password:"",rememberMe:!0},formRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},isLoging:!1}},created(){localStorage.removeItem("userInfo"),localStorage.removeItem("token");let e=localStorage.getItem("loginTime")-0,t=(new Date).setDate((new Date).getDate()-7);if(t>e)return localStorage.removeItem("loginInfo"),localStorage.removeItem("loginTime"),!1;let n=localStorage.getItem("loginInfo");if(n){let e=JSON.parse(n);this.form={username:e.username,password:e.password,rememberMe:Boolean(e.rememberMe)}}},mounted(){let e=this.$refs["username-input"];e&&e.focus()},methods:{login(){this.$refs.form.validate(e=>{if(e){this.isLoging=!0;let e={username:this.form.username.replace(/\s*/g,""),password:this.form.password};this.$http.post("/users/login",e,{headers:{Authorization:"none"}}).then(e=>{let{data:t}=e;t.token&&(localStorage.setItem("token",t.token),localStorage.setItem("userInfo",JSON.stringify(t.user)),localStorage.setItem("authMenus",JSON.stringify(t.auth||[])),this.setUserInfo(),this.$router.push("/"))}).finally(()=>{this.isLoging=!1})}})},setUserInfo(){return this.form.rememberMe?(localStorage.setItem("loginInfo",JSON.stringify(this.form)),localStorage.setItem("loginTime",(new Date).getTime().toLocaleString())):(localStorage.removeItem("loginInfo"),localStorage.removeItem("loginTime")),!0},forgetPwd(){this.$alert("请联系管理员进行密码重置！","提示",{confirmButtonText:"确定"})}}}),h=p,g=(n("f281"),Object(l["a"])(h,m,f,!1,null,"159fbf68",null)),A=g.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"common-layout-1"},[t("div",{staticClass:"header"},[t("router-link",{staticClass:"logo",attrs:{to:{name:"home"}}},[t("img",{attrs:{src:n("a1d8"),alt:"logo"}}),t("span",[e._v("GIT工程执行平台")])]),t("div",{staticClass:"user-info"},[t("el-dropdown",{staticClass:"cur-user"},[t("p",{staticClass:"el-dropdown-link login-user",staticStyle:{cursor:"pointer"}},[t("img",{staticClass:"default",attrs:{src:n("3863"),alt:""}}),t("span",[e._v(e._s(e.userInfo.nickname))])]),t("el-dropdown-menu",{staticClass:"user-action",attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[t("div",{on:{click:e.changePassword}},[t("i",{staticClass:"fa el-icon-edit"}),e._v(" 修改密码 ")])]),t("el-dropdown-item",[t("div",{on:{click:e.showUserInfo}},[t("i",{staticClass:"fa fa-user"}),e._v(" 个人信息 ")])]),t("el-dropdown-item",[t("div",{on:{click:e.logout}},[t("i",{staticClass:"fa fa-power-off"}),e._v(" 退出登录 ")])])],1)],1)],1),t("el-dialog",{attrs:{title:"修改密码",width:"700px","modal-append-to-body":!1,visible:e.passwordDialog,"close-on-click-modal":!1},on:{"update:visible":function(t){e.passwordDialog=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"150px","label-position":"right"}},[t("el-form-item",{attrs:{label:"当前密码",prop:"old"}},[t("el-input",{staticClass:"input-380",attrs:{placeholder:"请输入",type:"password","show-password":""},on:{input:function(t){return e.clearChinese(t,"old")}},model:{value:e.form.old,callback:function(t){e.$set(e.form,"old","string"===typeof t?t.trim():t)},expression:"form.old"}})],1),t("el-form-item",{attrs:{label:"新密码",prop:"new"}},[t("el-input",{staticClass:"input-380",attrs:{placeholder:"请输入",type:"password","show-password":""},on:{input:function(t){return e.clearChinese(t,"new")}},model:{value:e.form.new,callback:function(t){e.$set(e.form,"new","string"===typeof t?t.trim():t)},expression:"form.new"}})],1),t("el-form-item",{attrs:{label:"确认新密码",prop:"repeat"}},[t("el-input",{staticClass:"input-380",attrs:{placeholder:"请输入",type:"password","show-password":""},model:{value:e.form.repeat,callback:function(t){e.$set(e.form,"repeat","string"===typeof t?t.trim():t)},expression:"form.repeat"}})],1)],1),t("p",{staticClass:"pwd-ts"},[e._v("注："+e._s(e.pwdRegText))]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.resetForm}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.submit}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"个人信息",width:"500px","modal-append-to-body":!1,visible:e.userInfoDialog,"close-on-click-modal":!1},on:{"update:visible":function(t){e.userInfoDialog=t}}},[t("el-form",{attrs:{"label-width":"150px","label-position":"right"}},[t("el-form-item",{attrs:{label:"用户名："}},[e._v(e._s(e.userInfo.username))]),t("el-form-item",{attrs:{label:"昵称："}},[e._v(e._s(e.userInfo.nickname))]),t("el-form-item",{attrs:{label:"角色："}},[e._v(e._s(e.userInfo.roleName))])],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.confirm}},[e._v("确 定")])],1)],1)],1),t("el-main",{staticClass:"page-main",style:{height:e.winHeight+"px"}},[t("LeftMenu")],1)],1)},v=[],w=n("37b6"),y=function(){var e=this,t=e._self._c;return t("el-container",{staticClass:"container"},[t("el-aside",{staticClass:"aside",attrs:{width:"auto"}},[t("el-menu",{staticClass:"auto-el-menu",staticStyle:{border:"0"},attrs:{"default-active":e.activePath,collapse:e.isCollapse,"background-color":"#00142a","text-color":"white","active-text-color":"white",router:!0}},[e._t("menuItem",(function(){return[t("MenuItem",{attrs:{route:e.routesInfo}})]}))],2)],1),t("el-container",[t("el-header",[t("el-breadcrumb",{staticStyle:{"margin-top":"20px"},attrs:{separator:"/"}},[t("el-breadcrumb-item",{staticStyle:{cursor:"pointer"},nativeOn:{click:function(t){return e.switchCollapse.apply(null,arguments)}}},[t("icon-font",{attrs:{iconClass:"dakaisanshu"}})],1),e._l(e.routePaths,(function(n,o){return t("el-breadcrumb-item",{key:n.path,attrs:{to:!n.meta.disabled&&o<e.routePaths.length-1&&{path:e.changeUrl(n.path,o)}}},[e._v(" "+e._s(n.meta.title)+" ")])}))],2)],1),t("el-main",{staticStyle:{padding:"0 20px!important"}},[t("router-view")],1)],1)],1)},k=[],S=function(){var e=this,t=e._self._c;return t("div",e._l(e.route,(function(n,o){return t("div",{key:o},[n.meta?[n.meta.hasSubMenu?t("el-submenu",{attrs:{index:n.path}},[n.meta?t("template",{slot:"title"},[t("i",{class:n.meta.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.meta.title))])]):e._e(),t("MenuItem",{attrs:{route:n.children,basepath:e.getPath(n.path)}})],2):e._e()]:e._e(),n.meta?[n.meta.hasSubMenu?e._e():t("el-menu-item",{attrs:{index:e.getPath(n.path)}},[n.meta?[t("i",{class:n.meta.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.meta.title))])]:e._e()],2)]:e._e()],2)})),0)},C=[],x=n("b69a"),B=n.n(x),O={name:"MenuItem",props:["route","basepath"],methods:{getPath:function(e){return B.a.resolve(this.basepath,e)}}},P=O,T=Object(l["a"])(P,S,C,!1,null,null,null),L=T.exports,I={name:"LeftMenu",components:{MenuItem:L},data(){return{isCollapse:!1}},computed:{activePath(){let e=this.$route.path.split("/");return e.slice(0,3).join("/")},routePaths(){return this.$route.matched.filter(e=>e.path&&e.meta.title)},routesInfo:function(){return this.$router.options.routes.filter(e=>e.path.startsWith("/config")||e.path.startsWith("/testplan")||"/"==e.path)}},methods:{switchCollapse(){this.isCollapse=!this.isCollapse},changeUrl(e,t){return t===this.routePaths.length-1?"":e}}},j=I,M=(n("a2b5"),Object(l["a"])(j,y,k,!1,null,"368a4a9a",null)),z=M.exports,E={name:"topMenu",components:{LeftMenu:z},data(){return{passwordDialog:!1,userInfoDialog:!1,dialogVisible:!0,winHeight:window.innerHeight-66,userInfo:{username:"test",nickname:"test",roleName:"test"},form:{old:"",new:"",repeat:""},rules:{old:[{required:!0,message:"请输入原始密码",trigger:"blur"}],new:[{required:!0,message:"请输入新密码",trigger:"blur"},{validator:w["g"],trigger:"blur"}],repeat:[{required:!0,message:"请再次输入新密码",trigger:"blur"},{validator:(e,t,n)=>{t!==this.form.new&&n("两次输入密码不一致"),n()},trigger:"blur"}]},loading:!1,pwdRegText:w["f"],authList:[],routeInfos:[]}},created(){let e=JSON.parse(localStorage.getItem("userInfo"));e&&(this.userInfo=e),this.initAuth()},methods:{currentActive(e=""){return this.$route.path.split("/")[1]===e},initAuth(){const e=JSON.parse(localStorage.getItem("authMenus")||"[]");if(!e.length)return this.$notifyMessage("无菜单权限"),void this.$router.push("/login");let t=[];console.log(e),e.forEach(e=>{e.access&&t.push(e)}),console.log(t),this.authList=t,t.length||this.$notifyMessage("无可访问菜单")},changePassword(){this.form.old="",this.form.new="",this.form.repeat="",this.passwordDialog=!0},showUserInfo(){this.userInfoDialog=!0},confirm(){this.userInfoDialog=!1},submit(){this.$refs.form.validate(async e=>{if(e){this.loading=!0;try{let e="/users/passwords/set",t={oldPassword:this.form.old,newPassword:this.form.new};await this.$http.put(e,t),this.$message({type:"success",message:"密码修改成功，请重新登录"}),this.logout()}catch(t){console.log(t.response)}this.loading=!1}})},logout(){let e=localStorage.getItem("loginInfo"),t=localStorage.getItem("loginTime");localStorage.clear(),t&&localStorage.setItem("loginTime",(new Date).getTime().toLocaleString()),e&&(e=JSON.parse(e),e.userPWD="",localStorage.setItem("loginInfo",JSON.stringify(e))),this.$router.push("/login")},resetForm(){this.$refs.form.resetFields(),this.passwordDialog=!1},clearChinese(e,t){this.form[t]=e.replace(w["b"],"").replace(w["a"],"")},$resize(){this.winHeight=window.innerHeight-66}},mounted(){let e=this;window.addEventListener("resize",e.$resize,!0)},beforeDestroy(){window.removeEventListener("resize",this.$resize)}},N=E,D=(n("7b00"),n("46aa"),Object(l["a"])(N,b,v,!1,null,"f4d5476c",null)),U=D.exports,J=function(){var e=this,t=e._self._c;return t("p",[e._v("这里是dashboard首页")])},R=[],H={name:"Dashboard",data(){return{}},mounted(){},created(){},methods:{}},q=H,V=Object(l["a"])(q,J,R,!1,null,null,null),X=V.exports;o["default"].use(d["a"]);const F=[{path:"/login",meta:{title:"测试平台登录"},component:A},{path:"/",name:"home",redirect:"/index",meta:{title:"首页",requireAuth:!0,hasSubMenu:!1},component:U,children:[{path:"/index",name:"dashboard",component:X,meta:{title:"仪表盘"}}]},{path:"/config",name:"config",meta:{title:"配置管理",requireAuth:!0,hasSubMenu:!0},component:U,children:[{path:"/config/userManagement",name:"userManagement",meta:{title:"用户管理"},component:()=>n.e("chunk-b6b15cb8").then(n.bind(null,"5531")),children:[]},{path:"/config/productManagement",name:"productManagement",meta:{title:"产品管理"},component:()=>n.e("chunk-261da536").then(n.bind(null,"503d")),children:[{path:"/config/productManagement/testPlanConfigList",name:"testPlanConfigList",meta:{title:"版本默认计划"},component:()=>n.e("chunk-a3038bb4").then(n.bind(null,"59bc"))}]}]},{path:"/testplan",name:"testplan",meta:{title:"测试计划",requireAuth:!0,hasSubMenu:!0},component:U,children:[{path:"/testplan/testPlanManagement",name:"testPlanManagement",meta:{title:"计划执行"},component:()=>n.e("chunk-36d74850").then(n.bind(null,"acef")),children:[{path:"/testplan/testPlanManagement/addTestPlan",name:"addTestPlan",meta:{title:"添加计划"},component:()=>n.e("chunk-1a123b50").then(n.bind(null,"e006"))},{path:"/testplan/testPlanManagement/editTestPlan",name:"editTestPlan",meta:{title:"编辑计划"},component:()=>n.e("chunk-1a123b50").then(n.bind(null,"e006"))},{path:"/testplan/testPlanManagement/testPlanResultList",name:"testPlanResultList",meta:{title:"计划运行历史"},component:()=>n.e("chunk-becc9d96").then(n.bind(null,"7c8d"))}]}]}],Y=new d["a"]({routes:F});Y.beforeEach((e,t,n)=>{if(e.matched.some(e=>e.meta.requireAuth)){let e=localStorage.getItem("token");e?n():n({path:"/login"})}else n()});var Z=Y,Q=n("bc3a"),W=n.n(Q),G=n("5c96"),_=n.n(G),K=n("925a");const $=e=>{let t=401===e?"登录失效，请重新登录":"暂无权限，请重新登录";Object(G["Notification"])({title:"请求失败",message:t,type:"error"}),localStorage.clear(),Z.push("/login")},ee=W.a.create({baseURL:"/api",timeout:3e4,responseType:"json",withCredentials:!0,headers:{"content-type":"application/json;charset=UTF-8"}});ee.interceptors.request.use(e=>{if("none"!==e.headers.Authorization){const t=localStorage.getItem("token");t?e.headers.common["Authorization"]="Bearer "+t:$(401)}else delete e.headers.Authorization;return e}),ee.interceptors.response.use(e=>e,e=>{if(e.response){let{response:{status:t,data:n}}=e;if(n=n||{},[401,403].includes(t))setTimeout(()=>{$(t)},1e3);else{let e=n.message||n.msg;Object(K["c"])(n)&&"{}"!==JSON.stringify(n)&&(e=e||n),Object(G["Notification"])({title:"提示",type:"error",message:e||"服务器内部错误"})}}return Promise.reject(e)});const te=e=>{Object.defineProperty(e.prototype,"$http",{value:ee})};var ne=te,oe=(n("3d39"),n("b277"),function(){var e=this,t=e._self._c;return t("svg",{staticClass:"ph-icon-font",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":e.iconName}})])}),ae=[],re={name:"IconFont",props:{iconClass:{type:String,required:!0}},computed:{iconName(){return"#icon-"+this.iconClass}}},se=re,ie=(n("613f"),Object(l["a"])(se,oe,ae,!1,null,"5defd3c8",null)),le=ie.exports,ue=(n("e222"),function(){var e=this,t=e._self._c;return t("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})}),ce=[],de={name:"Pagination",props:{currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},totalNum:{type:Number,default:0}},methods:{handleSizeChange(e){this.$emit("sizeChange",e)},handleCurrentChange(e){this.$emit("currentPageChange",e)}}},me=de,fe=Object(l["a"])(me,ue,ce,!1,null,"21866a82",null),pe=fe.exports,he=n("1487"),ge=n.n(he);n("6e2e");let Ae={install:function(e){e.directive("highlightA",{inserted:function(e){let t=e.querySelectorAll("pre code");for(let n=0;n<t.length;n++){const e=t[n];ge.a.highlightBlock(e)}}}),e.directive("highlightB",{componentUpdated:function(e){let t=e.querySelectorAll("pre code");for(let n=0;n<t.length;n++){const e=t[n];ge.a.highlightBlock(e)}}})}};var be=Ae;o["default"].component("icon-font",le),o["default"].prototype.$notifyMessage=K["e"],o["default"].prototype.$handleResponese=K["f"],o["default"].component("vue-pagination",pe),o["default"].use(be),o["default"].config.productionTip=!1,o["default"].use(_.a),o["default"].use(ne),new o["default"]({router:Z,render:e=>e(c)}).$mount("#app")},"613f":function(e,t,n){"use strict";n("a1e7")},"64ac":function(e,t,n){e.exports=n.p+"img/login-bg.55c48d22.jpg"},"6d01":function(e,t,n){},"71e9":function(e,t,n){},"7b00":function(e,t,n){"use strict";n("fbc3")},8402:function(e,t,n){"use strict";n("6d01")},"925a":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return c}));var o=n("5c96");function a(e){return function(t){return Object.prototype.toString.call(t)===`[object ${e}]`}}function r(e){return"object"==typeof e&&"[object object]"===Object.prototype.toString.call(e).toLowerCase()&&!e.length}function s(e){if(a("Object")(e)){let t={};return Object.entries(e).forEach(([e,n])=>{n&&(t[e]=n)}),t}if(a("Array")(e))return e.filter(e=>e)}function i({status:e,statusText:t,data:n},a){[200,201,204].includes(e)?a(n):Object(o["Notification"])({title:"提示",type:"error",message:`${e} ${t}`})}function l(e,t,n={}){const r=Object.assign({},{confirmButtonText:"删除",cancelButtonText:"取消",confirmButtonClass:"el-button--danger",type:"warning"},n);a("Function")(t)?o["MessageBox"].confirm(e,"提示",r).then(t).catch(()=>{}):o["MessageBox"].confirm(e,"提示",r).catch(()=>{})}function u(e,t={}){Object(o["Notification"])({title:"提示",type:"error",message:e,...t})}function c(){let e=JSON.parse(localStorage.getItem("productVersionList"));return!!e.length}},a1d8:function(e,t,n){e.exports=n.p+"img/logo.0fd6fb72.png"},a1e7:function(e,t,n){},a2b5:function(e,t,n){"use strict";n("ae67")},ae67:function(e,t,n){},b277:function(e,t,n){},e222:function(e,t){!function(e){var t,n='<svg><symbol id="icon-dakaisanshu" viewBox="0 0 1024 1024"><path d="M203.009 859.615c-21.321 0-38.623-20.085-38.623-43.49v-608.248c0-23.947 17.921-43.49 38.623-43.49 21.321 0 38.623 20.085 38.623 43.49v608.248c0 23.947-17.921 43.49-38.623 43.49zM512 859.615c-21.321 0-38.623-20.085-38.623-43.49v-608.248c0-23.947 17.921-43.49 38.623-43.49 21.321 0 38.623 20.085 38.623 43.49v608.248c0 23.947-17.921 43.49-38.623 43.49zM820.991 859.615c-21.321 0-38.623-20.085-38.623-43.49v-608.248c0-23.947 17.921-43.49 38.623-43.49 21.321 0 38.623 20.085 38.623 43.49v608.248c0 23.947-17.921 43.49-38.623 43.49z" fill="#4A4A4A" ></path></symbol></svg>',o=(t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss");if(o&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}!function(t){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(t,0);else{var n=function(){document.removeEventListener("DOMContentLoaded",n,!1),t()};document.addEventListener("DOMContentLoaded",n,!1)}else document.attachEvent&&(o=t,a=e.document,r=!1,s=function(){r||(r=!0,o())},(i=function(){try{a.documentElement.doScroll("left")}catch(t){return void setTimeout(i,50)}s()})(),a.onreadystatechange=function(){"complete"===a.readyState&&(a.onreadystatechange=null,s())});var o,a,r,s,i}((function(){var e,t,o,a,r,s;(e=document.createElement("div")).innerHTML=n,n=null,(t=e.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",o=t,(a=document.body).firstChild?(r=o,(s=a.firstChild).parentNode.insertBefore(r,s)):a.appendChild(o))}))}(window)},e4da:function(e,t){e.exports="data:image/png;base64,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"},f281:function(e,t,n){"use strict";n("25e8")},fbc3:function(e,t,n){}});
//# sourceMappingURL=app.e33058a3.js.map