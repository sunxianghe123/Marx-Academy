<template>
  <div class="dynamics">
    <div class="dynamic-title">
      <h3>学院动态</h3>
      <p>Teaching dynamics</p>
      <a href="#">更多
        <span v-html="gt"></span>
      </a>
    </div>
    <dynamic-list v-for="item in 6" :key="item"></dynamic-list>
  </div>
</template>

<script>
import DynamicList from "@/components/content/mybody/dynamic/DynamicList";

export default {
  name: "Dynamics",
  components: {
    DynamicList
  },
  data(){
    return {
      list: [
        {
          text: "aaaa"
        },
        {
          text: "bbbb"
        },
      ],
      gt: ">>",
    }
  },
}
</script>

<style scoped>
  .dynamics {
    width: 389px;
    height: 346px;
    margin-left: 41px;
    /*background-color: #ea9797;*/
    cursor: pointer;
  }

  .dynamic-title {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 29px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border-left: 7px solid #ab1f2a;
  }

  .dynamic-title h3 {
    margin-left: 13px;
    font-size: 28px;
    color: #000000;
  }
  .dynamic-title p {
    margin-left: 13px;
    color: #666;
    font-size: 16px;
  }
  .dynamic-title a {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #ab1f2a;
    font-size: 15px;
  }
</style>