<template>
  <div class="works">
    <works-content :worksData="worksData"/>
  </div>
</template>

<script>
import WorksContent from "../components/WorksContent"
export default {
  components: {
    WorksContent
  },
  data() {
    return {
      worksData: [
        {
          title: "Vue实现电影网页",
          content: "通过脚手架搭建，vue-router导航到电影页面、axios获取后端返回的数据渲染页面、vuex管理共享数据，进行主要操作。",
          id: 1,
          preview: "http://zhongqiansheng.gitee.io/mymovie",
          code: "https://gitee.com/zhongqiansheng/MyMusicPlayer/tree/master"
        },
        {
          title: "音乐播放器",
          content: "使用Gulp构建项目，以及使用常用的事件完成项目",
          id: 2,
          preview: "https://zhongqiansheng.gitee.io/mymusicplayer/html/",
          code: "https://gitee.com/zhongqiansheng/MyMusicPlayer/tree/master"
        },        
        {
          title: "贪吃蛇游戏",
          content: "使用Gulp构建项目，以及使用常用的事件完成项目",
          id: 3,
          preview: "https://zhongqiansheng.gitee.io/snakefood/",
          code: "https://gitee.com/zhongqiansheng/snakeFood"
        }
      ]
    }
  }
}
</script>

<style scoped>
.works {
  width: 100%;
  height: 100%;
  color: #000;
  background-color: #fff;
}
</style>