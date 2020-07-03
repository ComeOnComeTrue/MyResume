<template>
  <div class="home-box">
    <div class="home">
      <div class="direction">
        <h2>应聘岗位</h2>
        <p>目前方向：<i>web前端</i></p>
      </div>
      <div class="skillList">
        <h2>专业技能</h2>
        <p class="skill">1. 熟悉使用 <i>HTML、CSS</i> 代码编写，熟悉 <i>W3C</i> 标准，能够根据UI设计图还原页面。</p>
        <p class="skill">2. 熟悉 <i>javascript</i> 数据类型及常用API，理解原型链、闭包、this等特性。</p>
        <p class="skill">3. 熟悉 <i>jQuery</i> 及常用API。</p>
        <p class="skill">4. 熟悉 <i>Ajax</i> 实现异步获取数据，<i>JSONP</i>实现跨域请求。</p>
        <p class="skill">5. 熟悉 <i>HTML5、CSS3、ES6</i> 新特性。</p>
        <p class="skill">6. 熟悉 <i>CSS</i> 扩展语言 <i>SCSS</i>。</p>
        <p class="skill">7. 熟悉构建工具 <i> wepbak、</i>包管理器<i> npm、</i>版本控制工具<i> git</i>。</p>
        <p class="skill">8. 熟悉 <i>Vue</i> 核心知识及常用API，会利用 <i>Vue-cli</i> 脚手架搭建项目。</p>
        <p class="skill">9. 了解微信小程序</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped lang="scss">
$themeColor: #09aeea;
.home-box {
  position: relative;
  width: 100%;
  height: 100%;
  color: #000;
  background-color: #fff;
  font-weight: 600;
  box-sizing: border-box;
  overflow: auto;
  .home{
    padding: 20px;
    h2 {
      font-size: 24px;
      color: $themeColor;
      padding: 10px 0;
    }
    i {
      color: red;
    }
    .direction{
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
      p{
        padding-top: 5px;
        text-indent: 16px;
      }
    }

    .skillList{
      p{
        padding: 10px 0 10px;
        text-indent: 16px;
        line-height: 24px;
      }
    }
  }

}
</style>
