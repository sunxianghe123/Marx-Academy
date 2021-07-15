<template>
  <div class="my-carousel">
    <el-carousel :height="height">
      <el-carousel-item v-for="item in list" :key="item.title">
        <img :src="item.img" alt="无法显示" class="carousel-img">
        <div class="explain">
          <p>{{item.title}}</p>
        </div>

      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
//请求网络数据
import {getSlide} from "@/network/home";

export default {
  name: "MyCarousel",
  data(){
    return {
      height: "346px",
      list: [
        // {
        //   name: 'img1',
        //   src: require('@/assets/img/people.png'),
        //   words: "新学期"
        // },
        // {
        //   name: 'img2',
        //   src: require('@/assets/img/people.png'),
        //   words: "校党委"
        // },
      ],
    }
  },
  created() {
    getSlide().then(res => {
      this.list = res.resultContent;
    })
  }
}
</script>

<style scoped>
  .my-carousel {
    position: relative;
    width: 743px;
    height: 386px;
    z-index: 1;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .explain {
    width: 743px;
    position: absolute;
    bottom: 0px;
    height: 40px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    background-color: rgba(0,0,0,.3);
    line-height: 40px;
  }
  .explain p {
    width: 100%;
    margin-left: 14px;
  }

  .carousel-img {
    width: 100%;
    height: 386px;
  }
</style>