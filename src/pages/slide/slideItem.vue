<template>
  <div class="slide-item" @click="handleCurrentItem">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'slideItem',
  beforeCreate () {
    this.$parent.slides.push(this)
  },
  destroyed () {
    this.$parent.slides.splice(this.$parent.slides.indexOf(this), 1)
  },
  methods: {
    handleCurrentItem (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="css" scoped>
.slide-item{
  display: inline-block;
  width: 375px;
  height: 200px;
  border-right: 1px solid #000;
}
</style>
