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
    clearCanvas()
    const lines = getLines()
    
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i]
        drawText(line.txt, i)
        gCtx.globalCompositeOperation = 'destination-over';
    }
    
    drawImg(getCurrImg().url)
    drawRect()
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
    const x = gElCanvas.width * 0.1
    let y

    if (currLineIdx === 0) {
        y = 0.05 * (gElCanvas.height)
    } else if (currLineIdx === 1) {
        y = 0.85 * (gElCanvas.height)
    }else{
        y = 0.45 * (gElCanvas.height)
    }
    gCtx.beginPath();
    gCtx.lineWidth = 1
    gCtx.rect(x, y, gElCanvas.width - x * 2, 50);
    gCtx.strokeStyle = '#8a8a8a'
    gCtx.stroke();
    gCtx.closePath();
}

function drawText(text, pos) {
    let x
    let y

    if (pos === 0) {
        x = gElCanvas.width / 2
        y = 0.1 * (gElCanvas.height)
    } else if (pos === 1) {
        x = gElCanvas.width / 2
        y = 0.9 * (gElCanvas.height)
    } else {
        x = gElCanvas.width / 2
        y = gElCanvas.height / 2
    }
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = 'center'
    gCtx.font = '40px Impact'
    gCtx.lineWidth = 2
    gCtx.fillStyle = '#ffffff'
    gCtx.fillText(text, x, y)
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(text, x, y)
}

function onAddRow() {
    const elInput = document.querySelector('.meme-text')
    elInput.value = ' '
    increaseLineIdx()
    addLine(' ', 20, 'align', 'color')
    renderMeme()
}

// function drawText(ev) {
//     const { offsetX, offsetY } = ev
//     console.log(offsetX, offsetY)
//     const x = gElCanvas.width/2
//     const y = 0.1*(gElCanvas.height)

//     gCtx.textBaseline = 'middle';
//     gCtx.textAlign = 'center';
//     gCtx.font = '50px Impact';
//     gCtx.lineWidth = 2;
//     gCtx.fillStyle = '#ffffff';
//     gCtx.fillText('TEST', x, y);
//     gCtx.strokeStyle = 'black';
//     gCtx.strokeText('TEST', x, y);
// }

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