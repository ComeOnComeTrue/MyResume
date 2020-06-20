<template>
  <div class="menu">
    <ul class="menu-hover-box">
      <li class="menu-hover" v-for="item in menuHoverInfoAll" :key="item">{{item}}</li>
    </ul>
    <!-- 字体图标 -->
    <ul class="menu-top">
      <li
        v-for="(item, index) in 4"
        :key="index"
        class="btn iconfont"
        :class="{
          'active': isSelectMenuArr[index] == true,
          'icon-home': index == 0,
          'icon-zujian': index == 1,
          'icon-icon-project': index == 2,
          'icon-geren': index == 3,
        }"
        @mouseenter="showMenuInfo(index)"
        @mouseleave="hideMenuInfo(index)"
        @click="handleMenuClick(index)"
      ></li>
    </ul>
    <!-- 前进后退按钮 -->
    <ul class="lastAndNext-bottom">
      <li class="next iconfont icon-qian" @click="routerLastAndNext('next')"></li>
      <li class="last iconfont icon-houtui" @click="routerLastAndNext('last')"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuHoverInfoAll: {
      type: Array,
      default: ["首页", "组件", "作品", "个人信息"]
    },
    curPathIndex: {
      type: Number,
      default: 0
    },
    isSelectMenuArr: {
      type: Array,
      default: [true, false, false, false]
    }
  },
  methods: {
    // 显示右边导航注释
    showMenuInfo(index) {
      let el = this.$(".menu-hover").eq(index);
      el.css({ opacity: 1, left: '-70px' });
    },
    // 隐藏右边导航注释
    hideMenuInfo(index) {
      let el = this.$(".menu-hover").eq(index);
      el.css({ opacity: 0, left: "0px" });
    },
    // 点击跳转路由
    handleMenuClick(index) {
      if (index == this.curPathIndex) {
        return;
      }
      this.routerPath(index);
    },
    // 路由前进后退
    routerLastAndNext(type) {
      if (type == "next") {
        this.curPathIndex == 3 ? this.$emit("changeRouterIndex", 0) :this.$emit("changeRouterIndex", type);
      } else {
        this.curPathIndex == 0 ? this.$emit("changeRouterIndex", 3) :this.$emit("changeRouterIndex", type);
      }
    },
    // 路由跳转函数
    routerPath(index) {
      this.$emit("changeRouterIndex", index); // 抛出事件让父级改变值，单项数据流
    }
  }
};
</script>

<style scope lang="scss">
.menu {
  @media screen and (max-width: 800px) {
    right: -70px;
  }
  position: absolute;
  right: -90px;
  top: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  .lastAndNext-bottom,
  .menu-hover-box {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 70px;
    padding: 15px 0;
    background-color: #fff;
    border-radius: 35px;
    box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.3);
    .menu-hover {
      position: relative;
      left: 0;
      font-size: 14px;
      height: 24px;
      margin: 10px 0;
      line-height: 24px;
      color: #fff;
      font-weight: 600;
      text-align: center;
      background-color: #09aeea;
      opacity: 0;
      transition: all 0.5s;
    }
  }
  // 字体图标
  .menu-top {
    position: absolute;
    top: 0;
    margin-left: 20px;
    padding: 15px 0;
    .btn {
      width: 70px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      padding: 10px 0;
      font-size: 24px;
      color: #999;
      font-weight: bold;
      &:hover {
        color: #1d07e2;
      }
      &.active {
        color: #1d07e2;
      }
    }
  }
  // 前进后退按钮
  .lastAndNext-bottom {
    width: 60px;
    li {
      padding: 10px 0;
      font-size: 24px;
      color: #999;
      text-align: center;
      font-weight: bold;
      &:hover {
        color: #1d07e2;
      }
    }
  }
}
</style>