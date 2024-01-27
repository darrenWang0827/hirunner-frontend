<template>
  <NavLeft>
    <div slot="menuItem">
      <el-menu-item index="/hirunner/userManagement">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/hirunner/productManagement">
        <i class="el-icon-s-tools"></i>
        <span slot="title">配置管理</span>
      </el-menu-item>
      <el-menu-item index="/hirunner/testPlan">
        <i class="el-icon-attract"></i>
        <span slot="title">测试计划</span>
      </el-menu-item>
    </div>
  </NavLeft>
</template>
<script>
import NavLeft from "@/components/NavLeft";

export default {
  components: {
    NavLeft,
  },
  mounted() {
    // 登录首页的时候，加载项目与环境的映射数据
    this.saveProjectEnv();
    this.saveProductVersion();
  },
  methods: {
    saveProjectEnv() {
      let localProjectEnvList = JSON.parse(localStorage.getItem("projectEnvList"));
      if (!localProjectEnvList) {
        this.$http
          .get("/hirunner/projects/env")
          .then(({ data: { projectEnvList, curProjectEnv } }) => {
            if (projectEnvList) {
              this.projectEnvList = projectEnvList;
              localStorage.setItem("projectEnvList", JSON.stringify(projectEnvList));
              let localCurProjectEnv = JSON.parse(localStorage.getItem("curProjectEnv"));
              if (!localCurProjectEnv) {
                this.curProjectId = curProjectEnv.curProjectId;
                this.curProjectName = curProjectEnv.curProjectName;
                this.curEnvName = curProjectEnv.curEnvName;
                localStorage.setItem("curProjectEnv", JSON.stringify(curProjectEnv));
              }
            }
          })
          .finally(() => {});
      }
    },
    saveProductVersion(){
      let localProductVersionList = JSON.parse(localStorage.getItem("productVersionList"));
      if (!localProductVersionList){
        this.$http
          .get("/hirunner/products/version")
          .then(({
            data:{
              productVersionList,curProductVersion
            }
          })=>{
            if(productVersionList){
              this.productVersionList = productVersionList;
              localStorage.setItem("productVersionList",JSON.stringify(productVersionList));
              let localCurProductVersion = JSON.parse(localStorage.getItem("curProductVersion"));
              if(!localCurProductVersion){
                this.curProductId = curProductVersion.curProductId;
                this.curProductName = curProductVersion.curProductName;
                this.curVersionNo = curProductVersion.curVersionNo;
                localStorage.setItem("curProductVersion",JSON.stringify(curProductVersion));
              }
            }
          })
          .finally(() => {});
      }
    },
  },
};
</script>
