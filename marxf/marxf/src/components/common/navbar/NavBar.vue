<template>
  <div class="nav-bar">
    <div class="logo">
      <div class="left">
        <img :src="logo" alt="">
      </div>
      <div class="right">
        <img :src="people" alt="">
      </div>
    </div>

    <div class="menu">
      <div class="first"><router-link to="/home">首页</router-link></div>

      <div class="menu-div">
        学院概况
        <div class="appear">
          <drop-down link="/profile">
            <div slot="drop-down-item" class="drop-down-item">
              学院简介
            </div>
          </drop-down>
          <drop-down link="/leader">
            <div slot="drop-down-item" class="drop-down-item">
              领导班子
            </div>
          </drop-down>
          <drop-down link="/organization">
            <div slot="drop-down-item" class="drop-down-item">
              机构设置
            </div>
          </drop-down>
        </div>
      </div>

      <div class="menu-div">
        师资队伍
        <div class="appear">
          <drop-down link="/teachers">
            <div slot="drop-down-item" class="drop-down-item">
              专职教师
            </div>
          </drop-down>
          <drop-down link="/professors">
            <div slot="drop-down-item" class="drop-down-item">
              特聘教授
            </div>
          </drop-down>
        </div>
      </div>

      <div class="menu-div">
        教学培养
        <div class="appear">
          <drop-down link="/course">
            <div slot="drop-down-item" class="drop-down-item">
              课程设置
            </div>
          </drop-down>
          <drop-down link="/institution">
            <div slot="drop-down-item" class="drop-down-item">
              文件制度
            </div>
          </drop-down>
        </div>
      </div>

      <div class="menu-div">
        科学研究
        <div class="appear">
          <drop-down link="/subject">
            <div slot="drop-down-item" class="drop-down-item">
              学科建设
            </div>
          </drop-down>
          <drop-down link="/terrace">
            <div slot="drop-down-item" class="drop-down-item">
              教研平台
            </div>
          </drop-down>
          <drop-down link="/institutions">
            <div slot="drop-down-item" class="drop-down-item">
              文件制度
            </div>
          </drop-down>
        </div>
      </div>

      <div class="menu-div">
        党群工作
        <div class="appear" style="width: 200px;">
          <drop-down link="/workfir">
            <div slot="drop-down-item" class="drop-down-item">
              党建动态
            </div>
          </drop-down>
          <drop-down link="/worksec">
            <div slot="drop-down-item" class="drop-down-item">
              马克思主义中国化党支部
            </div>
          </drop-down>
          <drop-down link="/workthi">
            <div slot="drop-down-item" class="drop-down-item">
              思想政治教育党支部
            </div>
          </drop-down>
          <drop-down link="/workfou">
            <div slot="drop-down-item" class="drop-down-item">
              马克思主义基本原理党支部
            </div>
          </drop-down>
          <drop-down link="/workfif">
            <div slot="drop-down-item" class="drop-down-item">
              工会工作
            </div>
          </drop-down>
          <drop-down link="/worksix">
            <div slot="drop-down-item" class="drop-down-item">
              妇联工作
            </div>
          </drop-down>
        </div>
      </div>

      <div class="menu-div">
        专题专栏

        <div class="appear" style="width: 240px">
          <drop-down link="/themefir">
            <div slot="drop-down-item" class="drop-down-item">
              “不忘初心，牢记使命”主题教育
            </div>
          </drop-down>
          <drop-down link="/themesec">
            <div slot="drop-down-item" class="drop-down-item">
              百年党史天天学
            </div>
          </drop-down>
          <drop-down link="/themethi">
            <div slot="drop-down-item" class="drop-down-item">
              党史学习教育专题
            </div>
          </drop-down>
        </div>
      </div>

      <div class="menu-div">
        传习讲坛
      </div>


    </div>
</div>
</template>

<script>
  import DropDown from "@/components/common/navbar/DropDown";

  export default {
    name: "NavBar",
    components: {
      DropDown
    },
    data(){
      return {
        list: ['学院概况','师资队伍','教学培养','科学研究','党群工作','专题专栏','传习讲坛'],
        people: require("@/assets/img/people.png"),
        logo: require("@/assets/img/logo.png"),
        // link: '/home'
      }
    },
    methods: {
      itemClick() {
        console.log('itemClick');
        this.$router.replace(this.link);
      }
    },
  }
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    height: 121px;
    line-height: 1;
    background: #ab1f2a;
  }
  .logo {
    display: flex;
    justify-content: center;

  }
  .left {
    width: 546px;
    height: 48px;
    margin-top: 37px;
  }
  .right {
    margin-left: 90px;
    width: 485px;
    height: 106px;
    margin-top: 15px;
  }
  .menu {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    background-color: #9a0b25;

  }
  .first, .menu-div {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    padding: 0 37px;
    color: #f7f7f7;
    font-size: 18px;
    cursor: pointer;
  }
  .first a{
    color: #ffffff;
  }
  .menu-div:before {
    position: absolute;
    left: 0;
    height: 20px;
    border-left: 1px solid #fff;
    content: "";
  }
  .first:hover {
    color: #FFE850;
  }
  .menu-div:hover {
    color: #FFE850;
  }

  .menu-div:hover .appear {
    display: block;
    opacity: 100%;
    color: #000000;
  }

  .appear {
    display: none;
    opacity: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 3;
    position: absolute;
    top: 60px;
    left: 0;
    transition-property: opacity;
    transition-duration: 1s;
    transition-delay: 0.5s;
    box-shadow: 1px 1px 10px #999999;
  }
  .drop-down-item {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    box-sizing: border-box;
    height: 35px;
    color: #000000;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    transition: all 1s;
  }
  .drop-down-item a{
    color: #000000;
  }
  .drop-down-item:hover {
    background-color: #dcdcdc;
  }
</style>