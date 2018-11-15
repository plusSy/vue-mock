<template>
  <div>
     <el-date-picker
      v-model="filter.date"
      type="date"
      placeholder="选择日期"
      :pickerOptions="pickerOptions">
    </el-date-picker>
    {{ filter.date }}

    <hr>
    <el-button @click="resetData">重置</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElementUI',
  data () {
    return {
      filter: {
        date: null,
        days: 1
      },
      pickerOptions: {
        disabledDate: (date) => {
          let curDate = new Date();
          curDate.setTime(curDate.getTime() - 3600 * 1000 * 24 * this.filter.days);
          let range = date.valueOf() < Date.parse(curDate)
          return range
        }
      }
    }
  },
  methods: {
    /**
     * 重置按钮 将原始值清空 并且 将限制日期 从昨天 变成了一周前
     */
    resetData () {
      this.filter.date = '';
      this.filter.days = 7;
    }
  }
}
</script>

