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
          id: 1,
          preview: "http://zhongqiansheng.gitee.io/mymovie",
          code: "https://gitee.com/zhongqiansheng/myMovie"
        },
        {
          title: "移动端音乐播放器",
          id: 2,
          preview: "https://zhongqiansheng.gitee.io/mymusicplayer/html/",
          code: "https://gitee.com/zhongqiansheng/MyMusicPlayer/tree/master"
        },        
        {
          title: "贪吃蛇游戏",
          id: 3,
          preview: "https://zhongqiansheng.gitee.io/snakefood/",
          code: "https://gitee.com/zhongqiansheng/snakeFood"
        },
        {
          title: "微信小程序",
          id: 4,
          preview: null,
          code: "https://github.com/ComeOnComeTrue/WX-miniProgram/tree/test"
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
  box-sizing: border-box;
  overflow: auto;
}
</style>