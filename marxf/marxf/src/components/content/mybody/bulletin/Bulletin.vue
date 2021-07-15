<template>
  <div class="bulletin">
    <div class="top">
      <div class="notice-title" v-for="(item, index) in list" :key="index"
           :class="{selected: currentId===index}" @click="choose(index)">
        <p><span>{{item.spanContent}}</span><br/>{{ item.pContent }}</p>
      </div>
      <div class="more"><a href="#">更多<span v-html="qt">{{qt}}</span></a></div>
    </div>

    <div class="bulletin-content" v-if="showLeft">
        <notice></notice>
        <notice></notice>
        <notice></notice>
        <notice></notice>
        <notice></notice>
        <notice></notice>
        <notice></notice>
    </div>
    <div class="bulletin-content" v-else-if="showMiddle">

    </div>
    <div class="bulletin-content" v-else>
      <notice></notice>
    </div>
  </div>
</template>

<script>
  import Notice from "@/components/content/mybody/bulletin/Notice";

  export default {
    name: "Bulletin",
    data(){
      return {
        currentId: 0,
        list: [
          {
            spanContent: "通知公告",
            pContent: "Teaching Training"
          },
          {
            spanContent: "教学培养",
            pContent: "Red Position"
          },
          {
            spanContent: "党群工作",
            pContent: "Party Work"
          },
        ],
        qt: ">>",
        showLeft: true,
        showMiddle: false,
      }
    },
    methods: {
      choose: function (index){
        this.currentId = index;
        if(index === 0){
          this.showLeft = true;
          this.showMiddle = false;
        }else if(index === 1){
          this.showLeft = false;
          this.showMiddle = true;
        }else{
          this.showLeft = false;
          this.showMiddle = false;
        }
      },
    },
    components: {
      Notice,
    }
  }
</script>

<style scoped>
  .bulletin {
    display: flex;
    flex-direction: column;
    height: 414px;
  }

  .top {
    display: flex;
    width: 743px;
    height: 60px;
    border-right: 1px solid #999;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
  }

  .notice-title {
    height: 46px;
    width: 130px;
    padding: 7px 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }

  .notice-title p {
    text-align: center;
    font-size: 11px;
  }

  .notice-title p span {
    font-size: 17px;
    margin-bottom: 4px;
  }
  
  .selected {
    background-color: rgb(171, 31, 42);
    color: rgb(255, 255, 255);
  }

  .more {
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 41px;
    top: 10px;
  }

  .more a {
     color: #ab1f2a;
     font-size: 15px;
   }

  .bulletin-content {
    display: flex;
    flex-direction: column;
    width: 743px;
    height: 370px;
    border-right: 1px solid #999;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
  }
</style>