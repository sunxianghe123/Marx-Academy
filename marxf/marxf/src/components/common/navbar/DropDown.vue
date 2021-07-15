<template>
  <div class="drop-down" @click="itemClick">
    <slot name="drop-down-item">

    </slot>
  </div>
</template>

<script>
  export default {
    name: "DropDown",
    props: {
      link: String,
    },
    data(){
      return {
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link);
      }
    }
  }
</script>

<style scoped>

</style>