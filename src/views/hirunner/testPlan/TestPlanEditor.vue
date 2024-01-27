<template>
  <div style="clear: both;" class="content-info">
    <div class="content-header">
      <div class="info-name">
        基本信息
      </div>
    </div>
    <el-form class="form-box" label-width="124px" ref="form" :model="form" :rules="rules">
      <el-form-item class="custom-size" prop="status" label="计划状态">
        <el-switch
          :active-text="form.status"
          active-value="已开启"
          active-color="rgb(22,140,0)"
          inactive-value="已关闭"
          inactive-color="rgb(200,0,0)"
          v-model="form.status"
          @change="changeScheduleSwitch()"
        >
        </el-switch>
      </el-form-item>
      <el-form-item class="custom-size" prop="name" label="计划名称">
        <el-input v-model="form.name" placeholder="请输入计划名称"></el-input>
      </el-form-item>
      <el-form-item class="custom-size" prop="stage" label="测试阶段">
        <el-select v-model="form.stage" placeholder="请选择">
          <el-option
            v-for="item in stageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="custom-size" prop="gitRepository" label="git地址">
        <el-input v-model="form.gitRepository" placeholder="请输入git地址"></el-input>
      </el-form-item>
      <el-form-item class="custom-size" prop="gitBranch" label="git分支">
        <el-input v-model="form.gitBranch" placeholder="请输入git分支"></el-input>
      </el-form-item>
      <el-form-item class="custom-size" prop="jenkinsNode" label="运行节点">
        <el-input v-model="form.jenkinsNode" placeholder="请输入jenkins节点"></el-input>
      </el-form-item>
      <el-form-item class="custom-size" prop="runCmd" label="执行命令">
        <el-input v-model="form.runCmd" placeholder="请输入执行命令"></el-input>
      </el-form-item>
      <!--
      <el-form-item class="custom-size" prop="testUsers" label="测试负责人">
        <el-input v-model="form.testUsers" placeholder="请输入测试负责人"></el-input>
      </el-form-item>
      <el-form-item class="custom-size" prop="devUsers" label="开发负责人">
        <el-input v-model="form.devUsers" placeholder="请输入开发负责人"></el-input>
      </el-form-item>
      -->
      <el-form-item class="custom-size" prop="crontabSwitch" label="定时任务开关">
        <el-switch
        :active-text="form.crontabSwitch"
        active-value="已开启"
        active-color="rgb(22,140,0)"
        inactive-value="已关闭"
        inactive-color="rgb(200,0,0)"
          v-model="form.crontabSwitch"
          @change="changeScheduleSwitch()"
        >
        </el-switch>
      </el-form-item>
      <el-form-item class="custom-size" prop="crontabExpression" label="计划时间" v-if="form.crontabSwitch === '已开启'">
        <el-input v-model="form.crontabExpression" placeholder="请输入crontab表达式">
          <el-popover slot="suffix" placement="right" width="450" trigger="hover">
            <div>
              <pre>
<b>crontab表达式，共5位，最小粒度为分钟</b>
*    *    *    *    *
-    -    -    -    -
|    |    |    |    |
|    |    |    |    +----- 星期中星期几 (0 - 6) (星期天 为0)
|    |    |    +---------- 月份 (1 - 12)
|    |    +--------------- 一个月中的第几天 (1 - 31)
|    +-------------------- 小时 (0 - 23)
+------------------------- 分钟 (0 - 59)
【每分钟】
* * * * *
【每小时的第一分】
1 * * * *
【每天7:50】
50 7 * * *
【每两个小时】
0 */2 * * *
【每月1号和15号】
0 0 1,15 * *
【每周一至周五3点钟】
00 03 * * 1-5
【每月的1、11、21、31日的6:30】
30 6 */10 * *
【每月每天的午夜0点20分, 2点20分, 4点20分】
20 0-23/2 * * *
【在12月内, 每天的早上6点到12点，每隔3个小时0分钟】
0 6-12/3 * 12 *
             </pre>
            </div>
            <i slot="reference" class="el-icon-question"></i>
          </el-popover>
        </el-input>
      </el-form-item>
      <el-form-item class="custom-size" prop="emailSwitch" label="通知开关">
        <el-switch
        :active-text="form.emailSwitch"
        active-value="已开启"
        active-color="rgb(22,140,0)"
        inactive-value="已关闭"
        inactive-color="rgb(200,0,0)"
          v-model="form.emailSwitch"
          @change="changeScheduleSwitch()"
        >
        </el-switch>
      </el-form-item>
      <el-form-item class="custom-size" prop="emailSendto" label="通知人列表">
        <el-input v-model="form.emailSendto" placeholder="请输入通知人列表"></el-input>
      </el-form-item>
      <el-form-item class="custom-size"></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save" :loading="saving">保存</el-button>
        <el-button @click="back">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { gitRepositoryValidator } from "@/utils/const";
