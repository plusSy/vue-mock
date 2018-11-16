<script>
let clickHandler = function () {
  console.log('123')
}
export default {
  name: 'RenderTemplate',
  render: function (h) {
    return h('div', {
      class: {
        baseClass: true,
        active: this.isActive
      },
      style: {
        fontSize: '18px'
      },
      // HTML特性
      attrs: {
        id: 'renderId'
      },
      // DOM 属性
      domProps: {
        innerHTML: 'render'
      },
      on: {
        click: this.clickHandler,
        mouseover: this.mouseoverHandler
      },
      nativeOn: {
        click: this.nativeClickHandler
      },
      scopedSlots: {
        default: props => createElement('span', props.text)
      }
    })
  },
  props: {
    isActive: {
      type: [Boolean],
      default: false
    },
    text: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    clickHandler () {
      this.$emit('click')
    },
    mouseoverHandler () {
      this.$emit('mouseoverHandler')
    }
  }

}
</script>

<style lang="css" scoped>
.baseClass{
  color: #543;
}
.active{
  color: red;
}
</style>

