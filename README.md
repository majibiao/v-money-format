# v-money-format #

实现一个Vue的自定义金额格式化组件和指令，组件名：money-format;指令名：v-money-format

![money](C:\Users\123\Desktop\money.gif)

### 用法

> 前提：全局下载 `@vue/cli-service-global`包
>
> `npm install -g @vue/cli-service-global`

```javascript
import Vue from 'vue'
import moneyFormat from 'v-money-format-v'

// register directive v-money-format-v and component <money-format-v>
Vue.use(moneyFormat, {precision: 2})
```

##### 作为组件使用

```vue
<template>
  <div>
    <money v-model.lazy="price" v-bind:config="config"></money> {{price}}
  </div>
</template>

<script>
  import { MoneyFormat } from 'v-money-format-v'

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
    <input v-model.lazy="price" v-money-format="config" /> {{price}}
  </div>
</template>

<script>
  import {VMoneyFormat} from 'v-money-format-v'

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

