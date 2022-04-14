'use strict'

var gMeme
const gFillColor = '#ffffff'
const gStrokeColor = 'black'
const gSize = 40
let gAlign = 'center'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [_createLine()]
}

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

function getTextByLineIdx(lineIdx) {
    return gMeme.lines[lineIdx]
}



function setLineText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function getLineText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt
}

function setFillColor(fillColor) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = fillColor
}

function getFillColor() {
    return gMeme.lines[gMeme.selectedLineIdx].fillColor
}

function setStrokeColor(strokeColor) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = strokeColor
}
function getStrokeColor() {
    return gMeme.lines[gMeme.selectedLineIdx].strokeColor
}

function addLine(txt, size = gSize, align = gAlign, fillColor = gFillColor, strokeColor = gStrokeColor) {
    const line = _createLine(txt, size, align, fillColor, strokeColor)
    gMeme.lines.push(line)
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size--
    console.log(gMeme.lines[gMeme.selectedLineIdx].size)
}
function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size++
    console.log(gMeme.lines[gMeme.selectedLineIdx].size)
}

function switchLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
    console.log(gMeme.selectedLineIdx)
}

function setAlign(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align
    gAlign = align
}

// function  removeLine(){
//     gMeme.lines[gMeme.selectedLineIdx].txt = ' '
//     gMeme.lines.splice(gMeme.selectedLineIdx,1)
//     switchLine() 
// }

function _createLine(txt = ' ', size = gSize, align = gAlign, fillColor = gFillColor, strokeColor = gStrokeColor) {
    return {
        txt,
        size,
        align,
        fillColor,
        strokeColor
    }
}

