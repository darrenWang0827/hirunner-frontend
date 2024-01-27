<template>
  <div class="page-wrap">
  <el-dialog :title="dialogTitle" :visible="visible" width="600px" :close-on-click-modal="false" @close="onResetForm">
    <el-form :model="planConfigForm" ref="planConfigFormRef" :rules="rules" label-width="100px" class="form-common">
      <el-form-item label="测试阶段" prop="stage">
        <el-select v-model="planConfigForm.stage" placeholder="请选择">
          <el-option
            v-for="item in stageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="计划别名" prop="name">
        <el-input v-model="planConfigForm.planAliasName" placeholder="请输入计划别名" class="input-380"></el-input>
      </el-form-item>
      <el-form-item label="Git仓库" prop="gitRepository">
        <el-input v-model="planConfigForm.gitRepository" placeholder="请输入代码仓库地址" class="input-380"></el-input>
      </el-form-item>
      <el-form-item label="Git分支" prop="gitBranch">
        <el-input v-model="planConfigForm.gitBranch" placeholder="请输入代码拉取分支" class="input-380"></el-input>
      </el-form-item>
      <el-form-item label="运行节点" prop="jenkinsNode">
        <el-input v-model="planConfigForm.jenkinsNode" placeholder="请输入jenkins节点" class="input-380"></el-input>
      </el-form-item>
      <el-form-item class="custom-size" prop="runCmd" label="执行命令">
        <el-input v-model="planConfigForm.runCmd" placeholder="请输入执行命令"></el-input>
      </el-form-item>
      <el-form-item class="custom-size" prop="crontabSwitch" label="定时任务开关">
        <el-switch
        :active-text="planConfigForm.crontabSwitch"
        active-value="已开启"
        active-color="rgb(22,140,0)"
        inactive-value="已关闭"
        inactive-color="rgb(200,0,0)"
          v-model="planConfigForm.crontabSwitch"
          @change="changeScheduleSwitch()"
        >
        </el-switch>
      </el-form-item>
      <el-form-item class="custom-size" prop="crontabExpression" label="计划时间" v-if="planConfigForm.crontabSwitch === '已开启'">
        <el-input v-model="planConfigForm.crontabExpression" placeholder="请输入crontab表达式">
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
          :active-text="planConfigForm.emailSwitch"
          active-value="已开启"
          active-color="rgb(22,140,0)"
          inactive-value="已关闭"
          inactive-color="rgb(200,0,0)"
            v-model="planConfigForm.emailSwitch"
            @change="changeScheduleSwitch()"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="通知人列表" prop="testUsers">
          <el-input v-model="planConfigForm.emailSendto" placeholder="请输入通知人企业微信，逗号隔开" class="input-380"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onResetForm">取 消</el-button>
        <el-button type="primary" @click="onSubmit" :loading="isLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { gitRepositoryValidator } from '@/utils/const';
