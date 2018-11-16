<template>
  <div class="slide">
    <div class="slide-groups">
      <div
        :style="trackStyle"
        class="slide-group"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @transitionend="onTransitionend"
      >
        <slot></slot>
      </div>
    </div>
    <slot name="docts">
      <div class="docts">
        <span class="doct" v-for="(item, index) in docts" :key="index"></span>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'slide',
  data () {
    return {
      touch: {}, // 记录触点
      startPos: {}, // 记录开始点的坐标
      endPos: {}, // 记录结束点的坐标
      offsetX: 0, // X偏移长度
      offsetY: 0, // Y偏移长度
      scrollDirection: 0, // 偏移方向 1 右侧 -1 左侧
      slides: [],
      itemSize: 0,
      offset: 0
    }
  },
  props: {
    injectData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    lists () {
      return this.injectData.list
    },
    docts () {
      return this.slides.length
    },
    trackStyle () {
      return `
        transform: translate(-${0}px);
        transition: all ${2}s ease;
      `
    }
  },
  methods: {
    onTouchStart (e) {
      this.touch = e.targetTouches[0] // 取得第一个touch的坐标值
      this.startPos = {x: this.touch.pageX, y: this.touch.pageY}
      this.scrollDirection = 0
      this.itemSize = e.target.scrollWidth
    },
    onTouchMove (e) {
      let { startPos } = this
      if (e.targetTouches.length > 1) {
        return
      }
      this.touch = e.targetTouches[0]
      this.endPos = {x: this.touch.pageX, y: this.touch.pageY}
      // 判断滑动距离超过当前元素的25%计算出滑动方向，向右为1，向左为-1
      // this.scrollDirection = this.touch.pageX - startPos.x > currentWidth ? 1 : this.touch.pageX - startPos.x < -currentWidth ? -1 : 0

      this.offsetX = startPos.x - this.endPos.x
      this.offsetY = startPos.y - this.endPos.y
      this.move()
    },
    onTouchEnd (e) {
      this.move()
      // console.log(e.target.scrollWidth)
    },
    onTransitionend (e) {},
    move () {
      let { scrollDirection, startPos, endPos, offsetX, offsetY, itemSize } = this
      console.log(`起始位置在 X: ${startPos.x}, Y: ${startPos.y} ;结束位置在 X: ${endPos.x}, Y: ${endPos.y}, 滑动方向为 ${scrollDirection}`)
      console.log(`横向移动 ${offsetX}, 纵向移动 ${offsetY}`)
      let slideLgn = itemSize / 4
      offsetX = offsetX > 0 && offsetX > slideLgn ? itemSize : offsetX < 0 && offsetX < -slideLgn ? -itemSize : offsetX
      console.log('offsetX', offsetX)
      // this.offsetX = -offsetX
      // if (offsetX) {}
      // this.offset =  offset - this.active * this.itemSize
    }
  }
}
</script>

<style lang="css" scoped>
.slide{
  position: relative;
}
.slide-groups{
  overflow-x: scroll;
}
.slide-group{
  width: 2250px;
  height: 200px;
  /* line-height: 16; */
  background-color: aqua;
}
.docts{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
}
.doct{
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: yellowgreen;
  margin-right: 10px;
  border-radius: 15px;
}
.doct:last-child{
  margin-right: 0px;
}
</style>
