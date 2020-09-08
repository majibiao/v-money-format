<template lang="html">
  <div class="container">
    <hr>
    组件：<money-format v-model="compVal" :config="config"></money-format>
    <hr>
    指令：<input type="text" v-model="directiveVal" v-money-format />
    <hr>
    <button @click="show">展示</button>
  </div>
</template>

<script>
import Vue from 'vue'
import vMoneyFormat from './index'
import MoneyFormat from './component'

Vue.use(vMoneyFormat, { precision: 2 })

export default {
  data () {
    return {
      compVal: 374924.2333,
      directiveVal: 12342.3444,
      config: { precision: 2 }
    }
  },
  watch: {
    compVal (nv) {
      console.log(nv)
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
