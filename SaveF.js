function getFontS() {
    var x = document.getElementById('fontS');
    var currentVal = x.value;

    var y = document.getElementById('SV').innerHTML = currentVal;

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

    var texa = text.innerText.replace("\n");

    var fileName = x.value;
    var fileContent = texa;
    var myFile = new Blob([fileContent], { type: 'text/plain' });

    window.URL = window.URL || window.webkitURL;
    document.getElementById('download').setAttribute('href', window.URL.createObjectURL(myFile));
    document.getElementById('download').setAttribute('download', fileName);
}

document.getElementById('btnOpen').onclick = function() {
    openFile(function(txt) {
        document.getElementById('texta').innerText = txt;
    });
}

function openFile(callBack) {
    var element = document.createElement('input');
    element.setAttribute('type', "file");
    element.setAttribute('id', "btnOpenFile");
    element.onchange = function() {
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
        reader.onload = function(e) {
            output = e.target.result;
            callBack(output);
        }; //end onload()
        reader.readAsText(filePath.files[0]);
    } //end if html5 filelist support
    else { //this is where you could fallback to Java Applet, Flash or similar
        return false;
    }
    return true;
}

function printpage() {
    var print_div = document.getElementById("texta");
    var print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    print_area.document.close();
    print_area.focus();
    print_area.print();
    print_area.close();
}

function slimeTheme() {
    // var textArea = document.getElementById('texta');
    // var nav = document.getElementById('nav-home-tab');
    // var nav1 = document.getElementById('nav-profile-tab');
    // var nav2 = document.getElementById('nav-contact-tab');
    // var c = document.getElementsByClassName('mainP');
    // var b = document.getElementsByClassName('bod');

    // var bk = document.getElementById('back');

    // for (var i = 0; i < c.length; i++) {
    //     c[i].style.color = "#7c9473";
    // }

    // for (var i = 0; i < b.length; i++) {
    //     b[i].style.backgroundColor = "#e8eae6";
    // }

    // textArea.style.backgroundColor = "#e8eae6";
    // textArea.style.color = "#7c9473";

    // nav.style.backgroundColor = "#cfdac8";
    // nav.style.color = "#7c9473";
    // nav1.style.backgroundColor = "#cfdac8";
    // nav1.style.color = "#7c9473";
    // nav2.style.backgroundColor = "#cfdac8";
    // nav2.style.color = "#7c9473";
    //man.style.color = "#7c9473";
    // bod.style.backgroundColor = "#e8eae6";
    window.location.href = 'index.html';
}


function forestTheme() {
    // var textArea = document.getElementById('texta');
    // var nav = document.getElementById('nav-home-tab');
    // var nav1 = document.getElementById('nav-profile-tab');
    // var nav2 = document.getElementById('nav-contact-tab');
    // var c = document.getElementsByClassName('mainP');
    // var b = document.getElementsByClassName('bod');
    // var but = document.getElementsByClassName('but');

    // var bk = document.getElementById('back');

    // for (var i = 0; i < c.length; i++) {
    //     c[i].style.color = "#aa8976";
    // }

    // for (var i = 0; i < but.length; i++) {
    //     but[i].style.color = "#70af85";
    //     but[i].style.borderColor = "#70af85";
    // }

    // for (var i = 0; i < b.length; i++) {
    //     b[i].style.backgroundColor = "#c6ebc9";
    // }

    // textArea.style.backgroundColor = "#c6ebc9";
    // textArea.style.color = "#aa8976";

    // nav.style.backgroundColor = "#70af85";
    // nav.style.color = "#c6ebc9";
    // nav1.style.backgroundColor = "#70af85";
    // nav1.style.color = "#c6ebc9";
    // nav2.style.backgroundColor = "#70af85";
    // nav2.style.color = "#c6ebc9";
    window.location.href = 'Forest.html';
}

function seablueTheme() {
    // var textArea = document.getElementById('texta');
    // var nav = document.getElementById('nav-home-tab');
    // var nav1 = document.getElementById('nav-profile-tab');
    // var nav2 = document.getElementById('nav-contact-tab');
    // var c = document.getElementsByClassName('mainP');
    // var b = document.getElementsByClassName('bod');
    // var but = document.getElementsByClassName('.btn-outline-success');

    // for (var i = 0; i < c.length; i++) {
    //     c[i].style.color = "#00587a";
    // }

    // for (var i = 0; i < b.length; i++) {
    //     b[i].style.backgroundColor = "#e7e7de";
    // }



    // textArea.style.backgroundColor = "#e7e7de";
    // textArea.style.color = "#0f3057";

    // nav.style.backgroundColor = "#00587a";
    // nav.style.color = "#e7e7de";
    // nav1.style.backgroundColor = "#00587a";
    // nav1.style.color = "#e7e7de";
    // nav2.style.backgroundColor = "#00587a";
    // nav2.style.color = "#e7e7de";
    // //man.style.color = "#7c9473";
    // // bod.style.backgroundColor = "#e8eae6";

    window.location.href = "Seablue.html";
}

d = document.getElementById('drop');

function checkT() {
    if (d.value == "slime") {
        slimeTheme();
    }
    if (d.value == "forest") {
        forestTheme();
    }
    if (d.value == "sea blue") {
        seablueTheme();
    }
}

// var x = document.getElementById('filename');

// var fileName = x.value + '.txt';
// var fileContent = 'Page content...';
// var myFile = new Blob([fileContent], { type: 'text/plain' });

// window.URL = window.URL || window.webkitURL;
// document.getElementById('download').setAttribute('href', window.URL.createObjectURL(myFile));
// document.getElementById('download').setAttribute('download', fileName);

var interval = setInterval(getFontS, 10);
var interval = setInterval(getFontS, 10);