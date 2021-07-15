<template>
    <div class="notice">
        <div class="notice-item">
          <p class="notice-left">
        <span class="notice-left-img">
          <img :src="list.src" alt="无法显示" width="8px" height="10px">
        </span>
            <span class="notice-left-words">{{list.words}}</span>
          </p>
          <p class="notice-right">{{list.date|format}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Notice",
    data(){
      return {
        list: {
            src: require("@/assets/img/arrow.png"),
            words: "关于开展2021年浙江传媒学院优秀志愿者项目服务",
            date: "2020.3.15",
          },
      }
    },
    filters: {
      format: function (value){
        value = value.toString();
        let arr = value.split(/\W/);
        return arr.join("/");
      }
    }
  }
</script>

<style scoped>
  .notice {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .notice-item {
    display: flex;
    width: 100%;
    height: 31px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #000000;
  }

  .notice-left {
    display: flex;
    width: 100%;
    position: absolute;
    left: 0;
  }

  .notice-left-img {
    line-height: 20px;
  }

  .notice-left-words {
    font-size: 16px;
    margin-left: 10px;
  }

  .notice-right {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 41px;
    width: 149px;
    height: 31px;
    color: #ab1f2a;
    font-size: 13px;
    background-color: #fbf4f4;
  }
</style>