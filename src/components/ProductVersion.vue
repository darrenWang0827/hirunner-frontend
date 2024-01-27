<template>
  <el-form :inline="true">
    <el-form-item label="产品" v-if="showProduct">
      <el-select v-model="curProductName" @change="changeProduct" @click.native="getProductList">
        <el-option v-for="(item, index) in productList" :key="index" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="版本" v-if="showVersion">
      <el-select v-model="curVersionNo" @change="changeVersion" @click.native="getVersionList">
        <el-option v-for="(item, index) in versionList" :key="index" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "ProductVersion",
  props: {
    showVersion: {
      type: Boolean,
      default: true,
    },
    showProduct: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      productVersionList: [],
      productList: [],
      versionList: [],
      curProductId: "",
      curReleasePlanNameKw:"",
      curProductName: "",
      curVersionNo: "",
    };
  },
  created() {
    //this.refreshProductVersionList();
  },
  mounted(){
    this.refreshProductVersionList(); // 挂载该组件的页面都要在挂载后，要刷新一下产品版本映射关系
    this.getCurProductVersion();  // 重新渲染下拉框
  },
  methods: {
    getProductVersion() {
      let localProductVersionList = JSON.parse(localStorage.getItem("productVersionList"));
      if (localProductVersionList) {
        this.productVersionList = localProductVersionList;
      }
    },
    getCurProductVersion() {
      let localCurProductVersion = JSON.parse(localStorage.getItem("curProductVersion"));
      if (localCurProductVersion) {
        this.curProductId = localCurProductVersion.curProductId;
        this.curReleasePlanNameKw = localCurProductVersion.curReleasePlanNameKw;
        this.curProductName = localCurProductVersion.curProductName;
        this.curVersionNo = localCurProductVersion.curVersionNo;
      }
    },
    getProductList() {
      let productList = [];
      this.productVersionList.forEach(item => {
        productList.push(item.productName);
      });
      this.productList = productList;
    },
    getVersionList() {
      this.productVersionList.forEach(item => {
        if (item.productId === this.curProductId && item.releasePlanNameKw === this.curReleasePlanNameKw) {
          this.versionList = item.versionList;
        }
      });
    },
    changeProduct() {
      let curProductVersion = {};
      this.productVersionList.forEach(item => {
        if (item.productName === this.curProductName) {
          this.curProductId = item.productId;
          this.curReleasePlanNameKw = item.releasePlanNameKw;
        }
      });
      curProductVersion["curProductId"] = this.curProductId;
      curProductVersion["curReleasePlanNameKw"] = this.curReleasePlanNameKw;
      curProductVersion["curProductName"] = this.curProductName;
      console.log(curProductVersion);
      this.getVersionList();
      this.curVersionNo = this.versionList[0];
      curProductVersion["curVersionNo"] = this.curVersionNo;
      localStorage.setItem("curProductVersion", JSON.stringify(curProductVersion));
      this.$emit("changeProduct");
    },
    changeVersion() {
      let curProductVersion = {};
      curProductVersion["curProductId"] = this.curProductId;
      curProductVersion["curReleasePlanNameKw"] = this.curReleasePlanNameKw;
      curProductVersion["curProductName"] = this.curProductName;
      curProductVersion["curVersionNo"] = this.curVersionNo;
      localStorage.setItem("curProductVersion", JSON.stringify(curProductVersion));
      this.$emit("changeVersion");
    },
    refreshProductVersionList(){
      this.$http
        .get("/hirunner/products/version")
        .then(({
          data:{
            productVersionList,curProductVersion
          }
        })=>{
          if(productVersionList && curProductVersion){
            this.productVersionList = productVersionList;//更新vue里边的
            localStorage.setItem("productVersionList",JSON.stringify(productVersionList)); //更新本地缓存的
            if(!localStorage.getItem("curProductVersion")){
              this.curProductId = curProductVersion.curProductId;
              this.curReleasePlanNameKw = curProductVersion.curReleasePlanNameKw;
              this.curProductName = curProductVersion.curProductName;
              this.curVersionNo = curProductVersion.curVersionNo;
              localStorage.setItem("curProductVersion",JSON.stringify(curProductVersion));
            }
            //通知父组件刷新产品-版本数据结束了
            this.$emit("product-version-rendered");
          }

        })
        .finally(() => {});
    },
  },
};
</script>

<style scoped></style>
