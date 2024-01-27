<template>
  <div>
    <div class="content-info">
      <div class="content-header">
        <div class="info-name">产品信息</div>
      </div>
      <div class="plan-info-list">
        <div class="info-txt clear">
          <p>
            <span class="label">dpmsID：</span>
            {{ productInfo.productId }}
          </p>
          <p>
            <span class="label">产品名称：</span>
            {{ productInfo.productName }}
          </p>
          <p>
            <span class="label">发布计划关键字：</span>
            {{ productInfo.releasePlanNameKw }}
          </p>
        </div>
      </div>
    </div>
    <div class="content-info case-list" :loading="isLoading">
      <div class="content-header clear">
        <div class="info-name self-left">
          版本默认py计划
        </div>
      </div>
      <el-form size="medium" :inline="true" :model="searchForm" class="search-form" ref="searchForm">
        <el-form-item label="关键字" prop="keyword">
          <el-input v-model="searchForm.keyword" placeholder="请输入执行人" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" @click="search" type="primary">搜索</el-button>
          <el-button icon="el-icon-refresh-left" @click="resetSearchForm">重置</el-button>
          <el-button type="primary" class="pri-add-btn" icon="el-icon-circle-plus" @click="onOperate('new')">
            新增默认py计划
          </el-button>
        </el-form-item>
      </el-form>
      <div class="content-table">
        <el-table
          :header-cell-style="{
            background: 'rgba(144, 147, 153, 0.06)',
            color: 'rgba(0, 0, 0, 0.65)',
            fontSize: '14px',
          }"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column
            prop="id"
            label="ID"
            width="100px"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column prop="stage" label="测试阶段" width="80px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column
            prop="planAliasName"
            label="计划别名"
            width="150px"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            prop="gitRepository"
            label="git仓库地址"
            width="300px"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column prop="gitBranch" label="git分支" width="200px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="jenkinsNode" label="运行节点" width="200px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="runCmd" label="执行命令" width="200px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="crontabSwitch" label="定时任务开关" width="120px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="crontabExpression" label="定时任务表达式" width="150px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="emailSwitch" label="通知开关" width="100px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="emailSendto" label="通知人列表" width="150px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" width="400px">
            <template slot-scope="scope">
              <div>
              <el-button type="info" size="mini" plain @click="onOperate('edit', scope.row.id)">编辑</el-button>
              <el-button type="danger" size="mini" plain @click="onDel('删除', scope.row)">删除</el-button>
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
    <ShowAddPlanConfigDialog :dialogFormVisible.sync="dialogFormVisible" :dialogTitle="dialogTitle" :id="configId" @success="resetForm"/>
  </div>

</template>

<script>
import AddPlanConfig from "./AddPlanConfig";
import { delConfirm } from "@/utils/commonMethods";
export default {
  components: {
    ShowAddPlanConfigDialog: AddPlanConfig,
  },
  data() {
    return {
      isLoading: false,
      dialogTitle:"查看命令输出",
      dialogFormVisible:false,
      configId:"",
      searchForm: {
        page: 1,
        perPage: 10,
        keyword: "",
      },
      tableData: [],
      currentPage: 1,
      productInfo: null,
      total: 0
    };
  },
  created() {
    let info = localStorage.getItem("productInfo");
    info = JSON.parse(info) || {};
    this.productInfo = {
      productId: info.productId,
      productName: info.name,
      releasePlanNameKw: info.releasePlanNameKw,
    };
    this.getTableData();
  },

  methods: {
    async getTableData() {  //获取数据，渲染表格
      let url = `/hirunner/products/${this.productInfo.productId}/planConfigList`;
      let params = [];
      let keys = Object.keys(this.searchForm);
      keys.forEach(key => {
        let value = this.searchForm[key];
        if (value) {
          params.push(`${key}=${this.searchForm[key]}`);
        }
      });
      // 兼容发布计划关键字的查询
      params.push(`releasePlanNameKw=${this.productInfo.releasePlanNameKw}`);
      url = url + "?" + params.join("&");
      this.isLoading = true;
      try {
        let { data } = await this.$http.get(url);
        this.tableData = data.items || [];
        this.total = data.totalNum || 0;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.$refs.searchForm.resetFields();
      this.getTableData();
    },
    search() {
      this.searchForm.page = 1;
      this.getTableData();
    },
    onOperate(type, id = "") {
      const titleMap = {
        new: "新增计划配置",
        edit: "编辑计划配置",
      };
      this.dialogTitle = titleMap[type];
      this.dialogFormVisible = true;
      this.configId = id; // 编辑页面的时候传递的
    },
    onDel(btnText, row) {
      delConfirm(
        `是否${btnText}此默认计划配置？`,
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
        $url = `/hirunner/planConfigList/${id}`;
        $method = "delete";
      }
      this.$http[$method]($url, params).then(() => {
        this.$notifyMessage(`${btnText}成功`, { type: "success" });
        this.getTableData();
      });
    },
    pageSizeChange(val) {
      this.searchForm.perPage = val;
      this.searchForm.page = 1;
      this.getTableData();
    },
    pageChange(val) {
      this.searchForm.page = val;
      this.getTableData();
    },
    resetSearchForm() {
      this.searchForm.keyword = "";
      this.getTableData();
    },
  },
};
</script>

<style lang="scss" scoped>
.form-box {
  margin-top: 16px;
  .custom-size .el-form-item__content,
  .custom-size .el-select,
  .custom-size .el-select > .el-input {
    width: 380px;
  }
}
.plan-info-list {
  margin: 0 24px;
}
.plan-name {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;
  margin-top: 10px;
}
.plan-info-list {
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 32px;
  color: rgba(0, 0, 0, 0.65);
  span.label {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
  }
}
.info-txt {
  margin-top: 16px;
  line-height: 28px;
  p {
    padding-right: 30px;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: 15px;
      top: 6px;
      width: 1px;
      height: 16px;
      background: #e6e6ea;
    }
    float: left;
    &:first-child {
      padding-left: 0;
    }
    &:last-child::after {
      width: 0;
    }
  }
}

.plan-describe {
  margin-top: 15px;
  .plan-describe-txt {
    margin-left: 70px;
  }
}

</style>
