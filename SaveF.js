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

document.getElementById('btnOpen').onclick = function () {
    openFile(function (txt) {
        document.getElementById('texta').innerText = txt;
    });
}

function openFile(callBack) {
    var element = document.createElement('input');
    element.setAttribute('type', "file");
    element.setAttribute('id', "btnOpenFile");
    element.onchange = function () {
        readText(this, callBack);
        document.body.removeChild(this);
    }

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
}

function readText(filePath, callBack) {
    var reader;
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        reader = new FileReader();
    } else {
        alert('The File APIs are not fully supported by your browser. Fallback required.');
        return false;
    }
    var output = ""; //placeholder for text output
    if (filePath.files && filePath.files[0]) {
        reader.onload = function (e) {
            output = e.target.result;
            callBack(output);
        };//end onload()
        reader.readAsText(filePath.files[0]);
    }//end if html5 filelist support
    else { //this is where you could fallback to Java Applet, Flash or similar
        return false;
    }
    return true;
}

// var x = document.getElementById('filename');

// var fileName = x.value + '.txt';
// var fileContent = 'Page content...';
// var myFile = new Blob([fileContent], { type: 'text/plain' });

// window.URL = window.URL || window.webkitURL;
// document.getElementById('download').setAttribute('href', window.URL.createObjectURL(myFile));
// document.getElementById('download').setAttribute('download', fileName);

var interval = setInterval(getFontS, 10);