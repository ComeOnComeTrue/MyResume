<template>
  <div id="app">
    <div class="main-wrapper">
      <!-- 左边信息区域 -->
      <div class="content-left">
        <div class="head-img">
          <div class="img-box">
            <img src="https://ae01.alicdn.com/kf/He52f32df74b242a39fc78d1ee4e37363b.jpg" alt="头像" />
          </div>
        </div>
        <div class="head-info">
          <h3>性别：男</h3>
          <h3>年龄：21</h3>
          <h3>姓名：钟钱胜</h3>
          <h3 class="iconfont icon-lianxi">: 17820238305</h3>
          <h3>专业：计算机运用技术</h3>
        </div>
      </div>

      <!-- 右边展示内容区域 -->
      <div class="content-right">
        <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <router-view></router-view>
        </transition>
        <!-- <div class="bottom iconfont icon-xiangxia"></div> -->
      </div>
      <!-- 右边菜单区域 -->
      <right-menu-nav
        :menuHoverInfoAll="menuHoverInfoAll"
        :curPathIndex="curPathIndex"
        :isSelectMenuArr="isSelectMenuArr"
        @changeRouterIndex="changeRouterIndex"
      />
    </div>
  </div>
</template>

<script>
import RightMenuNav from "./components/RightMenuNav";
export default {
  components: {
    RightMenuNav
  },
  data() {
    return {
      menuHoverInfoAll: ["首页", "插件", "项目经验", "个人信息"],
      curPathIndex: 0, // 当前路由索引
      isSelectMenuArr: [true, false, false, false],
      randomDirection: 1 // 动画随机方向
    };
  },
  created() {
    if (this.$router.history.current.path == "/home") return;
    this.changeRouterIndex(this.curPathIndex);
  },
  methods: {
    // 改变子传过来的路由索引
    changeRouterIndex(index) {
      index == "next"
        ? (index = ++this.curPathIndex)
        : index == "last"
        ? (index = --this.curPathIndex)
        : (this.curPathIndex = index);

      this.isSelectMenuArr.forEach(
        (ele, i) => (this.isSelectMenuArr[i] = false)
      );
      this.isSelectMenuArr.splice(index, 1, true); // 数组变异方法
      // 路由跳转
      index === 0
        ? this.$router.push("home")
        : index === 1
        ? this.$router.push("component")
        : index === 2
        ? this.$router.push("works")
        : index === 3
        ? this.$router.push("my")
        : "";
    },
    // 右边路由展示内容过渡动画
    beforeEnter(el) {
      //动画入场前，可以在其中设置元素开始动画之前的起始样式
      this.randomDirection = Math.ceil(Math.random() * 4);
      if (this.randomDirection == 1) {
        el.style.left = "-500px";
      } else if (this.randomDirection == 2) {
        el.style.bottom = "-500px";
      }
      el.style.opacity = 0;
    },
    enter(el, done) {
      //  动画入场中，可以在其中写动画
      if (this.randomDirection == 1) {
        Velocity(
          el,
          { left: 0, opacity: 1 },
          { duration: 900, complete: done }
        );
      } else if (this.randomDirection == 2) {
        Velocity(
          el,
          { bottom: 0, opacity: 1 },
          { duration: 900, complete: done }
        );
      } else if (this.randomDirection == 3) {
        Velocity(el, { opacity: 1 }, { duration: 900, complete: done });
      } else {
        Velocity(el, { right: 0, opacity: 0.3 }, { duration: 600 });
        Velocity(
          el,
          { right: 0, opacity: 1 },
          { duration: 300, complete: done }
        );
      }
    },
    leave(el, done) {
      const width = el.offsetWidth;
      // 离开中
      if (this.randomDirection == 1) {
        Velocity(
          el,
          { translateX: `${width}px`, opacity: 0 },
          { duration: 600, complete: done }
        );
      } else if (this.randomDirection == 2) {
        Velocity(
          el,
          { translateY: `-${width}px`, opacity: 0 },
          { duration: 600, complete: done }
        );
      } else if (this.randomDirection == 3) {
        Velocity(
          el,
          { scale: "0,0", rotateZ: "400deg", opacity: 0 },
          { duration: 600, complete: done }
        );
      } else {
        Velocity(el, { scale: "0.8,0.8", opacity: 0.7 }, { duration: 300 });
        Velocity(
          el,
          { translateX: `-${width + 100}px`, opacity: 0 },
          { duration: 300, complete: done }
        );
      }
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #ddd;
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .main-wrapper {
      @media screen and (max-width: 1480px) {
        width: 80%;
      }
      position: relative;
      display: flex;
      align-items: center;
      width: 75%;
      height: 80%;
      background: linear-gradient(#21e1ae, #09aeea);
      border-radius: 32px;
      background-color: red;
      
      // 左边信息区域
      .content-left {
        @media screen and (max-width: 1280px) {
          display: none;
        }
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
        height: 80%;
        overflow: hidden;
        .head-img {
          position: relative;
          width: 60%;
          height: 0px;
          padding-top: 60%;
          margin-bottom: 20px;
          .img-box {
            // 贴合父级
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 5px solid #ddd;
            }
          }
        }
        .head-info {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 100%;
          height: 45%;
          h3 {
            color: #fff;
            font-weight: 600;
            text-align: center;
          }
        }
      }

      // 右边路由展示内容
      .content-right {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 32px;
        overflow: hidden;
        // div {
        //   position: absolute;
        //   border-radius: 32px;
        // }
      }
    }
  }
}
</style>
