<template>
  <div class="components-and-plugin">
    <nav class="CP-router">
      <!-- <div class="components-router">
        <h1>组件</h1>
        <ul>
          <li  
            v-for="item in componentsList"
            :key="item.id"
          >
            <a 
              :href="item.href" 
              :class="{'active':item.id === navIndex}"
              @click="handleAClick(item.id)"
            >{{item.content}}</a>
          </li>
        </ul>
      </div> -->
      <div class="plugin-router">
        <h1>插件</h1>
        <ul>
          <li
            v-for="item in pluginList"
            :key="item.id"
          >
            <a 
              :href="item.href"
              :class="{'active':item.id === navIndex}"
              @click="handleAClick(item.id)"
            >{{item.content}}</a>
          </li>
        </ul>
      </div>
    </nav>
  
    <div class="CP-content">
      <p id="plugin"><i>以下都是基于jQuery的插件</i></p>
      <br>
      <br>
      <!-- input框插件 -->
      <div class="single-box">
        <h1>input搜索请求框</h1>
        <div class="show-content-box">
          <div class="show-content">
            <div class="input-show-content">
              <!-- 显示的内容 -->
            </div>
          </div>
          <!-- 展示获取到的数据 -->
          <ul v-if="inputSearchData" class="showSearchInfo">
            <li v-for="item in inputSearchData" :key="item[1]">
              {{item[0]}}
            </li>
          </ul>
          <!-- 使用方法区域 -->
          <div class="show-content-code" @click="clcikShowCode('inputFun')">
            <span :class="['iconfont',!inputShowFun ? 'icon-qian' : 'icon-xiangxia']"></span>
            <span>使用方法</span>
          </div>
          <div class="code-content" v-show="inputShowFun">
              <div class="code">
                <h2>CSS代码</h2>
                <p><i> .search-box { </i></p>
                <p class="nbsp"><i> width: 500px; </i></p>
                <p class="nbsp"><i> height: 60px; </i></p>
                <p><i>}</i></p>
              </div>
              <div class="code">
                <h2>HTML代码</h2>
                <p><i>&lt;div class="search-box"&gt;&lt;/div&gt;</i></p>
              </div>
              <div class="code">
                <h2>JS代码</h2>
                <p><i> $('.search-box').inputSearch({ </i></p>
                <p class="nbsp"><i> key: 'callback', </i></p>
                <p class="nbsp"><i> jsonpCallback: 'dealData', </i></p>
                <p class="nbsp"><i> url: 'https://suggest.taobao.com/sug?', </i></p>
                <p class="nbsp"><i> type: 'GET', </i></p>
                <p class="nbsp"><i> inputWidth: 550, </i></p>
                <p class="nbsp"><i> height: 32, </i></p>
                <p class="nbsp"><i> success: dealData, </i></p>
                <p class="nbsp"><i> dataName: 'q', </i></p>
                <p><i>})</i></p>
              </div>
              <!-- 参数说明 -->
              <parameter-com :parameterList="inputParameterList"/>
          </div>
          <!-- 显示源码区域 -->
          <div class="show-content-code" @click="clcikShowCode('inputCode')">
            <span :class="['iconfont',!inputShowCode ? 'icon-qian' : 'icon-xiangxia']"></span>
            <span>显示源码</span>
          </div>
          <div class="code-content" v-show="inputShowCode">
            <img src="https://ae01.alicdn.com/kf/H6fa9bc44a15744fdb6aba0f797e3e531K.jpg" alt=""> 
          </div>
          <div class="show-content-code" v-show="inputShowCode" @click="clcikShowCode('inputCode')">
            <span class="iconfont icon-xiangxia"></span>
            <span>收起</span>
          </div>
        </div>
      </div>

      <!-- 轮播图插件 -->
      <div class="single-box" id="swiper">
        <h1>轮播图</h1>
        <div class="show-content-box">
          <div class="show-content">
            <div class="swiper-show-content">
              <!-- 显示的内容 -->
            </div>
          </div>
          <!-- 使用方法区域 -->
          <div class="show-content-code" @click="clcikShowCode('swiperFun')">
            <span :class="['iconfont',!swiperShowFun ? 'icon-qian' : 'icon-xiangxia']"></span>
            <span>使用方法</span>
          </div>
          <div class="code-content" v-show="swiperShowFun">
              <div class="code">
                <h2>CSS代码</h2>
                <p><i> .swiper { </i></p>
                <p class="nbsp"><i> width: 520px; </i></p>
                <p class="nbsp"><i> height: 280px; </i></p>
                <p><i>}</i></p>
              </div>
              <div class="code">
                <h2>HTML代码</h2>
                <p><i>&lt;div class="swiper"&gt;&lt;/div&gt;</i></p>
              </div>
              <div class="code">
                <h2>JS代码</h2>
                <p><i> $('.swiper').swiper({ </i></p>
                <p class="nbsp"><i> images:['图片路径1','路径2','路径3'], </i></p>
                <p class="nbsp"><i> width: 520, </i></p>
                <p class="nbsp"><i> height: 280, </i></p>
                <p><i>})</i></p>
              </div>
              <!-- 参数说明 -->
              <parameter-com :parameterList="swiperParameterList"/>
          </div>
          <!-- 显示源码区域 -->
          <div class="show-content-code" @click="clcikShowCode('swiperCode')">
            <span :class="['iconfont',!swiperShowCode ? 'icon-qian' : 'icon-xiangxia']"></span>
            <span>显示源码</span>
          </div>
          <div class="code-content" v-show="swiperShowCode">
            <img src="https://ae01.alicdn.com/kf/H06b0d6bfcf6c40238a20689a8cf3010b1.jpg" alt=""> 
          </div>
          <div class="show-content-code" v-show="swiperShowCode" @click="clcikShowCode('swiperCode')">
            <span class="iconfont icon-xiangxia"></span>
            <span>收起</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import "@/plugin/inputSearch"
