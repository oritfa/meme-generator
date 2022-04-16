const STORAGE_KEY = 'galleryDB'
let gImgs
let gCurrImg
let gFilterBy = ''

_createImgs()

function getImgs() {
    if (!gFilterBy) return gImgs

    var imgs = gImgs.filter(img => img.keywords.includes(gFilterBy))
    console.log(imgs)
    return imgs
}

function setFilter(category) {
    if(category==='') gFilterBy = ''
    else gFilterBy = category 

}

function getCurrImg() {
    return gCurrImg
}

function setCurrImg(id) {
    gCurrImg = getImgById(id)
}

function getImgById(id) {
    const img = gImgs.find(img => img.id === id)
    return img

}


function _createImgs() {

    var imgs = loadFromStorage(STORAGE_KEY)
    if (!imgs || !imgs.length) {
        imgs = [
            _createImg(1, 'img/square/1.jpg', ['funny', 'Sarcastic']),
            _createImg(2, 'img/square/2.jpg', ['funny', 'Animal', 'Happy']),
            _createImg(3, 'img/square/3.jpg', ['funny', 'Animal', 'Baby', 'Happy']),
            _createImg(4, 'img/square/4.jpg', ['funny', 'Animal', 'Happy']),
            _createImg(5, 'img/square/5.jpg', ['funny', 'Baby', 'Sarcastic', 'Happy']),
            _createImg(6, 'img/square/6.jpg', ['funny', 'Sarcastic']),
            _createImg(7, 'img/square/7.jpg', ['funny', 'Baby', 'Sarcastic', 'Happy']),
            _createImg(8, 'img/square/8.jpg', ['funny', 'Sarcastic', 'Happy', 'Crazy']),
            _createImg(9, 'img/square/9.jpg', ['funny', 'Sarcastic', 'Happy', 'Crazy']),
            _createImg(10, 'img/square/10.jpg', ['funny', 'Sarcastic', 'Happy']),
            _createImg(11, 'img/square/11.jpg', ['funny', 'Happy']),
            _createImg(12, 'img/square/12.jpg', ['funny', 'Sarcastic']),
            _createImg(13, 'img/square/13.jpg', ['funny', 'Sarcastic', 'Happy']),
            _createImg(14, 'img/square/14.jpg', ['funny', 'Sarcastic']),
            _createImg(15, 'img/square/15.jpg', ['funny', 'Sarcastic']),
            _createImg(16, 'img/square/16.jpg', ['funny', 'Sarcastic']),
            _createImg(17, 'img/square/17.jpg', ['funny', 'Sarcastic']),
            _createImg(18, 'img/square/18.jpg', ['funny', 'Sad']),

        ]
    }
    gImgs = imgs
    _saveToStorage()
}

function _createImg(id, url, keywords = ['Happy']) {
    return {
        id,
        url,
        keywords
    }
}

function _saveToStorage() {
    saveToStorage(STORAGE_KEY, gImgs)
}