<template>
  <div class="home">
    <el-container class="home-container">
<!--      头部区域-->
      <el-header>
        <div>
          <img src="../assets/images/prettygirl.jpg" alt="">
          <span>电商后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">
          退出
        </el-button>
      </el-header>
<!--      页面主体-->
      <el-container>
<!--        侧边栏-->
        <el-aside width="200px">
<!--          侧边栏菜单区-->
          <el-menu background-color="#333744" text-color="#fff"
          active-text-color="#ffd04b">
<!--            一级菜单-->
          <el-submenu index="1">
<!--            一级菜单的模板区域-->
            <template slot="title">
<!--              图标-->
              <i class="el-icon-location"></i>
<!--              文本-->
              <span>导航一</span>
            </template>
<!--            二级菜单-->
            <el-menu-item index="1-4-1">
              <template slot="title">
                <!--              图标-->
                <i class="el-icon-location"></i>
                <!--              文本-->
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
          </el-menu>
        </el-aside>
<!--        右边-->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>


</template>

<script>
  export default {
    name: "Home",
    created() {
      this.getMenuList();
    },
    methods: {
      logout() {
        window.sessionStorage.clear();
        this.$router.push("/login");
      },
      //获取所有的菜单
      async getMenuList() {
        const{ data: res } = await this.$http.get("category");
        console.log(res);
      }
    }
  }
</script>

<style scoped>
  .home {
    height: 100%;
  }

  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
  }

  .el-header>div {
    display: flex;
    align-items: center;
  }

  .el-header>div>img {
    width: 50px;
    border-radius: 50%;
  }

  .el-header>div>span {
    margin-left: 15px;
  }
  
  .el-aside {
    background-color: #333744;
  }
  
  .el-main {
    background-color: #EAEDF1;
  }

  .home-container {
    height: 100%;
  }
</style>