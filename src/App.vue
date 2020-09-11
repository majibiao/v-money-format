<template>
  <div id="app">
    <!-- 打开注释切换不同场景 -->
    <!-- 测试指令绑定到非input框的问题 -->
    <p v-money-format>123124556</p>

    <!-- 基础引入组件和指令 -->
    <!-- <p>基础组件：<money-format v-model.lazy="compVal" :config="compConfig"></money-format></p> -->
    <!-- <p>基础指令：<input type="text" v-model.lazy="directiveVal" v-money-format="directiveConfig" /></p> -->

    <!-- 添加对应的组件库的样式，就是增加对应组件库的组件的类名 -->

    <!-- <p>基础组件添加iview样式：<money-format v-model.lazy="compVal" :config="compConfig" class="ivu-input ivu-input-default"></money-format></p> -->
    <!-- <p>基础组件添加antd样式：<money-format v-model.lazy="compVal" :config="compConfig" class="ant-input"></money-format></p> -->
    <!-- <p>基础组件添加element样式：<money-format v-model.lazy="compVal" :config="compConfig" class="el-input__inner"></money-format></p> -->

    <!-- 对应组件库引入指令 -->

    <!-- <p>iview组件库：<i-input v-model.lazy="directiveVal" type="text" v-money-format /></p> -->
    <p>antd组件库：<a-input v-model.lazy="directiveVal" type="text" v-money-format /></p>
    <!-- <p>element组件库：<el-input v-model.lazy="directiveVal" type="text" v-money-format></el-input></p> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      compVal: 374924.23,
      directiveVal: 12342.34,
      compConfig: { precision: 2, thousands: ',' },
      directiveConfig: { precision: 2, thousands: ',' }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app p {
  margin: 20px;
}
</style>
