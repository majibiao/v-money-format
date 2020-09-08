import { moneyFormat, assign } from './util'
import options from './options'

const money = (el, binding) => {
  const opt = assign(options, binding.value ? binding.value : {})
  console.log(binding.value)
  console.log(opt)
  if (!el.isFocus) {
    el.value = moneyFormat(el.value, opt.precision)
  }
  el.onfocus = function () {
    el.isFocus = true
    el.value = el.value.replace(/,/g, '')
  }
  el.onblur = function () {
    el.isFocus = false
    el.value = moneyFormat(el.value, opt.precision)
  }
  el.oninput = function () {
    const reg = new RegExp('^\\D*(\\d*(?:\\.\\d{0,' + opt.precision + '})?).*$', 'g')
    // const reg = new RegExp('^\\D*(\\d*(?:\\.\\d{0,2})?).*$', 'g')
    el.value = el.value.replace(/,/g, '').replace(reg, '$1').replace(/^(0)[^.]/g, '$1')
  }
}

export default money
