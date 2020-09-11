<template>
  <input type="text"
    :value="formattedValue"
    @change="change"
    v-money-format="config"
    :disabled="disabled"
    />
</template>

<script>
import VMoneyFormat from '@/directives/VMoneyFormat'

export default {
  name: 'Money-Format',
  props: {
    value: {
      required: true,
      type: [Number, String],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: () => {
        return { precision: 2, thousands: ',' }
      }
    }
  },

  directives: { MoneyFormat: VMoneyFormat },

  data () {
    return {
      formattedValue: ''
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (nv) {
        if (nv !== this.formattedValue) {
          this.formattedValue = nv
        }
      }
    }
  },

  methods: {
    change (evt) {
      this.$emit('input', evt.target.value)
    }
  }
}
</script>