export default {
  data() {
    return {
      form: {
        name: "",
        releasePlanId:"",
        productId:"",
        stage:"",
        devUsers: "",
        testUsers:"",
        gitRepository: "",
        gitBranch: "",
        jenkinsNode: "",
        runCmd:"",
        status:"",
        crontabSwitch:"",
        crontabExpression:"",
        emailSwitch:"",
        emailSendto:"",
        versionNo:"",
      },
      stageOptions:[
        { value: '冒烟测试', label: '冒烟测试' },
        { value: 'SIT测试', label: 'SIT测试' },
        { value: '回归测试', label: '回归测试' },
        { value: '灰度测试', label: '灰度测试' },
        { value: '其他测试', label: '其他测试' }
      ],
      rules: {
        name: [{ required: true, message: "请输入计划名称", trigger: "blur" }],
        stage: [{ required: true, message: "请选择测试阶段", trigger: "blur" }],
        gitRepository: [
          { required: true, message: "请输入git地址", trigger: "blur" },
          { validator: gitRepositoryValidator, trigger:"blur" }
        ],
        gitBranch: [{ required: true, message: "请输入git分支", trigger: "blur" }],
        jenkinsNode: [{ required: true, message: "请输入运行节点", trigger: "blur" }],
        runCmd: [{ required: false, message: "请输入执行命令", trigger: "blur"}],
      },
      saving: false,
      testPlanId: "",
      curVersionNo: "",
      versionList: [],
      curProductId: "",
      productVersionList: [],
      popoverActive: false,
      taskText: "关闭",
    };
  },
  created() {
    let testPlanInfo = localStorage.getItem("testPlanInfo");
    if (testPlanInfo) {
      testPlanInfo = JSON.parse(testPlanInfo);
      this.testPlanId = testPlanInfo.id;
      this.form.name = testPlanInfo.name;
      this.form.releasePlanId = testPlanInfo.releasePlanId;
      this.form.stage = testPlanInfo.stage;
      this.form.devUsers = testPlanInfo.devUsers;
      this.form.testUsers = testPlanInfo.testUsers;
      this.form.gitRepository = testPlanInfo.gitRepository;
      this.form.gitBranch = testPlanInfo.gitBranch;
      this.form.jenkinsNode = testPlanInfo.jenkinsNode;
      this.form.runCmd = testPlanInfo.runCmd;
      this.form.status = testPlanInfo.status;
      this.form.crontabSwitch = testPlanInfo.crontabSwitch;
      this.form.crontabExpression = testPlanInfo.crontabExpression;
      this.form.emailSwitch = testPlanInfo.emailSwitch;
      this.form.emailSendto = testPlanInfo.emailSendto;
      this.form.versionNo = testPlanInfo.versionNo;
    }
    this.getProductVersion();
  },

  methods: {
    getProductVersion() {
      let localProductVersionList = JSON.parse(localStorage.getItem("productVersionList"));
      if (localProductVersionList) {
        this.productVersionList = localProductVersionList;
      }
    },
    getCurProductId() {
      let localCurProductVersion = JSON.parse(localStorage.getItem("curProductVersion"));
      if (localCurProductVersion) {
        this.curProductId = localCurProductVersion.curProductId;
      }
    },
    getVersionList() {
      this.getCurProductId();
      this.productVersionList.forEach(item => {
        if (item.productId === this.curProductId) {
          this.versionList = item.versionList;
        }
      });
    },
    setTaskText() {
      if (this.form.status === "1") {
        this.taskText = "开启";
      }
      if (this.form.status === "0") {
        this.taskText = "关闭";
      }
    },
    changeScheduleSwitch() {
      //this.setTaskText(); //前面已经在active-text中用form.status 解决了，注意这里的已开启和已关闭中文要与后台枚举值类型保持一致。

    },
    save() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.saving = true;
          this.form.name = this.form.name.trim();
          this.form.stage = this.form.stage.trim();
          let curProductVersion = JSON.parse(localStorage.getItem("curProductVersion"));
          let productId = curProductVersion.curProductId;
          let curVersionNo = curProductVersion.curVersionNo;
          let param = {
            name: this.form.name,
            stage: this.form.stage,
            status: this.form.status,
            gitRepository: this.form.gitRepository,
            gitBranch: this.form.gitBranch,
            jenkinsNode: this.form.jenkinsNode,
            runCmd: this.form.runCmd,
            devUsers: this.form.devUsers,
            testUsers: this.form.testUsers,
            crontabSwitch: this.form.crontabSwitch,
            crontabExpression: this.form.crontabExpression,
            emailSwitch: this.form.emailSwitch,
            emailSendto: this.form.emailSendto,
            versionNo: curVersionNo,
            productId: productId,
            releasePlanId: this.form.releasePlanId,
          };
          // 如果打开了开关，检查必填字段
          if(param.status === "已开启" && !param.runCmd){
            this.$notifyMessage("执行命令不能为空！",{type:"error"})
            return
          }
          if (this.testPlanId) {
            let url = `/hirunner/testPlans/${this.testPlanId}`;
            this.$http.put(url, param).then(() => {
              this.back();
              this.$notifyMessage("修改计划成功", { type: "success" });
            });
          } else {
            let url = `/hirunner/testPlans`;
            this.$http.post(url, param).then(() => {
              this.back();
              this.$notifyMessage("新增计划成功", { type: "success" });
            });
          }
          this.saving = false;
        } else {
          return false;
        }
      });
    },
    back() {
      this.$router.go(-1);
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
</style>
