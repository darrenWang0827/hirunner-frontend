<template>
  <div class="page-wrap">
    <el-dialog :title="dialogTitle" :visible="visible" width="600px" :close-on-click-modal="false" @close="onResetForm">
      <el-form :model="productForm" ref="productFormRef" :rules="rules" label-width="100px" class="form-common">
        <el-form-item label="产品ID" prop="productId">
          <el-input v-model="productForm.productId" placeholder="请输入DPMS的产品ID" class="input-380"></el-input>
        </el-form-item>
        <el-form-item label="产品名称" prop="name">
          <el-input v-model="productForm.name" placeholder="请输入产品名称" class="input-380"></el-input>
        </el-form-item>
        <el-form-item label="发布计划名称关键词" prop="releasePlanNameKw">
          <el-input v-model="productForm.releasePlanNameKw" placeholder="如DPMS有其他产品的，请输入以做为区分" class="input-380"></el-input>
        </el-form-item>
        <!--
        <el-form-item label="Git仓库" prop="gitRepository">
          <el-input v-model="productForm.gitRepository" placeholder="请输入代码仓库地址" class="input-380"></el-input>
        </el-form-item>
        <el-form-item label="Git分支" prop="gitBranch">
          <el-input v-model="productForm.gitBranch" placeholder="请输入代码拉取分支" class="input-380"></el-input>
        </el-form-item>
        -->
        <el-form-item label="测试负责人" prop="testUsers">
          <el-input v-model="productForm.testUsers" placeholder="请输入测试负责人" class="input-380"></el-input>
        </el-form-item>
        <el-form-item label="开发负责人" prop="devUsers">
          <el-input v-model="productForm.devUsers" placeholder="请输入开发负责人" class="input-380"></el-input>
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
import { wechatnameValidator,dpmsIdValidator } from '@/utils/const'
export default {
  name: "AddProduct",
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
      productForm: {
        productId: "",
        name: "",
        releasePlanNameKw: "",
        devUsers: "",
        testUsers: "",
        //gitRepository: "",
        //gitBranch: "",
      },
      rules: {
        productId: [
          { required: true, message: "产品id不能为空", trigger: "blur" },
          {validator: dpmsIdValidator, trigger: "blur"}
        ],
        name: [{ required: true, message: "产品名称不能为空", trigger: "blur" }],
        releasePlanNameKw: [],
        devUsers: [
          { required: true, message: "开发负责人不能为空", trigger: "blur" },
          { validator: wechatnameValidator, trigger: "blur" },
        ],
        testUsers: [
          { required: true, message: "测试负责人不能为空", trigger: "blur"},
          {validator: wechatnameValidator, trigger: "blur"},
        ],
      },
    };
  },

  methods: {
    getDetail() {
      this.$http.get(`/hirunner/products/${this.id}`).then(({ data }) => {
        this.productForm.productId = data.productId;
        this.productForm.name = data.name;
        this.productForm.releasePlanNameKw = data.releasePlanNameKw;
        this.productForm.devUsers = data.devUsers;
        this.productForm.testUsers = data.testUsers;
        //this.productForm.gitRepository = data.gitRepository;
        //this.productForm.gitBranch = data.gitBranch;
      });
    },
    onResetForm() {
      this.$refs.productFormRef.resetFields();
      this.isLoading = false;
      this.productForm.productId = "";
      this.productForm.name = "";
      this.productForm.releasePlanNameKw = "";
      this.productForm.devUsers = "";
      this.productForm.testUsers = "";
      //this.productForm.gitRepository = "";
      //this.productForm.gitBranch = "";
      this.$emit("update:dialogFormVisible", false);
    },
    onSubmit() {
      this.$refs.productFormRef.validate(valid => {
        if (valid) {
          //this.productForm.productId = this.productForm.productId.trim(); // 数字类型的没有trim()方法
          this.productForm.name = this.productForm.name.trim();
          this.productForm.releasePlanNameKw = this.productForm.releasePlanNameKw.trim();
          this.productForm.devUsers = this.productForm.devUsers.trim();
          this.productForm.testUsers = this.productForm.testUsers.trim();
          //this.productForm.gitRepository = this.productForm.gitRepository.trim();
          //this.productForm.gitBranch = this.productForm.gitBranch.trim();
          this.isLoading = true;
          this.onRequest();
        }
      });
    },
    onRequest() {
      const { productId,name, releasePlanNameKw,devUsers,testUsers } = this.productForm;
      let params = {
        productId,
        name,
        releasePlanNameKw,
        devUsers,
        testUsers,
        //gitRepository,
        //gitBranch,
      };
      let $method = "post";
      let $url = "/hirunner/products";
      if (this.id) {
        $method = "put";
        $url = `/hirunner/products/${this.id}`;
      }
      this.$http[$method]($url, params)
        .then(() => {
          this.$notifyMessage("保存成功", { type: "success" });
          this.onResetForm();
          this.$emit("success");
          //this.logout();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    logout() {
      let loginInfo = localStorage.getItem("loginInfo");
      let oldLoginTime = localStorage.getItem("loginTime");
      localStorage.clear();
      if (oldLoginTime) {
        localStorage.setItem("loginTime", new Date().getTime().toLocaleString());
      }
      if (loginInfo) {
        loginInfo = JSON.parse(loginInfo);
        loginInfo.userPWD = "";
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
      }
      //this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
.role-list {
  ::v-deep.el-tag {
    margin-bottom: 15px;
  }
}
</style>