import "@/plugin/slideShowEngine"
import parameterCom from "@/components/plugin/parameterCom"
export default {
  components: {
    parameterCom, // 参数说明组件
  },
  data() {
    return {
      // componentsList: [
      //   {
      //     id: 1,
      //     href: '#',
      //     content: '组件一',
      //   },
      //   {
      //     id: 2,
      //     href: '#',
      //     content: '组件二',
      //   },        
      // ],
      pluginList: [
        {
          id: 3,
          href: '#plugin',
          content: 'input框',
        },
        {
          id: 4,
          href: '#swiper',
          content: '轮播图',
        },  
      ],
      navIndex: 3, // 默认选中第一个
      inputShowFun: false, // 显示轮播图方法
      inputShowCode: false, // 显示轮播图代码
      inputParameterList: [ // 轮播图参数说明
        {
          id: 1,
          parameter: 'type',
          info: '请求类型',
          type: 'string',
          selectValue: 'get、post、jsonp',
          isMust: true,
          default: null,
        },
        {
          id: 2,
          parameter: 'url',
          info: '请求路径',
          type: 'string',
          selectValue: null,
          isMust: true,
          default: null,
        },
        {
          id: 3,
          parameter: 'success',
          info: '成功之后接收数据的函数',
          type: 'function',
          selectValue: null,
          isMust: true, 
          default: null,
        },
        {
          id: 4,
          parameter: 'dataName',
          info: '后端规定请求数据名称',
          type: 'string',
          selectValue: null,
          isMust: true,
          default: null,
        },
        {
          id: 5,
          parameter: 'jsonpCallback', // //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
          info: '后端返回回调函数名称',
          type: 'string',
          selectValue: null,
          isMust: true,
          default: null,
        },
        {
          id: 6,
          parameter: 'key',
          info: '获得jsonp回调函数名的参数名',
          type: 'string',
          selectValue: null,
          isMust: false,
          default: 'callback',
        },
        {
          id: 7,
          parameter: 'inputWidth',
          info: 'input框宽度',
          type: 'number',
          selectValue: null,
          isMust: false,
          default: '容器宽度减去58',
        },
        {
          id: 8,
          parameter: 'height',
          info: 'input框高度',
          type: 'number',
          selectValue: null,
          isMust: false,
          default: '容器高度',
        },
        {
          id: 9,
          parameter: 'fontSize',
          info: '搜索的字体大小',
          type: 'number',
          selectValue: null,
          isMust: false,
          default: '18',
        },
      ],
      inputSearchData: [], // 搜索的数据
      swiperShowFun: false, // 显示轮播图方法
      swiperShowCode: false, // 显示轮播图代码
      swiperParameterList: [ // 轮播图参数说明
        {
          id: 1,
          parameter: 'images',
          info: '图片路径',
          type: 'Array',
          selectValue: null,
          isMust: true,
          default: null,
        },
        {
          id: 2,
          parameter: 'width',
          info: '图片宽度',
          type: 'number',
          selectValue: null,
          isMust: false,
          default: '根据父级宽度',
        },
        {
          id: 3,
          parameter: 'height',
          info: '图片高度',
          type: 'number',
          selectValue: null,
          isMust: false,
          default: '根据父级高度',
        },
        {
          id: 4,
          parameter: 'direction',
          info: '轮播方向',
          type: 'string',
          selectValue: 'next向右、prev向左',
          isMust: false,
          default: 'next',
        },
        {
          id: 5,
          parameter: 'autoTimer',
          info: '轮播时间',
          type: 'number',
          selectValue: null,
          isMust: false,
          default: 2000,
        },
      ],
    }
  },
  mounted() {
    // input框插件使用
    this.$('.input-show-content').inputSearch({
        key: 'callback',//cd
        jsonpCallback: 'dealData',
        url: 'https://suggest.taobao.com/sug?',
        type: 'GET',
        inputWidth: 550,
        height: 32,
        success: this.dealData,
        dataName: 'q',
    });
    // 轮播图插件使用
    this.$('.swiper-show-content').swiper({
        images:['//img95.699pic.com/photo/50047/2262.jpg_wh300.jpg','//img95.699pic.com/photo/40011/9539.jpg_wh300.jpg','//img95.699pic.com/photo/40140/7251.jpg_wh300.jpg','//img95.699pic.com/photo/50055/8254.jpg_wh300.jpg'],
        width: 520,
        height: 280,
    })
  },
  methods: {
    dealData(data) {
      this.inputSearchData = data.result;
    },
    handleAClick(index) { // 点击a跳转
      this.navIndex = index;
    },
    clcikShowCode(type) { // 显示代码或使用方法
      if(type == "swiperFun") {
        this.swiperShowFun = !this.swiperShowFun;
      }else if(type == "swiperCode"){
        this.swiperShowCode = !this.swiperShowCode;
      }else if(type == "inputFun") {
        this.inputShowFun = !this.inputShowFun;
      }else if(type == "inputCode"){
        this.inputShowCode = !this.inputShowCode;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.components-and-plugin {
  display: flex;
  width: 100%;
  height: 100%;
  color: #000;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  overflow: auto;
  i {
    font-weight: 600;
    color: red;
  }
  .CP-router{
    width: 200px;
    height: 100%;
    line-height: 30px;
    overflow-y: scroll;
    h1{
      padding: .25rem 1.5rem;
      font-size: 18px;
      font-weight: 600;
    }
    li a {
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      color: #444444;
      text-decoration: none;
      padding: .25rem 1.5rem;
    }
    li a:hover {
      color: #09aeea;
    }
    li a.active{
      color: #09aeea;
    }
  }

  .CP-content{
    width: 100%;
    overflow-y: scroll;
    padding: 0 10px;
    .single-box{
      margin-bottom: 20px;
      h1{
        margin: 40px 0 20px;
        font-size: 22px;
        font-weight: 500;
      }
      h2{
        font-size: 18px;
        color: green;
        font-weight: 600;
        margin-bottom: 5px;
      }
      h1:nth-of-type(1){
        margin: 0 0 20px;
      }
      .show-content-box{
        position: relative;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #09aeea;
        &:hover {
          box-shadow: 1px 2px 4px 0;
        }
        .show-content{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        // input框容器
        .input-show-content{
          width: 500px;
          height: 60px;
        }
        //展示获取到的数据
        .showSearchInfo{
          display: flex;
          flex-direction: column;
          align-items: center;
          li {
            padding-left: 10px;
            width: 500px;
            line-height: 25px;
          }
        }
        // 轮播图容器
        .swiper-show-content{
          width: 520px;
          height: 280px;
        }
        .show-content-code{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          color: #09aeea;
          border-top: 1px solid #09aeea;
          cursor: pointer;
          &:hover {
            background-color: #f9fafc;
          }
          span:nth-of-type(1){
            margin-right: 10px;
          }
        }

        .code-content {
          line-height: 25px;
          color: green;
          background-color: #ddd;
          .code{
            padding-left: 6px;
          }
          .nbsp {
            padding-left: 24px;
          }
          img {
            width: 125%;
          }
          // 参数区域

        }
      }
    }
  }

}
</style>