export default {
  name: "AddPlanConfig",
  props: {
    dialogTitle: {
      type: String,
      default: "新增",
    },
    dialogFormVisible: {
      type: Boolean,
      default: false,
    },
    id: {
      default: "",
    },
  },
  computed: {
    visible() {
      return this.dialogFormVisible;
    },
  },
  watch: {
    dialogFormVisible(val) {
      if (val && this.id) {
        this.getDetail();
      }
    },
  },
  data() {
    return {
      isLoading: false,
      planConfigForm: {
        productId: "",
        releasePlanNameKw: "",
        productName: "",
        stage: "",
        planAliasName: "",
        gitRepository: "",
        gitBranch: "",
        jenkinsNode: "",
        runCmd:"",
        crontabSwitch:"已关闭",
        crontabExpression:"",
        emailSwitch:"已关闭",
        emailSendto:"",
      },
      stageOptions:[
        { value: '冒烟测试', label: '冒烟测试' },
        { value: 'SIT测试', label: 'SIT测试' },
        { value: '回归测试', label: '回归测试' },
        { value: '灰度测试', label: '灰度测试' },
        { value: '其他测试', label: '其他测试' }
      ],
      rules: {
        productId: [{ required: true, message: "产品id不能为空", trigger: "blur" }],
        productName: [{ required: true, message: "产品名称不能为空", trigger: "blur" }],
        stage: [{ required: true, message: "测试阶段不能为空", trigger: "blur" }],
        planAliasName: [{ required: true, message: "计划别名不能为空", trigger: "blur" }],
        gitRepository: [
          { required: true, message: "git仓库地址不能为空", trigger: "blur" },
          { validator: gitRepositoryValidator, trigger:"blur" }
        ],
        jenkinsNode: [
          { required: true, message: "jenkin运行节点不能为空", trigger: "blur" },
        ],
        gitBranch: [{ required: true, message: "git分支不能为空", trigger: "blur" }],
        runCmd: [{ required: true, message: "执行命令不能为空", trigger: "blur" }],
      },
    };
  },
  methods: {
    changeScheduleSwitch() {
      //this.setTaskText(); //前面已经在active-text中用form.status 解决了，注意这里的已开启和已关闭中文要与后台枚举值类型保持一致。

    },
    getDetail() {
      this.$http.get(`/hirunner/planConfigList/${this.id}`).then(({ data }) => {
        this.planConfigForm.productId = data.productId;
        this.planConfigForm.productName = data.productName;
        this.planConfigForm.releasePlanNameKw = data.releasePlanNameKw;
        this.planConfigForm.stage = data.stage;
        this.planConfigForm.planAliasName = data.planAliasName;
        this.planConfigForm.gitRepository = data.gitRepository;
        this.planConfigForm.gitBranch = data.gitBranch;
        this.planConfigForm.jenkinsNode = data.jenkinsNode;
        this.planConfigForm.runCmd = data.runCmd;
        this.planConfigForm.crontabSwitch = data.crontabSwitch;
        this.planConfigForm.crontabExpression = data.crontabExpression;
        this.planConfigForm.emailSwitch = data.emailSwitch;
        this.planConfigForm.emailSendto = data.emailSendto;
      });
    },
    onResetForm() {
      this.$refs.planConfigFormRef.resetFields();
      this.isLoading = false;
      this.planConfigForm.productId = "";
      this.planConfigForm.productName = "";
      this.planConfigForm.releasePlanNameKw = "";
      this.planConfigForm.planAliasName = "";
      this.planConfigForm.gitRepository = "";
      this.planConfigForm.gitBranch = "";
      this.planConfigForm.jenkinsNode = "";
      this.planConfigForm.runCmd = "";
      this.planConfigForm.crontabExpression = "";
      this.planConfigForm.emailSendto = "";
      this.$emit("update:dialogFormVisible", false);
    },
    onSubmit() {
      this.$refs.planConfigFormRef.validate(valid => {
        if (valid) {
          let productInfo = localStorage.getItem("productInfo");
          productInfo = JSON.parse(productInfo);
          this.planConfigForm.productId = productInfo.productId;
          this.planConfigForm.releasePlanNameKw = productInfo.releasePlanNameKw;
          this.planConfigForm.productName = productInfo.name;
          this.planConfigForm.planAliasName = this.planConfigForm.planAliasName.trim();
          this.planConfigForm.gitRepository = this.planConfigForm.gitRepository.trim();
          this.planConfigForm.gitBranch = this.planConfigForm.gitBranch.trim();
          this.planConfigForm.jenkinsNode = this.planConfigForm.jenkinsNode.trim();
          this.planConfigForm.runCmd = this.planConfigForm.runCmd.trim();
          this.planConfigForm.crontabExpression = this.planConfigForm.crontabExpression.trim();
          this.planConfigForm.emailSendto = this.planConfigForm.emailSendto.trim();
          this.isLoading = true;
          this.onRequest();
        }
      });
    },
    onRequest() {
      const { productId,releasePlanNameKw,productName, stage,planAliasName, gitRepository, gitBranch,runCmd,crontabSwitch,crontabExpression,emailSwitch,emailSendto,jenkinsNode } = this.planConfigForm;
      let params = {
        productId,
        releasePlanNameKw,
        productName,
        stage,
        planAliasName,
        gitRepository,
        gitBranch,
        jenkinsNode,
        runCmd,
        crontabSwitch,
        crontabExpression,
        emailSwitch,
        emailSendto
      };
      let $method = "post";
      let $url = "/hirunner/planConfigList";
      if (this.id) {
        $method = "put";
        $url = `/hirunner/planConfigList/${this.id}`;
      }
      this.$http[$method]($url, params)
        .then(() => {
          this.$notifyMessage("计划配置保存成功", { type: "success" });
          this.onResetForm();
          this.$emit("success");
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.role-list {
  ::v-deep.el-tag{
    margin-bottom: 15px;
  }
}

</style>
