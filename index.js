let zp = document.getElementById('zp')
let days = document.getElementById('days')
let button = document.getElementById('button')
let cash = document.getElementById('cash')

cashSummary = () => {
  cash.innerHTML = Math.round((zp.value / 29.3) * days.value)
}

days.onkeyup = cashSummary
zp.onkeyup = cashSummary
