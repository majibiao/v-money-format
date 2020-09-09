<template>
  <div class="container">
    <hr>
    组件：<money-format v-model.lazy="compVal" :config="config"></money-format>
    <hr>
    指令：<input type="text" v-model.lazy="directiveVal" v-money-format />
    <hr>
    <button @click="show">展示</button>
  </div>
</template>

<script>
import Vue from 'vue'
import vMoneyFormat from './src/index'
import MoneyFormat from './src/component'

Vue.use(vMoneyFormat, { precision: 2, thousands: ',' })

export default {
  data () {
    return {
      compVal: 374924.23,
      directiveVal: 12342.34,
      config: { precision: 2, thousands: ',' }
    }
  },
  methods: {
    show () {
      console.log(this.compVal)
      console.log(this.directiveVal)
    }
  },
  components: {
    MoneyFormat
  }
}
</script>

<style lang="css">
body {
  background-color: #eee;
  text-align: center;
}
.container {
  margin-top: 50px;
}
input {
  font-family: monospace;
  font-size: 1.8rem !important;
}
</style>
