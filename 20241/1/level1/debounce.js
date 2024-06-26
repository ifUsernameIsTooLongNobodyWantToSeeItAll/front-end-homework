function debounce(fn, delay = 500) {
    let lastTime = new Date(0)
    console.log(`lastTime = ${lastTime}`)
    return function () {
        let nowTime = Date.now()
        console.log(`nowTime = ${nowTime}`)
        if (nowTime - lastTime > delay) {
            lastTime = nowTime
            return fn.apply(this, arguments);
        }
    }
}

let input = document.querySelector("#textArea")
let show = document.querySelector("#result")
input.addEventListener("click", debounce(function () {
    show.textContent = input.value
}))