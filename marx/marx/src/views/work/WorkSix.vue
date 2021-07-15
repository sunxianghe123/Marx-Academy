<template>
  <div class="work-six">
    <nav-bar></nav-bar>
    <div class="content">
      <con-nav>
        <div slot="first">
          <router-link to="/workfir">党建动态</router-link>
        </div>
        <div slot="second">
          <router-link to="/worksec">马克思主义中国化党支部</router-link>
        </div>
        <div slot="third">
          <router-link to="/workthi">思想政治教育党支部</router-link>
        </div>
        <div slot="fourth">
          <router-link to="/workfou">马克思主义基本原理党支部</router-link>
        </div>
        <div slot="fifth">
          <router-link to="/workfif">工会工作</router-link>
        </div>
        <div slot="sixth" class="active">
          <router-link to="/worksix">妇联工作</router-link>
        </div>
      </con-nav>

      <div class="summarize">
        <summarize-title>
          <div slot="left">【妇联工作】</div>
          <div slot="right" v-html="title"></div>
        </summarize-title>
        <summarize-item>
          <div slot="item-left">妇联工作</div>
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
  name: "WorkSix",
  components: {
    SummarizeItem,
    SummarizeTitle,
    ConNav,
    NavBar,
    Footer
  },
  data() {
    return {
      title: '您当前的位置是：党群工作>妇联工作',
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