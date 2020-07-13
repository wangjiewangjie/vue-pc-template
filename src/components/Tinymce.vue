<template>
  <Editor id="tinymce" v-model="tinymceHtml" :init="init"></Editor>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver/theme";
export default {
  name: "tinymce",
  components: { Editor },
  data() {
    return {
      tinymceHtml: "",
      init: {
        language_url: "/public/tinymce/zh_CN.js", //语言包地址
        language: "zh_CN", //语言包
        skin_url: "/tinymce/skins/ui/oxide", //引入外部皮肤
        width: 600, //设置宽度
        height: 300, //设置高度
        resize: false, //调整编辑器大小工具
        menubar: false, //1级菜单
        toolbar:
          "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | undo redo | link unlink image code | removeformat"
      }
    };
  },
  mounted() {
    tinymce.init({});
  }
};
</script>

<style lang="scss" scoped></style>
