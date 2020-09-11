# v-money-format #

实现一个Vue的自定义金额格式化组件和指令，组件名：money-format;指令名：v-money-format
(指令既可以添加到原生input元素上，也可以添加到antd，iview，element中input组件上)

![money](http://qgfpzxtq0.hb-bkt.clouddn.com/money.gif)

### 使用方法

> #### `注意：组件使用和指令使用时，v-model绑定时都需要加 .lazy 修饰符`

##### 全局使用

```javascript
import Vue from 'vue'
import moneyFormat from 'v-money-format'

// register directive v-money-format and component <money-format>
Vue.use(moneyFormat, { precision: 2 })
```

##### 作为组件使用

```vue
<template>
  <div>
    <money-format v-model.lazy="price" v-bind:config="config"></money-format>
  </div>
</template>

<script>
  import { MoneyFormat } from 'v-money-format'

  export default {
    components: { MoneyFormat },

    data () {
      return {
        price: 123.45,
        config: {
          thousands: '.',
          precision: 2
        }
      }
    }
  }
</script>
```

##### 作为指令使用

```vue
<template>
  <div>
    <input v-model.lazy="price" v-money-format="config" />
  </div>
</template>

<script>
  import { VMoneyFormat } from 'v-money-format'

  export default {
    data () {
      return {
        price: 123.45,
        config: {
          thousands: '.',
          precision: 2
        }
      }
    },

    directives: { 'money-format': VMoneyFormat }
  }
</script>
```

### 属性参数

| property  | Required | Type   | Default | Description  |
| --------- | -------- | ------ | ------- | ------------ |
| precision | true     | Number | 2       | 小数位数     |
| thousands | false    | String | ，      | 千分位分隔符 |

