'use strict'
var gElCanvas
var gCtx


function onMemeEditorLoad() {
    gElCanvas = document.querySelector('.canvas')
    gCtx = gElCanvas.getContext('2d')
    addListeners()
    resizeCanvas()
    renderMeme()
}

function renderMeme() {
    renderLines()
    drawRect()
}

function renderLines(){
    clearCanvas()
    const lines = getLines()

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i]
        const { txt, size, align, fillColor, strokeColor, fontFamily } = line
        const font = size + 'px ' + fontFamily
        drawText(txt, i, fillColor, strokeColor, font, align)
        gCtx.globalCompositeOperation = 'destination-over';
    }
    drawImg(getCurrImg().url)
}

function drawImg(url) {
    var img = new Image()
    img.src = url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    }
}

function onAddText(txt) {
    setLineText(txt)
    renderMeme()
}

function drawRect() {
    const currLineIdx = getLineIdx()
    const x = gElCanvas.width * 0.15
    let y

    if (currLineIdx === 0) {
        y = 0.05 * (gElCanvas.height)
    } else if (currLineIdx === 1) {
        y = 0.85 * (gElCanvas.height)
    } else {
        y = 0.45 * (gElCanvas.height)
    }
    gCtx.beginPath();
    gCtx.lineWidth = 1
    gCtx.rect(x, y, gElCanvas.width - x * 2, 50);
    gCtx.strokeStyle = '#8a8a8a'
    gCtx.stroke();
    gCtx.closePath();
}

function drawText(text, pos, fillColor, strokeColor, font, align) {
    let x
    let y
    if (align === 'center') {
        x = gElCanvas.width / 2
        gCtx.textAlign = 'center'
    } else if (align === 'left') {
        x = gElCanvas.width * 0.1
        gCtx.textAlign = 'start'

    } else if (align === 'right') {
        x = gElCanvas.width * 0.9
        gCtx.textAlign = 'end'
    }

    if (pos === 0) {
        y = 0.1 * (gElCanvas.height)
    } else if (pos === 1) {
        y = 0.9 * (gElCanvas.height)
    } else {
        y = gElCanvas.height / 2
    }

    gCtx.textBaseline = 'middle'
    gCtx.font = font
    gCtx.lineWidth = 2
    gCtx.fillStyle = fillColor
    gCtx.fillText(text, x, y)
    gCtx.strokeStyle = strokeColor
    gCtx.strokeText(text, x, y)
}



function onAddRow() {
    const elInput = document.querySelector('.meme-text')
    elInput.value = ' '
    addLine()
    renderMeme()
}

function onChangeFillColor(color) {
    setFillColor(color)
    renderMeme()
}
function onChangeStrokeColor(color) {
    setStrokeColor(color)
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()

}
function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
}

function onAlign(align, btn){
    var elbtn = document.querySelector('.selected')
    elbtn.classList.remove('selected')
    setAlign(align)
    btn.classList.add('selected')
    renderMeme()
}

function onRemoveLine(){
    removeLine()
    renderMeme()
}

function onSetFont(fontFamily){
    setFont(fontFamily)
    renderMeme()
}

function onSave(){
    renderLines()
}


function onDownloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-meme'
}

function clearCanvas() {
    gCtx.clearRect(0, 0, canvas.height, canvas.width)
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
    renderMeme()
}

function addListeners() {
    window.addEventListener('resize', resizeCanvas)
}

