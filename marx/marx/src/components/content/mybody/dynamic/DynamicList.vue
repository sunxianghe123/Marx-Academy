<template>
  <div class="dynamic-list">
    <div class="dynamic-left">
      <span>{{words}}</span>
    </div>
    <div class="dynamic-right">{{date|format}}</div>
  </div>
</template>

<script>
  export default {
    name: "DynamicList",
    data(){
      return {
        words: "新学期新气象新学期新气象新学期新气象新学期新气象.....",
        date: "3.19"
      }
    },
    filters: {
      format: function (value){
        value = value.toString();
        let arr = value.split(/\W/);
        return arr[0] + "/" + arr[1];
      }
    }
  }
</script>

<style scoped>
  .dynamic-list {
    display: flex;
    width: 100%;
    height: 42px;
    margin-top: 10px;
    box-sizing: border-box;
    border: 1px solid #999;
  }
  .dynamic-left {
    display: flex;
    width: 283px;
    margin-left: 18px;
    line-height: 42px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .dynamic-left span {
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #000000;
  }
  .dynamic-right {
    margin-left: 30px;
    color: #ab1f2a;
    font-size: 15px;
    line-height: 42px;
  }
</style>