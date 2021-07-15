<template>
  <div class="my-body">
    <div class="upper">
      <my-carousel></my-carousel>
      <dynamics></dynamics>
    </div>
    <div class="lower">
      <bulletin></bulletin>
      <lecture-forum></lecture-forum>

<!--      <router-view></router-view>-->
    </div>
  </div>
</template>

<script>
import MyCarousel from "@/components/content/mybody/carousel/MyCarousel";
import Dynamics from "@/components/content/mybody/dynamic/Dynamics";
import Bulletin from "@/components/content/mybody/bulletin/Bulletin";
import LectureForum from "@/components/content/mybody/forum/LectureForum";

export default {
  name: "MyBody",
  components: {
    MyCarousel,
    Dynamics,
    Bulletin,
    LectureForum
  },
}
</script>

<style scoped>
  .my-body {
    /*background-color: #FFFFFF;*/
    margin-top: 80px;
  }
  .upper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .lower {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>