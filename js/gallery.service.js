const STORAGE_KEY = 'galleryDB'
var gImgs
var gCurrImg

_createImgs()

function getImgs() {
    return gImgs
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
            _createImg(1, 'img/square/1.jpg', ['funny', 'cat']),
            _createImg(2, 'img/square/2.jpg', ['funny', 'cat']),
            _createImg(3, 'img/square/3.jpg', ['funny', 'cat']),
            _createImg(4, 'img/square/4.jpg', ['funny', 'cat']),
            _createImg(5, 'img/square/5.jpg', ['funny', 'cat']),
            _createImg(6, 'img/square/6.jpg', ['funny', 'cat']),
            _createImg(7, 'img/square/7.jpg', ['funny', 'cat']),
            _createImg(8, 'img/square/8.jpg', ['funny', 'cat']),
            _createImg(9, 'img/square/9.jpg', ['funny', 'cat']),
            _createImg(10, 'img/square/10.jpg', ['funny', 'cat']),
            _createImg(11, 'img/square/11.jpg', ['funny', 'cat']),
            _createImg(12, 'img/square/12.jpg', ['funny', 'cat']),
            _createImg(13, 'img/square/13.jpg', ['funny', 'cat']),
            _createImg(14, 'img/square/14.jpg', ['funny', 'cat']),
            _createImg(15, 'img/square/15.jpg', ['funny', 'cat']),
            _createImg(16, 'img/square/16.jpg', ['funny', 'cat']),
            _createImg(17, 'img/square/17.jpg', ['funny', 'cat']),
            _createImg(18, 'img/square/18.jpg', ['funny', 'cat']),

        ]
    }
    gImgs = imgs
    _saveToStorage()
}

function _createImg(id, url, keywords = []) {
    return {
        id,
        url,
        keywords
    }
}

function _saveToStorage() {
    saveToStorage(STORAGE_KEY, gImgs)
}