<template>
  <div class="subject">
    <nav-bar></nav-bar>
    <div class="content">
      <con-nav>
        <div slot="first" class="active">
          <router-link to="/subject">学科建设</router-link>
        </div>
        <div slot="second">
          <router-link to="/terrace">教研平台</router-link>
        </div>
        <div slot="third">
          <router-link to="/institutions">文件制度</router-link>
        </div>
      </con-nav>
      <div class="summarize">
        <summarize-title>
          <div slot="left">【学科建设】</div>
          <div slot="right" v-html="title"></div>
        </summarize-title>
        <summarize-item>
          <div slot="item-left">学科建设</div>
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
  name: "Subject",
  components: {
    SummarizeItem,
    SummarizeTitle,
    ConNav,
    NavBar,
    Footer
  },
  data() {
    return {
      title: '您当前的位置是：科学研究>学科建设',
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