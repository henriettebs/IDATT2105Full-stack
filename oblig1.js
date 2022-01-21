var hide = function hidePicture(){
    var img = document.getElementById("css-pic");
    if(img.style.display === "none"){
        img.style.display = "inline";
    }else{
        img.style.display = "none";
    }
}

function showArray(){
    let exampleArray = ['C', 'S', 'S', 'tutorial', 'for','developers'],
        ul = document.createElement('ul');
    document.getElementById('arrayCSS').appendChild(ul);
    exampleArray.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML += item;
    });
    var removePara = document.getElementById("paragraphRemove");
    removePara.parentNode.removeChild(removePara);
}

var count = 0;
var numberCSS = document.getElementById("number");

var i = function increaseNumberByClick() {
    count++;
    numberCSS.innerHTML = count;
}

var r = function resetNumber() {
    count = 0;
    numberCSS.innerHTML = 0;
}