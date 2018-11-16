<template>
  <div class="mock">
    <slide>
      <slide-item v-for="(item, index) in localData" :key="index">
        {{item.title}}
      </slide-item>
    </slide>
  </div>
</template>

<script>
import slide from './slide'
import slideItem from './slideItem'

export default {
  name: 'graphic',
  components: {
    slide,
    slideItem
  },
  props: {
    injectData: {
      type: [Object],
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      localData: []
    }
  },
  created () {
    this.localData = this.injectData.list
  }
}
</script>

<style lang="css" scoped>
.mock {
  width: 100%;
}
</style>
