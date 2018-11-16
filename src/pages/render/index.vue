<template>
  <div class="render">
    <RenderTemp :isActive="isActive" @click="clickFun">
      <template slot-scope="scope">
        <span text="scoped">qwe</span>
      </template>
    </RenderTemp>
  </div>
</template>

<script>
import RenderTemp from './render'

export default {
  name: 'RenderTemplate',
  components: {
    RenderTemp
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    clickFun () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="css" scoped>

</style>

