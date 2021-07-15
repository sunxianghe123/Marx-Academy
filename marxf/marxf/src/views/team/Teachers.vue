<template>
  <div class="teachers">
    <nav-bar></nav-bar>
    <div class="content">
      <con-nav>
        <div slot="con-bar-title">师资队伍</div>

        <div slot="first" class="active">
          <router-link to="/teachers">专职教师</router-link>
        </div>
        <div slot="second">
          <router-link to="/professors">特聘教授</router-link>
        </div>
      </con-nav>
      <div class="summarize">
        <summarize-title>
          <div slot="left">【专职教师】</div>
          <div slot="right" v-html="title"></div>
        </summarize-title>
        <div class="summarize-img">
          <img :src="imgSrc" alt="">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Footer from "@/components/common/footer/Footer";
import ConNav from "@/components/common/connav/ConNav";
import SummarizeTitle from "@/components/common/connav/SummarizeTitle";
export default {
  name: "Teachers",
  components: {
    SummarizeTitle,
    ConNav,
    NavBar,
    Footer
  },
  data() {
    return {
      title: '您当前的位置是：师资队伍>专职教师',
      imgSrc: require('@/assets/img/people.png'),
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  width: 1170px;
  height: 100%;
  margin: 80px auto 0;
}

.content a {
  color: #000000;
  display: block;
  width: 264px;
  height: 60px;
  text-align: center;
  line-height: 60px;
}

.summarize {
  width: 887px;
  height: 702px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 36px;
}

.active {
  position: relative;
  width: 264px;
  height: 60px;
  color: #9a0b25;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
}

.active a {
  color: #9a0b25;
}

.active:before {
  position: absolute;
  left: 0;
  top: 18px;
  width: 3px;
  height: 27px;
  background-color: #9a0b25;
  content: "";
}

.summarize-img {
  margin-top: 20px;
  margin-left: 20px;
}
</style>