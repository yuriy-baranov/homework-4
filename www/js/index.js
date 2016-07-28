document.addEventListener('deviceready', appStart);

var effectIsMaking = false;

function appStart() {
    StatusBar.hide();
    document.querySelector('.range-slider__input').addEventListener('input', addEffect);
    document.querySelector('.shot-button').addEventListener('click', getPhoto);
}

function addEffect() {
    if (effectIsMaking) {
        return;
    }
    setTimeout(function() {
        effectIsMaking = false;
    }, 200);
    effectIsMaking = true;
    makeGrayScale(115 - Math.floor(this.value));
}

function getPhoto() {
    navigator.camera.getPicture(show, err, { correctOrientation: true });
}

function checkIfFile(s) {
    var sub = s.substr(0, 5);
    return sub === 'file:';
}

function show(data) {
    var img = document.querySelector('.camera-output');
    
    if (checkIfFile(data)) {
        img.src = data;
    }
    else {
        img.src = 'data:image/gif;base64,' + data;
    }
    
    var canvas = document.querySelector('.photo-field');

    img.onload = function() {
        var w = img.width, h = img.height;
        canvas.width = w;
        canvas.height = h;
        makeGrayScale(50);
    };
}

function err() {
    alert('Ошибка, не удалось сделать фото');
}
