<template>
  <div class="summarize-item">
    <div class="item-left">
      <div class="item-flag"></div>
      <slot name="item-left">

      </slot>
    </div>
    <div class="item-right">
      <slot name="item-right">

      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SummarizeItem"
  }
</script>

<style scoped>
  .summarize-item {
    display: flex;
    justify-content: space-between;
    height: 20px;
    border-bottom: 1px solid #e5e5e5;
    line-height: 1;
    align-items: center;
    padding: 20px 0;
    position: relative;

    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #000000;
  }
  .item-left {
    height: 20px;
    line-height: 1;
    margin-left: 30px;
  }
  .item-right {
    height: 20px;
    line-height: 1;
  }
  .item-flag:before {
    position: absolute;
    top: 24px;
    left: 0;
    width: 0;
    height: 0;
    border-color: transparent transparent transparent #d2d2d2;
    border-style: solid;
    border-width: 5px 8px;
    content: "";
  }
</style>