let count = 0

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('test')
  button.onclick = () => {
    count++
    if (count === 1) {
      alert('НИХУА')
    }
    if (count === 5) {
      alert('ДАВАЙ ЕЩЕ')
    }
    if (count === 30) {
      alert('МАЛО РАЗ КЛИКНУЛ')
    }
    if (count === 50) {
      alert('И ЭТО ВСЁ?')
    }
    if (count === 53) {
      window.location.href = "./hb.html"
    }
  }
});