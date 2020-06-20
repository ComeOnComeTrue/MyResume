<template>
  <div class="works-wrapper">
    <div class="works-box" v-for="item in worksData" :key="item.id">
      <div class="title-box">
        <span class="title">{{ item.title }}</span>
        <a :href="item.preview" target="_blank">预览</a>
        <a :href="item.code" target="_blank">源码</a>
      </div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    worksData: {
      type: Array,
      default: [
        {
          title: "标题",
          content: "内容",
          id: 1,
          preview:
            "https://comeoncometrue.github.io/Gulp/html5music/dist/html/index.html",
          code:
            "https://comeoncometrue.github.io/Gulp/html5music/dist/html/index.html"
        }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
$themeColor: #09aeea;
.works-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  padding: 20px;
  box-sizing: border-box;
  .works-box {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    margin-bottom: 10px;
    &:last-of-type {
        border-bottom: none;
    }
    .title-box {
        margin-bottom: 10px;
      .title {
        color: $themeColor;
        font-size: 24px;
        padding: 10px 0;
        margin-bottom: 20px;
      }
      a {
        height: 30px;
        margin-left: 20px;
        padding: 2px 10px;
        border-radius: 5px;
        background-color: #dddddd;
        font-weight: 600;
        &:hover {
            color: $themeColor;
        }
      }
    }

    .content {
        line-height: 24px;
        text-indent: 36px;
        font-weight: 600;
    }
  }
}
</style>