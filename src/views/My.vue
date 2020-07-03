<template>
  <div class="my">
    <div class="info-box">
      <h2>基本信息</h2>
      <div class="header-info">
        <div class="header-left">
          <span>姓 名：钟钱胜</span>
          <span>电 话：17820238305</span>
          <span>学 历：大专</span>
          <span>专 业：计算机运用技术</span>
        </div>
        
        <div class="header-right">
          <span>邮 件：1551584008@qq.com</span>
          <span>出生年月： 1999-05</span>
          <span>籍 贯：广东省河源市</span>
        </div>
      </div>
    </div>

    <div class="info-box">
      <h2>教育情况</h2>
      <div class="info-content">
        <i>2017.09 ~ 2019.06</i>
        <span>河源职业技术学院</span>
        <span>计算机运用技术</span>
      </div>
    </div>

    <div class="info-box">
      <h2>技能证书</h2>
      <div class="info-content">1. photoshop中级，能对图片进行简单操作。</div>
      <div class="info-content">2. 办公软件中级，熟悉运用office软件。</div>
    </div>

    <div class="info-box">
      <h2>工作经历</h2>
      <div class="info-content">
        <i>2019.07 ~ 2019.12</i>
        <span>泽成鑫电子公司</span>
        <span>淘宝客服</span>
        <div class="describe">● 主要处理售前、售后工作。</div>
        <div class="describe">● 回答客户问题，尽量满足客户需求，必要时电话回访。</div>
        <div class="describe">● 每天保持从零开始，乐观回复客户问题。</div>
      </div>
    </div>

    <div class="info-box">
      <h2>自我评价</h2>
      <div class="info-content">
        <div class="describe">* 积极乐观，诚实守信，责任心强，有良好的的心理素质。</div>
        <div class="describe">* 有较强的协调和社交能力，有团体合作精神。</div>
        <div class="describe">* 接收新事物的能力较强，善于独立思考。</div>
        <div class="describe">* 有较强的的适应能力，能在压力下工作。</div>
      </div>
    </div>

  </div>
</template>


<style scoped>
.my {
  width: 100%;
  height: 100%;
  color: #000;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  overflow-y: auto;
}
h2 {
  position: relative;
  font-size: 24px;
  padding: 5px 0;
  color: #21e1ae;
  font-weight: 600;
}
h2::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  margin-left: 20px;
  width: 80%;
  height: 3px;
  background: linear-gradient(to right, #21e1ae, #09aeea);
}

.info-box {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.info-box:last-of-type {
  border-bottom: none;
}

.header-info,
.info-content {
  font-weight: 600;
  padding: 5px 5px 5px 36px;
  color: #09aeea;
  line-height: 26px;
}

.header-info{
  display: flex;
}
.header-left,
.header-right{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
}
.header-left{
}
.header-right{
}

.info-content i {
  font-size: 14px;
}
.info-content span {
  display: inline-block;
  padding-left: 50px;
}
.info-content .describe{  
  width: 85%;
  margin-left: 80px;
  color: #000;
}


</style>