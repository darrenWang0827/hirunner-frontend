<template>
  <div class="page-wrap">
    <el-dialog :title="dialogTitle" :visible="visible" width="80%" :close-on-click-modal="false" @close="onResetForm">
      <el-form :model="testPlanResultForm" 1abel-width="100px" class="form-common">
        <editor
          :value="testPlanResultForm.output"
          @init="editorInit"
          lang="text"
          theme="monokai"
          width="100%"
          :height="codeHeight"
        ></editor>
      </el-form>
      <div slot="footer" class="dialog-footer"></div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name:"CmdOutput",
  props:{
    dialogTitle: {
      type:String,
      default:"查看命令输出",
    },
    dialogFormVisible: {
      type:Boolean,
      default:false,
    },
    id: {
      default: "",
    },
  },
  computed:{
    visible(){
      return this.dialogFormVisible;
    }
  },
  watch: {
    dialogFormVisible(val){
      if(val && this.id){
        this.getDetail();
      }
    }
  },
  data(){
    return {
      codeHeight: window.innerHeight - 315,
      isLoading: false,
      testPlanResultForm:{
        output:"",
      }
    };
  },
  components:{
    editor: require("vue2-ace-editor"),
  },
  methods: {
    editorInit: function(editor) {
      require("brace/theme/monokai");
      require("brace/mode/python");
      editor.setReadOnly(true);
    },
    onResetForm() {
      this.testPlanResultForm.output = "";
      this.$$emit("update:dialogFormVisible",false);
    },
    getDetail() {
      this.$http.get(`/hirunner/runHistory/${this.id}`).then(({ data }) => {
        this.testPlanResultForm.output = data.output;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.ace_editor {
  position: relative;
  overflow: hidden;
  font: 18px / normal "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro", monospace !important;
  direction: ltr;
  text-align: left;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
