<template>
  <div class="footer-right">
    <div class="foot-logo">
      <img :src="img" alt="无法显示" width="437px" height="73px">
    </div>
    <div class="info-list">
      <ul>
        <li v-for="(item,index) in list" :key="index">{{item.tag}}：{{item.text}}</li>
        <p>浙ICP备0501457号</p>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "FooterRight",
  data(){
    return {
      img: require("@/assets/img/logocolor.png"),
      list: [
        {
          tag: "地址",
          text: "杭州下沙高教园区998号"
        },
        {
          tag: "技术支持",
          text: "杭州沃邦网络技术有限公司"
        },
        {
          tag: "Copyright",
          text: "浙江传媒学院马克思学院版权所有"
        },
      ],
    }
  },
}
</script>

<style scoped>
  .footer-right {
    width: 560px;
    height: 280px;
    display: flex;
    flex-direction: column;
    color: #000000;
    box-sizing: border-box;
    margin-top: -20px;
  }

  .info-list li, .info-list p{
    margin-left: 1px;
    margin-top: 30px;
    margin-bottom: 30px;
    height: 15px;
    line-height: 1;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #666666;
  }
</style>