function moneyFormat (money, len) {
  len = len || 2
  if (!money && money !== 0) return ''
  if (isNaN(+money)) return ''
  if (money === 0 || money === '0') return '0.' + '0'.repeat(len)
  var arr = (money + '').split('.')
  var intStr = arr[0] ? arr[0] : 0
  var floatStr = arr[1] ? arr[1] : 0
  if (floatStr === 0) {
    floatStr = 0
    for (var i = 0; i < len - 1; i++) {
      floatStr += '0'
    }
  } else {
    floatStr = (+('0.' + floatStr)).toFixed(len).split('.')[1]
  }
  money = (intStr + '.' + floatStr).replace(/(\d{1,3})(?=(?:\d{3})+\.)/g, '$1,')
  return money
}

function assign (defaults, extras) {
  defaults = defaults || {}
  extras = extras || {}
  return Object.keys(defaults).concat(Object.keys(extras)).reduce( function (acc, val) {
    acc[val] = extras[val] === undefined ? defaults[val] : extras[val]
    return acc
  }, {})
}

export {
  moneyFormat,
  assign
}
