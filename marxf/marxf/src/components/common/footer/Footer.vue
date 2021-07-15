<template>
  <div class="footer">
    <footer-left></footer-left>
    <footer-right></footer-right>
  </div>
</template>

<script>
import FooterLeft from "@/components/common/footer/FooterIeft";
import FooterRight from "@/components/common/footer/FooterRight";

export default {
  name: "Footer",
  components: {
    FooterLeft,
    FooterRight,
  }
}
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    line-height: 1;
    height: 362px;
    margin-top: 40px;
    background: #F2F2F2;
    box-shadow: 0 3px 7px 0 rgba(230, 230, 230, 0.24);
  }
</style>