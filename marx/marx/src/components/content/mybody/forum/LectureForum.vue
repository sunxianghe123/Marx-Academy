<template>
  <div class="lecture-forum">
    <div class="lecture-title">
      <h3>传奇讲坛</h3>
      <p>Teaching dynamics</p>
      <a href="#">更多
        <span v-html="gt"></span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LectureForum",
    data(){
      return {
        gt: ">>",
      }
    }
  }
</script>

<style scoped>
  .lecture-forum {
    width: 389px;
    height: 346px;
    margin-left: 41px;
    /*background-color: #ea9797;*/
    cursor: pointer;
  }

  .lecture-title {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 29px;
    top: 10px;
    box-sizing: border-box;
    border-left: 7px solid #ab1f2a;
  }

  .lecture-title h3 {
    margin-left: 13px;
    font-size: 30px;
    color: #000;
  }
  .lecture-title p {
    margin-left: 13px;
    color: #666;
    font-size: 16px;
  }
  .lecture-title a {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #ab1f2a;
    font-size: 15px;
  }
</style>