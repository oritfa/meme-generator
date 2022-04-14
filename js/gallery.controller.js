'use strict'

function renderImgs() {
    const imgs = getImgs()
    console.log(imgs)

    const elGrid = document.querySelector('.grid')
    const strHTMLs = imgs.map(img => `
    <img src="${img.url}" onclick="onImgSelect(${img.id})">
    `)
    elGrid.innerHTML = strHTMLs.join('')

}


function onImgSelect(id) {
    console.log('onImgSelect')
    setCurrImg(id)
    setImg(id)
    navigateTo('meme-editor')
    onMemeEditorLoad()
}

function onNavigateToGallery() {
    navigateTo('image-gallery')

}

function navigateTo(sectionId) {
    console.log('navigateTo')
    const elGallery = document.querySelector('#image-gallery')
    const elEditor = document.querySelector('#meme-editor')
    switch (sectionId) {

        case 'image-gallery':
            elGallery.hidden = false
            elEditor.hidden = true
            break;
        case 'meme-editor':
            elGallery.hidden = true
            elEditor.hidden = false
            break;
    }
}