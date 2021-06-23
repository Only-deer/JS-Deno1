
var div = document.createElement('div');
div.className = 'demo'
document.body.appendChild(div);

// console.log(1)
var dragging = false
var lastX
var lastY

div.onmousedown = function (e) {
    // console.log('原始位置')
    // console.log(e.clientX, e.clientY)
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}
document.body.onmouseover = function (e) {
    // console.log(2)
    if (dragging === true) {
        // console.log(3)
        // console.log(lastX, lastY)
        // console.log(e.clientX, e.clientY)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div.style.top) || 0
        var left = parseInt(div.style.left) || 0
        console.log('div.style.top')
        console.log(div.style.top)
        var resultY = top + deltaY
        var resultX = top + deltaX
        if (resultY < 0) {
            resultY = 0
        }
        if (resultX < 0) {
            resultX = 0
        }

        div.style.top = top + deltaY + 'px'
        div.style.left = left + deltaX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}
document.body.onmouseup = function () {
    dragging = false
}
