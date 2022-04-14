'use strict'

// var gMeme

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{ txt: ' ', size: 20, align: 'left', color: 'red' }]
}

// var gMeme = {
//     selectedImgId: 1,
//     selectedLineIdx: 0,
//     lines: []
// }


function getMeme() {
    return gMeme
}

function setImg(id) {
    gMeme.selectedImgId = id
    console.log('gMeme', gMeme)
}

function getLineIdx() {
    return gMeme.selectedLineIdx
}

function increaseLineIdx() {
    gMeme.selectedLineIdx++
}

function getLines() {
    return gMeme.lines
}

function getTextByLineIdx(lineIdx){
    return gMeme.lines[lineIdx]
}

function setLineText(txt){
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function getLineText(){
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function addLine(txt, size, align, color) {
    const line = _createLine(txt, size, align, color)
    gMeme.lines.push(line)
    // increaseIneIdx()
}

function _createLine(txt, size, align, color) {
    return {
        txt,
        size,
        align,
        color
    }
}

