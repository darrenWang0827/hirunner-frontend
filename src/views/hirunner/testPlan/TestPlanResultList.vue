<template>
  <div>
    <div class="content-info">
      <div class="content-header">
        <div class="info-name">计划信息</div>
      </div>
      <div class="plan-info-list">
        <div class="info-txt clear">
          <p>
            <span class="label">计划ID：</span>
            {{ testPlanInfo.id }}
          </p>
          <p>
            <span class="label">计划名称：</span>
            {{ testPlanInfo.name }}
          </p>
          <p>
            <span class="label">所属项目：</span>
            {{ productName }}
          </p>
          <p>
            <span class="label">所属版本：</span>
            {{ versionNo }}
          </p>
        </div>
        <div class="info-txt clear">
          <p>
            <span class="label">git地址：</span>
            {{ testPlanInfo.gitRepository }}
          </p>
          <p>
            <span class="label">git分支：</span>
            {{ testPlanInfo.gitBranch }}
          </p>
        </div>
        <div class="info-txt clear">
          <p>
            <span class="label">运行节点：</span>
            {{ testPlanInfo.jenkinsNode }}
          </p>
          <p>
            <span class="label">运行命令：</span>
            {{ testPlanInfo.runCmd }}
          </p>
        </div>
      </div>
    </div>
    <div class="content-info case-list" :loading="isLoading">
      <div class="content-header clear">
        <div class="info-name self-left">
          执行记录
        </div>
      </div>
      <el-form size="medium" :inline="true" :model="searchForm" class="search-form" ref="searchForm">
        <el-form-item label="关键字" prop="keyword">
          <el-input v-model="searchForm.keyword" placeholder="请输入执行人" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" @click="search" type="primary">搜索</el-button>
          <el-button icon="el-icon-refresh-left" @click="resetSearchForm">重置</el-button>
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
            label="执行ID"
            width="100px"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column prop="runUserNickname" label="执行人" width="150px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column
            prop="runTime"
            label="执行时间"
            width="200px"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="100px"
            align="center"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column prop="elapsed" label="总耗时" width="150px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="caseNumAll" label="总用例数" width="100px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="caseNumSuccess" label="成功用例数" width="100px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="successRate" label="用例成功率" width="100px" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" width="400px">
            <template slot-scope="scope">
              <div>
                <el-button type="info" size="mini" @click="gotoReport(scope.row.reportUrl)" plain v-if="scope.row.reportUrl">查看测试报告</el-button>
                <el-button type="info" size="mini" @click="gotoJenkins(scope.row.jenkinsLogUrl)" plain v-if="scope.row.jenkinsLogUrl">查看执行日志</el-button>
                <el-button type="info" size="mini" @click="gotoOutput(scope.row.id)" plain v-if="scope.row.output">查看触发日志</el-button>
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
    <ShowCmdOutputDialog :dialogFormVisible.sync="dialogFormVisible" :dialogTitle="dialogTitle" :id="historyId"/>
  </div>
</template>
<script>
import CmdOutput from "./CmdOutput";
export default {
  components: {
    ShowCmdOutputDialog: CmdOutput,
  },
  data() {
    return {
      isLoading: false,
      dialogTitle:"查看命令输出",
      dialogFormVisible:false,
      historyId:"",

      searchForm: {
        page: 1,
        perPage: 10,
        keyword: "",
      },
      tableData: [],
      currentPage: 1,
      planInfo: null,
      total: 0,
      productName: "",
    };
  },
  created() {
    let info = localStorage.getItem("testPlanInfo");
    info = JSON.parse(info) || {};
    this.testPlanInfo = {
      name: info.name,
      stage: info.stage,
      gitRepository: info.gitRepository,
      gitBranch: info.gitBranch,
      jenkinsNode: info.jenkinsNode,
      runCmd: info.runCmd,
      testUsers: info.testUsers,
      id: info.id,
    };
    let curProductVersion = JSON.parse(localStorage.getItem("curProductVersion"));
    this.productName = curProductVersion.curProductName;
    this.versionNo = curProductVersion.curVersionNo;
    this.getTableData();
  },
  methods: {
    async getTableData() {  //获取数据，渲染表格
      let url = `/hirunner/testPlans/${this.testPlanInfo.id}/runHistory`;
      let params = [];
      let keys = Object.keys(this.searchForm);
      keys.forEach(key => {
        let value = this.searchForm[key];
        if (value) {
          params.push(`${key}=${this.searchForm[key]}`);
        }
      });
      url = url + "?" + params.join("&");
      this.isLoading = true;
      try {
        let { data } = await this.$http.get(url);
        for (var i=0;i<data.items.length; i++){
          data.items[i].successRate = String((100*data.items[i].caseNumSuccess/data.items[i].caseNumAll).toFixed(2))+"%";
        }
        this.tableData = data.items || [];
        this.total = data.totalNum || 0;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
      }
    },
    gotoReport(reportUrl) {  // 查看测试报告的按钮
      const reportWindow = window.open('about:blank','_blank');
      if(reportWindow){
        reportWindow.location.href = reportUrl;
      }
    },
    gotoJenkins(jenkinsLogUrl) {  // 查看测试报告的按钮
      const reportWindow = window.open('about:blank','_blank');
      if(reportWindow){
        reportWindow.location.href = jenkinsLogUrl;
      }
    },
    gotoOutput(id){
      //localStorage.setItem("testPlanRunHistoryId",id);
      this.dialogFormVisible = true;
      // 把当前row的id传递给隐藏着的弹窗组件
      this.historyId = id;
    },
    async panelToggle() {
      this.addCase.loading = true;
      try {
        await this.getCaseData(1);
        this.addCase.show = true;
      } catch (err) {
        console.log(err);
      }
      this.addCase.loading = false;
    },
    async dataChange(data) {
      await this.getCaseData(data.page, data.searchInfo);
    },
    async getCaseData(page, keyword) {
      let curProductVersion = JSON.parse(localStorage.getItem("curProductVersion"));
      let projectId = curProductVersion.curProjectId;
      let params = {
        page,
        keyword: keyword,
        perPage: 10,
        excludePlanId: this.planInfo.id,
        projectId,
      };
      let url = `/hirunner/cases`;
      try {
        let { data } = await this.$http.get(url, { params: params });
        if (data) {
          let dataList =
            data.items &&
            data.items.map(item => ({
              id: item.id,
              desc: item.desc,
              creatorNickname: item.creatorNickname,
            }));
          this.addCase.tableData = dataList || [];
          this.addCase.total = data.totalNum;
        }
      } catch (err) {
        console.log(err);
      }
    },
    search() {
      this.searchForm.page = 1;
      this.getTableData();
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
.case-list {
  margin-top: 24px;
}
.add-case {
  .el-button {
    padding: 11px 20px;
  }
}
</style>
