const { Duration, DateTime } = luxon
const end = DateTime.fromISO('2022-01-31')
const timeLeft = document.getElementById('timeLeft')

function reactiveTime () {
    const now = DateTime.now()
    const duration = Duration.fromMillis(end - now)
    let output
    if (duration < 0) {
        output = '<b class="red-text">หมดเขตแล้ว!</b>'
    } else {
        output = `<b class="green-text">${duration.toFormat('d วัน h ชั่วโมง m นาที s วินาที')}</b>`
    }
    timeLeft.innerHTML = output
}

reactiveTime()
setInterval(reactiveTime, 1000)