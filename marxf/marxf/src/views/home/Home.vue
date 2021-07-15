<template>
  <div id="home">
    <nav-bar></nav-bar>
    <my-body></my-body>
    <Footer></Footer>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import MyBody from "@/components/content/mybody/MyBody";
  import Footer from "@/components/common/footer/Footer";
  //获取网络数据
  import {getSlide} from "@/network/home";
  // import {getCategory} from "@/network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      MyBody,
      Footer
    },
    data(){
      return {
        slide: [],
        categories: [],
        recommends: []
      }
    },
    created() {
      getSlide().then(res => {
        // console.log(res);
        this.slide = res.resultContent;
        // console.log(this.slide);
      })
    }
  }
</script>

<style scoped>

</style>