<template lang="html">
  <input type="text"
    :value="formattedValue"
    @change="change"
    v-money-format="{precision}"
    />
</template>

<script>
import money from './directive'
import defaults from './options'

export default {
  name: 'Money-Format',
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: 0
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: () => defaults.precision
    }
  },

  directives: {money},

  data () {
    return {
      formattedValue: ''
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (nv) {
        console.log(nv)
        if (nv !== this.formattedValue) {
          this.formattedValue = nv
        }
      }
    }
  },

  methods: {
    change (evt) {
      console.log(evt)
      console.log(typeof evt.target.value)
      this.$emit('input', evt.target.value)
    }
  }
}
</script>
