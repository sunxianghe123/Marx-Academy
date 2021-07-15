<template>
  <div class="theme-thi">
    <nav-bar></nav-bar>
    <div class="content">
      <con-nav>
        <div slot="first">
          <router-link to="/themefir" style="line-height: 1;margin-top: 30px;">
            “不忘初心，牢记使命”主题教育
          </router-link>
        </div>
        <div slot="second">
          <router-link to="/themesec">百年党史天天学</router-link>
        </div>
        <div slot="third" class="active">
          <router-link to="/themethi">党史学习教育专题</router-link>
        </div>
      </con-nav>

      <div class="summarize">
        <summarize-title>
          <div slot="left">【党史学习教育专题】</div>
          <div slot="right" v-html="title"></div>
        </summarize-title>
        <summarize-item>
          <div slot="item-left">党史学习教育专题</div>
          <div slot="item-right">2020/12/29</div>
        </summarize-item>
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
import SummarizeItem from "@/components/common/connav/SummarizeItem";
export default {
  name: "ThemeThi",
  components: {
    SummarizeItem,
    SummarizeTitle,
    ConNav,
    NavBar,
    Footer
  },
  data() {
    return {
      title: '您当前的位置是：专题专栏>党史学习教育专题',
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
</style>