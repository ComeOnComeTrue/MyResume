<template>
  <div class="works-wrapper">
    <div class="works-box" v-for="item in worksData" :key="item.id">
      <div class="title-box">
        <span class="title">{{ item.title }}</span>
        <a :href="item.preview" target="_blank" v-if="item.preview">预览</a>
        <a :href="item.code" target="_blank">源码</a>
      </div>
      <div class="content" v-if="item.id == 1">
        <p>技术栈：<i>Vue、vue-cli3、vue-router、vuex、axios、transition-group列表过渡、velocity-animate动画插件</i></p>
        <p>通过<i> vue-cli3 </i>脚手架搭建项目，
        然后通过<i> axios </i>获取后端返回的数据渲染页面。
        利用<i> vue-router </i>导航到电影页面，通过<i>动态路由</i>实现每个电影之间的跳转。
        利用<i>全局前置守卫</i>守卫电影播放页面，要登录后才可以访问电影播放页面。
        通过<i> transition-group与velocity-animate </i>实现弹幕过渡动画。
        利用<i> vuex </i>统一管理需要共享的数据。</p>
      </div>
      <div class="content" v-if="item.id == 2">
        <p>技术栈：<i>Gulp、zepto、less</i></p>
        <p>使用<i> Gulp </i>自动化构建工具构建项目，然后通过<i>vm、vh</i>进行移动端适配。
        利用zepto库提供的ajax获取歌曲数据，进行渲染页面。
        利用移动端事件实现切歌、收藏、进度条滑动等功能。
        常用功能块单独放一个js文件，从而代码可复用，并且代码不冗余。
        </p>
      </div>
      <div class="content" v-if="item.id == 3">
        <p>技术栈：<i>原生js</i></p>
        <p>生成蛇身与蛇体，通过监听键盘事件，进行对应操作。</p>
      </div>
      <div class="content" v-if="item.id == 4">
        <p>技术栈：<i>原生框架 MINA</i></p>
      </div>
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
          title: "Vue实现电影网页",
          id: 1,
          preview: "http://zhongqiansheng.gitee.io/mymovie",
          code: "https://gitee.com/zhongqiansheng/myMovie"
        },
      ]
    }
  },
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
        line-height: 26px;
        text-indent: 36px;
        font-weight: 600;
        i {
          color: red;
        }
    }
  }
}
</style>