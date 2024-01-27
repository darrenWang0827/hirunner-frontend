<template>
  <div>
    <product-version
      style="float: left; margin-right: 10px"
      v-if="$route.name === 'testPlanManagement'"
      @changeProduct="changeProduct"
      @changeVersion="changeVersion"
      @product-version-rendered="resetSearchForm"
    ></product-version>
    <product-version
      style="float: left; margin-right: 10px"
      v-if="$route.name === 'addTestPlan'"
      @changeProduct="changeProduct"
      @changeVersion="changeVersion"
      @product-version-rendered="resetSearchForm"
      :showVersion="true"
    ></product-version>
    <product-version
      style="float: left; margin-right: 10px"
      v-if="$route.name === 'editTestPlan'"
      @changeProduct="changeProduct"
      @changeVersion="changeVersion"
      @product-version-rendered="resetSearchForm"
      :showVersion="true"
      :product-disabled="true"
    ></product-version>
    <div class="plan-manage-index" v-if="$route.name === 'testPlanManagement'">
      <div style="float: left" class="control-list">
        <el-button type="primary" icon="el-icon-plus" @click="addTestPlan">
          新增计划
        </el-button>
      </div>
      <div style="clear: both" class="content-info" :loading="tableLoading">
        <div class="content-header">
          <div class="info-name">
            全部计划
          </div>
        </div>

        <!--
        <el-form size="medium" :inline="true" :model="searchForm" class="search-form" ref="searchForm">
          <el-form-item label="计划名称">
            <el-input v-model="searchForm.name" placeholder="模糊匹配" style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search" @click="search" type="primary">搜索</el-button>
            <el-button icon="el-icon-refresh-left" @click="resetSearchForm">重置</el-button>
          </el-form-item>
        </el-form>
        -->
        <div class="content-table">
          <el-table
            :header-cell-style="{
              background: 'rgba(144, 147, 153, 0.06)',
              color: 'rgba(0, 0, 0, 0.65)',
              fontSize: '14px',
            }"
            :data="tableData"
            :row-class-name="numStyle"
            style="width: 100%"
          >
            <el-table-column
              prop="id"
              label="ID"
              width="80px"
              align="center"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column label="计划名称" width="500px" prop="name" show-overflow-tooltip></el-table-column>
            <el-table-column
              prop="stage"
              label="测试阶段"
              width="100px"
              align="center"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="releasePlanId"
              label="发布计划ID"
              width="100px"
              align="center"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="status"
              label="计划状态"
              width="100px"
              align="center"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="testUsers"
              label="测试负责人"
              width="250px"
              align="center"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column label="操作" width="550px">
              <template slot-scope="scope">
                <div>

                  <el-tooltip content="编辑" placement="top">
                    <el-button
                      type="info"
                      icon="el-icon-edit-outline"
                      size="mini"
                      @click="gotoTestPlanEditor(scope.row)"
                      plain
                    ></el-button>
                  </el-tooltip>
                  <el-tooltip content="复制" placement="top">
                    <el-button
                      type="info"
                      icon="el-icon-copy-document"
                      size="mini"
                      @click="gotoTestPlanCopy(scope.row)"
                      plain
                    ></el-button>
                  </el-tooltip>
                  <el-tooltip content="立即执行" placement="top">
                    <el-button
                      type="info"
                      icon="el-icon-video-play"
                      size="mini"
                      @click="runTestPlanNow(scope.row)"
                      plain
                    ></el-button>
                  </el-tooltip>
                  <el-tooltip content="删除" placement="top">
                    <el-button
                      type="danger"
                      icon="el-icon-document-delete"
                      size="mini"
                      @click="deleteTestPlan(scope.row)"
                      plain
                    ></el-button>
                  </el-tooltip>
                  <el-tooltip content="查看执行历史记录" placement="top">
                    <el-button
                      type="info"
                      icon="el-icon-tickets"
                      size="mini"
                      @click="gotoTestPlanResultList(scope.row)"
                      plain
                    ></el-button>
                  </el-tooltip>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="content-footer clear">
          <div class="block page-list self-right">
            <vue-pagination
              :currentPage="searchForm.page"
              :pageSize="searchForm.perPage"
              :totalNum="total"
              @sizeChange="pageSizeChange"
              @currentPageChange="pageChange"
            />
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import ProductVersion from "@/components/ProductVersion";
import { isProductExisted } from "@/utils/commonMethods";
export default {
  name:"TestPlanManagement",
  data() {
    return {
      searchForm: {
        page: 1,
        perPage: 10,
        name: "",
      },
      total: 0,
      tableData: [],
      tableLoading: false,
    };
  },
  components: { ProductVersion },
  mounted() {
    //this.resetSearchForm();
  },
  methods: {
    async getTableData() {
      let keys = Object.keys(this.searchForm);
      //let params = [];
      let params = new URLSearchParams();  // 解决get请求中的params参数会被浏览器编码的问题，比如params参数中有+号时，会被浏览器编码掉，到后台接口时，+号解码时消失了
      keys.forEach(key => {
        let value = this.searchForm[key];
        if (value) {
          //params.push(`${key}=${this.searchForm[key]}`);
          params.append(`${key}`,`${this.searchForm[key]}`);
        }
      });
      let curProductVersion = JSON.parse(localStorage.getItem("curProductVersion"));
      let productId = curProductVersion.curProductId;
      if (productId) {
        //params.push(`productId=${productId}`);
        params.append('productId',`${productId}`);
      }
      let versionNo = curProductVersion.curVersionNo;
      if (versionNo){
        console.log(versionNo);
        console.log(`${versionNo}`);
        //params.push(`versionNo=${versionNo}`);
        params.append('versionNo',`${versionNo}`);
      }
      // 兼容发布计划关键字的查询
      //params.push(`releasePlanNameKw=${curProductVersion.curReleasePlanNameKw}`);
      params.append('releasePlanNameKw',`${curProductVersion.curReleasePlanNameKw}`);
      console.log(params);
      //let url = "/hirunner/testPlans?" + params.join("&");
      let url = "/hirunner/testPlans?" + params.toString();
      console.log(url);
      this.tableLoading = true;
      await this.$http.get(url).then(async ({ data }) => {
        this.tableData = data.items || [];
        this.total = data.totalNum;
        if (!data.items && data.totalNum > 0 && this.searchForm.page > 1) {
          this.searchForm.page--;
          await this.getTableData();
        }
      });

      this.tableLoading = false;
    },
    addTestPlan() {
      if (!isProductExisted()) {
        this.$notifyMessage(`请先创建产品`, { type: "error" });
        return;
      }
      localStorage.removeItem("testPlanInfo");
      this.$router.push({
        name: "addTestPlan",
      });
    },
    search() {
      this.searchForm.page = 1;
      this.getTableData();
    },
    numStyle({row}) {
      return row.status === '已开启' ? 'opened-row':'closed-row';
    },
    runTestPlanNow(row) {
      if(!row.runCmd){
        this.$notifyMessage("执行命令不能为空！",{type:"error"})
        return
      }
      this.$http.post(`/hirunner/testPlans/${row.id}/run`, {}).then(({ data: { msg } }) => {
        this.$notifyMessage(msg, { type: "success" });
        this.getTableData();
        //this.$set(row, "loading", false);
      });
    },
    deleteTestPlan(row) {
      this.$confirm("确认删除该计划吗？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        confirmButtonClass: "el-button--danger",
        type: "warning",
      }).then(async () => {
        this.tableLoading = true;
        let url = `/hirunner/testPlans/${row.id}`;
        await this.$http.delete(url).then(async () => {
          this.$notifyMessage("删除成功", { type: "success" });
          await this.getTableData();
        });
        this.tableLoading = false;
      });
    },
    resetSearchForm() {
      this.searchForm = {
        page: 1,
        perPage: 10,
        name: "",
      };
      this.getTableData();
    },
    changeProduct() {
      this.resetSearchForm();
    },

    changeVersion() {
      this.resetSearchForm();
    },
    pageSizeChange(val) {
      this.searchForm.perPage = val;
      this.getTableData();
    },
    pageChange(val) {
      this.searchForm.page = val;
      this.getTableData();
    },
    gotoTestPlanEditor(row) {
      let rowInfo = JSON.stringify(row);

      localStorage.setItem("testPlanInfo", rowInfo);
      this.$router.push({
        name: "editTestPlan",
      });
    },
    gotoTestPlanCopy(row) {
      let newRow = JSON.parse(JSON.stringify(row)); // 完全复制
      // 相比编辑，去掉id
      delete newRow.id;
      newRow.name = newRow.name + "_copy";
      localStorage.setItem("testPlanInfo", JSON.stringify(newRow));
      this.$router.push({
        name: "addTestPlan",
      });
    },
    gotoTestPlanResultList(row) {
      let rowInfo = JSON.stringify(row);
      localStorage.setItem("testPlanInfo", rowInfo);
      this.$router.push({
        name: "testPlanResultList",
      });
    },
  },
  watch: {
    // 监控路由变化，用于其他页面之间跳转时刷新数据
    $route: {
      handler(to) {
        if (to.name === "testPlanManagement") {
          this.getTableData();
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.content-table .el-table {
  td {
    height: 64px;
    line-height: 64px;
  }
}
.content-table .el-table .opened-row {
  background:green;
}
.content-table .el-table .tr .closed-row {
  background-color:gray;
}
</style>
