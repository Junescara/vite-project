<template>
  <p>你好</p>
  <el-upload
  class="upload-demo"
  action="http://26.225.190.254:8581/upload"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</template>

<script>
export default {

}
</script>

<style>

</style>