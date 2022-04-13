'use strict'

var gElCanvas
var gCtx


function onInit() {

    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');

    addListeners()
    resizeCanvas()
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function addListeners() {
    window.addEventListener('resize', resizeCanvas)
}