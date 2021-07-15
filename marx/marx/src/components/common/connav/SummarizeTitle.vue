<template>
    <div class="summarize-title">
      <div class="left">
        <slot name="left">【学院简介】</slot>
      </div>
      <div class="right">
        <slot name="right">您当前的位置是：学院概况<span v-html="gt"></span>学院简介</slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: "SummarizeTitle",
    data(){
      return {
        gt: ">"
      }
    }
  }
</script>

<style scoped>
  .summarize-title {
    display: flex;
    justify-content: space-between;
    height: 20px;
    border-bottom: 1px solid #e5e5e5;
    line-height: 1;
    align-items: center;
    padding: 20px 0;
  }
  .left {
    height: 20px;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #AB1F2A;
    line-height: 1;
  }
  .right {
    height: 17px;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #666666;
    line-height: 1;
  }
</style>