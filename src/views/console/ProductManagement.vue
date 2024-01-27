<template>
  <div>
    <WrapComponent tableTitle="全部产品" v-if="$route.name==='productManagement'">
      <el-button type="primary" class="pri-add-btn" icon="el-icon-circle-plus" @click="onOperate('new')" slot="operate">
        新增产品
      </el-button>
      <el-form slot="form" :model="searchForm" ref="searchForm" :inline="true" class="search-form">
        <el-form-item label="产品名称" prop="keyword">
          <el-input v-model="searchForm.keyword" placeholder="产品名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="getProductList" type="primary" icon="el-icon-search">搜索</el-button>
          <el-button @click="resetForm" icon="el-icon-refresh-left">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table
        slot="table"
        :data="tableData"
        v-loading="loading"
        :header-cell-style="{
          background: 'rgba(144, 147, 153, 0.06)',
          color: 'rgba(0, 0, 0, 0.65)',
          fontSize: '14px',
        }"
      >
        <el-table-column prop="productId" label="dpms产品ID"></el-table-column>
        <el-table-column prop="name" label="产品名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="releasePlanNameKw" label="发布计划关键词"></el-table-column>
        <!--
        <el-table-column prop="gitRepository" label="Git仓库"></el-table-column>
        <el-table-column prop="gitBranch" label="Git分支"></el-table-column>
        -->
        <el-table-column prop="testUsers" label="测试负责人"></el-table-column>
        <el-table-column prop="devUsers" label="开发负责人"></el-table-column>
        <el-table-column label="操作" width="600px">
          <template slot-scope="scope">
            <div>
              <el-button type="info" size="mini" plain @click="onOperate('edit', scope.row.id)">编辑</el-button>
              <el-button type="danger" size="mini" plain @click="onDel('删除', scope.row)">删除</el-button>
              <el-button type="info" size="mini" plain @click="gotoTestPlanConfig(scope.row)">版本默认计划</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="content-footer clear" slot="footer">
        <div class="block page-list self-right">
          <vue-pagination v-bind="pageParams" @sizeChange="changeSize" @currentPageChange="changeCurrentPage" />
        </div>
      </div>
    </WrapComponent>

    <AddProductDialog :dialogFormVisible.sync="dialogFormVisible" :dialogTitle="dialogTitle" :id="curId" @success="resetForm"/>
    <router-view></router-view>
  </div>

</template>


<script>
import WrapComponent from "@/components/WrapComponent";
import { delConfirm, filterNullValue } from "@/utils/commonMethods";
import AddProduct from "./AddProduct";

export default {
  name: "ProductManagement",
  components: {
    WrapComponent,
    AddProductDialog: AddProduct, //TODO
  },
  data() {
    return {
      loading: false,
      dialogFormVisible: false,
      dialogTitle: "新增产品",
      curId: "",
      searchForm: {
        keyword: "",
        roleNames: "",
        status: "",
      },
      tableData: [],
      pageParams: {
        currentPage: 1,
        pageSize: 10,
        totalNum: 0,
      },
    };
  },
  created() {
    this.getProductList();
  },
  methods: {
    onOperate(type, id = "") {
      const titleMap = {
        new: "新增产品",
        edit: "编辑产品",
      };
      this.dialogTitle = titleMap[type];
      this.dialogFormVisible = true;
      this.curId = id; // 编辑页面的时候传递的
    },
    onDel(btnText, row) {
      delConfirm(
        `是否${btnText}此产品？`,
        () => {
          this.operateRow(btnText, row);
        },
        {
          confirmButtonText: btnText,
        },
      );
    },
    operateRow(btnText, { id }) {
      let $url;
      let $method;
      let params = {};
      if (btnText === "删除") {
        $url = `/hirunner/products/${id}`;
        $method = "delete";
      }
      this.$http[$method]($url, params).then(() => {
        this.$notifyMessage(`${btnText}成功`, { type: "success" });
        this.$refs.searchForm.resetFields();
        this.getProductList();
        //localStorage.removeItem("productVersionList");
      });
    },
    gotoTestPlanConfig(row){
      console.log(row.id);
      let rowInfo = JSON.stringify(row);
      localStorage.setItem("productInfo",rowInfo);
      this.$router.push({
        "name":"testPlanConfigList"
      });
    },
    gotoCiTestPlanConfig(row){
      console.log(row.id);
      let rowInfo = JSON.stringify(row);
      localStorage.setItem("productInfo",rowInfo);
      this.$router.push({
        "name":"ciTestPlanConfigList"
      });
    },
    getProductList() {
      this.loading = true;
      let params = {
        ...this.searchForm, // 搜索参数
        page: this.pageParams.currentPage,
        perPage: this.pageParams.pageSize,
        sortField: "id",
      };
      this.$http
        .get("/hirunner/products", { params: filterNullValue(params) })
        .then(({ data: { items, totalNum } }) => {
          this.pageParams.totalNum = totalNum;
          if (items) {
            this.tableData = items.map(item => {
              return {
                id: item.id,
                productId: item.productId,
                name: item.name,
                gitRepository: item.gitRepository,
                gitBranch: item.gitBranch,
                devUsers: item.devUsers,
                testUsers: item.testUsers,
                releasePlanNameKw: item.releasePlanNameKw,
              };
            });
          } else {
            if (totalNum > 0 && this.pageParams.currentPage > 1) {
              this.pageParams.currentPage--;
              this.getProductList();
            }
            this.tableData = [];
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    resetForm() {
      this.$refs.searchForm.resetFields();
      this.getProductList();
    },
    changeSize(val) {
      this.pageParams.pageSize = val;
      this.pageParams.currentPage = 1;
      this.getProductList();
    },
    changeCurrentPage(val) {
      this.pageParams.currentPage = val;
      this.getProductList();
    },
  },

  watch: {
    // 监控路由变化，用于其他页面之间跳转时刷新数据
    $route: {
      handler(to) {
        if (to.name === "productManagement") {
          this.getProductList();
        }
      },
      immediate: true,
    },
  },
};
</script>
