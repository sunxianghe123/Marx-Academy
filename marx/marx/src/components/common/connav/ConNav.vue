<template>
  <div class="con-nav">
    <div class="con-bar">
      <div class="con-nav-title">
        <slot name="con-bar-title">学院概况</slot>
      </div>

      <div class="con-nav-item">
        <slot name="first"></slot>
      </div>
      <div class="con-nav-item">
        <slot name="second"></slot>
      </div>
      <div class="con-nav-item">
        <slot name="third"></slot>
      </div>
      <div class="con-nav-item">
        <slot name="fourth"></slot>
      </div>
      <div class="con-nav-item">
        <slot name="fifth"></slot>
      </div>
      <div class="con-nav-item">
        <slot name="sixth"></slot>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "ConNav",
    components: {
    },
    data(){
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .con-bar {
    width: 264px;
    height: 702px;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    color: #000000;
  }

  .con-nav-title {
    background-color: #9a0b25;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 24px;
    width: 264px;
    height: 60px;
  }

  .con-nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 20px;
    width: 264px;
    height: 60px;
    cursor: pointer;
    /*background: #AB1F2A;*/
  }
</style>