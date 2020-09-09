import { moneyFormat } from './util'
import options from './options'

const money = (el, binding) => {
  const opt = Object.assign(options, binding.value ? binding.value : {})
  if (!el.isFocus) {
    el.value = moneyFormat(el.value, opt.precision, opt.thousands)
  }
  el.onfocus = function () {
    el.isFocus = true
    el.value = el.value.replace(/,/g, '')
  }
  el.onblur = function () {
    el.isFocus = false
    el.value = moneyFormat(el.value, opt.precision, opt.thousands)
  }
  el.oninput = function () {
    const reg = new RegExp('^\\D*(\\d*(?:\\.\\d{0,' + opt.precision + '})?).*$', 'g')
    el.value = el.value.replace(new RegExp(opt.thousands, 'g'), '').replace(reg, '$1').replace(/^(0)[^.]/g, '$1')
  }
}

export default money
