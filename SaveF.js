function getFontS() {
    var x = document.getElementById('fontS');
    var currentVal = x.value;

    var y = document.getElementById('SV').innerHTML = currentVal;
    var currentVal = currentVal

}

function app() {
    var x = document.getElementById('fontS');
    var currentVal = x.value;

    var y = document.getElementById('SV').innerHTML = currentVal;

    var t = document.getElementById('texta');

    t.style.fontSize = currentVal + "px";
}

function fontapp() {
    var x = document.getElementById('font');

    var t = document.getElementById('texta');

    t.style.fontFamily = x.value;
}

function backapp() {
    var x = document.getElementById('back');
    var currentVal = x.value;

    var t = document.getElementById('texta');

    t.style.backgroundColor = x.value;
}

function tcapp() {
    var x = document.getElementById('forg');

    var t = document.getElementById('texta');

    t.style.color = x.value;
}

function print() {
    console.log("Hello");
}

function save() {
    var x = document.getElementById('filename');
    var text = document.getElementById('texta');

    var texa = text.innerHTML.replace(/<br\s*[\/]?>/gi, "\n")

    var fileName = x.value + '.txt';
    var fileContent = texa;
    var myFile = new Blob([fileContent], { type: 'text/plain' });

    window.URL = window.URL || window.webkitURL;
    document.getElementById('download').setAttribute('href', window.URL.createObjectURL(myFile));
    document.getElementById('download').setAttribute('download', fileName);
}

// var x = document.getElementById('filename');

// var fileName = x.value + '.txt';
// var fileContent = 'Page content...';
// var myFile = new Blob([fileContent], { type: 'text/plain' });

// window.URL = window.URL || window.webkitURL;
// document.getElementById('download').setAttribute('href', window.URL.createObjectURL(myFile));
// document.getElementById('download').setAttribute('download', fileName);

var interval = setInterval(getFontS, 10);