<template>
  <div class="footer-left">
    <div class="link-title">
      <h2>外部链接</h2>
    </div>
    <div class="link-list">
      <p>
        <img :src="list[0].src" alt="">
        <span>{{list[0].text}}</span>
      </p>
      <hr>
      <p>
        <img :src="list[0].src" alt="">
        <span>{{list[0].text}}</span>
      </p>
      <hr>
      <p>
        <img :src="list[0].src" alt="">
        <span>{{list[0].text}}</span>
      </p>
      <hr>
      <p>
        <img :src="list[0].src" alt="">
        <span>{{list[0].text}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterLeft",
  data(){
    return {
      list: [
        {
          text: "浙江传媒学院官网",
          src: require("@/assets/img/Path.png"),
        },
        {
          text: "浙江传媒学院官网",
          src: require("@/assets/img/Path.png"),
        },
        {
          text: "浙江传媒学院官网",
          src: require("@/assets/img/Path.png"),
        },
      ]
    }
  }
}
</script>

<style scoped>
  .footer-left {
    display: flex;
    flex-direction: column;
    width: 627px;
    height: 280px;
    color: #000000;
    /*background-color: #e17878;*/
    box-sizing: border-box;
  }

  .link-title {
    display: flex;
    height: 23px;
    line-height: 1;
    font-size: 23px;
    margin-bottom: 20px;
    margin-left: 2px;
  }

  .link-list {
    position: relative;
  }

  .link-list p {
    display: flex;
    align-items: center;
  }

  .link-list img {
    width: 11px;
    height: 14px;
    line-height: 1;
  }

  .link-list p span {
    display: block;
    margin-left: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 15px;
    line-height: 1;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #666666;
  }

  .link-list hr {
    width: 493px;
    height: 1px;
    background: #E5E5E5;
    position: absolute;
    left: 5px;
    box-sizing: border-box;
    border: none;
    border-top: 1px solid #E5E5E5;
  }
</style>